/* eslint-disable import/extensions */
import pkg from './package.json';

export default {
	input: 'src/index.js',
	output: {
		file: pkg.main,
		format: 'cjs'
	},
	external: Object.keys(pkg.dependencies)
};
