# color-convert
Color-convert is a library of plain color conversion functions. It converts between rgb, hsl, hsv, and cmyk:

```javascript
colorConvert.rgb2hsl([140, 200, 100]));   // [96, 48, 59]
```	

# Install
For [node](http://nodejs.org) with [npm](http://npmjs.org):

	npm install color-convert
	
For the browser, download the latest [color-convert.js](http://github.com/harthur/color-convert/downloads). All the methods are on the `colorConvert` object.

# API
color-convert exports these methods:

```javascript
var convert = require("color-convert");

convert.rgb2hsl([255, 255, 255])
convert.hsl2rgb([360, 100, 100])

convert.rgb2hsv([255, 255, 255])
convert.hsv2rgb([360, 100, 100])

convert.hsv2hsl([360, 100, 100])
convert.hsl2hsv([360, 100, 100])

convert.cmyk2rgb([100, 100, 100, 100])
convert.rgb2cmyk([255, 255, 255])

convert.keyword2rgb("blue")
convert.rgb2keyword([255, 255, 255])

// the following methods assume sRGB color profile
convert.rgb2xyz([255, 255, 255])
convert.xyz2rgb([100, 100, 100])

convert.rgb2lab([255, 255, 255])
```

### Unrounded
To get the unrounded conversion, append `Raw` to the function name:

```javascript
colorConvert.rgb2hslRaw([140, 200, 100]);   // [95.99999999999999, 47.619047619047606, 58.82352941176471]
```

# Contribute
Please fork, add conversions, figure out color profile stuff for XYZ, LAB, etc. This is meant to be a basic library that can be used by other libraries to wrap color calculations in some cool way.
