/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author yuhr
*/
var loader_utils = require('loader-utils');
var assign = require('object-assign');

module.exports = function(content) {
	this.cacheable && this.cacheable();
  var query = loader_utils.getOptions(this);
  var key = query.config;
  var options = this.options && this.options.hasOwnProperty(key) ? this.options[key] : {};
  delete query.config;
  var config = assign(query, options);
  if (config.process) {
    if ('function' === typeof config.process)
      content = config.process(content, this.resourcePath);
    else
      throw new Error('The option "process" must be a function.');
  }
  else throw new Error('The process-loader needs a function to be set to "options.process".');
	return content;
}