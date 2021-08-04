const cssKeywords = require('color-name');

exports.rgb = function (keyword) {
	return cssKeywords[keyword];
};

Object.defineProperty(module.exports, 'channels', {value: 1});
Object.defineProperty(module.exports, 'labels', {value: ['keyword']});
