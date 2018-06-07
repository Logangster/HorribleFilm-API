const Router = require('koa-router');
const { resourceRoute } = require('./helper');
const {
    UserController
} = require('../controllers');

var router = new Router({
  prefix: '/api'
});

resourceRoute(router, 'users', UserController, ['findAll', 'create']);

module.exports = router;