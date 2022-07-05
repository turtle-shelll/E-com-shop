import React from "react";
import Single_product_card from "../components/single_product_card";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";

function VeiwProduct() {
  const { cartItems, products } = useSelector((state) => state.root);
  const router = Router.useRouter();
  const id = router.asPath.split("/?id=")[1];
  // console.log("router data**", id);
  const this_product = products.filter(
    (product) => product.id === parseInt(id, 10)
  )[0];
  return (
    <div>
      <Single_product_card this_product={this_product} />
    </div>
  );
}

export default VeiwProduct;
