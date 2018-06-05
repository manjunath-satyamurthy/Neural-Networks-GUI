import React, { Component } from "react";

class Breadcrumb extends Component {

	constructor (props){
	    super(props);
	    this.liClassName = this.liClassName.bind(this);
	}

	liClassName (name){
		return this.props.currentTab === name ? "breadcrumb-item active" : "breadcrumb-item";
	}

  	render() {
	  	return ( 
			<nav aria-label="breadcrumb">
				<ol className="breadcrumb">
					<li className={this.liClassName("feature_columns")} onClick={this.props.onCrumbClick} name="feature_columns">Feature Columns</li>
					<li className={this.liClassName("build_layers")} onClick={this.props.onCrumbClick} name="build_layers">Build Layers</li>
					<li className={this.liClassName("loss_function")} onClick={this.props.onCrumbClick} name="loss_function">Loss Function</li>
					<li className={this.liClassName("optimizers")} onClick={this.props.onCrumbClick} name="optimizers">Optimizer</li>
				</ol>
			</nav>
		)
  	}

}

export { Breadcrumb }  ;