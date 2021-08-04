module.exports = function (rgb) {
	const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};
