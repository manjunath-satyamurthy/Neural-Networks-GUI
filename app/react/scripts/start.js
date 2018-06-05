'use strict';
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const jest = require('jest');

const webpackConfig = require('../config/webpack.config.js') 
const webpack = require("webpack");



const compiler = webpack(webpackConfig);

compiler.watch({stats: "normal"}, (err, stats) => {
	console.log(err)
	console.log(
		stats.toString({
			colors: true,
			 chunks: false,
		})
	);
});
