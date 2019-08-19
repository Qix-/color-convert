const assert = require('assert');
const chalk = require('chalk');
const keywords = require('color-name');

const conversions = require('../conversions');

const convert = require('..');

const models = Object.keys(conversions);
for (let len = models.length, i = 0; i < len; i++) {
	const toModel = models[i];
	for (let j = 0; j < len; j++) {
		const fromModel = models[j];

		if (toModel === fromModel) {
			continue;
		}

		const fn = convert[toModel][fromModel];
		if (fn) {
			const path = (fn.conversion || [fromModel, toModel]).slice();
			path[0] = chalk.bold.cyan(path[0]);
			path[path.length - 1] = chalk.bold.cyan(path[path.length - 1]);

			console.log(path.join(chalk.bold.black('->')));
		} else {
			console.log(chalk.red([toModel, fromModel].join('->')), chalk.red('(no conversion)'));
		}
	}

	// Should not expose channels
	assert.ok(convert[toModel].channels > 0);
	assert.ok(Object.keys(convert[toModel]).indexOf('channels') === -1);
}

// Labels should be unique
const uniqued = {};
models.forEach(model => {
	const hash = [].slice.call(convert[model].labels).sort().join('');
	if (hash in uniqued) {
		throw new Error('models ' + uniqued[hash] + ' and ' + model + ' have the same label set');
	}

	uniqued[hash] = model;
});

assert.deepStrictEqual(convert.rgb.hsl([140, 200, 100]), [96, 48, 59]);
assert.deepStrictEqual(convert.rgb.hsv([140, 200, 100]), [96, 50, 78]);
assert.deepStrictEqual(convert.rgb.hwb([140, 200, 100]), [96, 39, 22]);
assert.deepStrictEqual(convert.rgb.cmyk([140, 200, 100]), [30, 0, 50, 22]);
assert.deepStrictEqual(convert.rgb.cmyk([0, 0, 0, 1]), [0, 0, 0, 100]);
assert.deepStrictEqual(convert.rgb.keyword([255, 228, 196]), 'bisque');
assert.deepStrictEqual(convert.rgb.xyz([92, 191, 84]), [25, 40, 15]);
assert.deepStrictEqual(convert.rgb.lab([92, 191, 84]), [70, -50, 45]);
assert.deepStrictEqual(convert.rgb.lch([92, 191, 84]), [70, 67, 138]);
assert.deepStrictEqual(convert.rgb.ansi16([92, 191, 84]), 32);
assert.deepStrictEqual(convert.rgb.ansi256([92, 191, 84]), 114);
assert.deepStrictEqual(convert.rgb.hex([92, 191, 84]), '5CBF54');
assert.deepStrictEqual(convert.rgb.hcg([140, 200, 100]), [96, 39, 65]);
assert.deepStrictEqual(convert.rgb.apple([255, 127, 0]), [65535, 32639, 0]);

assert.deepStrictEqual(convert.hsl.rgb([96, 48, 59]), [140, 201, 100]);
assert.deepStrictEqual(convert.hsl.hsv([96, 48, 59]), [96, 50, 79]); // Colorpicker says [96,50,79]
assert.deepStrictEqual(convert.hsl.hwb([96, 48, 59]), [96, 39, 21]); // Computer round to 21, should be 22
assert.deepStrictEqual(convert.hsl.cmyk([96, 48, 59]), [30, 0, 50, 21]);
assert.deepStrictEqual(convert.hsl.keyword([240, 100, 50]), 'blue');
assert.deepStrictEqual(convert.hsl.ansi16([240, 100, 50]), 94);
assert.deepStrictEqual(convert.hsl.ansi256([240, 100, 50]), 21);
assert.deepStrictEqual(convert.hsl.hex([240, 100, 50]), '0000FF');
assert.deepStrictEqual(convert.hsl.hcg([96, 48, 59]), [96, 39, 65]);

