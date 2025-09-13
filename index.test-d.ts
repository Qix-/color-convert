import { expectType } from "tsd";
import convert, {
	type Channels,
	type RGB,
	type HSL,
	type HSV,
	type CMYK,
	type LAB,
	type LCH,
	type HCG,
	type HWB,
	type XYZ,
	type Apple,
	type Gray,
	type ANSI16,
	type ANSI256,
	type Keyword,
	type HEX,
	type OKLAB,
	type OKLCH,
} from "./index.js";

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
// - automatic conversions
expectType<XYZ>(convert.rgb.xyz(0, 0, 0));
expectType<XYZ>(convert.rgb.xyz.raw(0, 0, 0));
expectType<LAB>(convert.rgb.lab(0, 0, 0));
expectType<LAB>(convert.rgb.lab.raw(0, 0, 0));
expectType<LCH>(convert.rgb.lch(0, 0, 0));
expectType<LCH>(convert.rgb.lch.raw(0, 0, 0));
expectType<OKLAB>(convert.rgb.oklab(0, 0, 0));
expectType<OKLAB>(convert.rgb.oklab.raw(0, 0, 0));
expectType<OKLCH>(convert.rgb.oklch(0, 0, 0));
expectType<OKLCH>(convert.rgb.oklch.raw(0, 0, 0));

// Keyword
expectType<Channels>(convert.keyword.channels);
expectType<RGB>(convert.keyword.rgb("blue"));
expectType<RGB>(convert.keyword.rgb.raw("blue"));
// - automatic conversions
expectType<HSL>(convert.keyword.hsl("blue"));
expectType<HSL>(convert.keyword.hsl.raw("blue"));
expectType<HSV>(convert.keyword.hsv("blue"));
expectType<HSV>(convert.keyword.hsv.raw("blue"));
expectType<HWB>(convert.keyword.hwb("blue"));
expectType<HWB>(convert.keyword.hwb.raw("blue"));
expectType<CMYK>(convert.keyword.cmyk("blue"));
expectType<CMYK>(convert.keyword.cmyk.raw("blue"));
expectType<XYZ>(convert.keyword.xyz("blue"));
expectType<XYZ>(convert.keyword.xyz.raw("blue"));
expectType<LAB>(convert.keyword.lab("blue"));
expectType<LAB>(convert.keyword.lab.raw("blue"));
expectType<LCH>(convert.keyword.lch("blue"));
expectType<LCH>(convert.keyword.lch.raw("blue"));
expectType<HEX>(convert.keyword.hex("blue"));
expectType<HEX>(convert.keyword.hex.raw("blue"));
expectType<ANSI16>(convert.keyword.ansi16("blue"));
expectType<ANSI16>(convert.keyword.ansi16.raw("blue"));
expectType<ANSI256>(convert.keyword.ansi256("blue"));
expectType<ANSI256>(convert.keyword.ansi256.raw("blue"));
expectType<HCG>(convert.keyword.hcg("blue"));
expectType<HCG>(convert.keyword.hcg.raw("blue"));
expectType<Apple>(convert.keyword.apple("blue"));
expectType<Apple>(convert.keyword.apple.raw("blue"));
expectType<Gray>(convert.keyword.gray("blue"));
expectType<Gray>(convert.keyword.gray.raw("blue"));
expectType<OKLAB>(convert.keyword.oklab("blue"));
expectType<OKLAB>(convert.keyword.oklab.raw("blue"));
expectType<OKLCH>(convert.keyword.oklch("blue"));
expectType<OKLCH>(convert.keyword.oklch.raw("blue"));

