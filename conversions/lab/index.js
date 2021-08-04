exports.lch = require('./lch');
exports.xyz = require('./xyz');

Object.defineProperty(module.exports, 'channels', {value: 3});
Object.defineProperty(module.exports, 'labels', {value: 'lab'});
