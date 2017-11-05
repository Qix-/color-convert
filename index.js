var conversions = require('./conversions');
var utils = require('./utils');

var convert = module.exports = {};

var models = Object.keys(conversions);

models.forEach(function (fromName) {
	convert[fromName] = Object.defineProperties({}, {
		channels: {value: conversions[fromName].channels},
		labels: {value: conversions[fromName].labels}
	});

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
