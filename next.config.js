/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  target: 'serverless',
  webpack: function (config) {
      /// below is not required for the problem described. Just for reference.(es6)
      config.module.rules.push({test: /\.yml$/, use: 'raw-loader'})
      return config
  }
}

module.exports = nextConfig
