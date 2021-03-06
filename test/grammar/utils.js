// utils.js
// --------
// Helpers for passing an eval string to flathead and grabbing the parse tree

var exec = require('child_process').exec,
    fs = require('fs'),
    cmd = __dirname + '/../../bin/flat',
    fixtures = __dirname + '/fixtures/';

exports.withParseTree = function(evalString, cb) {
  var parseTree;
  var child = exec(cmd + ' -n', function(err, stdout, stderr) {
    cb(stdout);
  });
  child.stdin.write(evalString);
  child.stdin.end();
};

exports.fixture = function(name) {
  return fs.readFileSync(fixtures + name, 'utf8');
};
