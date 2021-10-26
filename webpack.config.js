const {default: WindicssPlugin} = require('windicss-webpack-plugin');

module.exports = {
    plugins: [new WindicssPlugin()],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ],
    },
};
