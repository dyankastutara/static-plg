const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
	template: './src/index.html',
	filename: './index.html'
});

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader'
				}]
			},
			{
				test: /\.(ttf)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: './fonts/[name].[ext]'
					},
				},]
			}
		],
		resolve: {
				modules: [
						'node_modules',
						path.resolve(__dirname + '/src')
				],
				alias: {
						src: path.resolve(__dirname + '/src')
				}
		}
	},
	plugins: [htmlPlugin]
};
