webpackHotUpdate("static\\development\\pages\\titled.js",{

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/index.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-moment */ "./node_modules/react-moment/dist/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_12__);







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
      collapsed: true,
      isAwardsOpen: false,
      isBoysOpen: false,
      isGirlsOpen: false,
      isPuppiesOpen: false,
      isPastOpen: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSetCurrentDog", function (id) {
      _this.props.setCurrentDog(id);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSetCurrentLitter", function (id) {
      _this.props.setCurrentLitter(id);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSearchForm", function () {
      _this.setState(function (prevState) {
        return {
          searchForm: !prevState.searchForm
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleAwardsOpen", function () {
      _this.toggleCloseAllDropdowns();

      _this.setState({
        isAwardsOpen: !_this.state.isAwardsOpen
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleBoysOpen", function () {
      _this.toggleCloseAllDropdowns();

      _this.setState({
        isBoysOpen: !_this.state.isBoysOpen
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleGirlsOpen", function () {
      _this.toggleCloseAllDropdowns();

      _this.setState({
        isGirlsOpen: !_this.state.isGirlsOpen
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "togglePuppiesOpen", function () {
      _this.toggleCloseAllDropdowns();

      _this.setState({
        isPuppiesOpen: !_this.state.isPuppiesOpen
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "togglePastOpen", function () {
      _this.toggleCloseAllDropdowns();

      _this.setState({
        isPastOpen: !_this.state.isPastOpen
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
    key: "toggleCloseAllDropdowns",
    value: function toggleCloseAllDropdowns() {
      this.setState({
        isAwardsOpen: false
      });
      this.setState({
        isBoysOpen: false
      });
      this.setState({
        isGirlsOpen: false
      });
      this.setState({
        isPuppiesOpen: false
      });
      this.setState({
        isPastOpen: false
      });
    }
  }, {
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
      var _this2 = this;

      var collapsed = this.state.collapsed;
      var isAwardsOpen = this.state.isAwardsOpen;
      var isBoysOpen = this.state.isBoysOpen;
      var isGirlsOpen = this.state.isGirlsOpen;
      var isPuppiesOpen = this.state.isPuppiesOpen;
      var isPastOpen = this.state.isPastOpen;
      var classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
      var classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
      var ddAwardClass = "dropdown-menu".concat(isAwardsOpen ? " show" : "");
      var ddBoysClass = "dropdown-menu".concat(isBoysOpen ? " show" : "");
      var ddGirlsClass = "dropdown-menu".concat(isGirlsOpen ? " show" : "");
      var ddPuppiesClass = "dropdown-menu".concat(isPuppiesOpen ? " show" : "");
      var ddPastClass = "dropdown-menu".concat(isPastOpen ? " show" : "");
      var boys = this.props.dogs.filter(function (dog) {
        return dog.sex == "male" && dog.ours == true && dog.rip == "";
      }); //let coboys = this.props.dogs.filter(dog => dog.sex == "male" && dog.coown == true && dog.rip == ""  );

      var studs = this.props.dogs.filter(function (dog) {
        return dog.sex == "male" && dog.stud == true && dog.rip == "";
      });
      var girls = this.props.dogs.filter(function (dog) {
        return dog.sex == "female" && dog.ours == true && dog.rip == "";
      });
      var dams = this.props.dogs.filter(function (dog) {
        return dog.sex == "female" && dog.dams == true && dog.rip == "";
      }); //let cogirls = this.props.dogs.filter(dog => dog.sex == "female" && dog.coown == true  && dog.rip == "" );

      var past1to10 = this.props.dogs.filter(function (dog) {
        return dog.rip != "" && dog.id <= 20;
      });
      var past10andOver = this.props.dogs.filter(function (dog) {
        return dog.rip != "" && dog.id > 20;
      });
      var litters1to10 = this.props.litters.slice(0, 9);
      var litters11to20 = this.props.litters.slice(10, 19);
      var litters21andOver = this.props.litters.slice(20);
      var toptwenty = this.props.dogs.filter(function (dog) {
        return dog.toptwenty != "";
      });
      var rom = this.props.dogs.filter(function (dog) {
        return dog.rom == true;
      });
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, __jsx("div", {
        className: "navbar-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, __jsx(react_tooltip__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }), __jsx("div", {
        id: "navbar",
        className: "comero-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, __jsx("nav", {
        className: "navbar navbar-expand-md navbar-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, __jsx("a", {
        "data-tip": "Go to Home Page",
        "data-place": "left",
        className: "navbar-brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/logo.jpg */ "./images/logo.jpg"),
        alt: "Old Bay Newfoundlands",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
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
          lineNumber: 111
        },
        __self: this
      }, __jsx("span", {
        className: "navbar-toggler-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      })), __jsx("div", {
        className: classOne,
        id: "navbarSupportedContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, __jsx("ul", {
        className: "navbar-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item p-relative",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "Home"))), __jsx("div", {
        onClick: function onClick(e) {
          _this2.toggleAwardsOpen();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item megamenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        type: "button",
        id: "ddAwards",
        "data-toggle": "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "Awards ", __jsx("i", {
        className: "fas fa-chevron-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }))), __jsx("ul", {
        className: ddAwardClass,
        role: "menu",
        "aria-labelledby": "ddAwards",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        role: "presentation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "Award Type"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/specialties",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, __jsx("a", {
        "data-tip": "Specialty Awards",
        "data-place": "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, "Specialties"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/top20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, __jsx("a", {
        "data-tip": "Top Twenty Dogs",
        "data-place": "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, "Top Twenty"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/rom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, __jsx("a", {
        "data-tip": "Register of Merit Dogs",
        "data-place": "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, "Register of Merit"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/vn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, __jsx("a", {
        "data-tip": "Versatile Newfoundland Dogs",
        "data-place": "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, "Versatile Newfoundland"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/vn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, __jsx("a", {
        "data-tip": "Versatile Newfoundland Dogs",
        "data-place": "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, "Versatile Newfoundland"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/champions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, __jsx("a", {
        "data-tip": "Champion Dogs",
        "data-place": "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, "Champions"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/working",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, __jsx("a", {
        "data-tip": "Working Dogs",
        "data-place": "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, "Working"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/titled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, __jsx("a", {
        "data-tip": "Titled Dogs",
        "data-place": "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, "Titled"))))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "Register of Merit"), __jsx("ul", {
        className: "megamenu-submenu top-brands",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, rom.map(function (data, idx) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: "/aboutDog",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199
          },
          __self: this
        }, __jsx("li", {
          key: data.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          },
          __self: this
        }, __jsx("a", {
          "data-tip": data.call,
          "data-place": "left",
          onClick: function onClick(e) {
            _this2.handleSetCurrentDog(data.id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201
          },
          __self: this
        }, __jsx("img", {
          src: data.image,
          alt: "image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          },
          __self: this
        }))));
      }))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, "NCA Top Twenty"), __jsx("ul", {
        className: "megamenu-submenu top-brands",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, toptwenty.map(function (data, idx) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: "/aboutDog",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          },
          __self: this
        }, __jsx("li", {
          key: data.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216
          },
          __self: this
        }, __jsx("a", {
          "data-tip": data.call + ' (' + data.toptwenty + ')',
          "data-place": "left",
          onClick: function onClick(e) {
            _this2.handleSetCurrentDog(data.id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          },
          __self: this
        }, __jsx("img", {
          src: data.image,
          alt: "image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          },
          __self: this
        }))));
      }))))))))), __jsx("div", {
        onClick: function onClick(e) {
          _this2.toggleBoysOpen();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item megamenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        type: "button",
        id: "ddBoys",
        "data-toggle": "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, "The Boys ", __jsx("i", {
        className: "fas fa-chevron-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }))), __jsx("ul", {
        className: ddBoysClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, "Old Bay Boys"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, boys.map(function (data, idx) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: "/aboutDog",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 264
          },
          __self: this
        }, __jsx("li", {
          key: idx,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 265
          },
          __self: this
        }, __jsx("a", {
          "data-tip": data.call,
          "data-place": "left",
          onClick: function onClick(e) {
            _this2.handleSetCurrentDog(data.id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 266
          },
          __self: this
        }, data.call)));
      }))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }, "The Studs"), __jsx("ul", {
        className: "megamenu-submenu top-brands",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, studs.map(function (data, idx) {
        return __jsx("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 281
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: "/aboutDog",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 282
          },
          __self: this
        }, __jsx("a", {
          "data-tip": data.call,
          "data-place": "left",
          onClick: function onClick(e) {
            _this2.handleSetCurrentDog(data.id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 283
          },
          __self: this
        }, __jsx("img", {
          src: data.image,
          alt: "image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 284
          },
          __self: this
        }))));
      }))))))))), __jsx("div", {
        onClick: function onClick(e) {
          _this2.toggleGirlsOpen();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item megamenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        type: "button",
        id: "ddAwards",
        "data-toggle": "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }, "The Girls ", __jsx("i", {
        className: "fas fa-chevron-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }))), __jsx("ul", {
        className: ddGirlsClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      }, "Old Bay Girls"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }, girls.map(function (data, idx) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: "/aboutDog",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 329
          },
          __self: this
        }, __jsx("li", {
          key: data.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 330
          },
          __self: this
        }, __jsx("a", {
          "data-tip": data.call,
          "data-place": "left",
          onClick: function onClick(e) {
            _this2.handleSetCurrentDog(data.id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 331
          },
          __self: this
        }, data.call)));
      }))), __jsx("div", {
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
      }, "The Dams"), __jsx("ul", {
        className: "megamenu-submenu top-brands",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }, dams.map(function (data, idx) {
        return __jsx("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 346
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: "/aboutDog",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 347
          },
          __self: this
        }, __jsx("a", {
          "data-tip": data.call,
          "data-place": "left",
          onClick: function onClick(e) {
            _this2.handleSetCurrentDog(data.id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 348
          },
          __self: this
        }, __jsx("img", {
          src: data.image,
          alt: "image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 349
          },
          __self: this
        }))));
      }))))))))), __jsx("div", {
        onClick: function onClick(e) {
          _this2.togglePuppiesOpen();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item megamenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        type: "button",
        id: "ddPuppies",
        "data-toggle": "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }, "Puppies ", __jsx("i", {
        className: "fas fa-chevron-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }))), __jsx("ul", {
        className: ddPuppiesClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        },
        __self: this
      }, __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      }, "Past Litters "), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        },
        __self: this
      }, litters1to10.map(function (data, idx) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: "/litter",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 378
          },
          __self: this
        }, __jsx("li", {
          key: idx,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 379
          },
          __self: this
        }, __jsx("a", {
          "data-tip": data.parents,
          "data-place": "left",
          onClick: function onClick(e) {
            _this2.handleSetCurrentLitter(data.id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 380
          },
          __self: this
        }, data.parents)));
      }))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        },
        __self: this
      }, "Past Litters (continued)"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        },
        __self: this
      }, litters11to20.map(function (data, idx) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: "/litter",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 394
          },
          __self: this
        }, __jsx("li", {
          key: idx,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 395
          },
          __self: this
        }, __jsx("a", {
          "data-tip": data.parents,
          "data-place": "left",
          onClick: function onClick(e) {
            _this2.handleSetCurrentLitter(data.id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 396
          },
          __self: this
        }, data.parents)));
      }))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        },
        __self: this
      }, "Past Litters (continued)"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        },
        __self: this
      }, litters21andOver.map(function (data, idx) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: "/litter",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 410
          },
          __self: this
        }, __jsx("li", {
          key: idx,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 411
          },
          __self: this
        }, __jsx("a", {
          "data-tip": data.parents,
          "data-place": "left",
          onClick: function onClick(e) {
            _this2.handleSetCurrentLitter(data.id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 412
          },
          __self: this
        }, data.parents)));
      })))))))), __jsx("div", {
        onClick: function onClick(e) {
          _this2.togglePastOpen();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item megamenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        type: "button",
        id: "ddPast",
        "data-toggle": "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428
        },
        __self: this
      }, "Our Past ", __jsx("i", {
        className: "fas fa-chevron-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        },
        __self: this
      }))), __jsx("ul", {
        className: ddPastClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435
        },
        __self: this
      }, __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        },
        __self: this
      }, "Our Past"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        },
        __self: this
      }, past1to10.map(function (data, idx) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: "/aboutDog",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 441
          },
          __self: this
        }, __jsx("li", {
          key: idx,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 442
          },
          __self: this
        }, __jsx("a", {
          "data-tip": data.call,
          "data-place": "left",
          onClick: function onClick(e) {
            _this2.handleSetCurrentDog(data.id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 443
          },
          __self: this
        }, data.call)));
      }))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 453
        },
        __self: this
      }, "Our Past"), __jsx("ul", {
        className: "megamenu-submenu top-brands",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455
        },
        __self: this
      }, past1to10.map(function (data, idx) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: "/aboutDog",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 457
          },
          __self: this
        }, __jsx("li", {
          key: idx,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 458
          },
          __self: this
        }, __jsx("a", {
          "data-tip": data.call,
          "data-place": "left",
          onClick: function onClick(e) {
            _this2.handleSetCurrentDog(data.id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 459
          },
          __self: this
        }, __jsx("img", {
          src: data.image,
          alt: "image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 461
          },
          __self: this
        }))));
      }))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469
        },
        __self: this
      }, "Our Past"), __jsx("ul", {
        className: "megamenu-submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471
        },
        __self: this
      }, past10andOver.map(function (data, idx) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: "/aboutDog",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 473
          },
          __self: this
        }, __jsx("li", {
          key: idx,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 474
          },
          __self: this
        }, __jsx("a", {
          "data-tip": data.call,
          "data-place": "left",
          onClick: function onClick(e) {
            _this2.handleSetCurrentDog(data.id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 475
          },
          __self: this
        }, data.call)));
      }))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 484
        },
        __self: this
      }, __jsx("h6", {
        className: "submenu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485
        },
        __self: this
      }, "Our Past"), __jsx("ul", {
        className: "megamenu-submenu top-brands",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487
        },
        __self: this
      }, past10andOver.map(function (data, idx) {
        return data.image != "" ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: "/aboutDog",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 490
          },
          __self: this
        }, __jsx("li", {
          key: idx,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 491
          },
          __self: this
        }, __jsx("a", {
          "data-tip": data.call,
          "data-place": "left",
          onClick: function onClick(e) {
            _this2.handleSetCurrentDog(data.id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 492
          },
          __self: this
        }, __jsx("img", {
          src: data.image,
          alt: "image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 494
          },
          __self: this
        })))) : "";
      }))))))))))))))));
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
    },
    setCurrentLitter: function setCurrentLitter(id) {
      dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_9__["setCurrentLitter"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(MegaMenu));

/***/ })

})
//# sourceMappingURL=titled.js.72b2b8dbdc798e6b5381.hot-update.js.map