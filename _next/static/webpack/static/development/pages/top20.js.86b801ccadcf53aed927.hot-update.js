webpackHotUpdate("static\\development\\pages\\top20.js",{

/***/ "./store/actions/cartActions.js":
/*!**************************************!*\
  !*** ./store/actions/cartActions.js ***!
  \**************************************/
/*! exports provided: setCurrentDog, setCurrentLitter, addToCart, removeItem, subtractQuantity, addQuantity, addQuantityWithNumber, resetCart, addToCompare, removeItemFromCompare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentDog", function() { return setCurrentDog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentLitter", function() { return setCurrentLitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItem", function() { return removeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtractQuantity", function() { return subtractQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addQuantity", function() { return addQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addQuantityWithNumber", function() { return addQuantityWithNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCart", function() { return resetCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCompare", function() { return addToCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItemFromCompare", function() { return removeItemFromCompare; });
/* harmony import */ var _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types/cart-actions */ "./store/actions/action-types/cart-actions.js");
 //add cart action

var setCurrentDog = function setCurrentDog(id) {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["SET_CURRENT_DOG"],
    id: id
  };
}; //add cart action

var setCurrentLitter = function setCurrentLitter(id) {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["SET_CURRENT_LITTER"],
    id: id
  };
}; //add cart action

var addToCart = function addToCart(id) {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_CART"],
    id: id
  };
}; //remove item action

var removeItem = function removeItem(id) {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_ITEM"],
    id: id
  };
}; //subtract qt action

var subtractQuantity = function subtractQuantity(id) {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["SUB_QUANTITY"],
    id: id
  };
}; //add qt action

var addQuantity = function addQuantity(id) {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_QUANTITY"],
    id: id
  };
}; //add qt action with quantity number

var addQuantityWithNumber = function addQuantityWithNumber(id, qty) {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_QUANTITY_WITH_NUMBER"],
    id: id,
    qty: qty
  };
}; // Reset cart after form submit

var resetCart = function resetCart() {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["RESET_CART"]
  };
}; //add compare action

var addToCompare = function addToCompare(id) {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_COMPARE"],
    id: id
  };
}; //remove item from compare action

var removeItemFromCompare = function removeItemFromCompare(id) {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_ITEM_FROM_COMPARE"],
    id: id
  };
};

/***/ })

})
//# sourceMappingURL=top20.js.86b801ccadcf53aed927.hot-update.js.map