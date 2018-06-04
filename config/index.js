const config = require('./config.json');
const protectedRoutes = require('./protected-routes');
const publicRoutes = require('./protected-routes');

module.exports = {
  config,
  protectedRoutes,
  publicRoutes
}