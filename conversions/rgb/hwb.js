const rgb2hsl = require('./hsl');

module.exports = function (rgb) {
	const r = rgb[0];
	const g = rgb[1];
	let b = rgb[2];
	const h = rgb2hsl(rgb)[0];
	const w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};
