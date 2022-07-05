import React from "react";
import styles from "../styles/nav.module.css";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { hideConform } from "../configureStore/storeSlice";
// import { useRouter } from "next/router";
function Congrats() {
  const dispatch = useDispatch();
  const router = useRouter();
  const goToHome = () => {
    router.push("/");
    dispatch(hideConform());
  };
  return (
    <div className={styles.Congrats}>
      <h1>Congrats</h1>
      <h4>your product will going to diliver you very soon!</h4>
      <div onClick={goToHome}>get more Products</div>
    </div>
  );
}

export default Congrats;
