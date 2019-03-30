// Since `rollup` never touches this file, it can't use modules like the rest.
// Get the import's in `conversions` to work here.
require('@babel/register')({plugins: ['@babel/transform-modules-commonjs']});
const conversions = require('./conversions');

const colorModels = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

const graphs = new Map();
const modelNames = Object.keys(colorModels);
const blocks = [];

function composeConversion(path, fromModel, toModel) {
	let conversion = '';
	const functionName = path.length > 1 ? `${fromModel}${toModel}fn` : `conversions.${fromModel}.${toModel}`;
	if (path.length > 1) {
		const conversionPath = [fromModel, ...path];
		let conversionFunction = '';
		for (let i = 0; i < conversionPath.length - 1; ++i) {
			conversionFunction = `conversions.${conversionPath[i]}.${conversionPath[i + 1]}(${conversionFunction}`;
		}

		conversion = `const ${functionName} = args => ${conversionFunction}args${')'.repeat(conversionPath.length - 1)};`;
	}

	return `${conversion}
	convert.${fromModel}.${toModel} = wrapRounded(${functionName});
	convert.${fromModel}.${toModel}.raw = wrapRaw(${functionName});`;
}

for (const fromModel of modelNames) {
	const graph = {};
	for (const model of modelNames) {
		graph[model] = {distance: model === fromModel ? 0 : -1, parent: null};
	}

	const queue = [fromModel];
	while (queue.length) {
		const current = queue.pop();
		for (const adjacent of Object.keys(conversions[current])) {
			const node = graph[adjacent];
			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	graphs.set(fromModel, graph);
}

for (const [fromModel, graph] of graphs) {
	const {channels, labels} = colorModels[fromModel];
	const pathFunctions = [];
	for (const [toModel, {parent}] of Object.entries(graph)) {
		if (parent === null) {
			continue;
		}

		const path = [toModel];
		let current = parent;
		while (graph[current].parent) {
			path.unshift(current);
			current = graph[current].parent;
		}

		pathFunctions.push(composeConversion(path, fromModel, toModel));
	}

	blocks.push(`
  convert.${fromModel} = {};
	Object.defineProperty(convert.${fromModel}, 'channels', {value: ${channels}});
  Object.defineProperty(convert.${fromModel}, 'labels', {value: '${labels}'});
  ${pathFunctions.join('\n')}
`);
}

module.exports = `
  import * as conversions from './conversions.js';

  function wrapRaw(fn) {
    var wrappedFn = function (args) {
      if (args === undefined || args === null) {
        return args;
      }

      if (arguments.length > 1) {
        args = Array.prototype.slice.call(arguments);
      }

      return fn(args);
    };

    // preserve .conversion property if there is one
    if ('conversion' in fn) {
      wrappedFn.conversion = fn.conversion;
    }

    return wrappedFn;
  }

  function wrapRounded(fn) {
    var wrappedFn = function (args) {
      if (args === undefined || args === null) {
        return args;
      }

      if (arguments.length > 1) {
        args = Array.prototype.slice.call(arguments);
      }

      var result = fn(args);

      // we're assuming the result is an array here.
      // see notice in conversions.js; don't use box types
      // in conversion functions.
      if (typeof result === 'object') {
        for (var len = result.length, i = 0; i < len; i++) {
          result[i] = Math.round(result[i]);
        }
      }

      return result;
    };

    // preserve .conversion property if there is one
    if ('conversion' in fn) {
      wrappedFn.conversion = fn.conversion;
    }

    return wrappedFn;
  }

  const convert = {};
  ${blocks.join('\n')}
  export default convert;
`;