// HSL
expectType<Channels>(convert.hsl.channels);
expectType<RGB>(convert.hsl.rgb(0, 0, 0));
expectType<RGB>(convert.hsl.rgb.raw(0, 0, 0));
expectType<HSV>(convert.hsl.hsv(0, 0, 0));
expectType<HSV>(convert.hsl.hsv.raw(0, 0, 0));
expectType<HCG>(convert.hsl.hcg(0, 0, 0));
expectType<HCG>(convert.hsl.hcg.raw(0, 0, 0));
// - automatic conversions
expectType<HSV>(convert.hsl.hwb(0, 0, 0));
expectType<HWB>(convert.hsl.hwb.raw(0, 0, 0));
expectType<CMYK>(convert.hsl.cmyk(0, 0, 0));
expectType<CMYK>(convert.hsl.cmyk.raw(0, 0, 0));
expectType<XYZ>(convert.hsl.xyz(0, 0, 0));
expectType<XYZ>(convert.hsl.xyz.raw(0, 0, 0));
expectType<LAB>(convert.hsl.lab(0, 0, 0));
expectType<LAB>(convert.hsl.lab.raw(0, 0, 0));
expectType<LCH>(convert.hsl.lch(0, 0, 0));
expectType<LCH>(convert.hsl.lch.raw(0, 0, 0));
expectType<HEX>(convert.hsl.hex(0, 0, 0));
expectType<HEX>(convert.hsl.hex.raw(0, 0, 0));
expectType<Keyword>(convert.hsl.keyword(0, 0, 0));
expectType<Keyword>(convert.hsl.keyword.raw(0, 0, 0));
expectType<ANSI16>(convert.hsl.ansi16(0, 0, 0));
expectType<ANSI16>(convert.hsl.ansi16.raw(0, 0, 0));
expectType<ANSI256>(convert.hsl.ansi256(0, 0, 0));
expectType<ANSI256>(convert.hsl.ansi256.raw(0, 0, 0));
expectType<Apple>(convert.hsl.apple(0, 0, 0));
expectType<Apple>(convert.hsl.apple.raw(0, 0, 0));
expectType<Gray>(convert.hsl.gray(0, 0, 0));
expectType<Gray>(convert.hsl.gray.raw(0, 0, 0));
expectType<OKLAB>(convert.hsl.oklab(0, 0, 0));
expectType<OKLAB>(convert.hsl.oklab.raw(0, 0, 0));
expectType<OKLCH>(convert.hsl.oklch(0, 0, 0));
expectType<OKLCH>(convert.hsl.oklch.raw(0, 0, 0));

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
// - automatic conversions
expectType<ANSI16>(convert.hsv.ansi16.raw(0, 0, 0));
expectType<ANSI256>(convert.hsv.ansi256(0, 0, 0));
expectType<ANSI256>(convert.hsv.ansi256.raw(0, 0, 0));
expectType<Apple>(convert.hsv.apple(0, 0, 0));
expectType<Apple>(convert.hsv.apple.raw(0, 0, 0));
expectType<Gray>(convert.hsv.gray(0, 0, 0));
expectType<Gray>(convert.hsv.gray.raw(0, 0, 0));
expectType<CMYK>(convert.hsv.cmyk(0, 0, 0));
expectType<CMYK>(convert.hsv.cmyk.raw(0, 0, 0));
expectType<XYZ>(convert.hsv.xyz(0, 0, 0));
expectType<XYZ>(convert.hsv.xyz.raw(0, 0, 0));
expectType<LAB>(convert.hsv.lab(0, 0, 0));
expectType<LAB>(convert.hsv.lab.raw(0, 0, 0));
expectType<LCH>(convert.hsv.lch(0, 0, 0));
expectType<LCH>(convert.hsv.lch.raw(0, 0, 0));
expectType<HEX>(convert.hsv.hex(0, 0, 0));
expectType<HEX>(convert.hsv.hex.raw(0, 0, 0));
expectType<Keyword>(convert.hsv.keyword(0, 0, 0));
expectType<Keyword>(convert.hsv.keyword.raw(0, 0, 0));
expectType<OKLAB>(convert.hsv.oklab(0, 0, 0));
expectType<OKLAB>(convert.hsv.oklab.raw(0, 0, 0));
expectType<OKLCH>(convert.hsv.oklch(0, 0, 0));
expectType<OKLCH>(convert.hsv.oklch.raw(0, 0, 0));

