module.exports = {
  async findAll(ctx) {
    ctx.body = await ctx.db.User.findAll();
  },

  async findOne(ctx) {
    const user = await ctx.db.User.findById(ctx.params.id);
    if (!user) {
      ctx.throw(404);
    }
    ctx.body = user;
  },

  async create(ctx) {
    ctx.body = await ctx.db.User.create({
      username: ctx.request.body.username,
      email: ctx.request.body.email,
      password: ctx.request.body.password
    });
  },

  async delete(ctx) {
    const count = await ctx.db.User.destroy({ where: { id: ctx.params.id } });
    count === 0 ? ctx.throw(404) : ctx.body = 'User deleted successfully';
  },

  async update(ctx) {
    const count = await ctx.db.User.update({
      username: ctx.request.body.username,
      email: ctx.request.body.email,
      password: ctx.request.body.password
    }, { 
      where: { id: ctx.params.id } 
    });

    count === 0 ? ctx.throw(404) : ctx.body = 'User updated succesfully';
  }
}