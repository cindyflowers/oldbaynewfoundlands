webpackHotUpdate("static\\development\\pages\\_error.js",{

/***/ "./components/Layout/MegaMenu.js":
/*!***************************************!*\
  !*** ./components/Layout/MegaMenu.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "C:\\Projects\\Portfolio\\oldbaynewfoundlands\\components\\Layout\\MegaMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;


 //import Cart from '../Modal/Cart';

var MegaMenu =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MegaMenu, _Component);

  function MegaMenu() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MegaMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MegaMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      display: false,
      searchForm: false,
      collapsed: true
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSearchForm", function () {
      _this.setState(function (prevState) {
        return {
          searchForm: !prevState.searchForm
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleNavbar", function () {
      _this.setState({
        collapsed: !_this.state.collapsed
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MegaMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var elementId = document.getElementById("navbar");
      document.addEventListener("scroll", function () {
        if (window.scrollY > 170) {
          elementId.classList.add("is-sticky");
        } else {
          elementId.classList.remove("is-sticky");
        }
      });
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var collapsed = this.state.collapsed;
      var classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
      var classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
      var products = this.props.products;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("div", {
        className: "navbar-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx("div", {
        id: "navbar",
        className: "comero-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx("nav", {
        className: "navbar navbar-expand-md navbar-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx("a", {
        className: "navbar-brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/logo.png */ "./images/logo.png"),
        alt: "Old Bay Newfoundlands",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }))), __jsx("button", {
        onClick: this.toggleNavbar,
        className: classTwo,
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, __jsx("span", {
        className: "navbar-toggler-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })), __jsx("div", {
        className: classOne,
        id: "navbarSupportedContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, __jsx("ul", {
        className: "navbar-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item p-relative",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "Home ", __jsx("i", {
        className: "fas fa-chevron-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }))), __jsx("ul", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Home One"))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/shop-style-two",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "Home Two"))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/shop-style-three",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Home Three"))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/shop-style-four",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "Home Four"))))), __jsx("li", {
        className: "nav-item megamenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "Shop ", __jsx("i", {
        className: "fas fa-chevron-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }))), __jsx("ul", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "Collection Layouts"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/collections-style-one",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Collections Type 1"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/collections-style-two",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, "Collections Type 2"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "Left Sidebar"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar-with-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "Left Sidebar With HTML Block"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "Right Sidebar"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar-with-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "Right Sidebar With HTML Block"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, "Without Sidebar"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, "With Sidebar Full Width"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, "Without Sidebar Full Width"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, "Other Pages"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/cart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, "Cart"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/checkout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "Checkout"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/compare",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, "Compare"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, "Login"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, "Signup"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/customer-service",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, "Customer Service"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, "Top Brands"), __jsx("ul", {
        className: "megamenu-submenu top-brands",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      })))))))))), __jsx("li", {
        className: "nav-item megamenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, "Women's ", __jsx("i", {
        className: "fas fa-chevron-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }))), __jsx("ul", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }, __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }, "Clothing"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }, "Coats"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, "Jackets"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }, "Blazers"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar-with-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, "Dresses"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, "Trousers"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar-with-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        },
        __self: this
      }, "Jeans"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        __self: this
      }, "Sweatshirts"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        __self: this
      }, "T-Shirts"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }, "Shoes"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      }, "Trainers"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        __self: this
      }, "Boots"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar-with-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }, "Heels"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        },
        __self: this
      }, "Flats"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar-with-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        },
        __self: this
      }, "Heeled Sandals"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        },
        __self: this
      }, "Platforms"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        },
        __self: this
      }, "Accessories"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        },
        __self: this
      }, "Bags"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        },
        __self: this
      }, "Glasses"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar-with-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        },
        __self: this
      }, "Jewellery"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        },
        __self: this
      }, "iPhone Cases"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420
        },
        __self: this
      }, "Gadgets"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        },
        __self: this
      }, "Hats & Beanie"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432
        },
        __self: this
      }, "Purses"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438
        },
        __self: this
      }, __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440
        },
        __self: this
      }, __jsx("div", {
        className: "aside-trending-products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/category-products-img2.jpg */ "./images/category-products-img2.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 442
        },
        __self: this
      }), __jsx("div", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445
        },
        __self: this
      }, "Top Trending")), __jsx("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448
        },
        __self: this
      })), __jsx("div", {
        className: "aside-trending-products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/category-products-img3.jpg */ "./images/category-products-img3.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        },
        __self: this
      }), __jsx("div", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455
        },
        __self: this
      }, "Popular Products")), __jsx("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458
        },
        __self: this
      })))))))))), __jsx("li", {
        className: "nav-item megamenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471
        },
        __self: this
      }, "Men's ", __jsx("i", {
        className: "fas fa-chevron-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471
        },
        __self: this
      }))), __jsx("ul", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 474
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 475
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476
        },
        __self: this
      }, __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 478
        },
        __self: this
      }, "Clothing"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 482
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483
        },
        __self: this
      }, "Coats"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar-with-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489
        },
        __self: this
      }, "Jackets"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 493
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 494
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495
        },
        __self: this
      }, "Jeans"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 499
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar-with-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 500
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 501
        },
        __self: this
      }, "T-Shirts"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 505
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 506
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 507
        },
        __self: this
      }, "Sweatshirts"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 511
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 513
        },
        __self: this
      }, "Knitwear"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519
        },
        __self: this
      }, "Shirts"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 525
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 526
        },
        __self: this
      }, "Shoes"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 528
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 529
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531
        },
        __self: this
      }, "Trainers"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 537
        },
        __self: this
      }, "Boots"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 541
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 543
        },
        __self: this
      }, "Heels"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 547
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar-with-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549
        },
        __self: this
      }, "Flats"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 553
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 554
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 555
        },
        __self: this
      }, "Heeled Sandals"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar-with-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561
        },
        __self: this
      }, "Sandals"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 565
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar-with-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 566
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 567
        },
        __self: this
      }, "Platforms"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 571
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 572
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 573
        },
        __self: this
      }, "Heeled Sandals"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 579
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 580
        },
        __self: this
      }, "Accessories"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 583
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 584
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 585
        },
        __self: this
      }, "Bags"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 589
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 590
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 591
        },
        __self: this
      }, "Backpacks"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 595
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 596
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 597
        },
        __self: this
      }, "Glasses"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 601
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 602
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 603
        },
        __self: this
      }, "Earrings"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 607
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 608
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 609
        },
        __self: this
      }, "iPhone Cases"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 613
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 614
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 615
        },
        __self: this
      }, "Mobile Accessories"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 619
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 620
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 621
        },
        __self: this
      }, "Socks"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 627
        },
        __self: this
      }, __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 628
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 629
        },
        __self: this
      }, __jsx("div", {
        className: "aside-trending-products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 630
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/category-products-img2.jpg */ "./images/category-products-img2.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 631
        },
        __self: this
      }), __jsx("div", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 633
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 634
        },
        __self: this
      }, "Top Trending")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 636
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 637
        },
        __self: this
      }))), __jsx("div", {
        className: "aside-trending-products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 641
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/category-products-img3.jpg */ "./images/category-products-img3.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 642
        },
        __self: this
      }), __jsx("div", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 644
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 645
        },
        __self: this
      }, "Popular Products")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 648
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 649
        },
        __self: this
      }))))))))))), __jsx("li", {
        className: "nav-item megamenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 661
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 662
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 663
        },
        __self: this
      }, "Today's Deals ", __jsx("i", {
        className: "fas fa-chevron-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 663
        },
        __self: this
      }))), __jsx("ul", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 665
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 666
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 667
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 668
        },
        __self: this
      }, __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 669
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 670
        },
        __self: this
      }, "Clothing"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 672
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 673
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 674
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 675
        },
        __self: this
      }, "Coats"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 679
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar-with-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 680
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 681
        },
        __self: this
      }, "Jackets"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 685
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 686
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 687
        },
        __self: this
      }, "Jeans"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 691
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar-with-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 692
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 693
        },
        __self: this
      }, "T-Shirts"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 697
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 698
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 699
        },
        __self: this
      }, "Sweatshirts"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 703
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 704
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 705
        },
        __self: this
      }, "Knitwear"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 709
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 710
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 711
        },
        __self: this
      }, "Shirts"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 717
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 718
        },
        __self: this
      }, "Shoes"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 720
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 721
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 722
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 723
        },
        __self: this
      }, "Trainers"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 727
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 728
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 729
        },
        __self: this
      }, "Boots"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 733
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 734
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 735
        },
        __self: this
      }, "Heels"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 739
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar-with-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 740
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 741
        },
        __self: this
      }, "Flats"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 745
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 746
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 747
        },
        __self: this
      }, "Heeled Sandals"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 751
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar-with-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 752
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 753
        },
        __self: this
      }, "Sandals"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 757
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar-with-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 758
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 759
        },
        __self: this
      }, "Platforms"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 763
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 764
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 765
        },
        __self: this
      }, "Heeled Sandals"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 771
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 772
        },
        __self: this
      }, "Accessories"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 774
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 775
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 776
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 777
        },
        __self: this
      }, "Bags"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 781
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 782
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 783
        },
        __self: this
      }, "Backpacks"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 787
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 788
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 789
        },
        __self: this
      }, "Glasses"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 793
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 794
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 795
        },
        __self: this
      }, "Earrings"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 799
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 800
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 801
        },
        __self: this
      }, "iPhone Cases"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 805
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 806
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 807
        },
        __self: this
      }, "Mobile Accessories"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 811
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 812
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 813
        },
        __self: this
      }, "Socks"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 819
        },
        __self: this
      }, __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 820
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 821
        },
        __self: this
      }, __jsx("div", {
        className: "aside-trending-products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 822
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/category-products-img2.jpg */ "./images/category-products-img2.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 823
        },
        __self: this
      }), __jsx("div", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 825
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 826
        },
        __self: this
      }, "Top Trending")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 828
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 829
        },
        __self: this
      }))), __jsx("div", {
        className: "aside-trending-products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 833
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/category-products-img3.jpg */ "./images/category-products-img3.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 834
        },
        __self: this
      }), __jsx("div", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 836
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 837
        },
        __self: this
      }, "Popular Products")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 840
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 841
        },
        __self: this
      }))))))))))), __jsx("li", {
        className: "nav-item p-relative",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 853
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 854
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 855
        },
        __self: this
      }, "Pages ", __jsx("i", {
        className: "fas fa-chevron-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 856
        },
        __self: this
      }))), __jsx("ul", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 860
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 861
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 862
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 863
        },
        __self: this
      }, "About Us"))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 867
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/sizing-guide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 868
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 869
        },
        __self: this
      }, "Sizing Guide"))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 873
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/gallery",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 874
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 875
        },
        __self: this
      }, "Gallery"))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 879
        },
        __self: this
      }, __jsx("a", {
        href: "#",
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 879
        },
        __self: this
      }, "Account"), __jsx("ul", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 880
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 881
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 882
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 883
        },
        __self: this
      }, "Login"))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 887
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 888
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 889
        },
        __self: this
      }, "Signup"))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 893
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/cart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 894
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 895
        },
        __self: this
      }, "Cart"))))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 901
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/cart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 902
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 903
        },
        __self: this
      }, "Cart"))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 907
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/checkout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 908
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 909
        },
        __self: this
      }, "Checkout"))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 913
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/compare",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 914
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 915
        },
        __self: this
      }, "Compare"))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 919
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/customer-service",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 920
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 921
        },
        __self: this
      }, "Customer Service"))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 925
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 926
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 927
        },
        __self: this
      }, "Login"))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 931
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 932
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 933
        },
        __self: this
      }, "Signup"))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 937
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/faq",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 938
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 939
        },
        __self: this
      }, "FAQs"))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 943
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 944
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 945
        },
        __self: this
      }, "Error 404"))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 949
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/contact-us",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 950
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 951
        },
        __self: this
      }, "Contact Us"))))), __jsx("li", {
        className: "nav-item p-relative",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 957
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 958
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 959
        },
        __self: this
      }, "Blog ", __jsx("i", {
        className: "fas fa-chevron-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 959
        },
        __self: this
      }))), __jsx("ul", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 961
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 963
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/blog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 964
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 965
        },
        __self: this
      }, "Blog"))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 969
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/blog-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 970
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 971
        },
        __self: this
      }, "Blog Details")))))), __jsx("div", {
        className: "others-option",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 979
        },
        __self: this
      }, __jsx("div", {
        className: "option-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 981
        },
        __self: this
      }, __jsx("i", {
        onClick: this.handleSearchForm,
        className: "search-btn fas fa-search",
        style: {
          display: this.state.searchForm ? 'none' : 'block'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 983
        },
        __self: this
      }), __jsx("i", {
        onClick: this.handleSearchForm,
        className: "close-btn fas fa-times ".concat(this.state.searchForm ? 'active' : ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 991
        },
        __self: this
      }), __jsx("div", {
        className: "search-overlay search-popup",
        style: {
          display: this.state.searchForm ? 'block' : 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 996
        },
        __self: this
      }, __jsx("div", {
        className: "search-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1002
        },
        __self: this
      }, __jsx("form", {
        className: "search-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1003
        },
        __self: this
      }, __jsx("input", {
        className: "search-input",
        name: "search",
        placeholder: "Search",
        type: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1004
        },
        __self: this
      }), __jsx("button", {
        className: "search-button",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1006
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1006
        },
        __self: this
      })))))), __jsx("div", {
        className: "option-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1012
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1013
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1014
        },
        __self: this
      }, "Login"))), __jsx("div", {
        className: "option-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1018
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1019
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1020
        },
        __self: this
      }))))))))));
    }
  }]);

  return MegaMenu;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    products: state.addedItems
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps)(MegaMenu));

/***/ })

})
//# sourceMappingURL=_error.js.42e0197cf85e46611550.hot-update.js.map