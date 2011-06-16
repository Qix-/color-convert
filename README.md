# color-convert
Color-convert is a library of plain color conversion functions. It converts between rgb, hsl, hsv, and cmyk:

```javascript
colorConvert.rgb2hsl([140, 200, 100]));   // [96, 48, 59]
```	

# Install

### node

For [node](http://nodejs.org) with [npm](http://npmjs.org):

	npm install color-convert

### browser

Download the latest [color-convert.js](http://github.com/harthur/color-convert/downloads). All the methods are on the `colorConvert` object.

# API
Color-convert converts all ways between rgb, hsl, hsv, cmyk, and CSS keyword. Also from rgb to xyz and lab (these two assume sRGB color profile):

```javascript
var convert = require("color-convert");

convert.rgb2hsl([255, 255, 255])        // rgb -> hsl, hsv, cmyk, keyword, xyz, and lab

convert.hsl2rgb([360, 100, 100])        // hsl -> rgb, hsv, cmyk, and keyword

convert.hsv2rgb([360, 100, 100])        // hsv -> rgb, hsl, cmyk, and keyword

convert.cmyk2rgb([100, 100, 100, 100])  // cmyk -> rgb, hsl, hsv, and keyword

convert.keyword2rgb("blue")             // keyword -> rgb, hsl, hsv, and cmyk

convert.xyz2rgb([100, 100, 100])        // xyz -> rgb
```

### Unrounded
To get the unrounded conversion, append `Raw` to the function name:

```javascript
colorConvert.rgb2hslRaw([140, 200, 100]);   // [95.99999999999999, 47.619047619047606, 58.82352941176471]
```

### Hash
There's also a hash of the conversion functions keyed first by the "from" color space, then by the "to" color space:

```javascript
convert["hsl"]["hsv"]([160, 0, 20]) == convert.hsl2hsv([160, 0, 20])
```

# Contribute
Please fork, add conversions, figure out color profile stuff for XYZ, LAB, etc. This is meant to be a basic library that can be used by other libraries to wrap color calculations in some cool way.
