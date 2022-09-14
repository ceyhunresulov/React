import * as actionTypes from "./actionTypes";

export function changeCategory(category) {
  return { type: actionTypes.CHANGE_CATEGORY, payload: category };
}

function getCategoriesSuccess(categories) {
  return { type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories };
}
export function getCategories() {
  return function (dispatch) {
    let url = " http://localhost:3000/categories";
    fetch(url)
      .then((res) => res.json())
      .then((res) => dispatch(getCategoriesSuccess(res)));
  };
}
