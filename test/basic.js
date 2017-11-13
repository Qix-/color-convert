/* eslint-disable dot-notation */
var assert = require('assert');
var chalk = require('chalk');
var convert = require('../index');
var conversions = require('../conversions');
var keywords = require('color-name');

var eq = assert.deepEqual; // shorthand

var models = Object.keys(conversions);
for (var len = models.length, i = 0; i < len; i++) {
	var toModel = models[i];
	for (var j = 0; j < len; j++) {
		var fromModel = models[j];

		if (toModel === fromModel) {
			continue;
		}

		var fn = convert[toModel][fromModel];
		if (fn) {
			var path = (fn.conversion || [fromModel, toModel]).slice();
			path[0] = chalk.bold.cyan(path[0]);
			path[path.length - 1] = chalk.bold.cyan(path[path.length - 1]);

			console.log(path.join(chalk.bold.black('->')));
		} else {
			console.log(chalk.red([toModel, fromModel].join('->')), chalk.red('(no conversion)'));
		}
	}

	// should not expose channels
	assert(convert[toModel].channels > 0);
	assert(Object.keys(convert[toModel]).indexOf('channels') === -1);
}

// check meta properties
models.forEach(function (model) {
	assert(convert[model].labels);
	assert(convert[model].channels);
	assert.equal(convert[model].labels.length, convert[model].channels);
});

// labels should be unique
var uniqued = {};
models.forEach(function (model) {
	var hash = [].slice.call(convert[model].labels).sort().join('');
	if (hash in uniqued) {
		throw new Error('models ' + uniqued[hash] + ' and ' + model + ' have the same label set');
	}
	uniqued[hash] = model;
});

eq(convert.rgb.hsl([140, 200, 100]), [96, 48, 59]);
eq(convert.rgb.hsv([140, 200, 100]), [96, 50, 78]);
eq(convert.rgb.hwb([140, 200, 100]), [96, 39, 22]);
eq(convert.rgb.cmyk([140, 200, 100]), [30, 0, 50, 22]);
eq(convert.rgb.cmyk([0, 0, 0, 1]), [0, 0, 0, 100]);
eq(convert.rgb.keyword([255, 228, 196]), 'bisque');
eq(convert.rgb.xyz([92, 191, 84]), [25, 40, 15]);
eq(convert.rgb.lab([92, 191, 84]), [70, -50, 45]);
eq(convert.rgb.lch([92, 191, 84]), [70, 67, 138]);
eq(convert.rgb.ansi16([92, 191, 84]), 32);
eq(convert.rgb.ansi256([92, 191, 84]), 114);
eq(convert.rgb.hex([92, 191, 84]), '5CBF54');
eq(convert.rgb.hcg([140, 200, 100]), [96, 39, 65]);
eq(convert.rgb.apple([255, 127, 0]), [65535, 32639, 0]);

eq(convert.hsl.rgb([96, 48, 59]), [140, 201, 100]);
eq(convert.hsl.hsv([96, 48, 59]), [96, 50, 79]); // colorpicker says [96,50,79]
eq(convert.hsl.hwb([96, 48, 59]), [96, 39, 21]); // computer round to 21, should be 22
eq(convert.hsl.cmyk([96, 48, 59]), [30, 0, 50, 21]);
eq(convert.hsl.keyword([240, 100, 50]), 'blue');
eq(convert.hsl.ansi16([240, 100, 50]), 94);
eq(convert.hsl.ansi256([240, 100, 50]), 21);
eq(convert.hsl.hex([240, 100, 50]), '0000FF');
eq(convert.hsl.hcg([96, 48, 59]), [96, 39, 65]);

eq(convert.hsv.rgb([96, 50, 78]), [139, 199, 99]);
eq(convert.hsv.hsl([96, 50, 78]), [96, 47, 59]);
eq(convert.hsv.hsl([0, 0, 0]), [0, 0, 0]);
eq(convert.hsv.hwb([96, 50, 78]), [96, 39, 22]);
eq(convert.hsv.cmyk([96, 50, 78]), [30, 0, 50, 22]);
eq(convert.hsv.keyword([240, 100, 100]), 'blue');
eq(convert.hsv.ansi16([240, 100, 100]), 94);
eq(convert.hsv.ansi256([240, 100, 100]), 21);
eq(convert.hsv.hex([251, 80, 42]), '25156B');
eq(convert.hsv.hcg([96, 50, 78]), [96, 39, 64]);

