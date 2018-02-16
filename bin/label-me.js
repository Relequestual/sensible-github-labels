#!/usr/bin/env node
var process = require('process');
var gitLabel = require('git-label');
var labels = require('../labels.json');

var usage = 'Usage: label-me <user/repo> <api-token>\n\n'
    + 'API tokens can be created from https://github.com/settings/tokens';

if (process.argv.length !== 4) {
  console.error(usage);
  process.exit(1);
}

if (!process.argv[2].match(/[a-zA-Z0-9-_]+\/[a-zA-Z0-9-_]+/)) {
  console.error('Given user/repo is not valid');
  console.error(usage);
  process.exit(2);
}

if (process.argv[3].length !== 40) {
  console.error('Given token does not seem to be valid');
  console.error(usage);
  process.exit(3);
}

var config = {
  api   : 'https://api.github.com',
  repo  : process.argv[2],
  token : process.argv[3]
};


// add specified labels from a repo
gitLabel.add(config, labels)
  .then(console.log)  //=> success message
  .catch(console.log) //=> error message

