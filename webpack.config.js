module.exports = {
    entry: './app/app.module.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
        { test: /\.html$/, loader: "html-loader" },
        { test: /\.css$/, loader: "style!css" }
      ]
    },
    devtool: "#inline-source-map"
}
