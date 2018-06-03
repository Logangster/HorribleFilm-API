module.exports = {
    async findAll(ctx) {
        ctx.body = await ctx.db.User.findAll();
    }
}