'use strict';
var arrayContains = require('array-contains');

module.exports = function (opts) {
	opts = opts || {};

	if (!opts.userAgent && typeof navigator === 'undefined') {
		return false;
	}

	var reg = new RegExp(/(edge)\/((\d+)?[\w\.]+)/i);
	var arr = reg.exec(opts.userAgent || navigator.userAgent);

	if (!arr || (opts.version && !arrayContains(arr, opts.version))) {
		return false;
	}

	return true;
};
