import React, { Component } from "react";
import ReactDOM from 'react-dom';


class UploadCSV extends Component {

  render() {
    return (
    	<div className="container-fluid">
			<div className="row top-margin-40">
				<div className="col-sm">
				</div>
				<div className="col-sm center">
					<form method="post" action="/upload_csv/" encType="multipart/form-data">
					  <div className="form-group">
					    <input accept=".csv" type="file" name="csv_file" className="form-control"/>
					  </div>
					  <button type="submit" className="btn btn-primary">Upload</button>
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
  <UploadCSV />
), document.getElementById('page-content'))