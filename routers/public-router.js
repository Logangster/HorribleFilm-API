const Router = require('koa-router');
const {
  AuthController,
  UserController
} = require('../controllers');

var router = new Router({
  prefix: '/api'
});

router.post('/login', AuthController.login);

router.post('/users', UserController.create);
router.get('/users', UserController.findAll);

module.exports = router;