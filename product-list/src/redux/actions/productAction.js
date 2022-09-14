import * as actionTypes from "./actionTypes";

function getProductsSuccess(products) {
  return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products };
}
export function getCategories() {
  return function (dispatch) {
    let url = " http://localhost:3000/products";
    fetch(url)
      .then((res) => res.json())
      .then((res) => dispatch(getProductsSuccess(res)));
  };
}
