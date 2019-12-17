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
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/index.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_10__);







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
      var boys = this.props.dogs.filter(dog);
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("div", {
        className: "navbar-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx(react_tooltip__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), __jsx("div", {
        id: "navbar",
        className: "comero-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx("nav", {
        className: "navbar navbar-expand-md navbar-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("a", {
        className: "navbar-brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/logo.jpg */ "./images/logo.jpg"),
        alt: "Old Bay Newfoundlands",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
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
          lineNumber: 59
        },
        __self: this
      }, __jsx("span", {
        className: "navbar-toggler-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      })), __jsx("div", {
        className: classOne,
        id: "navbarSupportedContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx("ul", {
        className: "navbar-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item p-relative",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Home"))), __jsx("li", {
        className: "nav-item megamenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Awards ", __jsx("i", {
        className: "fas fa-chevron-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }))), __jsx("ul", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Over the Years"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/collections-style-one",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "2019"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "Award Type"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/cart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "Specialties"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/cart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "Top Twenty"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/checkout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "Register of Merit"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/compare",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "Versatile Newfoundland"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/compare",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "Champions"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "Working"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, "NCA Top Twenty"), __jsx("ul", {
        className: "megamenu-submenu top-brands",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, __jsx("a", {
        "data-tip": "Flash (2018)",
        "data-place": "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/20-Flash.jpg */ "./images/20-Flash.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      })))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, __jsx("a", {
        "data-tip": "Kiss (2018)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/20-Kiss.jpg */ "./images/20-Kiss.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      })))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, __jsx("a", {
        "data-tip": "Rolex (2017)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/20-Rolex.jpg */ "./images/20-Rolex.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      })))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, __jsx("a", {
        "data-tip": "Spice (2010, 2012)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/20-Spice.jpg */ "./images/20-Spice.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
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
        "data-tip": "Rocky (2006)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/20-Rocky.jpg */ "./images/20-Rocky.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      })))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, __jsx("a", {
        "data-tip": "Opie (2004, 2005)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/20-Opie.jpg */ "./images/20-Opie.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }))))))))))), __jsx("li", {
        className: "nav-item megamenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, "The Boys ", __jsx("i", {
        className: "fas fa-chevron-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }))), __jsx("ul", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, "Co-owned by Old Bay"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar-fullwidth",
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
      }, "Flash"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, "Owned By Old Bay"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, dogs.map(function (data, idx) {
        return __jsx("li", {
          key: idx,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 236
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/category-without-sidebar-fullwidth",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 237
          },
          __self: this
        }, __jsx("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 238
          },
          __self: this
        }, data.call)));
      }))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, __jsx("div", {
        className: "aside-trending-products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/rolex.jpg */ "./images/rolex.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }), __jsx("div", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, "Rolex")), __jsx("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      })), __jsx("div", {
        className: "aside-trending-products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/maestro.jpg */ "./images/maestro.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }), __jsx("div", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, "Maestro")), __jsx("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      })))))))))), __jsx("li", {
        className: "nav-item megamenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, "The Girls ", __jsx("i", {
        className: "fas fa-chevron-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }))), __jsx("ul", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, "Co-owned by old bay"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, "Snowball"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }, "Owned by old bay"), __jsx("ul", {
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
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }, "Kiss"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }, __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, __jsx("div", {
        className: "aside-trending-products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/kiss.jpg */ "./images/kiss.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }), __jsx("div", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }, "Kiss")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
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
      }))), __jsx("div", {
        className: "aside-trending-products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/snowball.jpg */ "./images/snowball.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }), __jsx("div", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        },
        __self: this
      }, "Snowball")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
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
      }))))))))))), __jsx("li", {
        className: "nav-item megamenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }, "Puppies ", __jsx("i", {
        className: "fas fa-chevron-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }))), __jsx("ul", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      }, __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        },
        __self: this
      }, "Litters"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-left-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        },
        __self: this
      }, "Rh\xF4ne and Kiss"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      }, "Future"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-without-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      }, "Powder Ridge Newfs - Late 2019"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        },
        __self: this
      }, __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        },
        __self: this
      }, __jsx("div", {
        className: "aside-trending-products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/Sing.jpg */ "./images/Sing.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        },
        __self: this
      }), __jsx("div", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        },
        __self: this
      }, "Rh\xF4ne and Kiss")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        },
        __self: this
      }))), __jsx("div", {
        className: "aside-trending-products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/CrosbyAndKissPuppies.jpg */ "./images/CrosbyAndKissPuppies.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        __self: this
      }), __jsx("div", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        },
        __self: this
      }, "Crosby and Kiss")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
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
      }))))))))))), __jsx("li", {
        className: "nav-item p-relative",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        },
        __self: this
      }, "Our Past ", __jsx("i", {
        className: "fas fa-chevron-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417
        },
        __self: this
      }))), __jsx("ul", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        },
        __self: this
      }, "Carson"))))))))))));
    }
  }]);

  return MegaMenu;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    products: state.products,
    dogs: state.dogs
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps)(MegaMenu));

/***/ })

})
//# sourceMappingURL=index.js.6d7d2eac8dde228d03bc.hot-update.js.map