<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200"
      src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
  <h1>Process Loader</h1>
  <p>A loader for webpack that lets you work with the content of file.</p>
</div>

<h2 align="center">Install</h2>

```bash
npm install --save-dev process-loader
```

<h2 align="center">Usage</h2>

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'process-loader',
          options: {
            process: (content) => {
              // some pretty stuff
              console.log(content);
              return content;
            }
          }
        }
      }
    ]
  }
}
```