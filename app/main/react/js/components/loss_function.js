import React, { Component } from "react";
import AceEditor from 'react-ace';

import 'brace/mode/python';
import 'brace/theme/solarized_dark';

class LossFunction extends Component {

	constructor(props){
		super(props);
		this.onFunctionTypeChange = this.onFunctionTypeChange.bind(this);
	}

	onFunctionTypeChange(e){
		this.props.updateStateFromChild(null, "lossFuncType", e.target.value)
	}

	render (){

		let lossFuncBody = null;
		console.log(this.props.state.lossFuncType)
		if (this.props.state.lossFuncType == "standard"){
			lossFuncBody = <select className="col-md-4 form-control form-control-sm top-margin-4"
				onChange={e=> this.props.updateStateFromChild(null, "lossFunction", e.target.value)}
				value={this.props.state.lossFunction} >
					<option value="">Choose Loss Function</option>
					<option value="SigmoidCrossEntropy">Sigmoid Cross Entropy</option>
					<option value="SoftmaxCrossEntropy">Softmax Cross Entropy</option>
					<option value="SparseSoftmaxCrossEntropy">Sparse Softmax Cross Entropy</option>
			</select>
		} else if (this.props.state.lossFuncType == "custom"){
			lossFuncBody = <AceEditor
				className="top-margin-4 loss-ace-editor"
				value={this.props.state.customLossFunc}
				mode="python"
				theme="solarized_dark"
				fontSize={20}
				onChange={value => this.props.updateStateFromChild(null, "customLossFunc", value)}
				name="code"
				width="100%"
				height="60vh"
				setOptions={{
					enableBasicAutocompletion: true,
					enableLiveAutocompletion: true,
					enableSnippets: true,
					showLineNumbers: true,
					tabSize: 2,
				}}
			/>
		}

		return (
			<div>
			<div className="row justify-content-center">
				<div className="form-check form-check-inline">
				  <input className="form-check-input" type="radio" name="type" value="standard"
				  	checked={this.props.state.lossFuncType == "standard" ? true : false}
				  	onChange={this.onFunctionTypeChange} />
				  <label className="form-check-label">
				    Standard functions
				  </label>
				  <div className="col-md-1"></div>
				  <input className="form-check-input" type="radio" name="type" value="custom"
				  	checked={this.props.state.lossFuncType == "custom" ? true : false} 
				  	onChange={this.onFunctionTypeChange}/>
				  <label className="form-check-label">
				    Custom Function
				  </label>
				</div>
			</div>
			<div className="row justify-content-center">
				{lossFuncBody}
			</div>
			</div>
		);
	}

}

export { LossFunction };