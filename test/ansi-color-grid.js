const cc = require('..');

process.stdout.write('\n');

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
		} \u001B[48;5;${i}m   \u001B[0;${
			code16 + 10
		}m   \u001B[m ${
			code16
		}${
			'  '.substr(Math.max(0, Math.floor(Math.log10(code16))))
		}]`
	);
}

process.stdout.write('\n\n');
