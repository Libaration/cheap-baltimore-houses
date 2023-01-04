import { Dropdown } from "@nextui-org/react";
import Link from "next/link";
const HomesFilterDropdown = ({ title, menuItems }) => {
  return (
    <div>
      dropdown will go here awaiting PR merge. <br />
      More information:{" "}
      <Link href="https://github.com/nextui-org/nextui/pull/965/">
        <u className="cursor-pointer">Pull Request 965</u>
      </Link>
    </div>
  );
};
export default HomesFilterDropdown;
