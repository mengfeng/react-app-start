/* eslint-disable @typescript-eslint/no-var-requires */
/*
 * @Author: alan_mf
 * @Date: 2022-11-08 09:35:16
 * @LastEditors: alan_mf
 * @LastEditTime: 2022-11-08 16:57:28
 * @FilePath: /react-app-start/webpack.config.js
 * @Description: 
 * 
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const path = require('path');
// eslint-disable-next-line no-undef
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { SourceMapDevToolPlugin } = require("webpack");

// eslint-disable-next-line no-undef
module.exports = {
    //webpack入口文件，webpack从这里开始构建依赖图
    entry:{
        main:'./src/index.tsx'
    },
    //输出文件 ./dist/bundle.js
    output:{
        // eslint-disable-next-line no-undef
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    //webpack只能处理js和json文件，加载别的文件需要loader
    module:{
        rules:[
            {
                test:/\.j|tsx$/,
                use:['ts-loader','source-map-loader'],
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    //增加扩展选项，让webpack可以识别.ts/tsx文件
    resolve:{
        extensions:['.ts','.tsx','.js']
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        }),
        new SourceMapDevToolPlugin({
            filename: "[file].map"
          })
    ],
    mode:'development',
    devServer:{
        proxy:{
            '/api':'http://localhost:8080',
        },
        client:{
            progress:true
        }
    }

}