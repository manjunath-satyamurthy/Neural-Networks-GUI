import React, { Component } from "react";
import { AddColumnComponent } from './add_column.js';
import { DeleteColumnsComponent } from './delete_column.js';
import { TransformColumnsComponent } from './transform_columns.js';
import { HandleNullComponent } from './handle_null.js';
import { ScaleRowsComponent } from './scale_rows.js';


class ActionsComponent extends Component {

	constructor (props) {
		super(props);
		this.state = {
			component: 'actions'
		}

		this.onClick = this.onClick.bind(this);
	}


	onClick (action) {
		this.setState({
			component: action
		})
	}


	render() {

		if (this.state.component == 'actions'){
			return (
			  	<div className="top-margin-4">
			  		<h4 className="text-center">Preprocessing Tools</h4>
					<nav className="pointer" aria-label="breadcrumb" onClick={ ()=>this.onClick('add-column') } >
					  <ol className="breadcrumb">
					    <li className="breadcrumb-item" aria-current="page">Add Column</li>
					  </ol>
					</nav>
					<nav className="pointer" aria-label="breadcrumb" onClick={()=>this.onClick('delete-column')}>
					  <ol className="breadcrumb">
					    <li className="breadcrumb-item" aria-current="page">Delete Column</li>
					  </ol>
					</nav>
					<nav className="pointer" aria-label="breadcrumb" onClick={()=>this.onClick('transform-column')}>
					  <ol className="breadcrumb">
					    <li className="breadcrumb-item" aria-current="page">Transform Column</li>
					  </ol>
					</nav>
					<nav className="pointer" aria-label="breadcrumb" onClick={()=>this.onClick('handle-null')}>
					  <ol className="breadcrumb">
					    <li className="breadcrumb-item" aria-current="page">Handle Null</li>
					  </ol>
					</nav>
					<nav className="pointer" aria-label="breadcrumb" onClick={()=>this.onClick('scale-data')}>
					  <ol className="breadcrumb">
					    <li className="breadcrumb-item" aria-current="page">Scale Data</li>
					  </ol>
					</nav>
			  	</div>
			)
		} else if (this.state.component == 'add-column'){
			return <AddColumnComponent backClick={this.onClick} headers={this.props.headers} reloadCSV={this.props.reloadData}/>
		} else if(this.state.component == 'delete-column'){
			return <DeleteColumnsComponent backClick={this.onClick} headers={this.props.headers} reloadCSV={this.props.reloadData}/>
		} else if(this.state.component == 'transform-column') {
			return <TransformColumnsComponent backClick={this.onClick} headers={this.props.headers} reloadCSV={this.props.reloadData}/>
		} else if (this.state.component == 'handle-null'){
			return <HandleNullComponent backClick={this.onClick} headers={this.props.headers} reloadCSV={this.props.reloadData}/>			
		} else if (this.state.component == 'scale-data'){
			return <ScaleRowsComponent backClick={this.onClick} headers={this.props.headers} reloadCSV={this.props.reloadData}/>	
		}

	}

 }

export { ActionsComponent };