/**
 * @author Erik Desjardins
 * See LICENSE file in root directory for full license.
 */

'use strict';

var loaderUtils = require('loader-utils');

module.exports = function() {};

module.exports.pitch = function(request) {
	var options = Object.assign({ match: /\.js$/i }, loaderUtils.getOptions(this));

	return '';
};
