module.exports = {
    entry: [
        "./js/main.js"
    ],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.vue$/, loaders: [ "vue" ] },
            { test: /\.js$/, loaders: [ "babel" ], exclude: /node_modules/ },
            { test: /\.css$/, loaders: [ "style", "css" ] },
            { test: /\.sass$/, loaders: [ "style", "css", "sass" ]},
            { test: /\.scss$/, loaders: [ "style", "css", "sass" ]},
            { test: /\.svg$/, loader: 'url-loader?mimetype=image/svg+xml' },
            { test: /\.woff$/, loader: 'url-loader?mimetype=application/font-woff' },
            { test: /\.woff2$/, loader: 'url-loader?mimetype=application/font-woff' },
            { test: /\.eot$/, loader: 'url-loader?mimetype=application/font-woff' },
            { test: /\.ttf$/, loader: 'url-loader?mimetype=application/font-woff' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?mimetype=image/svg+xml' },
            { test: /\.woff(\d+)?(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?mimetype=application/font-woff' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?mimetype=application/font-woff' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?mimetype=application/font-woff' }
        ]
    },
    babel: {
        presets: [ 'es2015' ]
    }
};