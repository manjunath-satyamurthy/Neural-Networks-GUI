import React, { Component } from "react";


class BuildLayers extends Component {

	constructor(props){
		super(props);
		this.onAddLayer = this.onAddLayer.bind(this);
	}


  	onAddLayer (layerCount) {
  		this.props.updateLayer(null, ["activationFunc", "neuronsCount"], this.props.state.layerCount+1);
  		this.props.updateStateFromChild(null, "layerCount", this.props.state.layerCount + 1);
		
  	}

	render (){

		let hiddenLayers = [];

		for (let i=1; i<=this.props.state.layerCount; i++){
	  		let inputNode = null;
	  		let selectNode = null;

	  		if (this.props.state.hiddenLayersValues[i] != undefined){
	  			inputNode = <input type="text" className="form-control" placeholder="No. of Neurons"
						onChange={e=>this.props.updateLayer(e, "neuronsCount", i)}
						value={this.props.state.hiddenLayersValues[i].neuronsCount} />

				selectNode = <select className="form-control form-control-sm top-margin-4"
					onChange={e=>this.props.updateLayer(e, "activationFunc", i)}
					value={this.props.state.hiddenLayersValues[i].activationFunc} >
					<option>Choose Activation Function</option>
					<option>Relu</option>
					<option>Sigmoid</option>
					<option>Softmax</option>
					<option>TanH</option>
				</select>
			  	
			  	let hiddenLayer = <div className="row align-items-end justify-content-center" key={i}>
					<div className="col-md-1">
						{ "Layer " + i + ":" }
					</div>
					<div className="col-sm-2 col-md-4 col-lg-">
						{inputNode}
					</div>
					<div className="col-sm-2 col-md-5 col-lg-5">
						{selectNode}
					</div>
			  	</div>

			  	hiddenLayers.push(hiddenLayer);
	  		}
		}


		return (
			<div>
				{hiddenLayers}
				<div className="row justify-content-center top-margin-4">
					<button type="button" className="btn btn-secondary"
						onClick={e=> this.onAddLayer(this.props.state.layerCount)}>
						Add Layer
					</button>
				</div>
			</div>
		);
	}

}

export { BuildLayers };