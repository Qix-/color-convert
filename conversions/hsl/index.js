exports.hcg = require('./hcg');
exports.hsv = require('./hsv');
exports.rgb = require('./rgb');

Object.defineProperty(module.exports, 'channels', {value: 3});
Object.defineProperty(module.exports, 'labels', {value: 'hsl'});
