const path = require('path');
const withPWA = require("next-pwa");

module.exports = withPWA({
  optimizeFonts: true,
  reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
})
