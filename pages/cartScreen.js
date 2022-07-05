import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setTotal,
  removeProductfromCart,
  removeAllProductsFromCart,
  buyProduct,
  buyAllProducts,
} from "../configureStore/storeSlice";
import styles from "../styles/cart.module.css";

function CartScreen() {
  const dispatch = useDispatch();
  const { total, cartItems, error } = useSelector((store) => store.root);

  const removeProduct = (index) => {
    const newProductData = cartItems.filter((product, i) => {
      return i !== index;
    });
    dispatch(removeProductfromCart(newProductData));
  };

  const removeAllProducts = () => {
    dispatch(removeAllProductsFromCart());
  };

  useEffect(() => {
    dispatch(setTotal());
  });
  return (
    <div className={styles.container}>
      <div className={styles.cart_caontainer}>
        <ol className={styles.order_list}>
          <li>
            <span className={styles.productName}>product</span>
            <span className={styles.productName}>price</span>{" "}
            <span className={styles.productName}>qu</span>
            <span>{""}</span>
          </li>
          {cartItems.length > 0 ? (
            <div>
              {cartItems.map((product, index) => {
                return (
                  <li key={index}>
                    <span className={styles.productName}>
                      {product.name}
                      <Image
                        src={`/${product.image}`}
                        width="100px"
                        height="70px"
                      />
                    </span>
                    <span>{product.price}</span>
                    <span>{index + 1}</span>
                    <span
                      className={styles.closeBTN}
                      onClick={() => removeProduct(index)}
                    >
                      x
                    </span>
                  </li>
                );
              })}
            </div>
          ) : (
            <div className={styles.No_cartItems}>
              there is no items in your cart.
              {error && <p className={styles.error}>{error}</p>}
              <Link href={"/"}>
                <a className={styles.gotoProducts_link}>go to products</a>
              </Link>
            </div>
          )}

          {/* <li>
            <span>mobile</span> <span>7000</span> <span>2</span>
            <span className={styles.closeBTN}>x</span>
          </li>
          <li>
            <span>headPhone</span> <span>2000</span> <span>2</span>
            <span className={styles.closeBTN}>x</span>
          </li>
          <li>
            <span>monitor</span> <span>5000</span> <span>3</span>
            <span className={styles.closeBTN}>x</span>
          </li> */}
        </ol>
        <hr />
        <div className={styles.bottom_totals}>
          <span>Total</span>
          <span>{total}</span>
          <span
            className={styles.buyNowBtn}
            onClick={() => dispatch(buyAllProducts())}
          >
            Buy now
          </span>
        </div>
      </div>
      <div className={styles.removeAll} onClick={removeAllProducts}>
        remove all
      </div>
    </div>
  );
}

export default CartScreen;
