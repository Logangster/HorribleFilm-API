const Router = require('koa-router');
var router = new Router({
  prefix: '/api'
});
const {
    AuthController,
    UserController
} = require('./controllers');

router.post('/login', AuthController.login);
router.post('/users', UserController.create);
router.get('/users', UserController.findAll);

module.exports = router;