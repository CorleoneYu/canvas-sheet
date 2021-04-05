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
    }),
);
