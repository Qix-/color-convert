import assert from 'node:assert';
import chalk from 'chalk';
import keywords from 'color-name';
import conversions from '../conversions.js';
import convert from '../index.js';

const models = Object.keys(conversions);
for (let {length} = models, i = 0; i < length; i++) {
	const toModel = models[i];
	for (let j = 0; j < length; j++) {
		const fromModel = models[j];

		if (toModel === fromModel) {
			continue;
		}

		const fn = convert[toModel][fromModel];
		if (fn) {
			const path = [...(fn.conversion || [fromModel, toModel])];
			path[0] = chalk.bold.cyan(path[0]);
			path[path.length - 1] = chalk.bold.cyan(path[path.length - 1]);

			console.log(path.join(chalk.bold.black('->')));
		} else {
			console.log(chalk.red([toModel, fromModel].join('->')), chalk.red('(no conversion)'));
		}
	}

	// Should not expose channels
	assert.ok(convert[toModel].channels > 0);
	assert.ok(!Object.keys(convert[toModel]).includes('channels'));
}

// Labels should be unique
const uniqued = {};
for (const model of models) {
	const hash = Array.prototype.slice.call(convert[model].labels).sort().join('');
	if (hash in uniqued) {
		throw new Error('models ' + uniqued[hash] + ' and ' + model + ' have the same label set');
	}

	uniqued[hash] = model;
}

assert.deepStrictEqual(rgbToHsl([140, 200, 100]), [96, 48, 59]);
assert.deepStrictEqual(rgbToHsv([140, 200, 100]), [96, 50, 78]);
assert.deepStrictEqual(rgbToHwb([140, 200, 100]), [96, 39, 22]);
assert.deepStrictEqual(rgbToCmyk([140, 200, 100]), [30, 0, 50, 22]);
assert.deepStrictEqual(rgbToCmyk([0, 0, 0, 1]), [0, 0, 0, 100]);
assert.deepStrictEqual(rgbToKeyword([255, 228, 196]), 'bisque');
assert.deepStrictEqual(rgbToXyz([92, 191, 84]), [25, 40, 15]);
assert.deepStrictEqual(rgbToLab([92, 191, 84]), [70, -50, 45]);
assert.deepStrictEqual(rgbToLch([92, 191, 84]), [70, 67, 138]);
assert.deepStrictEqual(rgbToAnsi16([92, 191, 84]), 32);
assert.deepStrictEqual(rgbToAnsi256([92, 191, 84]), 114);
assert.deepStrictEqual(rgbToHex([92, 191, 84]), '5CBF54');
assert.deepStrictEqual(rgbToHcg([140, 200, 100]), [96, 39, 65]);
assert.deepStrictEqual(rgbToApple([255, 127, 0]), [65_535, 32_639, 0]);

assert.deepStrictEqual(hslToRgb([96, 48, 59]), [140, 201, 100]);
assert.deepStrictEqual(hslToHsv([96, 48, 59]), [96, 50, 79]); // Colorpicker says [96,50,79]
assert.deepStrictEqual(hslToHwb([96, 48, 59]), [96, 39, 21]); // Computer round to 21, should be 22
assert.deepStrictEqual(hslToCmyk([96, 48, 59]), [30, 0, 50, 21]);
assert.deepStrictEqual(hslToKeyword([240, 100, 50]), 'blue');
assert.deepStrictEqual(hslToAnsi16([240, 100, 50]), 94);
assert.deepStrictEqual(hslToAnsi256([240, 100, 50]), 21);
assert.deepStrictEqual(hslToHex([240, 100, 50]), '0000FF');
assert.deepStrictEqual(hslToHcg([96, 48, 59]), [96, 39, 65]);

