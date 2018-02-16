var gitLabel = require('git-label');

var config = {
  api   : 'https://api.github.com',
  repo  : 'YOUR USER/ORG AND REPO URI',
  token : 'xxx'
};

var labels = require('./labels.json');

// add specified labels from a repo
gitLabel.add(config, labels)
  .then(console.log)  //=> success message
  .catch(console.log) //=> error message

