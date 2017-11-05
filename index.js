var conversions = require('./conversions');
var utils = require('./utils');

var define = function (data) {
	return Object.defineProperties(Object.create(null), data);
};

var convert = module.exports = {
	rgb: define({channels: {value: 3}, labels: {value: 'rgb'}}),
	hsl: define({channels: {value: 3}, labels: {value: 'hsl'}}),
	hsv: define({channels: {value: 3}, labels: {value: 'hsv'}}),
	hwb: define({channels: {value: 3}, labels: {value: 'hwb'}}),
	cmyk: define({channels: {value: 4}, labels: {value: 'cmyk'}}),
	xyz: define({channels: {value: 3}, labels: {value: 'xyz'}}),
	lab: define({channels: {value: 3}, labels: {value: 'lab'}}),
	lch: define({channels: {value: 3}, labels: {value: 'lch'}}),
	hex: define({channels: {value: 1}, labels: {value: ['hex']}}),
	keyword: define({channels: {value: 1}, labels: {value: ['keyword']}}),
	ansi16: define({channels: {value: 1}, labels: {value: ['ansi16']}}),
	ansi256: define({channels: {value: 1}, labels: {value: ['ansi256']}}),
	hcg: define({channels: {value: 3}, labels: {value: ['h', 'c', 'g']}}),
	apple: define({channels: {value: 3}, labels: {value: ['r16', 'g16', 'b16']}}),
	gray: define({channels: {value: 1}, labels: {value: ['gray']}})
};

var models = Object.keys(convert);

models.forEach(function (fromName) {
	models.forEach(function (toName) {
		if (conversions[fromName][toName]) {
			convert[fromName][toName] = utils.wrap(conversions[fromName][toName]);
			convert[fromName][toName].path = [fromName, toName];
		} else {
			convert[fromName][toName] = utils.wrap(function (args) { // build it lazily
				convert[fromName][toName] = utils.wrap(utils.search(conversions, fromName, toName));
				return convert[fromName][toName](args);
			});
		}
	});
});