assert.deepStrictEqual(hsvToRgb([96, 50, 78]), [139, 199, 99]);
assert.deepStrictEqual(hsvToHsl([96, 50, 78]), [96, 47, 59]);
assert.deepStrictEqual(hsvToHsl([0, 0, 0]), [0, 0, 0]);
assert.deepStrictEqual(hsvToHwb([96, 50, 78]), [96, 39, 22]);
assert.deepStrictEqual(hsvToCmyk([96, 50, 78]), [30, 0, 50, 22]);
assert.deepStrictEqual(hsvToKeyword([240, 100, 100]), 'blue');
assert.deepStrictEqual(hsvToAnsi16([240, 100, 100]), 94);
assert.deepStrictEqual(hsvToAnsi256([240, 100, 100]), 21);
assert.deepStrictEqual(hsvToHex([251, 80, 42]), '25156B');
assert.deepStrictEqual(hsvToHcg([96, 50, 78]), [96, 39, 64]);

assert.deepStrictEqual(cmykToRgb([30, 0, 50, 22]), [139, 199, 99]);
assert.deepStrictEqual(cmykToHsl([30, 0, 50, 22]), [96, 47, 59]);
assert.deepStrictEqual(cmykToHsv([30, 0, 50, 22]), [96, 50, 78]);
assert.deepStrictEqual(cmykToHwb([30, 0, 50, 22]), [96, 39, 22]);
assert.deepStrictEqual(cmykToKeyword([100, 100, 0, 0]), 'blue');
assert.deepStrictEqual(cmykToAnsi16([30, 0, 50, 22]), 93);
assert.deepStrictEqual(cmykToAnsi256([30, 0, 50, 22]), 150);
assert.deepStrictEqual(cmykToHex([30, 0, 50, 22]), '8BC763');

assert.deepStrictEqual(keywordToRgb('blue'), [0, 0, 255]);
assert.deepStrictEqual(keywordToHsl('blue'), [240, 100, 50]);
assert.deepStrictEqual(keywordToHsv('blue'), [240, 100, 100]);
assert.deepStrictEqual(keywordToHwb('blue'), [240, 0, 0]);
assert.deepStrictEqual(keywordToCmyk('blue'), [100, 100, 0, 0]);
assert.deepStrictEqual(keywordToLab('blue'), [32, 79, -108]);
assert.deepStrictEqual(keywordToXyz('blue'), [18, 7, 95]);
assert.deepStrictEqual(keywordToAnsi16('purple'), 35);
assert.deepStrictEqual(keywordToAnsi256('purple'), 127);
assert.deepStrictEqual(keywordToHex('blue'), '0000FF');

assert.deepStrictEqual(xyzToRgb([25, 40, 15]), [97, 190, 85]);
assert.deepStrictEqual(xyzToRgb([50, 100, 100]), [0, 255, 241]);
assert.deepStrictEqual(xyzToLab([25, 40, 15]), [69, -48, 44]);
assert.deepStrictEqual(xyzToLch([25, 40, 15]), [69, 65, 137]);

assert.deepStrictEqual(labToXyz([69, -48, 44]), [25, 39, 15]);
assert.deepStrictEqual(labToRgb([75, 20, -30]), [194, 175, 240]);
assert.deepStrictEqual(labToLch([69, -48, 44]), [69, 65, 137]);

assert.deepStrictEqual(lchToLab([69, 65, 137]), [69, -48, 44]);
assert.deepStrictEqual(lchToXyz([69, 65, 137]), [25, 39, 15]);
assert.deepStrictEqual(lchToRgb([69, 65, 137]), [98, 188, 83]);

assert.deepStrictEqual(ansi16ToRgb(103), [255, 255, 0]);
assert.deepStrictEqual(ansi256ToRgb(175), [204, 102, 153]);

assert.deepStrictEqual(hexToRgb('ABCDEF'), [171, 205, 239]);
assert.deepStrictEqual(hexToRgb('AABBCC'), [170, 187, 204]);
assert.deepStrictEqual(hexToRgb('ABC'), [170, 187, 204]);

assert.deepStrictEqual(hcgToRgb([96, 39, 64]), [139, 199, 100]);
assert.deepStrictEqual(hcgToHsv([96, 39, 64]), [96, 50, 78]);
assert.deepStrictEqual(hcgToHsl([96, 39, 64]), [96, 47, 59]);

// https://github.com/Qix-/color-convert/issues/73
assert.deepStrictEqual(convert.rgb.hcg.raw([250, 0, 255]), [298.823_529_411_764_7, 100, 0]);

