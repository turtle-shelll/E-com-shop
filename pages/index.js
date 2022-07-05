import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavHeader from "../components/navHeader";
import { useSelector } from "react-redux";
import ProductCard from "../components/productCard";
// import UserSignUp from "./login";
import { wrapper } from "../configureStore/store";

export default function Home() {
  const { products } = useSelector((state) => state.root);
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
      {/* this is the one product container*/}
    </div>
  );
}
