import webpack from 'webpack'
import config from './base.config'
import UglifyJSPlugin from 'uglifyjs-webpack-plugin'

const envPlugin = new webpack.EnvironmentPlugin({
	NODE_ENV: 'production',
	DEBUG: false
})

/*
		new webpack.LoaderOptionsPlugin({
			debug: true
		})
*/
// common chunks
const commonChunksPlugin = new webpack.optimize.CommonsChunkPlugin({
	name: 'commons',
	filename: 'commons.js',
	minChunks: 2,
})

const uglifyPlugin = // minify remove some of the dead code
	new UglifyJSPlugin({
		compress: {
			drop_console: true,
			warnings: false,
			screw_ie8: true,
			conditionals: true,
			unused: true,
			comparisons: true,
			sequences: true,
			dead_code: true,
			evaluate: true,
			if_return: true,
			join_vars: true,
		},
	})

config.plugins = [envPlugin, commonChunksPlugin, uglifyPlugin]

export default config
