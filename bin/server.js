const fs = require('fs');

// Register eslint rules
require('babel-core/register')(JSON.parse(fs.readFileSync('./.babelrc')));

// Init server
require('../src/server/server.js');
