exports.ansi16 = require('./ansi16');
exports.ansi256 = require('./ansi256');
exports.apple = require('./apple');
exports.cmyk = require('./cmyk');
exports.gray = require('./gray');
exports.hcg = require('./hcg');
exports.hex = require('./hex');
exports.hsl = require('./hsl');
exports.hsv = require('./hsv');
exports.hwb = require('./hwb');
exports.keyword = require('./keyword');
exports.lab = require('./lab');
exports.xyz = require('./xyz');

Object.defineProperty(module.exports, 'channels', {value: 3});
Object.defineProperty(module.exports, 'labels', {value: 'rgb'});