// Non-array arguments
assert.deepStrictEqual(hslToRgb(96, 48, 59), [140, 201, 100]);

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
assert.deepStrictEqual(round(convert.hsv.hsl.raw([302, 32, 55])), [302, 19, 46.2]);
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
	assert.deepStrictEqual(hwbToRgb([angle, 0, 100]), [0, 0, 0]);
	assert.deepStrictEqual(hwbToRgb([angle, 100, 0]), [255, 255, 255]);
	assert.deepStrictEqual(hwbToRgb([angle, 100, 100]), [128, 128, 128]);
}

assert.deepStrictEqual(hwbToRgb([0, 0, 0]), [255, 0, 0]);
assert.deepStrictEqual(hwbToRgb([0, 20, 40]), [153, 51, 51]);
assert.deepStrictEqual(hwbToRgb([0, 40, 40]), [153, 102, 102]);
assert.deepStrictEqual(hwbToRgb([0, 40, 20]), [204, 102, 102]);

assert.deepStrictEqual(hwbToRgb([120, 0, 0]), [0, 255, 0]);
assert.deepStrictEqual(hwbToRgb([120, 20, 40]), [51, 153, 51]);
assert.deepStrictEqual(hwbToRgb([120, 40, 40]), [102, 153, 102]);
assert.deepStrictEqual(hwbToRgb([120, 40, 20]), [102, 204, 102]);

assert.deepStrictEqual(hwbToRgb([240, 0, 0]), [0, 0, 255]);
assert.deepStrictEqual(hwbToRgb([240, 20, 40]), [51, 51, 153]);
assert.deepStrictEqual(hwbToRgb([240, 40, 40]), [102, 102, 153]);
assert.deepStrictEqual(hwbToRgb([240, 40, 20]), [102, 102, 204]);

// Black should always stay black
const value = [0, 0, 0];
assert.deepStrictEqual(hslToHsv(value), value);
assert.deepStrictEqual(hslToRgb(value), value);
assert.deepStrictEqual(hslToHwb(value), [0, 0, 100]);
assert.deepStrictEqual(hslToCmyk(value), [0, 0, 0, 100]);
assert.deepStrictEqual(hslToHex(value), '000000');

// Test keyword rounding
assert.deepStrictEqual(rgbToKeyword(255, 255, 0), 'yellow');
assert.deepStrictEqual(rgbToKeyword(255, 255, 1), 'yellow');
assert.deepStrictEqual(rgbToKeyword(250, 254, 1), 'yellow');

// Assure euclidean distance algorithm produces perfectly inverse results
const keywordKeys = Object.keys(keywords);
for (const k of keywordKeys) {
	// Why the roundabout testing method? certain css keywords have the same color values.
	const derived = rgbToKeyword(keywords[k]);
	assert.deepStrictEqual(keywords[derived], keywords[k]);
}

// Basic gray tests
assert.deepStrictEqual(grayToRgb([0]), [0, 0, 0]);
assert.deepStrictEqual(grayToRgb([50]), [128, 128, 128]);
assert.deepStrictEqual(grayToRgb([100]), [255, 255, 255]);
assert.deepStrictEqual(grayToHsl([50]), [0, 0, 50]);
assert.deepStrictEqual(grayToHsv([50]), [0, 0, 50]);
assert.deepStrictEqual(grayToHwb([50]), [0, 100, 50]);
assert.deepStrictEqual(grayToCmyk([50]), [0, 0, 0, 50]);
assert.deepStrictEqual(grayToLab([50]), [50, 0, 0]);
assert.deepStrictEqual(grayToHex([50]), '808080');
assert.deepStrictEqual(grayToHex([100]), 'FFFFFF');
assert.deepStrictEqual(grayToHex([0]), '000000');

assert.deepStrictEqual(rgbToGray([0, 0, 0]), [0]);
assert.deepStrictEqual(rgbToGray([128, 128, 128]), [50]);
assert.deepStrictEqual(rgbToGray([255, 255, 255]), [100]);
assert.deepStrictEqual(rgbToGray([0, 128, 255]), [50]);

// https://github.com/Qix-/color-convert/issues/74
assert.deepStrictEqual(rgbToAnsi256(40, 38, 41), 235);
