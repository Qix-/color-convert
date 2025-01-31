import {expectType} from 'tsd';
import convert from './index.js';
import type {Channels, RGB, HSL, HSV, CMYK, LAB, LCH, HCG, HWB, XYZ, Apple, Gray, ANSI16, ANSI256, Keyword, HEX} from './index.js';

// RGB
expectType<Channels>(convert.rgb.channels);
expectType<HSL>(convert.rgb.hsl(0, 0, 0));
expectType<HSL>(convert.rgb.hsl.raw(0, 0, 0));
expectType<HSV>(convert.rgb.hsv(0, 0, 0));
expectType<HSV>(convert.rgb.hsv.raw(0, 0, 0));
expectType<HWB>(convert.rgb.hwb(0, 0, 0));
expectType<HWB>(convert.rgb.hwb.raw(0, 0, 0));
expectType<HCG>(convert.rgb.hcg(0, 0, 0));
expectType<HCG>(convert.rgb.hcg.raw(0, 0, 0));
expectType<CMYK>(convert.rgb.cmyk(0, 0, 0));
expectType<CMYK>(convert.rgb.cmyk.raw(0, 0, 0));
expectType<Keyword>(convert.rgb.keyword(0, 0, 0));
expectType<Keyword>(convert.rgb.keyword.raw(0, 0, 0));
expectType<ANSI16>(convert.rgb.ansi16(0, 0, 0));
expectType<ANSI16>(convert.rgb.ansi16.raw(0, 0, 0));
expectType<ANSI256>(convert.rgb.ansi256(0, 0, 0));
expectType<ANSI256>(convert.rgb.ansi256.raw(0, 0, 0));
expectType<Apple>(convert.rgb.apple(0, 0, 0));
expectType<Apple>(convert.rgb.apple.raw(0, 0, 0));
expectType<HEX>(convert.rgb.hex(0, 0, 0));
expectType<HEX>(convert.rgb.hex.raw(0, 0, 0));
expectType<Gray>(convert.rgb.gray(0, 0, 0));
expectType<Gray>(convert.rgb.gray.raw(0, 0, 0));

// Keyword
expectType<RGB>(convert.keyword.rgb('blue'));
expectType<RGB>(convert.keyword.rgb.raw('blue'));

// HSL
expectType<Channels>(convert.hsl.channels);
expectType<RGB>(convert.hsl.rgb(0, 0, 0));
expectType<RGB>(convert.hsl.rgb.raw(0, 0, 0));
expectType<HSV>(convert.hsl.hsv(0, 0, 0));
expectType<HSV>(convert.hsl.hsv.raw(0, 0, 0));
expectType<HCG>(convert.hsl.hcg(0, 0, 0));
expectType<HCG>(convert.hsl.hcg.raw(0, 0, 0));

// HSV
expectType<Channels>(convert.hsv.channels);
expectType<RGB>(convert.hsv.rgb(0, 0, 0));
expectType<RGB>(convert.hsv.rgb.raw(0, 0, 0));
expectType<HSL>(convert.hsv.hsl(0, 0, 0));
expectType<HSL>(convert.hsv.hsl.raw(0, 0, 0));
expectType<HCG>(convert.hsv.hcg(0, 0, 0));
expectType<HCG>(convert.hsv.hcg.raw(0, 0, 0));
expectType<HWB>(convert.hsv.hwb(0, 0, 0));
expectType<HWB>(convert.hsv.hwb.raw(0, 0, 0));
expectType<ANSI16>(convert.hsv.ansi16(0, 0, 0));

// HWB
expectType<Channels>(convert.hwb.channels);
expectType<RGB>(convert.hwb.rgb(0, 0, 0));
expectType<RGB>(convert.hwb.rgb.raw(0, 0, 0));
expectType<HCG>(convert.hwb.hcg(0, 0, 0));
expectType<HCG>(convert.hwb.hcg.raw(0, 0, 0));

// CMYK
expectType<Channels>(convert.cmyk.channels);
expectType<RGB>(convert.cmyk.rgb(0, 0, 0, 0));
expectType<RGB>(convert.cmyk.rgb.raw(0, 0, 0, 0));

// XYZ
expectType<Channels>(convert.xyz.channels);
expectType<RGB>(convert.xyz.rgb(0, 0, 0));
expectType<RGB>(convert.xyz.rgb.raw(0, 0, 0));
expectType<LAB>(convert.xyz.lab(0, 0, 0));
expectType<LAB>(convert.xyz.lab.raw(0, 0, 0));

// LAB
expectType<Channels>(convert.lab.channels);
expectType<XYZ>(convert.lab.xyz(0, 0, 0));
expectType<XYZ>(convert.lab.xyz.raw(0, 0, 0));
expectType<LCH>(convert.lab.lch(0, 0, 0));
expectType<LCH>(convert.lab.lch.raw(0, 0, 0));

// LCH
expectType<Channels>(convert.lch.channels);
expectType<LAB>(convert.lch.lab(0, 0, 0));
expectType<LAB>(convert.lch.lab.raw(0, 0, 0));

// HCG
expectType<Channels>(convert.hcg.channels);
expectType<RGB>(convert.hcg.rgb(0, 0, 0));
expectType<RGB>(convert.hcg.rgb.raw(0, 0, 0));
expectType<HSV>(convert.hcg.hsv(0, 0, 0));
expectType<HSV>(convert.hcg.hsv.raw(0, 0, 0));
expectType<HWB>(convert.hcg.hwb(0, 0, 0));
expectType<HWB>(convert.hcg.hwb.raw(0, 0, 0));

// Apple
expectType<Channels>(convert.apple.channels);
expectType<RGB>(convert.apple.rgb(0, 0, 0));
expectType<RGB>(convert.apple.rgb.raw(0, 0, 0));

// Gray
expectType<Channels>(convert.gray.channels);
expectType<RGB>(convert.gray.rgb(0));
expectType<RGB>(convert.gray.rgb.raw(0));
expectType<HSL>(convert.gray.hsl(0));
expectType<HSL>(convert.gray.hsl.raw(0));
expectType<HSV>(convert.gray.hsv(0));
expectType<HSV>(convert.gray.hsv.raw(0));
expectType<HWB>(convert.gray.hwb(0));
expectType<HWB>(convert.gray.hwb.raw(0));
expectType<CMYK>(convert.gray.cmyk(0));
expectType<CMYK>(convert.gray.cmyk.raw(0));
expectType<LAB>(convert.gray.lab(0));
expectType<LAB>(convert.gray.lab.raw(0));
expectType<HEX>(convert.gray.hex(0));
expectType<HEX>(convert.gray.hex.raw(0));
