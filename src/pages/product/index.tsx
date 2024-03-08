/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
type productType = {
  id: number;
  name: string;
  price: number;
  variant: string;
};
const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [products, setProducts] = useState([]);
  const router = useRouter();
  useEffect(() => {
    if (!isLogin) {
      router.push("/auth/login");
    }
  }, []);

  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, []);

  return (
    <>
      <h1>Product page</h1>
      {products.map((product: productType) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.variant}</p>
        </div>
      ))}
    </>
  );
};

export default ProductPage;
