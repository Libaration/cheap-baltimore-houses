import * as EmailValidator from "email-validator";
import { homesCalls } from "../../lib/homes";
import { isNumber } from "lodash";
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(400).json({ status: "error" });
  try {
    const { offer, email, homeId } = req.body;
    const parsedOffer = parseInt(offer);
    const home = await homesCalls.get.getHome(homeId);
    const isValid = EmailValidator.validate(email);
    const r = await fetch(`https://open.kickbox.com/v1/disposable/${email}`);
    const response = await r.json();
    const isDisposable = response.disposable;
    if (!isDisposable && isValid && home.data && isNumber(parsedOffer)) {
      return res.status(200).json({ status: "success" });
    }
    return res.status(400).json({ status: "Invalid" });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
}
