import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, 
	Legend, CartesianGrid, PieChart, Pie, Cell } from 'recharts';



class Visualization extends Component {

	constructor(props) {
		super(props);
		this.state = {
			shouldPageLoad: false,
			analysis: [],
			piechart: [],
			task_id: ()=>{
				let search = window.location.search.split("?")[1].split("&")[0].split("=")
				if (search[0]=="task_id"){
					return search[1]
				}
			},
		}
	}

	componentDidMount(){
		console.log("mounted")
		let ws = new WebSocket("ws://localhost:8080");
		let self = this;
		ws.onopen = function() {
			ws.send(self.state.task_id());
		};
		ws.onmessage = function (evt) { 
			let received_msg = JSON.parse(evt.data);

			let state_outputs = self.state.piechart
			let new_outputs = []
			for (let i in received_msg["outputs"]){
				let found = false;
				if (state_outputs.length == 0){
					new_outputs = received_msg["outputs"]
					break;
				} else {
					for (let j in state_outputs){
						if (state_outputs[j]["name"] == received_msg["outputs"][i]["name"]){
							found = true;
							new_outputs.push({
								name: state_outputs[j]["name"],
								value: state_outputs[j]["value"] + received_msg["outputs"][i]["value"]
							})
						}
					}
					if (!found){
						new_outputs.push(received_msg["outputs"][i])
					}
				}

			}

			self.setState({
				analysis: [...self.state.analysis, received_msg],
				piechart: new_outputs,

			})
		};
	}

	render() {

		const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

		return (
			<div>
			<div className="row">
				<div className="col-md-6 top-margin-4">
			    	<LineChart width={600} height={300} data={this.state.analysis}
			            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
			       		<XAxis dataKey="epoch"/>
			       		<YAxis />
			       		<CartesianGrid strokeDasharray="3 3"/>
			       		<Tooltip/>
			       		<Legend />
			       		<Line type="monotone" dataKey="accuracy" stroke="#8884d8" />
			      	</LineChart>
				</div>
				<div className="col-md-6 top-margin-4">
			    	<LineChart width={600} height={300} data={this.state.analysis}
			            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
			       		<XAxis dataKey="epoch"/>
			       		<YAxis />
			       		<CartesianGrid strokeDasharray="3 3"/>
			       		<Tooltip/>
			       		<Legend />
			       		<Line type="monotone" dataKey="loss" stroke="#82ca9d" />
			      	</LineChart>
				</div>
			</div>
			<div className="row justify-content-center">

				<PieChart width={800} height={300}>
					<Pie isAnimationActive={true} data={this.state.piechart} 
						outerRadius={80} fill="#8884d8" label dataKey="value">
						{this.state.piechart.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)}
					</Pie>
					<Tooltip/>
					<Legend />
				</PieChart>
			</div>
			</div>

		);
	}
}



ReactDOM.render((
  <Visualization />
), document.getElementById('page-content'))