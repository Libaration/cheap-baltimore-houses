import { Dropdown } from "@nextui-org/react";
import Link from "next/link";
const HomesFilterDropdown = ({ title, menuItems }) => {
  return (
    <div>
      <Dropdown trigger="longPress">
        <Dropdown.Button flat>Trigger</Dropdown.Button>
        <Dropdown.Menu aria-label="Static Actions">
          <Dropdown.Item key="new">New file</Dropdown.Item>
          <Dropdown.Item key="copy">Copy link</Dropdown.Item>
          <Dropdown.Item key="edit">Edit file</Dropdown.Item>
          <Dropdown.Item key="delete" color="error">
            Delete file
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      dropdown glitchy until PR is merged. <br />
      More information:{" "}
      <Link href="https://github.com/nextui-org/nextui/pull/965/">
        <u className="cursor-pointer">Pull Request 965</u>
      </Link>
    </div>
  );
};
export default HomesFilterDropdown;
