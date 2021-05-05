const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const CopyPlugin = require("copy-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: './index.js',
	output: {
		filename: 'bundle.[hash].js',
		path: path.resolve(__dirname,'dist')
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: 'index.html',
		}),
		/*new CopyPlugin({
	      patterns: [
	        { from: "source", to: "dest" },
	        { from: "other", to: "public" },
	      ],
	    }),*/
  	],
}