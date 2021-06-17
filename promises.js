const fsPromises = require('fs').promises;

function readIndex(src) {
  return fsPromises.readFile(`public${src}`, 'utf-8');
}

module.exports = readIndex;
