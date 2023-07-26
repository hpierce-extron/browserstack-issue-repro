# Setup

Install NPM packages:
```
npm install
```

Fix Local BrowserStack node_module:
```
node bsLocalFix.js
```

# Run Tests

Run all tests:
```
BASE_URL="<YOUR_URL>" BS_ACCESS_KEY="<YOUR_KEY>" BS_USERNAME="<YOUR_USERNAME>" npx wdio ./wdio.conf.js
```