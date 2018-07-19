module.exports = {
entry: './src/index.js',
output: {
	path: __dirname,
	publicPath: '/',
	filename: 'bundle.js'
},
module: {
	rules: [
	{
		test: /\.js?$/,
		loader: 'babel-loader',
		exclude: /node_modules/,
	}
]
}
};
