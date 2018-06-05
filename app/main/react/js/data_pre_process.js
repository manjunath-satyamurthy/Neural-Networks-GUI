import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { ActionsComponent } from './components/actions.js'


class DataPreProcess extends Component {

  constructor(props) {
    super(props);
    this.state = {
    	isDataLoaded: false,
    	tableHeader: null,
    	tableBody: null,
    	headers: null,
    }

    this.reloadData = this.reloadData.bind(this);
  }


  reloadData(){
  	console.log("reload data")
  	this.setState({
  		isDataLoaded: false,
  	})
  }

  render() {
  	let tableHeader = null;
  	let tableBody = null;
  	let self = this;
  	if (!this.state.isDataLoaded){
		fetch(window.location.origin+"/get_csv_data/", {
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
			let header = data[0].split(",")
			var header_cols = []
			data.shift()

			for (let i in header){
				header_cols.push(<th key={i}>{header[i]}</th>)
			}
			tableHeader = <thead className="thead-dark"><tr>{header_cols}</tr></thead>

			let body_rows = [];
			for (let i in data){
				let rows = data[i].split(",")
				let body_cols = [];
				for (let j in rows){
					body_cols.push(<td key={j}>{rows[j]}</td>)
				}
				body_rows.push(<tr key={i}>{body_cols}</tr>)	
			}

			tableBody = <tbody>{body_rows}</tbody>
			self.setState({
				isDataLoaded: true,
				tableHeader: tableHeader,
				tableBody: tableBody,
				headers: header,
			})
		})
		.catch(err => {
			console.log(err);
		});
	}

	let tableCSV = null;

	if (this.state.isDataLoaded){
		tableCSV = <table className="table table-striped">
						{this.state.tableHeader}
						{this.state.tableBody}
					</table>
	}
	else {
		tableCSV = <p>Loading...</p>
	}


	    return (
	    	<div className="row">
			<div className="col-md-9 table-responsive csv-table">
				{tableCSV}
			</div>
			<div className="col-md-3">
				<ActionsComponent headers={this.state.headers} reloadData={this.reloadData} />
			</div>
			</div>
	    );


  }
}



ReactDOM.render((
  <DataPreProcess />
), document.getElementById('page-content'))