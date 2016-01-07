/* eslint-disable dot-notation */
var assert = require('assert');
var chalk = require('chalk');
var convert = require('../index');
var conversions = require('../conversions');

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
			console.log(chalk.red([fromModel, toModel].join('->')), chalk.red('(no conversion)'));
		}
	}
}

assert.deepEqual(convert.rgb.hsl([140, 200, 100]), [96, 48, 59]);
assert.deepEqual(convert.rgb.hsv([140, 200, 100]), [96, 50, 78]);
assert.deepEqual(convert.rgb.hwb([140, 200, 100]), [96, 39, 22]);
assert.deepEqual(convert.rgb.cmyk([140, 200, 100]), [30, 0, 50, 22]);
assert.deepEqual(convert.rgb.cmyk([0, 0, 0, 1]), [0, 0, 0, 100]);
assert.deepEqual(convert.rgb.keyword([255, 228, 196]), 'bisque');
assert.deepEqual(convert.rgb.xyz([92, 191, 84]), [25, 40, 15]);
assert.deepEqual(convert.rgb.lab([92, 191, 84]), [70, -50, 45]);
assert.deepEqual(convert.rgb.lch([92, 191, 84]), [70, 67, 138]);
assert.deepEqual(convert.rgb.ansi16([92, 191, 84]), 32);
assert.deepEqual(convert.rgb.ansi256([92, 191, 84]), 114);
assert.deepEqual(convert.rgb.hex([92, 191, 84]), '5CBF54');

assert.deepEqual(convert.hsl.rgb([96, 48, 59]), [140, 201, 100]);
assert.deepEqual(convert.hsl.hsv([96, 48, 59]), [96, 50, 79]); // colorpicker says [96,50,79]
assert.deepEqual(convert.hsl.hwb([96, 48, 59]), [96, 39, 21]); // computer round to 21, should be 22
assert.deepEqual(convert.hsl.cmyk([96, 48, 59]), [30, 0, 50, 21]);
assert.deepEqual(convert.hsl.keyword([240, 100, 50]), 'blue');
assert.deepEqual(convert.hsl.ansi16([240, 100, 50]), 94);
assert.deepEqual(convert.hsl.ansi256([240, 100, 50]), 21);
assert.deepEqual(convert.hsl.hex([240, 100, 50]), '0000FF');

assert.deepEqual(convert.hsv.rgb([96, 50, 78]), [139, 199, 99]);
assert.deepEqual(convert.hsv.hsl([96, 50, 78]), [96, 47, 59]);
assert.deepEqual(convert.hsv.hsl([0, 0, 0]), [0, 0, 0]);
assert.deepEqual(convert.hsv.hwb([96, 50, 78]), [96, 39, 22]);
assert.deepEqual(convert.hsv.cmyk([96, 50, 78]), [30, 0, 50, 22]);
assert.deepEqual(convert.hsv.keyword([240, 100, 100]), 'blue');
assert.deepEqual(convert.hsv.ansi16([240, 100, 100]), 94);
assert.deepEqual(convert.hsv.ansi256([240, 100, 100]), 21);
assert.deepEqual(convert.hsv.hex([251, 80, 42]), '25156B');

assert.deepEqual(convert.cmyk.rgb([30, 0, 50, 22]), [139, 199, 99]);
assert.deepEqual(convert.cmyk.hsl([30, 0, 50, 22]), [96, 47, 59]);
assert.deepEqual(convert.cmyk.hsv([30, 0, 50, 22]), [96, 50, 78]);
assert.deepEqual(convert.cmyk.hwb([30, 0, 50, 22]), [96, 39, 22]);
assert.deepEqual(convert.cmyk.keyword([100, 100, 0, 0]), 'blue');
assert.deepEqual(convert.cmyk.ansi16([30, 0, 50, 22]), 93);
assert.deepEqual(convert.cmyk.ansi256([30, 0, 50, 22]), 150);
assert.deepEqual(convert.cmyk.hex([30, 0, 50, 22]), '8BC763');

assert.deepEqual(convert.keyword.rgb('blue'), [0, 0, 255]);
assert.deepEqual(convert.keyword.hsl('blue'), [240, 100, 50]);
assert.deepEqual(convert.keyword.hsv('blue'), [240, 100, 100]);
assert.deepEqual(convert.keyword.hwb('blue'), [240, 0, 0]);
assert.deepEqual(convert.keyword.cmyk('blue'), [100, 100, 0, 0]);
assert.deepEqual(convert.keyword.lab('blue'), [32, 79, -108]);
assert.deepEqual(convert.keyword.xyz('blue'), [18, 7, 95]);
assert.deepEqual(convert.keyword.ansi16('purple'), 35);
assert.deepEqual(convert.keyword.ansi256('purple'), 127);
assert.deepEqual(convert.keyword.hex('blue'), '0000FF');

assert.deepEqual(convert.xyz.rgb([25, 40, 15]), [97, 190, 85]);
assert.deepEqual(convert.xyz.rgb([50, 100, 100]), [0, 255, 241]);
assert.deepEqual(convert.xyz.lab([25, 40, 15]), [69, -48, 44]);
assert.deepEqual(convert.xyz.lch([25, 40, 15]), [69, 65, 137]);

