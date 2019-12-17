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
        src: __webpack_require__(/*! ../../images/20-Rolex.jpg */ "./images/20-Rolex.jpg"),
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

/***/ "./images/20-Rolex.jpg":
/*!*****************************!*\
  !*** ./images/20-Rolex.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./images/20-Spice.jpg":
false

})
//# sourceMappingURL=index.js.828a7527b9ef26a40c92.hot-update.js.map