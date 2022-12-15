import en_us from "../../locale/en_us.json";
import { get, template } from "lodash";
const TRANSLATION_NOT_FOUND = "Translation not found";

export function translatedCopy(target, values) {
  const content = get(en_us, target, TRANSLATION_NOT_FOUND);
  const templated = template(content);
  return templated(values);
}
