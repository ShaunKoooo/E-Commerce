
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // 設定 mode none/development/production 
  // mode 告訴 webpack 是用哪種環境設定
  mode:"development",
  entry: [
    // './public/index.html',
    './src/index.tsx',
  ],
  output:{
    filename: 'bundle.js',
    path: path.resolve('pack', './'),
  },
  module: {
    rules: [
      // 編譯 css|scss|tailwindcss
      // {
      //   test: /\.scss$/,
      //   use: ['style-loader', 'css-loader', 'postcss-loader']
      // },
      // 編譯圖片
      {
        test: /\.(png|jpg|JPG)$/,
        type: 'asset/resource'
      },
      // 編譯 jsx + 編譯 ES6
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: [['@babel/preset-react', {"runtime": "automatic"}], '@babel/preset-env'] }
        } 
      },
      // 編譯 html 
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(tsx|ts)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      { test: /\.scss$/, use: [ 
        { loader: "style-loader" },  // to inject the result into the DOM as a style block
        { loader: "css-modules-typescript-loader"},  // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
        { loader: "css-loader", options: { modules: true } },  // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
        { loader: "sass-loader" },  // to convert SASS to CSS
        // NOTE: The first build after adding/removing/renaming CSS classes fails, since the newly generated .d.ts typescript module is picked up only later
    ] }
    ]
  },
  resolve: {
    // 絕對路徑
    alias: {
      '@': path.resolve('src'),
    },
    // 讓 webpack 解析時不用帶入 .js 或 .jsx -> import xxx from 'xxx';
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  // 增加 devServer 試跑程式碼
  devServer: {
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
}