// HWB
expectType<Channels>(convert.hwb.channels);
expectType<RGB>(convert.hwb.rgb(0, 0, 0));
expectType<RGB>(convert.hwb.rgb.raw(0, 0, 0));
// - automatic conversions
expectType<HSL>(convert.hwb.hsl(0, 0, 0));
expectType<HSL>(convert.hwb.hsl.raw(0, 0, 0));
expectType<HSV>(convert.hwb.hsv(0, 0, 0));
expectType<HSV>(convert.hwb.hsv.raw(0, 0, 0));
expectType<CMYK>(convert.hwb.cmyk(0, 0, 0));
expectType<CMYK>(convert.hwb.cmyk.raw(0, 0, 0));
expectType<XYZ>(convert.hwb.xyz(0, 0, 0));
expectType<XYZ>(convert.hwb.xyz.raw(0, 0, 0));
expectType<LAB>(convert.hwb.lab(0, 0, 0));
expectType<LAB>(convert.hwb.lab.raw(0, 0, 0));
expectType<LCH>(convert.hwb.lch(0, 0, 0));
expectType<LCH>(convert.hwb.lch.raw(0, 0, 0));
expectType<HEX>(convert.hwb.hex(0, 0, 0));
expectType<HEX>(convert.hwb.hex.raw(0, 0, 0));
expectType<Keyword>(convert.hwb.keyword(0, 0, 0));
expectType<Keyword>(convert.hwb.keyword.raw(0, 0, 0));
expectType<ANSI16>(convert.hwb.ansi16(0, 0, 0));
expectType<ANSI16>(convert.hwb.ansi16.raw(0, 0, 0));
expectType<ANSI256>(convert.hwb.ansi256(0, 0, 0));
expectType<ANSI256>(convert.hwb.ansi256.raw(0, 0, 0));
expectType<HCG>(convert.hwb.hcg(0, 0, 0));
expectType<HCG>(convert.hwb.hcg.raw(0, 0, 0));
expectType<Apple>(convert.hwb.apple(0, 0, 0));
expectType<Apple>(convert.hwb.apple.raw(0, 0, 0));
expectType<Gray>(convert.hwb.gray(0, 0, 0));
expectType<Gray>(convert.hwb.gray.raw(0, 0, 0));
expectType<OKLAB>(convert.hwb.oklab(0, 0, 0));
expectType<OKLAB>(convert.hwb.oklab.raw(0, 0, 0));
expectType<OKLCH>(convert.hwb.oklch(0, 0, 0));
expectType<OKLCH>(convert.hwb.oklch.raw(0, 0, 0));

// CMYK
expectType<Channels>(convert.cmyk.channels);
expectType<RGB>(convert.cmyk.rgb(0, 0, 0, 0));
expectType<RGB>(convert.cmyk.rgb.raw(0, 0, 0, 0));
// - automatic conversions
expectType<HSL>(convert.cmyk.hsl(0, 0, 0, 0));
expectType<HSL>(convert.cmyk.hsl.raw(0, 0, 0, 0));
expectType<HSV>(convert.cmyk.hsv(0, 0, 0, 0));
expectType<HSV>(convert.cmyk.hsv.raw(0, 0, 0, 0));
expectType<HWB>(convert.cmyk.hwb(0, 0, 0, 0));
expectType<HWB>(convert.cmyk.hwb.raw(0, 0, 0, 0));
expectType<XYZ>(convert.cmyk.xyz(0, 0, 0, 0));
expectType<XYZ>(convert.cmyk.xyz.raw(0, 0, 0, 0));
expectType<LAB>(convert.cmyk.lab(0, 0, 0, 0));
expectType<LAB>(convert.cmyk.lab.raw(0, 0, 0, 0));
expectType<LCH>(convert.cmyk.lch(0, 0, 0, 0));
expectType<LCH>(convert.cmyk.lch.raw(0, 0, 0, 0));
expectType<HEX>(convert.cmyk.hex(0, 0, 0, 0));
expectType<HEX>(convert.cmyk.hex.raw(0, 0, 0, 0));
expectType<Keyword>(convert.cmyk.keyword(0, 0, 0, 0));
expectType<Keyword>(convert.cmyk.keyword.raw(0, 0, 0, 0));
expectType<ANSI16>(convert.cmyk.ansi16(0, 0, 0, 0));
expectType<ANSI16>(convert.cmyk.ansi16.raw(0, 0, 0, 0));
expectType<ANSI256>(convert.cmyk.ansi256(0, 0, 0, 0));
expectType<ANSI256>(convert.cmyk.ansi256.raw(0, 0, 0, 0));
expectType<HCG>(convert.cmyk.hcg(0, 0, 0, 0));
expectType<HCG>(convert.cmyk.hcg.raw(0, 0, 0, 0));
expectType<Apple>(convert.cmyk.apple(0, 0, 0, 0));
expectType<Apple>(convert.cmyk.apple.raw(0, 0, 0, 0));
expectType<Gray>(convert.cmyk.gray(0, 0, 0, 0));
expectType<Gray>(convert.cmyk.gray.raw(0, 0, 0, 0));
expectType<OKLAB>(convert.cmyk.oklab(0, 0, 0, 0));
expectType<OKLAB>(convert.cmyk.oklab.raw(0, 0, 0, 0));
expectType<OKLCH>(convert.cmyk.oklch(0, 0, 0, 0));
expectType<OKLCH>(convert.cmyk.oklch.raw(0, 0, 0, 0));

