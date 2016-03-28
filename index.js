'use strict';

var bs58 = require('bs58');
var uuid = require('@pgaubatz/uuid');

module.exports.compress = function compress (str) {
  var buffer = uuid.parse(str);
  return bs58.encode(buffer);
};

module.exports.decompress = function decompress (str) {
  var buffer = bs58.decode(str);
  if (buffer.length === 16) {
    return uuid.unparse(buffer);
  }
};
