const config = require('./config.json');
const protectedRoutes = require('./protected-routes');
const publicRoutes = require('./public-routes');

module.exports = {
  config,
  protectedRoutes,
  publicRoutes
}