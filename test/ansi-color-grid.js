const cc = require('..');

process.stdout.write('\n');

console.log('ANSI256 -> ANSI16\n');

for (let i = 0; i < 256; i++) {
	if (i > 0 && (i % 8) === 0) {
		process.stdout.write('\n');
	}

	const code16 = cc.ansi256.ansi16(i);

	process.stdout.write(
		`  [${
			'  '.substr(Math.max(0, Math.floor(Math.log10(i))))
		}${
			i
		} \u001B[48;5;${i}m   \u001B[m\u001B[${
			code16 + 10
		}m   \u001B[m ${
			code16
		}]`
	);
}

process.stdout.write('\n\n');

console.log('ANSI256 -> RGB\n');
console.log('  NOTE: The first 16 colors will NOT be exact. See note under ANSI16 -> RGB for');
console.log('        more information.\n');

for (let i = 0; i < 256; i++) {
	if (i > 0 && (i % 4) === 0) {
		process.stdout.write('\n');
	}

	const [r, g, b] = cc.ansi256.rgb(i);
	const hex = cc.rgb.hex(r, g, b);

	process.stdout.write(
		`  [${
			'  '.substr(Math.max(0, Math.floor(Math.log10(i))))
		}${
			i
		} \u001B[48;5;${i}m   \u001B[m\u001B[48;2;${r};${g};${b}m   \u001B[m #${
			hex
		}]`
	);
}

process.stdout.write('\n\n');

console.log('ANSI16 -> RGB\n');
console.log('  NOTE: These colors are arbitrary, and are most likely overridden by your');
console.log('        terminal emulator, or even customized by you. We can\'t detect that.');
console.log('        Expect them to be similar, but not the exact same.');

[[30, 40], [40, 40], [90, 100], [100, 100]].forEach(([offset, displayOffset]) => {
	for (let i = 0; i < 8; i++) {
		if ((i % 4) === 0) {
			process.stdout.write('\n');
		}

		const n = i + offset;

		const [r, g, b] = cc.ansi16.rgb(n);
		const hex = cc.rgb.hex(r, g, b);

		process.stdout.write(
			`  [${
				'  '.substr(Math.max(0, Math.floor(Math.log10(n))))
			}${
				n
			} \u001B[${i + displayOffset}m   \u001B[m\u001B[48;2;${r};${g};${b}m   \u001B[m #${
				hex
			}]`
		);
	}
});

process.stdout.write('\n\n');
