import "../styles/globals.css";
import { wrapper } from "../configureStore/store";
// import { useSelector } from "react-redux";
// import UserSignUp from "./login";
// import {setSignUpPage} from "../configureStore/storeSlice";
import NavHeader from "../components/navHeader";

function MyApp({ Component, pageProps }) {
  // const { setSignUpPage } = useSelector((state) => state.root);

  // const initailProp = wrapper.getInitialAppProps((store) => () => {
  //   console.log("store", store.getState());
  // });
  // // console.log("setSignUpPage", setSignUpPage);
  // console.log("initailProp", initailProp);
  return (
    <>
      <NavHeader />
      {/* {setSignUpPage ? <UserSignUp /> : ""} */}
      <Component {...pageProps} />;
    </>
  );
}

export default wrapper.withRedux(MyApp);

// import React from "react";
// // import { wrapper } from "../components/store";

// class MyApp extends React.Component {
//   render() {
//     const { Component, pageProps } = this.props;
//     return <Component {...pageProps} />;
//   }
// }

// export default wrapper.withRedux(MyApp);
