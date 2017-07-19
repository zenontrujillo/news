import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
const path = require('path')

const rootPath = '../../src/client'
const outputPath = path.join(__dirname, '../../dist/assets')
const publicPath = 'assets/'

// html plugin
const htmlPlugin = new HtmlWebpackPlugin({
	template: path.join(__dirname, rootPath, 'index.html'),
	filename: 'index.html',
	inject: 'body'
})

// common chunks
const commonChunksPlugin = new webpack.optimize.CommonsChunkPlugin({
	name: 'commons',
	filename: 'commons.js',
	minChunks: 2,
})

const config = {
	context: path.join(__dirname, rootPath),
	entry: {
		app: './index.js',
	},
	output: {
		path: outputPath,
		filename: '[name].js',
		publicPath: publicPath
	},
	module: {
		rules: [
			{
				test: /\.(jpe?g|png|gif|svg|jpg|json)$/i,
				exclude: /node_modules/,
				loader: 'file-loader'
			},
			{
				test: /\.(sass|scss)$/,
				use: [
					{
						loader: 'style-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'css-loader',
						options: {
							modules: true,
							importLoaders: 1,
							sourceMap: true,
						},
					},
					{ loader: 'sass-loader' }
				]
			},
			{
				test: /\.(ico)$/i,
				exclude: /node_modules/,
				loader: 'file-loader?name=[name].[ext]'
			},
			{
				test: /\.js$/,
				exclude: [/node_modules/],
				use: [{
					loader: 'babel-loader',
					options: {
						presets: [['es2015', { 'modules': false }], 'react', 'stage-0'],
						plugins: ['transform-class-properties', 'transform-decorators-legacy', 'transform-object-rest-spread']
					}
				}],
			},
		],
	},
	plugins: [
		commonChunksPlugin,
		htmlPlugin,
		new webpack.LoaderOptionsPlugin({
			debug: true
		})
	],
	resolve: {
		alias: {
		}
	}
}

export default config
