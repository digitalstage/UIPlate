module.exports = {
  mode: process.env.WEBPACK_DEV_SERVER ? 'development' : 'production',
  entry: `${__dirname}/src/index.tsx`,
  output: {
    path: `${__dirname}/public`,
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  plugins: [],
  performance: {
    hints: false
  },
  devServer: {
    contentBase: `${__dirname}/public`,
    port: 3000,
    hot: true,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3003'
      }
    }
  }
};
