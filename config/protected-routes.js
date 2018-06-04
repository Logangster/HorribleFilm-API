const Router = require('koa-router');
var router = new Router({
  prefix: '/api'
});
const {
    UserController
} = require('../controllers');

// User Routes
router.get('/users/:id', UserController.findOne);
router.delete('/users/:id', UserController.delete);
router.put('/users/:id', UserController.update);

module.exports = router;