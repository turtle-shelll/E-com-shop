import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "../configureStore/storeSlice";
import Link from "next/link";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const router = Router.useRouter();
  const increaseCartItems = (this_product) => {
    dispatch(setCartItems(this_product));
  };
  const showSingleProduct = (this_product) => {
    const data = router.push(`/veiwProduct`, {
      query: { id: this_product.id },
    });
  };
  return (
    <div className={styles.card}>
      <h2>{product.name}</h2>
      <div className={styles.imgBox}>
        <Image
          // src="/laptop.jpg"
          src={`/${product.image}`}
          alt="Home"
          width={500}
          height={300}
          className={styles.img}
        />
      </div>
      <div className={styles.ratings}>
        {product.ratings.map((element, i) => {
          return (
            <Image
              src="/star.png"
              alt="Star"
              key={i}
              width={"30px"}
              height={"30px"}
            />
          );
        })}
      </div>
      <div className={styles.productDiscription}>
        <h2>product discription</h2>
        <p>{product.description}</p>
      </div>
      <div className={styles.productPrice}>{product.price}</div>
      <div className={styles.Bottoms_btn}>
        <div className={styles.btn} onClick={() => increaseCartItems(product)}>
          add to cart
        </div>
        <div className={styles.btn}>
          <a onClick={() => showSingleProduct(product)}>veiw details</a>
          {/* <Link>veiw details</Link> */}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
