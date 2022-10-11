module.exports = {
  async afterCreate(event) {
    // Connected to "Save" button in admin panel
    const { result } = event;
    const rootURL =
      process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
    const COVER = result.cover_image.formats.small.url;

    try {
      await strapi.plugin("email-designer").service("email").sendTemplatedEmail(
        {
          // required
          to: "bobbyhuie94@gmail.com",
        },
        {
          // required - Ref ID defined in the template designer (won't change on import)
          templateReferenceId: 10,

          // If provided here will override the template's subject.
          // Can include variables like `Thank you for your order {{= USER.firstName }}!`
        },
        {
          // this object must include all variables you're using in your email template
          COVER: COVER,
        }
      );
    } catch (err) {
      strapi.log.debug("📺: ", err);
      console.log(err);
    }
  },
};
