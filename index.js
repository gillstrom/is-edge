'use strict';
var arrayContains = require('array-contains');

module.exports = function (version) {
	if (typeof navigator === 'undefined') {
		return false;
	}

	var reg = new RegExp(/(edge)\/((\d+)?[\w\.]+)/i);
	var arr = reg.exec(navigator.userAgent);

	if (!arr) {
		return false;
	}

	if (version && !arrayContains(arr, version)) {
		return false;
	}

	return true;
};
