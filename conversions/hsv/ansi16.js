const rgb2ansi16 = require('../rgb/ansi16');
const hsv2rgb = require('../hsv/rgb');

module.exports = function (args) {
	// Optimization here; we already know the value and don't need to get
	// it converted for us.
	return rgb2ansi16(hsv2rgb(args), args[2]);
};
