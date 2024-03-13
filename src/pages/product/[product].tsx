import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "@/lib/swr/fetcher";
import DetailProduct from "@/views/DetailProduct";
import { productType } from "@/types/product.type";

const DetailProductPage = ({ product }: { product: productType }) => {
  const { query } = useRouter();
  const { data, error, isLoading } = useSWR(`/api/product/${query.product}`, fetcher);

  return (
    <div>
      <DetailProduct product={product} />
    </div>
  );
};

export default DetailProductPage;

export async function getServerSideProps({ params }: { params: { product: string } }) {
  const res = await fetch(`http://localhost:3000/api/product/${params.product}`);
  const response = await res.json();

  return {
    props: {
      product: response.data,
    },
  };
}
