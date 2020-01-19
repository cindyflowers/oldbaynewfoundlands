webpackHotUpdate("static\\development\\pages\\specialties.js",{

/***/ "./store/actions/action-types/cart-actions.js":
/*!****************************************************!*\
  !*** ./store/actions/action-types/cart-actions.js ***!
  \****************************************************/
/*! exports provided: ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, ADD_QUANTITY_WITH_NUMBER, ORDER_FORM, CHECKOUT_CHARGE, RESET_CART, ADD_TO_COMPARE, REMOVE_ITEM_FROM_COMPARE, SET_CURRENT_DOG, SET_CURRENT_LITTER, SET_CURRENT_MODAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART", function() { return ADD_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ITEM", function() { return REMOVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUB_QUANTITY", function() { return SUB_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUANTITY", function() { return ADD_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SHIPPING", function() { return ADD_SHIPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUANTITY_WITH_NUMBER", function() { return ADD_QUANTITY_WITH_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_FORM", function() { return ORDER_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKOUT_CHARGE", function() { return CHECKOUT_CHARGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_CART", function() { return RESET_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_COMPARE", function() { return ADD_TO_COMPARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ITEM_FROM_COMPARE", function() { return REMOVE_ITEM_FROM_COMPARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_DOG", function() { return SET_CURRENT_DOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_LITTER", function() { return SET_CURRENT_LITTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_MODAL", function() { return SET_CURRENT_MODAL; });
//Types should be in const to avoid typos and duplication since it's a string and could be easily miss spelled
var ADD_TO_CART = 'ADD_TO_CART';
var REMOVE_ITEM = 'REMOVE_ITEM';
var SUB_QUANTITY = 'SUB_QUANTITY';
var ADD_QUANTITY = 'ADD_QUANTITY';
var ADD_SHIPPING = 'ADD_SHIPPING';
var ADD_QUANTITY_WITH_NUMBER = 'ADD_QUANTITY_WITH_NUMBER';
var ORDER_FORM = 'ORDER_FORM';
var CHECKOUT_CHARGE = 'CHECKOUT_CHARGE';
var RESET_CART = 'RESET_CART';
var ADD_TO_COMPARE = 'ADD_TO_COMPARE';
var REMOVE_ITEM_FROM_COMPARE = 'REMOVE_ITEM_FROM_COMPARE';
var SET_CURRENT_DOG = 'SET_CURRENT_DOG';
var SET_CURRENT_LITTER = 'SET_CURRENT_LITTER';
var SET_CURRENT_MODAL = 'SET_CURRENT_MODAL';

/***/ }),

/***/ "./store/actions/cartActions.js":
/*!**************************************!*\
  !*** ./store/actions/cartActions.js ***!
  \**************************************/
/*! exports provided: setCurrentDog, setCurrentLitter, setCurrentModal, addToCart, removeItem, subtractQuantity, addQuantity, addQuantityWithNumber, resetCart, addToCompare, removeItemFromCompare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentDog", function() { return setCurrentDog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentLitter", function() { return setCurrentLitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentModal", function() { return setCurrentModal; });
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

var setCurrentModal = function setCurrentModal(id) {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["SET_CURRENT_MODAL"],
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
//# sourceMappingURL=specialties.js.a45d7de9072c89094c61.hot-update.js.map