// XYZ
expectType<Channels>(convert.xyz.channels);
expectType<RGB>(convert.xyz.rgb(0, 0, 0));
expectType<RGB>(convert.xyz.rgb.raw(0, 0, 0));
expectType<LAB>(convert.xyz.lab(0, 0, 0));
expectType<LAB>(convert.xyz.lab.raw(0, 0, 0));
// - automatic conversions
expectType<HSL>(convert.xyz.hsl(0, 0, 0));
expectType<HSL>(convert.xyz.hsl.raw(0, 0, 0));
expectType<HSV>(convert.xyz.hsv(0, 0, 0));
expectType<HSV>(convert.xyz.hsv.raw(0, 0, 0));
expectType<HWB>(convert.xyz.hwb(0, 0, 0));
expectType<HWB>(convert.xyz.hwb.raw(0, 0, 0));
expectType<CMYK>(convert.xyz.cmyk(0, 0, 0));
expectType<CMYK>(convert.xyz.cmyk.raw(0, 0, 0));
expectType<LCH>(convert.xyz.lch(0, 0, 0));
expectType<LCH>(convert.xyz.lch.raw(0, 0, 0));
expectType<HEX>(convert.xyz.hex(0, 0, 0));
expectType<HEX>(convert.xyz.hex.raw(0, 0, 0));
expectType<Keyword>(convert.xyz.keyword(0, 0, 0));
expectType<Keyword>(convert.xyz.keyword.raw(0, 0, 0));
expectType<ANSI16>(convert.xyz.ansi16(0, 0, 0));
expectType<ANSI16>(convert.xyz.ansi16.raw(0, 0, 0));
expectType<ANSI256>(convert.xyz.ansi256(0, 0, 0));
expectType<ANSI256>(convert.xyz.ansi256.raw(0, 0, 0));
expectType<HCG>(convert.xyz.hcg(0, 0, 0));
expectType<HCG>(convert.xyz.hcg.raw(0, 0, 0));
expectType<Apple>(convert.xyz.apple(0, 0, 0));
expectType<Apple>(convert.xyz.apple.raw(0, 0, 0));
expectType<Gray>(convert.xyz.gray(0, 0, 0));
expectType<Gray>(convert.xyz.gray.raw(0, 0, 0));
expectType<OKLAB>(convert.xyz.oklab(0, 0, 0));
expectType<OKLAB>(convert.xyz.oklab.raw(0, 0, 0));
expectType<OKLCH>(convert.xyz.oklch(0, 0, 0));
expectType<OKLCH>(convert.xyz.oklch.raw(0, 0, 0));

