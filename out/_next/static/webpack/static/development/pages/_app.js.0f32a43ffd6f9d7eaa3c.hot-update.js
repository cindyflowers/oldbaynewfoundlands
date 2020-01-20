webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./store/reducers/cartReducer.js":
/*!***************************************!*\
  !*** ./store/reducers/cartReducer.js ***!
  \***************************************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../actions/action-types/cart-actions */ "./store/actions/action-types/cart-actions.js");
/* harmony import */ var constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! constants */ "./node_modules/constants-browserify/constants.json");
var constants__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! constants */ "./node_modules/constants-browserify/constants.json", 1);









var _ref, _ref2;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }






var initState = {
  products: [{
    id: 1,
    title: "Belted chino trousers polo",
    price: 190,
    image: __webpack_require__(/*! ../../images/img1.jpg */ "./images/img1.jpg"),
    imageHover: __webpack_require__(/*! ../../images/img-hover1.jpg */ "./images/img-hover1.jpg"),
    quickView: __webpack_require__(/*! ../../images/quick-view-img.jpg */ "./images/quick-view-img.jpg")
  }],
  total: 0,
  shipping: 0,
  addedItems: [],
  addedItemsToCompare: [],
  titledSort: "1",
  titled: [],
  specialtiesSort: "1",
  specialties: [],
  topTwentySort: "1",
  topTwenty: [],
  registerOfMeritSort: "1",
  registerOfMerit: [],
  versitileNewfoundlandSort: "1",
  versitileNewfoundland: [],
  workingAchievementSort: "1",
  workingAchievement: [],
  championsSort: "1",
  champions: [],
  workingSort: "1",
  working: [],
  currentDog: 1,
  currentLitter: 1,
  dogs: [{
    "id": 1,
    "call": "Sirius",
    "toptwenty": "",
    "ch": true,
    "ours": true,
    "sex": "male",
    "stud": true,
    "name": "GCH Old Bay's Let's Get Sirius CGC, TDI",
    "sire": "GCH Bear N Mind's Maritime Traveler CD, WD1",
    "dam": "CH Waterford FrontPage",
    "dob": "2010-10-26T04:00:00.000Z",
    "neutered": false,
    "rip": "",
    "owner": "Cindy and John Flowers",
    "aka": "Seriously Cute, Serial",
    "lives": "Cindy and John Flowers",
    "health": "http://www.offa.org/display.html?appnum=1497430#animal",
    "image": __webpack_require__(/*! ../../images/info/Sirius.jpg */ "./images/info/Sirius.jpg"),
    "Titles": [{
      "title": "CGC",
      "date": "03/23/2015",
      "org": "AKC"
    }, {
      "title": "CH",
      "date": "02/18/2012",
      "org": "AKC"
    }, {
      "title": "GCH",
      "date": "01/17/2014",
      "org": "AKC"
    }]
  }, {
    "id": 2,
    "call": "Bennie",
    "toptwenty": "",
    "ours": true,
    "sex": "male",
    "stud": false,
    "name": "OLD BAY'S BUMBLE BENNIE",
    "sire": "VN GCHS Bear N Mind’s Stand Up and Cheer CD, RA, DD1, WRD, CGC",
    "dam": "GCH Old Bay's Lucy Fur ROM",
    "dob": "2012-12-09T05:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Cindy and John Flowers",
    "aka": "Bennie Boo Boo Bear",
    "lives": "Kathy Hamilton",
    "health": "http://www.offa.org/display.html?appnum=1565055#animal",
    "image": __webpack_require__(/*! ../../images/info/Bennie.jpg */ "./images/info/Bennie.jpg"),
    "Titles": []
  }, {
    "id": 3,
    "call": "Sunny",
    "toptwenty": "",
    "ours": true,
    "stud": false,
    "sex": "male",
    "name": "Old Bay's Seriously Charming Son",
    "sire": "GCH Old Bay's Let's Get Sirius CGC, TDI",
    "dam": "GCH Old Bay's Please Don't Squeeze The Charm'n",
    "dob": "2013-12-05T05:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Cindy and John Flowers",
    "aka": "Sonnora",
    "lives": "Cindy and John Flowers",
    "health": "https://www.ofa.org/advanced-search?f=sr&appnum=1718393",
    "image": __webpack_require__(/*! ../../images/info/Sunny.jpg */ "./images/info/Sunny.jpg"),
    "Titles": []
  }, {
    "id": 4,
    "call": "Rolex",
    "ch": true,
    "toptwenty": "2017",
    "ours": true,
    "sex": "male",
    "stud": true,
    "name": "GCHB Old Bay's Perfect Timing",
    "sire": "CH Old Bay's Lead Me To Temptation ",
    "dam": "Old Bay's Seasoned with Spice ROM",
    "dob": "2015-02-23T05:00:00.000Z",
    "neutered": false,
    "rip": "",
    "owner": "Cindy Flowers and Kathy Hamilton",
    "aka": "Rollie-Pollie-Bear",
    "lives": "Cindy and John Flowers",
    "health": "http://www.offa.org/display.html?appnum=1718399#animal",
    "image": __webpack_require__(/*! ../../images/info/Rolex.jpg */ "./images/info/Rolex.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "01/15/2016",
      "org": "AKC"
    }, {
      "title": "GCH",
      "date": "05/21/2016",
      "org": "AKC"
    }, {
      "title": "NCA Select",
      "date": "2018",
      "org": "AKC"
    }]
  }, {
    "id": 5,
    "ch": true,
    "call": "Metronome",
    "toptwenty": "",
    "ours": true,
    "sex": "male",
    "stud": true,
    "name": "CH Old Bay's Keeping Time With Sun Valley",
    "sire": "GCHB Old Bay's Perfect Timing",
    "dam": "GCHB Old Bay's Keep It Simple ROM",
    "dob": "2017-06-23T04:00:00.000Z",
    "neutered": false,
    "rip": "",
    "owner": "Cindy and John Flowers",
    "aka": "Metro",
    "lives": "Mike and Kathy Paxton",
    "health": "https://www.ofa.org/advanced-search?f=sr&appnum=2027902",
    "image": __webpack_require__(/*! ../../images/info/Metro.jpg */ "./images/info/Metro.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "05/26/2018",
      "org": "AKC"
    }]
  }, {
    "id": 6,
    "ch": true,
    "call": "Maestro",
    "toptwenty": "",
    "ours": true,
    "sex": "male",
    "stud": true,
    "name": "CH Old Bay's Master of Time in Dreamhaven",
    "sire": "GCHB Old Bay's Perfect Timing",
    "dam": "GCH Old Bay's Snowball's Chance CD",
    "dob": "2018-01-11T05:00:00.000Z",
    "neutered": false,
    "rip": "",
    "owner": "Cindy and John Flowers and Andrea Jung and Kathy Hamilton",
    "aka": "Maestro :-)",
    "lives": "Cindy and John Flowers",
    "health": "https://www.ofa.org/advanced-search?f=sr&appnum=2027902",
    "image": __webpack_require__(/*! ../../images/info/Maestro.jpg */ "./images/info/Maestro.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "09/23/2018",
      "org": "AKC"
    }]
  }, {
    "id": 7,
    "call": "Nemo",
    "ch": true,
    "toptwenty": "",
    "ours": false,
    "coown": true,
    "stud": false,
    "sex": "male",
    "name": "CH Old Bay's Finding BluWater",
    "sire": "GCHB Old Bay's Perfect Timing",
    "dam": "CH OLD BAY'S SPICIN' IT UP AT BLUWATER",
    "dob": "2017-12-21T05:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Cindy and John Flowers and Joan Locker-Thuring",
    "aka": "Nemonator",
    "lives": "Jenni and David Arnett",
    "health": "https://www.ofa.org/advanced-search?f=sr&appnum=1955991",
    "image": __webpack_require__(/*! ../../images/info/Nemo.jpg */ "./images/info/Nemo.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "01/06/2019",
      "org": "AKC"
    }]
  }, {
    "id": 8,
    "call": "Raisin",
    "ch": true,
    "toptwenty": "",
    "ours": true,
    "stud": false,
    "dams": true,
    "sex": "female",
    "name": "CH Old Bay's Raging Infurno",
    "sire": "CH CYPRESS BAY IMAT CORNERBROOK",
    "dam": "GCH Old Bay's Lucy Fur ROM",
    "dob": "2011-09-10T04:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Kathy Hamilton, John Borklund and Cindy Flowers",
    "aka": "Rasinette, Rasie",
    "lives": "Kathy Hamilton",
    "health": "http://www.offa.org/display.html?appnum=1522576#animal",
    "image": __webpack_require__(/*! ../../images/info/Raisin.jpg */ "./images/info/Raisin.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "07/29/2016",
      "org": "AKC"
    }]
  }, {
    "id": 9,
    "call": "Kiss",
    "ch": true,
    "toptwenty": "2018",
    "rom": true,
    "ours": true,
    "dams": true,
    "stud": false,
    "sex": "female",
    "name": "GCHB Old Bay's Keep It Simple ROM",
    "sire": "GCHS Sunvalley's Its As Simple As Abc ROM (HG/L/P/HrC/Cn/Cerf)",
    "dam": "GCH Old Bay's Please Don't Squeeze The Charm'n CGC, TDI (HF/L/P/CrC/Cn/Cerf/DNA) ",
    "dob": "2014-11-25T05:00:00.000Z",
    "neutered": false,
    "rip": "",
    "owner": "Cindy Flowers & Kathy Hamilton & John Flowers",
    "aka": "Kissy",
    "lives": "Cindy and John Flowers",
    "health": "http://www.offa.org/display.html?appnum=1698851#animal",
    "image": __webpack_require__(/*! ../../images/info/Kiss.jpg */ "./images/info/Kiss.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "02/20/2016",
      "org": "AKC"
    }, {
      "title": "GCH",
      "date": "10/30/2016",
      "org": "AKC"
    }, {
      "title": "GCHB",
      "date": "04/21/2018",
      "org": "AKC"
    }, {
      "title": "Register of Merit",
      "date": "12/31/2019",
      "org": "NCA"
    }]
  }, {
    "id": 10,
    "call": "Snowball",
    "work": true,
    "ch": true,
    "toptwenty": "",
    "ours": false,
    "coown": true,
    "stud": false,
    "sex": "female",
    "name": "GCH Old Bay's Snowball's Chance CD",
    "sire": "VN GCH Southwind's Pouch Cove Dark Star CD, RE, TDD, WRD3",
    "dam": "GCH CH Old Bay's Lucy Fur CGC, TDI, THDN",
    "dob": "2015-02-04T05:00:00.000Z",
    "neutered": false,
    "rip": "",
    "owner": "Andrea Jung and Cindy Flowers and Kathy Hamilton",
    "aka": "SnowBeast",
    "lives": "Andrea Jung",
    "health": "http://www.offa.org/display.html?appnum=1718388#animal",
    "image": __webpack_require__(/*! ../../images/info/Snowball.jpg */ "./images/info/Snowball.jpg"),
    "Titles": [{
      "title": "CD",
      "date": "03/05/2017",
      "org": "AKC"
    }, {
      "title": "CH",
      "date": "04/23/2016",
      "org": "AKC"
    }, {
      "title": "GCH",
      "date": "07/28/2018",
      "org": "AKC"
    }]
  }, {
    "id": 11,
    "call": "Flash",
    "ch": true,
    "toptwenty": "2018",
    "ours": false,
    "coown": true,
    "stud": false,
    "sex": "male",
    "name": "GCHS CH Old Bay's Big Bang CGC",
    "sire": "VN GCH Southwind's Pouch Cove Dark Star CD, RE, TDD, WRD3",
    "dam": "GCH CH Old Bay's Lucy Fur CGC, TDI, THDN",
    "dob": "2015-02-04T05:00:00.000Z",
    "neutered": false,
    "rip": "",
    "owner": "Anne and David Nored and Cindy Flowers",
    "aka": "Flash Man",
    "lives": "Anne and David Nored",
    "health": "https://www.ofa.org/advanced-search?f=sr&appnum=1876590",
    "image": __webpack_require__(/*! ../../images/info/Flash.jpg */ "./images/info/Flash.jpg"),
    "Titles": [{
      "title": "CGC",
      "date": "05/03/2019",
      "org": "AKC"
    }, {
      "title": "CH",
      "date": "10/16/2016",
      "org": "AKC"
    }, {
      "title": "GCH",
      "date": "04/07/2018",
      "org": "AKC"
    }, {
      "title": "GCHB",
      "date": "08/31/2018",
      "org": "AKC"
    }, {
      "title": "GCHS",
      "date": "06/01/2019",
      "org": "AKC"
    }]
  }, {
    "id": 12,
    "call": "Carson",
    "toptwenty": "",
    "ours": true,
    "rom": true,
    "stud": false,
    "sex": "male",
    "name": "BISS GCH PORICIA'S STRAIGHT TO THE TOP CGC, TDI, ROM, HOF",
    "sire": "",
    "dam": "",
    "dob": "2005-09-07T04:00:00.000Z",
    "neutered": false,
    "rip": "December 11, 2019",
    "owner": "Kathy Hamilton and Pat Hall",
    "aka": "Carson-ova",
    "lives": "Kathy Hamilton ",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Carson.jpg */ "./images/info/Carson.jpg"),
    "Titles": [{
      "title": "CGC",
      "date": "05/03/2015",
      "org": "AKC"
    }, {
      "title": "CH",
      "date": "10/16/210",
      "org": "AKC"
    }, {
      "title": "Hall of Fame",
      "date": "04/07/2015",
      "org": "AKC"
    }, {
      "title": "Register of Merit",
      "date": "04/07/2015",
      "org": "AKC"
    }]
  }, {
    "id": 13,
    "call": "Sparkle",
    "ch": true,
    "toptwenty": "",
    "ours": true,
    "stud": false,
    "sex": "female",
    "name": "CH Old Bay's Sparks Are Flyin', RN, WD",
    "sire": "CH Top Shelf Troubles A Brewin CD, RN, DD, WD",
    "dam": "BISS GCH CH TOP SHELF SPICED WITH OLD BAY, NJP, RN, DD, ROM",
    "dob": "2008-12-03T05:00:00.000Z",
    "neutered": false,
    "rip": "January 2018",
    "owner": "Cindy and John Flowers and Rose Miller",
    "aka": "Spark, Sparky, Sparkly, Sparkly-Darkly-Dog",
    "lives": "Cindy and John Flowers",
    "health": "http://www.offa.org/display.html?appnum=1370314#animal",
    "image": __webpack_require__(/*! ../../images/info/Sparkle.jpg */ "./images/info/Sparkle.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "03/18/2010",
      "org": "AKC"
    }, {
      "title": "RN",
      "date": "03/17/2011",
      "org": "AKC"
    }, {
      "title": "WD",
      "date": "08/24/2013",
      "org": "NCA"
    }]
  }, {
    "id": 14,
    "call": "Lucy",
    "ch": true,
    "toptwenty": "",
    "rom": true,
    "ours": true,
    "stud": false,
    "sex": "female",
    "name": "GCH CH OLD BAY'S LUCY FUR CGC, TDI, THDN, ROM",
    "sire": "Muddy Creek's Carson",
    "dam": "GCH OLD BAY'S HELLFROZOVER TOPSHELF THDN ROM",
    "dob": "2009-06-09T04:00:00.000Z",
    "neutered": false,
    "rip": "April 29, 2017",
    "owner": "Kathy Hamilton & John Borklund & Cindy Flower",
    "aka": "Lou Lou, Lucy I'm Home, LucyFur",
    "lives": "Kathy Hamilton",
    "health": "http://www.offa.org/display.html?appnum=1429095#animal",
    "image": __webpack_require__(/*! ../../images/info/Lucy.jpg */ "./images/info/Lucy.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "03/18/2011",
      "org": "AKC"
    }, {
      "title": "GCH",
      "date": "07/07/2012",
      "org": "AKC"
    }, {
      "title": "THDN",
      "date": "01/28/2015",
      "org": "AKC"
    }, {
      "title": "Register of Merit",
      "date": "12/31/2016",
      "org": "NCA"
    }]
  }, {
    "id": 15,
    "call": "Spice",
    "work": true,
    "ch": true,
    "toptwenty": "2010, 2012",
    "rom": true,
    "ours": true,
    "stud": false,
    "sex": "female",
    "name": "BISS GCH CH TOP SHELF SPICED WITH OLD BAY, NJP, RN, DD, ROM",
    "sire": "CH Pouch Cove's Too Close To Call CD, RA, DD1",
    "dam": "Top Shelfs Something Different ROM",
    "dob": "2005-04-29T04:00:00.000Z",
    "neutered": false,
    "rip": "April 2017",
    "owner": "Cindy and John Flowers",
    "aka": "Spicy, Spice Girl, Licky, Licky Mill, Spice Cake, Cakes",
    "lives": "Cindy and John Flowers",
    "health": "http://www.offa.org/display.html?appnum=1240326#animal",
    "image": __webpack_require__(/*! ../../images/info/Spice.jpg */ "./images/info/Spice.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "04/28/2006",
      "org": "AKC"
    }, {
      "title": "GCH",
      "date": "07/17/2010",
      "org": "AKC"
    }, {
      "title": "NJP",
      "date": "09/05/2009",
      "org": "AKC"
    }, {
      "title": "RN",
      "date": "06/29/2012",
      "org": "AKC"
    }, {
      "title": "DD",
      "date": "03/24/2013",
      "org": "NCA"
    }, {
      "title": "Register of Merit",
      "date": "12/31/2016",
      "org": "NCA"
    }]
  }, {
    "id": 16,
    "call": "Dexter",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "ours": true,
    "stud": false,
    "sex": "male",
    "name": "GCH Allegiance Rock The Boat OldBay",
    "sire": "CH Top Shelf's On The Rocks ROM",
    "dam": "CH Darbydales Zoo Two",
    "dob": "2006-09-14T04:00:00.000Z",
    "neutered": false,
    "rip": "September 18, 2014",
    "owner": "Kathy Hamilton",
    "aka": "Dex, Dexi, Dex-a-trim, Walking Head",
    "lives": "Kathy Hamilton",
    "health": "http://www.offa.org/display.html?appnum=1240326#animal",
    "image": __webpack_require__(/*! ../../images/info/Dexter.jpg */ "./images/info/Dexter.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "07/29/2007",
      "org": "AKC"
    }, {
      "title": "GCH",
      "date": "11/29/2010",
      "org": "AKC"
    }]
  }, {
    "id": 17,
    "call": "Simon",
    "work": true,
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "ours": true,
    "stud": false,
    "sex": "male",
    "name": "CH TOP SHELF'S SIMPLY IRRESISTIBLE, DD, WD, OAP, AJP",
    "sire": "BISS, CH NUMA'S HAD TO BE POUCH COVE, DD ROM",
    "dam": "VN CH TOP SHELF'S STAR DAISY, CD, DD, WRD ROM",
    "dob": "2002-05-16T04:00:00.000Z",
    "neutered": false,
    "rip": "September 2, 2014",
    "owner": "Katie Amundson & Cindy Flowers",
    "aka": "Simonator, Simatraitor, Tater, Tater Tot, Tate",
    "lives": "Katie Amundson & Cindy Flowers",
    "health": "http://www.offa.org/display.html?appnum=1096035#animal",
    "image": __webpack_require__(/*! ../../images/info/Simon.jpg */ "./images/info/Simon.jpg"),
    "Titles": [{
      "title": "",
      "date": "12/07/2007",
      "org": "AKC"
    }, {
      "title": "CH",
      "date": "02/06/2005",
      "org": "AKC"
    }, {
      "title": "NAP",
      "date": "10/30/2004",
      "org": "AKC"
    }, {
      "title": "NJP",
      "date": "12/10/2004",
      "org": "AKC"
    }, {
      "title": "OAP",
      "date": "10/22/2005",
      "org": "AKC"
    }, {
      "title": "OJP",
      "date": "02/25/2007",
      "org": "AKC"
    }, {
      "title": "DD",
      "date": "03/28/2004",
      "org": "NCA"
    }, {
      "title": "WD",
      "date": "08/12/2006",
      "org": "NCA"
    }]
  }, {
    "id": 18,
    "call": "Chilly",
    "ch": true,
    "toptwenty": "",
    "rom": true,
    "ours": true,
    "stud": false,
    "sex": "female",
    "name": "GCH OLD BAY'S HELLFROZOVER TOPSHELF THDN ROM",
    "sire": "CH TOP SHELF'S ON THE ROCKS, ROM",
    "dam": "CH TOP SHELF'S WILD NIGHT OUT, ROM",
    "dob": "2005-09-26T04:00:00.000Z",
    "neutered": false,
    "rip": "August 2014",
    "owner": "Nancy Beres & Cindy Flowers",
    "aka": "Chillster, Chinchilla, The Arsonist, Fire Starter",
    "lives": "Nancy Beres ",
    "health": "http://www.offa.org/display.html?appnum=1240358#animal",
    "image": __webpack_require__(/*! ../../images/info/Chilly.jpg */ "./images/info/Chilly.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "02/24/2007",
      "org": "AKC"
    }, {
      "title": "RN",
      "date": "04/21/2012",
      "org": "AKC"
    }, {
      "title": "Register of Merit",
      "date": "12/31/2012",
      "org": "NCA"
    }]
  }, {
    "id": 19,
    "call": "Katie",
    "work": true,
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": true,
    "ours": true,
    "stud": false,
    "sex": "female",
    "name": "VN CH TOP SHELF'S JUMP UP N KISS ME, CD, DD1, WRD2, NAP, RN, CGC, TDI",
    "sire": "CH TOP SHELF'S ON THE ROCKS, ROM",
    "dam": "CH TOP SHELF'S WILD NIGHT OUT, ROM",
    "dob": "2002-03-05T05:00:00.000Z",
    "neutered": false,
    "rip": "May 18, 2012",
    "owner": "Cindy and John Flowers",
    "aka": "Kate, Kaitlin, Katydid, Katie-Did-It",
    "lives": "Cindy and John Flowers",
    "health": "http://www.offa.org/display.html?appnum=1096033#animal",
    "image": __webpack_require__(/*! ../../images/info/Katie.jpg */ "./images/info/Katie.jpg"),
    "Titles": [{
      "title": "Versatile Newfoundland",
      "date": "04/28/2009",
      "org": "NCA"
    }, {
      "title": "CD",
      "date": "04/28/2009",
      "org": "AKC"
    }, {
      "title": "CH",
      "date": "11/15/2003",
      "org": "AKC"
    }, {
      "title": "NAP",
      "date": "10/30/2004",
      "org": "AKC"
    }, {
      "title": "RN",
      "date": "03/18/2011",
      "org": "AKC"
    }, {
      "title": "DD",
      "date": "03/21/2004",
      "org": "NCA"
    }, {
      "title": "DD",
      "date": "03/28/2004",
      "org": "NCA"
    }, {
      "title": "WD",
      "date": "10/02/2004",
      "org": "NCA"
    }, {
      "title": "WRD",
      "date": "08/07/2005",
      "org": "NCA"
    }, {
      "title": "WRD",
      "date": "10/01/2005",
      "org": "NCA"
    }, {
      "title": "WRD",
      "date": "10/02/2005",
      "org": "NCA"
    }]
  }, {
    "id": 20,
    "call": "Dasher",
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": true,
    "stud": false,
    "sex": "male",
    "name": "Old Bay's Dash of Spice",
    "sire": "GCH Bear N Mind's Maritime Traveler CD, WD1",
    "dam": "BISS GCH CH TOP SHELF SPICED WITH OLD BAY, NJP, RN, DD, ROM",
    "dob": "2010-12-25T05:00:00.000Z",
    "neutered": false,
    "rip": "February 24, 2011",
    "owner": "Cindy and John Flowers",
    "aka": "Dash, Dashing",
    "lives": "Cindy and John Flowers",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Dasher.jpg */ "./images/info/Dasher.jpg"),
    "Titles": []
  }, {
    "id": 21,
    "call": "Daisy",
    "work": true,
    "ch": true,
    "toptwenty": "",
    "rom": true,
    "vn": true,
    "ours": true,
    "stud": false,
    "sex": "female",
    "name": "VN CH TOP SHELF'S STAR DAISY CD, TDD, WD1, WRD, ROM ",
    "sire": "CH Darbydale's Keep´M Guess´N ROM",
    "dam": "VN CH Top Shelfs Baileys Irish Cream CDX, DD, WRD",
    "dob": "1999-02-17T05:00:00.000Z",
    "neutered": false,
    "rip": "September 29, 2011",
    "owner": "Cindy and John Flowers",
    "aka": "Daisy Dukes, Dukes, Dukey, Daisy May, Dazed",
    "lives": "Cindy and John Flowers",
    "health": "http://www.offa.org/display.html?appnum=830863#animal",
    "image": __webpack_require__(/*! ../../images/info/Daisy.jpg */ "./images/info/Daisy.jpg"),
    "Titles": [{
      "title": "Register of Merit",
      "date": "12/31/2016",
      "org": "NCA"
    }, {
      "title": "Versatile Newfoundland",
      "date": "04/17/2002",
      "org": "NCA"
    }, {
      "title": "CD",
      "date": "04/17/2002",
      "org": "AKC"
    }, {
      "title": "CH",
      "date": "06/30/2001",
      "org": "AKC"
    }, {
      "title": "DD",
      "date": "04/09/2000",
      "org": "NCA"
    }, {
      "title": "TDD",
      "date": "05/06/2001",
      "org": "NCA"
    }, {
      "title": "WD",
      "date": "10/01/2005",
      "org": "NCA"
    }, {
      "title": "WD",
      "date": "10/02/2005",
      "org": "NCA"
    }, {
      "title": "WRD",
      "date": "08/25/2001",
      "org": "NCA"
    }]
  }, {
    "id": 22,
    "call": "Flyer",
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": true,
    "stud": false,
    "sex": "male",
    "name": "MUDDY CREEKS FREQUENT FLYER",
    "sire": "Muddy Creeks",
    "dam": "Muddy Creek Old Bays Moonbeam",
    "dob": "2000-01-01T00:00:00.000Z",
    "neutered": false,
    "rip": "September 28, 2010",
    "owner": "Kathy Hamilton",
    "aka": "Fly, Fly Paper, Fly me to the moon",
    "lives": "Kathy Hamilton",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Flyer.jpg */ "./images/info/Flyer.jpg"),
    "Titles": []
  }, {
    "id": 23,
    "call": "Tommy",
    "work": true,
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": true,
    "stud": false,
    "sex": "male",
    "name": "CH TOP SHELF TOM COLINS, DD, WRD3",
    "sire": "CH Darbydale's Keep´M Guess´N ROM",
    "dam": "VN CH Top Shelfs Baileys Irish Cream CDX, DD, WRD",
    "dob": "2001-03-08T05:00:00.000Z",
    "neutered": false,
    "rip": "September 16, 2010",
    "owner": "Cindy and John Flowers",
    "aka": "Tom, Thomas The Train, Taahhh-me",
    "lives": "Cindy and John Flowers",
    "health": "http://www.offa.org/display.html?appnum=1041710#animal",
    "image": __webpack_require__(/*! ../../images/info/Tommy.jpg */ "./images/info/Tommy.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "11/29/2002",
      "org": "AKC"
    }, {
      "title": "DD",
      "date": "04/07/2002",
      "org": "NCA"
    }, {
      "title": "DD",
      "date": "04/07/2002",
      "org": "NCA"
    }, {
      "title": "WD",
      "date": "08/17/2003",
      "org": "NCA"
    }, {
      "title": "WRD",
      "date": "08/08/2004",
      "org": "NCA"
    }, {
      "title": "WRD",
      "date": "10/01/2005",
      "org": "NCA"
    }, {
      "title": "WRD",
      "date": "10/02/2005",
      "org": "NCA"
    }]
  }, {
    "id": 24,
    "call": "Opie",
    "ch": true,
    "toptwenty": "2004, 2005",
    "ours": true,
    "stud": false,
    "sex": "male",
    "name": "BISS CH TOP SHELF'S SMOOTH OPERATOR, CGC, TDI",
    "sire": "BISS, CH NUMA'S HAD TO BE POUCH COVE, DD ROM",
    "dam": "VN CH TOP SHELF'S STAR DAISY, CD, DD, WRD ROM ",
    "dob": "2002-05-16T04:00:00.000Z",
    "neutered": false,
    "rip": "September 20, 2006",
    "owner": "Kathy Hamilton and Cindy and John Flowers",
    "aka": "Obi-Wan-Konobi",
    "lives": "Kathy Hamilton",
    "health": "http://www.offa.org/display.html?appnum=1096214#animal",
    "image": __webpack_require__(/*! ../../images/info/Opie.jpg */ "./images/info/Opie.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "10/26/2003",
      "org": "AKC"
    }]
  }, {
    "id": 25,
    "call": "Yogi",
    "toptwenty": "",
    "work": true,
    "ours": true,
    "stud": false,
    "sex": "male",
    "name": "SHADRACK'S MIDNITE MAGIC CD, NAP, RE, TDD, WRD4",
    "sire": "CH Shadracks Midnite Habit",
    "dam": "CH Midnite Startin´ Over W Shadrack ",
    "dob": "1999-06-30T04:00:00.000Z",
    "neutered": false,
    "rip": "March 15, 2009",
    "owner": "Cindy & John Flowers",
    "aka": "Yogi-Bear, Yogity-Bogity-Bear, Yoggers, Yogi Beara, Smarter Than the Average Bear, Best Puppy in the Whole World",
    "lives": "Cindy & John Flowers",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Yogi.jpg */ "./images/info/Yogi.jpg"),
    "Titles": [{
      "title": "CD",
      "date": "11/30/2002",
      "org": "AKC"
    }, {
      "title": "NAP",
      "date": "12/05/2004",
      "org": "AKC"
    }, {
      "title": "RA",
      "date": "12/15/2005",
      "org": "AKC"
    }, {
      "title": "RE",
      "date": "12/18/2005",
      "org": "AKC"
    }, {
      "title": "RN",
      "date": "10/15/2005",
      "org": "AKC"
    }, {
      "title": "DD",
      "date": "11/12/2000",
      "org": "NCA"
    }, {
      "title": "TDD",
      "date": "05/06/2001",
      "org": "NCA"
    }, {
      "title": "WD",
      "date": "09/10/2000",
      "org": "NCA"
    }, {
      "title": "WRD",
      "date": "10/01/2000",
      "org": "NCA"
    }, {
      "title": "WRD",
      "date": "10/01/2000",
      "org": "NCA"
    }, {
      "title": "WRD",
      "date": "10/01/2005",
      "org": "NCA"
    }, {
      "title": "WRD",
      "date": "09/29/2007",
      "org": "NCA"
    }, {
      "title": "WRD",
      "date": "09/30/2007",
      "org": "NCA"
    }]
  }, {
    "id": 26,
    "call": "Sporty",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": true,
    "stud": false,
    "sex": "female",
    "name": "CH OLD BAY'S SPORTIN' A SPICY ATTITUDE",
    "sire": "BISS GCH Skipper's Eminence King of Helluland ROM",
    "dam": "BISS GCH CH TOP SHELF SPICED WITH OLD BAY, NJP, RN, DD, ROM",
    "dob": "2008-04-10T04:00:00.000Z",
    "neutered": false,
    "rip": "August 10, 2009",
    "owner": "Cindy and John Flowers",
    "aka": "Sporty Spice, Good Sport, Bad Sport, Sportscaster, Sport-Zilla",
    "lives": "Cindy and John Flowers",
    "health": "http://www.offa.org/display.html?appnum=1370494#animal",
    "image": __webpack_require__(/*! ../../images/info/Sporty.jpg */ "./images/info/Sporty.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "04/19/2009",
      "org": "AKC"
    }]
  }, {
    "id": 27,
    "call": "Burnie",
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": true,
    "stud": false,
    "sex": "male",
    "name": "OLD BAY'S SITTIN ON THE BACK BURNER",
    "sire": "BISS CH SUNVALLEY PETITIONS POUCH COVE, ROM",
    "dam": "GCH OLD BAY'S HELLFROZOVER TOPSHELF THDN ROM",
    "dob": "2008-05-10T04:00:00.000Z",
    "neutered": false,
    "rip": "July 27, 2009",
    "owner": "Cindy Flowers and Kathy Hamiltons",
    "aka": "Bernardo, Burn, Burnard, Burn Pile, Fat Face",
    "lives": "Cindy Flowers and Kathy Hamilton",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Burnie.jpg */ "./images/info/Burnie.jpg"),
    "Titles": []
  }, {
    "id": 28,
    "call": "Snoopy",
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": true,
    "stud": false,
    "sex": "female",
    "name": "MUDDY CREEK OLD BAYS MOONBEAM ",
    "sire": "Ledgelights Muddy Creek Caruso",
    "dam": "Muddy Creeks Mercedes",
    "dob": null,
    "neutered": false,
    "rip": "2007",
    "owner": "Kathy Hamiltons",
    "aka": "Moon, Snoop",
    "lives": "Kathy Hamilton",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Snoopy.jpg */ "./images/info/Snoopy.jpg"),
    "Titles": []
  }, {
    "id": 29,
    "call": "RRRocky",
    "ch": true,
    "toptwenty": "2006",
    "rom": true,
    "ours": true,
    "stud": false,
    "sex": "male",
    "name": "CH Top Shelf's On The Rocks ROM",
    "sire": "BISS, CH NUMA'S HAD TO BE POUCH COVE, DD ROM",
    "dam": "VN CH TOP SHELF'S STAR DAISY, CD, DD, WRD ROM",
    "dob": "2002-05-16T04:00:00.000Z",
    "neutered": false,
    "rip": "September 15, 2006",
    "owner": "Kathy Hamilton and Cindy and John Flowers",
    "aka": "RRRRRRRocky",
    "lives": "Kathy Hamilton",
    "health": "http://www.offa.org/display.html?appnum=1096214#animal",
    "image": __webpack_require__(/*! ../../images/info/Rocky.jpg */ "./images/info/Rocky.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "11/16/2003",
      "org": "AKC"
    }, {
      "title": "Register of Merit",
      "date": "12/31/2009",
      "org": "NCA"
    }]
  }, {
    "id": 30,
    "call": "Betty",
    "work": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": true,
    "stud": false,
    "sex": "female",
    "name": "BROAD RUN'S BLACK BETTY, CD, TDD, WRD",
    "sire": "",
    "dam": "Shadracks Babylon Beauty",
    "dob": "1992-05-30T04:00:00.000Z",
    "neutered": false,
    "rip": "May 19, 2006",
    "owner": "Cindy & John Flowers",
    "aka": "Betty Boop",
    "lives": "Cindy & John Flowers",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Betty.jpg */ "./images/info/Betty.jpg"),
    "Titles": [{
      "title": "CD",
      "date": "11/07/1993",
      "org": "AKC"
    }, {
      "title": "WD",
      "date": "11/07/1993",
      "org": "NCA"
    }, {
      "title": "WRD",
      "date": "11/07/1993",
      "org": "NCA"
    }, {
      "title": "DD",
      "date": "11/07/1993",
      "org": "NCA"
    }, {
      "title": "TDD",
      "date": "11/07/1993",
      "org": "NCA"
    }]
  }, {
    "id": 31,
    "call": "Kindle",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": true,
    "stud": false,
    "sex": "female",
    "name": "CH Old Bay's Light My Fire With Dreamhaven",
    "sire": "VN GCH Southwind's Pouch Cove Dark Star CD, RE, TDD, WRD3",
    "dam": "GCHB Old Bay's Keep It Simple ROM",
    "dob": "2018-11-10T05:00:00.000Z",
    "neutered": false,
    "rip": "",
    "owner": "Kathy Hamilton, Andrea Jung and Cindy Flowers",
    "aka": "Ken Doll",
    "lives": "Cindy and John",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Kindle.jpg */ "./images/info/Kindle.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "10/30/2019",
      "org": "AKC"
    }]
  }, {
    "id": 32,
    "call": "Sing",
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": true,
    "stud": false,
    "sex": "female",
    "name": "Old Bay's I Put The Sing In Single",
    "sire": "GCH Chateaunewf'N Nakiska's Legend Of The Stones",
    "dam": "GCHB Old Bay's Keep It Simple ROM",
    "dob": "2019-11-08T05:00:00.000Z",
    "neutered": false,
    "rip": "",
    "owner": "Cindy & John Flowers",
    "aka": "Singleton",
    "lives": "Cindy & John Flowers",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Sing.jpg */ "./images/info/Sing.jpg"),
    "Titles": []
  }, {
    "id": 33,
    "call": "Miss Flash",
    "work": true,
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "coown": true,
    "stud": false,
    "sex": "female",
    "name": "CH Celtic Cross Mischief Managed At Old Bay RN, RA, WD",
    "sire": "GCH Old Bay's Potter As In Harry BN, CD, CGC, RN, RA",
    "dam": "CH Old Bay's Sparks Are Flyin', RN, WD",
    "dob": "2011-09-06T04:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Rosemary Miller & Cindy Flowers & Barbara Plasse",
    "aka": "",
    "lives": "Rose",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Flash1.jpg */ "./images/info/Flash1.jpg"),
    "Titles": [{
      "title": "CD",
      "date": "11/05/2015",
      "org": "AKC"
    }, {
      "title": "CH",
      "date": "08/18/2018",
      "org": "AKC"
    }, {
      "title": "RA",
      "date": "11/04/2015",
      "org": "AKC"
    }, {
      "title": "RN",
      "date": "05/02/2012",
      "org": "AKC"
    }, {
      "title": "WD",
      "date": "08/22/2015",
      "org": "NCA"
    }]
  }, {
    "id": 34,
    "call": "Jack",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "coown": true,
    "stud": false,
    "sex": "male",
    "name": "CH Celtic Cross Skipjack At Old Bay CGC",
    "sire": "GCH \tOld Bay's Here At Last",
    "dam": "CH Celtic Cross Mischief Managed At Old Bay RN, RA, WD",
    "dob": "2013-10-17T04:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Michael Acosta & Cindy Flowers & Rosemary Miller & Susan Acosta",
    "aka": "",
    "lives": "Mike and Susan",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Jack.jpg */ "./images/info/Jack.jpg"),
    "Titles": [{
      "title": "CGC",
      "date": "10/26/2014",
      "org": "AKC"
    }, {
      "title": "CH",
      "date": "11/06/2015",
      "org": "AKC"
    }]
  }, {
    "id": 35,
    "call": "Tilly",
    "work": true,
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "stud": false,
    "sex": "female",
    "name": "CH Dreamhaven's Cascading Waterfalls At Old Bay CGC, TKN, TKI, TKA",
    "sire": "VN GCH Southwind's Pouch Cove Dark Star CD, RE, TDD, WRD3",
    "dam": "GCHB Old Bay's Keep It Simple ROM'",
    "dob": "2018-11-10T05:00:00.000Z",
    "neutered": false,
    "rip": "",
    "owner": "Wendy Sparks & Andrea Jung & Harold Sparks",
    "aka": "",
    "lives": "Wendy",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Tilly.jpg */ "./images/info/Tilly.jpg"),
    "Titles": [{
      "title": "CGC",
      "date": "04/09/2019",
      "org": "AKC"
    }, {
      "title": "CH",
      "date": "11/09/2019",
      "org": "AKC"
    }, {
      "title": "TKN",
      "date": "11/19/2019",
      "org": "AKC"
    }, {
      "title": "TKI",
      "date": "11/20/2019",
      "org": "AKC"
    }, {
      "title": "TKA",
      "date": "11/21/2019",
      "org": "AKC"
    }]
  }, {
    "id": 36,
    "call": "Elsa",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "coown": true,
    "stud": false,
    "sex": "female",
    "name": "CH Dreamhaven's Frozen In Time With Old Bay",
    "sire": "GCHB Old Bay's Perfect Timing",
    "dam": "GCH Old Bay's Snowball's Chance CD",
    "dob": "2018-01-11T05:00:00.000Z",
    "neutered": false,
    "rip": "",
    "owner": "Andrea Jung & Cindy Flowers",
    "aka": "",
    "lives": "Andrea",
    "health": "",
    "image": __webpack_require__(/*! ../../images/specialties/Elsa 9mo new CH.jpg */ "./images/specialties/Elsa 9mo new CH.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "11/04/2018",
      "org": "AKCKC"
    }]
  }, {
    "id": 37,
    "ch": true,
    "call": "Nash",
    "work": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "stud": false,
    "sex": "male",
    "name": "CH Dreamhaven's Sum It Up With Old Bay CGC, TKN, WD",
    "sire": "VN GCH Southwind's Pouch Cove Dark Star CD, RE, TDD, WRD3",
    "dam": "GCHB Old Bay's Keep It Simple ROM",
    "dob": "2018-11-10T05:00:00.000Z",
    "neutered": false,
    "rip": "",
    "owner": "Sue Lynn Morton & Robin Love",
    "aka": "",
    "lives": "Sue Lynn Morton & Robin Love",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Nash.jpg */ "./images/info/Nash.jpg"),
    "Titles": [{
      "title": "CGC",
      "date": "07/13/2019",
      "org": "AKC"
    }, {
      "title": "TKN",
      "date": "07/13/2019",
      "org": "AKC"
    }, {
      "title": "WD",
      "date": "08/17/2019",
      "org": "NCA"
    }, {
      "title": "CH",
      "date": "12/04/2018",
      "org": "AKCKC"
    }]
  }, {
    "id": 38,
    "call": "Essi",
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "coown": true,
    "stud": false,
    "sex": "female",
    "name": "Dreamhaven's Old Bay Bright Star Over Brandywine CGC",
    "sire": "VN GCH Southwind's Pouch Cove Dark Star CD, RE, TDD, WRD3",
    "dam": "GCHB Old Bay's Keep It Simple ROM",
    "dob": "2018-11-10T05:00:00.000Z",
    "neutered": false,
    "rip": "",
    "owner": "Karin Bystol & Cindy Flowers & Andrea Jung & Adam Bystol",
    "aka": "",
    "lives": "Karin and Adam",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/NewfJump.jpg */ "./images/info/NewfJump.jpg"),
    "Titles": [{
      "title": "CGC",
      "date": "05/03/2019",
      "org": "AKC"
    }]
  }, {
    "id": 39,
    "call": "Fable",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "coown": true,
    "stud": false,
    "sex": "female",
    "name": "CH Dreamhaven's Once Upon A Time At Old Bay CGC",
    "sire": "GCHB Old Bay's Perfect Timing",
    "dam": "GCH Old Bay's Snowball's Chance CD",
    "dob": "2018-01-11T05:00:00.000Z",
    "neutered": false,
    "rip": "",
    "owner": "Rachel Teiman & Cindy Flowers & Andrea Jung & Michael Epstein",
    "aka": "",
    "lives": "Rachel and Michael",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Fable.jpg */ "./images/info/Fable.jpg"),
    "Titles": [{
      "title": "CGC",
      "date": "07/25/2018",
      "org": "AKC"
    }, {
      "title": "CH",
      "date": "03/16/2019",
      "org": "AKC"
    }]
  }, {
    "id": 40,
    "call": "Emma",
    "work": true,
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "coown": true,
    "stud": false,
    "sex": "female",
    "name": "GCHB Emalani Of Old Bay CGC, RN, WD",
    "sire": "Topshelfs Israel Kamakawiwoole",
    "dam": "Old Bay's Seasoned With Spice ROM",
    "dob": "2013-05-12T04:00:00.000Z",
    "neutered": false,
    "rip": "",
    "owner": "Kathy Holshey & Cindy Flowers",
    "aka": "",
    "lives": "Kathy Holshey",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Emma.jpg */ "./images/info/Emma.jpg"),
    "Titles": [{
      "title": "CGC",
      "date": "10/26/2014",
      "org": "AKC"
    }, {
      "title": "CH",
      "date": "06/01/2014",
      "org": "AKC"
    }, {
      "title": "GCH",
      "date": "10/25/2014",
      "org": "AKC"
    }, {
      "title": "GCHB",
      "date": "02/20/2016",
      "org": "AKC"
    }, {
      "title": "RN",
      "date": "01/17/2016",
      "org": "AKC"
    }, {
      "title": "WD",
      "date": "08/06/2017",
      "org": "NCA"
    }]
  }, {
    "id": 41,
    "call": "Sigi",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "stud": false,
    "sex": "male",
    "name": "CH Old Bay Because I Can",
    "sire": "CH Top Shelf Troubles A Brewin CD, RN, DD, WD",
    "dam": "BISS GCH CH TOP SHELF SPICED WITH OLD BAY, NJP, RN, DD, ROM",
    "dob": "2008-12-03T05:00:00.000Z",
    "neutered": false,
    "rip": "",
    "owner": "Cindy Flowers & John Flowers",
    "aka": "",
    "lives": "Cindy Flowers & John Flowers",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/NewfJump.jpg */ "./images/info/NewfJump.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "05/29/2010",
      "org": "AKC"
    }]
  }, {
    "id": 42,
    "call": "Sampson",
    "work": true,
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "stud": false,
    "sex": "male",
    "name": "CH Old Bay Forged In Flames RN, WD",
    "sire": "BISS CH SUNVALLEY PETITIONS POUCH COVE, ROM",
    "dam": "GCH OLD BAY'S HELLFROZOVER TOPSHELF THDN ROM",
    "dob": "2008-04-10T04:00:00.000Z",
    "neutered": false,
    "rip": "",
    "owner": "Karin Bystol & Adam Bystol",
    "aka": "",
    "lives": "Karin Bystol & Adam Bystol",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Sampson.jpg */ "./images/info/Sampson.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "11/22/2009",
      "org": "AKC"
    }, {
      "title": "RN",
      "date": "05/05/2015",
      "org": "AKC"
    }, {
      "title": "WD",
      "date": "08/26/2012",
      "org": "NCA"
    }]
  }, {
    "id": 43,
    "call": "Brenden",
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "stud": false,
    "sex": "male",
    "name": "Old Bay Irish Maritime Navigator CGC, CGCA",
    "sire": "GCH Bear N Mind's Maritime Traveler CD, WD1",
    "dam": "BISS GCH CH TOP SHELF SPICED WITH OLD BAY, NJP, RN, DD, ROM",
    "dob": "2010-12-25T05:00:00.000Z",
    "neutered": false,
    "rip": "",
    "owner": "Jessica Regan",
    "aka": "",
    "lives": "Jessica Regan",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/NewfJump.jpg */ "./images/info/NewfJump.jpg"),
    "Titles": [{
      "title": "CGC",
      "date": "10/05/2018",
      "org": "AKC"
    }, {
      "title": "CGCA",
      "date": "09/29/2018",
      "org": "AKC"
    }]
  }, {
    "id": 44,
    "call": "Rudd",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "stud": false,
    "sex": "male",
    "name": "CH Old Bay Screerhum Rudder",
    "sire": "Muddy Creek's Carson",
    "dam": "CH Top Shelfs Cosmopolitan",
    "dob": "2009-06-02T04:00:00.000Z",
    "neutered": false,
    "rip": "",
    "owner": "Mollie Standish & Carlton Standish",
    "aka": "",
    "lives": "Mollie Standish & Carlton Standish",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/NewfJump.jpg */ "./images/info/NewfJump.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "01/22/2011",
      "org": "AKC"
    }]
  }, (_ref = {
    "id": 45,
    "call": "Sonar",
    "wa": true,
    "work": true,
    "toptwenty": "",
    "rom": false,
    "vn": false
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, "wa", true), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, "ours", false), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, "stud", false), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, "sex", "male"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, "name", "WA Old Bay Sonic Wave AXP, CD, CDX, NAP, NJP, OAP, OJP, UD, DD, DDX, TDD3, TDDX, WD, WRD5, WRDX "), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, "sire", "GCH Bear N Mind's Maritime Traveler CD, WD1"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, "dam", "CH Waterford Frontpage"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, "dob", "2009-06-02T04:00:00.000Z"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, "neutered", false), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, "rip", ""), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, "owner", "Christie Smith"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, "aka", ""), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, "lives", "Christie Smith"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, "health", ""), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, "image", __webpack_require__(/*! ../../images/info/NewfJump.jpg */ "./images/info/NewfJump.jpg")), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, "Titles", [{
    "title": "AXP",
    "date": "10/26/2013",
    "org": "AKC"
  }, {
    "title": "CD",
    "date": " 05/05/2012",
    "org": "AKC"
  }, {
    "title": "CDX",
    "date": "02/10/2013",
    "org": "AKC"
  }, {
    "title": "NAP",
    "date": "11/03/2012",
    "org": "AKC"
  }, {
    "title": "NJP",
    "date": "02/15/2013",
    "org": "AKC"
  }, {
    "title": "OAP",
    "date": "03/16/2013",
    "org": "AKC"
  }, {
    "title": "OJP",
    "date": "12/15/2013",
    "org": "AKC"
  }, {
    "title": "UD",
    "date": "02/07/2015",
    "org": "AKC"
  }, {
    "title": "DD",
    "date": "11/17/2012",
    "org": "NCA"
  }, {
    "title": "DDX",
    "date": "04/08/2016",
    "org": "NCA"
  }, {
    "title": "TDD",
    "date": "03/23/2013",
    "org": "NCA"
  }, {
    "title": "TDD",
    "date": "11/14/2015",
    "org": "NCA"
  }, {
    "title": "TDD",
    "date": "11/06/2016",
    "org": "NCA"
  }, {
    "title": "TDDX",
    "date": "11/04/2018",
    "org": "NCA"
  }, {
    "title": "WD",
    "date": "08/27/2011",
    "org": "NCA"
  }, {
    "title": "WRD",
    "date": "08/11/2012",
    "org": "NCA"
  }, {
    "title": "WRD",
    "date": "08/12/2012",
    "org": "NCA"
  }, {
    "title": "WRD",
    "date": "08/25/2012",
    "org": "NCA"
  }, {
    "title": "WRD",
    "date": "08/26/2012",
    "org": "NCA"
  }, {
    "title": "WRD",
    "date": "08/24/2013",
    "org": "NCA"
  }, {
    "title": "WRDX",
    "date": "08/23/2014",
    "org": "NCA"
  }]), _ref), (_ref2 = {
    "id": 46,
    "call": "Spinnaker",
    "wa": true,
    "work": true,
    "toptwenty": "",
    "rom": false
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref2, "wa", true), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref2, "vn", false), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref2, "ours", false), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref2, "stud", false), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref2, "sex", "male"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref2, "name", "WA Old Bay Spinnaker Flyin CD, CDX, RA, RN, DD, DDX, TDD, TDDX, WD, WRD3"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref2, "sire", "CH Powder Ridge's Dreams Come True"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref2, "dam", "Old Bay's Seasoned With Spice ROM"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref2, "dob", "2014-06-01T04:00:00.000Z"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref2, "neutered", true), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref2, "rip", ""), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref2, "owner", "Christie Smith"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref2, "aka", ""), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref2, "lives", "Christie"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref2, "health", ""), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref2, "image", __webpack_require__(/*! ../../images/info/NewfJump.jpg */ "./images/info/NewfJump.jpg")), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref2, "Titles", [{
    "title": "CD",
    "date": "03/15/2015",
    "org": "AKC"
  }, {
    "title": "CDX",
    "date": "11/20/2016",
    "org": "AKC"
  }, {
    "title": "RA",
    "date": "10/27/2018",
    "org": "AKC"
  }, {
    "title": "RN",
    "date": "05/05/2018",
    "org": "AKC"
  }, {
    "title": "DD",
    "date": "11/05/2016",
    "org": "NCA"
  }, {
    "title": "DDX",
    "date": "03/24/2017",
    "org": "NCA"
  }, {
    "title": "TDD",
    "date": "11/06/2016",
    "org": "NCA"
  }, {
    "title": "TDDX",
    "date": "11/04/2018",
    "org": "NCA"
  }, {
    "title": "WD",
    "date": "08/07/2015",
    "org": "NCA"
  }, {
    "title": "WRD",
    "date": "07/24/2016",
    "org": "NCA"
  }, {
    "title": "WRD",
    "date": "08/19/2016",
    "org": "NCA"
  }, {
    "title": "WRD",
    "date": "08/04/2017",
    "org": "NCA"
  }, {
    "title": "WRD",
    "date": "08/06/2017",
    "org": "NCA"
  }]), _ref2), {
    "id": 47,
    "call": "Annie",
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "stud": false,
    "sex": "female",
    "name": "Old Bay's Brewed To Perfection RN",
    "sire": "CH Top Shelf Troubles A Brewin CD, RN, DD, WD",
    "dam": "BISS GCH CH TOP SHELF SPICED WITH OLD BAY, NJP, RN, DD, ROM",
    "dob": "2008-12-03T05:00:00.000Z",
    "neutered": false,
    "rip": "",
    "owner": "Jaclyn Lobur & Rose Miller & Cindy Flowers",
    "aka": "",
    "lives": "Jaclyn Lobur",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/NewfJump.jpg */ "./images/info/NewfJump.jpg"),
    "Titles": [{
      "title": "RN",
      "date": "07/30/2010",
      "org": "AKC"
    }]
  }, {
    "id": 48,
    "call": "Tiffany",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "coown": true,
    "stud": false,
    "sex": "female",
    "name": "CH Old Bay's Charming Gift",
    "sire": "GCH Old Bay's Let's Get Sirius CGC, TDI",
    "dam": "CH Old Bay's Please Don't Squeeze The Charm'n",
    "dob": "2013-12-05T05:00:00.000Z",
    "neutered": false,
    "rip": "",
    "owner": "Rozalin Shun",
    "aka": "",
    "lives": "Rozalin Shun",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Tiffany.JPG */ "./images/info/Tiffany.JPG"),
    "Titles": [{
      "title": "CH",
      "date": "01/17/2015",
      "org": "AKC"
    }]
  }, {
    "id": 49,
    "call": "Luke",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "coown": true,
    "ours": false,
    "stud": false,
    "sex": "female",
    "name": "GCH Old Bay's Cool Hand Luke At Belle Harbour",
    "sire": "Muddy Creek's Carson",
    "dam": "GCH OLD BAY'S HELLFROZOVER TOPSHELF THDN ROM",
    "dob": "2009-06-09T04:00:00.000Z",
    "neutered": false,
    "rip": "",
    "owner": "Dawn Blaine & Cindy Flowers & Becker Reep",
    "aka": "",
    "lives": "Dawn Blaine & Cindy Flowers & Becker Reep",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Luke.jpg */ "./images/info/Luke.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "02/03/2012",
      "org": "AKC"
    }, {
      "title": "GCH",
      "date": "10/24/2014",
      "org": "AKC"
    }]
  }, {
    "id": 50,
    "call": "Jayne",
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "stud": false,
    "sex": "male",
    "name": "Old Bay's Finest Hour THD",
    "sire": "CH Top Shelf Troubles A Brewin CD, RN, DD, WD",
    "dam": "BISS GCH CH TOP SHELF SPICED WITH OLD BAY, NJP, RN, DD, ROM",
    "dob": "2008-12-03T05:00:00.000Z",
    "neutered": false,
    "rip": "",
    "owner": "Bruce Thaeler & Marty Thaeler",
    "aka": "",
    "lives": " Bruce Thaeler & Marty Thaeler",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/NewfJump.jpg */ "./images/info/NewfJump.jpg"),
    "Titles": [{
      "title": "THD",
      "date": "03/10/2012",
      "org": "AKC"
    }]
  }, {
    "id": 51,
    "call": "Evan",
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "stud": false,
    "sex": "male",
    "name": "Old Bay's Fur Heaven's Sake CGCA",
    "sire": "GCHS Sunvalley's Its As Simple As Abc ROM",
    "dam": "CH Old Bay's Raging Infurno",
    "dob": "2014-04-17T04:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Sherry Schaech & Charles Schaech",
    "aka": "",
    "lives": "Sherry Schaech & Charles Schaech",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/NewfJump.jpg */ "./images/info/NewfJump.jpg"),
    "Titles": [{
      "title": "CGC",
      "date": "10/03/2015",
      "org": "AKC"
    }, {
      "title": "CGCA",
      "date": "09/30/2017",
      "org": "AKC"
    }]
  }, {
    "id": 52,
    "call": "Snickers",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "coown": true,
    "stud": false,
    "sex": "male",
    "name": "CH Old Bay's Fursnickity",
    "sire": "VN GCHS Bear N Mind’s Stand Up and Cheer CD, RA, DD1, WRD, CGC",
    "dam": "GCH Old Bay's Lucy Fur ROM",
    "dob": "2012-12-09T05:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Kathleen Hamilton & Cindy Flowers",
    "aka": "",
    "lives": "Cheryl Bandel Wingate",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Snickers.jpg */ "./images/info/Snickers.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "06/08/2014",
      "org": "AKC"
    }]
  }, {
    "id": 53,
    "call": "Allie",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "stud": false,
    "sex": "female",
    "name": "GCH Old Bay's Get My Drift At Powder Ridge",
    "sire": "BISS CH SUNVALLEY PETITIONS POUCH COVE, ROM",
    "dam": "GCH OLD BAY'S HELLFROZOVER TOPSHELF THDN ROM",
    "dob": "2008-04-10T04:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Julia Sharkey & Donald Sharkeys",
    "aka": "",
    "lives": "Julia Sharkey & Donald Sharkey",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Allie.jpg */ "./images/info/Allie.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "01/21/2011",
      "org": "AKC"
    }, {
      "title": "GCH",
      "date": "07/05/2013",
      "org": "AKC"
    }]
  }, {
    "id": 54,
    "call": "Max",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "stud": false,
    "sex": "male",
    "name": "CH Old Bay's Good To The Last Drop",
    "sire": "VN GCH Southwind's Pouch Cove Dark Star CD, RE, TDD, WRD3",
    "dam": "GCH Old Bay's Lucy Fur ROM",
    "dob": "2015-02-04T05:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Jeffrey Totten & Jane Totten",
    "aka": "",
    "lives": "Jeffrey Totten & Jane Totten",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/NewfJump.jpg */ "./images/info/NewfJump.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "05/22/2016",
      "org": "AKC"
    }]
  }, {
    "id": 55,
    "call": "Canyon",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "stud": false,
    "sex": "male",
    "name": "CH Old Bay's Grand Canyon",
    "sire": "BISS CH SUNVALLEY PETITIONS POUCH COVE, ROM",
    "dam": "GCH OLD BAY'S HELLFROZOVER TOPSHELF THDN ROM",
    "dob": "2008-04-10T04:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Linda Boswell & Raymond Boswell",
    "aka": "",
    "lives": "Linda Boswell & Raymond Boswell",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Canyon.jpg */ "./images/info/Canyon.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "01/16/2010",
      "org": "AKC"
    }]
  }, {
    "id": 56,
    "call": "Hagrid",
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "coown": true,
    "ours": false,
    "stud": false,
    "sex": "male",
    "name": "Old Bay's Hagrid Keeper Of Magical Creatures CGC",
    "sire": "GCH Old Bay's Potter As In Harry BN, CD, CGC, RN, RA",
    "dam": "CH Old Bay's Sparks Are Flyin', RN, WD",
    "dob": "2011-09-06T04:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Mollie Standish & Cindy Flowers",
    "aka": "",
    "lives": "Mollie Standish",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/NewfJump.jpg */ "./images/info/NewfJump.jpg"),
    "Titles": [{
      "title": "CGC",
      "date": "10/28/2013",
      "org": "AKC"
    }]
  }, {
    "id": 57,
    "call": "Maggie",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "coown": true,
    "stud": false,
    "sex": "female",
    "name": "CH Old Bay's Handful Of Magic Sparkles",
    "sire": "GCH Old Bay's Potter As In Harry BN, CD, CGC, RN, RA",
    "dam": "CH Old Bay's Sparks Are Flyin', RN, WD",
    "dob": "2011-09-06T04:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Karen Steinrock & Cindy Flowers",
    "aka": "",
    "lives": "Karen Steinrock",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Maggie.jpg */ "./images/info/Maggie.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "11/23/2013",
      "org": "AKC"
    }]
  }, {
    "id": 58,
    "call": "Heffalump",
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "stud": false,
    "sex": "male",
    "name": "Old Bay's Helpful Fun-Loving Marine Panda CGC",
    "sire": "GCH Bear N Mind's Maritime Traveler CD, WD1",
    "dam": "CH Waterford Frontpage'",
    "dob": "2010-10-26T04:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Ms. Marisol Ravicz & Rev. David Wayne Rapier",
    "aka": "",
    "lives": "Ms. Marisol Ravicz & Rev. David Wayne Rapier",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/NewfJump.jpg */ "./images/info/NewfJump.jpg"),
    "Titles": [{
      "title": "CGC",
      "date": "02/24/2013",
      "org": "AKC"
    }]
  }, {
    "id": 59,
    "call": "Atlas",
    "work": true,
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": true,
    "ours": false,
    "coown": true,
    "stud": false,
    "sex": "male",
    "name": "VN Old Bay's Here At Last CD, DD, WRD",
    "sire": "GCH Bear N Mind's Maritime Traveler CD, WD1",
    "dam": "CH Waterford Frontpage'",
    "dob": "2010-10-26T04:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Karin M Bystol & Cindy Flowers & Adam Bystol",
    "aka": "",
    "lives": "Karin and Adam",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Atlas.jpg */ "./images/info/Atlas.jpg"),
    "Titles": [{
      "title": "Versatile Newfoundland",
      "date": "04/29/2016",
      "org": "AKC"
    }, {
      "title": "CD",
      "date": "04/29/2016",
      "org": "AKC"
    }, {
      "title": "CH",
      "date": "07/07/2013",
      "org": "AKC"
    }, {
      "title": "DD",
      "date": "05/04/2014",
      "org": "NCA"
    }, {
      "title": "WD",
      "date": "09/11/2011",
      "org": "NCA"
    }, {
      "title": "WRD",
      "date": "09/08/2013",
      "org": "NCA"
    }]
  }, {
    "id": 60,
    "call": "Jet",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "coown": true,
    "stud": false,
    "sex": "male",
    "name": "CH Old Bay's It's Night Before It's Afternoon",
    "sire": "GCH Old Bay's Let's Get Sirius CGC, TDI",
    "dam": "CH Old Bay's Raging Infurno",
    "dob": "2010-10-26T04:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Lezli Alford & Cindy Flowers & Bennett Alford",
    "aka": "",
    "lives": "Lezli Alford & Bennett Alford",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Jet.jpg */ "./images/info/Jet.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "04/15/2016",
      "org": "AKC"
    }]
  }, {
    "id": 61,
    "call": "Justin",
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "stud": false,
    "sex": "male",
    "name": "Old Bay's Just Like Heaven@Mystic Ridge CGC",
    "sire": "GCHS Sunvalley's Its As Simple As Abc ROM",
    "dam": "CH Old Bay's Raging Infurno",
    "dob": "2010-10-26T04:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Dorothy E Rich",
    "aka": "",
    "lives": "Dorothy E Rich",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/NewfJump.jpg */ "./images/info/NewfJump.jpg"),
    "Titles": [{
      "title": "GCG",
      "date": "09/09/2016",
      "org": "AKC"
    }]
  }, {
    "id": 62,
    "call": "Tate",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "coown": true,
    "stud": false,
    "sex": "male",
    "name": "CH Old Bay's Lead Me To Temptation",
    "sire": "VN GCHS Bear N Mind’s Stand Up and Cheer CD, RA, DD1, WRD, CGC",
    "dam": "GCH Old Bay's Lucy Fur ROM",
    "dob": "2012-12-09T05:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Karen Steinrock & Cindy Flowers",
    "aka": "",
    "lives": "Karen Steinrock",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Tate.jpg */ "./images/info/Tate.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "10/25/2014",
      "org": "AKC"
    }]
  }, {
    "id": 63,
    "call": "Gracie",
    "work": true,
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "coown": true,
    "stud": false,
    "sex": "female",
    "name": "GCH Old Bay's Maroon And Gold Graceful Northern Star BN, CD, CGC, TKN",
    "sire": "CH Old Bay's Lead Me To Temptation",
    "dam": "Old Bay's Seasoned With Spice ROM",
    "dob": "2012-12-09T05:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Mary Jeanne Levitt & Cindy Flowers & Laci Peterson",
    "aka": "",
    "lives": "Mary Jeanne",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Gracie.jpg */ "./images/info/Gracie.jpg"),
    "Titles": [{
      "title": "BN",
      "date": "04/30/2019",
      "org": "AKC"
    }, {
      "title": "CD",
      "date": "05/01/2019",
      "org": "AKC"
    }, {
      "title": "CGC",
      "date": "11/04/2016",
      "org": "AKC"
    }, {
      "title": "CH",
      "date": "12/16/2017",
      "org": "AKC"
    }, {
      "title": "GCH",
      "date": "01/06/2019",
      "org": "AKC"
    }, {
      "title": "TKN",
      "date": "06/03/2019",
      "org": "AKC"
    }]
  }, {
    "id": 64,
    "call": "Muddy",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "coown": true,
    "stud": false,
    "sex": "male",
    "name": "CH Old Bay's Muddy Waters",
    "sire": "Muddy Creek's Carson",
    "dam": "CH Top Shelfs Cosmopolitan",
    "dob": "2012-12-09T05:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Kara Osborne & Cindy Flowers & Bill Osborne",
    "aka": "",
    "lives": "Kara & Bill",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/NewfJump.jpg */ "./images/info/NewfJump.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "10/18/2010",
      "org": "AKC"
    }]
  }, {
    "id": 65,
    "call": "Cosmo",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": true,
    "stud": false,
    "sex": "female",
    "name": "CH Top Shelfs Cosmopolitan",
    "sire": "CH Top Shelf's On The Rocks ROM",
    "dam": "CH Top Shelfs Wild Night Out ROM",
    "dob": "2005-09-26T08:00:00Z",
    "neutered": true,
    "rip": "10/9/2016",
    "owner": "Cindy Flowers",
    "aka": "",
    "lives": "Cindy",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Cosmo.jpg */ "./images/info/Cosmo.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "01/06/2008",
      "org": "AKC"
    }]
  }, {
    "id": 66,
    "call": "Fred",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "coown": true,
    "stud": false,
    "sex": "male",
    "name": "CH Old Bay's Oahu Astaire N At",
    "sire": "CH Topshelfs Israel Kamakawiwoole",
    "dam": "Old Bay's Seasoned With Spice ROM",
    "dob": "2013-05-12T05:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Cindy Flowers & Kathy Hamilton & John Flowers",
    "aka": "",
    "lives": "Palidino's",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Fred.jpg */ "./images/info/Fred.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "03/16/2014",
      "org": "AKC"
    }]
  }, {
    "id": 67,
    "call": "Parker",
    "work": true,
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "coown": true,
    "stud": false,
    "sex": "male",
    "name": "CH Old Bay's Paniolo Bruddah At Ohana WD",
    "sire": "CH Topshelfs Israel Kamakawiwoole",
    "dam": "Old Bay's Seasoned With Spice ROM",
    "dob": "2012-12-09T05:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Vic Strunk & Cindy Flowers & Candi Strunk",
    "aka": "",
    "lives": "Vic & Candi",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Parker.jpg */ "./images/info/Parker.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "05/24/2015",
      "org": "AKC"
    }, {
      "title": "WD",
      "date": "08/09/2014",
      "org": "NCA"
    }]
  }, {
    "id": 68,
    "call": "Charm",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "coown": true,
    "stud": false,
    "sex": "female",
    "name": "GCH Old Bay's Please Don't Squeeze The Charm'n",
    "sire": "GCH Old Bay's Potter As In Harry BN, CD, CGC, RN, RA",
    "dam": "CH Old Bay's Sparks Are Flyin', RN, WD",
    "dob": "2011-09-06T04:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Cindy Flowers & John Flowers & Rosemary S Miller",
    "aka": "",
    "lives": "Nancy Beres",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Charm.jpg */ "./images/info/Charm.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "01/18/2013",
      "org": "AKC"
    }, {
      "title": "GCH",
      "date": "08/02/2013",
      "org": "AKC"
    }]
  }, {
    "id": 70,
    "call": "Potter",
    "work": true,
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "coown": true,
    "stud": false,
    "sex": "male",
    "name": "GCH Old Bay's Potter As In Harry BN, CD, CGC, RN, RA",
    "sire": "BISS CH SUNVALLEY PETITIONS POUCH COVE, ROM",
    "dam": "GCH OLD BAY'S HELLFROZOVER TOPSHELF THDN ROM",
    "dob": "2008-04-10T04:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "CAROL STULTZ & Kathy Hamilton & Cindy Flowers & DANIEL STULTZ",
    "aka": "",
    "lives": "Carol & Dan",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Potter.jpg */ "./images/info/Potter.jpg"),
    "Titles": [{
      "title": "BN",
      "date": "04/22/2013",
      "org": "AKC"
    }, {
      "title": "CD",
      "date": "03/20/2016",
      "org": "AKC"
    }, {
      "title": "CGC",
      "date": "06/04/2014",
      "org": "AKC"
    }, {
      "title": "CH",
      "date": "03/15/2009",
      "org": "AKC"
    }, {
      "title": "GCH",
      "date": "11/28/2010",
      "org": "AKC"
    }, {
      "title": "RA",
      "date": "04/20/2014",
      "org": "AKC"
    }, {
      "title": "RN",
      "date": "04/23/2012",
      "org": "AKC"
    }]
  }, {
    "id": 71,
    "call": "Hank",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "coown": true,
    "stud": false,
    "sex": "male",
    "name": "CH Old Bay's Potters Friend Hank",
    "sire": "GCHS Sunvalley's Its As Simple As Abc ROM",
    "dam": "CH Old Bay's Raging Infurno",
    "dob": "2014-04-17T04:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Carol Dan & Sandy Stultz & Cindy Flowers",
    "aka": "",
    "lives": "Carol & Sandy",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/NewfJump.jpg */ "./images/info/NewfJump.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "10/14/2016",
      "org": "AKC"
    }]
  }, {
    "id": 72,
    "call": "Raven",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "coown": true,
    "stud": false,
    "sex": "female",
    "name": "CH Old Bay's Raven Evermore",
    "sire": "CH Allegiance Rock The Boat Oldbay",
    "dam": "CH Waterford Frontpage",
    "dob": "2010-01-08T05:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Sandra Strassman-Sundy & Cindy Flowers",
    "aka": "",
    "lives": "Sandra",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/NewfJump.jpg */ "./images/info/NewfJump.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "07/04/2013",
      "org": "AKC"
    }]
  }, {
    "id": 73,
    "call": "Ruby",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "coown": true,
    "stud": false,
    "sex": "female",
    "name": "CH Old Bay's RUBY RELAX N WITH OHANA",
    "sire": "CH Topshelfs Israel Kamakawiwoole",
    "dam": "Old Bay's Seasoned With Spice ROM",
    "dob": "2013-05-12T04:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Caollyn Malinowski & Cindy Flowers",
    "aka": "",
    "lives": "Caollyn",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Ruby.jpg */ "./images/info/Ruby.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "01/13/2016",
      "org": "AKC"
    }]
  }, {
    "id": 74,
    "call": "Nutmeg",
    "toptwenty": "",
    "rom": true,
    "vn": false,
    "ours": false,
    "coown": true,
    "stud": false,
    "sex": "female",
    "name": "Old Bay's Seasoned With Spice ROM",
    "sire": "GCH Bear N Mind's Maritime Traveler CD, WD1",
    "dam": "BISS GCH CH TOP SHELF SPICED WITH OLD BAY, NJP, RN, DD, ROM",
    "dob": "2010-12-25T05:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Sue Faulkner & Cindy Flowers",
    "aka": "",
    "lives": "Sue",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Nutmeg.jpg */ "./images/info/Nutmeg.jpg"),
    "Titles": [{
      "title": "Register of Merit",
      "date": "12/31/2016",
      "org": "NCA"
    }]
  }, {
    "id": 76,
    "call": "Sailor",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "coown": true,
    "stud": false,
    "sex": "male",
    "name": "GCH Old Bay's Son Of The Sea",
    "sire": "VN GCH Southwind's Pouch Cove Dark Star CD, RE, TDD, WRD3",
    "dam": "GCH Old Bay's Lucy Fur ROM",
    "dob": "2015-02-04T05:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Cindy Flowers & Kathy Hamilton",
    "aka": "",
    "lives": "Cindy",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Sailor.jpg */ "./images/info/Sailor.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "04/01/2017",
      "org": "AKC"
    }, {
      "title": "GCH",
      "date": "09/23/2017",
      "org": "AKC"
    }]
  }, {
    "id": 77,
    "call": "Cayenne",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "coown": true,
    "stud": false,
    "sex": "female",
    "name": "CH OLD BAY'S SPICIN' IT UP AT BLUWATER",
    "sire": "VN GCH Southwind's Pouch Cove Dark Star CD, RE, TDD, WRD3",
    "dam": "GCH Old Bay's Lucy Fur ROM",
    "dob": "2015-02-04T05:00:00.000Z",
    "neutered": false,
    "rip": "",
    "owner": "Joan Locker-Thuring & Cindy Flowers & Tom Locker-Thuring",
    "aka": "",
    "lives": "Joan & Tom",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/NewfJump.jpg */ "./images/info/NewfJump.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "10/20/2017",
      "org": "AKC"
    }]
  }, {
    "id": 78,
    "call": "Obi",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "coown": true,
    "ours": false,
    "stud": false,
    "sex": "female",
    "name": "CH Old Bay's The Force Is Strong At Dreamhaven CGC",
    "sire": "CH Goldcoast's Keeper Of The Watch",
    "dam": "GCH Old Bay's Snowball's Chance CD",
    "dob": "2017-07-29T04:00:00.000Z",
    "neutered": false,
    "rip": "",
    "owner": "Karin Bystol & Cindy Flowers & Andrea Jung",
    "aka": "",
    "lives": "Karin & Adam",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Obi.jpg */ "./images/info/Obi.jpg"),
    "Titles": [{
      "title": "CGC",
      "date": "05/03/2019",
      "org": "AKC"
    }, {
      "title": "CH",
      "date": "10/27/2018",
      "org": "AKC"
    }]
  }, {
    "id": 79,
    "call": "Dory",
    "work": true,
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "coown": true,
    "stud": false,
    "sex": "male",
    "name": "GCH Old Bay's Theodorable Spicy Altatude BN, CD, RA, RN, DD, WD",
    "sire": "GCH Bear N Mind's Maritime Traveler CD, WD1",
    "dam": "BISS GCH CH TOP SHELF SPICED WITH OLD BAY, NJP, RN, DD, ROM",
    "dob": "2010-12-25T05:00:00.000Z",
    "neutered": false,
    "rip": "",
    "owner": "Stephanie Magid & Cindy Flowers",
    "aka": "",
    "lives": "Stephanie",
    "health": "",
    "image": __webpack_require__(/*! ../../images/dogs/Dory/image1.jpeg */ "./images/dogs/Dory/image1.jpeg"),
    "Titles": [{
      "title": "BN",
      "date": "01/18/2016",
      "org": "AKC"
    }, {
      "title": "CD",
      "date": "08/19/2017",
      "org": "AKC"
    }, {
      "title": "CH",
      "date": "09/21/2014",
      "org": "AKC"
    }, {
      "title": "GCH",
      "date": "08/18/2018",
      "org": "AKC"
    }, {
      "title": "RA",
      "date": "05/04/2019",
      "org": "AKC"
    }, {
      "title": "RN",
      "date": "05/05/2012",
      "org": "AKC"
    }, {
      "title": "DD",
      "date": "02/21/2015",
      "org": "NCA"
    }, {
      "title": "WD",
      "date": "09/16/2016",
      "org": "NCA"
    }]
  }, {
    "id": 80,
    "call": "Sophie",
    "work": true,
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "stud": false,
    "sex": "female",
    "name": "GCH Old Bays Voyage To Nitestar BN, CGC, CGCA, TKI, TKN, DD, WD",
    "sire": "VN GCHS Bear N Mind’s Stand Up and Cheer CD, RA, DD1, WRD, CGC",
    "dam": "GCH Old Bay's Lucy Fur ROM",
    "dob": "2012-12-09T05:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Perri Graf",
    "aka": "",
    "lives": "Perri",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/NewfJump.jpg */ "./images/info/NewfJump.jpg"),
    "Titles": [{
      "title": "BN",
      "date": "04/04/2015",
      "org": "AKC"
    }, {
      "title": "CGC",
      "date": "06/24/2014",
      "org": "AKC"
    }, {
      "title": "CGCA",
      "date": "05/28/2016",
      "org": "AKC"
    }, {
      "title": "CH",
      "date": "01/04/2015",
      "org": "AKC"
    }, {
      "title": "GCH",
      "date": "07/31/2015",
      "org": "AKC"
    }, {
      "title": "TKI",
      "date": "07/12/2018",
      "org": "AKC"
    }, {
      "title": "TKN",
      "date": "07/11/2018",
      "org": "AKC"
    }, {
      "title": "DD",
      "date": "11/04/2018",
      "org": "NCA"
    }, {
      "title": "WD",
      "date": "08/08/2015",
      "org": "NCA"
    }]
  }, {
    "id": 81,
    "call": "Smudge",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "stud": false,
    "sex": "male",
    "name": "CH Old Bay Nightwatch",
    "sire": "Peter Kagan Of Pouch Cove",
    "dam": "Spillway Enuf-M-Ocean",
    "dob": "1990-01-02T05:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Jill M Smithson",
    "aka": "",
    "lives": "Jill",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/NewfJump.jpg */ "./images/info/NewfJump.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "05/17/1992",
      "org": "AKC"
    }]
  }, {
    "id": 82,
    "call": "Finn",
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "stud": false,
    "sex": "male",
    "name": "Sun Valley's Swimming With Finns In Old Bay CGC",
    "sire": "GCHB Old Bay's Perfect Timing",
    "dam": "GCHB Old Bay's Keep It Simple ROM",
    "dob": "2017-06-23T04:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": " Dr. Lori Siracuse-Parker",
    "aka": "",
    "lives": "Lori",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/NewfJump.jpg */ "./images/info/NewfJump.jpg"),
    "Titles": [{
      "title": "CGC",
      "date": "11/12/2018",
      "org": "AKC"
    }]
  }, {
    "id": 83,
    "call": "Annie",
    "work": true,
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "stud": false,
    "sex": "male",
    "name": "CH Old Bay's Annie Of Fairview CD",
    "sire": "Peter Kagan Of Pouch Cove",
    "dam": "Spillway Enuf-M-Ocean",
    "dob": "1989-02-19T05:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Arlene J Dodson & Kathleen Hamilton",
    "aka": "",
    "lives": "Arlene",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/NewfJump.jpg */ "./images/info/NewfJump.jpg"),
    "Titles": [{
      "title": "CD",
      "date": "04/24/1994",
      "org": "AKC"
    }, {
      "title": "CH",
      "date": "02/15/1992",
      "org": "AKC"
    }]
  }, {
    "id": 84,
    "call": "Chimp",
    "work": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "stud": false,
    "sex": "female",
    "name": "Old Bay's Atlanta's Burning CD",
    "sire": "Sherwoods Rosh Of Newton-Ark",
    "dam": "Old Bay's Georgia On My Mind",
    "dob": "1993-08-11T04:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Kathleen Hamilton & Pat Tilson",
    "aka": "",
    "lives": "Kathy & Pat",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/NewfJump.jpg */ "./images/info/NewfJump.jpg"),
    "Titles": [{
      "title": "CD",
      "date": "05/03/2000",
      "org": "AKC"
    }]
  }, {
    "id": 85,
    "call": "Bearie",
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "stud": false,
    "sex": "female",
    "name": "CH Old Bay's Bear Essentials",
    "sire": "Peter Kagan Of Pouch Cove",
    "dam": "Spillway Enuf-M-Ocean",
    "dob": "1993-08-11T04:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Kathleen Hamilton",
    "aka": "",
    "lives": "Kathy",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/NewfJump.jpg */ "./images/info/NewfJump.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "11/04/1990",
      "org": "AKC"
    }]
  }, {
    "id": 86,
    "call": "Charlotte",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "stud": false,
    "sex": "female",
    "name": "CH Old Bay's Charlotte Amalie",
    "sire": "Peppertree's Gem Of Abbyacre",
    "dam": "Muddy Creeks Savannah",
    "dob": "1993-08-11T04:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Margaret A & Kenneth I Speth",
    "aka": "",
    "lives": "Margie & Kenny",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/NewfJump.jpg */ "./images/info/NewfJump.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "05/22/1994",
      "org": "AKC"
    }]
  }, {
    "id": 87,
    "call": "Gambler",
    "work": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "stud": false,
    "sex": "male",
    "name": "Old Bay's Gambling Man CD",
    "sire": "Topmast's Muddy Creek Crocker",
    "dam": "Muddy Creeks Savannah",
    "dob": "1988-04-05T04:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Louie Mays",
    "aka": "",
    "lives": "Louie",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/NewfJump.jpg */ "./images/info/NewfJump.jpg"),
    "Titles": [{
      "title": "CD",
      "date": "04/18/1990",
      "org": "AKC"
    }]
  }, {
    "id": 88,
    "call": "Louie",
    "work": true,
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": true,
    "ours": false,
    "stud": false,
    "sex": "male",
    "name": "VN CH Old Bay's Never Enuf-M-Ocean CD, DD, WRD",
    "sire": "Pouch Cove Muddycreek Chance",
    "dam": "Spillway Enuf-M-Ocean",
    "dob": "1993-08-11T04:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Trish Castell",
    "aka": "",
    "lives": "Trish",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/NewfJump.jpg */ "./images/info/NewfJump.jpg"),
    "Titles": [{
      "title": "Versatile Newfoundland",
      "date": "10/23/1993",
      "org": "NCA"
    }, {
      "title": "CD",
      "date": "03/25/1993",
      "org": "AKC"
    }, {
      "title": "CH",
      "date": "10/23/1993",
      "org": "AKC"
    }, {
      "title": "DD",
      "date": "10/23/1993",
      "org": "NCA"
    }, {
      "title": "WD",
      "date": "10/23/1993",
      "org": "NCA"
    }, {
      "title": "WRD",
      "date": "10/23/1993",
      "org": "NCA"
    }]
  }, {
    "id": 89,
    "call": "Carrie",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "stud": false,
    "sex": "female",
    "name": "CH Old Bay's On A Carousel",
    "sire": "Benhil's Stillwater Gulliverr",
    "dam": "Old Bay's Bear Essentials",
    "dob": "1991-09-25T04:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Kathleen M Hamilton",
    "aka": "",
    "lives": "Kathy",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/NewfJump.jpg */ "./images/info/NewfJump.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "07/03/1993",
      "org": "AKC"
    }]
  }, {
    "id": 90,
    "call": "Henry",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "stud": false,
    "sex": "male",
    "name": "CH Old Bay's Rorshack",
    "sire": "Topmast's Muddy Creek Crocker",
    "dam": "Muddy Creeks Savannah",
    "dob": "1988-04-05T04:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Kathleen M Hamilton",
    "aka": "",
    "lives": "Kathy",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/NewfJump.jpg */ "./images/info/NewfJump.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "03/08/1992",
      "org": "AKC"
    }]
  }, {
    "id": 91,
    "call": "Chaser",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "stud": false,
    "sex": "female",
    "name": "CH Old Bay's Seabreeze Chaser",
    "sire": "Benhil's Stillwater Gulliver",
    "dam": "Old Bay's Bear Essentials",
    "dob": "1988-04-05T04:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Pat Tilson",
    "aka": "",
    "lives": "Pat",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/NewfJump.jpg */ "./images/info/NewfJump.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "11/06/1994",
      "org": "AKC"
    }]
  }, {
    "id": 92,
    "call": "Mischief",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "stud": false,
    "sex": "female",
    "name": "CH Old Bay's Start Of Mischief CD",
    "sire": "Benhil's Stillwater Gulliver",
    "dam": "Old Bay's Bear Essentials",
    "dob": "1988-04-05T04:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Cheryl Reed",
    "aka": "",
    "lives": "Cheryl",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/NewfJump.jpg */ "./images/info/NewfJump.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "12/18/1994",
      "org": "AKC"
    }, {
      "title": "CD",
      "date": "12/11/1994",
      "org": "AKC"
    }]
  }, {
    "id": 93,
    "call": "Bacardi",
    "work": true,
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": true,
    "ours": false,
    "stud": false,
    "sex": "female",
    "name": "VN CH Old Bays Bacardi Of Top Shelf CD, CDX, DD, TDD, WD, WRD",
    "sire": "Pouch Cove's All American Amity",
    "dam": "Old Bay's Bear Essentials",
    "dob": "1993-06-14T04:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Debra Wigal",
    "aka": "",
    "lives": "Deb",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Bacardi.jpg */ "./images/info/Bacardi.jpg"),
    "Titles": [{
      "title": "Versatile Newfoundland",
      "date": "09/07/1997",
      "org": "NCA"
    }, {
      "title": "CD",
      "date": "07/16/1994",
      "org": "AKC"
    }, {
      "title": "CDX",
      "date": "12/01/1996",
      "org": "AKC"
    }, {
      "title": "CH",
      "date": "01/21/1996",
      "org": "AKC"
    }, {
      "title": "Can. CH",
      "date": "01/21/1996",
      "org": "CKC"
    }, {
      "title": "DD",
      "date": "03/25/1997",
      "org": "NCA"
    }, {
      "title": "TDD",
      "date": "10/10/1999",
      "org": "NCA"
    }, {
      "title": "TDD",
      "date": "04/09/2000",
      "org": "NCA"
    }, {
      "title": "WD",
      "date": "09/07/1997",
      "org": "NCA"
    }, {
      "title": "WRD",
      "date": "09/07/1997",
      "org": "NCA"
    }]
  }, {
    "id": 94,
    "call": "Bret",
    "work": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "stud": false,
    "sex": "male",
    "name": "Old Bays Bret Harte CD",
    "sire": "Muddycrk Miles Of Sunvalley",
    "dam": "Muddycreek Old Bays Moonbeam",
    "dob": "1997-11-04T05:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Dr. Lawrence S Lerner & Dr. Narcinda R Lerner",
    "aka": "",
    "lives": "Dr. Lawrence S Lerner & Dr. Narcinda R Lerner",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/NewfJump.jpg */ "./images/info/NewfJump.jpg"),
    "Titles": [{
      "title": "CD",
      "date": "08/19/2000",
      "org": "AKC"
    }]
  }, {
    "id": 95,
    "call": "Bentley",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "stud": false,
    "sex": "male",
    "name": "CH Sir Bentley Of Old Bay",
    "sire": "Pouch Cove's Statesman",
    "dam": "Old Bay's On A Carousel",
    "dob": "1993-11-02T05:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Steven & Mary Stein",
    "aka": "",
    "lives": "Steven",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/NewfJump.jpg */ "./images/info/NewfJump.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "02/17/1996",
      "org": "AKC"
    }]
  }, {
    "id": 96,
    "call": "Tai-Tai",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "stud": false,
    "sex": "female",
    "name": "CH Top Shelf Mai-Tai Of Old Bay",
    "sire": "Blackstone's Percyful James",
    "dam": "Old Bays Bacardi Of Top Shelf",
    "dob": "1993-11-02T05:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Kathleen Hamilton & Pat Tilson",
    "aka": "",
    "lives": "Kathy & Pat",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/NewfJump.jpg */ "./images/info/NewfJump.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "02/20/2000",
      "org": "AKC"
    }]
  }, {
    "id": 97,
    "call": "Mason",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "coown": true,
    "stud": false,
    "sex": "male",
    "name": "CH Allegiance Carved N Stone Oldbay",
    "sire": "CH Top Shelf's On The Rocks ROM",
    "dam": "CH Darbydales Zoo Two",
    "dob": "2006-09-14T04:00:00.000Z",
    "neutered": true,
    "rip": "",
    "owner": "Kathleen Hamilton",
    "aka": "",
    "lives": "Jim",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Mason.jpg */ "./images/info/Mason.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "07/06/2008",
      "org": "AKC"
    }]
  }, {
    "id": 98,
    "call": "Nash",
    "ch": true,
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "coown": false,
    "stud": false,
    "sex": "male",
    "name": "CH Dreamhavens Sum It Up With Old Bay WD",
    "sire": "VN GCH Southwind's Pouch Cove Dark Star CD, RE, TDD, WRD3",
    "dam": "GCHB Old Bay's Keep It Simple ROM",
    "dob": "2018-11-10T05:00:00.000Z",
    "neutered": false,
    "rip": "",
    "owner": "Sue Lynn Morton and Robin Love",
    "aka": "",
    "lives": "Sue Lynn and Robin",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Nash.jpg */ "./images/info/Nash.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "07/06/2008",
      "org": "AKC"
    }]
  }, {
    "id": 99,
    "call": "Cricket",
    "toptwenty": "",
    "rom": false,
    "vn": false,
    "ours": false,
    "coown": false,
    "stud": false,
    "sex": "female",
    "name": "Dreamhavens Wish Upon A Star With Old Bay",
    "sire": "VN GCH Southwind's Pouch Cove Dark Star CD, RE, TDD, WRD3",
    "dam": "GCHB Old Bay's Keep It Simple ROM",
    "dob": "2018-11-10T05:00:00.000Z",
    "neutered": false,
    "rip": "",
    "owner": "Andrea Jung and Cindy Flowers",
    "aka": "",
    "lives": "Andrea",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Cricket.jpg */ "./images/info/Cricket.jpg"),
    "Titles": []
  }, {
    "id": 100,
    "call": "Radar",
    "ch": true,
    "toptwenty": "",
    "ours": false,
    "coown": true,
    "sex": "male",
    "stud": false,
    "name": "CH Sun Valley's Steady Beacon",
    "sire": "GCHB Old Bay's Perfect Timing",
    "dam": "GCHB Old Bay's Keep It Simple ROM",
    "dob": "2017-06-23T04:00:00.000Z",
    "neutered": false,
    "rip": "",
    "owner": "Kathy and Mike Holshey and Cindy Flowers",
    "aka": "",
    "lives": "Mike and Kathy",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Radar.jpg */ "./images/info/Radar.jpg"),
    "Titles": [{
      "title": "CH",
      "date": "03/11/2018",
      "org": "AKC"
    }]
  }, {
    "id": 101,
    "call": "Latte",
    "toptwenty": "",
    "ours": false,
    "stud": false,
    "sex": "female",
    "name": "Old Bay's A Whole Lotta Latte at Starbucks ",
    "sire": "CH Top Shelf Troubles A Brewin CD, RN, DD, WD",
    "dam": "BISS GCH CH TOP SHELF SPICED WITH OLD BAY, NJP, RN, DD, ROM",
    "dob": "2010-12-25T05:00:00.000Z",
    "neutered": false,
    "rip": "",
    "owner": "The Speck Family",
    "aka": "Spark, Sparky, Sparkly, Sparkly-Darkly-Dog",
    "lives": "The Speck Family",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Latte.jpg */ "./images/info/Latte.jpg"),
    "Titles": []
  }, {
    "id": 102,
    "call": "Linus",
    "toptwenty": "",
    "ours": false,
    "stud": false,
    "sex": "female",
    "name": "OLD BAY MAKE N HEAD LINES",
    "sire": "CH Allegiance Rock The Boat Old Bay",
    "dam": "CH Waterford Frontpage ",
    "dob": "2010-01-07T04:00:00.000Z",
    "neutered": false,
    "rip": "",
    "owner": "The Speck Family",
    "aka": "",
    "lives": "The Speck Family",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Linus.jpg */ "./images/info/Linus.jpg"),
    "Titles": []
  }, {
    "id": 103,
    "call": "Bridget",
    "toptwenty": "",
    "ours": false,
    "stud": false,
    "sex": "female",
    "name": "Old BAY BRIDGE TO WATERFORD",
    "sire": "CH Allegiance Rock The Boat Old Bay",
    "dam": "CH Waterford Frontpage ",
    "dob": "2010-01-07T04:00:00.000Z",
    "neutered": false,
    "rip": "",
    "owner": "Jenni and David Arnett",
    "aka": "",
    "lives": "Jenni and David Arnett",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Bridget.jpg */ "./images/info/Bridget.jpg"),
    "Titles": []
  }, {
    "id": 104,
    "call": "Tyler",
    "toptwenty": "",
    "ours": false,
    "stud": false,
    "sex": "female",
    "name": "Old Bays Tip A Canoe And Tyler Too",
    "sire": "CH Allegiance Rock The Boat Old Bay",
    "dam": "CH Waterford Frontpage ",
    "dob": "2010-01-07T04:00:00.000Z",
    "neutered": false,
    "rip": "",
    "owner": "Ray & Linda Boswell & Cindy Flowers",
    "aka": "",
    "lives": "Ray & Linda",
    "health": "",
    "image": __webpack_require__(/*! ../../images/info/Tyler.jpg */ "./images/info/Tyler.jpg"),
    "Titles": []
  }],
  litters: [{
    id: 1,
    parents: "Rhone and Kiss",
    breeders: "Old Bay Newfs - Cindy Flowers and Kathy Hamilton",
    sire: "GCH Chateaunewf'N Nakiska's Legend Of The Stones",
    dam: "GCHB Old Bay's Keep It Simple ROM",
    dob: "2019-11-08T08:00:00Z",
    boys: 0,
    girls: 1,
    puppies: ["Sing"],
    sireimg: __webpack_require__(/*! ../../images/litters/Rhone.jpg */ "./images/litters/Rhone.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Kiss.jpg */ "./images/litters/Kiss.jpg"),
    pupimg: __webpack_require__(/*! ../../images/info/Sing.jpg */ "./images/info/Sing.jpg")
  }, {
    id: 30,
    parents: "Xander and Snowball",
    breeders: "Dreamhaven Newfs - Andrea Jung, Cindy Flowers and Kathy Hamilton",
    sire: "GCHS Oceano Darbydale’s Xecutive Decision",
    dam: "GCHB Old Bay's Snowballs Chance CD",
    dob: "2019-07-01T08:00:00Z",
    boys: 3,
    girls: 0,
    puppies: ["London", "River", "Bosun"],
    sireimg: __webpack_require__(/*! ../../images/litters/Xander.jpg */ "./images/litters/Xander.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Snowball.jpg */ "./images/litters/Snowball.jpg")
  }, {
    id: 2,
    parents: "Crosby and Kiss",
    breeders: "Dreamhaven Newfs - Andrea Jung, Cindy Flowers and Kathy Hamilton",
    sire: "VN GCH Southwind's Pouch Cove Dark Star CD, RE, TDD, WRD3",
    dam: "GCHB Old Bay's Keep It Simple ROM",
    dob: "2018-11-10T08:00:00Z",
    boys: 2,
    girls: 6,
    puppies: ["Charlie", "Cricket", "Essi", "Gossip", "Kindle", "Nash", "Soleil", "Tilly"],
    sireimg: __webpack_require__(/*! ../../images/litters/Crosby.jpg */ "./images/litters/Crosby.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Kiss.jpg */ "./images/litters/Kiss.jpg")
  }, {
    id: 3,
    parents: "Rolex and Snowball",
    breeders: "Dreamhaven Newfs - Andrea Jung, Cindy Flowers and Kathy Hamilton",
    sire: "VN GCH Southwind's Pouch Cove Dark Star CD, RE, TDD, WRD3",
    dam: "GCH Old Bay's Snowballs Chance CD",
    dob: "2018-01-11T08:00:00Z",
    boys: 1,
    girls: 2,
    puppies: ["Ellsa", "Fable", "Maestro"],
    sireimg: __webpack_require__(/*! ../../images/litters/Rolex.jpg */ "./images/litters/Rolex.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Snowball.jpg */ "./images/litters/Snowball.jpg")
  }, {
    id: 4,
    parents: "Jon Snow and Snowball",
    breeders: "Dreamhaven Newfs - Andrea Jung, Cindy Flowers and Kathy Hamilton",
    sire: "CH. GOLDCOASTS KEEPER OF THE WATCH",
    dam: "GCHB Old Bay's Snowballs Chance CD",
    dob: "2017-07-29T08:00:00Z",
    boys: 2,
    girls: 0,
    puppies: ["Obi", "Finn"],
    sireimg: __webpack_require__(/*! ../../images/litters/JonSnow.jpg */ "./images/litters/JonSnow.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Snowball.jpg */ "./images/litters/Snowball.jpg")
  }, {
    id: 5,
    parents: "Rolex and Kiss",
    breeders: "Sunvalley Newfs - Lou Ann Lenner and Cindy Flowers",
    sire: "GCHB Old Bay's Perfect Timing",
    dam: "GCHB Old Bay's Keep It Simple ROM",
    dob: "2018-01-11T08:00:00Z",
    boys: 7,
    girls: 3,
    puppies: ["Maestro", "Radar"],
    sireimg: __webpack_require__(/*! ../../images/litters/Rolex.jpg */ "./images/litters/Rolex.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Kiss.jpg */ "./images/litters/Kiss.jpg")
  }, {
    id: 6,
    parents: "Sirius and Raisin",
    breeders: "Kathy Hamilton and Cindy Flowers",
    sire: "GCH Old Bay's Let's Get Sirius CGC, TDI (HE/L/P/HrC/Cn/Cerf/DNC)",
    dam: "CH Old Bay's Ragin' Infurno  (HG/L/HrC/P/DNA)",
    dob: "2015-02-24T08:00:00Z",
    boys: 3,
    girls: 2,
    puppies: ["Jet - lime boy - Lezli and Bennett Alford", "Karma - raspberry girl - Rose Miller", "Thunder - red boy - Jolene Maschuck Smith (PA)", "Torben- silver boy - Ardys and Lincoln (MD)", "Nessie - purple girl - Rose Miller (VA)"],
    sireimg: __webpack_require__(/*! ../../images/litters/Sirius.jpg */ "./images/litters/Sirius.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Raisin.jpg */ "./images/litters/Raisin.jpg")
  }, {
    id: 7,
    parents: "Tate and Nutmeg",
    breeders: "Cindy Flowers and Sue Faulkner",
    sire: "CH Old Bay's Lead Me To Temptation  ",
    dam: "Old Bay's Seasoned with Spice  ROM",
    dob: "2015-02-23T08:00:00Z",
    boys: 5,
    girls: 1,
    puppies: ["Rolex - purple boy - Cindy Flowers", "Bunbury - RainBest of Winners boy - James Kallmerten (NY)", "Jupiter - gray boy - Colette Chipman - (VA)", "Charlie - green boy - David Leever and Sharon Yost (MD)", "Walter - gold boy - Terri Lewin Gilbert (PA)", "Gracie - Pink girl - Mary Jeanne Levitt (MN)"],
    sireimg: __webpack_require__(/*! ../../images/litters/Tate.jpg */ "./images/litters/Tate.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Nutmeg.jpg */ "./images/litters/Nutmeg.jpg")
  }, {
    id: 8,
    parents: "Crosby and Lucy",
    breeders: "Kathy Hamilton and Cindy Flowers",
    sire: "VN GCH Southwind's Pouch Cove Dark Star CD, RE, TDD, WRD3",
    dam: "GCH CH Old Bay's Lucy Fur CGC, TDI, THDN  ",
    dob: "2015-02-04T08:00:00Z",
    boys: 4,
    girls: 3,
    puppies: ["Flash - purple boy - Anne Nored (NC)", "Sailor - blue boy - (VA)", "Teddy - orange boy - Shawna Rogers-Curns (VA)", "Max - burgundy boy - Jeff and Jane Brueckner Totten (VA)", "Ellie - green girl - John and Juli Paladino (MD)", "Cayenne - yellow girl - Tom and Joan Locker-Thuring (Long Island)", "Snowball - Snowball - Cindy Flowers and Andrea Jung)"],
    sireimg: __webpack_require__(/*! ../../images/litters/Crosby.jpg */ "./images/litters/Crosby.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Lucy.jpg */ "./images/litters/Lucy.jpg")
  }, {
    id: 9,
    parents: "Todd and Charm",
    breeders: "Cindy and John Flowers and Rose Miller",
    sire: "GCHS Sunvalley's Its As Simple As Abc ROM (HG/L/P/HrC/Cn/Cerf)",
    dam: "GCH Old Bay's Please Don't Squeeze The Charm'n CGC, TDI (HF/L/P/CrC/Cn/Cerf/DNA)",
    dob: "2014-11-25T08:00:00Z",
    boys: 3,
    girls: 1,
    puppies: ["Kiss - Cindy and John", "Soloman - black boy - Sue and Andrew", "Frankie - gray boy with white - Judith Janasik (WI)", "Mr. Whipple - Mr. Whipple (LA)"],
    sireimg: __webpack_require__(/*! ../../images/litters/Todd.jpg */ "./images/litters/Todd.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Charm.jpg */ "./images/litters/Charm.jpg")
  }, {
    id: 10,
    parents: "Brodie and Nutmeg",
    breeders: "Cindy Flowers and Julia and Don Sharkey and Sue Faulkner",
    sire: "CH Powder Ridge's Dreams Come True, WD (HG/L/P/DNA)",
    dam: "Old Bay's Seasoned with Spice (HG/L/HrC/P/Eyes/DNA) ",
    dob: "2014-06-01T08:00:00Z",
    boys: 2,
    girls: 0,
    puppies: ["Vail Cruiser - Glenn Lesher", "Spinnaker - blue boy - Christie Smith (VA)"],
    sireimg: __webpack_require__(/*! ../../images/litters/sire.jpg */ "./images/litters/sire.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Nutmeg.jpg */ "./images/litters/Nutmeg.jpg")
  }, {
    id: 11,
    parents: "Todd and Raisin",
    breeders: "Kathy Hamilton and John Borklund and Cindy Flowers",
    sire: "GCHS Sunvalley's Its As Simple As Abc ROM (HG/L/P/HrC/Cn/Cerf)",
    dam: "CH Old Bay's Ragin' Infurno (HG/L/HrC/P/DNA)",
    dob: "2014-04-17T08:00:00Z",
    boys: 4,
    girls: 0,
    puppies: ["Evan", "Hank", "Justin", "Sirius II"],
    sireimg: __webpack_require__(/*! ../../images/litters/Todd.jpg */ "./images/litters/Todd.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Raisin.jpg */ "./images/litters/Raisin.jpg")
  }, {
    id: 12,
    parents: "Sirius and Charm",
    breeders: "Cindy and John Flowers and Rose Miller",
    sire: "GCH Old Bay's Let's Get Sirius CGC, TDI",
    dam: "GCH CH Old Bay's Please Don't Squeeze The Charm'n ",
    dob: "2013-12-05T08:00:00Z",
    boys: 1,
    girls: 1,
    puppies: ["Tiffany", "Sunny"],
    sireimg: __webpack_require__(/*! ../../images/litters/Sirius.jpg */ "./images/litters/Sirius.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Charm.jpg */ "./images/litters/Charm.jpg")
  }, {
    id: 13,
    parents: "Atlas and Miss Flash",
    breeders: "Celtic Cross - Rose Miller and Cindy Flowers and Barbara Plasse",
    sire: "CH Old Bay's Here At Last, WRD",
    dam: "CH Celtic Cross Mischief Managed At Old Bay RN, RA, WD",
    dob: "2013-10-17T08:00:00Z",
    boys: 1,
    girls: 2,
    puppies: [],
    sireimg: __webpack_require__(/*! ../../images/litters/Atlas.jpg */ "./images/litters/Atlas.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Flash.jpg */ "./images/litters/Flash.jpg")
  }, {
    id: 14,
    parents: "Izzy and Nutmeg",
    breeders: "Cindy and John Flowers",
    sire: "CH Top Shelfs Israel Kamakawiwoole CD, DD, CGC, RN",
    dam: "Old Bay's Seasoned with Spice ",
    dob: "2013-05-12T08:00:00Z",
    boys: 2,
    girls: 3,
    puppies: ["Emma", "Fred", "Kasey", "Parker", "Ruby"],
    sireimg: __webpack_require__(/*! ../../images/litters/Izzy.jpg */ "./images/litters/Izzy.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Nutmeg.jpg */ "./images/litters/Nutmeg.jpg")
  }, {
    id: 15,
    parents: "Bravo and Lucy",
    breeders: " Kathy Hamilton and Cindy Flowers",
    sire: "VN GCHS Bear N Mind’s Stand Up and Cheer CD, RA, DD1, WRD, CGC",
    dam: "GCH CH Old Bay's Lucy Fur ",
    dob: "2012-12-09T08:00:00Z",
    boys: 5,
    girls: 3,
    puppies: ["Tate", "Snickers", "Bennie", "Jayden", "Sophie"],
    sireimg: __webpack_require__(/*! ../../images/litters/Bravo.jpg */ "./images/litters/Bravo.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Lucy.jpg */ "./images/litters/Lucy.jpg")
  }, {
    id: 16,
    parents: "Mick and Lucy",
    breeders: "Kathy Hamilton and John Borkland and Cindy Flowers",
    sire: "Ch. Cypress Bay Imat Cornerbrook CGC, TDI",
    dam: "GCH Old Bay's Lucy Fur ROM ",
    dob: "2011-09-10T08:00:00Z",
    boys: 2,
    girls: 6,
    puppies: ["Raisin"],
    sireimg: __webpack_require__(/*! ../../images/litters/Mick.jpg */ "./images/litters/Mick.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Lucy.jpg */ "./images/litters/Lucy.jpg")
  }, {
    id: 17,
    parents: "Potter and Sparkle",
    breeders: "Cindy and John Flowers and Rose Miller",
    sire: "GCH Old Bay's Potter As In Harry BN, CD, CGC, RN, RA'",
    dam: "CH Old Bay's Sparks Are Flyin', RN, WD",
    dob: "2011-09-06T08:00:00Z",
    boys: 4,
    girls: 8,
    puppies: ["General Lee", "Oliver", "Cutter", "Hagrid", "Liebe", "Luna", "Ms. Flash", "Chloe", "Sophie", "Charm", "Maggie"],
    sireimg: __webpack_require__(/*! ../../images/litters/Potter.jpg */ "./images/litters/Potter.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Sparkle.jpg */ "./images/litters/Sparkle.jpg")
  }, {
    id: 18,
    parents: "Lincoln x Allie",
    breeders: "Powder Ridge Newfs - Julia and Don Sharkey and Kathy Hamilton",
    sire: "BIS, BISS, GCH SKIPPER'S EMINENCE KING OF HELLULAND ROM",
    dam: "CH Old Bay Get My Drift At Powder Ridge  ",
    dob: "2011-06-24T08:00:00Z",
    boys: 6,
    girls: 1,
    puppies: [],
    sireimg: __webpack_require__(/*! ../../images/litters/Lincoln.jpg */ "./images/litters/Lincoln.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Allie.jpg */ "./images/litters/Allie.jpg")
  }, {
    id: 19,
    parents: "Travis and Spice",
    breeders: "Cindy and John Flowers",
    sire: "GCH Bear N Mind's Maritime Traveler CD, WD1",
    dam: "BISS GCH CH TOP SHELF SPICED WITH OLD BAY, NJP, RN, DD, ROM",
    dob: "2010-12-25T08:00:00Z",
    boys: 4,
    girls: 4,
    puppies: ["Blitzen", "Brenden", "Dasher", "Dory", "Nutmeg", "Gus", "Latte", "Dancer"],
    sireimg: __webpack_require__(/*! ../../images/litters/Travis.jpg */ "./images/litters/Travis.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Spice.jpg */ "./images/litters/Spice.jpg")
  }, {
    id: 20,
    parents: "Travis and Pharrah",
    breeders: "Cindy Flowers and Dirk Daelmans",
    sire: "GCH Bear N Mind's Maritime Traveler CD, WD1",
    dam: "CH Waterford FrontPage",
    dob: "2010-10-26T08:00:00Z",
    boys: 4,
    girls: 1,
    puppies: ["Atlas", "Heffalump", "Party", "Sirius", "Sonar"],
    sireimg: __webpack_require__(/*! ../../images/litters/Travis.jpg */ "./images/litters/Travis.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Pharrah.jpg */ "./images/litters/Pharrah.jpg")
  }, {
    id: 21,
    parents: "Jimmy and Chilly",
    breeders: "Kathy Hamilton and Cindy Flowers",
    sire: "Select Ch Council Cup's Star of Kodiak Acres RN DD CGC TDI",
    dam: "GCH OLD BAY'S HELLFROZOVER TOPSHELF THDN ROM",
    dob: "2010-04-10T08:00:00Z",
    boys: 1,
    girls: 0,
    puppies: ["Guiness"],
    sireimg: __webpack_require__(/*! ../../images/litters/Jimmy.jpg */ "./images/litters/Jimmy.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Chilly.jpg */ "./images/litters/Chilly.jpg")
  }, {
    id: 22,
    parents: "Dexter and Pharrah",
    breeders: "Cindy Flowers and Dirk Daelman",
    sire: "CH Allegiance Rock The Boat Old Bay",
    dam: "CH Waterford Frontpage ",
    dob: "2010-06-24T08:00:00Z",
    boys: 2,
    girls: 2,
    puppies: ["Bridget", "Raven", "Linus", "Tyler"],
    sireimg: __webpack_require__(/*! ../../images/litters/Dexter.jpg */ "./images/litters/Dexter.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Pharrah.jpg */ "./images/litters/Pharrah.jpg")
  }, {
    id: 23,
    parents: "Carson and Cosmo",
    breeders: "Cindy Flowers and Deb Wigal",
    sire: "Muddy Creek's Carson",
    dam: "CH Top Shelf's Cosmopolitan",
    dob: "2009-06-02T08:00:00Z",
    boys: 3,
    girls: 2,
    puppies: ["Happy", "Muddy", "Reba", "Rudd", "Miss Sunny"],
    sireimg: __webpack_require__(/*! ../../images/litters/Carson.jpg */ "./images/litters/Carson.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Cosmo.jpg */ "./images/litters/Cosmo.jpg")
  }, {
    id: 24,
    parents: "Carson and Chilly",
    breeders: "Kathy Hamilton and Cindy Flowers",
    sire: "Muddy Creek's Carson",
    dam: "GCH OLD BAY'S HELLFROZOVER TOPSHELF THDN ROM",
    dob: "2009-06-09T08:00:00Z",
    boys: 2,
    girls: 1,
    puppies: ["Lucy", "Luke", "Tux"],
    sireimg: __webpack_require__(/*! ../../images/litters/Carson.jpg */ "./images/litters/Carson.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Chilly.jpg */ "./images/litters/Chilly.jpg")
  }, {
    id: 25,
    parents: "Bruce and Spice",
    breeders: "John and Cindy Flowers",
    sire: "CH Top Shelf Troubles A Brewin CD, RN, DD, WD",
    dam: "BISS GCH CH TOP SHELF SPICED WITH OLD BAY, NJP, RN, DD, ROM",
    dob: "2008-12-03T08:00:00Z",
    boys: 5,
    girls: 2,
    puppies: ["Annie", "Cormack", "Jayne", "Maximus", "Mickey", "Nanaimo", "Sparkle"],
    sireimg: __webpack_require__(/*! ../../images/litters/Bruce.jpg */ "./images/litters/Bruce.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Spice.jpg */ "./images/litters/Spice.jpg")
  }, {
    id: 26,
    parents: "Christopher and Chilly",
    breeders: "Kathy Hamilton and Cindy Flowers",
    sire: "BISS CH SUNVALLEY PETITIONS POUCH COVE, ROM",
    dam: "GCH OLD BAY'S HELLFROZOVER TOPSHELF THDN ROM",
    dob: "2008-04-10T08:00:00Z",
    boys: 4,
    girls: 1,
    puppies: ["Allie", "Burnie", "Canyon", "Potter", "Sampson"],
    sireimg: __webpack_require__(/*! ../../images/litters/Christopher.jpg */ "./images/litters/Christopher.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Chilly.jpg */ "./images/litters/Chilly.jpg")
  }, {
    id: 27,
    parents: "Lincoln and Spice",
    breeders: "John and Cindy Flowers",
    sire: "BIS, BISS, GCH SKIPPER'S EMINENCE KING OF HELLULAND ROM",
    dam: "BISS GCH CH TOP SHELF SPICED WITH OLD BAY, NJP, RN, DD, ROM",
    dob: "2008-03-10T08:00:00Z",
    boys: 0,
    girls: 1,
    puppies: ["Sporty"],
    sireimg: __webpack_require__(/*! ../../images/litters/Lincoln.jpg */ "./images/litters/Lincoln.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Spice.jpg */ "./images/litters/Spice.jpg")
  }, {
    id: 28,
    parents: "Rocky and Party",
    breeders: "Top Shelf - Deb Wigal, Cindy Flowers and Kathy Hamilton",
    sire: "CH TOP SHELF'S ON THE ROCKS, ROM",
    dam: "CH TOP SHELF'S WILD NIGHT OUT, ROM",
    dob: "2005-09-26T08:00:00Z",
    boys: 6,
    girls: 4,
    puppies: ["Izzy", "Chilly", "Cosmo", "Jagger", "Ice"],
    sireimg: __webpack_require__(/*! ../../images/litters/Rocky.jpg */ "./images/litters/Rocky.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Party.jpg */ "./images/litters/Party.jpg")
  }, {
    id: 29,
    parents: "Harrison and Daisy",
    breeders: "Cindy Flowers, John Flowers, Nancy Beres and Deb Wigal",
    sire: "BISS CH Numa's Had to Be Pouch Cove ROM",
    dam: "VN CH TOP SHELF'S STAR DAISY, CD, DD, WRD ROM",
    dob: "2002-05-16T08:00:00Z",
    boys: 4,
    girls: 1,
    puppies: ["Opie - Cindy and John", "Rocky - Kathy Hamilton", "Simon - Cindy and John", "Sid - Deb Wigal", "Frankie - Amy Lane"],
    sireimg: __webpack_require__(/*! ../../images/litters/Harrison.jpg */ "./images/litters/Harrison.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Daisy.jpg */ "./images/litters/Daisy.jpg")
  }],
  awards: [{
    rom: true,
    award: "Register of Merit",
    show: "Honored at the 2017 National",
    date: "2016-12-31T08:00:00Z",
    dog: "Nutmeg",
    id: 74,
    image: __webpack_require__(/*! ../../images/info/Nutmeg.jpg */ "./images/info/Nutmeg.jpg")
  }, {
    rom: true,
    award: "Register of Merit",
    show: "Honored at the 20010 National",
    date: "2009-12-31T08:00:00Z",
    dog: "Rocky",
    id: 29,
    image: __webpack_require__(/*! ../../images/info/Rocky.jpg */ "./images/info/Rocky.jpg")
  }, {
    rom: true,
    award: "Register of Merit",
    show: "Honored at the 2017 National",
    date: "2016-12-31T08:00:00Z",
    dog: "Daisy",
    id: 21,
    image: __webpack_require__(/*! ../../images/info/Daisy.jpg */ "./images/info/Daisy.jpg")
  }, {
    rom: true,
    award: "Register of Merit",
    show: "Honored at the 2013 National",
    date: "2012-12-31T08:00:00Z",
    dog: "Chilly",
    id: 18,
    image: __webpack_require__(/*! ../../images/info/Chilly.jpg */ "./images/info/Chilly.jpg")
  }, {
    rom: true,
    award: "Register of Merit",
    show: "Honored at the 2016 National",
    date: "2015-12-31T08:00:00Z",
    dog: "Carson",
    id: 15,
    image: __webpack_require__(/*! ../../images/info/Carson.jpg */ "./images/info/Carson.jpg")
  }, {
    rom: true,
    award: "Register of Merit",
    show: "Honored at the 2017 National",
    date: "2016-12-31T08:00:00Z",
    dog: "Lucy",
    id: 9,
    image: __webpack_require__(/*! ../../images/info/Lucy.jpg */ "./images/info/Lucy.jpg")
  }, {
    toptwenty: true,
    award: "2017 Top Twenty",
    show: "Honored at the 2018 National",
    date: "2017-12-31T08:00:00Z",
    dog: "Rolex",
    id: 4,
    image: __webpack_require__(/*! ../../images/info/Rolex.jpg */ "./images/info/Rolex.jpg")
  }, {
    award: "2018 Top Twenty",
    toptwenty: true,
    show: "Honored at the 2019 National",
    date: "2018-12-31T08:00:00Z",
    dog: "Kiss",
    id: 9,
    image: __webpack_require__(/*! ../../images/info/Kiss.jpg */ "./images/info/Kiss.jpg")
  }, {
    rom: true,
    award: "Register of Merit *Pending",
    show: "To Be Honored at the 2020 National",
    date: "2019-12-31T08:00:00Z",
    dog: "Kiss",
    id: 9,
    image: __webpack_require__(/*! ../../images/info/Kiss.jpg */ "./images/info/Kiss.jpg")
  }, {
    toptwenty: true,
    award: "2018 Top Twenty",
    show: "Honored at the 2019 National",
    date: "2018-12-31T08:00:00Z",
    dog: "Flash",
    id: 11,
    image: __webpack_require__(/*! ../../images/info/Flash.jpg */ "./images/info/Flash.jpg")
  }, {
    award: "Best of Breed",
    show: "2015 National",
    date: "2015-12-31T08:00:00Z",
    dog: "Carson",
    id: 12,
    image: __webpack_require__(/*! ../../images/info/Carson.jpg */ "./images/info/Carson.jpg")
  }, {
    rom: true,
    award: "Register of Merit",
    show: "Honored at the 2017 National",
    date: "2016-12-31T08:00:00Z",
    dog: "Spice",
    id: 15,
    image: __webpack_require__(/*! ../../images/info/Spice.jpg */ "./images/info/Spice.jpg")
  }, {
    toptwenty: true,
    award: "2010 Top Twenty",
    show: "Honored at the 2011 National",
    date: "2010-12-31T08:00:00Z",
    dog: "Spice",
    id: 15,
    image: __webpack_require__(/*! ../../images/info/Spice.jpg */ "./images/info/Spice.jpg")
  }, {
    award: "2010 Top Show Bitch",
    show: "Honored at the 2011 National",
    date: "2010-12-31T08:00:00Z",
    dog: "Spice",
    id: 15,
    image: __webpack_require__(/*! ../../images/info/Spice.jpg */ "./images/info/Spice.jpg")
  }, {
    toptwenty: true,
    award: "2012 Top Twenty",
    show: "Honored at the 2013 National",
    date: "2012-12-31T08:00:00Z",
    dog: "Spice",
    id: 15,
    image: __webpack_require__(/*! ../../images/info/Spice.jpg */ "./images/info/Spice.jpg")
  }, {
    toptwenty: true,
    award: "2004 Top Twenty",
    show: "Honored at the 2005 National",
    date: "2004-12-31T08:00:00Z",
    dog: "Opie",
    id: 24,
    image: __webpack_require__(/*! ../../images/info/Opie.jpg */ "./images/info/Opie.jpg")
  }, {
    toptwenty: true,
    award: "2005 Top Twenty",
    show: "Honored at the 2006 National",
    date: "2005-12-31T08:00:00Z",
    dog: "Opie",
    id: 24,
    image: __webpack_require__(/*! ../../images/info/Opie.jpg */ "./images/info/Opie.jpg")
  }, {
    toptwenty: true,
    award: "2006 Top Twenty",
    show: "Honored at the 2007 National",
    date: "2006-12-31T08:00:00Z",
    dog: "Rocky",
    id: 29,
    image: __webpack_require__(/*! ../../images/info/Rocky.jpg */ "./images/info/Rocky.jpg")
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Flash2019AKCChampionship.jpg */ "./images/specialties/Flash2019AKCChampionship.jpg"),
    award: "Award of Exellence",
    show: "AKC Royal Canin National Dog Show",
    date: "2019-12-15T08:00:00Z",
    dog: "Flash",
    id: 11
  }, {
    image: __webpack_require__(/*! ../../images/specialties/NashSENC2019.jpg */ "./images/specialties/NashSENC2019.jpg"),
    award: "Best of Winners, 1st 9-12 puppy",
    show: "2019 SENC Regional",
    date: "2019-07-28T08:00:00Z",
    dog: "Nash",
    id: 98
  }, {
    image: __webpack_require__(/*! ../../images/specialties/NashSENC2019BOW.png */ "./images/specialties/NashSENC2019BOW.png"),
    award: "Best of Winners, 1st 9-12 puppy",
    show: "2019 SENC Regional",
    date: "2019-07-27T08:00:00Z",
    dog: "Nash",
    id: 98
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Nash2019AKCChampionship.jpg */ "./images/specialties/Nash2019AKCChampionship.jpg"),
    award: "Best of Winners, 1st 12-18 dog",
    show: " AKC Royal Canin National Dog Show",
    date: "2019-12-15T08:00:00Z",
    dog: "Nash",
    id: 98
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Nash2019AKCChampionship.jpg */ "./images/specialties/Nash2019AKCChampionship.jpg"),
    award: "Best of Winners, 1st 12-18 dog",
    show: " AKC Royal Canin National Dog Show",
    date: "2019-12-15T08:00:00Z",
    dog: "Nash",
    id: 98
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Nash2019AKCChampionship2.jpg */ "./images/specialties/Nash2019AKCChampionship2.jpg"),
    award: "Best of Breed",
    show: "AKC/Royal Canin National All-Breed Puppy & Junior Stakes",
    date: "2019-12-13T08:00:00Z",
    dog: "Nash",
    id: 98
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Flash2019WorkingSpecialty.jpg */ "./images/specialties/Flash2019WorkingSpecialty.jpg"),
    award: "Best of Breed",
    show: "Central Florida Working Group",
    date: "2019-12-13T08:00:00Z",
    dog: "Flash",
    id: 11
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Nash8Months.jpg */ "./images/specialties/Nash8Months.jpg"),
    award: "Best of Winners",
    show: "Central Florida Working Group",
    date: "2019-12-13T08:00:00Z",
    dog: "Nash",
    id: 98
  }, {
    image: __webpack_require__(/*! ../../images/specialties/KindleCNC2019BOS.jpg */ "./images/specialties/KindleCNC2019BOS.jpg"),
    award: "Best of Opposite Sex",
    show: "CNC Regional",
    date: "2019-10-27T08:00:00Z",
    dog: "Kindle",
    id: 31
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Cricket.jpg */ "./images/specialties/Cricket.jpg"),
    award: "RWB, 1st 9-12 bitch",
    show: "CNC Regional",
    date: "2019-10-27T08:00:00Z",
    dog: "Cricket",
    id: 99
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Kindle.jpg */ "./images/specialties/Kindle.jpg"),
    award: "Best in Sweepstakes",
    show: "CNC Regional",
    date: "2019-10-27T08:00:00Z",
    dog: "Kindle",
    id: 31
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Kindle2019CNCRegional.jpg */ "./images/specialties/Kindle2019CNCRegional.jpg"),
    award: "Winners Bitch, 1st 9-12 bitch and Best in Sweepstakes",
    show: "CNC Regional",
    date: "2019-10-26T08:00:00Z",
    dog: "Kindle",
    id: 31
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Cricket2019CNCRegional.jpg */ "./images/specialties/Cricket2019CNCRegional.jpg"),
    award: "2nd 9-12 bitch",
    show: "CNC Regional",
    date: "2019-10-26T08:00:00Z",
    dog: "Cricket",
    id: 99
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Kindle7Months.jpg */ "./images/specialties/Kindle7Months.jpg"),
    award: "Best in Sweepstakes",
    show: "CNC Supported Entry",
    date: "2019-10-25T08:00:00Z",
    dog: "Kindle",
    id: 31
  }, {
    image: __webpack_require__(/*! ../../images/specialties/FlashBOS2019SENC.jpg */ "./images/specialties/FlashBOS2019SENC.jpg"),
    award: "Best of Opposite Sex",
    show: "SENC Regional",
    date: "2019-07-28T08:00:00Z",
    dog: "Flash",
    id: 11
  }, {
    image: __webpack_require__(/*! ../../images/specialties/FlashBOB2019SENC.jpg */ "./images/specialties/FlashBOB2019SENC.jpg"),
    award: "Best of Breed",
    show: "SENC Regional",
    date: "2019-07-27T08:00:00Z",
    dog: "Flash",
    id: 11
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Snowball2019National2ndBroodBitch.jpg */ "./images/specialties/Snowball2019National2ndBroodBitch.jpg"),
    award: "2nd Brood Bitch",
    show: "2019 National",
    date: "2019-05-03T08:00:00Z",
    dog: "Snowball",
    id: 10
  }, {
    image: __webpack_require__(/*! ../../images/specialties/KindleBestPuppy.jpg */ "./images/specialties/KindleBestPuppy.jpg"),
    award: "Best Baby Puppy",
    show: "2019 National",
    date: "2019-04-30T08:00:00Z",
    dog: "Kindle",
    id: 31
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Nash2019NationalBOSPuppy.jpg */ "./images/specialties/Nash2019NationalBOSPuppy.jpg"),
    award: "Best Opposite Sex Baby Puppy",
    show: "2019 National",
    date: "2019-04-30T08:00:00Z",
    dog: "Nash",
    id: 98
  }, {
    image: __webpack_require__(/*! ../../images/specialties/ObiAndSnowball2019Brace.jpg */ "./images/specialties/ObiAndSnowball2019Brace.jpg"),
    award: "3rd Brace",
    show: "2019 National",
    date: "2019-04-30T08:00:00Z",
    dog: "Obi and Snowball"
  }, {
    image: __webpack_require__(/*! ../../images/specialties/AtlasAndObiBrace2019.jpg */ "./images/specialties/AtlasAndObiBrace2019.jpg"),
    award: "3rd Brace",
    show: "2014 National",
    date: "2014-04-05T08:00:00Z",
    dog: "Atlas and Obi"
  }, {
    image: __webpack_require__(/*! ../../images/specialties/GracieObedience.jpg */ "./images/specialties/GracieObedience.jpg"),
    award: "2nd Beginner Novice A, 2nd Novice A, 3rd Novice A, 1st Beginner Novice A",
    show: "2019 National",
    date: "2019-04-30T08:00:00Z",
    dog: "Gracie",
    id: 63
  }, {
    image: __webpack_require__(/*! ../../images/specialties/GracieLaci.jpg */ "./images/specialties/GracieLaci.jpg"),
    award: "BOS/WB (morning), Select & Best Junior Handler with Laci Peterson (afternoon)",
    show: "Specialty",
    date: "2017-12-18T08:00:00Z",
    dog: "Gracie",
    id: 63
  }, {
    image: __webpack_require__(/*! ../../images/specialties/GracieLisa.jpg */ "./images/specialties/GracieLisa.jpg"),
    award: "BOS/WB (morning), Select (afternoon)",
    show: "Specialty",
    date: "2017-12-17T08:00:00Z",
    dog: "Gracie",
    id: 63
  }, {
    image: __webpack_require__(/*! ../../images/specialties/FlashNewPenDelBOS.jpg */ "./images/specialties/FlashNewPenDelBOS.jpg"),
    award: "Best of Opposite Sex",
    show: "NewPenDel Regional",
    date: "2019-03-16T08:00:00Z",
    dog: "Flash",
    id: 11
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Maestro2018BOSinSweeps.jpg */ "./images/specialties/Maestro2018BOSinSweeps.jpg"),
    award: "Best Opposite Sex Sweepstakes, 14 months old",
    show: "NewPenDel Regional",
    date: "2019-03-17T08:00:00Z",
    dog: "Maestro",
    id: 6
  }, {
    image: __webpack_require__(/*! ../../images/specialties/FableNewPenDelWB.jpg */ "./images/specialties/FableNewPenDelWB.jpg"),
    award: "Winners Bitch, 1st Bred By",
    show: "NewPenDel Regional",
    date: "2019-03-16T08:00:00Z",
    dog: "Fable",
    id: 39
  }, {
    image: __webpack_require__(/*! ../../images/specialties/MaestroBestOppInSweeps.jpg */ "./images/specialties/MaestroBestOppInSweeps.jpg"),
    award: "Best Opposite Sex Sweepstakes, 14 months old",
    show: "NewPenDel Regional",
    date: "2019-03-16T08:00:00Z",
    dog: "Maestro",
    id: 6
  }, {
    image: __webpack_require__(/*! ../../images/specialties/DoryVeteran.jpg */ "./images/specialties/DoryVeteran.jpg"),
    award: "Best Veteran",
    show: "High County Newfoundland Club",
    date: "2018-11-08T08:00:00Z",
    dog: "Dory",
    id: 79
  }, {
    image: __webpack_require__(/*! ../../images/specialties/KissGroupFirst.jpg */ "./images/specialties/KissGroupFirst.jpg"),
    award: "Select",
    show: "NCNE Supported Entry - morning",
    date: "2018-03-03T08:00:00Z",
    dog: "Kiss",
    id: 9
  }, {
    image: __webpack_require__(/*! ../../images/specialties/MetroNCNE.jpg */ "./images/specialties/MetroNCNE.jpg"),
    award: "5 point major, Best of Winners/WD, Best in Sweeps, BOBOH, and Best Puppy",
    show: "NCNE Supported Entry - afternoon",
    date: "2018-03-03T08:00:00Z",
    dog: "Metronome",
    id: 5
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Radar.jpg */ "./images/specialties/Radar.jpg"),
    award: "3 point major, WD",
    show: "NCNE Supported Entry - morning",
    date: "2018-03-03T08:00:00Z",
    dog: "Radar",
    id: 100
  }, {
    image: __webpack_require__(/*! ../../images/specialties/KissGroup4.jpg */ "./images/specialties/KissGroup4.jpg"),
    award: "Select",
    show: "NCNE Supported Entry - afternoon",
    date: "2018-03-03T08:00:00Z",
    dog: "Kiss",
    id: 9
  }, {
    image: __webpack_require__(/*! ../../images/specialties/KissFamily.jpg */ "./images/specialties/KissFamily.jpg"),
    award: "Award of Merit",
    show: "NCNE Supported Entry",
    date: "2018-03-04T08:00:00Z",
    dog: "Kiss",
    id: 9
  }, {
    image: __webpack_require__(/*! ../../images/specialties/RadarPuppy.jpg */ "./images/specialties/RadarPuppy.jpg"),
    award: "4 point major, Best of Winners/WD",
    show: "NCNE Supported Entry",
    date: "2018-03-04T08:00:00Z",
    dog: "Radar",
    id: 100
  }, {
    image: __webpack_require__(/*! ../../images/specialties/KissSelect (2).jpg */ "./images/specialties/KissSelect (2).jpg"),
    award: "Select",
    show: "New Pen Del Regional ",
    date: "2018-03-17T08:00:00Z",
    dog: "Kiss",
    id: 9
  }, {
    image: __webpack_require__(/*! ../../images/specialties/FlashSelectNewPenDel.jpg */ "./images/specialties/FlashSelectNewPenDel.jpg"),
    award: "Select",
    show: "New Pen Del Regional ",
    date: "2018-03-18T08:00:00Z",
    dog: "Flash",
    id: 11
  }, {
    image: __webpack_require__(/*! ../../images/specialties/RolexNationalSelect.jpg */ "./images/specialties/RolexNationalSelect.jpg"),
    award: "NCA Select Dog",
    show: "2018 National",
    date: "2018-05-05T08:00:00Z",
    dog: "Rolex",
    id: 4
  }, {
    image: __webpack_require__(/*! ../../images/specialties/MetroBestOppSweeps.jpg */ "./images/specialties/MetroBestOppSweeps.jpg"),
    award: "Best of Opposite in Sweepstakes from 9-12 puppy",
    show: "2018 National",
    date: "2018-05-05T08:00:00Z",
    dog: "Metronome",
    id: 5
  }, {
    image: __webpack_require__(/*! ../../images/specialties/MetroFirstNational.jpg */ "./images/specialties/MetroFirstNational.jpg"),
    award: "1st in Regular Classes 9-12 puppy dog",
    show: "2018 National",
    date: "2018-05-05T08:00:00Z",
    dog: "Metronome",
    id: 5
  }, {
    image: __webpack_require__(/*! ../../images/specialties/KissFirstBroodBitch.jpg */ "./images/specialties/KissFirstBroodBitch.jpg"),
    award: "1st in Brood Bitch",
    show: "2018 National",
    date: "2018-05-05T08:00:00Z",
    dog: "Kiss",
    id: 9
  }, {
    image: __webpack_require__(/*! ../../images/specialties/2018NationalTeam.jpg */ "./images/specialties/2018NationalTeam.jpg"),
    award: "1st Team",
    show: "2018 National",
    date: "2018-05-05T08:00:00Z",
    dog: "Kiss, Metro, Rolex, Radar"
  }, {
    image: __webpack_require__(/*! ../../images/specialties/RolexNationalStudDog.jpg */ "./images/specialties/RolexNationalStudDog.jpg"),
    award: "4th Stud Dog",
    show: "2018 National",
    date: "2018-05-05T08:00:00Z",
    dog: "Rolex",
    id: 4
  }, {
    image: __webpack_require__(/*! ../../images/specialties/ObiNationals.jpg */ "./images/specialties/ObiNationals.jpg"),
    award: "3rd in 9-12 Sweepstakes",
    show: "2018 National",
    date: "2018-05-05T08:00:00Z",
    dog: "Obi",
    id: 78
  }, {
    image: __webpack_require__(/*! ../../images/specialties/NemoBearMountainSweepsBOS.jpg */ "./images/specialties/NemoBearMountainSweepsBOS.jpg"),
    award: "BOS Sweepstakes / 1st 6-9 puppy dog",
    show: "Bear Mountain Supported Entry",
    date: "2018-06-22T08:00:00Z",
    dog: "Nemo",
    id: 7
  }, {
    image: __webpack_require__(/*! ../../images/specialties/NemoTenn.jpg */ "./images/specialties/NemoTenn.jpg"),
    award: "1st 6-9 puppy dog sweeps and regular",
    show: "Bear Mountain Regional Specialty",
    date: "2018-06-23T08:00:00Z",
    dog: "Nemo",
    id: 7
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Kiss.jpg */ "./images/specialties/Kiss.jpg"),
    award: "BOBOH",
    show: "Bear Mountain Regional Specialty",
    date: "2018-06-23T08:00:00Z",
    dog: "Kiss",
    id: 9
  }, {
    image: __webpack_require__(/*! ../../images/specialties/NemoTenn.jpg */ "./images/specialties/NemoTenn.jpg"),
    award: "RWD / 1st 6-9 puppy dog sweeps and regular",
    show: "Bear Mountain Regional Specialty",
    date: "2018-06-24T08:00:00Z",
    dog: "Nemo",
    id: 7
  }, {
    image: __webpack_require__(/*! ../../images/specialties/KissFB.jpg */ "./images/specialties/KissFB.jpg"),
    award: "BOBOH",
    show: "Bear Mountain Regional Specialty",
    date: "2018-06-24T08:00:00Z",
    dog: "Kiss",
    id: 9
  }, {
    image: __webpack_require__(/*! ../../images/specialties/SnowballBOS2018July28.jpg */ "./images/specialties/SnowballBOS2018July28.jpg"),
    award: "Best of Opposite Sex",
    show: "SENC Regional",
    date: "2018-07-28T08:00:00Z",
    dog: "Snowball",
    id: 10
  }, {
    image: __webpack_require__(/*! ../../images/specialties/SnowballBOS2018July29.jpg */ "./images/specialties/SnowballBOS2018July29.jpg"),
    award: "Best of Opposite Sex",
    show: "SENC Regional",
    date: "2018-07-29T08:00:00Z",
    dog: "Snowball",
    id: 10
  }, {
    image: __webpack_require__(/*! ../../images/specialties/maestro4-6GroupFirst.jpg */ "./images/specialties/maestro4-6GroupFirst.jpg"),
    award: "1st 6-9 Sweeps",
    show: "SENC Regional",
    date: "2018-07-28T08:00:00Z",
    dog: "Maestro",
    id: 6
  }, {
    image: __webpack_require__(/*! ../../images/specialties/MaestroBIS4-6Puppy.jpg */ "./images/specialties/MaestroBIS4-6Puppy.jpg"),
    award: "1st 6-9 Sweeps / 2nd 6-9 Regular",
    show: "SENC Regional",
    date: "2018-07-28T08:00:00Z",
    dog: "Maestro",
    id: 6
  }, {
    image: __webpack_require__(/*! ../../images/specialties/FlashCNCBestofBreed.jpg */ "./images/specialties/FlashCNCBestofBreed.jpg"),
    award: "Best of Breed",
    show: "CNC Regional",
    date: "2018-10-27T08:00:00Z",
    dog: "Flash",
    id: 11
  }, {
    image: __webpack_require__(/*! ../../images/specialties/FlashSelectNewPenDel.jpg */ "./images/specialties/FlashSelectNewPenDel.jpg"),
    award: "Select",
    show: "CNC Regional",
    date: "2018-10-26T08:00:00Z",
    dog: "Flash",
    id: 11
  }, {
    image: __webpack_require__(/*! ../../images/specialties/ObiBestInSweeps2.jpg */ "./images/specialties/ObiBestInSweeps2.jpg"),
    award: "BOBOH",
    show: "CNC Regional",
    date: "2018-10-27T08:00:00Z",
    dog: "Obi",
    id: 78
  }, {
    image: __webpack_require__(/*! ../../images/specialties/ObiBestofWinners.jpg */ "./images/specialties/ObiBestofWinners.jpg"),
    award: "Best of Winners and Best in Sweeps - 14 months",
    show: "CNC Regional",
    date: "2018-10-26T08:00:00Z",
    dog: "Obi",
    id: 78
  }, {
    image: __webpack_require__(/*! ../../images/specialties/ObiBestInSweeps.jpg */ "./images/specialties/ObiBestInSweeps.jpg"),
    award: "Best of Winners and Best in Sweeps - 14 months",
    show: "CNC Supported Entry",
    date: "2018-10-25T08:00:00Z",
    dog: "Obi",
    id: 78
  }, {
    image: __webpack_require__(/*! ../../images/specialties/FableBestofWinners.jpg */ "./images/specialties/FableBestofWinners.jpg"),
    award: "Best of Winners, WB, 1st 9-12",
    show: "CNC Regional",
    date: "2018-10-27T08:00:00Z",
    dog: "Fable",
    id: 39
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Flash2018AKCBestNOAH.jpg */ "./images/specialties/Flash2018AKCBestNOAH.jpg"),
    award: "Best of Breed",
    show: "National Owner Handled Series Finals",
    date: "2018-12-15T08:00:00Z",
    dog: "Flash",
    id: 11
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Maestro 2019 National.jpg */ "./images/specialties/Maestro 2019 National.jpg"),
    award: "Best Bred-By Exhibitor",
    show: "AKC National Championship",
    date: "2018-12-15T08:00:00Z",
    dog: "Maestro",
    id: 6
  }, {
    image: __webpack_require__(/*! ../../images/specialties/FlashAKCjam.jpg */ "./images/specialties/FlashAKCjam.jpg"),
    award: "Award of Exellence",
    show: "2018 AKC National Championship",
    date: "2018-12-15T08:00:00Z",
    dog: "Flash",
    id: 11
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Rolex2018AKCChampionship.jpg */ "./images/specialties/Rolex2018AKCChampionship.jpg"),
    award: "Award of Excellence",
    show: "Eukanuba AKC National Championships",
    date: "2017-12-15T08:00:00Z",
    dog: "Rolex",
    id: 4
  }, {
    image: __webpack_require__(/*! ../../images/specialties/MaestroSarah.jpg */ "./images/specialties/MaestroSarah.jpg"),
    award: "Best of Breed",
    show: "AKC National Puppy & Junior Stakes",
    date: "2018-12-15T08:00:00Z",
    dog: "Maestro",
    id: 6
  }, {
    image: __webpack_require__(/*! ../../images/specialties/SparkleCNCVeteran.jpg */ "./images/specialties/SparkleCNCVeteran.jpg"),
    award: "Best Opposite Veteran Sweeps, 1st 7-9 Veteran Sweeps",
    show: "CNC Regional ",
    date: "2017-10-29T08:00:00Z",
    dog: "Sparkle",
    id: 13
  }, {
    image: __webpack_require__(/*! ../../images/specialties/SparkleCNCRegional.jpg */ "./images/specialties/SparkleCNCRegional.jpg"),
    award: "Best Opposite Veteran Sweeps, 1st 7-9 Veteran Sweeps",
    show: "CNC Regional ",
    date: "2017-10-30T08:00:00Z",
    dog: "Sparkle",
    id: 13
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Sirius.JPG */ "./images/specialties/Sirius.JPG"),
    award: "Select Dog",
    show: "CNC Supported Entry ",
    date: "2017-10-28T08:00:00Z",
    dog: "Sirius",
    id: 1
  }, {
    image: __webpack_require__(/*! ../../images/specialties/SparkleCanada.jpg */ "./images/specialties/SparkleCanada.jpg"),
    award: "Best Veteran Female ",
    show: "Canadian Regional Specialty",
    date: "2017-09-03T08:00:00Z",
    dog: "Sparkle",
    id: 13
  }, {
    image: __webpack_require__(/*! ../../images/specialties/RolexCanada.jpg */ "./images/specialties/RolexCanada.jpg"),
    award: "2nd Open Dog",
    show: "Canadian Regional Specialty",
    date: "2017-09-03T08:00:00Z",
    dog: "Rolex",
    id: 4
  }, {
    image: __webpack_require__(/*! ../../images/specialties/SparkleCanada (2).jpg */ "./images/specialties/SparkleCanada (2).jpg"),
    award: "Best Veteran Female ",
    show: "Canadian National Specialty ",
    date: "2017-09-02T08:00:00Z",
    dog: "Sparkle",
    id: 13
  }, {
    image: __webpack_require__(/*! ../../images/specialties/RolexCanada2.jpg */ "./images/specialties/RolexCanada2.jpg"),
    award: "Reserve Winners Dog/1st Open Dog",
    show: "Canadian National Specialty ",
    date: "2017-09-02T08:00:00Z",
    dog: "Rolex",
    id: 4
  }, {
    image: __webpack_require__(/*! ../../images/specialties/KissFB.jpg */ "./images/specialties/KissFB.jpg"),
    award: "BOS/BOBOH",
    show: "New Pen Del Supported",
    date: "2017-03-17T08:00:00Z",
    dog: "Kiss",
    id: 9
  }, {
    image: __webpack_require__(/*! ../../images/specialties/KissSENCSelect.jpg */ "./images/specialties/KissSENCSelect.jpg"),
    award: "BOS/BOBOH/OHG4 ",
    show: "SENC Supported Entry",
    date: "2017-02-03T08:00:00Z",
    dog: "Kiss",
    id: 9
  }, {
    image: __webpack_require__(/*! ../../images/specialties/SparkleSENCBestVeteran.jpg */ "./images/specialties/SparkleSENCBestVeteran.jpg"),
    award: "1st 7-9 Veteran Sweeps ",
    show: "SENC Supported Entry",
    date: "2017-02-03T08:00:00Z",
    dog: "Sparkle",
    id: 13
  }, {
    image: __webpack_require__(/*! ../../images/specialties/KissSelect.jpg */ "./images/specialties/KissSelect.jpg"),
    award: "Select/BOBOH/OHG3 ",
    show: "SENC Regional Specialty",
    date: "2017-02-04T08:00:00Z",
    dog: "Kiss",
    id: 9
  }, {
    image: __webpack_require__(/*! ../../images/specialties/SparkleCanadaMoving.jpg */ "./images/specialties/SparkleCanadaMoving.jpg"),
    award: "1st 7-9 Veteran Sweeps ",
    show: "SENC Regional Specialty",
    date: "2017-02-04T08:00:00Z",
    dog: "Sparkle",
    id: 13
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Sparkle5.jpg */ "./images/specialties/Sparkle5.jpg"),
    award: "SECOND 7-9 Veteran Sweeps",
    show: "CNC Supported Entry",
    date: "2016-10-30T08:00:00Z",
    dog: "Sparkle",
    id: 13
  }, {
    image: __webpack_require__(/*! ../../images/specialties/KissCNCSupportedEntry.jpg */ "./images/specialties/KissCNCSupportedEntry.jpg"),
    award: "AKC Select / BOBOH ",
    show: "CNC Supported Entry",
    date: "2016-10-30T08:00:00Z",
    dog: "Kiss",
    id: 9
  }, {
    image: __webpack_require__(/*! ../../images/specialties/SnowballCNCSupportedEntry.jpg */ "./images/specialties/SnowballCNCSupportedEntry.jpg"),
    award: "Best of Opposite Sex",
    show: "CNC Supported Entry",
    date: "2016-10-30T08:00:00Z",
    dog: "Snowball",
    id: 10
  }, {
    image: __webpack_require__(/*! ../../images/specialties/SparkleCNCVeterans.jpg */ "./images/specialties/SparkleCNCVeterans.jpg"),
    award: "SECOND 7-9 Veteran Sweeps",
    show: "CNC Supported Entry",
    date: "2016-02-03T08:00:00Z",
    dog: "Sparkle",
    id: 13
  }, {
    image: __webpack_require__(/*! ../../images/specialties/KissFlorida.jpg */ "./images/specialties/KissFlorida.jpg"),
    award: "Best of Opposite Sex",
    show: "CNC Supported Entry",
    date: "2016-02-03T08:00:00Z",
    dog: "Kiss",
    id: 9
  }, {
    image: __webpack_require__(/*! ../../images/specialties/KissSENCSelect.jpg */ "./images/specialties/KissSENCSelect.jpg"),
    award: "Select / BOBOH",
    show: "SENC Regional Specialty",
    date: "2016-02-04T08:00:00Z",
    dog: "Kiss",
    id: 9
  }, {
    image: __webpack_require__(/*! ../../images/specialties/RolexSENCBestInSweeps.jpg */ "./images/specialties/RolexSENCBestInSweeps.jpg"),
    award: "BEST IN SWEEPS/ 1st 15-18 Sweeps",
    show: "SENC Regional Specialty",
    date: "2016-02-04T08:00:00Z",
    dog: "Rolex",
    id: 4
  }, {
    image: __webpack_require__(/*! ../../images/specialties/SparkleSENCBestVeteran.jpg */ "./images/specialties/SparkleSENCBestVeteran.jpg"),
    award: "BEST IN VETERAN SWEEPS",
    show: "SENC Regional Specialty",
    date: "2016-02-04T08:00:00Z",
    dog: "Sparkle",
    id: 13
  }, {
    image: __webpack_require__(/*! ../../images/specialties/FlashNC.jpg */ "./images/specialties/FlashNC.jpg"),
    award: "RWD / FIRST 15-18 dog",
    show: "SENC Regional Specialty",
    date: "2016-02-04T08:00:00Z",
    dog: "Flash",
    id: 11
  }, {
    image: __webpack_require__(/*! ../../images/specialties/RaisinShow.jpg */ "./images/specialties/RaisinShow.jpg"),
    award: "FIRST Bred By",
    show: "SENC Regional Specialty",
    date: "2016-02-04T08:00:00Z",
    dog: "Raisin",
    id: 8
  }, {
    image: __webpack_require__(/*! ../../images/specialties/SnowballMoving.jpg */ "./images/specialties/SnowballMoving.jpg"),
    award: "FIRST 12-18 Sweeps",
    show: "SENC Regional Specialty",
    date: "2016-02-04T08:00:00Z",
    dog: "Snowball",
    id: 10
  }, {
    image: __webpack_require__(/*! ../../images/specialties/FlashNational2016.jpg */ "./images/specialties/FlashNational2016.jpg"),
    award: "FIRST 15-18 dog, 4th 15-18 sweeps",
    show: "2016 National",
    date: "2016-05-07T08:00:00Z",
    dog: "Flash",
    id: 11
  }, {
    image: __webpack_require__(/*! ../../images/specialties/RaisinShow.jpg */ "./images/specialties/RaisinShow.jpg"),
    award: "FIRST Amatuer Owner Handled bitch",
    show: "2016 National",
    date: "2016-05-07T08:00:00Z",
    dog: "Raisin",
    id: 8
  }, {
    image: __webpack_require__(/*! ../../images/specialties/LucyTopDam2.jpg */ "./images/specialties/LucyTopDam2.jpg"),
    award: "NCA - Top Producing Dam",
    show: "2016",
    date: "2016-12-31T08:00:00Z",
    dog: "Lucy",
    id: 14
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Rolex2016National.jpg */ "./images/specialties/Rolex2016National.jpg"),
    award: "SECOND 12-15 Sweeps",
    show: "2016 National",
    date: "2016-05-07T08:00:00Z",
    dog: "Rolex",
    id: 4
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Sparkle2016National2ndveterans.jpg */ "./images/specialties/Sparkle2016National2ndveterans.jpg"),
    award: "SECOND 7-8 Veteran Sweeps",
    show: "2016 National",
    date: "2016-05-07T08:00:00Z",
    dog: "Sparkle",
    id: 13
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Sailor.jpg */ "./images/specialties/Sailor.jpg"),
    award: "SECOND 15-18 dog ",
    show: "2016 National",
    date: "2016-05-07T08:00:00Z",
    dog: "Sailor",
    id: 76
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Atlas.jpg */ "./images/specialties/Atlas.jpg"),
    award: "FORTH Working Dog",
    show: "2016 National",
    date: "2016-05-07T08:00:00Z",
    dog: "Atlas",
    id: 59
  }, {
    image: __webpack_require__(/*! ../../images/specialties/KissForthSweeps.jpg */ "./images/specialties/KissForthSweeps.jpg"),
    award: "FORTH 15-18 Sweeps",
    show: "2016 National",
    date: "2016-05-07T08:00:00Z",
    dog: "Kiss",
    id: 9
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Emma.jpg */ "./images/specialties/Emma.jpg"),
    award: "1st leg in Rally Advanced",
    show: "2016 National",
    date: "2016-05-07T08:00:00Z",
    dog: "Emma",
    id: 40
  }, {
    image: __webpack_require__(/*! ../../images/specialties/SnowballRWB.jpg */ "./images/specialties/SnowballRWB.jpg"),
    award: "Reserve Winners Bitch / 1st Bred-by / 1st 12-15 Sweeps",
    show: "NewPenDel Regional Specialty",
    date: "2016-03-20T08:00:00Z",
    dog: "Snowball",
    id: 10
  }, {
    image: __webpack_require__(/*! ../../images/specialties/RolexBestInSweeps.jpg */ "./images/specialties/RolexBestInSweeps.jpg"),
    award: "Best in Sweepstakes / 1st 12-15 Sweeps",
    show: "NewPenDel Regional Specialty",
    date: "2016-03-20T08:00:00Z",
    dog: "Rolex",
    id: 4
  }, {
    image: __webpack_require__(/*! ../../images/specialties/KissFirstSweeps.jpg */ "./images/specialties/KissFirstSweeps.jpg"),
    award: "1st 15-18 Sweeps",
    show: "NewPenDel Regional Specialty",
    date: "2016-03-20T08:00:00Z",
    dog: "Kiss",
    id: 9
  }, {
    image: __webpack_require__(/*! ../../images/specialties/JetFirst.jpg */ "./images/specialties/JetFirst.jpg"),
    award: "2nd 12-15 Sweeps / 1st 12-18 Dog",
    show: "NewPenDel Regional Specialty",
    date: "2016-03-20T08:00:00Z",
    dog: "Jet",
    id: 60
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Snowball2016National.jpg */ "./images/specialties/Snowball2016National.jpg"),
    award: "1st 12-15 Sweeps",
    show: "NewPenDel Regional Specialty",
    date: "2016-03-19T08:00:00Z",
    dog: "Snowball",
    id: 10
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Rolex.jpg */ "./images/specialties/Rolex.jpg"),
    award: "1st 12-15 Sweeps",
    show: "NewPenDel Regional Specialty",
    date: "2016-03-19T08:00:00Z",
    dog: "Rolex",
    id: 4
  }, {
    image: __webpack_require__(/*! ../../images/specialties/KissMoving.jpg */ "./images/specialties/KissMoving.jpg"),
    award: "1st 15-18 Sweeps",
    show: "NewPenDel Regional Specialty",
    date: "2016-03-19T08:00:00Z",
    dog: "Kiss",
    id: 9
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Jet.jpg */ "./images/specialties/Jet.jpg"),
    award: "2nd 12-15 Sweeps / 1st 12-18 Dog",
    show: "NewPenDel Regional Specialty",
    date: "2016-03-19T08:00:00Z",
    dog: "Jet",
    id: 60
  }, {
    image: __webpack_require__(/*! ../../images/specialties/JackNational.jpg */ "./images/specialties/JackNational.jpg"),
    award: "3rd Open",
    show: "2015 National",
    date: "2015-05-07T08:00:00Z",
    dog: "Jack",
    id: 34
  }, {
    image: __webpack_require__(/*! ../../images/specialties/KissMorrisAndEssex.jpg */ "./images/specialties/KissMorrisAndEssex.jpg"),
    award: "Best of Opposite in Sweepstakes / 1st 9-12 Sweeps / 4th 9-12 Puppy Bitch",
    show: "NewPenDel Regional Specialty - Morris & Essex",
    date: "2015-10-01T08:00:00Z",
    dog: "Kiss",
    id: 9
  }, {
    image: __webpack_require__(/*! ../../images/specialties/RolexBestOppSweeps.jpg */ "./images/specialties/RolexBestOppSweeps.jpg"),
    award: "1st 6-9 Sweeps / 2nd 6-9 Puppy Dog",
    show: "NewPenDel Regional Specialty - Morris & Essex",
    date: "2015-10-01T08:00:00Z",
    dog: "Rolex",
    id: 4
  }, {
    image: __webpack_require__(/*! ../../images/specialties/JetFirst.jpg */ "./images/specialties/JetFirst.jpg"),
    award: "2nd 6-9 Sweeps / 3rd 6-9 Puppy Dog ",
    show: "NewPenDel Regional Specialty - Morris & Essex",
    date: "2015-10-01T08:00:00Z",
    dog: "Jet",
    id: 60
  }, {
    image: __webpack_require__(/*! ../../images/specialties/TiffanyCNCRegional.jpg */ "./images/specialties/TiffanyCNCRegional.jpg"),
    award: "Winners Bitch/1st 9-12 - 4 points",
    show: "CNC Supported Entry",
    date: "2014-10-26T08:00:00Z",
    dog: "Tiffany",
    id: 48
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Justin.jpg */ "./images/specialties/Justin.jpg"),
    award: "1st 6-9",
    show: "CNC Supported Entry",
    date: "2014-10-26T08:00:00Z",
    dog: "Justin",
    id: 61
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Jack12-18.jpg */ "./images/specialties/Jack12-18.jpg"),
    award: "2nd 12-18",
    show: "CNC Supported Entry",
    date: "2014-10-26T08:00:00Z",
    dog: "Jack",
    id: 34
  }, {
    image: __webpack_require__(/*! ../../images/specialties/tiffanycncmoving.jpg */ "./images/specialties/tiffanycncmoving.jpg"),
    award: "2nd 9-12 Sweeps/Regular ",
    show: "CNC Regional",
    date: "2014-10-25T08:00:00Z",
    dog: "Tiffany",
    id: 48
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Justin2.jpg */ "./images/specialties/Justin2.jpg"),
    award: "1st 6-9 Sweeps/Regular",
    show: "CNC Regional",
    date: "2014-10-25T08:00:00Z",
    dog: "Justin",
    id: 61
  }, {
    image: __webpack_require__(/*! ../../images/specialties/JackNational.jpg */ "./images/specialties/JackNational.jpg"),
    award: "1st 12-18 Regular / 2nd 12-15 Sweeps",
    show: "CNC Regional",
    date: "2014-10-25T08:00:00Z",
    dog: "Jack",
    id: 34
  }, {
    image: __webpack_require__(/*! ../../images/specialties/SpiceBOB.jpg */ "./images/specialties/SpiceBOB.jpg"),
    award: "Best Veteran Bitch in Sweeps / 1st 9+",
    show: "CNC Regional",
    date: "2014-10-25T08:00:00Z",
    dog: "Spice",
    id: 15
  }, {
    image: __webpack_require__(/*! ../../images/specialties/EmmaCNCRegional.jpg */ "./images/specialties/EmmaCNCRegional.jpg"),
    award: "New Grand Champion! SEL/AOM",
    show: "CNC Regional",
    date: "2014-10-25T08:00:00Z",
    dog: "Emma",
    id: 40
  }, {
    image: __webpack_require__(/*! ../../images/specialties/tate_show_1.jpg */ "./images/specialties/tate_show_1.jpg"),
    award: "New Champion! WD/1st Open - 5 points",
    show: "CNC Regional",
    date: "2014-10-25T08:00:00Z",
    dog: "Tate",
    id: 62
  }, {
    image: __webpack_require__(/*! ../../images/specialties/tate2014national.jpg */ "./images/specialties/tate2014national.jpg"),
    award: "Winners Dog, 1st 15-18",
    show: "2014 National",
    date: "2014-04-05T08:00:00Z",
    dog: "Tate",
    id: 62
  }, {
    image: __webpack_require__(/*! ../../images/specialties/FredBestInSweeps.jpg */ "./images/specialties/FredBestInSweeps.jpg"),
    award: "Best in Sweeps - 1st 9-12 Sweeps",
    show: "2014 National",
    date: "2014-04-05T08:00:00Z",
    dog: "Fred",
    id: 66
  }, {
    image: __webpack_require__(/*! ../../images/specialties/EmmaNational.jpg */ "./images/specialties/EmmaNational.jpg"),
    award: "1st 9-12 Bitch",
    show: "2014 National",
    date: "2014-04-05T08:00:00Z",
    dog: "Emma",
    id: 40
  }, {
    image: __webpack_require__(/*! ../../images/specialties/SpiceFlowersMed.jpg */ "./images/specialties/SpiceFlowersMed.jpg"),
    award: "2nd 7-9 Veteran Bitch / 3rd 8-9 Sweeps",
    show: "2014 National",
    date: "2014-04-05T08:00:00Z",
    dog: "Spice",
    id: 15
  }, {
    image: __webpack_require__(/*! ../../images/specialties/ParkerNational.jpg */ "./images/specialties/ParkerNational.jpg"),
    award: "3rd 9-12 dog",
    show: "2014 National",
    date: "2014-04-05T08:00:00Z",
    dog: "Parker",
    id: 67
  }, {
    image: __webpack_require__(/*! ../../images/specialties/SampsonAtlasBrace.jpg */ "./images/specialties/SampsonAtlasBrace.jpg"),
    award: "2nd Brace",
    show: "2014 National",
    date: "2014-04-05T08:00:00Z",
    dog: "Sampson, Atlas"
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Ruby.jpg */ "./images/specialties/Ruby.jpg"),
    award: "2nd 9-12",
    show: "NewPenDel Supported Entry",
    date: "2014-03-16T08:00:00Z",
    dog: "Ruby",
    id: 73
  }, {
    image: __webpack_require__(/*! ../../images/specialties/FredBOWNewPenDel.jpg */ "./images/specialties/FredBOWNewPenDel.jpg"),
    award: "Best of Winners/WD/1st 9-12 - 5 points and BOS Sweeps",
    show: "NewPenDel Supported Entry",
    date: "2014-03-16T08:00:00Z",
    dog: "Fred",
    id: 66
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Snickers.jpg */ "./images/specialties/Snickers.jpg"),
    award: "1st 12-18",
    show: "NewPenDel Supported Entry",
    date: "2014-03-16T08:00:00Z",
    dog: "Snickers",
    id: 52
  }, {
    image: __webpack_require__(/*! ../../images/specialties/tate_show_1.jpg */ "./images/specialties/tate_show_1.jpg"),
    award: "2nd 12-18",
    show: "NewPenDel Supported Entry",
    date: "2014-03-16T08:00:00Z",
    dog: "Tate",
    id: 62
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Emma (2).jpg */ "./images/specialties/Emma (2).jpg"),
    award: "1st 9-12",
    show: "NewPenDel Supported Entry",
    date: "2014-03-16T08:00:00Z",
    dog: "Emma",
    id: 40
  }, {
    image: __webpack_require__(/*! ../../images/specialties/emmach.jpg */ "./images/specialties/emmach.jpg"),
    award: "RWB/1st 9-12",
    show: "NewPenDel Supported Entry",
    date: "2014-03-15T08:00:00Z",
    dog: "Emma",
    id: 40
  }, {
    image: __webpack_require__(/*! ../../images/specialties/fred2014nationalbestinsweeps.jpg */ "./images/specialties/fred2014nationalbestinsweeps.jpg"),
    award: "RWD/1st 9-12 and BOS Sweeps",
    show: "NewPenDel Supported Entry",
    date: "2014-03-15T08:00:00Z",
    dog: "Fred",
    id: 66
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Ruby.jpg */ "./images/specialties/Ruby.jpg"),
    award: "2nd 9-12",
    show: "NewPenDel Supported Entry",
    date: "2014-03-15T08:00:00Z",
    dog: "Ruby",
    id: 73
  }, {
    image: __webpack_require__(/*! ../../images/specialties/emma2014national2.jpg */ "./images/specialties/emma2014national2.jpg"),
    award: "1st 9-12",
    show: "NewPenDel Supported Entry",
    date: "2014-03-14T08:00:00Z",
    dog: "Emma",
    id: 40
  }, {
    image: __webpack_require__(/*! ../../images/specialties/fred2014nationalbestinsweeps.jpg */ "./images/specialties/fred2014nationalbestinsweeps.jpg"),
    award: "1st 9-12",
    show: "NewPenDel Supported Entry",
    date: "2014-03-14T08:00:00Z",
    dog: "Fred",
    id: 66
  }, {
    image: __webpack_require__(/*! ../../images/specialties/SpiceFlowers-B&W.jpg */ "./images/specialties/SpiceFlowers-B&W.jpg"),
    award: "Best Veteran Bitch in Sweeps",
    show: "NewPenDel Supported Entry",
    date: "2014-03-14T08:00:00Z",
    dog: "Spice",
    id: 15
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Dory2014.jpg */ "./images/specialties/Dory2014.jpg"),
    award: "RWD/1st Open Dog",
    show: "HCNC Regional Specialty",
    date: "2014-02-13T08:00:00Z",
    dog: "Dory",
    id: 79
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Dory3.jpg */ "./images/specialties/Dory3.jpg"),
    award: "RWD/2nd Open Dog",
    show: "HCNC Regional Specialty",
    date: "2014-02-12T08:00:00Z",
    dog: "Dory",
    id: 79
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Ruby.jpg */ "./images/specialties/Ruby.jpg"),
    award: "2nd 6-9 - 1st 6-9 Sweeps",
    show: "NC of New England Regional Specialty",
    date: "2013-12-08T08:00:00Z",
    dog: "Ruby",
    id: 73
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Ruby.jpg */ "./images/specialties/Ruby.jpg"),
    award: "1/BP/Puppy Group 2 6-9 - 1st 6-9 Sweeps",
    show: "NC of New England Supported Entry",
    date: "2013-12-07T08:00:00Z",
    dog: "Ruby",
    id: 73
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Maggie second major 10-27-13.jpg */ "./images/specialties/Maggie second major 10-27-13.jpg"),
    award: "Best of Winners/WB/1st Open - 5 points",
    show: "CNC Supported Entry",
    date: "2013-10-27T08:00:00Z",
    dog: "Maggie",
    id: 57
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Snickers.jpg */ "./images/specialties/Snickers.jpg"),
    award: "RWD/1st 9-12 Sweeps - 2nd 9-12",
    show: "CNC Supported Entry",
    date: "2013-10-27T08:00:00Z",
    dog: "Snickers",
    id: 52
  }, {
    image: __webpack_require__(/*! ../../images/specialties/tate_show_1.jpg */ "./images/specialties/tate_show_1.jpg"),
    award: "3rd 9-12",
    show: "CNC Supported Entry",
    date: "2013-10-28T08:00:00Z",
    dog: "Tate",
    id: 62
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Maggie first major win.jpg */ "./images/specialties/Maggie first major win.jpg"),
    award: "4th Am-Bred",
    show: "CNC  Regional",
    date: "2013-10-27T08:00:00Z",
    dog: "Maggie",
    id: 57
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Snickers.jpg */ "./images/specialties/Snickers.jpg"),
    award: "1st 9-12 Sweeps - 1st 9-12",
    show: "CNC  Regional",
    date: "2013-10-27T08:00:00Z",
    dog: "Snickers",
    id: 52
  }, {
    image: __webpack_require__(/*! ../../images/specialties/tate_show_1.jpg */ "./images/specialties/tate_show_1.jpg"),
    award: "3rd 9-12 Sweeps - 2nd 9-12",
    show: "CNC  Regional",
    date: "2013-10-27T08:00:00Z",
    dog: "Tate",
    id: 62
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Dexter3.jpg */ "./images/specialties/Dexter3.jpg"),
    award: "2nd 7-9 Veteran Sweeps",
    show: "CNC  Regional",
    date: "2013-10-27T08:00:00Z",
    dog: "Dexter",
    id: 16
  }, {
    image: __webpack_require__(/*! ../../images/specialties/SpiceVeteran.jpg */ "./images/specialties/SpiceVeteran.jpg"),
    award: "2nd 7-9 Veteran Sweeps",
    show: "CNC  Regional",
    date: "2013-10-27T08:00:00Z",
    dog: "Spice",
    id: 15
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Spice2013National.jpg */ "./images/specialties/Spice2013National.jpg"),
    award: "3rd - 7-9 Veteran Bitch",
    show: "2013 National",
    date: "2013-04-05T08:00:00Z",
    dog: "Spice",
    id: 15
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Atlas2013Natioanl.jpg */ "./images/specialties/Atlas2013Natioanl.jpg"),
    award: "1st AOH, 1st Stud Dog 'Team Travis' ",
    show: "2013 National",
    date: "2013-04-05T08:00:00Z",
    dog: "Atlas",
    id: 59
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Chilly.jpg */ "./images/specialties/Chilly.jpg"),
    award: "4th - 7-9 Veteran Bitch ",
    show: "2013 National",
    date: "2013-04-05T08:00:00Z",
    dog: "Chilly",
    id: 18
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Atlas2.jpg */ "./images/specialties/Atlas2.jpg"),
    award: "2nd - Novice A  ",
    show: "2013 National",
    date: "2013-04-05T08:00:00Z",
    dog: "Atlas",
    id: 59
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Spice 2013 National.jpg */ "./images/specialties/Spice 2013 National.jpg"),
    award: "Best Veteran in Sweeps",
    show: "NewPenDel Supported Entry",
    date: "2013-03-17T08:00:00Z",
    dog: "Spice",
    id: 15
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Atlas.jpg */ "./images/specialties/Atlas.jpg"),
    award: "1st Open",
    show: "NewPenDel Supported Entry",
    date: "2013-03-17T08:00:00Z",
    dog: "Atlas",
    id: 59
  }, {
    image: __webpack_require__(/*! ../../images/specialties/SpiceYounger.jpg */ "./images/specialties/SpiceYounger.jpg"),
    award: "Best Veteran in Sweeps",
    show: "NewPenDel Regional",
    date: "2013-03-16T08:00:00Z",
    dog: "Spice",
    id: 15
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Atlas2.jpg */ "./images/specialties/Atlas2.jpg"),
    award: "Best of Winners, WD, 1st Open (5 pts)",
    show: "NewPenDel Regional",
    date: "2013-03-16T08:00:00Z",
    dog: "Atlas",
    id: 59
  }, {
    image: __webpack_require__(/*! ../../images/specialties/SpiceVeteran.jpg */ "./images/specialties/SpiceVeteran.jpg"),
    award: "Best Veteran in Sweeps",
    show: "SENC Regional",
    date: "2013-02-16T08:00:00Z",
    dog: "Spice",
    id: 15
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Sirius2013.jpg */ "./images/specialties/Sirius2013.jpg"),
    award: "Select Dog",
    show: "SENC Regional",
    date: "2013-02-16T08:00:00Z",
    dog: "Sirius",
    id: 1
  }, {
    image: __webpack_require__(/*! ../../images/specialties/SpiceMaco2012CNC.jpg */ "./images/specialties/SpiceMaco2012CNC.jpg"),
    award: "Best Veterans in Sweeps",
    show: "CNC Regional",
    date: "2012-10-27T08:00:00Z",
    dog: "Spice, Macco"
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Charm.jpg */ "./images/specialties/Charm.jpg"),
    award: "2nd 12-15 Bitch, 1st 12-15 Bitch Sweeps",
    show: "CNC Regional",
    date: "2012-10-27T08:00:00Z",
    dog: "Charm",
    id: 68
  }, {
    image: __webpack_require__(/*! ../../images/specialties/AtlasMaturity2012.jpg */ "./images/specialties/AtlasMaturity2012.jpg"),
    award: "1st Maturity - 'Team Travis'",
    show: "2012 National",
    date: "2012-05-05T08:00:00Z",
    dog: "Atlas",
    id: 59
  }, {
    image: __webpack_require__(/*! ../../images/specialties/SimonNational.jpg */ "./images/specialties/SimonNational.jpg"),
    award: "3rd 9+ Veteran Dog Sweeps/Regular",
    show: "2012 National",
    date: "2012-05-05T08:00:00Z",
    dog: "Simon",
    id: 17
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Spice 2013 National.jpg */ "./images/specialties/Spice 2013 National.jpg"),
    award: "3rd 7 - 9 Veteran Bitch Sweeps/Regular",
    show: "2012 National",
    date: "2012-05-05T08:00:00Z",
    dog: "Spice",
    id: 15
  }, {
    image: __webpack_require__(/*! ../../images/specialties/SpiceBISS.jpg */ "./images/specialties/SpiceBISS.jpg"),
    award: "BISS, 1st 7 - 9 Veteran Bitch",
    show: "NewPenDel Regional",
    date: "2012-04-29T08:00:00Z",
    dog: "Spice",
    id: 15
  }, {
    image: __webpack_require__(/*! ../../images/specialties/simon-show2.jpg */ "./images/specialties/simon-show2.jpg"),
    award: "2nd 9+ Veteran Dog",
    show: "NewPenDel Regional",
    date: "2012-04-29T08:00:00Z",
    dog: "Simon",
    id: 17
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Latte.jpg */ "./images/specialties/Latte.jpg"),
    award: "2nd 15-18 Bitch",
    show: "NewPenDel Regional",
    date: "2012-04-29T08:00:00Z",
    dog: "Latte",
    id: 101
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Charm2.jpg */ "./images/specialties/Charm2.jpg"),
    award: "2nd 9-12 Bitch",
    show: "NewPenDel Regional",
    date: "2012-04-29T08:00:00Z",
    dog: "Charm",
    id: 68
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Luke.jpg */ "./images/specialties/Luke.jpg"),
    award: "1st AOH Dog",
    show: "2011 National",
    date: "2011-04-05T08:00:00Z",
    dog: "Luke",
    id: 49
  }, {
    image: __webpack_require__(/*! ../../images/specialties/KatieVeteranSweeps2011.jpg */ "./images/specialties/KatieVeteranSweeps2011.jpg"),
    award: "2nd 9 and over sweeps / 4th 9 and over:",
    show: "2011 National",
    date: "2011-04-05T08:00:00Z",
    dog: "Katie",
    id: 19
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Atlas1.jpg */ "./images/specialties/Atlas1.jpg"),
    award: "2nd Maturity - Team Travis and Katie",
    show: "2011 National",
    date: "2011-04-05T08:00:00Z",
    dog: "Atlas",
    id: 59
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Chilly 2011 National.jpg */ "./images/specialties/Chilly 2011 National.jpg"),
    award: "4th Brood Bitch",
    show: "2011 National",
    date: "2011-04-05T08:00:00Z",
    dog: "Chilly",
    id: 18
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Dasher.jpg */ "./images/specialties/Dasher.jpg"),
    award: "Best of Opposite in Sweeps, 1st 9-12 Sweeps, RWD, 1st 9-12 puppy",
    show: "Penn Ohio Regional",
    date: "2011-12-17T08:00:00Z",
    dog: "Dasher",
    id: 20
  }, {
    image: __webpack_require__(/*! ../../images/specialties/NutmegPenOhio.jpg */ "./images/specialties/NutmegPenOhio.jpg"),
    award: "1st 9-12 Puppy Bitch, 1st 9-12 sweeps",
    show: "Penn Ohio Regional",
    date: "2011-12-17T08:00:00Z",
    dog: "Nutmeg",
    id: 74
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Sirius2.jpg */ "./images/specialties/Sirius2.jpg"),
    award: "2nd 12-15 Sweeps 3rd 12-18 Dog",
    show: "Penn Ohio Regional",
    date: "2011-12-17T08:00:00Z",
    dog: "Sirius",
    id: 1
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Dasher.jpg */ "./images/specialties/Dasher.jpg"),
    award: "1st 9-12 Puppy Dog, 1st 9-12 sweeps",
    show: "Penn Ohio Regional",
    date: "2011-12-18T08:00:00Z",
    dog: "Dasher",
    id: 20
  }, {
    image: __webpack_require__(/*! ../../images/specialties/NutmegPenOhio.jpg */ "./images/specialties/NutmegPenOhio.jpg"),
    award: "1st 9-12 Puppy Bitch, 1st 9-12 sweeps",
    show: "Penn Ohio Regional",
    date: "2011-12-18T08:00:00Z",
    dog: "Nutmeg",
    id: 74
  }, {
    image: __webpack_require__(/*! ../../images/specialties/SiriusWD.jpg */ "./images/specialties/SiriusWD.jpg"),
    award: "3rd 12-15 Sweeps 2nd 12-18 Dog",
    show: "Penn Ohio Regional",
    date: "2011-12-18T08:00:00Z",
    dog: "Sirius",
    id: 1
  }, {
    image: __webpack_require__(/*! ../../images/specialties/ChillyMoving.jpg */ "./images/specialties/ChillyMoving.jpg"),
    award: "Highest Scoring Rally Novice B",
    show: "Penn Ohio Supported Entry",
    date: "2011-12-16T08:00:00Z",
    dog: "Chilly",
    id: 18
  }, {
    image: __webpack_require__(/*! ../../images/specialties/nancychilly6.jpg */ "./images/specialties/nancychilly6.jpg"),
    award: "Highest Scoring Rally Novice B",
    show: "Penn Ohio Regional",
    date: "2011-12-18T08:00:00Z",
    dog: "Chilly",
    id: 18
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Katie Best Veteran Bitch 2.jpg */ "./images/specialties/Katie Best Veteran Bitch 2.jpg"),
    award: "Best of Opposite Veteran in Sweeps",
    show: "NewPenDel Regional",
    date: "2011-03-17T08:00:00Z",
    dog: "Katie",
    id: 19
  }, {
    image: __webpack_require__(/*! ../../images/specialties/KatieVeteranSweeps2011.jpg */ "./images/specialties/KatieVeteranSweeps2011.jpg"),
    award: "Best Veteran in Sweeps",
    show: "NewPenDel Supported Entry",
    date: "2011-03-18T08:00:00Z",
    dog: "Katie",
    id: 19
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Sparkle2011AOMSelectSENC.jpg */ "./images/specialties/Sparkle2011AOMSelectSENC.jpg"),
    award: "Award of Merit/Select",
    show: "SENC Regional",
    date: "2011-07-18T08:00:00Z",
    dog: "Sparkle",
    id: 13
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Annie.JPG */ "./images/specialties/Annie.JPG"),
    award: "1st AOH",
    show: "SENC Regional",
    date: "2011-07-18T08:00:00Z",
    dog: "Annie",
    id: 47
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Lucy.jpg */ "./images/specialties/Lucy.jpg"),
    award: "1st Bred By",
    show: "SENC Regional",
    date: "2011-07-18T08:00:00Z",
    dog: "Lucy",
    id: 14
  }, {
    image: __webpack_require__(/*! ../../images/specialties/SpiceHead.JPG */ "./images/specialties/SpiceHead.JPG"),
    award: "2010 Top Show Bitch",
    show: "NCA",
    date: "2010-12-31T08:00:00Z",
    dog: "Spice",
    id: 15
  }, {
    image: __webpack_require__(/*! ../../images/specialties/SpiceNewPenDelBOS.JPG */ "./images/specialties/SpiceNewPenDelBOS.JPG"),
    award: "Best of Opposite Sex",
    show: "New Pen Del Regional",
    date: "2010-04-04T08:00:00Z",
    dog: "Spice",
    id: 15
  }, {
    image: __webpack_require__(/*! ../../images/specialties/PotterAOM.jpg */ "./images/specialties/PotterAOM.jpg"),
    award: "Award of Merit",
    show: "New Pen Del - Morris & Essex",
    date: "2010-10-04T08:00:00Z",
    dog: "Potter",
    id: 70
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Linus.jpg */ "./images/specialties/Linus.jpg"),
    award: "Best of Opposite in Sweeps/ 1st 6-9 Sweeps / 1st 6-9 Dog",
    show: "New Pen Del - Morris & Essex",
    date: "2010-10-04T08:00:00Z",
    dog: "Linus",
    id: 102
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Bridget.JPG */ "./images/specialties/Bridget.JPG"),
    award: "1st 6-9 Sweeps / 2nd 6-9 Bitch",
    show: "New Pen Del - Morris & Essex",
    date: "2010-10-04T08:00:00Z",
    dog: "Bridget",
    id: 103
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Tyler.JPG */ "./images/specialties/Tyler.JPG"),
    award: "Best Of Opposite Sweeps/ 1st 9-12",
    show: "CNC Regional",
    date: "2010-10-31T08:00:00Z",
    dog: "Tyler",
    id: 104
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Lucy.jpg */ "./images/specialties/Lucy.jpg"),
    award: "2nd 12-18 Sweeps",
    show: "CNC Regional",
    date: "2010-10-31T08:00:00Z",
    dog: "Lucy",
    id: 14
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Potter.jpg */ "./images/specialties/Potter.jpg"),
    award: "2nd 12-18 Sweeps",
    show: "2009 National",
    date: "2009-04-05T08:00:00Z",
    dog: "Potter",
    id: 70
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Katie New VN - Forth Place Nov B.jpg */ "./images/specialties/Katie New VN - Forth Place Nov B.jpg"),
    award: "4th Novice B Obedience",
    show: "2009 National",
    date: "2009-04-05T08:00:00Z",
    dog: "Katie",
    id: 19
  }, {
    image: __webpack_require__(/*! ../../images/specialties/SampsonCNCRegional2.JPG */ "./images/specialties/SampsonCNCRegional2.JPG"),
    award: "1/W/BW ",
    show: "CNC Regional",
    date: "2009-10-27T08:00:00Z",
    dog: "Sampson",
    id: 42
  }, {
    image: __webpack_require__(/*! ../../images/specialties/sporty_1st_bred_by.jpg */ "./images/specialties/sporty_1st_bred_by.jpg"),
    award: "1st Bred-by Bitch",
    show: "NewPenDel Regional",
    date: "2009-03-17T08:00:00Z",
    dog: "Sporty",
    id: 26
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Katie Best Veteran Bitch.jpg */ "./images/specialties/Katie Best Veteran Bitch.jpg"),
    award: "Best of Opp Veterans Sweeps",
    show: "NewPenDel Regional",
    date: "2009-03-17T08:00:00Z",
    dog: "Katie",
    id: 19
  }, {
    image: __webpack_require__(/*! ../../images/specialties/DaisyFloridaSweeps.jpg */ "./images/specialties/DaisyFloridaSweeps.jpg"),
    award: "Best in Veterans Sweeps",
    show: "NewfFla Regional",
    date: "2009-05-29T08:00:00Z",
    dog: "Daisy",
    id: 21
  }, {
    image: __webpack_require__(/*! ../../images/specialties/DaisyVeteran.jpg */ "./images/specialties/DaisyVeteran.jpg"),
    award: "1st 8-9 Veteran Sweeps",
    show: "2008 National",
    date: "2008-04-17T08:00:00Z",
    dog: "Daisy",
    id: 21
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Spice Best of Opposite MKC.jpg */ "./images/specialties/Spice Best of Opposite MKC.jpg"),
    award: "Best of Opposite Sex",
    show: "CNC Regional",
    date: "2008-10-27T08:00:00Z",
    dog: "Spice",
    id: 15
  }, {
    image: __webpack_require__(/*! ../../images/specialties/CosmoAOM.jpg */ "./images/specialties/CosmoAOM.jpg"),
    award: "Award of Merit",
    show: "CNC Regional",
    date: "2008-10-26T08:00:00Z",
    dog: "Cosmo",
    id: 65
  }, {
    image: __webpack_require__(/*! ../../images/specialties/sporty_regional_best_of_winners.jpg */ "./images/specialties/sporty_regional_best_of_winners.jpg"),
    award: "RWB/1st 6-9 regular/Best of Opp Sweeps/1st 6-9 Sweeps",
    show: "CNC Regional",
    date: "2008-10-27T08:00:00Z",
    dog: "Sporty",
    id: 26
  }, {
    image: __webpack_require__(/*! ../../images/specialties/sporty_regional_best_in_sweeps.jpg */ "./images/specialties/sporty_regional_best_in_sweeps.jpg"),
    award: "1/W/BW 6-9 puppy bitch, Best Puppy in Sweeps 6-9 puppy",
    show: "SENC Regional",
    date: "2008-07-15T08:00:00Z",
    dog: "Sporty",
    id: 26
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Potter.jpg */ "./images/specialties/Potter.jpg"),
    award: "1/W 6-9 puppy dog",
    show: "SENC Regional",
    date: "2008-07-15T08:00:00Z",
    dog: "Potter",
    id: 70
  }, {
    image: __webpack_require__(/*! ../../images/specialties/ChillyBroodBitchSENC.jpg */ "./images/specialties/ChillyBroodBitchSENC.jpg"),
    award: "1st Brood Bitch",
    show: "SENC Regional",
    date: "2008-07-15T08:00:00Z",
    dog: "Chilly",
    id: 18
  }, {
    image: __webpack_require__(/*! ../../images/specialties/CosmoBOS.jpg */ "./images/specialties/CosmoBOS.jpg"),
    award: "Best of Opposite Sex",
    show: "SENC Regional",
    date: "2008-07-15T08:00:00Z",
    dog: "Cosmo",
    id: 65
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Daisy2007National.jpg */ "./images/specialties/Daisy2007National.jpg"),
    award: "1st 8-9 Veteran Sweeps",
    show: "2007 National",
    date: "2007-04-15T08:00:00Z",
    dog: "Daisy",
    id: 21
  }, {
    image: __webpack_require__(/*! ../../images/specialties/simon-show2.jpg */ "./images/specialties/simon-show2.jpg"),
    award: "2nd Working Dog",
    show: "2007 National",
    date: "2007-04-15T08:00:00Z",
    dog: "Simon",
    id: 17
  }, {
    image: __webpack_require__(/*! ../../images/specialties/mason.jpg */ "./images/specialties/mason.jpg"),
    award: "4th 6-9 Sweeps, 4th 6-9 Puppy Dog",
    show: "2007 National",
    date: "2007-04-15T08:00:00Z",
    dog: "Mason",
    id: 97
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Dexter.jpg */ "./images/specialties/Dexter.jpg"),
    award: "3rd 6-9 Puppy Dog",
    show: "2007 National",
    date: "2007-04-15T08:00:00Z",
    dog: "Dexter",
    id: 16
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Simon4thWorkingNational2006.JPG */ "./images/specialties/Simon4thWorkingNational2006.JPG"),
    award: "3nd Working Dog",
    show: "2006 National",
    date: "2006-04-15T08:00:00Z",
    dog: "Simon",
    id: 17
  }, {
    image: __webpack_require__(/*! ../../images/specialties/SpiceBOSSweeps2006.jpg */ "./images/specialties/SpiceBOSSweeps2006.jpg"),
    award: "Best of Opposite Sex in Puppy Sweepstake, 1st 9-12 Sweepstakes, 3rd 9-12",
    show: "2006 National",
    date: "2006-04-15T08:00:00Z",
    dog: "Spice",
    id: 15
  }, {
    image: __webpack_require__(/*! ../../images/specialties/DaisyMaturity.jpg */ "./images/specialties/DaisyMaturity.jpg"),
    award: "1st Maturity",
    show: "2006 National",
    date: "2006-04-15T08:00:00Z",
    dog: "Daisy",
    id: 21
  }, {
    image: __webpack_require__(/*! ../../images/specialties/DaisyBroodBitch.jpg */ "./images/specialties/DaisyBroodBitch.jpg"),
    award: "1st Brood Bitch",
    show: "2006 National",
    date: "2006-04-15T08:00:00Z",
    dog: "Daisy",
    id: 21
  }, {
    image: __webpack_require__(/*! ../../images/specialties/SimonKelseyJuniors2006.jpg */ "./images/specialties/SimonKelseyJuniors2006.jpg"),
    award: "1st Junior Showmanship - Kelsey Miller",
    show: "2006 National",
    date: "2006-04-15T08:00:00Z",
    dog: "Simon",
    id: 17
  }, {
    image: __webpack_require__(/*! ../../images/specialties/OpieWestminster.jpg */ "./images/specialties/OpieWestminster.jpg"),
    award: "Award of Merit ",
    show: "2006 Westminster ",
    date: "2006-02-15T08:00:00Z",
    dog: "Opie",
    id: 24
  }, {
    image: __webpack_require__(/*! ../../images/specialties/OpieGroupFirstBISS.jpg */ "./images/specialties/OpieGroupFirstBISS.jpg"),
    award: "Award of Merit ",
    show: "Penn-Ohio Regional ",
    date: "2005-02-15T08:00:00Z",
    dog: "Opie",
    id: 24
  }, {
    image: __webpack_require__(/*! ../../images/specialties/OpieSENCSupportedBOB.jpg */ "./images/specialties/OpieSENCSupportedBOB.jpg"),
    award: "Award of Merit ",
    show: "SENC Supported Entry",
    date: "2005-07-15T08:00:00Z",
    dog: "Opie",
    id: 24
  }, {
    image: __webpack_require__(/*! ../../images/specialties/OpieSENCBISS.jpg */ "./images/specialties/OpieSENCBISS.jpg"),
    award: "Award of Merit ",
    show: "CNC Regional ",
    date: "2005-10-25T08:00:00Z",
    dog: "Opie",
    id: 24
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Opie2005Eukanuba.jpg */ "./images/specialties/Opie2005Eukanuba.jpg"),
    award: "Award of Excellence",
    show: "Eukanuba AKC National Championships",
    date: "2005-01-15T08:00:00Z",
    dog: "Opie",
    id: 24
  }, {
    image: __webpack_require__(/*! ../../images/specialties/OpieSENCBISS.jpg */ "./images/specialties/OpieSENCBISS.jpg"),
    award: "BISS/Group 1",
    show: "SENC Regional",
    date: "2004-07-15T08:00:00Z",
    dog: "Opie",
    id: 24
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Simon-Middleburg.jpg */ "./images/specialties/Simon-Middleburg.jpg"),
    award: "1st Am Bred",
    show: "CNC Regional",
    date: "2004-10-27T08:00:00Z",
    dog: "Simon",
    id: 17
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Daisy-Opie-Rocky-National-2.jpg */ "./images/specialties/Daisy-Opie-Rocky-National-2.jpg"),
    award: "4th Brood Bitch",
    show: "2004 National",
    date: "2004-03-27T08:00:00Z",
    dog: "Daisy",
    id: 21
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Team-2004-National.jpg */ "./images/specialties/Team-2004-National.jpg"),
    award: "2nd Team Obedience",
    show: "2004 National",
    date: "2004-03-27T08:00:00Z",
    dog: "Daisy",
    id: 21
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Daisy 009.jpg */ "./images/specialties/Daisy 009.jpg"),
    award: "4th Working Bitch",
    show: "2003 National",
    date: "2003-03-27T08:00:00Z",
    dog: "Daisy",
    id: 21
  }, {
    image: __webpack_require__(/*! ../../images/specialties/opie_006.jpg */ "./images/specialties/opie_006.jpg"),
    award: "1st 9-12 Sweeps",
    show: "NCNE Regional",
    date: "2003-03-27T08:00:00Z",
    dog: "Opie",
    id: 24
  }, {
    image: __webpack_require__(/*! ../../images/specialties/OpieBISSNewfFla.jpg */ "./images/specialties/OpieBISSNewfFla.jpg"),
    award: "BISS/Group 3",
    show: "NEWF-FLA Regional",
    date: "2003-06-27T08:00:00Z",
    dog: "Opie",
    id: 24
  }, {
    image: __webpack_require__(/*! ../../images/specialties/KatieBOSNewfFla2003.jpg */ "./images/specialties/KatieBOSNewfFla2003.jpg"),
    award: "Best of Opposite Sex",
    show: "NEWF-FLA Regional",
    date: "2003-06-27T08:00:00Z",
    dog: "Katie",
    id: 19
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Rocky Group2 Chambersburg.jpg */ "./images/specialties/Rocky Group2 Chambersburg.jpg"),
    award: "Best of Opp in Sweeps",
    show: "GRNC Regional",
    date: "2003-11-27T08:00:00Z",
    dog: "Rocky",
    id: 29
  }, {
    image: __webpack_require__(/*! ../../images/specialties/KatieBOS2003.jpg */ "./images/specialties/KatieBOS2003.jpg"),
    award: "1/W/BOS",
    show: "CNC Regional",
    date: "2003-10-27T08:00:00Z",
    dog: "Katie",
    id: 19
  }, {
    image: __webpack_require__(/*! ../../images/specialties/daisy_002.jpg */ "./images/specialties/daisy_002.jpg"),
    award: "1st Working Bitch, 2nd Novice B, 4th Novice B",
    show: "2002 National",
    date: "2002-03-27T08:00:00Z",
    dog: "Daisy",
    id: 21
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Daisy 009.jpg */ "./images/specialties/Daisy 009.jpg"),
    award: "Best of Opposite Sex",
    show: "NewfFla Regional",
    date: "2002-06-27T08:00:00Z",
    dog: "Daisy",
    id: 21
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Daisy2001.jpg */ "./images/specialties/Daisy2001.jpg"),
    award: "1st Working Bitch",
    show: "2001 National",
    date: "2001-04-27T08:00:00Z",
    dog: "Daisy",
    id: 21
  }, {
    image: __webpack_require__(/*! ../../images/specialties/Daisy2000.jpg */ "./images/specialties/Daisy2000.jpg"),
    award: "4th 12-15 Sweeps",
    show: "2000 National",
    date: "2000-04-27T08:00:00Z",
    dog: "Daisy",
    id: 21
  }]
};
initState.awards.sort(byDateDesc);
initState.litters.sort(byDOB);
initState.dogs.sort(byDOB);
initState.specialties = initState.awards.slice();
initState.topTwenty = initState.awards.slice();
initState.topTwenty.filter(function (dog) {
  return dog.toptwenty == true;
});
initState.registerOfMerit = initState.awards.slice();
initState.registerOfMerit.filter(function (dog) {
  return dog.rom == true;
});
initState.champions = initState.dogs.slice();
initState.champions.filter(function (dog) {
  return dog.ch == true;
});

