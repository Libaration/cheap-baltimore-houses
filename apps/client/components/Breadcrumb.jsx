import Link from "next/link";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import React from "react";
const Breadcrumb = (props) => {
  console.log("testlabel");
  const router = useRouter();
  const paths = router.pathname
    .split("/")
    .map((path) => (path === "[id]" ? router.query.id : path));
  const renderInactive = (path, index) => {
    let href = "/";
    for (let i = 1; i <= index; i++) {
      href += `${paths[i]}/`;
    }

    return (
      <React.Fragment key={uuidv4()}>
        <li className="inline-flex items-center ">
          <Link href={href}>
            <span className="text-secondary-500 hover:text-secondary-300 cursor-pointer">
              {path.charAt(0).toUpperCase() + path.slice(1)}
            </span>
          </Link>
        </li>
        {renderCarrot(index)}
      </React.Fragment>
    );
  };

  const renderRootCrumb = () => {
    return (
      <React.Fragment key={uuidv4()}>
        <li className="inline-flex items-center">
          <Link href="/">
            <span className="text-secondary-500 hover:text-secondary-300 cursor-pointer">
              Landing
            </span>
          </Link>
        </li>
        {renderCarrot(0)}
      </React.Fragment>
    );
  };

  const renderCarrot = (index) => {
    if (index === paths.length - 1) return null;
    return (
      <React.Fragment key={uuidv4()}>
        <svg
          className="h-6 w-6 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          key="svg"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </React.Fragment>
    );
  };

  const renderActive = (path, index) => {
    if (path === "") return (path = "/");
    let href = "/";
    for (let i = 1; i < paths.length; i++) {
      href += `${paths[i]}/`;
    }

    return (
      <React.Fragment key={uuidv4()}>
        <li className="inline-flex items-center space-x-4" aria-current="page">
          <Link href={href}>
            <span className="text-primary-500 hover:text-secondary-800 cursor-pointer">
              {props.customTitle
                ? props.customTitle.charAt(0).toUpperCase() + props.customTitle.slice(1)
                : path.charAt(0).toUpperCase() + path.slice(1)}
            </span>
          </Link>
        </li>
        {renderCarrot(index)}
      </React.Fragment>
    );
  };
  const renderPaths = () => {
    return paths.map((path, index) => {
      if (index === 0 && paths.length !== 0) return renderRootCrumb();
      if (index === paths.length - 1) {
        return renderActive(path, index);
      } else {
        return renderInactive(path, index);
      }
    });
  };
  return (
    <>
      <nav aria-label="breadcrumb" className="pl-5 pr-5">
        <ol className="inline-flex items-center space-x-4 py-2 text-sm font-medium">
          {renderPaths()}
        </ol>
      </nav>
    </>
  );
};
export default Breadcrumb;
