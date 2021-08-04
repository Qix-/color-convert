exports.ansi16 = require('./ansi16');
exports.hcg = require('./hcg');
exports.hsl = require('./hsl');
exports.rgb = require('./rgb');

Object.defineProperty(module.exports, 'channels', {value: 3});
Object.defineProperty(module.exports, 'labels', {value: 'hsv'});
