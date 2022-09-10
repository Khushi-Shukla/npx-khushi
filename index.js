const { render } = require('prettyjson')
const data = require('./lib/data')

const renderOpts = {
  dashColor: 'cyan',
  keysColor: 'blue',
  stringColor: 'white'
}
module.exports = () => render(data, renderOpts)
module.exports = ({ json }) => json ? JSON.stringify(data) : render(data, renderOpts)
