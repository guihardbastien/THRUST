const CompressionPlugin = require('compression-webpack-plugin');

// vue.config.js
module.exports = {
    // options...
    publicPath: '',
    
    chainWebpack(config) {
        config.plugin('CompressionPlugin').use(CompressionPlugin);
    },

    css: {
        extract: {
            filename: `css/[name].${new Date().getTime()}.css`,
            chunkFilename: `css/[name].${new Date().getTime()}.css`,
        },
    },

    configureWebpack: {
        output: {
            filename: `js/[name].${new Date().getTime()}.js`,
            chunkFilename: `js/[name].${new Date().getTime()}.js`,
        }, 
    },
}
