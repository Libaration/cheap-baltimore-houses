const { marked } = require("marked");
module.exports = {
  async afterCreate(event) {
    // Connected to "Save" button in admin panel
    const { result } = event;
    const rootURL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
    const COVER = result.cover_image.formats.small.url;
    const STREET = result.street;
    const DESCRIPTION = marked.parse(result.description);
    const mailingList = await strapi.entityService.findMany("api::mailing.mailing", {
      fields: ["email"],
    });
    mailingList.forEach(async (subscribedUser) => {
      try {
        await strapi.plugin("email-designer").service("email").sendTemplatedEmail(
          {
            // required
            to: subscribedUser.email,
          },
          {
            // required - Ref ID defined in the template designer (won't change on import)
            templateReferenceId: 10,

            // If provided here will override the template's subject.
            // Can include variables like `Thank you for your order {{= USER.firstName }}!`
          },
          {
            // this object must include all variables you're using in your email template
            COVER,
            DESCRIPTION,
            STREET,
          }
        );
      } catch (err) {
        strapi.log.debug("📺: ", err);
        console.log(err);
      }
    });
    console.log(mailingList);
    // try {
    //   await strapi.plugin("email-designer").service("email").sendTemplatedEmail(
    //     {
    //       // required
    //       to: "libaration@gmail.com",
    //     },
    //     {
    //       // required - Ref ID defined in the template designer (won't change on import)
    //       templateReferenceId: 10,

    //       // If provided here will override the template's subject.
    //       // Can include variables like `Thank you for your order {{= USER.firstName }}!`
    //     },
    //     {
    //       // this object must include all variables you're using in your email template
    //       COVER: COVER,
    //     }
    //   );
    // } catch (err) {
    //   strapi.log.debug("📺: ", err);
    //   console.log(err);
    // }
  },
};
