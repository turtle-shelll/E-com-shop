import React from "react";
// import Single_product_card from "../components/single_product_card";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { buyProduct } from "../configureStore/storeSlice";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/singlePro.module.css";

function VeiwProduct() {
  const dispatch = useDispatch();
  const { cartItems, products } = useSelector((state) => state.root);
  const router = useRouter();
  const id = router.asPath.split("/?id=")[1];
  const this_product = products.filter(
    async (product) => product.id === parseInt(id, 10)
  )[0];
  if (!this_product) {
    router.push("/");
    return null;
  }
  return (
    <div>
      {/* <Single_product_card this_product={this_product} /> */}
      <div className={styles.product_container}>
        <div className={styles.product_Image}>
          <h2>{this_product.name || "product"}</h2>
          <Image
            //   src={"/laptop.jpg"}
            alt={this_product.name || "product"}
            src={`/${this_product.image || "laptop-s.jpg"}`}
            width="350px"
            height="270px"
            className={styles._Image}
          />
        </div>
        <div className={styles.product_discription}>
          <h3>price: {this_product.price || "10000"}</h3>
          <h4>discription</h4>
          <p>{this_product.description}</p>
        </div>
        <div className={styles.Bottom_btn_box}>
          <span className={styles.Bottom_btn1}>
            <Link href={"/"}>go back</Link>
          </span>
          <span
            className={styles.Bottom_btn2}
            onClick={() => dispatch(buyProduct())}
          >
            Buy now
          </span>
        </div>
      </div>
    </div>
  );
}

export default VeiwProduct;