assert.deepStrictEqual(convert.hsv.rgb([96, 50, 78]), [139, 199, 99]);
assert.deepStrictEqual(convert.hsv.hsl([96, 50, 78]), [96, 47, 59]);
assert.deepStrictEqual(convert.hsv.hsl([0, 0, 0]), [0, 0, 0]);
assert.deepStrictEqual(convert.hsv.hwb([96, 50, 78]), [96, 39, 22]);
assert.deepStrictEqual(convert.hsv.cmyk([96, 50, 78]), [30, 0, 50, 22]);
assert.deepStrictEqual(convert.hsv.keyword([240, 100, 100]), 'blue');
assert.deepStrictEqual(convert.hsv.ansi16([240, 100, 100]), 94);
assert.deepStrictEqual(convert.hsv.ansi256([240, 100, 100]), 21);
assert.deepStrictEqual(convert.hsv.hex([251, 80, 42]), '25156B');
assert.deepStrictEqual(convert.hsv.hcg([96, 50, 78]), [96, 39, 64]);

assert.deepStrictEqual(convert.cmyk.rgb([30, 0, 50, 22]), [139, 199, 99]);
assert.deepStrictEqual(convert.cmyk.hsl([30, 0, 50, 22]), [96, 47, 59]);
assert.deepStrictEqual(convert.cmyk.hsv([30, 0, 50, 22]), [96, 50, 78]);
assert.deepStrictEqual(convert.cmyk.hwb([30, 0, 50, 22]), [96, 39, 22]);
assert.deepStrictEqual(convert.cmyk.keyword([100, 100, 0, 0]), 'blue');
assert.deepStrictEqual(convert.cmyk.ansi16([30, 0, 50, 22]), 93);
assert.deepStrictEqual(convert.cmyk.ansi256([30, 0, 50, 22]), 150);
assert.deepStrictEqual(convert.cmyk.hex([30, 0, 50, 22]), '8BC763');

assert.deepStrictEqual(convert.keyword.rgb('blue'), [0, 0, 255]);
assert.deepStrictEqual(convert.keyword.hsl('blue'), [240, 100, 50]);
assert.deepStrictEqual(convert.keyword.hsv('blue'), [240, 100, 100]);
assert.deepStrictEqual(convert.keyword.hwb('blue'), [240, 0, 0]);
assert.deepStrictEqual(convert.keyword.cmyk('blue'), [100, 100, 0, 0]);
assert.deepStrictEqual(convert.keyword.lab('blue'), [32, 79, -108]);
assert.deepStrictEqual(convert.keyword.xyz('blue'), [18, 7, 95]);
assert.deepStrictEqual(convert.keyword.ansi16('purple'), 35);
assert.deepStrictEqual(convert.keyword.ansi256('purple'), 127);
assert.deepStrictEqual(convert.keyword.hex('blue'), '0000FF');

assert.deepStrictEqual(convert.xyz.rgb([25, 40, 15]), [97, 190, 85]);
assert.deepStrictEqual(convert.xyz.rgb([50, 100, 100]), [0, 255, 241]);
assert.deepStrictEqual(convert.xyz.lab([25, 40, 15]), [69, -48, 44]);
assert.deepStrictEqual(convert.xyz.lch([25, 40, 15]), [69, 65, 137]);

assert.deepStrictEqual(convert.lab.xyz([69, -48, 44]), [25, 39, 15]);
assert.deepStrictEqual(convert.lab.rgb([75, 20, -30]), [194, 175, 240]);
assert.deepStrictEqual(convert.lab.lch([69, -48, 44]), [69, 65, 137]);

assert.deepStrictEqual(convert.lch.lab([69, 65, 137]), [69, -48, 44]);
assert.deepStrictEqual(convert.lch.xyz([69, 65, 137]), [25, 39, 15]);
assert.deepStrictEqual(convert.lch.rgb([69, 65, 137]), [98, 188, 83]);

assert.deepStrictEqual(convert.ansi16.rgb(103), [255, 255, 0]);
assert.deepStrictEqual(convert.ansi256.rgb(175), [204, 102, 153]);

assert.deepStrictEqual(convert.hex.rgb('ABCDEF'), [171, 205, 239]);
assert.deepStrictEqual(convert.hex.rgb('AABBCC'), [170, 187, 204]);
assert.deepStrictEqual(convert.hex.rgb('ABC'), [170, 187, 204]);

