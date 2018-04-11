exports.modifyBabelrc = ({ babelrc }) => {
  if (process.env.NODE_ENV !== `production`) {
    return {
      plugins: [
        [require.resolve(`babel-plugin-emotion`), { sourceMap: true }],
      ].concat(babelrc.plugins),
    }
  }
  return {
    plugins: [require.resolve(`babel-plugin-emotion`)].concat(babelrc.plugins),
  }
}

exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  if (page.path.match(/^\/app/)) {
    page.matchPath = '/app/:path'
    createPage(page)
  }
}
