import Breadcrumb from "./Breadcrumb";
export default function ContentLayout({ children }) {
  return (
    <>
      <Breadcrumb />
      <h4 className="smallHeroText text-center">Cheap Baltimore Houses</h4>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="max-w-3xl mx-auto">{children}</div>
      </div>
    </>
  );
}
