import path from "path";
import url from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
export default {
    context: path.resolve(__dirname, "src"),
    entry: {
        app: "./index.js",
        vedorSytle: ["../node_modules/bootstrap/dist/css/bootstrap.min.css"],
    },
    output: {
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-Loader",
            },
            {
                test: /\.css$/,
                //exclude: /node_modules/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/,
                 exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
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
    ],
};