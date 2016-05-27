module.exports = {
	entry: "./app/app",
	output: {
		filename: './src/js/build.js',
		library: 'app'
	},

	watch: true,
	module: {
	    loaders: [
	      {
	        test: /.js?$/,
	        loader: 'babel-loader',
	        exclude: /node_modules/,
	        query: {
	          presets: ['react']
	        }
	      }
	    ]
  	},
}