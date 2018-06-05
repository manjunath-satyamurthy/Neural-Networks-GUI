import React, { Component } from "react";


class ScaleRowsComponent extends Component {

	constructor(props){
		super(props);
		this.state = {
			colToScale: [],
			scaleFunction: 'standard',
			min_max_range: [],
			isMinMax: false,
			executionStatus: null,
			executionError: null,
			isLoading: false,
			options: ()=> {
			  	let options = [];
			  	for (let i in this.props.headers){
			  		options.push(<option key={i}>{this.props.headers[i]}</option>)
			  	}
			  	return options
			},
		}

		this.onArgumentsSelection = this.onArgumentsSelection.bind(this);
		this.execute = this.execute.bind(this);
		this.minmaxChange = this.minmaxChange.bind(this);
	}


	minmaxChange(e, name){
		let temp = this.state.min_max_range;
		if (name == "min"){
			temp[0] = e.target.value
		} else {
			temp[1] = e.target.value
		}
		this.setState({
			min_max_range: temp
		})
	}


	onArgumentsSelection(e, selectType){
		if (selectType == 'column'){
			let options = e.target.options
			let cols = []
			for (let i in options){
				if (options[i].selected){
					cols.push(options[i].value)
				}
			} 
			this.setState({
				colToScale: cols
			})			
		} else if (selectType == 'function'){
			if (e.target.value == 'minmax'){
				this.setState({
					isMinMax: true,
				})				
			} else {
				this.setState({
					isMinMax: false,
				})
			}
		
			this.setState({
				scaleFunction: e.target.value
			})
		}

	}

  	execute () {
  		this.setState({
  			isLoading: true
  		})
	    let data = new FormData();
	    data.append(
	      "data",
	      JSON.stringify({
	      	cols_to_scale: this.state.colToScale,
	      	scale_function: this.state.scaleFunction,
	      	min_max_range:  this.state.min_max_range,
	      })
	    );
	    console.log("here")
	    fetch(window.location.origin+"/scale_columns/", {
	      method: "post",
	      credentials: "include",
	      body: data,
	      headers: {
	        Accept: "application/json"
	      }
	    }).then(res => {
	        if (res.ok) {
				return res.json();
	        } else {
				throw Error(res.statusText);
	        }
	    }).then(json => {
	      	if (json.status == "success"){
	      		this.setState({
	      			executionStatus: "Successufully Scaled columns"
	      		})
	      		this.setState({
	      			executionError: null
	      		})
	      		this.props.reloadCSV()
	      	} else {
	      		this.setState({
	      			executionError: json.message
	      		})
	      		this.setState({
	      			executionStatus: null
	      		})
	      	}
	      	this.setState({
	      		isLoading: false
	      	})
	    }).catch(err => {
	        console.log(err);
		});
  	}

  	render() {
  		let message = null;
  		let executeBtn = null;
  		let minMaxAttr = null 

  		if (this.state.isLoading){
  			executeBtn = <button type="button" onClick={this.execute} 
  			className="container top-margin-4 btn btn-secondary" disabled>Scale</button>;
  		} else {
	  		executeBtn = <button type="button" onClick={this.execute} 
	  			className="container top-margin-4 btn btn-secondary">Scale</button>;
  		}

  		if (this.state.executionStatus){
			message = <div className="top-margin-4 alert alert-success" role="alert">
			  {this.state.executionStatus}
			</div>
  		}

  		if (this.state.executionError){
			message = <div className="top-margin-4 alert alert-danger" role="alert">
			  {this.state.executionError}
			</div>
  		}

  		if (this.state.isMinMax){
  			minMaxAttr = <div className="row top-margin-4">
  				<div className="col-md-6">
  					<input onChange={(e) => this.minmaxChange(e, "min")} className="top-margin-4 form-control" placeholder="Min value"/>
				</div>
  				<div className="col-md-6">
  					<input onChange={(e) => this.minmaxChange(e, "max")} className="top-margin-4 form-control" placeholder="Max value"/>
  				</div>
  				
  			</div>
  		}

	  	return ( 
		  	<div>
		  		<h5 onClick={()=>this.props.backClick('actions')} className="pointer top-margin-4" >
		  			<span className="badge badge-secondary">Back</span>
		  		</h5>
		  		<div className="container">
		  			<h3 align="center">Scale Data</h3>
		  		</div>

				<select onChange={(e) => this.onArgumentsSelection(e, 'column')} multiple className="multiple-select top-margin-4 form-control" id="exampleFormControlSelect2">
					{this.state.options()}
				</select>

		  		<div className="container">
			  		<p className="center">Choose columns to scale</p>
		  		</div>

				<select onChange={(e) => this.onArgumentsSelection(e, 'function')} className="multiple-select top-margin-4 form-control" id="exampleFormControlSelect2">
					<option>Choose a Scaling Function</option>
					<option value="standard">Standard</option>
					<option value="minmax">MinMax</option>
				</select>
				{minMaxAttr}
				{executeBtn}
				{message}
		  	</div>
		)
  	}

}

export { ScaleRowsComponent };