eq(convert.cmyk.rgb([30, 0, 50, 22]), [139, 199, 99]);
eq(convert.cmyk.hsl([30, 0, 50, 22]), [96, 47, 59]);
eq(convert.cmyk.hsv([30, 0, 50, 22]), [96, 50, 78]);
eq(convert.cmyk.hwb([30, 0, 50, 22]), [96, 39, 22]);
eq(convert.cmyk.keyword([100, 100, 0, 0]), 'blue');
eq(convert.cmyk.ansi16([30, 0, 50, 22]), 93);
eq(convert.cmyk.ansi256([30, 0, 50, 22]), 150);
eq(convert.cmyk.hex([30, 0, 50, 22]), '8BC763');

eq(convert.keyword.rgb('blue'), [0, 0, 255]);
eq(convert.keyword.hsl('blue'), [240, 100, 50]);
eq(convert.keyword.hsv('blue'), [240, 100, 100]);
eq(convert.keyword.hwb('blue'), [240, 0, 0]);
eq(convert.keyword.cmyk('blue'), [100, 100, 0, 0]);
eq(convert.keyword.lab('blue'), [32, 79, -108]);
eq(convert.keyword.xyz('blue'), [18, 7, 95]);
eq(convert.keyword.ansi16('purple'), 35);
eq(convert.keyword.ansi256('purple'), 127);
eq(convert.keyword.hex('blue'), '0000FF');

eq(convert.xyz.rgb([25, 40, 15]), [97, 190, 85]);
eq(convert.xyz.rgb([50, 100, 100]), [0, 255, 241]);
eq(convert.xyz.lab([25, 40, 15]), [69, -48, 44]);
eq(convert.xyz.lch([25, 40, 15]), [69, 65, 137]);

eq(convert.lab.xyz([69, -48, 44]), [25, 39, 15]);
eq(convert.lab.rgb([75, 20, -30]), [194, 175, 240]);
eq(convert.lab.lch([69, -48, 44]), [69, 65, 137]);

eq(convert.lch.lab([69, 65, 137]), [69, -48, 44]);
eq(convert.lch.xyz([69, 65, 137]), [25, 39, 15]);
eq(convert.lch.rgb([69, 65, 137]), [98, 188, 83]);

eq(convert.ansi16.rgb(103), [255, 255, 0]);
eq(convert.ansi256.rgb(175), [204, 102, 153]);

eq(convert.hex.rgb('ABCDEF'), [171, 205, 239]);
eq(convert.hex.rgb('AABBCC'), [170, 187, 204]);
eq(convert.hex.rgb('ABC'), [170, 187, 204]);

eq(convert.hcg.rgb([96, 39, 64]), [139, 199, 100]);
eq(convert.hcg.hsv([96, 39, 64]), [96, 50, 78]);
eq(convert.hcg.hsl([96, 39, 64]), [96, 47, 59]);

// non-array arguments
eq(convert.hsl.rgb(96, 48, 59), [140, 201, 100]);

// check hsv <-> hwb
eq(convert.rgb.hwb(convert.hsv.rgb.raw(96, 48, 59)), convert.hsv.hwb(96, 48, 59));
eq(convert.rgb.hwb(convert.hsv.rgb.raw(296, 48, 59)), convert.hsv.hwb(296, 48, 59));
eq(convert.rgb.hsv(convert.hwb.rgb.raw(96, 48, 49)), convert.hwb.hsv(96, 48, 49));
eq(convert.rgb.hsv(convert.hwb.rgb.raw(296, 38, 19)), convert.hwb.hsv(296, 38, 19));

// raw functions
function round(vals) {
	for (var i = 0; i < vals.length; i++) {
		vals[i] = vals[i].toFixed(1);
	}

	return vals;
}

eq(round(convert.hsl.rgb.raw([96, 48, 59])), [140.4, 200.6, 100.3]);
eq(round(convert.rgb.hsl.raw([140, 200, 100])), [96, 47.6, 58.8]);

eq(round(convert.hsv.rgb.raw([96, 50, 78])), [139.2, 198.9, 99.5]);
eq(round(convert.rgb.hsv.raw([140, 200, 100])), [96, 50, 78.4]);

eq(round(convert.hwb.rgb.raw([96, 39, 22])), [139.2, 198.9, 99.5]);
eq(round(convert.rgb.hwb.raw([140, 200, 100])), [96, 39.2, 21.6]);

eq(round(convert.cmyk.rgb.raw([30, 0, 50, 22])), [139.2, 198.9, 99.5]);
eq(round(convert.rgb.cmyk.raw([140, 200, 100])), [30, 0, 50, 21.6]);

eq(round(convert.keyword.rgb.raw('blue')), [0, 0, 255]);
eq(convert.rgb.keyword.raw([255, 228, 196]), 'bisque');