// Oklab
expectType<Channels>(convert.oklab.channels);
expectType<RGB>(convert.oklab.rgb(0, 0, 0));
expectType<RGB>(convert.oklab.rgb.raw(0, 0, 0));
expectType<LAB>(convert.oklab.lab(0, 0, 0));
expectType<LAB>(convert.oklab.lab.raw(0, 0, 0));
// - automatic conversions
expectType<HSL>(convert.oklab.hsl(0, 0, 0));
expectType<HSL>(convert.oklab.hsl.raw(0, 0, 0));
expectType<HSV>(convert.oklab.hsv(0, 0, 0));
expectType<HSV>(convert.oklab.hsv.raw(0, 0, 0));
expectType<HWB>(convert.oklab.hwb(0, 0, 0));
expectType<HWB>(convert.oklab.hwb.raw(0, 0, 0));
expectType<CMYK>(convert.oklab.cmyk(0, 0, 0));
expectType<CMYK>(convert.oklab.cmyk.raw(0, 0, 0));
expectType<LCH>(convert.oklab.lch(0, 0, 0));
expectType<LCH>(convert.oklab.lch.raw(0, 0, 0));
expectType<HEX>(convert.oklab.hex(0, 0, 0));
expectType<HEX>(convert.oklab.hex.raw(0, 0, 0));
expectType<Keyword>(convert.oklab.keyword(0, 0, 0));
expectType<Keyword>(convert.oklab.keyword.raw(0, 0, 0));
expectType<ANSI16>(convert.oklab.ansi16(0, 0, 0));
expectType<ANSI16>(convert.oklab.ansi16.raw(0, 0, 0));
expectType<ANSI256>(convert.oklab.ansi256(0, 0, 0));
expectType<ANSI256>(convert.oklab.ansi256.raw(0, 0, 0));
expectType<HCG>(convert.oklab.hcg(0, 0, 0));
expectType<HCG>(convert.oklab.hcg.raw(0, 0, 0));
expectType<Apple>(convert.oklab.apple(0, 0, 0));
expectType<Apple>(convert.oklab.apple.raw(0, 0, 0));
expectType<Gray>(convert.oklab.gray(0, 0, 0));
expectType<Gray>(convert.oklab.gray.raw(0, 0, 0));
expectType<OKLCH>(convert.oklab.oklch(0, 0, 0));
expectType<OKLCH>(convert.oklab.oklch.raw(0, 0, 0));

// oklch
expectType<Channels>(convert.oklch.channels);
expectType<RGB>(convert.oklch.rgb(0, 0, 0));
expectType<RGB>(convert.oklch.rgb.raw(0, 0, 0));
expectType<LAB>(convert.oklch.lab(0, 0, 0));
expectType<LAB>(convert.oklch.lab.raw(0, 0, 0));
// - automatic conversions
expectType<HSL>(convert.oklch.hsl(0, 0, 0));
expectType<HSL>(convert.oklch.hsl.raw(0, 0, 0));
expectType<HSV>(convert.oklch.hsv(0, 0, 0));
expectType<HSV>(convert.oklch.hsv.raw(0, 0, 0));
expectType<HWB>(convert.oklch.hwb(0, 0, 0));
expectType<HWB>(convert.oklch.hwb.raw(0, 0, 0));
expectType<CMYK>(convert.oklch.cmyk(0, 0, 0));
expectType<CMYK>(convert.oklch.cmyk.raw(0, 0, 0));
expectType<LCH>(convert.oklch.lch(0, 0, 0));
expectType<LCH>(convert.oklch.lch.raw(0, 0, 0));
expectType<HEX>(convert.oklch.hex(0, 0, 0));
expectType<HEX>(convert.oklch.hex.raw(0, 0, 0));
expectType<Keyword>(convert.oklch.keyword(0, 0, 0));
expectType<Keyword>(convert.oklch.keyword.raw(0, 0, 0));
expectType<ANSI16>(convert.oklch.ansi16(0, 0, 0));
expectType<ANSI16>(convert.oklch.ansi16.raw(0, 0, 0));
expectType<ANSI256>(convert.oklch.ansi256(0, 0, 0));
expectType<ANSI256>(convert.oklch.ansi256.raw(0, 0, 0));
expectType<HCG>(convert.oklch.hcg(0, 0, 0));
expectType<HCG>(convert.oklch.hcg.raw(0, 0, 0));
expectType<Apple>(convert.oklch.apple(0, 0, 0));
expectType<Apple>(convert.oklch.apple.raw(0, 0, 0));
expectType<Gray>(convert.oklch.gray(0, 0, 0));
expectType<Gray>(convert.oklch.gray.raw(0, 0, 0));
expectType<OKLAB>(convert.oklch.oklab(0, 0, 0));
expectType<OKLAB>(convert.oklch.oklab.raw(0, 0, 0));

