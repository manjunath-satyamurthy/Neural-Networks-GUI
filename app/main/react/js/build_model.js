import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { ActionsComponent } from './components/actions.js';
import { Breadcrumb } from './components/breadcrumb.js';
import { FeatureSelection } from './components/feature_selection.js';
import { BuildLayers } from './components/build_layers.js';
import { LossFunction } from './components/loss_function.js';
import { Optimizers } from './components/optimizers.js';


class BuildModel extends Component {

  constructor(props) {
    super(props);
    this.state = {
    	currentTab: "feature_columns",
    	isHeaderLoaded: false,
    	columnsOptions: "loading",
    	selectedFeatures: [],
    	shouldShuffle: false,
    	batchSize: "Ex: 20",
    	bufferSize: "Ex: 1000",
    	epochs: "Ex: 50",
    	classColumn: "",
    	lossFunction: "",
    	cusomLossFunc: "",
    	lossFuncType: "standard",
    	hiddenLayers: [],
    	layerCount: 0,
    	hiddenLayersValues: {},
    }

    this.onTabChange = this.onTabChange.bind(this);
    this.navigate = this.navigate.bind(this);
    this.onChildUpdate = this.onChildUpdate.bind(this);
    this.onLayerUpdate = this.onLayerUpdate.bind(this);
  }


  onChildUpdate (e, state, value){
  	if (value){
  		this.setState({
  			[state]: value
  		});
  	} else if (state === "selectedFeatures"){
		let options = e.target.options;
		let cols = [];
		for (let i in options){
			if (options[i].selected){
				cols.push(options[i].value);
			};
		};
		this.setState({
			selectedFeatures: cols,
		});
  	} else {
  		this.setState({
  			[state]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
  		});
  	}
  }

  onLayerUpdate (e, property, layerCount){
  	let hiddenLayers = Object.assign({}, this.state.hiddenLayersValues)

  	if (!e){
  		if (hiddenLayers[layerCount] == undefined ){
	  		hiddenLayers[layerCount] = {}
	  		hiddenLayers[layerCount][property[0]] = ""
	  		hiddenLayers[layerCount][property[1]] = ""
  		}
  	} else {
		hiddenLayers[layerCount][property] = e.target.value
  	}

  	console.log(hiddenLayers)

	this.setState((prevState) => {
	  return {hiddenLayersValues: hiddenLayers};
	});
	

  }


  onTabChange (e) {
  	this.setState({
  		currentTab: e.target.attributes.name.nodeValue,
  	})
  }


  navigate(navigateTo){
  	let tabs = ["feature_columns", "build_layers", "loss_function", "optimizers"];
  	let tabIndex = parseInt(tabs.indexOf(this.state.currentTab));
  	let nextTab = null;
  	if (navigateTo === "next"){
  		nextTab = tabs[tabIndex+1]
  	} else if (navigateTo == "previous"){
  		nextTab = tabs[tabIndex-1]
  	}

  	this.setState({
  		currentTab: nextTab,
  	});

  }

  render() {

  	let content = null;
  	let previousBtn = <button type="button" className="btn btn-secondary" onClick={e => this.navigate("previous")} >Previous</button>;
  	let nextBtn = <button type="button" className="btn btn-secondary" onClick={e => this.navigate("next")}>Next</button>;

  	if (this.state.currentTab === "feature_columns"){
  		content = <div className="card border-secondary">
			<div className="card-header">Features & Initialization</div>
			<div className="card-body text-secondary">
				<FeatureSelection 
					updateStateFromChild={this.onChildUpdate} 
					state={this.state}
					isDataLoaded={this.state.isHeaderLoaded}
					columnsOptions={this.state.columnsOptions}
					selectedFeatures={this.state.selectedFeatures}  />
			</div>
  		</div>
  		previousBtn = null; 
  	} else if (this.state.currentTab === "build_layers"){
  		content = <div className="card border-secondary">
			<div className="card-header">Build Layers</div>
			<div className="card-body text-secondary">
				<BuildLayers updateStateFromChild={this.onChildUpdate}
					updateLayer={this.onLayerUpdate}
					state={this.state}
				/>
			</div>
  		</div>
  	} else if (this.state.currentTab === "loss_function"){
  		content = <div className="card border-secondary">
			<div className="card-header">Choose Loss Function</div>
			<div className="card-body text-secondary">
				<LossFunction updateStateFromChild={this.onChildUpdate}
					state={this.state} /> 
			</div>
  		</div>
  	} else if (this.state.currentTab === "optimizers"){
  		content = <div className="card border-secondary">
			<div className="card-header">Choose Optimization Function</div>
			<div className="card-body text-secondary">
				<Optimizers />
			</div>
  		</div>
  		nextBtn = <button type="button" className="btn btn-info">Finish</button>;
  	}

  	return (
		<div className="container-fluid top-margin-1">
			<div className="row justify-content-center">
				<div className="col-md-10">
					<Breadcrumb currentTab={this.state.currentTab} onCrumbClick={this.onTabChange}/>
				</div>
			</div>

	  		<div className="row justify-content-center">
		  		<div className="col-md-10">
					{content}
		  		</div>
	  		</div>

	  		<div className="row justify-content-center top-margin-1">
	  			<div className="col-md-10">
	  				<div className="row">
			  			<div className="col-md-6 text-left">{previousBtn}</div>
			  			<div className="col-md-6 text-right">{nextBtn}</div>
	  				</div>
	  			</div>
	  		</div>
			
	  	</div>
  	)
  }
}



ReactDOM.render((
  <BuildModel />
), document.getElementById('page-content'))