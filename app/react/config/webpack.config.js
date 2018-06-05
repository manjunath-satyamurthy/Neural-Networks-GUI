"use strict";

const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const eslintFormatter = require("react-dev-utils/eslintFormatter");
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
	entry: () => {
		let entries = {};
		const source = "./";
		let apps = [];
		fs.readdirSync(source).forEach(function(directory){
			if (fs.statSync(source+directory).isDirectory() && fs.existsSync(source+directory+"/react/js")){
				apps.push(source+directory+"/react");
			}
		})

		apps.forEach(function(app){
			let appname = app.split("/")[1];
			let files = fs.readdirSync(app+"/js/");
			if (files){
				files.forEach(function(file){
					if(fs.statSync(app+"/js/"+file).isFile()){
						let entryFileName = appname+"/static/"+appname+"/scripts/"+file.split(".")[0].toLowerCase();
						let entryFilePath = app+"/js/"+file;
						entries[entryFileName] = entryFilePath;
					}
				})
			}
		})
		return entries
	},

	output: {
		path: path.resolve(__dirname, "../../"),
		pathinfo: true,
		filename: "[name].bundle.js"
	},

	module: {
		strictExportPresence: true,
		rules: [
			{
				test: /\.(js|jsx)$/,
				enforce: "pre",
				use: [
					{
						options: {
							formatter: eslintFormatter
						},
						loader: require.resolve("eslint-loader")
					}
				],
			},
			{
				test: /\.(js|jsx)$/,
				loader: require.resolve("babel-loader"),
				options: {
					cacheDirectory: true
				}
			},
			{
				test: /\.(png|jpg|gif|jpeg|svg)$/,
				use: [{
					loader: require.resolve("file-loader"),
					options: {
						name: '[path][name].[ext]',
						publicPath: (file) => {
							let pathparts = file.split("/")
							pathparts.splice(0, 1)
							return pathparts.join("/")
						},
						outputPath: (file) => {
							let appname = file.split("/")[0];
							let filename = file.split("/")[file.split("/").length-1]
							return appname+"/static/"+appname+"/images/"+filename
						},
						emitFile: false,
					}
				}]
			},
			{
				test: /\.css$/,
				use: [
                    {
                        loader: require.resolve("file-loader"),
						options: {
							name: '[path][name].[ext]',
							publicPath: (file) => {
								let pathparts = file.split("/")
								pathparts.splice(0, 1)
								return pathparts.join("/")
							},
							outputPath: (file) => {
								let appname = file.split("/")[0];
								let filename = file.split("/")[file.split("/").length-1]
								return appname+"/static/"+appname+"/styles/"+filename

							},
						}
                    },
				],
			}
		]
	},

	resolve: {
		modules: ["./node_modules/"],
		alias: (() => {
			let aliases = {};
			aliases['reactRoot'] = path.resolve(__dirname, "../../react/")
			const source = "./";

			let apps = [];
			fs.readdirSync(source).forEach(function(directory){
				if (fs.statSync(source+directory).isDirectory() && directory != "react"){
					aliases[directory+"Django"] = path.resolve(__dirname, "../../"+directory+"/static/"+directory+"/")
					aliases[directory+"React"] = path.resolve(__dirname, "../../"+directory+"/react/")
				}
			})
			return aliases
		})()
	},

	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: "main/static/main/scripts/vendor"
		}),
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": '"'+process.env.NODE_ENV+'"'
		}),
	],

	node: {
		__dirname: true,
		dgram: "empty",
		fs: "empty",
		net: "empty",
		tls: "empty"
	},

	performance: {
		hints: false
	},
}


if (process.env.NODE_ENV === "production"){
	
	module.exports['plugins'].push(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				comparisons: false
			},
			output: {
				comments: false,
				ascii_only: true
			}
		})
	);
}
