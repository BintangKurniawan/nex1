import React from "react";
import styles from "./DetailProduct.module.scss";
import { productType } from "@/types/product.type";
const DetailProduct = ({ product }: { product: productType }) => {
  return (
    <>
      <h1 className={styles.title}>Detail product</h1>

      <div className={styles.productDetail}>
        <div className={styles.productDetail__image}>
          <img src={product.image} alt={product.name} />
        </div>
        <h4 className={styles.productDetail__name}>{product.name}</h4>
        <p className={styles.productDetail__category}>{product.category}</p>
        <p className={styles.productDetail__price}>
          {product.price &&
            product.price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
        </p>
      </div>
    </>
  );
};

export default DetailProduct;
