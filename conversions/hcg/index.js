exports.hsl = require('./hsl');
exports.hsv = require('./hsv');
exports.hwb = require('./hwb');
exports.rgb = require('./rgb');

Object.defineProperty(module.exports, 'channels', {value: 3});
Object.defineProperty(module.exports, 'labels', {value: 'hcg'});
