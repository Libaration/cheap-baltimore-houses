import Image from "next/future/image";
const ImageViewToggle = ({ handleViewChange }) => {
  return (
    <ol>
      <li className="float-left mr-2 ml-2">
        <Image
          src="/column.png"
          height="24"
          width="24"
          alt="column-view"
          name="columns"
          className="object-cover cursor-pointer"
          onClick={handleViewChange}
        />
      </li>
      <li className="float-left ml-2 mr-2">
        <Image
          src="/row.png"
          height="24"
          width="24"
          alt="row-view"
          name="rows"
          className="object-cover cursor-pointer"
          onClick={handleViewChange}
        />
      </li>
      <li className="float-left mr-2 ml-2">
        <Image
          src="/masonry.png"
          height="24"
          width="24"
          alt="masonry-view"
          name="masonry"
          className="object-cover cursor-pointer"
          onClick={handleViewChange}
        />
      </li>
    </ol>
  );
};
export default ImageViewToggle;
