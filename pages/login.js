import React, { useState } from "react";
import styles from "../styles/login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { hideSignUpPage, setOnline } from "../configureStore/storeSlice";

function UserSignUp() {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.root);

  const [loginPage, setLoginPage] = useState(true);
  const showLoginpage = () => {
    setLoginPage((state) => !state);
  };
  const showRegisterPage = () => {
    setLoginPage((state) => !state);
  };
  const login = () => {
    return (
      <div className={styles.register_container}>
        {/* <div className={styles.closeBTN} onClick={hideLoginpage}> */}
        <div
          className={styles.closeBTN}
          onClick={() => dispatch(hideSignUpPage())}
        >
          X
        </div>
        <h1>Login_page</h1>
        <div className={styles.register_page}>
          {error && <p className={styles.error}>{error}</p>}
          <form action="#">
            <div className={styles.input_box}>
              <label htmlFor="email">email</label>
              <input
                type="email"
                id="email"
                placeholder="enter your email"
                name="email"
              />
            </div>

            <div className={styles.input_box}>
              <label htmlFor="password">password</label>
              <input
                type="password"
                id="password"
                placeholder="enter your password"
                name="password"
              />
            </div>
            <div
              onClick={(e) => {
                e.preventDefault();
                dispatch(setOnline());
                dispatch(hideSignUpPage());
              }}
              value="login in"
              id="sign_btn"
              className={styles.sign_btn}
            >
              Log in
            </div>
          </form>
        </div>
        <h3>
          {"didn't have account ?"}
          <span className={styles.sign_btn} onClick={showRegisterPage}>
            create here
          </span>
        </h3>
      </div>
    );
  };

  const register = () => {
    return (
      <div className={styles.register_container}>
        {/* <div className={styles.closeBTN} onClick={hideLoginpage}> */}
        <div
          className={styles.closeBTN}
          onClick={() => dispatch(hideSignUpPage())}
        >
          X
        </div>
        <h1>Register_page</h1>
        <div className={styles.register_page}>
          <form action="#">
            <div className={styles.input_box}>
              <label htmlFor="name">name</label>
              <input
                type="text"
                id="name"
                placeholder="enter your name"
                name="name"
              />
            </div>

            <div className={styles.input_box}>
              <label htmlFor="email">email</label>
              <input
                type="email"
                id="email"
                placeholder="enter your email"
                name="email"
              />
            </div>

            <div className={styles.input_box}>
              <label htmlFor="password">password</label>
              <input
                type="password"
                id="password"
                placeholder="enter your password"
                name="password"
              />
            </div>
            <input
              type="submit"
              value="sign in"
              id="sign_btn"
              className={styles.sign_btn}
            />
          </form>
        </div>
        <h3>
          already have account?
          <span className={styles.sign_btn} onClick={showLoginpage}>
            login
          </span>
        </h3>
      </div>
    );
  };

  return (
    <div className={styles.signUp_page}>{loginPage ? login() : register()}</div>
  );
}

export default UserSignUp;
