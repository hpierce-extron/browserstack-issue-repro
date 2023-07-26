const fs = require('fs');
const path = require('path');

try {
  let pathToBsLocalModule = path.resolve(
    './node_modules/@wdio/browserstack-service/node_modules/browserstack-local/lib/Local.js'
  );

  if (!fs.existsSync(pathToBsLocalModule)) {
    pathToBsLocalModule = path.resolve(
      './node_modules/browserstack-local/lib/Local.js'
    );
  }

  const fileData = fs.readFileSync(pathToBsLocalModule, {
    encoding: 'utf8',
    flag: 'r',
  });

  let newFileData = '';

  if (
    fileData.indexOf('doubleQuoteIfRequired +') > 0 ||
    fileData.indexOf('+ doubleQuoteIfRequired') > 0
  ) {
    newFileData = fileData.replace(
      /(doubleQuoteIfRequired \+ | \+ doubleQuoteIfRequired)/g,
      ''
    );
  }

  fs.writeFileSync(pathToBsLocalModule, newFileData);
  console.log('File has been fixed.');
} catch (err) {
  console.log('Failed to fix BrowserStackLocal file.');
  console.log('ERROR MESSAGE: ' + err);
}
