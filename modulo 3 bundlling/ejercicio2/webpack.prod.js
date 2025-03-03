
import {merge} from "webpack-merge";
import path from "path";
import url from "url";
import common from "./webpack.common.js";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import Dotenv from "dotenv-webpack";
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
export default merge(common, {
    mode:"production",
        module: {
        rules: [
        {
                test: /\.css$/,
                //exclude: /node_modules/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                  "style-loader",
                  {
                    loader: "css-loader",
                    options: {
                      modules: true,
                    },
                  },
                  "sass-loader",
                ],
              },
              {
                test: /\.html$/,
                use: "html-loader",
              },
        ],
    },
    devServer: {
        static: path.join(__dirname, "./src"),
        port: 8080,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "index.html",
            scriptLoading: "blocking",
        }),
        new MiniCssExtractPlugin ({
            filename: "[name].css"
        },),
        new Dotenv({
            path: './prod.env',
       }),
    ],
});