assert.deepEqual(convert.lab.xyz([69, -48, 44]), [25, 39, 15]);
assert.deepEqual(convert.lab.rgb([75, 20, -30]), [194, 175, 240]);
assert.deepEqual(convert.lab.lch([69, -48, 44]), [69, 65, 137]);

assert.deepEqual(convert.lch.lab([69, 65, 137]), [69, -48, 44]);
assert.deepEqual(convert.lch.xyz([69, 65, 137]), [25, 39, 15]);
assert.deepEqual(convert.lch.rgb([69, 65, 137]), [98, 188, 83]);

assert.deepEqual(convert.ansi16.rgb(103), [255, 255, 0]);
assert.deepEqual(convert.ansi256.rgb(175), [204, 102, 153]);

assert.deepEqual(convert.hex.rgb('ABCDEF'), [171, 205, 239]);

// non-array arguments
assert.deepEqual(convert.hsl.rgb(96, 48, 59), [140, 201, 100]);

// raw functions
function round(vals) {
	for (var i = 0; i < vals.length; i++) {
		vals[i] = vals[i].toFixed(1);
	}

	return vals;
}

assert.deepEqual(round(convert.hsl.rgb.raw([96, 48, 59])), [140.4, 200.6, 100.3]);
assert.deepEqual(round(convert.rgb.hsl.raw([140, 200, 100])), [96, 47.6, 58.8]);

assert.deepEqual(round(convert.hsv.rgb.raw([96, 50, 78])), [139.2, 198.9, 99.5]);
assert.deepEqual(round(convert.rgb.hsv.raw([140, 200, 100])), [96, 50, 78.4]);

assert.deepEqual(round(convert.hwb.rgb.raw([96, 39, 22])), [139.2, 198.9, 99.5]);
assert.deepEqual(round(convert.rgb.hwb.raw([140, 200, 100])), [96, 39.2, 21.6]);

assert.deepEqual(round(convert.cmyk.rgb.raw([30, 0, 50, 22])), [139.2, 198.9, 99.5]);
assert.deepEqual(round(convert.rgb.cmyk.raw([140, 200, 100])), [30, 0, 50, 21.6]);

assert.deepEqual(round(convert.keyword.rgb.raw('blue')), [0, 0, 255]);
assert.deepEqual(convert.rgb.keyword.raw([255, 228, 196]), 'bisque');

assert.deepEqual(round(convert.hsv.hsl.raw([96, 50, 78])), [96, 47, 58.5]);
assert.deepEqual(round(convert.hsl.hsv.raw([96, 48, 59])), [96, 50, 78.7]);

assert.deepEqual(round(convert.hsl.hsv.raw([96, 48, 59])), [96, 50, 78.7]);

assert.deepEqual(round(convert.xyz.rgb.raw([25, 40, 15])), [97.4, 189.9, 85]);
assert.deepEqual(round(convert.rgb.xyz.raw([92, 191, 84])), [24.6, 40.2, 14.8]);

assert.deepEqual(round(convert.rgb.lab.raw([92, 191, 84])), [69.6, -50.1, 44.6]);

// hwb
// http://dev.w3.org/csswg/css-color/#hwb-examples

// all extrem value should give black, white or grey
for (var angle = 0; angle <= 360; angle++) {
	assert.deepEqual(convert.hwb.rgb([angle, 0, 100]), [0, 0, 0]);
	assert.deepEqual(convert.hwb.rgb([angle, 100, 0]), [255, 255, 255]);
	assert.deepEqual(convert.hwb.rgb([angle, 100, 100]), [128, 128, 128]);
}

assert.deepEqual(convert.hwb.rgb([0, 0, 0]), [255, 0, 0]);
assert.deepEqual(convert.hwb.rgb([0, 20, 40]), [153, 51, 51]);
assert.deepEqual(convert.hwb.rgb([0, 40, 40]), [153, 102, 102]);
assert.deepEqual(convert.hwb.rgb([0, 40, 20]), [204, 102, 102]);

assert.deepEqual(convert.hwb.rgb([120, 0, 0]), [0, 255, 0]);
assert.deepEqual(convert.hwb.rgb([120, 20, 40]), [51, 153, 51]);
assert.deepEqual(convert.hwb.rgb([120, 40, 40]), [102, 153, 102]);
assert.deepEqual(convert.hwb.rgb([120, 40, 20]), [102, 204, 102]);

assert.deepEqual(convert.hwb.rgb([240, 0, 0]), [0, 0, 255]);
assert.deepEqual(convert.hwb.rgb([240, 20, 40]), [51, 51, 153]);
assert.deepEqual(convert.hwb.rgb([240, 40, 40]), [102, 102, 153]);
assert.deepEqual(convert.hwb.rgb([240, 40, 20]), [102, 102, 204]);

// black should always stay black
var val = [0, 0, 0];
assert.deepEqual(convert.hsl.hsv(val), val);
assert.deepEqual(convert.hsl.rgb(val), val);
assert.deepEqual(convert.hsl.hwb(val), [0, 0, 100]);
assert.deepEqual(convert.hsl.cmyk(val), [0, 0, 0, 100]);
assert.deepEqual(convert.hsl.hex(val), '000000');
