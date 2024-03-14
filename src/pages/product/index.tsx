/* eslint-disable react-hooks/exhaustive-deps */
import { fetcher } from "@/lib/swr/fetcher";
import ProductView from "@/views/product";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  // useEffect(() => {
  //   fetch("/api/product")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data.data));
  // }, []);

  const { data, error, isLoading } = useSWR("/api/product", fetcher);

  return (
    <div>
      <ProductView products={isLoading ? [] : data.data} />
    </div>
  );
};

export default ProductPage;
