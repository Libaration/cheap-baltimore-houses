import { Input } from "@nextui-org/react";
import { debounce } from "lodash";
import { useState } from "react";
const HomesFilterZipcode = ({ setShouldFetchByZipcode, setZipcode }) => {
  const [textboxZipcode, setTextboxZipcode] = useState("");
  const handleChange = (e) => {
    if (textboxZipcode !== "") {
      setShouldFetchByZipcode(true);
      const debouncedSetZipcode = debounce(setZipcode, 1500);
      debouncedSetZipcode(e.target.value);
    } else {
      setShouldFetchByZipcode(false);
    }
    setTextboxZipcode(e.target.value);
  };
  return (
    <Input
      placeholder="Zipcode"
      className="mt-5 mb-5"
      value={textboxZipcode}
      aria-label="Zipcode"
      onChange={handleChange}
    />
  );
};
export default HomesFilterZipcode;
