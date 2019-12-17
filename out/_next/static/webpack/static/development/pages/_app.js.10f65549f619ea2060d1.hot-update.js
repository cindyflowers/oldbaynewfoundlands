webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./store/reducers/cartReducer.js":
/*!***************************************!*\
  !*** ./store/reducers/cartReducer.js ***!
  \***************************************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../actions/action-types/cart-actions */ "./store/actions/action-types/cart-actions.js");









function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }





var initState = {
  products: [{
    id: 1,
    title: "Belted chino trousers polo",
    price: 190,
    image: __webpack_require__(/*! ../../images/img1.jpg */ "./images/img1.jpg"),
    imageHover: __webpack_require__(/*! ../../images/img-hover1.jpg */ "./images/img-hover1.jpg"),
    quickView: __webpack_require__(/*! ../../images/quick-view-img.jpg */ "./images/quick-view-img.jpg")
  }, {
    id: 2,
    title: "Belted chino trousers polo",
    price: 120,
    image: __webpack_require__(/*! ../../images/img2.jpg */ "./images/img2.jpg"),
    imageHover: __webpack_require__(/*! ../../images/img-hover2.jpg */ "./images/img-hover2.jpg"),
    quickView: __webpack_require__(/*! ../../images/quick-view-img.jpg */ "./images/quick-view-img.jpg")
  }],
  addedItems: [],
  addedItemsToCompare: [],
  total: 0,
  shipping: 0,
  currentDog: 1,
  dogs: [{
    id: 1,
    call: "Sirius",
    sex: "male",
    name: "GCH Old Bay's Let's Get Sirius CGC, TDI",
    sire: "",
    dam: "",
    dob: "10/26/2010",
    living: true,
    rip: "",
    owner: "Cindy and John Flowers",
    aka: "Seriously Cute, Serial",
    lives: "Cindy and John Flowers",
    health: "",
    image: __webpack_require__(/*! ../../images/info/Sirius.jpg */ "./images/info/Sirius.jpg"),
    Titles: ["AKC Champion", "AKC Grand Champion", "Canine Good Citizen", "Therapy Dog International"]
  }, {
    id: 2,
    call: "Bennie",
    sex: "male",
    name: "GCH Old Bay's Let's Get Sirius CGC, TDI",
    sire: "GCH Bear N Mind's Stand Up And Cheer, RN, DD",
    dam: "GCH Old Bay's Lucy Fur",
    dob: "12/9/2012",
    neutered: true,
    rip: "",
    owner: "Cindy and John Flowers",
    aka: "	Bennie Boo Boo Bear",
    lives: "Kathy Hamilton",
    health: "http://www.offa.org/display.html?appnum=1565055#animal",
    image: __webpack_require__(/*! ../../images/info/Bennie.jpg */ "./images/info/Bennie.jpg"),
    Titles: []
  }]
};

var cartReducer = function cartReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === CURRENT_DOG) {
    return _objectSpread({}, state, {
      currentDog: action.id
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_11__["ADD_TO_CART"]) {
    var addedItem = state.products.find(function (item) {
      return item.id === action.id;
    }); //check if the action id exists in the addedItems

    var existed_item = state.addedItems.find(function (item) {
      return action.id === item.id;
    });

    if (existed_item) {
      addedItem.quantity += 1;
      return _objectSpread({}, state, {
        total: state.total + addedItem.price
      });
    } else {
      addedItem.quantity = 1; //calculating the total

      var newTotal = state.total + addedItem.price;
      return _objectSpread({}, state, {
        addedItems: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__["default"])(state.addedItems), [addedItem]),
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_11__["ADD_TO_COMPARE"]) {
    var addedItemToCompare = state.products.find(function (item) {
      return item.id === action.id;
    });
    addedItemToCompare.quantity = 1;
    return _objectSpread({}, state, {
      addedItemsToCompare: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__["default"])(state.addedItemsToCompare), [addedItemToCompare])
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_11__["ADD_QUANTITY_WITH_NUMBER"]) {
    var _addedItem = state.products.find(function (item) {
      return item.id === action.id;
    }); //check if the action id exists in the addedItems


    var _existed_item = state.addedItems.find(function (item) {
      return action.id === item.id;
    });

    if (_existed_item) {
      _addedItem.quantity += action.qty;
      return _objectSpread({}, state, {
        total: state.total + _addedItem.price * action.qty
      });
    } else {
      _addedItem.quantity = action.qty; //calculating the total

      var _newTotal = state.total + _addedItem.price * action.qty;

      return _objectSpread({}, state, {
        addedItems: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__["default"])(state.addedItems), [_addedItem]),
        total: _newTotal
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_11__["REMOVE_ITEM"]) {
    var itemToRemove = state.addedItems.find(function (item) {
      return action.id === item.id;
    });
    var new_items = state.addedItems.filter(function (item) {
      return action.id !== item.id;
    }); //calculating the total

    var _newTotal2 = state.total - itemToRemove.price * itemToRemove.quantity;

    return _objectSpread({}, state, {
      addedItems: new_items,
      total: _newTotal2
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_11__["REMOVE_ITEM_FROM_COMPARE"]) {
    var _new_items = state.addedItemsToCompare.filter(function (item) {
      return action.id !== item.id;
    });

    return _objectSpread({}, state, {
      addedItemsToCompare: _new_items
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_11__["ADD_QUANTITY"]) {
    var _addedItem2 = state.products.find(function (item) {
      return item.id === action.id;
    });

    _addedItem2.quantity += 1;

    var _newTotal3 = state.total + _addedItem2.price;

    return _objectSpread({}, state, {
      total: _newTotal3
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_11__["SUB_QUANTITY"]) {
    var _addedItem3 = state.products.find(function (item) {
      return item.id === action.id;
    }); //if the qt == 0 then it should be removed


    if (_addedItem3.quantity === 1) {
      var _new_items2 = state.addedItems.filter(function (item) {
        return item.id !== action.id;
      });

      var _newTotal4 = state.total - _addedItem3.price;

      return _objectSpread({}, state, {
        addedItems: _new_items2,
        total: _newTotal4
      });
    } else {
      _addedItem3.quantity -= 1;

      var _newTotal5 = state.total - _addedItem3.price;

      return _objectSpread({}, state, {
        total: _newTotal5
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_11__["ADD_SHIPPING"]) {
    return _objectSpread({}, state, {
      shipping: state.shipping += 6
    });
  }

  if (action.type === 'SUB_SHIPPING') {
    return _objectSpread({}, state, {
      shipping: state.shipping -= 6
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_11__["RESET_CART"]) {
    return _objectSpread({}, state, {
      addedItems: [],
      total: 0,
      shipping: 0
    });
  } else {
    return state;
  }
};

var initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  return Object(redux__WEBPACK_IMPORTED_MODULE_8__["createStore"])(cartReducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_9__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_8__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_10__["default"])));
};

/***/ })

})
//# sourceMappingURL=_app.js.10f65549f619ea2060d1.hot-update.js.map