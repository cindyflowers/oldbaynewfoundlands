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
      }, __jsx("div", {
        className: "option-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "Login"))), __jsx("li", {
        className: "nav-item p-relative",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Home ", __jsx("i", {
        className: "fas fa-chevron-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }))), __jsx("ul", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Home One"))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/shop-style-two",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "Home Two"))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/shop-style-three",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "Home Three"))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/shop-style-four",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "Home Four"))))), __jsx("li", {
        className: "nav-item megamenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "Shop ", __jsx("i", {
        className: "fas fa-chevron-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }))), __jsx("ul", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Collection Layouts"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/collections-style-one",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "Collections Type 1"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/collections-style-two",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "Collections Type 2"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, "Left Sidebar"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar-with-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, "Left Sidebar With HTML Block"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "Right Sidebar"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar-with-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "Right Sidebar With HTML Block"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, "Without Sidebar"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, "With Sidebar Full Width"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, "Without Sidebar Full Width"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, "Other Pages"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/cart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, "Cart"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/checkout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, "Checkout"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/compare",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, "Compare"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, "Login"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, "Signup"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/customer-service",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, "Customer Service"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, "Top Brands"), __jsx("ul", {
        className: "megamenu-submenu top-brands",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      })))))))))), __jsx("li", {
        className: "nav-item megamenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, "Women's ", __jsx("i", {
        className: "fas fa-chevron-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }))), __jsx("ul", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }, __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }, "Clothing"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }, "Coats"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }, "Jackets"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }, "Blazers"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar-with-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }, "Dresses"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      }, "Trousers"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar-with-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        },
        __self: this
      }, "Jeans"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }, "Sweatshirts"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        },
        __self: this
      }, "T-Shirts"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      }, "Shoes"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        },
        __self: this
      }, "Trainers"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }, "Boots"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar-with-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        },
        __self: this
      }, "Heels"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        },
        __self: this
      }, "Flats"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar-with-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: this
      }, "Heeled Sandals"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        },
        __self: this
      }, "Platforms"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        },
        __self: this
      }, "Accessories"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        },
        __self: this
      }, "Bags"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        },
        __self: this
      }, "Glasses"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar-with-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        },
        __self: this
      }, "Jewellery"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        },
        __self: this
      }, "iPhone Cases"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        },
        __self: this
      }, "Gadgets"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431
        },
        __self: this
      }, "Hats & Beanie"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        },
        __self: this
      }, "Purses"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 443
        },
        __self: this
      }, __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445
        },
        __self: this
      }, __jsx("div", {
        className: "aside-trending-products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/category-products-img2.jpg */ "./images/category-products-img2.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        },
        __self: this
      }), __jsx("div", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450
        },
        __self: this
      }, "Top Trending")), __jsx("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 453
        },
        __self: this
      })), __jsx("div", {
        className: "aside-trending-products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/category-products-img3.jpg */ "./images/category-products-img3.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457
        },
        __self: this
      }), __jsx("div", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 460
        },
        __self: this
      }, "Popular Products")), __jsx("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463
        },
        __self: this
      })))))))))), __jsx("li", {
        className: "nav-item megamenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 474
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 475
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476
        },
        __self: this
      }, "Men's ", __jsx("i", {
        className: "fas fa-chevron-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476
        },
        __self: this
      }))), __jsx("ul", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 478
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 479
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481
        },
        __self: this
      }, __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 482
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483
        },
        __self: this
      }, "Clothing"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 486
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488
        },
        __self: this
      }, "Coats"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 492
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar-with-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 493
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 494
        },
        __self: this
      }, "Jackets"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 498
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 499
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 500
        },
        __self: this
      }, "Jeans"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 504
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar-with-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 505
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 506
        },
        __self: this
      }, "T-Shirts"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 511
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512
        },
        __self: this
      }, "Sweatshirts"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518
        },
        __self: this
      }, "Knitwear"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 522
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 523
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 524
        },
        __self: this
      }, "Shirts"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531
        },
        __self: this
      }, "Shoes"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 533
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 534
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536
        },
        __self: this
      }, "Trainers"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 540
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 541
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542
        },
        __self: this
      }, "Boots"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 547
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548
        },
        __self: this
      }, "Heels"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 552
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar-with-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 553
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 554
        },
        __self: this
      }, "Flats"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 558
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560
        },
        __self: this
      }, "Heeled Sandals"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 564
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar-with-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 565
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 566
        },
        __self: this
      }, "Sandals"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 570
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar-with-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 571
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 572
        },
        __self: this
      }, "Platforms"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 576
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 577
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 578
        },
        __self: this
      }, "Heeled Sandals"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 584
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 585
        },
        __self: this
      }, "Accessories"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 587
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 588
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 589
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 590
        },
        __self: this
      }, "Bags"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 594
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 595
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 596
        },
        __self: this
      }, "Backpacks"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 600
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 601
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 602
        },
        __self: this
      }, "Glasses"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 606
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 607
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 608
        },
        __self: this
      }, "Earrings"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 612
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 613
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 614
        },
        __self: this
      }, "iPhone Cases"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 618
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 619
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 620
        },
        __self: this
      }, "Mobile Accessories"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 624
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 625
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 626
        },
        __self: this
      }, "Socks"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 632
        },
        __self: this
      }, __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 633
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 634
        },
        __self: this
      }, __jsx("div", {
        className: "aside-trending-products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 635
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/category-products-img2.jpg */ "./images/category-products-img2.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 636
        },
        __self: this
      }), __jsx("div", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 638
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 639
        },
        __self: this
      }, "Top Trending")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 641
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 642
        },
        __self: this
      }))), __jsx("div", {
        className: "aside-trending-products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 646
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/category-products-img3.jpg */ "./images/category-products-img3.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 647
        },
        __self: this
      }), __jsx("div", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 649
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 650
        },
        __self: this
      }, "Popular Products")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 653
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 654
        },
        __self: this
      }))))))))))), __jsx("li", {
        className: "nav-item megamenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 666
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 667
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 668
        },
        __self: this
      }, "Today's Deals ", __jsx("i", {
        className: "fas fa-chevron-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 668
        },
        __self: this
      }))), __jsx("ul", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 670
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 671
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 672
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 673
        },
        __self: this
      }, __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 674
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 675
        },
        __self: this
      }, "Clothing"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 677
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 678
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 679
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 680
        },
        __self: this
      }, "Coats"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 684
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar-with-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 685
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 686
        },
        __self: this
      }, "Jackets"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 690
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 691
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 692
        },
        __self: this
      }, "Jeans"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 696
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar-with-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 697
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 698
        },
        __self: this
      }, "T-Shirts"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 702
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 703
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 704
        },
        __self: this
      }, "Sweatshirts"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 708
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 709
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 710
        },
        __self: this
      }, "Knitwear"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 714
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 715
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 716
        },
        __self: this
      }, "Shirts"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 722
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 723
        },
        __self: this
      }, "Shoes"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 725
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 726
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 727
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 728
        },
        __self: this
      }, "Trainers"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 732
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 733
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 734
        },
        __self: this
      }, "Boots"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 738
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 739
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 740
        },
        __self: this
      }, "Heels"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 744
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar-with-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 745
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 746
        },
        __self: this
      }, "Flats"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 750
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 751
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 752
        },
        __self: this
      }, "Heeled Sandals"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 756
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar-with-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 757
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 758
        },
        __self: this
      }, "Sandals"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 762
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar-with-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 763
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 764
        },
        __self: this
      }, "Platforms"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 768
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 769
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 770
        },
        __self: this
      }, "Heeled Sandals"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 776
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 777
        },
        __self: this
      }, "Accessories"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 779
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 780
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 781
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 782
        },
        __self: this
      }, "Bags"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 786
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 787
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 788
        },
        __self: this
      }, "Backpacks"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 792
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 793
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 794
        },
        __self: this
      }, "Glasses"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 798
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 799
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 800
        },
        __self: this
      }, "Earrings"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 804
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 805
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 806
        },
        __self: this
      }, "iPhone Cases"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 810
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 811
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 812
        },
        __self: this
      }, "Mobile Accessories"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 816
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 817
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 818
        },
        __self: this
      }, "Socks"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 824
        },
        __self: this
      }, __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 825
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 826
        },
        __self: this
      }, __jsx("div", {
        className: "aside-trending-products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 827
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/category-products-img2.jpg */ "./images/category-products-img2.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 828
        },
        __self: this
      }), __jsx("div", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 830
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 831
        },
        __self: this
      }, "Top Trending")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 833
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 834
        },
        __self: this
      }))), __jsx("div", {
        className: "aside-trending-products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 838
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/category-products-img3.jpg */ "./images/category-products-img3.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 839
        },
        __self: this
      }), __jsx("div", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 841
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 842
        },
        __self: this
      }, "Popular Products")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 845
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 846
        },
        __self: this
      }))))))))))), __jsx("li", {
        className: "nav-item p-relative",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 858
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 859
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 860
        },
        __self: this
      }, "Pages ", __jsx("i", {
        className: "fas fa-chevron-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 861
        },
        __self: this
      }))), __jsx("ul", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 865
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 866
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 867
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 868
        },
        __self: this
      }, "About Us"))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 872
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/sizing-guide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 873
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 874
        },
        __self: this
      }, "Sizing Guide"))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 878
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/gallery",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 879
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 880
        },
        __self: this
      }, "Gallery"))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 884
        },
        __self: this
      }, __jsx("a", {
        href: "#",
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 884
        },
        __self: this
      }, "Account"), __jsx("ul", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 885
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 886
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 887
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 888
        },
        __self: this
      }, "Login"))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 892
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 893
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 894
        },
        __self: this
      }, "Signup"))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 898
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/cart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 899
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 900
        },
        __self: this
      }, "Cart"))))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 906
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/cart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 907
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 908
        },
        __self: this
      }, "Cart"))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 912
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/checkout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 913
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 914
        },
        __self: this
      }, "Checkout"))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 918
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/compare",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 919
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 920
        },
        __self: this
      }, "Compare"))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 924
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/customer-service",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 925
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 926
        },
        __self: this
      }, "Customer Service"))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 930
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 931
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 932
        },
        __self: this
      }, "Login"))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 936
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 937
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 938
        },
        __self: this
      }, "Signup"))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 942
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/faq",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 943
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 944
        },
        __self: this
      }, "FAQs"))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 948
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 949
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 950
        },
        __self: this
      }, "Error 404"))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 954
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/contact-us",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 955
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 956
        },
        __self: this
      }, "Contact Us"))))), __jsx("li", {
        className: "nav-item p-relative",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 962
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 963
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 964
        },
        __self: this
      }, "Blog ", __jsx("i", {
        className: "fas fa-chevron-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 964
        },
        __self: this
      }))), __jsx("ul", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 966
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 968
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/blog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 969
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 970
        },
        __self: this
      }, "Blog"))), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 974
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/blog-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 975
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 976
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

/***/ })

})
//# sourceMappingURL=index.js.87f372aea3649c44ee77.hot-update.js.map