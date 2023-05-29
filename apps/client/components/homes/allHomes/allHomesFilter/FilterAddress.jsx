/* eslint-disable react-hooks/exhaustive-deps */
import { Input } from "@nextui-org/react";
import { debounce } from "lodash";
import { useMemo, useEffect } from "react";
const FilterAddress = ({ setAddress, setPage }) => {
  const debouncedSetAddress = useMemo(() => debounce(setAddress, 1500), []);
  useEffect(() => {
    return () => {
      debouncedSetAddress.cancel();
    };
  }, []);
  const onAddressChange = (changeEvent) => {
    debouncedSetAddress(changeEvent.target.value);
    if (changeEvent.target.value === "" || changeEvent.target.value.length === 5) {
      setPage(1);
      debouncedSetAddress.flush();
    }
  };
  return (
    <Input placeholder="Street" className="mb-2" aria-label="Zipcode" onChange={onAddressChange} />
  );
};
export default FilterAddress;
