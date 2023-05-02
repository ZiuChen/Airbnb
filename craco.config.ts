import path from 'path'
const CracoLessPlugin = require('craco-less')

const resolve = (dir: string) => path.resolve(__dirname, dir)

const config = {
  webpack: {
    alias: {
      '@': resolve('src')
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin
    }
  ]
}

export default config
