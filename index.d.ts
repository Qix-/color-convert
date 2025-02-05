export type Channels = number;
export type RGB = [r: number, g: number, b: number];
export type HSL = [h: number, s: number, l: number];
export type HSV = [h: number, s: number, v: number];
export type CMYK = [c: number, m: number, y: number, k: number];
export type LAB = [l: number, a: number, b: number];
export type LCH = [l: number, c: number, h: number];
export type HCG = [h: number, c: number, g: number];
export type HWB = [h: number, w: number, b: number];
export type XYZ = [x: number, y: number, z: number];
export type Apple = [r16: number, g16: number, b16: number];
export type Gray = [gray: number];
export type ANSI16 = number;
export type ANSI256 = number;
export type Keyword = string;
export type HEX = string;

export type Convert = {
	rgb: {
		channels: Channels;
		labels: 'rgb';
		hsl: {
			(...rgb: RGB): HSL;
			raw: (...rgb: RGB) => HSL;
		};
		hsv: {
			(...rgb: RGB): HSV;
			raw: (...rgb: RGB) => HSV;
		};
		hwb: {
			(...rgb: RGB): HWB;
			raw: (...rgb: RGB) => HWB;
		};
		hcg: {
			(...rgb: RGB): HCG;
			raw: (...rgb: RGB) => HCG;
		};
		cmyk: {
			(...rgb: RGB): CMYK;
			raw: (...rgb: RGB) => CMYK;
		};
		keyword: {
			(...rgb: RGB): Keyword;
			raw: (...rgb: RGB) => Keyword;
		};
		ansi16: {
			(...rgb: RGB): ANSI16;
			raw: (...rgb: RGB) => ANSI16;
		};
		ansi256: {
			(...rgb: RGB): ANSI256;
			raw: (...rgb: RGB) => ANSI256;
		};
		apple: {
			(...rgb: RGB): Apple;
			raw: (...rgb: RGB) => Apple;
		};
		hex: {
			(...rgb: RGB): HEX;
			raw: (...rgb: RGB) => HEX;
		};
		gray: {
			(...rgb: RGB): Gray;
			raw: (...rgb: RGB) => Gray;
		};
	};
	keyword: {
		rgb: {
			(keyword: Keyword): RGB;
			raw: (keyword: Keyword) => RGB;
		};
	};
	hsl: {
		channels: Channels;
		labels: 'hsl';
		rgb: {
			(...hsl: HSL): RGB;
			raw: (...hsl: HSL) => RGB;
		};
		hsv: {
			(...hsl: HSL): HSV;
			raw: (...hsl: HSL) => HSV;
		};
		hcg: {
			(...hsl: HSL): HCG;
			raw: (...hsl: HSL) => HCG;
		};
	};
	hsv: {
		channels: Channels;
		labels: 'hsv';
		hcg: {
			(...hsv: HSV): HCG;
			raw: (...hsv: HSV) => HCG;
		};
		rgb: {
			(...hsv: HSV): RGB;
			raw: (...hsv: HSV) => RGB;
		};
		hsv: {
			(...hsv: HSV): HSV;
			raw: (...hsv: HSV) => HSV;
		};
		hsl: {
			(...hsv: HSV): HSL;
			raw: (...hsv: HSV) => HSL;
		};
		hwb: {
			(...hsv: HSV): HWB;
			raw: (...hsv: HSV) => HWB;
		};
		ansi16: {
			(...hsv: HSV): ANSI16;
			raw: (...hsv: HSV) => ANSI16;
		};
	};
	hwb: {
		channels: Channels;
		labels: 'hwb';
		hcg: {
			(...hwb: HWB): HCG;
			raw: (...hwb: HWB) => HCG;
		};
		rgb: {
			(...hwb: HWB): RGB;
			raw: (...hwb: HWB) => RGB;
		};
	};
	cmyk: {
		channels: Channels;
		labels: 'cmyk';
		rgb: {
			(...cmyk: CMYK): RGB;
			raw: (...cmyk: CMYK) => RGB;
		};
	};
	xyz: {
		channels: Channels;
		labels: 'xyz';
		rgb: {
			(...xyz: XYZ): RGB;
			raw: (...xyz: XYZ) => RGB;
		};
		lab: {
			(...xyz: XYZ): LAB;
			raw: (...xyz: XYZ) => LAB;
		};
	};
	lab: {
		channels: Channels;
		labels: 'lab';
		xyz: {
			(...lab: LAB): XYZ;
			raw: (...lab: LAB) => XYZ;
		};
		lch: {
			(...lab: LAB): LCH;
			raw: (...lab: LAB) => LCH;
		};
	};
	lch: {
		channels: Channels;
		labels: 'lch';
		lab: {
			(...lch: LCH): LAB;
			raw: (...lch: LCH) => LAB;
		};
	};
	hex: {
		channels: Channels;
		labels: ['hex'];
		rgb: {
			(hex: HEX): RGB;
			raw: (hex: HEX) => RGB;
		};
	};
	ansi16: {
		channels: Channels;
		labels: ['ansi16'];
		rgb: {
			(ansi16: ANSI16): RGB;
			raw: (ansi16: ANSI16) => RGB;
		};
	};
	ansi256: {
		channels: Channels;
		labels: ['ansi256'];
		rgb: {
			(ansi256: ANSI256): RGB;
			raw: (ansi256: ANSI256) => RGB;
		};
	};
	hcg: {
		channels: Channels;
		labels: ['h', 'c', 'g'];
		rgb: {
			(...hcg: HCG): RGB;
			raw: (...hcg: HCG) => RGB;
		};
		hsv: {
			(...hcg: HCG): HSV;
			raw: (...hcg: HCG) => HSV;
		};
		hwb: {
			(...hcg: HCG): HWB;
			raw: (...hcg: HCG) => HWB;
		};
	};
	apple: {
		channels: Channels;
		labels: ['r16', 'g16', 'b16'];
		rgb: {
			(...apple: Apple): RGB;
			raw: (...apple: Apple) => RGB;
		};
	};
	gray: {
		channels: Channels;
		labels: ['gray'];
		rgb: {
			(...gray: Gray): RGB;
			raw: (...gray: Gray) => RGB;
		};
		hsl: {
			(...gray: Gray): HSL;
			raw: (...gray: Gray) => HSL;
		};
		hsv: {
			(...gray: Gray): HSV;
			raw: (...gray: Gray) => HSV;
		};
		hwb: {
			(...gray: Gray): HWB;
			raw: (...gray: Gray) => HWB;
		};
		cmyk: {
			(...gray: Gray): CMYK;
			raw: (...gray: Gray) => CMYK;
		};
		lab: {
			(...gray: Gray): LAB;
			raw: (...gray: Gray) => LAB;
		};
		hex: {
			(...gray: Gray): HEX;
			raw: (...gray: Gray) => HEX;
		};
	};
};

declare const convert: Convert;
export default convert;
