import { Input } from "@nextui-org/react";
import { debounce } from "lodash";
import { useState } from "react";
import { useEffect, useMemo } from "react";
const HomesFilterZipcode = ({ setShouldFetchByZipcode, setZipcode }) => {
  const debouncedSetZipcode = useMemo(() => {
    return debounce(setZipcode, 1500);
  }, []);
  useEffect(() => {
    return () => {
      debouncedSetZipcode.cancel();
    };
  }, []);
  const handleChange = (e) => {
    console.log(e.target.value);
    if (
      e.target.value !== "" ||
      e.target.value !== " " ||
      e.target.value !== null ||
      e.target.value !== undefined
    ) {
      e.target.value = e.target.value.replace(/[^0-9]/g, "");
      debouncedSetZipcode(e.target.value);
      setShouldFetchByZipcode(true);
    } else {
      setShouldFetchByZipcode(false);
    }
  };
  return (
    <Input
      placeholder="Zipcode"
      className="mt-5 mb-5"
      aria-label="Zipcode"
      onChange={handleChange}
    />
  );
};
export default HomesFilterZipcode;
