import {expectType} from 'tsd';
import convert, {type Channels, type RGB, type HSL, type HSV, type CMYK, type LAB, type LCH, type HCG, type HWB, type XYZ, type Apple, type Gray, type ANSI16, type ANSI256, type Keyword, type HEX} from './index.js';

// RGB
expectType<Channels>(convert.rgb.channels);
expectType<HSL>(rgbToHsl(0, 0, 0));
expectType<HSL>(convert.rgb.hsl.raw(0, 0, 0));
expectType<HSV>(rgbToHsv(0, 0, 0));
expectType<HSV>(convert.rgb.hsv.raw(0, 0, 0));
expectType<HWB>(rgbToHwb(0, 0, 0));
expectType<HWB>(convert.rgb.hwb.raw(0, 0, 0));
expectType<HCG>(rgbToHcg(0, 0, 0));
expectType<HCG>(convert.rgb.hcg.raw(0, 0, 0));
expectType<CMYK>(rgbToCmyk(0, 0, 0));
expectType<CMYK>(convert.rgb.cmyk.raw(0, 0, 0));
expectType<Keyword>(rgbToKeyword(0, 0, 0));
expectType<Keyword>(convert.rgb.keyword.raw(0, 0, 0));
expectType<ANSI16>(rgbToAnsi16(0, 0, 0));
expectType<ANSI16>(convert.rgb.ansi16.raw(0, 0, 0));
expectType<ANSI256>(rgbToAnsi256(0, 0, 0));
expectType<ANSI256>(convert.rgb.ansi256.raw(0, 0, 0));
expectType<Apple>(rgbToApple(0, 0, 0));
expectType<Apple>(convert.rgb.apple.raw(0, 0, 0));
expectType<HEX>(rgbToHex(0, 0, 0));
expectType<HEX>(convert.rgb.hex.raw(0, 0, 0));
expectType<Gray>(rgbToGray(0, 0, 0));
expectType<Gray>(convert.rgb.gray.raw(0, 0, 0));

// Keyword
expectType<RGB>(keywordToRgb('blue'));
expectType<RGB>(convert.keyword.rgb.raw('blue'));

// HSL
expectType<Channels>(convert.hsl.channels);
expectType<RGB>(hslToRgb(0, 0, 0));
expectType<RGB>(convert.hsl.rgb.raw(0, 0, 0));
expectType<HSV>(hslToHsv(0, 0, 0));
expectType<HSV>(convert.hsl.hsv.raw(0, 0, 0));
expectType<HCG>(hslToHcg(0, 0, 0));
expectType<HCG>(convert.hsl.hcg.raw(0, 0, 0));

// HSV
expectType<Channels>(convert.hsv.channels);
expectType<RGB>(hsvToRgb(0, 0, 0));
expectType<RGB>(convert.hsv.rgb.raw(0, 0, 0));
expectType<HSL>(hsvToHsl(0, 0, 0));
expectType<HSL>(convert.hsv.hsl.raw(0, 0, 0));
expectType<HCG>(hsvToHcg(0, 0, 0));
expectType<HCG>(convert.hsv.hcg.raw(0, 0, 0));
expectType<HWB>(hsvToHwb(0, 0, 0));
expectType<HWB>(convert.hsv.hwb.raw(0, 0, 0));
expectType<ANSI16>(hsvToAnsi16(0, 0, 0));

// HWB
expectType<Channels>(convert.hwb.channels);
expectType<RGB>(hwbToRgb(0, 0, 0));
expectType<RGB>(convert.hwb.rgb.raw(0, 0, 0));
expectType<HCG>(hwbToHcg(0, 0, 0));
expectType<HCG>(convert.hwb.hcg.raw(0, 0, 0));

// CMYK
expectType<Channels>(convert.cmyk.channels);
expectType<RGB>(cmykToRgb(0, 0, 0, 0));
expectType<RGB>(convert.cmyk.rgb.raw(0, 0, 0, 0));

// XYZ
expectType<Channels>(convert.xyz.channels);
expectType<RGB>(xyzToRgb(0, 0, 0));
expectType<RGB>(convert.xyz.rgb.raw(0, 0, 0));
expectType<LAB>(xyzToLab(0, 0, 0));
expectType<LAB>(convert.xyz.lab.raw(0, 0, 0));

// LAB
expectType<Channels>(convert.lab.channels);
expectType<XYZ>(labToXyz(0, 0, 0));
expectType<XYZ>(convert.lab.xyz.raw(0, 0, 0));
expectType<LCH>(labToLch(0, 0, 0));
expectType<LCH>(convert.lab.lch.raw(0, 0, 0));

// LCH
expectType<Channels>(convert.lch.channels);
expectType<LAB>(lchToLab(0, 0, 0));
expectType<LAB>(convert.lch.lab.raw(0, 0, 0));

// HCG
expectType<Channels>(convert.hcg.channels);
expectType<RGB>(hcgToRgb(0, 0, 0));
expectType<RGB>(convert.hcg.rgb.raw(0, 0, 0));
expectType<HSV>(hcgToHsv(0, 0, 0));
expectType<HSV>(convert.hcg.hsv.raw(0, 0, 0));
expectType<HWB>(hcgToHwb(0, 0, 0));
expectType<HWB>(convert.hcg.hwb.raw(0, 0, 0));

// Apple
expectType<Channels>(convert.apple.channels);
expectType<RGB>(appleToRgb(0, 0, 0));
expectType<RGB>(convert.apple.rgb.raw(0, 0, 0));

// Gray
expectType<Channels>(convert.gray.channels);
expectType<RGB>(grayToRgb(0));
expectType<RGB>(convert.gray.rgb.raw(0));
expectType<HSL>(grayToHsl(0));
expectType<HSL>(convert.gray.hsl.raw(0));
expectType<HSV>(grayToHsv(0));
expectType<HSV>(convert.gray.hsv.raw(0));
expectType<HWB>(grayToHwb(0));
expectType<HWB>(convert.gray.hwb.raw(0));
expectType<CMYK>(grayToCmyk(0));
expectType<CMYK>(convert.gray.cmyk.raw(0));
expectType<LAB>(grayToLab(0));
expectType<LAB>(convert.gray.lab.raw(0));
expectType<HEX>(grayToHex(0));
expectType<HEX>(convert.gray.hex.raw(0));
