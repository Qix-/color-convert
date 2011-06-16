var convert = require("../index"),
    assert = require("assert");

assert.deepEqual(convert.rgb2hsl([140, 200, 100]), [96, 48, 59]);
assert.deepEqual(convert.rgb2hsv([140, 200, 100]), [96, 50, 78]);
assert.deepEqual(convert.rgb2cmyk([140, 200, 100]), [30, 0, 50, 22]);
assert.deepEqual(convert.rgb2keyword([255, 228, 196]), "bisque");
assert.deepEqual(convert.rgb2xyz([92, 191, 84]), [25, 40, 15]);
assert.deepEqual(convert.rgb2lab([92, 191, 84]), [70, -50, 45]);

assert.deepEqual(convert.hsl2rgb([96, 48, 59]), [140, 201, 100]);
assert.deepEqual(convert.hsl2hsv([96, 48, 59]), [96, 39, 79]); // colorpicker says [96,50,79]
assert.deepEqual(convert.hsl2cmyk([96, 48, 59]), [30, 0, 50, 21]);
assert.deepEqual(convert.hsl2keyword([240, 100, 50]), "blue");

assert.deepEqual(convert.hsv2rgb([96, 50, 78]), [139, 199, 99]);
assert.deepEqual(convert.hsv2hsl([96, 50, 78]), [96, 47, 59]);
assert.deepEqual(convert.hsv2cmyk([96, 50, 78]), [30, 0, 50, 22]);
assert.deepEqual(convert.hsv2keyword([240, 100, 100]), "blue");

assert.deepEqual(convert.cmyk2rgb([30, 0, 50, 22]), [139, 199, 99]);
assert.deepEqual(convert.cmyk2hsl([30, 0, 50, 22]), [96, 47, 59]);
assert.deepEqual(convert.cmyk2hsv([30, 0, 50, 22]), [96, 50, 78]);
assert.deepEqual(convert.cmyk2keyword([100, 100, 0, 0]), "blue");

assert.deepEqual(convert.keyword2rgb("blue"), [0, 0, 255]);
assert.deepEqual(convert.keyword2hsl("blue"), [240, 100, 50]);
assert.deepEqual(convert.keyword2hsv("blue"), [240, 100, 100]);
assert.deepEqual(convert.keyword2cmyk("blue"), [100, 100, 0, 0]);

assert.deepEqual(convert.xyz2rgb([25, 40, 15]), [97, 190, 85]);

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

// hashed
var val = [140, 200, 100];
assert.deepEqual(convert["rgb"]["hsl"](val), convert.rgb2hsl(val));
assert.deepEqual(convert["rgb"]["hsv"](val), convert.rgb2hsv(val));
assert.deepEqual(convert["rgb"]["cmyk"](val), convert.rgb2cmyk(val));
assert.deepEqual(convert["rgb"]["xyz"](val), convert.rgb2xyz(val));
assert.deepEqual(convert["rgb"]["lab"](val), convert.rgb2lab(val));
assert.deepEqual(convert["rgb"]["keyword"]([255, 228, 196]), "bisque");

val = [96, 48, 59];
assert.deepEqual(convert["hsl"]["rgb"](val), convert.hsl2rgb(val));
assert.deepEqual(convert["hsl"]["hsv"](val), convert.hsl2hsv(val));
assert.deepEqual(convert["hsl"]["cmyk"](val), convert.hsl2cmyk(val));
assert.deepEqual(convert["hsl"]["keyword"](val), convert.hsl2keyword(val  ));

val = [96, 50, 78];
assert.deepEqual(convert["hsv"]["rgb"](val), convert.hsv2rgb(val));
assert.deepEqual(convert["hsv"]["hsl"](val), convert.hsv2hsl(val));
assert.deepEqual(convert["hsv"]["cmyk"](val), convert.hsv2cmyk(val));
assert.deepEqual(convert["hsv"]["keyword"](val), convert.hsv2keyword(val));

val = [30, 0, 50, 22];
assert.deepEqual(convert["cmyk"]["rgb"](val), convert.cmyk2rgb(val));
assert.deepEqual(convert["cmyk"]["hsl"](val), convert.cmyk2hsl(val));
assert.deepEqual(convert["cmyk"]["hsv"](val), convert.cmyk2hsv(val));
assert.deepEqual(convert["cmyk"]["keyword"](val), convert.cmyk2keyword(val));

val = "blue";
assert.deepEqual(convert["keyword"]["rgb"](val), convert.keyword2rgb(val));
assert.deepEqual(convert["keyword"]["hsl"](val), convert.keyword2hsl(val));
assert.deepEqual(convert["keyword"]["hsv"](val), convert.keyword2hsv(val));
assert.deepEqual(convert["keyword"]["cmyk"](val), convert.keyword2cmyk(val));

assert.deepEqual(convert["xyz"]["rgb"]([25, 40, 15]), [97, 190, 85]);