assert.deepStrictEqual(convert.hcg.rgb([96, 39, 64]), [139, 199, 100]);
assert.deepStrictEqual(convert.hcg.hsv([96, 39, 64]), [96, 50, 78]);
assert.deepStrictEqual(convert.hcg.hsl([96, 39, 64]), [96, 47, 59]);

// https://github.com/Qix-/color-convert/issues/73
assert.deepStrictEqual(convert.rgb.hcg.raw([250, 0, 255]), [298.8235294117647, 100, 0]);

// Non-array arguments
assert.deepStrictEqual(convert.hsl.rgb(96, 48, 59), [140, 201, 100]);

// Raw functions
function round(vals) {
	for (let i = 0; i < vals.length; i++) {
		vals[i] = Number(vals[i].toFixed(1));
	}

	return vals;
}

assert.deepStrictEqual(round(convert.hsl.rgb.raw([96, 48, 59])), [140.4, 200.6, 100.3]);
assert.deepStrictEqual(round(convert.rgb.hsl.raw([140, 200, 100])), [96, 47.6, 58.8]);

assert.deepStrictEqual(round(convert.hsv.rgb.raw([96, 50, 78])), [139.2, 198.9, 99.5]);
assert.deepStrictEqual(round(convert.rgb.hsv.raw([140, 200, 100])), [96, 50, 78.4]);

assert.deepStrictEqual(round(convert.hwb.rgb.raw([96, 39, 22])), [139.2, 198.9, 99.5]);
assert.deepStrictEqual(round(convert.rgb.hwb.raw([140, 200, 100])), [96, 39.2, 21.6]);

assert.deepStrictEqual(round(convert.cmyk.rgb.raw([30, 0, 50, 22])), [139.2, 198.9, 99.5]);
assert.deepStrictEqual(round(convert.rgb.cmyk.raw([140, 200, 100])), [30, 0, 50, 21.6]);

assert.deepStrictEqual(round(convert.keyword.rgb.raw('blue')), [0, 0, 255]);
assert.deepStrictEqual(convert.rgb.keyword.raw([255, 228, 196]), 'bisque');

assert.deepStrictEqual(round(convert.hsv.hsl.raw([96, 50, 78])), [96, 47, 58.5]);
assert.deepStrictEqual(round(convert.hsv.hsl.raw([302, 32, 55])), [302, 19.0, 46.2]);
assert.deepStrictEqual(round(convert.hsv.hsl.raw([267, 19, 89])), [267, 43.5, 80.5]);
assert.deepStrictEqual(round(convert.hsv.hsl.raw([267, 91, 95])), [267, 89.6, 51.8]);
assert.deepStrictEqual(round(convert.hsv.hsl.raw([267, 91, 12])), [267, 83.5, 6.5]);
assert.deepStrictEqual(round(convert.hsv.hsl.raw([180, 50, 0])), [180, 33.3, 0]); // Preserve saturation

assert.deepStrictEqual(round(convert.hsl.hsv.raw([96, 48, 59])), [96, 50, 78.7]);
assert.deepStrictEqual(round(convert.hsl.hsv.raw([120, 54, 61])), [120, 51.3, 82.1]);
assert.deepStrictEqual(round(convert.hsl.hsv.raw([27, 51, 43])), [27, 67.5, 64.9]);
assert.deepStrictEqual(round(convert.hsl.hsv.raw([241, 17, 79])), [241, 8.6, 82.6]);
assert.deepStrictEqual(round(convert.hsl.hsv.raw([120, 50, 0])), [120, 66.7, 0]); // Preserve saturation

assert.deepStrictEqual(round(convert.xyz.rgb.raw([25, 40, 15])), [97.4, 189.9, 85]);
assert.deepStrictEqual(round(convert.rgb.xyz.raw([92, 191, 84])), [24.6, 40.2, 14.8]);

assert.deepStrictEqual(round(convert.rgb.lab.raw([92, 191, 84])), [69.6, -50.1, 44.6]);

// Hwb
// http://dev.w3.org/csswg/css-color/#hwb-examples

