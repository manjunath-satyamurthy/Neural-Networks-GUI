import React, { Component } from "react";
import ReactDOM from 'react-dom';


class SideBar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-expand-md navbar-dark row">
          <a className="nav-link mr-auto" href="#">Neural Networks</a>
          <a className="nav-link" href="/logout">Logout</a>
        </nav>
        <div className="row">
        <ul className="nav col-sm-2 col-md-2 flex-column sidebar">
          <div className="sticky-top">
          <li className="nav-item">
            <a className={(window.location.pathname==="/upload_csv/") ? "active nav-link" : 'nav-link'} 
              href="/upload_csv">Upload CSV</a>
          </li>
          <li className="nav-item">
            <a className={(window.location.pathname==="/data_pre_process/") ? "active nav-link" : 'nav-link'} 
              href="/data_pre_process">Data Preprocessing</a>
          </li>
          <li className="nav-item">
            <a className={(window.location.pathname==="/build_network/") ? "active nav-link" : 'nav-link'} 
              href="/build_network">Build Network</a>
          </li>
          <li className="nav-item">
            <a className={(window.location.pathname==="/train_network/") ? "active nav-link" : 'nav-link'} 
              href="/train_network">Train Network</a>
          </li>
          <li className="nav-item">
            <a className={(window.location.pathname==="/visualization/") ? "active nav-link" : 'nav-link'} 
              href="/visualization">Results Visualization</a>
          </li>
          </div>
        </ul>
        <div id="page-content" className="col-sm-10 col-md-10">
        </div>
      </div>
      </div>
    );
  }
}



ReactDOM.render((
  <SideBar />
), document.getElementById('react-content'))