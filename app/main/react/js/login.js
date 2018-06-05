import React, { Component } from "react";
import ReactDOM from 'react-dom';


class LoginForm extends Component {

  render() {
    return (
    	<div className="container-fluid">
			<div className="row top-margin-40">
				<div className="col-sm">
				</div>
				<div className="col-sm center">
					<form method="post" action="/login/">
					  <div className="form-group">
					    <input name="username" className="form-control" placeholder="Username"/>
					  </div>
					  <div className="form-group">
					    <input name="password" type="password" className="form-control" placeholder="Password"/>
					  </div>
					  <button type="submit" className="btn btn-primary">Login</button>
					</form>
				</div>
				<div className="col-sm center">
				</div>
			</div>
    	</div>
    );
  }
}



ReactDOM.render((
  <LoginForm />
), document.getElementById('react-content'))