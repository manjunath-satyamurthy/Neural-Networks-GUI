'use strict';
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const webpackConfig = require('../config/webpack.config.js') 
const webpack = require("webpack");

const compiler = webpack(webpackConfig);

compiler.watch({stats: "normal"}, (err, stats) => {
	console.log(
		stats.toString({
			colors: true,
			chunks: false,
		})
	);
});
