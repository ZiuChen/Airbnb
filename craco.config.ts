import path from 'path'
const CracoLessPlugin = require('craco-less')

const resolve = (dir: string) => path.resolve(__dirname, dir)

const config = {
  webpack: {
    alias: {
      '@': resolve('src'),
      '@mui/styled-engine': '@mui/styled-engine-sc'
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin
    }
  ]
}

export default config
