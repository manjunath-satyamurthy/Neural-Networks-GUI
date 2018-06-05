import React, { Component } from "react";


class FeatureSelection extends Component {

	constructor(props){
		super(props);
		this.state = {
			isDataLoaded: false,
			columnsOptions: "loading",
		}
	}


	render (){

	  	if (!this.props.isDataLoaded){
	  		let self = this;
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
			  	let options = [];

			  	for (let i in header){
			  		options.push(<option key={i}>{header[i]}</option>)
			  	}

				self.props.updateStateFromChild(null, "isHeaderLoaded", true)
				self.props.updateStateFromChild(null, "columnsOptions", options)
			})
			.catch(err => {
				console.log(err);
			});
		}

		return (
			<div className="row">
				<div className="col-md-6">
					<select multiple className="multiple-select form-control" 
						onChange={e=> this.props.updateStateFromChild(e, "selectedFeatures")}
						value={this.props.selectedFeatures} >
						{this.props.columnsOptions}
					</select>
				</div>
				<div className="col-md-6">
					
					<div className="input-group mb-3">
					  <div className="input-group-prepend">
					    <div className="input-group-text">
					      <input type="checkbox" checked={this.props.state.shouldShuffle}
					      	onChange={ e=> this.props.updateStateFromChild(e, "shouldShuffle") }/>
					    </div>
					  </div>
					  <input type="text" className="form-control" 
					  	onChange={ e=> this.props.updateStateFromChild(e, "bufferSize") }
					  	placeholder="Enter the buffer size to shuffle"
					  	value={this.props.state.bufferSize} />
					</div>

					<div className="input-group mb-3">
					  <div className="input-group-prepend">
					    <span className="input-group-text" id="">No. of Batches</span>
					  </div>
					  <input type="text" className="form-control"
					  	onChange={ e=> this.props.updateStateFromChild(e, "batchSize") }
					  	value={this.props.state.batchSize} />
					</div>

					<div className="input-group mb-3">
					  <div className="input-group-prepend">
					    <span className="input-group-text" id="">No. of Epochs</span>
					  </div>
					  <input type="text" className="form-control"
					  	onChange={ e=> this.props.updateStateFromChild(e, "epochs") }
					  	value={this.props.state.epochs} />
					</div>

					<select className="multiple-select form-control"
						onChange={ e=> this.props.updateStateFromChild(e, "classColumn") }
						value={this.props.state.classColumn} >
						<option>Select The Class Column</option>
						{this.props.state.columnsOptions}
					</select>

				</div>
			</div>
		);
	}
}

export { FeatureSelection };