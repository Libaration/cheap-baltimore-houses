import { homesCalls } from "../../lib/homes";
import Breadcrumb from "../../components/Breadcrumb";
import { SWRConfig } from "swr";
import dynamic from "next/dynamic";
import { useState } from "react";
const Homes = dynamic(() => import("../../components/homes/allHomes/Homes"), {
  ssr: false,
});
export default function Page({ fallback }) {
  const [page, setPage] = useState(fallback.meta.pagination.page);
  const [pageSize, setPageSize] = useState(fallback.meta.pagination.pageSize);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  return (
    <SWRConfig value={{ fallbackData: fallback }}>
      <Breadcrumb />

      <h4 className="smallHeroText text-center" style={{ color: "#333333" }}>
        Cheap Baltimore Houses
      </h4>

      <Homes
        page={page}
        setPage={setPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
        zipcode={zipcode}
        setZipcode={setZipcode}
        setAddress={setAddress}
        address={address}
      />
      <div style={{ display: "none" }}>
        <Homes
          page={page + 1}
          pageSize={pageSize}
          zipcode={zipcode}
          address={address}
          setZipcode={setZipcode}
          setAddress={setAddress}
        />
      </div>
    </SWRConfig>
  );
}

export const getStaticProps = async () => {
  const response = await homesCalls.get.allHomesPaginated({
    page: 1,
    pageSize: 9,
  });
  return {
    props: {
      fallback: {
        data: response.data,
        meta: response.meta,
      },
    },
    revalidate: 60,
  };
};
