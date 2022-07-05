import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/singlePro.module.css";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { buyProduct } from "../configureStore/storeSlice";

function Single_product_card({ this_product }) {
  const dispatch = useDispatch();
  const router = Router.useRouter();
  if (!this_product) {
    router.push("/");
    return null;
  }

  return (
    <div className={styles.product_container}>
      <div className={styles.product_Image}>
        <h2>{this_product.name || "laptop"}</h2>
        <Image
          //   src={"/laptop.jpg"}
          src={`/${this_product.image}`}
          width="350px"
          height="270px"
          className={styles._Image}
        />
      </div>
      <div className={styles.product_discription}>
        <h3>price: {this_product.price}</h3>
        <h4>discription</h4>
        <p>
          {/* this is laptop Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Repellendus odit consectetur repudiandae, illo, ipsam at
          corporis doloribus rem porro accusantium dignissimos officia.
          Inventore, commodi? */}
          {this_product.description}
        </p>
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
  );
}

export default Single_product_card;
