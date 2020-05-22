// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  env: {},
  webpack: (config) => {
    config.resolve.alias['~'] = path.resolve(__dirname)
    return config
  },
}
