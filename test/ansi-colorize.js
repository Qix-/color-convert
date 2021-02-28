#!/usr/bin/env node

const jimp = require('jimp');
const cc = require('..');

async function main() {
	if (process.argv.length !== 4) {
		console.error('usage: <input.{png,bmp,...}> <output.{png,bmp,...}>');
		process.exit(2);
	}

	const inputPath = process.argv[2];
	const outputPath = process.argv[3];

	const img = await jimp.read(inputPath);

	img.scan(
		0, 0,
		img.bitmap.width, img.bitmap.height,
		(x, y, idx) => {
			let r = img.bitmap.data[idx];
			let g = img.bitmap.data[idx + 1];
			let b = img.bitmap.data[idx + 2];

			[r, g, b] = cc.ansi256.rgb(cc.rgb.ansi256(r, g, b));

			img.bitmap.data[idx] = r;
			img.bitmap.data[idx + 1] = g;
			img.bitmap.data[idx + 2] = b;
		}
	);

	await img.write(outputPath);
}

main().catch(error => {
	console.error(error);
	process.exit(1);
});
