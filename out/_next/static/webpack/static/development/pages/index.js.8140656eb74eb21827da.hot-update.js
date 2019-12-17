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
        src: __webpack_require__(/*! ../../images/20-Kiss.jpg */ "./images/20-Kiss.jpg"),
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

/***/ "./images/20-Kiss.jpg":
/*!****************************!*\
  !*** ./images/20-Kiss.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./images/partner2.png":
false

})
//# sourceMappingURL=index.js.8140656eb74eb21827da.hot-update.js.map