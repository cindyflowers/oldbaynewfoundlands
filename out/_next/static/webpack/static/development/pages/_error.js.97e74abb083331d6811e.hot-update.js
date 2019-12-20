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
/* harmony import */ var _store_actions_cartActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/actions/cartActions */ "./store/actions/cartActions.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/index.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_13__);







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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSetCurrentDog", function (id) {
      _this.props.setCurrentDog(id); //Router.replace('/#' );
      //Router.push('/about' );
      // window.scrollTo(0, 0);
      //var boys = document.getElementById("boys"); //divsToHide is an array
      //divsToHide[i].style.visibility = "hidden"; 
      //boys.classList.add = "comero-nav-hide";
      // divsToHide[i].style.opacity = 1;

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
      var elementId = document.getElementById("Navbar");
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
      var _this2 = this;

      // const { collapsed } = this.state;
      // const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
      // const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
      var boys = this.props.dogs.filter(function (dog) {
        return dog.sex == "male" && dog.rip == "";
      });
      var girls = this.props.dogs.filter(function (dog) {
        return dog.sex == "female" && dog.rip == "";
      });
      var past = this.props.dogs.filter(function (dog) {
        return dog.rip != "";
      });
      var litters1to10 = this.props.litters.filter(function (litter) {
        return litter.id < 11;
      });
      var litters11to20 = this.props.litters.filter(function (litter) {
        return litter.id > 10 && litter.id < 21;
      });
      var litters21andOver = this.props.litters.filter(function (litter) {
        return litter.id > 20;
      }); // <ul className="dropdown-menu" >
      // <li className="nav-item">
      //     <div className="container">
      //         <div className="row">
      //             <div className="col">
      //                 <h6 className="submenu-title">Co-owned by Old Bay</h6>
      //                 <ul className="megamenu-submenu">
      //                     <li>
      //                         <Link href="/category-without-sidebar-fullwidth">
      //                             <a>Flash</a>
      //                         </Link>
      //                     </li>
      //                 </ul>
      //             </div>

      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx("div", {
        className: "navbar-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, __jsx(react_tooltip__WEBPACK_IMPORTED_MODULE_13___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }), __jsx("div", {
        id: "navbar",
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, __jsx("nav", {
        className: "navbar navbar-expand-md navbar-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, __jsx("a", {
        className: "navbar-brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/logo.jpg */ "./images/logo.jpg"),
        alt: "Old Bay Newfoundlands",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }))), __jsx("button", {
        "class": "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, __jsx("span", {
        "class": "navbar-toggler-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      })), __jsx("div", {
        className: "collapse navbar-collapse",
        id: "navbarSupportedContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, __jsx("ul", {
        className: "navbar-nav mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item p-relative",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, "Home"))), __jsx("li", {
        className: "nav-item megamenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, "Awards ", __jsx("i", {
        className: "fas fa-chevron-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }))), __jsx("ul", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, __jsx("div", {
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
      }, "Over the Years"), __jsx("ul", {
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
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/collections-style-one",
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
      }, "2019"))))), __jsx("div", {
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
      }, "Award Type"), __jsx("ul", {
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
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/cart",
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
      }, "Specialties"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/cart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, "Top Twenty"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/checkout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, "Register of Merit"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/compare",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, "Versatile Newfoundland"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/compare",
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
      }, "Champions"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, "Working"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, "NCA Top Twenty"), __jsx("ul", {
        className: "megamenu-submenu top-brands",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }, __jsx("a", {
        "data-tip": "Flash (2018)",
        "data-place": "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/20-Flash.jpg */ "./images/20-Flash.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      })))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }, __jsx("a", {
        "data-tip": "Kiss (2018)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/20-Kiss.jpg */ "./images/20-Kiss.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      })))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }, __jsx("a", {
        "data-tip": "Rolex (2017)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/20-Rolex.jpg */ "./images/20-Rolex.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      })))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }, __jsx("a", {
        "data-tip": "Spice (2010, 2012)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/20-Spice.jpg */ "./images/20-Spice.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      })))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, __jsx("a", {
        "data-tip": "Rocky (2006)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/20-Rocky.jpg */ "./images/20-Rocky.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      })))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, __jsx("a", {
        "data-tip": "Opie (2004, 2005)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/20-Opie.jpg */ "./images/20-Opie.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }))))))))))), __jsx("li", {
        className: "nav-item megamenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: this
      }, "The Boys ", __jsx("i", {
        className: "fas fa-chevron-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        },
        __self: this
      }))), __jsx("ul", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }, "Co-owned by Old Bay"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/category-without-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        __self: this
      }, "Flash"))))), __jsx("div", {
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
      }, "Owned By Old Bay"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        },
        __self: this
      }, boys.map(function (data, idx) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
          href: "/about",
          key: data.id,
          replace: true,
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
        }, __jsx("a", {
          onClick: function onClick(e) {
            _this2.handleSetCurrentDog(data.id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 360
          },
          __self: this
        }, data.call)));
      }))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        },
        __self: this
      }, __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        },
        __self: this
      }, __jsx("div", {
        className: "aside-trending-products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/rolex.jpg */ "./images/rolex.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        },
        __self: this
      }), __jsx("div", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        },
        __self: this
      }, "Rolex")), __jsx("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        },
        __self: this
      })), __jsx("div", {
        className: "aside-trending-products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/maestro.jpg */ "./images/maestro.jpg"),
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
      }, "Maestro")), __jsx("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        },
        __self: this
      })))))))))), __jsx("li", {
        className: "nav-item megamenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        },
        __self: this
      }, "The Girls ", __jsx("i", {
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
          lineNumber: 405
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        },
        __self: this
      }, __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        },
        __self: this
      }, "Co-owned by old bay"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/category-left-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        },
        __self: this
      }, "Snowball"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422
        },
        __self: this
      }, "Owned by old bay"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/category-without-sidebar-fullwidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        },
        __self: this
      }, "Kiss"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        },
        __self: this
      }, __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        },
        __self: this
      }, __jsx("div", {
        className: "aside-trending-products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/kiss.jpg */ "./images/kiss.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441
        },
        __self: this
      }), __jsx("div", {
        className: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 443
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444
        },
        __self: this
      }, "Kiss")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        },
        __self: this
      }))), __jsx("div", {
        className: "aside-trending-products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/snowball.jpg */ "./images/snowball.jpg"),
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
      }, "Snowball")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459
        },
        __self: this
      }))))))))))), __jsx("li", {
        className: "nav-item megamenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473
        },
        __self: this
      }, "Puppies ", __jsx("i", {
        className: "fas fa-chevron-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473
        },
        __self: this
      }))), __jsx("ul", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 475
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 478
        },
        __self: this
      }, __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 479
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480
        },
        __self: this
      }, "Past Litters "), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 482
        },
        __self: this
      }, litters1to10.map(function (data, idx) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
          href: "/litter",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 484
          },
          __self: this
        }, __jsx("li", {
          key: idx,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 485
          },
          __self: this
        }, __jsx("a", {
          onClick: function onClick(e) {
            _this2.handleSetCurrentLitter(data.id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 486
          },
          __self: this
        }, data.parents)));
      }))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 496
        },
        __self: this
      }, "Past Litters (continued)"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 498
        },
        __self: this
      }, litters11to20.map(function (data, idx) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
          href: "/litter",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 500
          },
          __self: this
        }, __jsx("li", {
          key: idx,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 501
          },
          __self: this
        }, __jsx("a", {
          onClick: function onClick(e) {
            _this2.handleSetCurrentLitter(data.id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 502
          },
          __self: this
        }, data.parents)));
      }))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 511
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512
        },
        __self: this
      }, "Past Litters (continued)"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 514
        },
        __self: this
      }, litters21andOver.map(function (data, idx) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
          href: "/litter",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 516
          },
          __self: this
        }, __jsx("li", {
          key: idx,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 517
          },
          __self: this
        }, __jsx("a", {
          onClick: function onClick(e) {
            _this2.handleSetCurrentLitter(data.id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 518
          },
          __self: this
        }, data.parents)));
      })))))))), __jsx("li", {
        className: "nav-item p-relative",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 532
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 533
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 534
        },
        __self: this
      }, "Our Past ", __jsx("i", {
        className: "fas fa-chevron-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535
        },
        __self: this
      }))), __jsx("ul", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 539
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 540
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 541
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542
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
    dogs: state.dogs,
    litters: state.litters
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setCurrentDog: function setCurrentDog(id) {
      dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_9__["setCurrentDog"])(id));
    } // setCurrentLitter: (id) => { dispatch(setCurrentLitter(id)) }

  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(MegaMenu));

/***/ })

})
//# sourceMappingURL=_error.js.97e74abb083331d6811e.hot-update.js.map