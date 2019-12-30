webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/shop-style-two/Banner.js":
/*!*********************************************!*\
  !*** ./components/shop-style-two/Banner.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-visibility-sensor */ "./node_modules/react-visibility-sensor/dist/visibility-sensor.js");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_11__);








var _jsxFileName = "C:\\Projects\\Portfolio\\oldbaynewfoundlands\\components\\shop-style-two\\Banner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;




var OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-owl-carousel3 */ "./node_modules/react-owl-carousel3/lib/OwlCarousel.js", 7));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-owl-carousel3 */ "./node_modules/react-owl-carousel3/lib/OwlCarousel.js")];
    },
    modules: ['react-owl-carousel3']
  }
});
var options = {
  loop: true,
  nav: true,
  dots: true,
  autoplayHoverPause: true,
  items: 1,
  navSpeed: 750,
  autoplay: true,
  navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"]
};

var Banner =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Banner, _Component);

  function Banner() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Banner);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Banner)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      display: false,
      panel: true
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Banner, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        display: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx("div", {
        className: "col-lg-4 col-sm-6 col-md-4 col-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), this.state.display ? __jsx(OwlCarousel, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: "home-slides owl-carousel owl-theme"
      }, options, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), __jsx("div", {
        className: "main-banner item-bg2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx("div", {
        className: "main-banner-d-table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx("div", {
        className: "main-banner-d-table-cell",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, function (_ref) {
        var isVisible = _ref.isVisible;
        return __jsx("div", {
          className: "main-banner-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, __jsx("span", {
          className: isVisible ? "animated fadeInUp opacityOne" : 'opacityZero',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, "Established in 1988"), __jsx("h1", {
          className: isVisible ? "animated fadeInUp opacityOne" : 'opacityZero',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, "OLD BAY NEWFOUNDLANDS"), __jsx("p", {
          className: isVisible ? "animated fadeInUp opacityOne" : 'opacityZero',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, "Dedicated to perserving the future of purebred Newfoundlands"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, __jsx("a", {
          className: "btn btn-primary ".concat(isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, "THE BOYS")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, __jsx("a", {
          className: "btn btn-primary ".concat(isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, "THE GIRLS")));
      }))))), __jsx("div", {
        className: "main-banner item-bg1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, __jsx("div", {
        className: "main-banner-d-table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, __jsx("div", {
        className: "main-banner-d-table-cell",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, __jsx(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, function (_ref2) {
        var isVisible = _ref2.isVisible;
        return __jsx("div", {
          className: "main-banner-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, __jsx("span", {
          className: isVisible ? "animated fadeInUp slow opacityOne" : 'opacityZero',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, "Established in 1988"), __jsx("h1", {
          className: isVisible ? "animated fadeInUp slow opacityOne" : 'opacityZero',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }, "OLD BAY NEWFOUNDLANDS"), __jsx("p", {
          className: isVisible ? "animated fadeInUp slow opacityOne" : 'opacityZero',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }, "Dedicated to perserving the future of purebred Newfoundlands"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        }, __jsx("a", {
          className: "btn btn-primary ".concat(isVisible ? "animated fadeInUp slow opacityOne" : 'opacityZero'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          },
          __self: this
        }, "THE BOYS")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, __jsx("a", {
          className: "btn btn-primary ".concat(isVisible ? "animated fadeInUp slow opacityOne" : 'opacityZero'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }, "THE GIRLS")));
      }))))), __jsx("div", {
        className: "main-banner item-bg3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, __jsx("div", {
        className: "main-banner-d-table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, __jsx("div", {
        className: "main-banner-d-table-cell",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, __jsx(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, function (_ref3) {
        var isVisible = _ref3.isVisible;
        return __jsx("div", {
          className: "main-banner-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        }, __jsx("span", {
          className: isVisible ? "animated fadeInUp opacityOne" : 'opacityZero',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          },
          __self: this
        }, "Established in 1988"), __jsx("h1", {
          className: isVisible ? "animated fadeInUp opacityOne" : 'opacityZero',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          },
          __self: this
        }, "OLD BAY NEWFOUNDLANDS"), __jsx("p", {
          className: isVisible ? "animated fadeInUp opacityOne" : 'opacityZero',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171
          },
          __self: this
        }, "Dedicated to perserving the future of purebred Newfoundlands"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          },
          __self: this
        }, __jsx("a", {
          className: "btn btn-primary ".concat(isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          },
          __self: this
        }, "THE BOYS")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          },
          __self: this
        }, __jsx("a", {
          className: "btn btn-primary ".concat(isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          },
          __self: this
        }, "THE GIRLS")));
      })))))) : '');
    }
  }]);

  return Banner;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ })

})
//# sourceMappingURL=index.js.d86c8125944f0f88465d.hot-update.js.map