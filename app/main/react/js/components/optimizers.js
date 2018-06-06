import React, { Component } from "react";


class Optimizers extends Component {

	constructor(props){
		super(props);
	}

	render (){
		return (
			<div>
			<div className="row justify-content-center">
				<select className="col-md-4 form-control form-control-sm top-margin-4 mb-3"
					onChange={e=>this.props.updateStateFromChild(e, "optimizer")}
					value={this.props.state.optimizer}>
					<option value="">Choose an Optimization Function</option>
					<option value="MomentumOptimizer" >Momentum Optimizer</option>
					<option value="GradientDescentOptimizer">Gradient Descent Optimizer</option>
					<option value="AdagradOptimizer">Adagrad Optimizer</option>
				</select>
			</div>
			<div className="row justify-content-center">
				<div className="input-group mb-3 col-md-4">
				  <div className="input-group-prepend">
				    <span className="input-group-text" id="">Learning Rate</span>
				  </div>
				  <input type="text" className="form-control"
				  	onChange={ e=> this.props.updateStateFromChild(e, "learningRate") }
				  	value={this.props.state.learningRate} />
				</div>
			</div>
			</div>
		);
	}

}

export { Optimizers };