exports.cmyk = require('./cmyk');
exports.hsl = require('./hsl');
exports.hsv = require('./hsl');
exports.hwb = require('./hwb');
exports.lab = require('./lab');
exports.rgb = require('./rgb');

Object.defineProperty(module.exports, 'channels', {value: 1});
Object.defineProperty(module.exports, 'labels', {value: ['gray']});
