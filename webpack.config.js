const path = require('path');

module.exports = {
    devServer: {
        static: {
            directory: path.join(__dirname, '.'),
        },
        compress: true,
        port: 9000,
        historyApiFallback: {
            index: "/index.html",
        },
    }
};
