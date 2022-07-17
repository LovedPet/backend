const cuid = require('cuid')
 
const cuidBuilder = (prefix, slug) => {
  let result = ''
 
  if (prefix) {
    result += prefix
  }
 
  if (slug) {
    result += cuid.slug()
  } else {
    result += cuid()
  }
 
  return result
}
 
module.exports = cuidBuilder