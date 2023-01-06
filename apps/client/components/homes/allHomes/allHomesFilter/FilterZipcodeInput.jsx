/* eslint-disable react-hooks/exhaustive-deps */
import { Input } from "@nextui-org/react";
import { debounce } from "lodash";
import { useMemo, useEffect } from "react";
const FilterZipcodeInput = ({ setZipcode }) => {
  const debouncedSetZipcode = useMemo(() => debounce(setZipcode, 1500), []);
  useEffect(() => {
    return () => {
      debouncedSetZipcode.cancel();
    };
  }, []);
  const onZipcodeChange = (changeEvent) => {
    changeEvent.target.value = changeEvent.target.value.replace(/[^0-9]/g, "");
    debouncedSetZipcode(changeEvent.target.value);
  };
  return (
    <Input
      placeholder="Zipcode"
      className="mt-5 mb-5"
      aria-label="Zipcode"
      onChange={onZipcodeChange}
    />
  );
};
export default FilterZipcodeInput;
