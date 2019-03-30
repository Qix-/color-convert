import babel from 'rollup-plugin-babel';
// Rollup needs this.
import pkg from './package.json'; // eslint-disable-line import/extensions

export default {
	external: Object.keys(pkg.dependencies),
	input: 'src/index.js',
	output: {
		file: pkg.main,
		format: 'cjs'
	},
	plugins: [babel({plugins: ['codegen']})]
};
