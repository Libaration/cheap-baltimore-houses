module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "strapi-provider-email-sendinblue",
      providerOptions: {
        sendinblue_api_key: process.env.MAIL_KEY,
        sendinblue_default_replyto: process.env.MAIL_REPLY_TO,
        sendinblue_default_from: process.env.MAIL_REPLY_TO,
        sendinblue_default_from_name: process.env.MAIL_SENDER_NAME,
      },
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...
});