// LAB
expectType<Channels>(convert.lab.channels);
expectType<XYZ>(convert.lab.xyz(0, 0, 0));
expectType<XYZ>(convert.lab.xyz.raw(0, 0, 0));
expectType<LCH>(convert.lab.lch(0, 0, 0));
expectType<LCH>(convert.lab.lch.raw(0, 0, 0));
// - automatic conversions
expectType<RGB>(convert.lab.rgb(0, 0, 0));
expectType<RGB>(convert.lab.rgb.raw(0, 0, 0));
expectType<HSL>(convert.lab.hsl(0, 0, 0));
expectType<HSL>(convert.lab.hsl.raw(0, 0, 0));
expectType<HSV>(convert.lab.hsv(0, 0, 0));
expectType<HSV>(convert.lab.hsv.raw(0, 0, 0));
expectType<HWB>(convert.lab.hwb(0, 0, 0));
expectType<HWB>(convert.lab.hwb.raw(0, 0, 0));
expectType<CMYK>(convert.lab.cmyk(0, 0, 0));
expectType<CMYK>(convert.lab.cmyk.raw(0, 0, 0));
expectType<HEX>(convert.lab.hex(0, 0, 0));
expectType<HEX>(convert.lab.hex.raw(0, 0, 0));
expectType<Keyword>(convert.lab.keyword(0, 0, 0));
expectType<Keyword>(convert.lab.keyword.raw(0, 0, 0));
expectType<ANSI16>(convert.lab.ansi16(0, 0, 0));
expectType<ANSI16>(convert.lab.ansi16.raw(0, 0, 0));
expectType<ANSI256>(convert.lab.ansi256(0, 0, 0));
expectType<ANSI256>(convert.lab.ansi256.raw(0, 0, 0));
expectType<HCG>(convert.lab.hcg(0, 0, 0));
expectType<HCG>(convert.lab.hcg.raw(0, 0, 0));
expectType<Apple>(convert.lab.apple(0, 0, 0));
expectType<Apple>(convert.lab.apple.raw(0, 0, 0));
expectType<Gray>(convert.lab.gray(0, 0, 0));
expectType<Gray>(convert.lab.gray.raw(0, 0, 0));
expectType<OKLAB>(convert.lab.oklab(0, 0, 0));
expectType<OKLAB>(convert.lab.oklab.raw(0, 0, 0));
expectType<OKLCH>(convert.lab.oklch(0, 0, 0));
expectType<OKLCH>(convert.lab.oklch.raw(0, 0, 0));

