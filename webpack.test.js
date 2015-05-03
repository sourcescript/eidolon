/**
 * Webpack config for our Karma tests
 * This captures only test files (*-spec.js).
 * http://webpack.github.io/docs/context.html
 */
var context = require.context('./scripts', true, /-spec\.js$/);
context.keys().forEach(context);
