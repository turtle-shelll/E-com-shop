import React, { useState } from "react";
import styles from "../styles/nav.module.css";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { showSignUpPage } from "../configureStore/storeSlice";
import UserSignUp from "../pages/login";
import Congrats from "./congrats";
// import { wrapper } from "../configureStore/store";

function NavHeader() {
  const dispatch = useDispatch();
  const { cartItems, setSignUpPage, conform } = useSelector(
    (state) => state.root
  );
  // console.log("cartItems", cartItems);
  // const
  // const [loginPage, setLoginPage] = useState(false);
  // const showLoginpage = () => {
  //   setLoginPage((state) => !state);
  // };
  // const hideLoginpage = () => {
  //   setLoginPage((state) => !state);
  // };
  return (
    <div className={styles.navBar}>
      {/* {loginPage ? <UserSignUp hideLoginpage={hideLoginpage} /> : ""} */}
      {setSignUpPage ? <UserSignUp /> : ""}
      <div className={styles.navBar_logo}>
        <Link href={"/"}>
          <a>E-com-Shop</a>
        </Link>
      </div>
      <div className={styles.navSearchBar}>
        <label htmlFor="search_bar">
          <Image
            src="/search.png"
            alt="search-icon"
            width={"30px"}
            height={"30px"}
          />
        </label>
        <input
          type="text"
          name="search_bar"
          placeholder="search "
          id="search_bar"
        />
      </div>
      <div className={styles.navBar_sideBtn}>
        {/* <div className={styles.login_btn} onClick={showLoginpage}> */}
        <div
          className={styles.login_btn}
          onClick={() => dispatch(showSignUpPage())}
        >
          log in
        </div>
        <div className={styles.cartItems_box}>
          <span className={styles.cartItems}>{cartItems.length}</span>
          <Link href={"/cartScreen"}>
            <a>
              <Image
                src={"/cart-icon.png"}
                alt="cart-icon"
                width={"30px"}
                height={"30px"}
                className={styles.cartImage}
              />
            </a>
          </Link>
        </div>
      </div>
      {conform ? <Congrats /> : ""}
      {/* <Congrats /> */}
    </div>
  );
}

export default NavHeader;
