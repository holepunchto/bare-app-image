const run = require('./lib/run')
const appimagetool = require('./lib/appimagetool')

exports.createAppImage = async function createAppImage(source, destination, opts = {}) {
  if (typeof destination === 'object' && destination !== null) {
    opts = destination
    destination = null
  }

  const { compression = null, sign = false, key = null } = opts

  const args = []

  if (compression) args.push('--comp', compression)

  if (sign) {
    args.push('--sign')

    if (key) args.push('--sign-key', key)
  }

  args.push(source)

  if (destination) args.push(destination)

  await run(appimagetool, args)
}
