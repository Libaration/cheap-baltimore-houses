import { EmailClient } from "@azure/communication-email";
import { sendOfferTemplate } from "./sendOfferTemplate";
export const sendOfferEmail = async (
  { offer, email, message, address, cover_image, homeId },
  connectionString
) => {
  const client = new EmailClient(connectionString);
  try {
    const emailMessage = {
      senderAddress: "<DoNotReply@d6b8ec62-5f0c-410e-a80a-2032dce52a5d.azurecomm.net>",
      content: {
        subject: "CheapBaltimoreHouses - New Offer Received on " + address,
        html: sendOfferTemplate({ offer, email, message, address, cover_image, homeId }),
      },
      recipients: {
        to: [
          {
            address: "<seabornleads@gmail.com>",
            displayName: "Chris Seaborn",
          },
        ],
      },
    };
    const response = await client.beginSend(emailMessage);
    if (response) {
      return { status: "success" };
    }
  } catch (error) {
    throw new Error(error);
  }
};
