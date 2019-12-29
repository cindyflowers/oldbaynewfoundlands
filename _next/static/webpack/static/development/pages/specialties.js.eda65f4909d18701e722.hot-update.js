webpackHotUpdate("static\\development\\pages\\specialties.js",{

/***/ "./components/DogCard.js":
/*!*******************************!*\
  !*** ./components/DogCard.js ***!
  \*******************************/
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
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var _Modal_QuickView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Modal/QuickView */ "./components/Modal/QuickView.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-moment */ "./node_modules/react-moment/dist/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "C:\\Projects\\Portfolio\\oldbaynewfoundlands\\components\\DogCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;








var DogCard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(DogCard, _Component);

  function DogCard() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DogCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DogCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      modalOpen: false,
      modalImage: '',
      idd: null
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "openModal", function () {
      _this.setState({
        modalOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "closeModal", function () {
      _this.setState({
        modalOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleModalData", function (image, id) {
      _this.setState({
        modalImage: image,
        idd: id
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DogCard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var awards = this.props.awards;
      var modalOpen = this.state.modalOpen;
      awards.sort(function (a, b) {
        return b.date > a.date;
      });
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx(react_tooltip__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_11__["ToastContainer"], {
        transition: react_toastify__WEBPACK_IMPORTED_MODULE_11__["Slide"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), awards.map(function (data, idx) {
        return __jsx("div", {
          className: "col-lg-4 col-sm-6 col-md-4 col-6 products-col-item",
          key: idx,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, __jsx("div", {
          className: "single-product-box",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, __jsx("div", {
          className: "product-image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, __jsx("a", {
          href: "#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, __jsx("img", {
          className: "specialty-image",
          src: data.image,
          alt: "image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        })), __jsx("ul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, __jsx("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, __jsx("a", {
          "data-tip": "Quick View",
          "data-place": "left",
          onClick: function onClick(e) {
            e.preventDefault();

            _this2.openModal();

            _this2.handleModalData(data.image, data.id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, __jsx("i", {
          className: "far fa-eye",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        })))))), __jsx("div", {
          className: "product-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, __jsx("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, __jsx("a", {
          href: "awards",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, data.dog)), data.award, __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }), data.show, __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }), __jsx(react_moment__WEBPACK_IMPORTED_MODULE_13___default.a, {
          format: "MMMM DD, YYYY",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, data.date))));
      }), modalOpen ? __jsx(_Modal_QuickView__WEBPACK_IMPORTED_MODULE_12__["default"], {
        closeModal: this.closeModal,
        idd: this.state.idd,
        image: this.state.modalImage,
        price: this.state.price,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }) : '');
    }
  }]);

  return DogCard;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    awards: state.awards
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps)(DogCard));

/***/ })

})
//# sourceMappingURL=specialties.js.eda65f4909d18701e722.hot-update.js.map