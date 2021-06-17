const fsPromises = require('fs').promises;

async function readIndex(src) {
  return await fsPromises.readFile(`public${src}`, 'utf-8');
}

module.exports = readIndex;