// all extreme value should give black, white or grey
for (let angle = 0; angle <= 360; angle++) {
	assert.deepStrictEqual(convert.hwb.rgb([angle, 0, 100]), [0, 0, 0]);
	assert.deepStrictEqual(convert.hwb.rgb([angle, 100, 0]), [255, 255, 255]);
	assert.deepStrictEqual(convert.hwb.rgb([angle, 100, 100]), [128, 128, 128]);
}

assert.deepStrictEqual(convert.hwb.rgb([0, 0, 0]), [255, 0, 0]);
assert.deepStrictEqual(convert.hwb.rgb([0, 20, 40]), [153, 51, 51]);
assert.deepStrictEqual(convert.hwb.rgb([0, 40, 40]), [153, 102, 102]);
assert.deepStrictEqual(convert.hwb.rgb([0, 40, 20]), [204, 102, 102]);

assert.deepStrictEqual(convert.hwb.rgb([120, 0, 0]), [0, 255, 0]);
assert.deepStrictEqual(convert.hwb.rgb([120, 20, 40]), [51, 153, 51]);
assert.deepStrictEqual(convert.hwb.rgb([120, 40, 40]), [102, 153, 102]);
assert.deepStrictEqual(convert.hwb.rgb([120, 40, 20]), [102, 204, 102]);

assert.deepStrictEqual(convert.hwb.rgb([240, 0, 0]), [0, 0, 255]);
assert.deepStrictEqual(convert.hwb.rgb([240, 20, 40]), [51, 51, 153]);
assert.deepStrictEqual(convert.hwb.rgb([240, 40, 40]), [102, 102, 153]);
assert.deepStrictEqual(convert.hwb.rgb([240, 40, 20]), [102, 102, 204]);

// Black should always stay black
const val = [0, 0, 0];
assert.deepStrictEqual(convert.hsl.hsv(val), val);
assert.deepStrictEqual(convert.hsl.rgb(val), val);
assert.deepStrictEqual(convert.hsl.hwb(val), [0, 0, 100]);
assert.deepStrictEqual(convert.hsl.cmyk(val), [0, 0, 0, 100]);
assert.deepStrictEqual(convert.hsl.hex(val), '000000');

// Test keyword rounding
assert.deepStrictEqual(convert.rgb.keyword(255, 255, 0), 'yellow');
assert.deepStrictEqual(convert.rgb.keyword(255, 255, 1), 'yellow');
assert.deepStrictEqual(convert.rgb.keyword(250, 254, 1), 'yellow');

// Assure euclidean distance algorithm produces perfectly inverse results
const keywordKeys = Object.keys(keywords);
for (const k of keywordKeys) {
	// Why the roundabout testing method? certain css keywords have the same color values.
	const derived = convert.rgb.keyword(keywords[k]);
	assert.deepStrictEqual(keywords[derived], keywords[k]);
}

// Basic gray tests
assert.deepStrictEqual(convert.gray.rgb([0]), [0, 0, 0]);
assert.deepStrictEqual(convert.gray.rgb([50]), [128, 128, 128]);
assert.deepStrictEqual(convert.gray.rgb([100]), [255, 255, 255]);
assert.deepStrictEqual(convert.gray.hsl([50]), [0, 0, 50]);
assert.deepStrictEqual(convert.gray.hsv([50]), [0, 0, 50]);
assert.deepStrictEqual(convert.gray.hwb([50]), [0, 100, 50]);
assert.deepStrictEqual(convert.gray.cmyk([50]), [0, 0, 0, 50]);
assert.deepStrictEqual(convert.gray.lab([50]), [50, 0, 0]);
assert.deepStrictEqual(convert.gray.hex([50]), '808080');
assert.deepStrictEqual(convert.gray.hex([100]), 'FFFFFF');
assert.deepStrictEqual(convert.gray.hex([0]), '000000');

assert.deepStrictEqual(convert.rgb.gray([0, 0, 0]), [0]);
assert.deepStrictEqual(convert.rgb.gray([128, 128, 128]), [50]);
assert.deepStrictEqual(convert.rgb.gray([255, 255, 255]), [100]);
assert.deepStrictEqual(convert.rgb.gray([0, 128, 255]), [50]);
