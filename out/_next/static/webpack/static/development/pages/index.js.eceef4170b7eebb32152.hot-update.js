webpackHotUpdate("static\\development\\pages\\index.js",{

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
        src: __webpack_require__(/*! ../../images/logo.jpg */ "./images/logo.jpg"),
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
        href: "/#",
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
      }, "Home"))), __jsx("li", {
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
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/partner1.png */ "./images/partner1.png"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      })))), __jsx("li", {
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
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/partner2.png */ "./images/partner2.png"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      })))), __jsx("li", {
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
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/partner3.png */ "./images/partner3.png"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      })))), __jsx("li", {
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
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/partner4.png */ "./images/partner4.png"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      })))), __jsx("li", {
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
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/partner5.png */ "./images/partner5.png"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      })))), __jsx("li", {
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
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/partner6.png */ "./images/partner6.png"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }))))))))))), __jsx("li", {
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
      }, "Blog Details"))))))))))));
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

/***/ }),

/***/ "./images/logo.jpg":
/*!*************************!*\
  !*** ./images/logo.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./images/logo.png":
false

})
//# sourceMappingURL=index.js.eceef4170b7eebb32152.hot-update.js.map