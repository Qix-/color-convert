var conversions = require('./conversions');

var convert = module.exports = {};

var models = Object.keys(conversions);

models.forEach(function (fromModel) {
	convert[fromModel] = Object.defineProperties({}, {
		channels: {value: conversions[fromModel].channels},
		labels: {value: conversions[fromModel].labels}
	});

	models.forEach(function (toModel) {
		if (toModel !== fromModel) {
			convert[fromModel][toModel] = wrap(search(fromModel, toModel));
		}
	});
});

// util functions:

function wrap(fn) {
	var wrappedRawFn = function (args) {
		return fn(arguments.length > 1 ? Array.prototype.slice.call(arguments) : args);
	};

	var wrappedFn = function (args) {
		var result = fn(arguments.length > 1 ? Array.prototype.slice.call(arguments) : args);

		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}
		return result;
	};

	// preserve .path property if there is one
	wrappedFn.path = fn.path;
	wrappedFn.raw = wrappedRawFn;

	return wrappedFn;
}

/**
 * search the shortest path between 2 keys in conversions object
 * return the composed function, with a .path property
 */
function search(fromKey, toKey) {
	var nodes = [fromKey];
	var visited = {}; // map node key => parent key
	visited[fromKey] = null;

	while (nodes.length) { // search breadth-first
		var newNodes = [];
		for (var i = 0; i < nodes.length; i++) {
			var k = nodes[i];
			var targets = conversions[k];
			if (targets[toKey]) { // done, we can stop
				var arr = [toKey, k];
				var fn = targets[toKey];
				while (visited[k]) { // compose functions while there's a parent
					fn = compose(fn, conversions[visited[k]][k]);
					k = visited[k];
					arr.push(k);
				}
				fn.path = arr.reverse();
				return fn;
			}

			for (var key in targets) {
				if (visited[key] === undefined) {
					visited[key] = k;
					newNodes.push(key);
				}
			}
		}
		nodes = newNodes;
	}
}

function compose(f, g) {
	return function (args) {
		return f(g(args));
	};
}
