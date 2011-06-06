var convert = require("../conversions"),
    assert = require("assert");

assert.deepEqual(convert.hsl2rgb([96, 48, 59]), [140, 201, 100]);
assert.deepEqual(convert.rgb2hsl([140, 200, 100]), [96, 48, 59]);

assert.deepEqual(convert.hsv2rgb([96, 50, 78]), [139, 199, 99]);
assert.deepEqual(convert.rgb2hsv([140, 200, 100]), [96, 50, 78]);

assert.deepEqual(convert.cmyk2rgb([30, 0, 50, 22]), [139, 199, 99]);
assert.deepEqual(convert.rgb2cmyk([140, 200, 100]), [30, 0, 50, 22]);

assert.deepEqual(convert.keyword2rgb("blue"), [0, 0, 255]);
assert.deepEqual(convert.rgb2keyword([255, 228, 196]), "bisque");

assert.deepEqual(convert.hsv2hsl([96, 50, 78]), [96, 47, 59]);
assert.deepEqual(convert.hsl2hsv([96, 48, 59]), [96, 39, 79]); // colorpicker says [96,50,79]

assert.deepEqual(convert.xyz2rgb([25, 40, 15]), [97, 190, 85]);
assert.deepEqual(convert.rgb2xyz([92, 191, 84]), [25, 40, 15]);

assert.deepEqual(convert.rgb2lab([92, 191, 84]), [70, -50, 45]);


// non-array arguments
assert.deepEqual(convert.hsl2rgb(96, 48, 59), [140, 201, 100]);

// raw functions
function round(vals) {
  for (var i = 0; i < vals.length; i++)
    vals[i] = vals[i].toFixed(1);
  return vals;
}

assert.deepEqual(round(convert.hsl2rgbRaw([96, 48, 59])), [140.4, 200.6, 100.3]);
assert.deepEqual(round(convert.rgb2hslRaw([140, 200, 100])), [96, 47.6, 58.8]);

assert.deepEqual(round(convert.hsv2rgbRaw([96, 50, 78])), [139.2, 198.9, 99.5]);
assert.deepEqual(round(convert.rgb2hsvRaw([140, 200, 100])), [96, 50, 78.4]);

assert.deepEqual(round(convert.cmyk2rgbRaw([30, 0, 50, 22])), [139.2, 198.9, 99.5]);
assert.deepEqual(round(convert.rgb2cmykRaw([140, 200, 100])), [30, 0, 50, 21.6]);

assert.deepEqual(round(convert.keyword2rgbRaw("blue")), [0, 0, 255]);
assert.deepEqual(convert.rgb2keywordRaw([255, 228, 196]), "bisque");

assert.deepEqual(round(convert.hsv2hslRaw([96, 50, 78])), [96, 47, 58.5]);
assert.deepEqual(round(convert.hsl2hsvRaw([96, 48, 59])), [96, 39.4, 78.7]);

assert.deepEqual(round(convert.xyz2rgbRaw([25, 40, 15])), [97.4, 189.9, 85]);
assert.deepEqual(round(convert.rgb2xyzRaw([92, 191, 84])), [24.6, 40.2, 14.8]);

assert.deepEqual(round(convert.rgb2labRaw([92, 191, 84])), [69.6, -50.1, 44.6]);