eq(round(convert.hsv.hsl.raw([96, 50, 78])), [96, 47, 58.5]);
eq(round(convert.hsv.hsl.raw([302, 32, 55])), [302, 19.0, 46.2]);
eq(round(convert.hsv.hsl.raw([267, 19, 89])), [267, 43.5, 80.5]);
eq(round(convert.hsv.hsl.raw([267, 91, 95])), [267, 89.6, 51.8]);
eq(round(convert.hsv.hsl.raw([267, 91, 12])), [267, 83.5, 6.5]);
eq(round(convert.hsv.hsl.raw([180, 50, 0])), [180, 33.3, 0]); // Preserve saturation

eq(round(convert.hsl.hsv.raw([96, 48, 59])), [96, 50, 78.7]);
eq(round(convert.hsl.hsv.raw([120, 54, 61])), [120, 51.3, 82.1]);
eq(round(convert.hsl.hsv.raw([27, 51, 43])), [27, 67.5, 64.9]);
eq(round(convert.hsl.hsv.raw([241, 17, 79])), [241, 8.6, 82.6]);
eq(round(convert.hsl.hsv.raw([120, 50, 0])), [120, 66.7, 0]); // Preserve saturation

eq(round(convert.xyz.rgb.raw([25, 40, 15])), [97.4, 189.9, 85]);
eq(round(convert.rgb.xyz.raw([92, 191, 84])), [24.6, 40.2, 14.8]);

eq(round(convert.rgb.lab.raw([92, 191, 84])), [69.6, -50.1, 44.6]);

// hwb
// http://dev.w3.org/csswg/css-color/#hwb-examples

// all extreme value should give black, white or grey
for (var angle = 0; angle <= 360; angle++) {
	eq(convert.hwb.rgb([angle, 0, 100]), [0, 0, 0]);
	eq(convert.hwb.rgb([angle, 100, 0]), [255, 255, 255]);
	eq(convert.hwb.rgb([angle, 100, 100]), [128, 128, 128]);
}

eq(convert.hwb.rgb([0, 0, 0]), [255, 0, 0]);
eq(convert.hwb.rgb([0, 20, 40]), [153, 51, 51]);
eq(convert.hwb.rgb([0, 40, 40]), [153, 102, 102]);
eq(convert.hwb.rgb([0, 40, 20]), [204, 102, 102]);

eq(convert.hwb.rgb([120, 0, 0]), [0, 255, 0]);
eq(convert.hwb.rgb([120, 20, 40]), [51, 153, 51]);
eq(convert.hwb.rgb([120, 40, 40]), [102, 153, 102]);
eq(convert.hwb.rgb([120, 40, 20]), [102, 204, 102]);

eq(convert.hwb.rgb([240, 0, 0]), [0, 0, 255]);
eq(convert.hwb.rgb([240, 20, 40]), [51, 51, 153]);
eq(convert.hwb.rgb([240, 40, 40]), [102, 102, 153]);
eq(convert.hwb.rgb([240, 40, 20]), [102, 102, 204]);

// black should always stay black
var val = [0, 0, 0];
eq(convert.hsl.hsv(val), val);
eq(convert.hsl.rgb(val), val);
eq(convert.hsl.hwb(val), [0, 0, 100]);
eq(convert.hsl.cmyk(val), [0, 0, 0, 100]);
eq(convert.hsl.hex(val), '000000');

// test keyword rounding
eq(convert.rgb.keyword(255, 255, 0), 'yellow');
eq(convert.rgb.keyword(255, 255, 1), 'yellow');
eq(convert.rgb.keyword(250, 254, 1), 'yellow');

// assure euclidean distance algorithm produces perfectly inverse results
for (var k in keywords) {
	if (keywords.hasOwnProperty(k)) {
		// why the roundabout testing method? certain css keywords have the same color values.
		var derived = convert.rgb.keyword(keywords[k]);
		eq(keywords[derived], keywords[k]);
	}
}

// basic gray tests
eq(convert.gray.rgb([0]), [0, 0, 0]);
eq(convert.gray.rgb([50]), [128, 128, 128]);
eq(convert.gray.rgb([100]), [255, 255, 255]);
eq(convert.gray.hsl([50]), [0, 0, 50]);
eq(convert.gray.hsv([50]), [0, 0, 50]);
eq(convert.gray.hwb([50]), [0, 100, 50]);
eq(convert.gray.cmyk([50]), [0, 0, 0, 50]);
eq(convert.gray.lab([50]), [50, 0, 0]);
eq(convert.gray.hex([50]), '808080');
eq(convert.gray.hex([100]), 'FFFFFF');
eq(convert.gray.hex([0]), '000000');

eq(convert.rgb.gray([0, 0, 0]), [0]);
eq(convert.rgb.gray([128, 128, 128]), [50]);
eq(convert.rgb.gray([255, 255, 255]), [100]);
eq(convert.rgb.gray([0, 128, 255]), [50]);
