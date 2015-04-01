var variables = require('./scripts/template/styles');

/**
 * Exposes our motherfucking variables to stylus
 */
module.exports = function() {
  return function(style) {
    for ( variable in variables ) {
      style.define(variable, variables[variable]);
    }
  }
}
