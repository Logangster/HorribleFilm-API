const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config.json');

class AuthController {

  async login(ctx) {
    let { username, password } = ctx.request.body;
    const user = await ctx.db.User.findOne({ where: { username } });
    if (!user) {
      ctx.throw(401);
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ id: user.id, username: user.username }, config.jwtSecret, { expiresIn: '1h' });
      ctx.body = { token };
    } else {
      ctx.throw(401);
    }
  }

}

module.exports = AuthController;