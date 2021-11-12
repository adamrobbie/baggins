module.exports = {
  test: /\.svelte(\.erb)?$/,
  use: [{
    loader: 'svelte-loader',
    options: {
      hotReload: true,
      preprocess: require('svelte-preprocess')({})
    }
  }],
}