function byDOB(a, b) {
  if (a.dob < b.dob) return 1;
  if (a.dob > b.dob) return -1;
  return 0;
}

function byDateDesc(a, b) {
  if (a.date < b.date) return 1;
  if (a.date > b.date) return -1;
  return 0;
}

function byDateAsc(a, b) {
  if (b.date < a.date) return 1;
  if (b.date > a.date) return -1;
  return 0;
}

function byDogDesc(a, b) {
  if (a.dog < b.dog) return 1;
  if (a.dog > b.dog) return -1;
  return 0;
}

function byDogAsc(a, b) {
  if (b.dog < a.dog) return 1;
  if (b.dog > a.dog) return -1;
  return 0;
}

var cartReducer = function cartReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_11__["SET_CURRENT_DOG"]) {
    return _objectSpread({}, state, {
      currentDog: action.id
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_11__["SET_CURRENT_LITTER"]) {
    return _objectSpread({}, state, {
      currentLitter: action.id
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_11__["SORT_AWARDS"]) {
    var sortFunction = byDateDesc;

    switch (action.value) {
      case "1":
        sortFunction = byDateDesc;
        break;

      case "2":
        sortFunction = byDateAsc;
        break;

      case "3":
        sortFunction = byDogDesc;
        break;

      case "4":
        sortFunction = byDogAsc;
        break;
    }

    state.awards.sort(sortFunction);
    return _objectSpread({}, state, {
      awards: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__["default"])(state.awards)
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_11__["ADD_TO_CART"]) {
    var addedItem = state.products.find(function (item) {
      return item.id === action.id;
    }); //check if the action id exists in the addedItems

    var existed_item = state.addedItems.find(function (item) {
      return action.id === item.id;
    });

    if (existed_item) {
      addedItem.quantity += 1;
      return _objectSpread({}, state, {
        total: state.total + addedItem.price
      });
    } else {
      addedItem.quantity = 1; //calculating the total

      var newTotal = state.total + addedItem.price;
      return _objectSpread({}, state, {
        addedItems: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__["default"])(state.addedItems), [addedItem]),
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_11__["ADD_TO_COMPARE"]) {
    var addedItemToCompare = state.products.find(function (item) {
      return item.id === action.id;
    });
    addedItemToCompare.quantity = 1;
    return _objectSpread({}, state, {
      addedItemsToCompare: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__["default"])(state.addedItemsToCompare), [addedItemToCompare])
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_11__["ADD_QUANTITY_WITH_NUMBER"]) {
    var _addedItem = state.products.find(function (item) {
      return item.id === action.id;
    }); //check if the action id exists in the addedItems


    var _existed_item = state.addedItems.find(function (item) {
      return action.id === item.id;
    });

    if (_existed_item) {
      _addedItem.quantity += action.qty;
      return _objectSpread({}, state, {
        total: state.total + _addedItem.price * action.qty
      });
    } else {
      _addedItem.quantity = action.qty; //calculating the total

      var _newTotal = state.total + _addedItem.price * action.qty;

      return _objectSpread({}, state, {
        addedItems: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__["default"])(state.addedItems), [_addedItem]),
        total: _newTotal
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_11__["REMOVE_ITEM"]) {
    var itemToRemove = state.addedItems.find(function (item) {
      return action.id === item.id;
    });
    var new_items = state.addedItems.filter(function (item) {
      return action.id !== item.id;
    }); //calculating the total

    var _newTotal2 = state.total - itemToRemove.price * itemToRemove.quantity;

    return _objectSpread({}, state, {
      addedItems: new_items,
      total: _newTotal2
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_11__["REMOVE_ITEM_FROM_COMPARE"]) {
    var _new_items = state.addedItemsToCompare.filter(function (item) {
      return action.id !== item.id;
    });

    return _objectSpread({}, state, {
      addedItemsToCompare: _new_items
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_11__["ADD_QUANTITY"]) {
    var _addedItem2 = state.products.find(function (item) {
      return item.id === action.id;
    });

    _addedItem2.quantity += 1;

    var _newTotal3 = state.total + _addedItem2.price;

    return _objectSpread({}, state, {
      total: _newTotal3
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_11__["SUB_QUANTITY"]) {
    var _addedItem3 = state.products.find(function (item) {
      return item.id === action.id;
    }); //if the qt == 0 then it should be removed


    if (_addedItem3.quantity === 1) {
      var _new_items2 = state.addedItems.filter(function (item) {
        return item.id !== action.id;
      });

      var _newTotal4 = state.total - _addedItem3.price;

      return _objectSpread({}, state, {
        addedItems: _new_items2,
        total: _newTotal4
      });
    } else {
      _addedItem3.quantity -= 1;

      var _newTotal5 = state.total - _addedItem3.price;

      return _objectSpread({}, state, {
        total: _newTotal5
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_11__["ADD_SHIPPING"]) {
    return _objectSpread({}, state, {
      shipping: state.shipping += 6
    });
  }

  if (action.type === 'SUB_SHIPPING') {
    return _objectSpread({}, state, {
      shipping: state.shipping -= 6
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_11__["RESET_CART"]) {
    return _objectSpread({}, state, {
      addedItems: [],
      total: 0,
      shipping: 0
    });
  } else {
    return state;
  }
};

var initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  return Object(redux__WEBPACK_IMPORTED_MODULE_8__["createStore"])(cartReducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_9__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_8__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_10__["default"])));
};

/***/ })

})
//# sourceMappingURL=_app.js.0f32a43ffd6f9d7eaa3c.hot-update.js.map