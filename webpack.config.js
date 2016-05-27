module.exports = {
	entry: "./app/app",
	output: {
		filename: './src/js/build.js',
		library: 'app'
	},

	watch: true,
	devtool: "source-map",
	module: {
	    loaders: [
	      {
	        test: /.js?$/,
	        loader: 'babel-loader',
	        exclude: /node_modules/,
	        query: {
	          presets: ['react', 'es2015']
	        }
	      }
	    ]
  	},
}