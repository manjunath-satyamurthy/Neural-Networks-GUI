import React, { Component } from "react";
import ReactDOM from 'react-dom';
import 'mainReact/css/main.css';


class Base extends Component {
	render () {
		return (
			<div></div>
		)
	}
}


ReactDOM.render((
  <Base />
), document.getElementById('react-content'))

export default Base;