// LCH
expectType<Channels>(convert.lch.channels);
expectType<LAB>(convert.lch.lab(0, 0, 0));
expectType<LAB>(convert.lch.lab.raw(0, 0, 0));
// - automatic conversions
expectType<RGB>(convert.lch.rgb(0, 0, 0));
expectType<RGB>(convert.lch.rgb.raw(0, 0, 0));
expectType<HSL>(convert.lch.hsl(0, 0, 0));
expectType<HSL>(convert.lch.hsl.raw(0, 0, 0));
expectType<HSV>(convert.lch.hsv(0, 0, 0));
expectType<HSV>(convert.lch.hsv.raw(0, 0, 0));
expectType<HWB>(convert.lch.hwb(0, 0, 0));
expectType<HWB>(convert.lch.hwb.raw(0, 0, 0));
expectType<CMYK>(convert.lch.cmyk(0, 0, 0));
expectType<CMYK>(convert.lch.cmyk.raw(0, 0, 0));
expectType<XYZ>(convert.lch.xyz(0, 0, 0));
expectType<XYZ>(convert.lch.xyz.raw(0, 0, 0));
expectType<HEX>(convert.lch.hex(0, 0, 0));
expectType<HEX>(convert.lch.hex.raw(0, 0, 0));
expectType<Keyword>(convert.lch.keyword(0, 0, 0));
expectType<Keyword>(convert.lch.keyword.raw(0, 0, 0));
expectType<ANSI16>(convert.lch.ansi16(0, 0, 0));
expectType<ANSI16>(convert.lch.ansi16.raw(0, 0, 0));
expectType<ANSI256>(convert.lch.ansi256(0, 0, 0));
expectType<ANSI256>(convert.lch.ansi256.raw(0, 0, 0));
expectType<HCG>(convert.lch.hcg(0, 0, 0));
expectType<HCG>(convert.lch.hcg.raw(0, 0, 0));
expectType<Apple>(convert.lch.apple(0, 0, 0));
expectType<Apple>(convert.lch.apple.raw(0, 0, 0));
expectType<Gray>(convert.lch.gray(0, 0, 0));
expectType<Gray>(convert.lch.gray.raw(0, 0, 0));
expectType<OKLAB>(convert.lch.oklab(0, 0, 0));
expectType<OKLAB>(convert.lch.oklab.raw(0, 0, 0));
expectType<OKLCH>(convert.lch.oklch(0, 0, 0));
expectType<OKLCH>(convert.lch.oklch.raw(0, 0, 0));

// HCG
expectType<Channels>(convert.hcg.channels);
expectType<RGB>(convert.hcg.rgb(0, 0, 0));
expectType<RGB>(convert.hcg.rgb.raw(0, 0, 0));
expectType<HSV>(convert.hcg.hsv(0, 0, 0));
expectType<HSV>(convert.hcg.hsv.raw(0, 0, 0));
expectType<HWB>(convert.hcg.hwb(0, 0, 0));
expectType<HWB>(convert.hcg.hwb.raw(0, 0, 0));
// - automatic conversions
expectType<HSL>(convert.hcg.hsl(0, 0, 0));
expectType<HSL>(convert.hcg.hsl.raw(0, 0, 0));
expectType<CMYK>(convert.hcg.cmyk(0, 0, 0));
expectType<CMYK>(convert.hcg.cmyk.raw(0, 0, 0));
expectType<XYZ>(convert.hcg.xyz(0, 0, 0));
expectType<XYZ>(convert.hcg.xyz.raw(0, 0, 0));
expectType<LAB>(convert.hcg.lab(0, 0, 0));
expectType<LAB>(convert.hcg.lab.raw(0, 0, 0));
expectType<LCH>(convert.hcg.lch(0, 0, 0));
expectType<LCH>(convert.hcg.lch.raw(0, 0, 0));
expectType<HEX>(convert.hcg.hex(0, 0, 0));
expectType<HEX>(convert.hcg.hex.raw(0, 0, 0));
expectType<Keyword>(convert.hcg.keyword(0, 0, 0));
expectType<Keyword>(convert.hcg.keyword.raw(0, 0, 0));
expectType<ANSI16>(convert.hcg.ansi16(0, 0, 0));
expectType<ANSI16>(convert.hcg.ansi16.raw(0, 0, 0));
expectType<ANSI256>(convert.hcg.ansi256(0, 0, 0));
expectType<ANSI256>(convert.hcg.ansi256.raw(0, 0, 0));
expectType<Apple>(convert.hcg.apple(0, 0, 0));
expectType<Apple>(convert.hcg.apple.raw(0, 0, 0));
expectType<Gray>(convert.hcg.gray(0, 0, 0));
expectType<Gray>(convert.hcg.gray.raw(0, 0, 0));
expectType<OKLAB>(convert.hcg.oklab(0, 0, 0));
expectType<OKLAB>(convert.hcg.oklab.raw(0, 0, 0));
expectType<OKLCH>(convert.hcg.oklch(0, 0, 0));
expectType<OKLCH>(convert.hcg.oklch.raw(0, 0, 0));

