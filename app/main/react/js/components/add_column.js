import React, { Component } from "react";
import AceEditor from 'react-ace';

import 'brace/mode/python';
import 'brace/theme/solarized_dark';


class AddColumnComponent extends Component {

	constructor(props){
		super(props);
		this.state = {
			columnSelects: [],
			noOfArgs: 1,
			args: {},
			pythonMethod: "def add_column(*args):\n    #don't change the \n    #method name\n    pass",
			columnName: '',
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
		this.onAddArguments = this.onAddArguments.bind(this);
		this.onMethodChange = this.onMethodChange.bind(this);
		this.onColumnNameChange = this.onColumnNameChange.bind(this);
		this.onArgumentSelection = this.onArgumentSelection.bind(this);
		this.execute = this.execute.bind(this);
	}

	onMethodChange (newValue){
		this.setState({
			pythonMethod: newValue
		})
	}

	onColumnNameChange(e){
		console.log(e.target, "target")
		this.setState({
			columnName: e.target.value
		})
		console.log(this.state.columnName)
	}

	onArgumentSelection(e, argPosition){
		let args = Object.assign({}, this.state.args)
		args[argPosition] = e.target.value
		this.setState({
			args: args
		})
	}

  	onAddArguments () {
	  	let columnSelects = <div className="row align-items-end" key={this.state.noOfArgs}>
	  							<div className="col-md-3">
	  								{ "ARG " + this.state.noOfArgs + ":" }
	  							</div>
	  							<div className="col-sm-9 col-md-9 col-lg-9">
			  						<select onChange={(e)=>this.onArgumentSelection(e, this.state.noOfArgs)} 
			  							className="form-control form-control-sm top-margin-4">
					  						{this.state.options()}
									</select>
	  							</div>
	  						</div>


	  	this.setState({
	  		columnSelects: [...this.state.columnSelects, columnSelects],
	  		noOfArgs: this.state.noOfArgs + 1
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
	      	column_name: this.state.columnName,
	        python_method: this.state.pythonMethod,
	        arguments: this.state.args
	      })
	    );

	    fetch(window.location.origin+"/add_column/", {
	      method: "post",
	      credentials: "include",
	      body: data,
	      headers: {
	        Accept: "application/json"
	      }
	    })
	      .then(res => {
	        if (res.ok) {
	          return res.json();
	        } else {
	          throw Error(res.statusText);
	        }
	      })
	      .then(json => {
	      	if (json.status == "success"){
	      		this.setState({
	      			executionStatus: "Successufully added column"
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
	      })
	      .catch(err => {
	        console.log(err);
	});
  	}

  	render() {
  		let message = null;
  		let executeBtn = null;

  		if (this.state.isLoading){
  			executeBtn = <button type="button" onClick={this.execute} 
  			className="container top-margin-4 btn btn-secondary" disabled>Execute</button>;
  		} else {
	  		executeBtn = <button type="button" onClick={this.execute} 
	  			className="container top-margin-4 btn btn-secondary">Execute</button>;
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
		  			<h3 align="center">Add Column</h3>
		  		</div>
		  		<input onChange={this.onColumnNameChange} className="form-control" placeholder="Enter Column Name"/>
				<AceEditor
					className="top-margin-4"
					value={this.state.pythonMethod}
					mode="python"
					theme="solarized_dark"
					fontSize={20}
					onChange={this.onMethodChange}
					name="code"
					width="100%"
					setOptions={{
						enableBasicAutocompletion: true,
						enableLiveAutocompletion: true,
						enableSnippets: true,
						showLineNumbers: true,
						tabSize: 2,
					}}
				/>
				{this.state.columnSelects}
				<button type="button" onClick={this.onAddArguments} className="container top-margin-4 btn btn-light">Add Argument</button>
				{executeBtn}
				{message}
		  	</div>
		)
  	}

}

export { AddColumnComponent };