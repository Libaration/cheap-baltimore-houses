const _ = require("lodash");

module.exports = (plugin) => {
  plugin.controllers.user.updateMe = async (ctx) => {
    const user = ctx.state.user;
    if (!user) {
      return ctx.unauthorized();
    }
    const data = _.pick(ctx.request.body, [
      "email",
      "username",
      "password",
      "confirmPassword",
      "liked_homes",
    ]);

    await strapi.query("plugin::users-permissions.user").update({
      where: { id: ctx.state.user.id },
      data,
    });
    return ctx.send({
      status: "success",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });
  };

  plugin.controllers.user.toggleLike = async (ctx) => {
    const homeId = parseInt(ctx.params.homeId);
    const user = ctx.state.user;
    if (!user) {
      return ctx.unauthorized();
    }
    const prevHomes = await strapi.entityService.findOne(
      "plugin::users-permissions.user",
      user.id,
      {
        fields: [],
        populate: {
          liked_homes: {
            fields: ["id"],
          },
        },
      }
    );
    const prev_liked_homes = _.flatMap(
      prevHomes.liked_homes,
      (home) => home.id
    );
    let liked_homes = prev_liked_homes;

    if (liked_homes.includes(homeId)) {
      liked_homes = liked_homes.filter((id) => id !== homeId);
    } else {
      liked_homes.push(homeId);
    }
    await strapi.query("plugin::users-permissions.user").update({
      where: { id: user.id },
      data: { liked_homes },
    });
    return ctx.send({
      id: user.id,
      username: user.username,
      email: user.email,
      provider: user.provider,
      confirmed: user.confirmed,
      blocked: user.blocked,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      liked_homes: liked_homes.map((id) => ({ id })),
    });
  };

  plugin.routes["content-api"].routes.push(
    {
      method: "PUT",
      path: "/user/updateMe",
      handler: "user.updateMe",
      config: {
        prefix: "",
      },
    },
    {
      method: "POST",
      path: "/user/toggleLike/:homeId",
      handler: "user.toggleLike",
      config: {
        prefix: "",
      },
    }
  );

  return plugin;
};
