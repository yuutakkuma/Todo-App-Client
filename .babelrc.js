module.exports = function (api) {
  api.cache(false)
  return {
    plugins: [['babel-plugin-storybook-csf-title', false]],
    overrides: [
      {
        include: /stories\.(js|ts|tsx)$/,
        plugins: [
          [
            'babel-plugin-storybook-csf-title',
            {
              toTitle: ({ cwd, filename }) => {
                const relativePath = filename.replace(cwd, '')
                // console.log(
                //   "toTitle:",
                //   cwd,
                //   filename,
                //   relativePath,
                //   relativePath.substr(0, relativePath.lastIndexOf("/"))
                // );
                return relativePath.substr(0, relativePath.lastIndexOf('/'))
              }
            }
          ]
        ]
      }
    ]
  }
}
