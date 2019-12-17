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
          lineNumber: 46
        },
        __self: this
      }, __jsx("div", {
        className: "navbar-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("div", {
        id: "navbar",
        className: "comero-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx("nav", {
        className: "navbar navbar-expand-md navbar-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx("a", {
        className: "navbar-brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/logo.jpg */ "./images/logo.jpg"),
        alt: "Old Bay Newfoundlands",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
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
          lineNumber: 57
        },
        __self: this
      }, __jsx("span", {
        className: "navbar-toggler-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      })), __jsx("div", {
        className: classOne,
        id: "navbarSupportedContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx("ul", {
        className: "navbar-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item p-relative",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Home"))), __jsx("li", {
        className: "nav-item megamenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Awards ", __jsx("i", {
        className: "fas fa-chevron-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }))), __jsx("ul", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Over the Years"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/collections-style-one",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "2019"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Award Type"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/cart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "Specialties"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/cart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "Top Twenty"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/checkout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "Register of Merit"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/compare",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "Versatile Newfoundland"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/compare",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "Champions"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "Working"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "NCA Top Twenty"), __jsx("ul", {
        className: "megamenu-submenu top-brands",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/20-Flash.jpg */ "./images/20-Flash.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      })))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/partner2.png */ "./images/partner2.png"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      })))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
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
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/partner3.png */ "./images/partner3.png"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      })))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/20-Rocky.jpg */ "./images/20-Rocky.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      })))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/partner5.png */ "./images/partner5.png"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }))))))))))), __jsx("li", {
        className: "nav-item megamenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, "The Boys ", __jsx("i", {
        className: "fas fa-chevron-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }))), __jsx("ul", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, "Co-owned by Old Bay"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, "Flash"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, "Owned By Old Bay"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar-fullwidth",
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
      }, "Rolex"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, __jsx("ul", {
        className: "megamenu-submenu",
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
      }, __jsx("div", {
        className: "aside-trending-products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/rolex.jpg */ "./images/rolex.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }), __jsx("div", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, "Rolex")), __jsx("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      })), __jsx("div", {
        className: "aside-trending-products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/maestro.jpg */ "./images/maestro.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }), __jsx("div", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, "Maestro")), __jsx("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      })))))))))), __jsx("li", {
        className: "nav-item megamenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, "The Girls ", __jsx("i", {
        className: "fas fa-chevron-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }))), __jsx("ul", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, "Co-owned by old bay"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }, "Snowball"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, "Owned by old bay"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }, "Kiss"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }, __jsx("div", {
        className: "aside-trending-products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/kiss.jpg */ "./images/kiss.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }), __jsx("div", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, "Kiss")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }))), __jsx("div", {
        className: "aside-trending-products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/snowball.jpg */ "./images/snowball.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }), __jsx("div", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }, "Snowball")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }))))))))))), __jsx("li", {
        className: "nav-item megamenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        },
        __self: this
      }, "Puppies ", __jsx("i", {
        className: "fas fa-chevron-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        },
        __self: this
      }))), __jsx("ul", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }, __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        __self: this
      }, "Litters"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar",
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
      }, "Rh\xF4ne and Kiss"))))), __jsx("div", {
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
      }, "Future"), __jsx("ul", {
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
      }, "Powder Ridge Newfs - Late 2019"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }, __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      }, __jsx("div", {
        className: "aside-trending-products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/category-products-img2.jpg */ "./images/category-products-img2.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        },
        __self: this
      }), __jsx("div", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      }, "Rh\xF4ne and Kiss")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        },
        __self: this
      }))), __jsx("div", {
        className: "aside-trending-products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/category-products-img3.jpg */ "./images/category-products-img3.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381
        },
        __self: this
      }), __jsx("div", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        },
        __self: this
      }, "Crosby and Kiss")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        },
        __self: this
      }))))))))))), __jsx("li", {
        className: "nav-item p-relative",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        },
        __self: this
      }, "Our Past ", __jsx("i", {
        className: "fas fa-chevron-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        },
        __self: this
      }))), __jsx("ul", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        },
        __self: this
      }, "Carson"))))))))))));
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

/***/ "./images/20-Flash.jpg":
/*!*****************************!*\
  !*** ./images/20-Flash.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./images/partner1.png":
false

})
//# sourceMappingURL=index.js.5d54070b99b14b83dbee.hot-update.js.map