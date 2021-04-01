const { override, addBabelPlugin, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
    addBabelPlugin(
        'babel-plugin-transform-typescript-metadata', // 开启参数装饰器
        ['@babel/plugin-proposal-decorators', { legacy: true }], // 装饰器
        ['@babel/plugin-proposal-class-properties', { loose: true }], // 类属性装饰
    ),

    addWebpackAlias({
        '@': path.join(__dirname, '/src'),
        '@di': path.join(__dirname, '/src/di'),
        '@editor': path.join(__dirname, '/src/editor'),
        '@cool-table': path.join(__dirname, '/src/cool-table'),
        '@cool-canvas': path.join(__dirname, '/src/lib/cool-canvas'),
    }),
);
