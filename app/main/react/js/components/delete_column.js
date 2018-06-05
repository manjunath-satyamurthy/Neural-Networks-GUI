import React, { Component } from "react";


class DeleteColumnsComponent extends Component {

	constructor(props){
		super(props);
		this.state = {
			colToDelete: [],
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
	}

	onArgumentsSelection(e){
		let options = e.target.options
		let cols = []
		for (let i in options){
			if (options[i].selected){
				cols.push(options[i].value)
			}
		} 
		this.setState({
			colToDelete: cols
		})
	}

  	execute () {
  		this.setState({
  			isLoading: true
  		})
	    let data = new FormData();
	    data.append(
	      "data",
	      JSON.stringify({
	      	cols_to_delete: this.state.colToDelete,
	      })
	    );
	    console.log("here")
	    fetch(window.location.origin+"/delete_columns/", {
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
	      			executionStatus: "Successufully Deleted columns"
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

  		if (this.state.isLoading){
  			executeBtn = <button type="button" onClick={this.execute} 
  			className="container top-margin-4 btn btn-secondary" disabled>Delete</button>;
  		} else {
	  		executeBtn = <button type="button" onClick={this.execute} 
	  			className="container top-margin-4 btn btn-secondary">Delete</button>;
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

	  	return ( 
		  	<div>
		  		<h5 onClick={()=>this.props.backClick('actions')} className="pointer top-margin-4" >
		  			<span className="badge badge-secondary">Back</span>
		  		</h5>
		  		<div className="container">
		  			<h3 align="center">Delete Columns</h3>
		  		</div>

				<select onChange={this.onArgumentsSelection} multiple className="multiple-select top-margin-4 form-control" id="exampleFormControlSelect2">
					{this.state.options()}
				</select>

		  		<div className="container">
			  		<p className="center">Choose columns</p>
		  		</div>
				{executeBtn}
				{message}
		  	</div>
		)
  	}

}

export { DeleteColumnsComponent };