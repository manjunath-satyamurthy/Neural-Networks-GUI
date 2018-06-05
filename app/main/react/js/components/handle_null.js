import React, { Component } from "react";


class HandleNullComponent extends Component {

	constructor(props){
		super(props);
		this.state = {
			colsToFill: {},
			emptyColsByString: {"empty": []},
			executionStatus: null,
			executionError: null,
			functionMethod: 'mean',
			isLoading: true,
			searchTerm: null,
			options: ()=> {
				if (!this.state.isLoading && "empty" in this.state.emptyColsByString){
				  	let options = [];
				  	options.push(<option key={-1} disabled>NONE</option>)
				  	for (let i in this.state.emptyColsByString["empty"]){
				  		options.push(<option key={i}>{this.state.emptyColsByString["empty"][i]}</option>)
				  	}
				  	return options
				}
			},
		}

		this.fetchEmptyColsByString = this.fetchEmptyColsByString.bind(this);
		this.onSearchTermChange = this.onSearchTermChange.bind(this);
		this.onSearch = this.onSearch.bind(this);
		this.execute = this.execute.bind(this);

	}


	fetchEmptyColsByString(string, is_search=false){
		fetch(window.location.origin+"/get_empty_cols_by_string/"+string+"/", {
			method: "GET",
			credentials: "include",
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
			let data = json['data']
			let temp = Object.assign({}, this.state.emptyColsByString)
			temp[string] = data

			if (data.length != 0 ){
				this.setState({
					emptyColsByString: temp,
					isLoading: false
				})
			} else if (is_search){
				this.setState({
					executionError: "Search Term " + "'"+string+"'" +" Not Found"
				})
			}
		})
		.catch(err => {
			console.log(err);
		});
	}


	onSearchTermChange (e){
		this.setState({
			searchTerm: e.target.value
		})
	}

	onSearch (){
		this.fetchEmptyColsByString(this.state.searchTerm, true)
	}

	onColumnSelection(e, searchTerm){
		let options = e.target.options
		let cols = []
		let toFillTemp = Object.assign({}, this.state.colToFill)
		for (let i in options){
			if (options[i].selected){
				cols.push(options[i].value)
			}
		}
		toFillTemp[searchTerm] = cols
		this.setState({
			colToFill: toFillTemp
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
	      	cols_to_fill: this.state.colToFill,
	      	strategy: this.state.functionMethod,
	      })
	    );

	    fetch(window.location.origin+"/fill_null_columns/", {
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
	      			executionStatus: "Successufully Transformed columns",
	      		})
	      		for (let k in this.state.colToFill){
	      			this.fetchEmptyColsByString(k)
	      		}
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

  		if (this.state.isLoading){
  			this.fetchEmptyColsByString("empty")
  		}

  		let message = null;
  		let executeBtn = null;
  		let otherNullCols = [];

  		for (let i in this.state.emptyColsByString){
  			if (i != "empty"){
  				let tempOption = []
  				for (let col in this.state.emptyColsByString[i]){
  					tempOption.push(<option key={col}>{this.state.emptyColsByString[i][col]}</option>)
  				}

  				let tempSelect =<div key={i}> 
	  								<select onChange={(e) => this.onColumnSelection(e, i)} multiple className="top-margin-4 form-control" id="exampleFormControlSelect2">
										{tempOption}
									</select>
							  		<div className="container">
								  		<p className="center">Columns with the string: {i}</p>
							  		</div>
						  		</div>
				otherNullCols.push(tempSelect)

  			}
  		}

  		if (this.state.isLoading){
  			executeBtn = <button type="button" onClick={this.execute} 
  			className="container top-margin-4 btn btn-secondary" disabled>Fill Null</button>;
  		} else {
	  		executeBtn = <button type="button" onClick={this.execute} 
	  			className="container top-margin-4 btn btn-secondary">Fill Null</button>;
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
		  			<h3 align="center">Handle Null Values</h3>
		  		</div>

		  		<input onChange={this.onSearchTermChange} className="top-margin-4 form-control" placeholder="Search Term"/>
		  		<button type="button" onClick={this.onSearch} className="container top-margin-4 btn btn-light">Search</button>

				<select onChange={(e) => this.onColumnSelection(e, 'empty')} multiple className="top-margin-4 form-control" id="exampleFormControlSelect2">
					{this.state.options()}
				</select>

		  		<div className="container">
			  		<p className="center">Columns with Empty String</p>
		  		</div>

				{otherNullCols}

				<select onChange={(e)=> { this.setState({ functionMethod: e.target.value }) }} 
					className="form-control form-control-sm top-margin-4">
						<option>Select a Function</option>
						<option value="mean">Mean</option>
						<option value="median">Median</option>
						<option value="most_frequent">Most Frequent</option>
				</select>

				{executeBtn}
				{message}
		  	</div>
		)
  	}

}

export { HandleNullComponent };