// Apple
expectType<Channels>(convert.apple.channels);
expectType<RGB>(convert.apple.rgb(0, 0, 0));
expectType<RGB>(convert.apple.rgb.raw(0, 0, 0));
// - automatic conversions
expectType<HSL>(convert.apple.hsl(0, 0, 0));
expectType<HSL>(convert.apple.hsl.raw(0, 0, 0));
expectType<HSV>(convert.apple.hsv(0, 0, 0));
expectType<HSV>(convert.apple.hsv.raw(0, 0, 0));
expectType<HWB>(convert.apple.hwb(0, 0, 0));
expectType<HWB>(convert.apple.hwb.raw(0, 0, 0));
expectType<CMYK>(convert.apple.cmyk(0, 0, 0));
expectType<CMYK>(convert.apple.cmyk.raw(0, 0, 0));
expectType<XYZ>(convert.apple.xyz(0, 0, 0));
expectType<XYZ>(convert.apple.xyz.raw(0, 0, 0));
expectType<LAB>(convert.apple.lab(0, 0, 0));
expectType<LAB>(convert.apple.lab.raw(0, 0, 0));
expectType<LCH>(convert.apple.lch(0, 0, 0));
expectType<LCH>(convert.apple.lch.raw(0, 0, 0));
expectType<HEX>(convert.apple.hex(0, 0, 0));
expectType<HEX>(convert.apple.hex.raw(0, 0, 0));
expectType<Keyword>(convert.apple.keyword(0, 0, 0));
expectType<Keyword>(convert.apple.keyword.raw(0, 0, 0));
expectType<ANSI16>(convert.apple.ansi16(0, 0, 0));
expectType<ANSI16>(convert.apple.ansi16.raw(0, 0, 0));
expectType<ANSI256>(convert.apple.ansi256(0, 0, 0));
expectType<ANSI256>(convert.apple.ansi256.raw(0, 0, 0));
expectType<HCG>(convert.apple.hcg(0, 0, 0));
expectType<HCG>(convert.apple.hcg.raw(0, 0, 0));
expectType<Gray>(convert.apple.gray(0, 0, 0));
expectType<Gray>(convert.apple.gray.raw(0, 0, 0));
expectType<OKLAB>(convert.apple.oklab(0, 0, 0));
expectType<OKLAB>(convert.apple.oklab.raw(0, 0, 0));
expectType<OKLCH>(convert.apple.oklch(0, 0, 0));
expectType<OKLCH>(convert.apple.oklch.raw(0, 0, 0));

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
// - automatic conversions
expectType<XYZ>(convert.gray.xyz(0));
expectType<XYZ>(convert.gray.xyz.raw(0));
expectType<LCH>(convert.gray.lch(0));
expectType<LCH>(convert.gray.lch.raw(0));
expectType<Keyword>(convert.gray.keyword(0));
expectType<Keyword>(convert.gray.keyword.raw(0));
expectType<ANSI16>(convert.gray.ansi16(0));
expectType<ANSI16>(convert.gray.ansi16.raw(0));
expectType<ANSI256>(convert.gray.ansi256(0));
expectType<ANSI256>(convert.gray.ansi256.raw(0));
expectType<HCG>(convert.gray.hcg(0));
expectType<HCG>(convert.gray.hcg.raw(0));
expectType<Apple>(convert.gray.apple(0));
expectType<Apple>(convert.gray.apple.raw(0));
expectType<OKLAB>(convert.gray.oklab(0));
expectType<OKLAB>(convert.gray.oklab.raw(0));
expectType<OKLCH>(convert.gray.oklch(0));
expectType<OKLCH>(convert.gray.oklch.raw(0));
