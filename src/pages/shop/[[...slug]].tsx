import React from "react";
import { useRouter } from "next/router";

const ShopPage = () => {
  const { query } = useRouter();

  return (
    <div>
      <h1>Detail product</h1>
      <p>Product : {query.slug}</p>
    </div>
  );
};

export default ShopPage;
