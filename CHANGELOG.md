# 0.6.0 - 2015-07-23

- Added: methods to handle
[ANSI](https://en.wikipedia.org/wiki/ANSI_escape_code#Colors) 16/256 colors:
  - rgb2ansi16
  - rgb2ansi
  - hsl2ansi16
  - hsl2ansi
  - hsv2ansi16
  - hsv2ansi
  - hwb2ansi16
  - hwb2ansi
  - cmyk2ansi16
  - cmyk2ansi
  - keyword2ansi16
  - keyword2ansi
  - ansi162rgb
  - ansi162hsl
  - ansi162hsv
  - ansi162hwb
  - ansi162cmyk
  - ansi162keyword
  - ansi2rgb
  - ansi2hsl
  - ansi2hsv
  - ansi2hwb
  - ansi2cmyk
  - ansi2keyword
([#18](https://github.com/harthur/color-convert/pull/18))

# 0.5.3 - 2015-06-02

- Fixed: hsl2hsv does not return `NaN` anymore when using `[0,0,0]`
([#15](https://github.com/harthur/color-convert/issues/15))

---

Check out commit logs for older releases
