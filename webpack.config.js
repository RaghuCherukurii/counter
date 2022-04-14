module.exports = {
    entry: [
        './src/main.jsx'
    ],
    output: {
        filename: 'counter.js',
        path: path.join(__dirname, 'build'),
        publicPath: '/build/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    externals: {
        "react": "React",
        "react/addons": "React",
        "jQuery": "jQuery"
    },
};