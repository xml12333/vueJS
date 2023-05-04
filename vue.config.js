module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://json-server-task-app.onrender.com',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' },
      },
    },
  },
}