import { sendOfferEmail } from "../../lib/email/azureEmail";
export default function handler(req, res) {
  if (req.method !== "POST") return res.status(400).json({ status: "error" });
  try {
    sendOfferEmail(req.body, process.env.COMMUNICATION_API_CONNECTION_STRING);
    res.status(200).json({ status: "success" });
  } catch (error) {
    res.status(400).json({ status: "error" });
  }
}
