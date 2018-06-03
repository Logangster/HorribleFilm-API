const Router = require('koa-router');
var router = new Router({
  prefix: '/api'
});
const {
    UserController
} = require('./controllers');

router.get('/users', UserController.findAll);

module.exports = router;