const fs = require('fs');

// Register eslint rules
require('babel-core/register')(JSON.parse(fs.readFileSync('./.babelrc')));

// Init webpack development server
require('../webpack-dev-server');
