var conversions = require("./conversions");

var exports = {};
module.exports = exports;

for (var func in conversions) {
  // export rgb2hslRaw
  exports[func + "Raw"] =  (function(func) {
    // accept array or plain args
    return function(arg) {
      if (typeof arg == "number")
        arg = Array.prototype.slice.call(arguments);
      return conversions[func](arg);
    }
  })(func);

  var pair = /(\w+)2(\w+)/.exec(func),
      from = pair[1],
      to = pair[2];
  exports[from] = exports[from] || {};

  // export rgb2hsl and ["rgb"]["hsl"]
  exports[func] = exports[from][to] = (function(func) { 
    return function(arg) {
      if (typeof arg == "number")
        arg = Array.prototype.slice.call(arguments);
      
      var val = conversions[func](arg);
      if (typeof val == "string" || val === undefined)
        return val; // keyword

      for (var i = 0; i < val.length; i++)
        val[i] = Math.round(val[i]);
      return val;
    }
  })(func);

}

/*
exports["rgb"]  = {
  "hsl": exports.rgb2hsl,
  "hsv": exports.rgb2hsv,
  "cmyk": exports.rgb2cmyk,
  "keyword": exports.rgb2keyword,
  "xyz": exports.rgb2xyz,
  "lab": exports.rgb2lab,
}

exports["hsl"]  = {
  "rgb": exports.hsl2rgb,
  "hsv": exports.hsl2hsv,
  "cmyk": function(args) {
    return exports.rgb2cmyk(exports.hsl2rgbRaw(args));
  },
  "keyword": function(args) {
    return exports.rgb2keyword(exports.hsl2rgbRaw(args));
  }
}

exports["hsv"] = {
  "rgb": exports.hsv2rgb,
  "hsl": exports.hsv2hsl,
  "cmyk": function(args) {
    return exports.rgb2cmyk(exports.hsv2rgbRaw(args));
  },
  "keyword": function(args) {
    return exports.rgb2keyword(exports.hsv2rgbRaw(args));
  }
}

exports.cmyk = {
  "rgb": exports.cmyk2rgb,
  "hsl": function(args) {
    return exports.rgb2hsl(exports.cmyk2rgbRaw(args));
  },
  "hsv": function(args) {
    return exports.rgb2hsv(exports.cmyk2rgbRaw(args));
  },
  "keyword": function(args) {
    return exports.rgb2keyword(exports.cmyk2rgbRaw(args));
  }
}

exports.keyword = {
  "rgb": exports.keyword2rgb,
  "hsl": function(args) {
    return exports.rgb2hsl(exports.keyword2rgb(args));
  },
  "hsv": function(args) {
    return exports.rgb2hsv(exports.keyword2rgb(args));
  },
  "cmyk": function(args) {
    return exports.rgb2cmyk(exports.keyword2rgb(args));
  }
}

exports.xyz = {
  "rgb": exports.xyz2rgb
} */