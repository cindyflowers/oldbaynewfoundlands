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
  addedItems: [],
  addedItemsToCompare: [],
  total: 0,
  shipping: 0,
  currentDog: 1,
  currentLitter: 1,
  dogs: [{
    id: 1,
    call: "Sirius",
    toptwenty: "",
    ours: true,
    sex: "male",
    stud: true,
    name: "GCH Old Bay's Let's Get Sirius CGC, TDI",
    sire: "CH Bear N Mind's Maritime Traveler",
    dam: "CH Waterford FrontPage",
    dob: "10/26/2010",
    neutered: false,
    rip: "",
    owner: "Cindy and John Flowers",
    aka: "Seriously Cute, Serial",
    lives: "Cindy and John Flowers",
    health: "http://www.offa.org/display.html?appnum=1497430#animal",
    image: __webpack_require__(/*! ../../images/info/Sirius.jpg */ "./images/info/Sirius.jpg"),
    Titles: [{
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
    id: 2,
    call: "Bennie",
    toptwenty: "",
    ours: true,
    sex: "male",
    stud: false,
    name: "OLD BAY'S BUMBLE BENNIE",
    sire: "GCH Bear N Mind's Stand Up And Cheer, RN, DD",
    dam: "GCH Old Bay's Lucy Fur",
    dob: "December 9, 2012",
    neutered: true,
    rip: "",
    owner: "Cindy and John Flowers",
    aka: "	Bennie Boo Boo Bear",
    lives: "Kathy Hamilton",
    health: "http://www.offa.org/display.html?appnum=1565055#animal",
    image: __webpack_require__(/*! ../../images/info/Bennie.jpg */ "./images/info/Bennie.jpg"),
    Titles: []
  }, {
    id: 3,
    call: "Sunny",
    toptwenty: "",
    ours: true,
    stud: false,
    sex: "male",
    name: "Old Bay's Seriously Charming Son",
    sire: "GCH Old Bay's Let's Get Sirius",
    dam: "GCH Old Bay's Please Don't Squeeze The Charm'n",
    dob: "December 5, 2013",
    neutered: true,
    rip: "",
    owner: "Cindy and John Flowers",
    aka: "Sonnora",
    lives: "Cindy and John Flowers",
    health: "https://www.ofa.org/advanced-search?f=sr&appnum=1718393",
    image: __webpack_require__(/*! ../../images/info/Sunny.jpg */ "./images/info/Sunny.jpg"),
    Titles: []
  }, {
    id: 4,
    call: "Rolex",
    toptwenty: "2017",
    ours: true,
    sex: "male",
    stud: true,
    name: "GCHB Old Bay's Perfect Timing",
    sire: "CH Old Bay's Lead Me To Temptation ",
    dam: "Old Bay's Seasoned with Spice ROM",
    dob: "February 23, 2014",
    neutered: false,
    rip: "",
    owner: "Cindy Flowers and Kathy Hamilton",
    aka: "Rollie-Pollie-Bear",
    lives: "Cindy and John Flowers",
    health: "http://www.offa.org/display.html?appnum=1718399#animal",
    image: __webpack_require__(/*! ../../images/info/Rolex.jpg */ "./images/info/Rolex.jpg"),
    Titles: [{
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
    }],
    Awards: [{
      "award": "NCA Select",
      "date": "2018",
      "show": "National Specialty"
    }, {
      "award": "NCA Top Twenty",
      "date": "2017",
      "show": "National Specialty"
    }]
  }, {
    id: 5,
    call: "Metronome",
    toptwenty: "",
    ours: true,
    sex: "male",
    stud: true,
    name: "CH Old Bay's Keeping Time With Sun Valley",
    sire: "GCHB Old Bay's Perfect Timing",
    dam: "GCHB Old Bay's Keep It Simple ROM",
    dob: "June 23, 2017",
    neutered: false,
    rip: "",
    owner: "Cindy and John Flowers",
    aka: "Metro",
    lives: "Mike and Kathy Paxton",
    health: "https://www.ofa.org/advanced-search?f=sr&appnum=2027902",
    image: __webpack_require__(/*! ../../images/info/Metro.jpg */ "./images/info/Metro.jpg"),
    Titles: [{
      "title": "CH",
      "date": "05/26/2018",
      "org": "AKC"
    }],
    Awards: [{
      "award": "1st 9-12 Dog",
      "date": "2018",
      "show": "National Specialty"
    }, {
      "award": "1st 9-12 Puppy Sweeps",
      "date": "2018",
      "show": "National Specialty"
    }, {
      "award": "Best of Opposite in Sweepstakes",
      "date": "2018",
      "show": "National Specialty"
    }]
  }, {
    id: 6,
    call: "Maestro",
    toptwenty: "",
    ours: true,
    sex: "male",
    stud: true,
    name: "CH Old Bay's Master of Time in Dreamhaven",
    sire: "GCHB Old Bay's Perfect Timing",
    dam: "GCHB Old Bay's Snowball's Chance",
    dob: "January 11, 2018",
    neutered: false,
    rip: "",
    owner: "Cindy and John Flowers and Andrea Jung and Kathy Hamilton",
    aka: "Maestro :-)",
    lives: "Cindy and John Flowers",
    health: "https://www.ofa.org/advanced-search?f=sr&appnum=2027902",
    image: __webpack_require__(/*! ../../images/info/Maestro.jpg */ "./images/info/Maestro.jpg"),
    Titles: [{
      "title": "CH",
      "date": "09/23/2018",
      "org": "AKC"
    }]
  }, {
    id: 7,
    call: "Nemo",
    toptwenty: "",
    ours: false,
    coown: true,
    stud: false,
    sex: "male",
    name: "CH Old Bay's Finding BluWater",
    sire: "GCHB Old Bay's Perfect Timing",
    dam: "OLD BAY'S SPICIN' IT UP AT BLUWATER",
    dob: "12/21/2017",
    neutered: true,
    rip: "",
    owner: "Cindy and John Flowers and Joan Locker-Thuring",
    aka: "Nemonator",
    lives: "Jenni and David Arnett",
    health: "https://www.ofa.org/advanced-search?f=sr&appnum=1955991",
    image: __webpack_require__(/*! ../../images/info/Nemo.jpg */ "./images/info/Nemo.jpg"),
    Titles: [{
      "title": "CH",
      "date": "01/06/2019",
      "org": "AKC"
    }]
  }, {
    id: 8,
    call: "Raisin",
    toptwenty: "",
    ours: true,
    stud: false,
    dams: true,
    sex: "female",
    name: "CH Old Bay's Raging Infurno",
    sire: "CH CYPRESS BAY IMAT CORNERBROOK",
    dam: "GCH Old Bay's Lucy Fur ROM",
    dob: "September 10, 2011",
    neutered: true,
    rip: "",
    owner: "Kathy Hamilton, John Borklund and Cindy Flowers",
    aka: "Rasinette, Rasie",
    lives: "Kathy Hamilton",
    health: "http://www.offa.org/display.html?appnum=1522576#animal",
    image: __webpack_require__(/*! ../../images/info/Raisin.jpg */ "./images/info/Raisin.jpg"),
    Titles: [{
      "title": "CH",
      "date": "07/29/2016",
      "org": "AKC"
    }]
  }, {
    id: 9,
    call: "Kiss",
    toptwenty: "2018",
    rom: true,
    ours: true,
    dams: true,
    stud: false,
    sex: "female",
    name: "GCHB Old Bay's Keep It Simple ROM",
    sire: "GCH Sun Valley's It's As Simple As A.B.C (HG/L/P/HrC/Cn/Cerf)",
    dam: "GCH Old Bay's Please Don't Squeeze The Charm'n CGC, TDI (HF/L/P/CrC/Cn/Cerf/DNA) ",
    dob: "November 25, 2014",
    neutered: false,
    rip: "",
    owner: "Cindy Flowers & Kathy Hamilton & John Flowers",
    aka: "Kissy",
    lives: "Cindy and John Flowers",
    health: "http://www.offa.org/display.html?appnum=1698851#animal",
    image: __webpack_require__(/*! ../../images/info/Kiss.jpg */ "./images/info/Kiss.jpg"),
    Titles: [{
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
      "title": "ROM",
      "date": "12/31/2019",
      "org": "AKC"
    }],
    Awards: [{
      "award": "Top Twenty",
      "date": "2018",
      "show": "National Specialty"
    }, {
      "award": "NCA Register of Merit",
      "date": "2019",
      "show": "National Specialty"
    }]
  }, {
    id: 10,
    call: "Snowball",
    toptwenty: "",
    ours: false,
    coown: true,
    stud: false,
    sex: "female",
    name: "GCH CH Old Bay's Snowball's Chance CD",
    sire: "VN GCH Southwind's Pouch Cove Dark Star CD, RE, TDD, WRD3",
    dam: "GCH CH Old Bay's Lucy Fur CGC, TDI, THDN",
    dob: "February 4, 2014",
    neutered: false,
    rip: "",
    owner: "Andrea Jung and Cindy Flowers and Kathy Hamilton",
    aka: "SnowBeast",
    lives: "Andrea Jung",
    health: "http://www.offa.org/display.html?appnum=1718388#animal",
    image: __webpack_require__(/*! ../../images/info/Snowball.jpg */ "./images/info/Snowball.jpg"),
    Titles: [{
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
    id: 11,
    call: "Flash",
    toptwenty: "2018",
    ours: false,
    coown: true,
    stud: false,
    sex: "male",
    name: "GCHS CH Old Bay's Big Bang CGC",
    sire: "VN GCH Southwind's Pouch Cove Dark Star CD, RE, TDD, WRD3",
    dam: "GCH CH Old Bay's Lucy Fur CGC, TDI, THDN",
    dob: "February 4, 2014",
    neutered: false,
    rip: "",
    owner: "Anne and David Nored and Cindy Flowers",
    aka: "Flash Man",
    lives: "Anne and David Nored",
    health: "https://www.ofa.org/advanced-search?f=sr&appnum=1876590",
    image: __webpack_require__(/*! ../../images/info/Flash.jpg */ "./images/info/Flash.jpg"),
    Titles: [{
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
    }],
    Awards: [{
      "award": "Top Twenty",
      "date": "2018",
      "show": "National Specialty"
    }]
  }, {
    id: 12,
    call: "Carson",
    toptwenty: "",
    ours: true,
    stud: false,
    sex: "male",
    name: "BISS GCH PORICIA'S STRAIGHT TO THE TOP CGC, TDI, ROM, HOF",
    sire: "",
    dam: "",
    dob: "September 7, 2005",
    neutered: false,
    rip: "December 11, 2019",
    owner: "Kathy Hamilton and Pat Hall",
    aka: "Carson-ova",
    lives: "Kathy Hamilton ",
    health: "",
    image: __webpack_require__(/*! ../../images/info/Carson.jpg */ "./images/info/Carson.jpg"),
    Titles: [{
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
    }],
    Awards: [{
      "award": "Best of Breed",
      "date": "2015",
      "show": "National Specialty"
    }]
  }, {
    id: 13,
    call: "Sparkle",
    toptwenty: "",
    ours: true,
    stud: false,
    sex: "female",
    name: "CH Old Bay's Sparks Are Flyin', RN, WD",
    sire: "CH Top Shelf's Troubles A Brewin, DD",
    dam: "GCH TOP SHELF SPICED WITH OLD BAY, NJP",
    dob: "December 3, 2008",
    neutered: false,
    rip: "January 2018",
    owner: "Cindy and John Flowers and Rose Miller",
    aka: "Spark, Sparky, Sparkly, Sparkly-Darkly-Dog",
    lives: "Cindy and John Flowers",
    health: "http://www.offa.org/display.html?appnum=1370314#animal",
    image: __webpack_require__(/*! ../../images/info/Sparkle.jpg */ "./images/info/Sparkle.jpg"),
    Titles: [{
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
    id: 14,
    call: "Lucy",
    toptwenty: "",
    rom: true,
    ours: true,
    stud: false,
    sex: "female",
    name: "GCH CH OLD BAY'S LUCY FUR CGC, TDI, THDN, ROM",
    sire: "Muddy Creek's Carson",
    dam: "CH OLD BAY'S HELLFROZOVER TOPSHELF ROM",
    dob: "June 9, 2009",
    neutered: false,
    rip: "April 29, 2017",
    owner: "Kathy Hamilton & John Borklund & Cindy Flower",
    aka: "Lou Lou, Lucy I'm Home, LucyFur",
    lives: "Kathy Hamilton",
    health: "http://www.offa.org/display.html?appnum=1429095#animal",
    image: __webpack_require__(/*! ../../images/info/Lucy.jpg */ "./images/info/Lucy.jpg"),
    Titles: [{
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
    id: 15,
    call: "Spice",
    toptwenty: "2010, 2012",
    rom: true,
    ours: true,
    stud: false,
    sex: "female",
    name: "BISS GCH CH TOP SHELF SPICED WITH OLD BAY, NJP, RN, DD, ROM",
    sire: "CH Pouch Coves Too Close To Call",
    dam: "Top Shelfs Something Different ROM",
    dob: "April 29, 2005",
    neutered: false,
    rip: "April 2017",
    owner: "Cindy and John Flowers",
    aka: "	Spicy, Spice Girl, Licky, Licky Mill, Spice Cake, Cakes",
    lives: "Cindy and John Flowers",
    health: "http://www.offa.org/display.html?appnum=1240326#animal",
    image: __webpack_require__(/*! ../../images/info/Spice.jpg */ "./images/info/Spice.jpg"),
    Titles: [{
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
    }],
    Awards: [{
      "award": "Top Twenty",
      "date": "2010",
      "show": "National Specialty"
    }, {
      "award": "Top Show Bitch",
      "date": "2010",
      "show": "NCA"
    }, {
      "award": "Top Twenty",
      "date": "2012",
      "show": "National Specialty"
    }]
  }, {
    id: 16,
    call: "Dexter",
    toptwenty: "",
    rom: false,
    ours: true,
    stud: false,
    sex: "male",
    name: "GCH Allegiance Rock The Boat OldBay",
    sire: "CH Top Shelfs On The Rocks",
    dam: "CH Darbydales Zoo Two",
    dob: "September 14, 2006",
    neutered: false,
    rip: "September 18, 2014",
    owner: "Kathy Hamilton",
    aka: "	Dex, Dexi, Dex-a-trim, Walking Head",
    lives: "Kathy Hamilton",
    health: "http://www.offa.org/display.html?appnum=1240326#animal",
    image: __webpack_require__(/*! ../../images/info/Dexter.jpg */ "./images/info/Dexter.jpg"),
    Titles: [{
      "title": "CH",
      "date": "07/29/2007",
      "org": "AKC"
    }, {
      "title": "GCH",
      "date": "11/29/2010",
      "org": "AKC"
    }]
  }, {
    id: 17,
    call: "Simon",
    toptwenty: "",
    rom: false,
    ours: true,
    stud: false,
    sex: "male",
    name: "CH TOP SHELF'S SIMPLY IRRESISTIBLE, DD, WD, OAP, AJP",
    sire: "BISS, CH NUMA'S HAD TO BE POUCH COVE, DD ROM",
    dam: "VN CH TOP SHELF'S STAR DAISY, CD, DD, WRD ROM",
    dob: "May 16, 2002",
    neutered: false,
    rip: "September 2, 2014",
    owner: "Katie Amundson & Cindy Flowers",
    aka: "Simonator, Simatraitor, Tater, Tater Tot, Tate",
    lives: "Katie Amundson & Cindy Flowers",
    health: "http://www.offa.org/display.html?appnum=1096035#animal",
    image: __webpack_require__(/*! ../../images/info/Simon.jpg */ "./images/info/Simon.jpg"),
    Titles: [{
      "title": "AJP",
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
    id: 18,
    call: "Chilly",
    toptwenty: "",
    rom: true,
    ours: true,
    stud: false,
    sex: "female",
    name: "CH OLD BAY'S HELLFROZOVER TOPSHELF RN ROM",
    sire: "CH TOP SHELF'S ON THE ROCKS, ROM",
    dam: "CH TOP SHELF'S WILD NIGHT OUT, ROM",
    dob: "September 26, 2005",
    neutered: false,
    rip: "August 2014",
    owner: "Nancy Beres & Cindy Flowers",
    aka: "Chillster, Chinchilla, The Arsonist, Fire Starter",
    lives: "Nancy Beres ",
    health: "http://www.offa.org/display.html?appnum=1240358#animal",
    image: __webpack_require__(/*! ../../images/info/Chilly.jpg */ "./images/info/Chilly.jpg"),
    Titles: [{
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
    id: 19,
    call: "Katie",
    toptwenty: "",
    rom: false,
    vn: true,
    ours: true,
    stud: false,
    sex: "female",
    name: "VN CH TOP SHELF'S JUMP UP N KISS ME, CD, DD1, WRD2, NAP, RN, CGC, TDI",
    sire: "CH TOP SHELF'S ON THE ROCKS, ROM",
    dam: "CH TOP SHELF'S WILD NIGHT OUT, ROM",
    dob: "March 5, 2002",
    neutered: false,
    rip: "May 18, 2012",
    owner: "Cindy and John Flowers",
    aka: "Kate, Kaitlin, Katydid, Katie-Did-It",
    lives: "Cindy and John Flowers",
    health: "http://www.offa.org/display.html?appnum=1096033#animal",
    image: __webpack_require__(/*! ../../images/info/Katie.jpg */ "./images/info/Katie.jpg"),
    Titles: [{
      "title": "VN - Versitile Newfoundland",
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
    id: 20,
    call: "Dasher",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: true,
    stud: false,
    sex: "male",
    name: "Old Bay's Dash of Spice",
    sire: "CH TOP SHELF'S ON THE ROCKS, ROM",
    dam: "CH TOP SHELF'S WILD NIGHT OUT, ROM",
    dob: "December 25, 2010",
    neutered: false,
    rip: "February 24, 2011",
    owner: "Cindy and John Flowers",
    aka: "Dash, Dashing",
    lives: "Cindy and John Flowers",
    health: "",
    image: __webpack_require__(/*! ../../images/info/Dasher.jpg */ "./images/info/Dasher.jpg"),
    Titles: []
  }, {
    id: 21,
    call: "Daisy",
    toptwenty: "",
    rom: true,
    vn: true,
    ours: true,
    stud: false,
    sex: "female",
    name: "VN CH TOP SHELF'S STAR DAISY CD, TDD, WD1, WRD, ROM ",
    sire: "CH Darbydales Keep´M Guess´N",
    dam: "VN CH Top Shelfs Baileys Irish Cream CDX, DD, WRD",
    dob: "February 17, 1999",
    neutered: false,
    rip: "September 29, 2011",
    owner: "Cindy and John Flowers",
    aka: "Daisy Dukes, Dukes, Dukey, Daisy May, Dazed",
    lives: "Cindy and John Flowers",
    health: "http://www.offa.org/display.html?appnum=830863#animal",
    image: __webpack_require__(/*! ../../images/info/Daisy.jpg */ "./images/info/Daisy.jpg"),
    Titles: [{
      "title": "Register of Merit",
      "date": "12/31/2016",
      "org": "NCA"
    }, {
      "title": "VN - Versatile Newfoundland",
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
    id: 22,
    call: "Flyer",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: true,
    stud: false,
    sex: "male",
    name: "MUDDY CREEKS FREQUENT FLYER",
    sire: "Muddy Creeks",
    dam: "Muddy Creek Old Bays Moonbeam",
    dob: "2000",
    neutered: false,
    rip: "September 28, 2010",
    owner: "Kathy Hamilton",
    aka: "	Fly, Fly Paper, Fly me to the moon",
    lives: "Kathy Hamilton",
    health: "",
    image: __webpack_require__(/*! ../../images/info/Flyer.jpg */ "./images/info/Flyer.jpg"),
    Titles: []
  }, {
    id: 23,
    call: "Tommy",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: true,
    stud: false,
    sex: "male",
    name: "CH TOP SHELF TOM COLINS, DD, WRD3",
    sire: "CH Darbydales Keep´M Guess´N",
    dam: "VN CH Top Shelfs Baileys Irish Cream CDX, DD, WRD",
    dob: "March 8, 2001",
    neutered: false,
    rip: "September 16, 2010",
    owner: "Cindy and John Flowers",
    aka: "Tom, Thomas The Train, Taahhh-me",
    lives: "Cindy and John Flowers",
    health: "http://www.offa.org/display.html?appnum=1041710#animal",
    image: __webpack_require__(/*! ../../images/info/Tommy.jpg */ "./images/info/Tommy.jpg"),
    Titles: [{
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
    id: 24,
    call: "Opie",
    toptwenty: "2004, 2005",
    ours: true,
    stud: false,
    sex: "male",
    name: "BISS CH TOP SHELF'S SMOOTH OPERATOR, CGC, TDI",
    sire: "BISS, CH NUMA'S HAD TO BE POUCH COVE, DD ROM",
    dam: "VN CH TOP SHELF'S STAR DAISY, CD, DD, WRD ROM ",
    dob: "May 16, 2002",
    neutered: false,
    rip: "September 20, 2006",
    owner: "Kathy Hamilton and Cindy and John Flowers",
    aka: "Obi-Wan-Konobi",
    lives: "Kathy Hamilton",
    health: "http://www.offa.org/display.html?appnum=1096214#animal",
    image: __webpack_require__(/*! ../../images/info/Opie.jpg */ "./images/info/Opie.jpg"),
    Titles: [{
      "title": "CH",
      "date": "10/26/2003",
      "org": "AKC"
    }],
    Awards: [{
      "award": "Top Twenty",
      "date": "2004",
      "show": "Honored at the 2005 National"
    }, {
      "award": "Top Twenty",
      "date": "2005",
      "show": "Honored at the 2006 National"
    }]
  }, {
    id: 25,
    call: "Yogi",
    toptwenty: "",
    ours: true,
    stud: false,
    sex: "male",
    name: "SHADRACK'S MIDNITE MAGIC CD, NAP, RE, TDD, WRD4",
    sire: "CH Shadracks Midnite Habit",
    dam: "CH Midnite Startin´ Over W Shadrack ",
    dob: "June 30, 1999",
    neutered: false,
    rip: "March 15, 2009",
    owner: "Cindy & John Flowers",
    aka: "Yogi-Bear, Yogity-Bogity-Bear, Yoggers, Yogi Beara, Smarter Than the Average Bear, Best Puppy in the Whole World",
    lives: "Cindy & John Flowers",
    health: "",
    image: __webpack_require__(/*! ../../images/info/Yogi.jpg */ "./images/info/Yogi.jpg"),
    Titles: [{
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
    id: 26,
    call: "Sporty",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: true,
    stud: false,
    sex: "female",
    name: "CH. OLD BAY'S SPORTIN' A SPICY ATTITUDE",
    sire: "CH Skippers Eminence King of Helluland",
    dam: "CH Top Shelfs Spiced With Old Bay ROM",
    dob: "April 10, 2008",
    neutered: false,
    rip: "August 10, 2009",
    owner: "Cindy and John Flowers",
    aka: "Sporty Spice, Good Sport, Bad Sport, Sportscaster, Sport-Zilla",
    lives: "Cindy and John Flowers",
    health: "http://www.offa.org/display.html?appnum=1370494#animal",
    image: __webpack_require__(/*! ../../images/info/Sporty.jpg */ "./images/info/Sporty.jpg"),
    Titles: [{
      "title": "CH",
      "date": "04/19/2009",
      "org": "AKC"
    }]
  }, {
    id: 27,
    call: "Burnie",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: true,
    stud: false,
    sex: "male",
    name: "OLD BAY'S SITTIN ON THE BACK BURNER",
    sire: "BISS CH SUNVALLEY PETITIONS POUCH COVE, ROM",
    dam: "CH OLD BAY'S HELLFROZOVER TOPSHELF ROM",
    dob: "May 10, 2008",
    neutered: false,
    rip: "July 27, 2009",
    owner: "Cindy Flowers and Kathy Hamiltons",
    aka: "Bernardo, Burn, Burnard, Burn Pile, Fat Face",
    lives: "Cindy Flowers and Kathy Hamilton",
    health: "",
    image: __webpack_require__(/*! ../../images/info/Burnie.jpg */ "./images/info/Burnie.jpg"),
    Titles: []
  }, {
    id: 28,
    call: "Snoopy",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: true,
    stud: false,
    sex: "female",
    name: "MUDDY CREEK OLD BAYS MOONBEAM ",
    sire: "Ledgelights Muddy Creek Caruso",
    dam: "	Muddy Creeks Mercedes",
    dob: "",
    neutered: false,
    rip: "2007",
    owner: "Kathy Hamiltons",
    aka: "Moon, Snoop",
    lives: "Kathy Hamilton",
    health: "",
    image: __webpack_require__(/*! ../../images/info/Snoopy.jpg */ "./images/info/Snoopy.jpg"),
    Titles: []
  }, {
    id: 29,
    call: "RRRocky",
    toptwenty: "2006",
    rom: true,
    ours: true,
    stud: false,
    sex: "male",
    name: "CH Top Shelf's On The Rocks ROM",
    sire: "BISS, CH NUMA'S HAD TO BE POUCH COVE, DD ROM",
    dam: "VN CH TOP SHELF'S STAR DAISY, CD, DD, WRD ROM",
    dob: "May 16, 2002",
    neutered: false,
    rip: "September 15, 2006",
    owner: "Kathy Hamilton and Cindy and John Flowers",
    aka: "RRRRRRRocky",
    lives: "Kathy Hamilton",
    health: "http://www.offa.org/display.html?appnum=1096214#animal",
    image: __webpack_require__(/*! ../../images/info/Rocky.jpg */ "./images/info/Rocky.jpg"),
    Titles: [{
      "title": "CH",
      "date": "11/16/2003",
      "org": "AKC"
    }, {
      "title": "Register of Merit",
      "date": "12/31/2009",
      "org": "NCA"
    }],
    Awards: [{
      "award": "Top Twenty",
      "date": "2006",
      "show": "Honored at the 2007 National"
    }]
  }, {
    id: 30,
    call: "Betty",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: true,
    stud: false,
    sex: "female",
    name: "BROAD RUN'S BLACK BETTY, CD, TDD, WRD",
    sire: "",
    dam: "Shadracks Babylon Beauty",
    dob: "May 30, 1992",
    neutered: false,
    rip: "May 19, 2006",
    owner: "Cindy & John Flowers",
    aka: "Betty Boop",
    lives: "Cindy & John Flowers",
    health: "",
    image: __webpack_require__(/*! ../../images/info/Betty.jpg */ "./images/info/Betty.jpg"),
    Titles: [{
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
    id: 31,
    call: "Kindle",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: true,
    stud: false,
    sex: "female",
    name: "CH Old Bay's Light My Fire With Dreamhaven",
    sire: "VN GCH Southwind's Pouch Cove Dark Star CD, RE, TDD, WRD3",
    dam: "GCHB Old Bay's Keep It Simple ROM",
    dob: "November 10, 2018",
    neutered: false,
    rip: "",
    owner: "Kathy Hamilton, Andrea Jung and Cindy Flowers",
    aka: "Singleton",
    lives: "Kathy Hamilton",
    health: "",
    image: __webpack_require__(/*! ../../images/info/Kindle.jpg */ "./images/info/Kindle.jpg"),
    Titles: [{
      "title": "CH",
      "date": "10/30/2019",
      "org": "AKC"
    }]
  }, {
    id: 32,
    call: "Sing",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: true,
    stud: false,
    sex: "female",
    name: "Old Bay's I Put The Sing In Single",
    sire: "GCH Chateaunewf'N Nakiska's Legend Of The Stones",
    dam: "GCHB Old Bay's Keep It Simple ROM",
    dob: "November 8, 2019",
    neutered: false,
    rip: "",
    owner: "Cindy & John Flowers",
    aka: "Singleton",
    lives: "Cindy & John Flowers",
    health: "",
    image: __webpack_require__(/*! ../../images/info/Sing.jpg */ "./images/info/Sing.jpg"),
    Titles: []
  }, {
    id: 33,
    call: "Miss Flash",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    coown: true,
    stud: false,
    sex: "female",
    name: "CH Celtic Cross Mischief Managed At Old Bay RN, RA, WD",
    sire: "GCH Old Bay's Potter As In Harry",
    dam: "CH Old Bay's Sparks Are Flyin'",
    dob: "09/06/2011",
    neutered: true,
    rip: "",
    owner: "Rosemary Miller & Cindy Flowers & Barbara Plasse",
    aka: "",
    lives: "Rose",
    health: "",
    image: "",
    Titles: [{
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
    id: 34,
    call: "Jack",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    coown: true,
    stud: false,
    sex: "male",
    name: "CH Celtic Cross Skipjack At Old Bay CGC",
    sire: "GCH 	Old Bay's Here At Last",
    dam: "CH Celtic Cross Mischief Managed At Old Bay'",
    dob: "10/17/2013",
    neutered: true,
    rip: "",
    owner: "Michael Acosta & Cindy Flowers & Rosemary Miller & Susan Acosta",
    aka: "",
    lives: "Mike and Susan",
    health: "",
    image: "",
    Titles: [{
      "title": "CGC",
      "date": "10/26/2014",
      "org": "AKC"
    }, {
      "title": "CH",
      "date": "11/06/2015",
      "org": "AKC"
    }]
  }, {
    id: 35,
    call: "Tilly",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    stud: false,
    sex: "female",
    name: "CH Dreamhaven's Cascading Waterfalls At Old Bay CGC",
    sire: "Southwind's Pouch Cove Dark Star",
    dam: "GCHB Old Bay's Keep It Simple ROM'",
    dob: "11/10/2018",
    neutered: false,
    rip: "",
    owner: "Wendy Sparks & Andrea Jung & Harold Sparks",
    aka: "",
    lives: "Wendy",
    health: "",
    image: "",
    Titles: [{
      "title": "CGC",
      "date": "04/09/2019",
      "org": "AKC"
    }, {
      "title": "CH",
      "date": "11/09/2019",
      "org": "AKC"
    }]
  }, {
    id: 36,
    call: "Elsa",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    coown: true,
    stud: false,
    sex: "female",
    name: "CH Dreamhaven's Frozen In Time With Old Bay",
    sire: "GCHB Old Bay's Perfect Timing",
    dam: "GCH Old Bay's Snowball's Chance CD",
    dob: "01/11/2018",
    neutered: false,
    rip: "",
    owner: "Andrea Jung & Cindy Flowers",
    aka: "",
    lives: "Andrea",
    health: "",
    image: "",
    Titles: [{
      "title": "CH",
      "date": "11/04/2018",
      "org": "AKCKC"
    }]
  }, {
    id: 37,
    call: "Nash",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    stud: false,
    sex: "male",
    name: "CH Dreamhaven's Sum It Up With Old Bay WD, CGC",
    sire: "Southwind's Pouch Cove Dark Star",
    dam: "GCHB Old Bay's Keep It Simple ROM",
    dob: "11/10/2018",
    neutered: false,
    rip: "",
    owner: "Sue Lynn Morton & Robin Love",
    aka: "",
    lives: "Sue Lynn Morton & Robin Love",
    health: "",
    image: "",
    Titles: [{
      "title": "CGC",
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
    id: 38,
    call: "Essi",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    coown: true,
    stud: false,
    sex: "female",
    name: "Dreamhaven's Old Bay Bright Star Over Brandywine CGC",
    sire: "Southwind's Pouch Cove Dark Star",
    dam: "GCHB Old Bay's Keep It Simple ROM",
    dob: "11/10/2018",
    neutered: false,
    rip: "",
    owner: "Karin Bystol & Cindy Flowers & Andrea Jung & Adam Bystol",
    aka: "",
    lives: "Karin and Adam",
    health: "",
    image: "",
    Titles: [{
      "title": "CGC",
      "date": "05/03/2019",
      "org": "AKC"
    }]
  }, {
    id: 39,
    call: "Fable",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    coown: true,
    stud: false,
    sex: "female",
    name: "CH Dreamhaven's Once Upon A Time At Old Bay CGC",
    sire: "GCHB Old Bay's Perfect Timing",
    dam: "GCH Old Bay's Snowball's Chance",
    dob: "01/11/2018",
    neutered: false,
    rip: "",
    owner: "Rachel Teiman & Cindy Flowers & Andrea Jung & Michael Epstein",
    aka: "",
    lives: "Rachel and Michael",
    health: "",
    image: "",
    Titles: [{
      "title": "CGC",
      "date": "07/25/2018",
      "org": "AKC"
    }, {
      "title": "CH",
      "date": "03/16/2019",
      "org": "AKC"
    }]
  }, {
    id: 40,
    call: "Emma",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    coown: true,
    stud: false,
    sex: "female",
    name: "GCHB Emalani Of Old Bay CGC, RN, WD",
    sire: "Topshelfs Israel Kamakawiwoole",
    dam: "Old Bay's Seasoned With Spice ROM",
    dob: "05/12/2013",
    neutered: false,
    rip: "",
    owner: "Kathy Holshey & Cindy Flowers",
    aka: "",
    lives: "Kathy Holshey",
    health: "",
    image: "",
    Titles: [{
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
    id: 41,
    call: "Sigi",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    stud: false,
    sex: "male",
    name: "CH Old Bay Because I Can",
    sire: "CH Top Shelf Troubles A Brewin",
    dam: "CH Top Shelf Spiced With Old Bay",
    dob: "12/03/2008",
    neutered: false,
    rip: "",
    owner: "Cindy Flowers & John Flowers",
    aka: "",
    lives: "Cindy Flowers & John Flowers",
    health: "",
    image: "",
    Titles: [{
      "title": "CH",
      "date": "05/29/2010",
      "org": "AKC"
    }]
  }, {
    id: 42,
    call: "Sampson",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    stud: false,
    sex: "male",
    name: "CH Old Bay Forged In Flames RN, WD",
    sire: "CH Sunvalley Petitions Pouch Cove",
    dam: "CH Old Bay's Hellfrozover Topshelf",
    dob: "04/10/2008",
    neutered: false,
    rip: "",
    owner: "Karin Bystol & Adam Bystol",
    aka: "",
    lives: "Karin Bystol & Adam Bystol",
    health: "",
    image: "",
    Titles: [{
      "title": "CGC",
      "date": "10/05/2018",
      "org": "AKC"
    }, {
      "title": "CGCA",
      "date": "09/29/2018",
      "org": "AKC"
    }]
  }, {
    id: 43,
    call: "Brenden",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    stud: false,
    sex: "male",
    name: "	Old Bay Irish Maritime Navigator CGC, CGCA",
    sire: "CH Bear N Mind's Maritime Traveler",
    dam: "CH Top Shelf Spiced With Old Bay",
    dob: "12/25/2010",
    neutered: false,
    rip: "",
    owner: "Jessica Regan",
    aka: "",
    lives: "Jessica Regan",
    health: "",
    image: "",
    Titles: [{
      "title": "CGC",
      "date": "10/05/2018",
      "org": "AKC"
    }, {
      "title": "CGCA",
      "date": "09/29/2018",
      "org": "AKC"
    }]
  }, {
    id: 44,
    call: "Rudd",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    stud: false,
    sex: "male",
    name: "CH Old Bay Screerhum Rudder",
    sire: "Muddy Creek's Carson",
    dam: "CH Top Shelfs Cosmopolitan",
    dob: "06/02/2009",
    neutered: false,
    rip: "",
    owner: "Mollie Standish & Carlton Standish",
    aka: "",
    lives: "Mollie Standish & Carlton Standish",
    health: "",
    image: "",
    Titles: [{
      "title": "CH",
      "date": "01/22/2011",
      "org": "AKC"
    }]
  }, {
    id: 45,
    call: "Sonar",
    toptwenty: "",
    rom: false,
    vn: false,
    wa: true,
    ours: false,
    stud: false,
    sex: "male",
    name: "WA Old Bay Sonic Wave AXP, CD, CDX, NAP, NJP, OAP, OJP, UD, DD, DDX, TDD3, TDDX, WD, WRD5, WRDX ",
    sire: "Bear N Mind's Maritime Traveler",
    dam: "CH Waterford Frontpage",
    dob: "06/02/2009",
    neutered: false,
    rip: "",
    owner: "Christie Smith",
    aka: "",
    lives: "Christie Smith",
    health: "",
    image: "",
    Titles: [{
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
    }]
  }, {
    id: 46,
    call: "Spinnaker",
    toptwenty: "",
    rom: false,
    wa: true,
    vn: false,
    ours: false,
    stud: false,
    sex: "male",
    name: "WA Old Bay Spinnaker Flyin CD, CDX, RA, RN, DD, DDX, TDD, TDDX, WD, WRD3",
    sire: "CH Powder Ridge's Dreams Come True",
    dam: "Old Bay's Seasoned With Spice ROM",
    dob: "06/01/2014",
    neutered: true,
    rip: "",
    owner: "Christie Smith",
    aka: "",
    lives: "Christie",
    health: "",
    image: "",
    Titles: [{
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
    }]
  }, {
    id: 47,
    call: "Annie",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    stud: false,
    sex: "female",
    name: "Old Bay's Brewed To Perfection RN",
    sire: "CH Top Shelf Troubles A Brewin",
    dam: "CH Top Shelf Spiced With Old Bay",
    dob: "12/03/2008",
    neutered: false,
    rip: "",
    owner: "Jaclyn Lobur & Rose Miller & Cindy Flowers",
    aka: "",
    lives: "Jaclyn Lobur",
    health: "",
    image: "",
    Titles: [{
      "title": "RN",
      "date": "07/30/2010",
      "org": "AKC"
    }]
  }, {
    id: 48,
    call: "Tiffany",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    coown: true,
    stud: false,
    sex: "female",
    name: "CH Old Bay's Charming Gift",
    sire: "CH Old Bay's Let's Get Sirius",
    dam: "CH Old Bay's Please Don't Squeeze The Charm'n",
    dob: "12/05/2013",
    neutered: false,
    rip: "",
    owner: "Rozalin Shun",
    aka: "",
    lives: "Rozalin Shun",
    health: "",
    image: "",
    Titles: [{
      "title": "CH",
      "date": "01/17/2015",
      "org": "AKC"
    }]
  }, {
    id: 49,
    call: "Luke",
    toptwenty: "",
    rom: false,
    vn: false,
    coown: true,
    ours: false,
    stud: false,
    sex: "female",
    name: "GCH Old Bay's Cool Hand Luke At Belle Harbour",
    sire: "Muddy Creek's Carson",
    dam: "CH Old Bay's Hellfrozover Topshelf",
    dob: "06/09/2009",
    neutered: false,
    rip: "",
    owner: "Dawn Blaine & Cindy Flowers & Becker Reep",
    aka: "",
    lives: "Dawn Blaine & Cindy Flowers & Becker Reep",
    health: "",
    image: "",
    Titles: [{
      "title": "CH",
      "date": "02/03/2012",
      "org": "AKC"
    }, {
      "title": "GCH",
      "date": "10/24/2014",
      "org": "AKC"
    }]
  }, {
    id: 50,
    call: "Jayne",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    stud: false,
    sex: "male",
    name: "	Old Bay's Finest Hour THD",
    sire: "CH Top Shelf Troubles A Brewin",
    dam: "CH Top Shelf Spiced With Old Bay",
    dob: "12/03/2008",
    neutered: false,
    rip: "",
    owner: "Bruce Thaeler & Marty Thaeler",
    aka: "",
    lives: " Bruce Thaeler & Marty Thaeler",
    health: "",
    image: "",
    Titles: [{
      "title": "THD",
      "date": "03/10/2012",
      "org": "AKC"
    }]
  }, {
    id: 51,
    call: "Evan",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    stud: false,
    sex: "male",
    name: "Old Bay's Fur Heaven's Sake CGCA",
    sire: "CH Sunvalley's Its As Simple As Abc",
    dam: "CH Old Bay's Raging Infurno",
    dob: "04/17/2014",
    neutered: true,
    rip: "",
    owner: "Sherry Schaech & Charles Schaech",
    aka: "",
    lives: "Sherry Schaech & Charles Schaech",
    health: "",
    image: "",
    Titles: [{
      "title": "CGC",
      "date": "10/03/2015",
      "org": "AKC"
    }, {
      "title": "CGCA",
      "date": "09/30/2017",
      "org": "AKC"
    }]
  }, {
    id: 52,
    call: "Snickers",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    coown: true,
    stud: false,
    sex: "male",
    name: "CH Old Bay's Fursnickity",
    sire: "CH Bear N Mind's Stand Up And Cheer",
    dam: "CH Old Bay's Lucy Fur",
    dob: "12/09/2012",
    neutered: true,
    rip: "",
    owner: "Kathleen Hamilton & Cindy Flowers",
    aka: "",
    lives: "Cheryl Bandel Wingate",
    health: "",
    image: "",
    Titles: [{
      "title": "CH",
      "date": "06/08/2014",
      "org": "AKC"
    }]
  }, {
    id: 53,
    call: "Allie",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    stud: false,
    sex: "female",
    name: "CH Old Bay's Get My Drift At Powder Ridge",
    sire: "CH Sunvalley Petitions Pouch Cove",
    dam: "CH Old Bay's Hellfrozover Topshelf",
    dob: "04/10/2008",
    neutered: true,
    rip: "",
    owner: "Julia Sharkey & Donald Sharkeys",
    aka: "",
    lives: "Julia Sharkey & Donald Sharkey",
    health: "",
    image: "",
    Titles: [{
      "title": "CH",
      "date": "01/21/2011",
      "org": "AKC"
    }, {
      "title": "GCH",
      "date": "07/05/2013",
      "org": "AKC"
    }]
  }, {
    id: 54,
    call: "Max",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    stud: false,
    sex: "male",
    name: "CH Old Bay's Good To The Last Drop",
    sire: "CH Southwind's Pouch Cove Dark Star",
    dam: "CH Old Bay's Lucy Fur",
    dob: "02/04/2015",
    neutered: true,
    rip: "",
    owner: "Jeffrey Totten & Jane Totten",
    aka: "",
    lives: "Jeffrey Totten & Jane Totten",
    health: "",
    image: "",
    Titles: [{
      "title": "CH",
      "date": "05/22/2016",
      "org": "AKC"
    }]
  }, {
    id: 55,
    call: "Canyon",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    stud: false,
    sex: "male",
    name: "CH Old Bay's Grand Canyon",
    sire: "CH Sunvalley Petitions Pouch Cove",
    dam: "CH Old Bay's Hellfrozover Topshelf",
    dob: "04/10/2008",
    neutered: true,
    rip: "",
    owner: "Linda Boswell & Raymond Boswell",
    aka: "",
    lives: "Linda Boswell & Raymond Boswell",
    health: "",
    image: "",
    Titles: [{
      "title": "CH",
      "date": "01/16/2010",
      "org": "AKC"
    }]
  }, {
    id: 56,
    call: "Hagrid",
    toptwenty: "",
    rom: false,
    vn: false,
    coown: true,
    ours: false,
    stud: false,
    sex: "male",
    name: "Old Bay's Hagrid Keeper Of Magical Creatures CGC",
    sire: "GCH	Old Bay's Potter As In Harry",
    dam: "CH Old Bay's Sparks Are Flyin'",
    dob: "09/06/2011",
    neutered: true,
    rip: "",
    owner: "Mollie Standish & Cindy Flowers",
    aka: "",
    lives: "Mollie Standish",
    health: "",
    image: "",
    Titles: [{
      "title": "CGC",
      "date": "10/28/2013",
      "org": "AKC"
    }]
  }, {
    id: 57,
    call: "Maggie Moo",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    coown: true,
    stud: false,
    sex: "female",
    name: "CH Old Bay's Handful Of Magic Sparkles",
    sire: "GCH	Old Bay's Potter As In Harry",
    dam: "CH Old Bay's Sparks Are Flyin'",
    dob: "09/06/2011",
    neutered: true,
    rip: "",
    owner: "Karen Steinrock & Cindy Flowers",
    aka: "",
    lives: "Karen Steinrock",
    health: "",
    image: "",
    Titles: [{
      "title": "CH",
      "date": "11/23/2013",
      "org": "AKC"
    }]
  }, {
    id: 58,
    call: "Heffalump",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    stud: false,
    sex: "male",
    name: "Old Bay's Helpful Fun-Loving Marine Panda CGC",
    sire: "GCH	Bear N Mind's Maritime Traveler",
    dam: "CH Waterford Frontpage'",
    dob: "10/26/2010",
    neutered: true,
    rip: "",
    owner: "Ms. Marisol Ravicz & Rev. David Wayne Rapier",
    aka: "",
    lives: "Ms. Marisol Ravicz & Rev. David Wayne Rapier",
    health: "",
    image: "",
    Titles: [{
      "title": "CGC",
      "date": "02/24/2013",
      "org": "AKC"
    }]
  }, {
    id: 59,
    call: "Atlas",
    toptwenty: "",
    rom: false,
    vn: true,
    ours: false,
    coown: true,
    stud: false,
    sex: "male",
    name: "VN Old Bay's Here At Last CD, DD, WRD",
    sire: "GCH	Bear N Mind's Maritime Traveler",
    dam: "CH Waterford Frontpage'",
    dob: "10/26/2010",
    neutered: true,
    rip: "",
    owner: "Karin M Bystol & Cindy Flowers & Adam Bystol",
    aka: "",
    lives: "Karin and Adam",
    health: "",
    image: "",
    Titles: [{
      "title": "VN",
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
    id: 60,
    call: "Jet",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    coown: true,
    stud: false,
    sex: "male",
    name: "CH Old Bay's It's Night Before It's Afternoon",
    sire: "GCH	Old Bay's Let's Get Sirius",
    dam: "CH Old Bay's Raging Infurno",
    dob: "10/26/2010",
    neutered: true,
    rip: "",
    owner: "Lezli Alford & Cindy Flowers & Bennett Alford",
    aka: "",
    lives: "Lezli Alford & Bennett Alford",
    health: "",
    image: "",
    Titles: [{
      "title": "CH",
      "date": "04/15/2016",
      "org": "AKC"
    }]
  }, {
    id: 61,
    call: "Justin",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    stud: false,
    sex: "male",
    name: "Old Bay's Just Like Heaven@Mystic Ridge CGC",
    sire: "GCH	Sunvalley's Its As Simple As Abc",
    dam: "CH Old Bay's Raging Infurno",
    dob: "10/26/2010",
    neutered: true,
    rip: "",
    owner: "Dorothy E Rich",
    aka: "",
    lives: "Dorothy E Rich",
    health: "",
    image: "",
    Titles: [{
      "title": "GCG",
      "date": "09/09/2016",
      "org": "AKC"
    }]
  }, {
    id: 62,
    call: "Tate",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    coown: true,
    stud: false,
    sex: "male",
    name: "CH Old Bay's Lead Me To Temptation",
    sire: "CH Bear N Mind's Stand Up And Cheer",
    dam: "CH Old Bay's Lucy Fur",
    dob: "12/09/2012",
    neutered: true,
    rip: "",
    owner: "Karen Steinrock & Cindy Flowers",
    aka: "",
    lives: "Karen Steinrock",
    health: "",
    image: "",
    Titles: [{
      "title": "CH",
      "date": "10/25/2014",
      "org": "AKC"
    }]
  }, {
    id: 63,
    call: "Gracie",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    coown: true,
    stud: false,
    sex: "female",
    name: "GCH Old Bay's Maroon And Gold Graceful Northern Star BN, CD, CGC, TKN",
    sire: "CH Old Bay's Lead Me To Temptation",
    dam: "Old Bay's Seasoned With Spice ROM",
    dob: "12/09/2012",
    neutered: true,
    rip: "",
    owner: "Mary Jeanne Levitt & Cindy Flowers & Laci Peterson",
    aka: "",
    lives: "Mary Jeanne",
    health: "",
    image: "",
    Titles: [{
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
    id: 64,
    call: "Muddy",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    coown: true,
    stud: false,
    sex: "male",
    name: "CH Old Bay's Muddy Waters",
    sire: "	Muddy Creek's Carson",
    dam: "CH Top Shelfs Cosmopolitan",
    dob: "12/09/2012",
    neutered: true,
    rip: "",
    owner: "Kara Osborne & Cindy Flowers & Bill Osborne",
    aka: "",
    lives: "Kara & Bill",
    health: "",
    image: "",
    Titles: [{
      "title": "CH",
      "date": "10/18/2010",
      "org": "AKC"
    }]
  }, {
    id: 65,
    call: "Cosmo",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: true,
    stud: false,
    sex: "female",
    name: "CH Top Shelfs Cosmopolitan",
    sire: "CH Top Shelf's On The Rocks",
    dam: "CH Top Shelfs Wild Night Out",
    dob: "12/09/2012",
    neutered: true,
    rip: "10/9/2016",
    owner: "Cindy Flowers",
    aka: "",
    lives: "Cindy",
    health: "",
    image: __webpack_require__(/*! ../../images/info/Cosmo.jpg */ "./images/info/Cosmo.jpg"),
    Titles: [{
      "title": "CH",
      "date": "01/06/2008",
      "org": "AKC"
    }]
  }, {
    id: 66,
    call: "Fred",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    coown: true,
    stud: false,
    sex: "male",
    name: "CH Old Bay's Oahu Astaire N At",
    sire: "CH Topshelfs Israel Kamakawiwoole",
    dam: "CH Old Bay's Seasoned With Spice",
    dob: "12/09/2012",
    neutered: true,
    rip: "",
    owner: "Cindy Flowers & Kathy Hamilton & John Flowers",
    aka: "",
    lives: "Palidino's",
    health: "",
    image: "",
    Titles: [{
      "title": "CH",
      "date": "03/16/2014",
      "org": "AKC"
    }]
  }, {
    id: 67,
    call: "Parker",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    coown: true,
    stud: false,
    sex: "male",
    name: "CH Old Bay's Paniolo Bruddah At Ohana",
    sire: "CH Topshelfs Israel Kamakawiwoole",
    dam: "CH Old Bay's Seasoned With Spice",
    dob: "12/09/2012",
    neutered: true,
    rip: "",
    owner: "Vic Strunk & Cindy Flowers & Candi Strunk",
    aka: "",
    lives: "Vic & Candi",
    health: "",
    image: "",
    Titles: [{
      "title": "CH",
      "date": "05/24/2015",
      "org": "AKC"
    }, {
      "title": "WD",
      "date": "08/09/2014",
      "org": "NCA"
    }]
  }, {
    id: 68,
    call: "Charm",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    coown: true,
    stud: false,
    sex: "female",
    name: "GCH Old Bay's Please Don't Squeeze The Charm'n",
    sire: "CH Old Bay's Potter As In Harry",
    dam: "CH Old Bay's Sparks Are Flyin'",
    dob: "09/06/2011",
    neutered: true,
    rip: "",
    owner: "Cindy Flowers & John Flowers & Rosemary S Miller",
    aka: "",
    lives: "Nancy Beres",
    health: "",
    image: "",
    Titles: [{
      "title": "CH",
      "date": "01/18/2013",
      "org": "AKC"
    }, {
      "title": "GCH",
      "date": "08/02/2013",
      "org": "AKC"
    }]
  }, {
    id: 70,
    call: "Potter",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    coown: true,
    stud: false,
    sex: "male",
    name: "GCH Old Bay's Potter As In Harry BN, CD, CGC, RN, RA",
    sire: "CH Sunvalley Petitions Pouch Cove",
    dam: "CH Old Bay's Hellfrozover Topshelf",
    dob: "04/10/2008",
    neutered: true,
    rip: "",
    owner: "CAROL STULTZ & Kathy Hamilton & Cindy Flowers & DANIEL STULTZ",
    aka: "",
    lives: "Carol & Dan",
    health: "",
    image: "",
    Titles: [{
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
    id: 71,
    call: "Hank",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    coown: true,
    stud: false,
    sex: "male",
    name: "CH Old Bay's Potters Friend Hank",
    sire: "CH Sunvalley's Its As Simple As Abc",
    dam: "CH Old Bay's Raging Infurno",
    dob: "04/10/2008",
    neutered: true,
    rip: "",
    owner: "Carol Dan & Sandy Stultz & Cindy Flowers",
    aka: "",
    lives: "Carol & Sandy",
    health: "",
    image: "",
    Titles: [{
      "title": "CH",
      "date": "10/14/2016",
      "org": "AKC"
    }]
  }, {
    id: 72,
    call: "Raven",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    coown: true,
    stud: false,
    sex: "female",
    name: "CH Old Bay's Raven Evermore",
    sire: "CH Allegiance Rock The Boat Oldbay",
    dam: "CH Waterford Frontpage",
    dob: "01/08/2010",
    neutered: true,
    rip: "",
    owner: "Sandra Strassman-Sundy & Cindy Flowers",
    aka: "",
    lives: "Sandra",
    health: "",
    image: "",
    Titles: [{
      "title": "CH",
      "date": "07/04/2013",
      "org": "AKC"
    }]
  }, {
    id: 73,
    call: "Ruby",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    coown: true,
    stud: false,
    sex: "female",
    name: "CH Old Bay's Raven Evermore",
    sire: "CH Topshelfs Israel Kamakawiwoole",
    dam: "	Old Bay's Seasoned With Spice",
    dob: "05/12/2013",
    neutered: true,
    rip: "",
    owner: "Caollyn Malinowski & Cindy Flowers",
    aka: "",
    lives: "Caollyn",
    health: "",
    image: "",
    Titles: [{
      "title": "CH",
      "date": "01/13/2016",
      "org": "AKC"
    }]
  }, {
    id: 74,
    call: "Nutmeg",
    toptwenty: "",
    rom: true,
    vn: false,
    ours: false,
    coown: true,
    stud: false,
    sex: "female",
    name: "Old Bay's Seasoned With Spice ROM",
    sire: "CH Bear N Mind's Maritime Traveler",
    dam: "CH Top Shelf Spiced With Old Bay",
    dob: "05/12/2013",
    neutered: true,
    rip: "",
    owner: "Sue Faulkner & Cindy Flowers",
    aka: "",
    lives: "Sue",
    health: "",
    image: __webpack_require__(/*! ../../images/info/Nutmeg.jpg */ "./images/info/Nutmeg.jpg"),
    Titles: [{
      "title": "Register of Merit",
      "date": "12/31/2016",
      "org": "NCA"
    }]
  }, {
    id: 76,
    call: "Sailor",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    coown: true,
    stud: false,
    sex: "male",
    name: "GCH	Old Bay's Son Of The Sea",
    sire: "CH Southwind's Pouch Cove Dark Star",
    dam: "CH Old Bay's Lucy Fur",
    dob: "02/04/2015",
    neutered: true,
    rip: "",
    owner: "Cindy Flowers & Kathy Hamilton",
    aka: "",
    lives: "Cindy",
    health: "",
    image: "",
    Titles: [{
      "title": "CH",
      "date": "04/01/2017",
      "org": "AKC"
    }, {
      "title": "GCH",
      "date": "09/23/2017",
      "org": "AKC"
    }]
  }, {
    id: 77,
    call: "Cayenne",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    coown: true,
    stud: false,
    sex: "female",
    name: "GCH	Old Bay's Son Of The Sea",
    sire: "CH Southwind's Pouch Cove Dark Star",
    dam: "CH Old Bay's Lucy Fur",
    dob: "02/04/2015",
    neutered: false,
    rip: "",
    owner: "Joan Locker-Thuring & Cindy Flowers & Tom Locker-Thuring",
    aka: "",
    lives: "Joan & Tom",
    health: "",
    image: "",
    Titles: [{
      "title": "CH",
      "date": "10/20/2017",
      "org": "AKC"
    }]
  }, {
    id: 78,
    call: "Obi",
    toptwenty: "",
    rom: false,
    vn: false,
    coown: true,
    ours: false,
    stud: false,
    sex: "female",
    name: "CH Old Bay's The Force Is Strong At Dreamhaven CGC",
    sire: "CH Goldcoast's Keeper Of The Watch",
    dam: "CH Old Bay's Snowball's Chance",
    dob: "07/29/2017",
    neutered: false,
    rip: "",
    owner: "Karin Bystol & Cindy Flowers & Andrea Jung",
    aka: "",
    lives: "Karin & Adam",
    health: "",
    image: "",
    Titles: [{
      "title": "CGC",
      "date": "05/03/2019",
      "org": "AKC"
    }, {
      "title": "CH",
      "date": "10/27/2018",
      "org": "AKC"
    }]
  }, {
    id: 79,
    call: "Dory",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    coown: true,
    stud: false,
    sex: "male",
    name: "GCH Old Bay's Theodorable Spicy Altatude BN, CD, RA, RN, DD, WD",
    sire: "CH Bear N Mind's Maritime Traveler",
    dam: "CH Top Shelf Spiced With Old Bay",
    dob: "12/25/2010",
    neutered: false,
    rip: "",
    owner: "Stephanie Magid & Cindy Flowers",
    aka: "",
    lives: "Stephanie",
    health: "",
    image: "",
    Titles: [{
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
    id: 80,
    call: "Sophie",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    stud: false,
    sex: "female",
    name: "GCH Old Bays Voyage To Nitestar BN, CGC, CGCA, TKI, TKN, DD, WD",
    sire: "CH Bear N Mind's Stand Up And Cheer",
    dam: "CH Old Bay's Lucy Fur",
    dob: "12/09/2012",
    neutered: true,
    rip: "",
    owner: "Perri Graf",
    aka: "",
    lives: "Perri",
    health: "",
    image: "",
    Titles: [{
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
    id: 81,
    call: "Smudge",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    stud: false,
    sex: "male",
    name: "CH Old Bay Nightwatch",
    sire: "Peter Kagan Of Pouch Cove",
    dam: "Spillway Enuf-M-Ocean",
    dob: "01/02/1990",
    neutered: true,
    rip: "",
    owner: "Jill M Smithson",
    aka: "",
    lives: "Jill",
    health: "",
    image: "",
    Titles: [{
      "title": "CH",
      "date": "05/17/1992",
      "org": "AKC"
    }]
  }, {
    id: 82,
    call: "Finn",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    stud: false,
    sex: "male",
    name: "Sun Valley's Swimming With Finns In Old Bay CGC",
    sire: "GCHB Old Bay's Perfect Timing",
    dam: "GCHB Old Bay's Keep It Simple ROM",
    dob: "06/23/2017",
    neutered: true,
    rip: "",
    owner: " Dr. Lori Siracuse-Parker",
    aka: "",
    lives: "Lori",
    health: "",
    image: "",
    Titles: [{
      "title": "CGC",
      "date": "11/12/2018",
      "org": "AKC"
    }]
  }, {
    id: 83,
    call: "Annie",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    stud: false,
    sex: "male",
    name: "CH Old Bay's Annie Of Fairview CD",
    sire: "Peter Kagan Of Pouch Cove",
    dam: "Spillway Enuf-M-Ocean",
    dob: "02/19/1989",
    neutered: true,
    rip: "",
    owner: "Arlene J Dodson & Kathleen Hamilton",
    aka: "",
    lives: "Arlene",
    health: "",
    image: "",
    Titles: [{
      "title": "CD",
      "date": "04/24/1994",
      "org": "AKC"
    }, {
      "title": "CH",
      "date": "02/15/1992",
      "org": "AKC"
    }]
  }, {
    id: 84,
    call: "Chimp",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    stud: false,
    sex: "female",
    name: "Old Bay's Atlanta's Burning CD",
    sire: "Sherwoods Rosh Of Newton-Ark",
    dam: "Old Bay's Georgia On My Mind",
    dob: "	08/11/1993",
    neutered: true,
    rip: "",
    owner: "Kathleen Hamilton & Pat Tilson",
    aka: "",
    lives: "Kathy & Pat",
    health: "",
    image: "",
    Titles: [{
      "title": "CD",
      "date": "05/03/2000",
      "org": "AKC"
    }]
  }, {
    id: 85,
    call: "Bearie",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: true,
    stud: false,
    sex: "female",
    name: "CH Old Bay's Bear Essentials",
    sire: "Peter Kagan Of Pouch Cove",
    dam: "Spillway Enuf-M-Ocean",
    dob: "	08/11/1993",
    neutered: true,
    rip: "11/02/2003",
    owner: "Kathleen Hamilton",
    aka: "",
    lives: "Kathy",
    health: "",
    image: "",
    Titles: [{
      "title": "CH",
      "date": "11/04/1990",
      "org": "AKC"
    }]
  }, {
    id: 86,
    call: "Charlotte",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    stud: false,
    sex: "female",
    name: "CH Old Bay's Charlotte Amalie",
    sire: "Peppertree's Gem Of Abbyacre",
    dam: "Muddy Creeks Savannah",
    dob: "08/11/1993",
    neutered: true,
    rip: "",
    owner: "Margaret A & Kenneth I Speth",
    aka: "",
    lives: "Margie & Kenny",
    health: "",
    image: "",
    Titles: [{
      "title": "CH",
      "date": "05/22/1994",
      "org": "AKC"
    }]
  }, {
    id: 87,
    call: "Gambler",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    stud: false,
    sex: "male",
    name: "Old Bay's Gambling Man CD",
    sire: "Topmast's Muddy Creek Crocker",
    dam: "Muddy Creeks Savannah",
    dob: "04/05/1988",
    neutered: true,
    rip: "",
    owner: "Louie Mays",
    aka: "",
    lives: "Louie",
    health: "",
    image: "",
    Titles: [{
      "title": "CD",
      "date": "04/18/1990",
      "org": "AKC"
    }]
  }, {
    id: 88,
    call: "Louie",
    toptwenty: "",
    rom: false,
    vn: true,
    ours: false,
    stud: false,
    sex: "male",
    name: "VN CH Old Bay's Never Enuf-M-Ocean CD, DD, WRD",
    sire: "Pouch Cove Muddycreek Chance",
    dam: "Spillway Enuf-M-Ocean",
    dob: "	08/11/1993",
    neutered: true,
    rip: "",
    owner: "Trish Castell",
    aka: "",
    lives: "Trish",
    health: "",
    image: "",
    Titles: [{
      "title": "VN - Versitile Newfoundland",
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
    id: 89,
    call: "Carrie",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: true,
    stud: false,
    sex: "female",
    name: "CH Old Bay's On A Carousel",
    sire: "Benhil's Stillwater Gulliverr",
    dam: "Old Bay's Bear Essentials",
    dob: "09/25/1991",
    neutered: true,
    rip: "09/25/2001",
    owner: "Kathleen M Hamilton",
    aka: "",
    lives: "Kathy",
    health: "",
    image: "",
    Titles: [{
      "title": "CH",
      "date": "07/03/1993",
      "org": "AKC"
    }]
  }, {
    id: 90,
    call: "Henry",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: true,
    stud: false,
    sex: "male",
    name: "CH Old Bay's Rorshack",
    sire: "Topmast's Muddy Creek Crocker",
    dam: "Muddy Creeks Savannah",
    dob: "04/05/1988",
    neutered: true,
    rip: "09/25/2000",
    owner: "Kathleen M Hamilton",
    aka: "",
    lives: "Kathy",
    health: "",
    image: "",
    Titles: [{
      "title": "CH",
      "date": "03/08/1992",
      "org": "AKC"
    }]
  }, {
    id: 91,
    call: "Chaser",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    stud: false,
    sex: "female",
    name: "CH Old Bay's Seabreeze Chaser",
    sire: "Benhil's Stillwater Gulliver",
    dam: "Old Bay's Bear Essentials",
    dob: "04/05/1988",
    neutered: true,
    rip: "",
    owner: "Pat Tilson",
    aka: "",
    lives: "Pat",
    health: "",
    image: "",
    Titles: [{
      "title": "CH",
      "date": "11/06/1994",
      "org": "AKC"
    }]
  }, {
    id: 92,
    call: "Mischief",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    stud: false,
    sex: "female",
    name: "CH Old Bay's Start Of Mischief CD",
    sire: "Benhil's Stillwater Gulliver",
    dam: "Old Bay's Bear Essentials",
    dob: "04/05/1988",
    neutered: true,
    rip: "",
    owner: "Cheryl Reed",
    aka: "",
    lives: "Cheryl",
    health: "",
    image: "",
    Titles: [{
      "title": "CH",
      "date": "12/18/1994",
      "org": "AKC"
    }, {
      "title": "CD",
      "date": "12/11/1994",
      "org": "AKC"
    }]
  }, {
    id: 93,
    call: "Bacardi",
    toptwenty: "",
    rom: false,
    vn: true,
    ours: false,
    stud: false,
    sex: "female",
    name: "VN CH Old Bays Bacardi Of Top Shelf CD, CDX, DD, TDD, WD, WRD",
    sire: "Pouch Cove's All American Amity",
    dam: "Old Bay's Bear Essentials",
    dob: "06/14/1993",
    neutered: true,
    rip: "",
    owner: "Debra Wigal",
    aka: "",
    lives: "Debra",
    health: "",
    image: "",
    Titles: [{
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
    id: 94,
    call: "Bret",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    stud: false,
    sex: "male",
    name: "Old Bays Bret Harte CD",
    sire: "Muddycrk Miles Of Sunvalley",
    dam: "Muddycreek Old Bays Moonbeam",
    dob: "11/04/1997",
    neutered: true,
    rip: "",
    owner: "Dr. Lawrence S Lerner & Dr. Narcinda R Lerner",
    aka: "",
    lives: "Dr. Lawrence S Lerner & Dr. Narcinda R Lerner",
    health: "",
    image: "",
    Titles: [{
      "title": "CD",
      "date": "08/19/2000",
      "org": "AKC"
    }]
  }, {
    id: 95,
    call: "Bentley",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    stud: false,
    sex: "male",
    name: "CH Sir Bentley Of Old Bay",
    sire: "Pouch Cove's Statesman",
    dam: "Old Bay's On A Carousel",
    dob: "11/02/1993",
    neutered: true,
    rip: "",
    owner: "Steven & Mary Stein",
    aka: "",
    lives: "Steven",
    health: "",
    image: "",
    Titles: [{
      "title": "CH",
      "date": "02/17/1996",
      "org": "AKC"
    }]
  }, {
    id: 96,
    call: "Tai-Tai",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: true,
    stud: false,
    sex: "male",
    name: "CH Top Shelf Mai-Tai Of Old Bay",
    sire: "Blackstone's Percyful James",
    dam: "Old Bays Bacardi Of Top Shelf",
    dob: "11/02/1993",
    neutered: true,
    rip: "11/02/2003",
    owner: "Kathleen Hamilton & Pat Tilson",
    aka: "",
    lives: "Kathy & Pat",
    health: "",
    image: "",
    Titles: [{
      "title": "CH",
      "date": "02/20/2000",
      "org": "AKC"
    }]
  }, {
    id: 97,
    call: "Mason",
    toptwenty: "",
    rom: false,
    vn: false,
    ours: false,
    coown: true,
    stud: false,
    sex: "male",
    name: "CH Allegiance Carved N Stone Oldbay",
    sire: "Top Shelf's On The Rocks",
    dam: "Darbydales Zoo Two",
    dob: "	09/14/2006",
    neutered: true,
    rip: "",
    owner: "Kathleen Hamilton",
    aka: "",
    lives: "Jim",
    health: "",
    image: "",
    Titles: [{
      "title": "CH",
      "date": "07/06/2008",
      "org": "AKC"
    }]
  }],
  litters: [{
    id: 1,
    parents: "Rhone and Kiss",
    breeders: "Old Bay Newfs - Cindy Flowers and Kathy Hamilton",
    sire: "GCH Chateaunewf'N Nakiska's Legend Of The Stones",
    dam: "GCHB Old Bay's Keep It Simple ROM",
    dob: "November 8, 2019",
    boys: 0,
    girls: 1,
    puppies: ["Sing"],
    sireimg: __webpack_require__(/*! ../../images/litters/sire.jpg */ "./images/litters/sire.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Kiss.jpg */ "./images/litters/Kiss.jpg"),
    pupimg: __webpack_require__(/*! ../../images/info/Sing.jpg */ "./images/info/Sing.jpg")
  }, {
    id: 2,
    parents: "Crosby and Kiss",
    breeders: "Dreamhaven Newfs - Andrea Jung, Cindy Flowers and Kathy Hamilton",
    sire: "VN GCH Southwind's Pouch Cove Dark Star CD, RE, TDD, WRD3",
    dam: "GCHB Old Bay's Keep It Simple ROM",
    dob: "",
    boys: 2,
    girls: 6,
    puppies: ["Charlie", "Cricket", "Essi", "Gossip", "Kindle", "Nash", "Tilly"],
    sireimg: __webpack_require__(/*! ../../images/litters/Crosby.jpg */ "./images/litters/Crosby.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Kiss.jpg */ "./images/litters/Kiss.jpg")
  }, {
    id: 3,
    parents: "Rolex and Snowball",
    breeders: "Dreamhaven Newfs - Andrea Jung, Cindy Flowers and Kathy Hamilton",
    sire: "VN GCH Southwind's Pouch Cove Dark Star CD, RE, TDD, WRD3",
    dam: "GCHB Old Bay's Snowballs Chance CD",
    dob: "January 11, 2018",
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
    dob: "",
    boys: 2,
    girls: 0,
    puppies: ["Obi", "Finn"],
    sireimg: __webpack_require__(/*! ../../images/litters/sire.jpg */ "./images/litters/sire.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Snowball.jpg */ "./images/litters/Snowball.jpg")
  }, {
    id: 5,
    parents: "Rolex and Kiss",
    breeders: "Sunvalley Newfs - Lou Ann Lenner and Cindy Flowers",
    sire: "GCHB Old Bay's Perfect Timing",
    dam: "GCHB Old Bay's Keep It Simple ROM",
    dob: "January 11, 2018",
    boys: 7,
    girls: 3,
    puppies: ["Maestro", "Radar"],
    sireimg: __webpack_require__(/*! ../../images/litters/Rolex.jpg */ "./images/litters/Rolex.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Kiss.jpg */ "./images/litters/Kiss.jpg")
  }, {
    id: 6,
    parents: "Sirius and Raisin",
    breeders: "Kathy Hamilton and Cindy Flowers",
    sire: "GCH Old Bay's Let's Get Sirius (HE/L/P/HrC/Cn/Cerf/DNC)",
    dam: "CH Old Bay's Ragin' Infurno  (HG/L/HrC/P/DNA)",
    dob: "February 24, 2014",
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
    dob: "February 23, 2014",
    boys: 5,
    girls: 1,
    puppies: ["Rolex - purple boy - Cindy Flowers", "Bunbury - Rainbow boy - James Kallmerten (NY)", "Jupiter - gray boy - Colette Chipman - (VA)", "Charlie - green boy - David Leever and Sharon Yost (MD)", "Walter - gold boy - Terri Lewin Gilbert (PA)", "Gracie - Pink girl - Mary Jeanne Levitt (MN)"],
    sireimg: __webpack_require__(/*! ../../images/litters/Tate.jpg */ "./images/litters/Tate.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Nutmeg.jpg */ "./images/litters/Nutmeg.jpg")
  }, {
    id: 8,
    parents: "Crosby and Lucy",
    breeders: "Kathy Hamilton and Cindy Flowers",
    sire: "VN GCH Southwind's Pouch Cove Dark Star CD, RE, TDD, WRD3",
    dam: "GCH CH Old Bay's Lucy Fur CGC, TDI, THDN  ",
    dob: "February 4, 2014",
    boys: 4,
    girls: 3,
    puppies: ["Flash - purple boy - Anne Nored (NC)", "Sailor - blue boy - (VA)", "Teddy - orange boy - Shawna Rogers-Curns (VA)", "Max - burgundy boy - Jeff and Jane Brueckner Totten (VA)", "Ellie - green girl - John and Juli Paladino (MD)", "Cayenne - yellow girl - Tom and Joan Locker-Thuring (Long Island)", "Snowball - Snowball - Cindy Flowers and Andrea Jung)"],
    sireimg: __webpack_require__(/*! ../../images/litters/Crosby.jpg */ "./images/litters/Crosby.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Lucy.jpg */ "./images/litters/Lucy.jpg")
  }, {
    id: 9,
    parents: "Todd and Charm",
    breeders: "Cindy and John Flowers and Rose Miller",
    sire: "GCH Sun Valley's It's As Simple As A.B.C (HG/L/P/HrC/Cn/Cerf)",
    dam: "GCH Old Bay's Please Don't Squeeze The Charm'n CGC, TDI (HF/L/P/CrC/Cn/Cerf/DNA)",
    dob: "November 25, 2014",
    boys: 3,
    girls: 1,
    puppies: ["Kiss - Cindy and John", "Soloman - black boy - Sue and Andrew", "Frankie - gray boy with white - Judith Janasik (WI)", "Mr. Whipple - Mr. Whipple (LA)"],
    sireimg: __webpack_require__(/*! ../../images/litters/sire.jpg */ "./images/litters/sire.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Charm.jpg */ "./images/litters/Charm.jpg")
  }, {
    id: 10,
    parents: "Brodie and Nutmeg",
    breeders: "Cindy Flowers and Julia and Don Sharkey and Sue Faulkner",
    sire: "CH Powder Ridge's Dreams Come True, WD (HG/L/P/DNA)",
    dam: "Old Bay's Seasoned with Spice (HG/L/HrC/P/Eyes/DNA) ",
    dob: "June 1, 2014",
    boys: 2,
    girls: 0,
    puppies: ["Vail Cruiser - Glenn Lesher", "Spinnaker - blue boy - Christie Smith (VA)"],
    sireimg: __webpack_require__(/*! ../../images/litters/sire.jpg */ "./images/litters/sire.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Nutmeg.jpg */ "./images/litters/Nutmeg.jpg")
  }, {
    id: 11,
    parents: "Raisin and Todd",
    breeders: "Kathy Hamilton and John Borklund and Cindy Flowers",
    sire: "G.Ch. Sun Valley's It's As Simple As A.B.C (HG/L/P/HrC/Cn/Cerf)",
    dam: "CH Old Bay's Ragin' Infurno (HG/L/HrC/P/DNA)",
    dob: "April 17, 2014",
    boys: 4,
    girls: 0,
    puppies: ["Evan", "Hank", "Justin", "Sirius II"],
    sireimg: __webpack_require__(/*! ../../images/litters/sire.jpg */ "./images/litters/sire.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Raisin.jpg */ "./images/litters/Raisin.jpg")
  }, {
    id: 12,
    parents: "Charm and Sirius",
    breeders: "Cindy and John Flowers and Rose Miller",
    sire: "CH Old Bay's Let's Get Sirius",
    dam: "GCH CH Old Bay's Please Don't Squeeze The Charm'n ",
    dob: "December 5, 2013",
    boys: 1,
    girls: 1,
    puppies: ["Tiffany", "Sunny"],
    sireimg: __webpack_require__(/*! ../../images/litters/Sirius.jpg */ "./images/litters/Sirius.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Charm.jpg */ "./images/litters/Charm.jpg")
  }, {
    id: 13,
    parents: "Miss Flash and Atlas",
    breeders: "Celtic Cross - Rose Miller and Cindy Flowers and Barbara Plasse",
    sire: "CH Old Bay's Here At Last, WRD",
    dam: "Celtic Cross Mischief Managed At Old Bay, RN",
    dob: "October 17, 2013",
    boys: 1,
    girls: 2,
    puppies: [],
    sireimg: __webpack_require__(/*! ../../images/litters/Atlas.jpg */ "./images/litters/Atlas.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Dam.jpg */ "./images/litters/Dam.jpg")
  }, {
    id: 14,
    parents: "Izzy and Nutmeg",
    breeders: "Cindy and John Flowers",
    sire: "CH Top Shelfs Israel Kamakawiwoole CD, DD, CGC, RN",
    dam: "Old Bay's Seasoned with Spice ",
    dob: "May 12, 2013",
    boys: 2,
    girls: 3,
    puppies: ["Emma", "Fred", "Kasey", "Parker", "Ruby"],
    sireimg: __webpack_require__(/*! ../../images/litters/sire.jpg */ "./images/litters/sire.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Nutmeg.jpg */ "./images/litters/Nutmeg.jpg")
  }, {
    id: 15,
    parents: "Lucy and Bravo",
    breeders: " Kathy Hamilton and Cindy Flowers",
    sire: "GCH CH Bear N Mind's Stand Up and Cheer",
    dam: "GCH CH Old Bay's Lucy Fur ",
    dob: "December 9, 2012",
    boys: 5,
    girls: 3,
    puppies: ["Tate", "Snickers", "Bennie", "Jayden", "Sophie"],
    sireimg: __webpack_require__(/*! ../../images/litters/Bravo.jpg */ "./images/litters/Bravo.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Lucy.jpg */ "./images/litters/Lucy.jpg")
  }, {
    id: 16,
    parents: "Lucy and Mick",
    breeders: "Kathy Hamilton and John Borkland and Cindy Flowers",
    sire: "Ch. Cypress Bay Imat Cornerbrook CGC, TDI",
    dam: "CH Old Bay's Lucy Fur ",
    dob: "September 10, 2011",
    boys: 2,
    girls: 6,
    puppies: ["Raisin"],
    sireimg: __webpack_require__(/*! ../../images/litters/sire.jpg */ "./images/litters/sire.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Lucy.jpg */ "./images/litters/Lucy.jpg")
  }, {
    id: 17,
    parents: "Sparkle and Potter",
    breeders: "Cindy and John Flowers and Rose Miller",
    sire: "GCH Old Bay's 'Potter As In Harry'",
    dam: "CH Old Bay's Sparks Are Flyin', RN",
    dob: "September 6, 2011",
    boys: 4,
    girls: 8,
    puppies: ["General Lee", "Oliver", "Cutter", "Hagrid", "Liebe", "Luna", "Ms. Flash", "Chloe", "Sophie", "Charm", "Maggie"],
    sireimg: __webpack_require__(/*! ../../images/litters/Potter.jpg */ "./images/litters/Potter.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Sparkle.jpg */ "./images/litters/Sparkle.jpg")
  }, {
    id: 18,
    parents: "Allie x Lincoln",
    breeders: "Powder Ridge Newfs - Julia and Don Sharkey and Kathy Hamilton",
    sire: "BIS, BISS, GCH SKIPPER'S EMINENCE KING OF HELLULAND",
    dam: "CH Old Bay Get My Drift At Powder Ridge  ",
    dob: "June 24, 2011",
    boys: 6,
    girls: 1,
    puppies: [],
    sireimg: __webpack_require__(/*! ../../images/litters/sire.jpg */ "./images/litters/sire.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Allie.jpg */ "./images/litters/Allie.jpg")
  }, {
    id: 19,
    parents: "Spice and Travis",
    breeders: "Cindy and John Flowers",
    sire: "CH Bear N Mind's Maritime Traveler",
    dam: "GCH Top Shelf Spiced With Old Bay, NJP ",
    dob: "December 25, 2010",
    boys: 4,
    girls: 4,
    puppies: ["Blitzen", "Brenden", "Dasher", "Dory", "Nutmeg", "Gus", "Latte", "Dancer"],
    sireimg: __webpack_require__(/*! ../../images/litters/sire.jpg */ "./images/litters/sire.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Spice.jpg */ "./images/litters/Spice.jpg")
  }, {
    id: 20,
    parents: "Pharrah and Travis",
    breeders: "Cindy Flowers and Dirk Daelmans",
    sire: "CH Bear N Mind's Maritime Traveler, CD",
    dam: "CH Waterford FrontPage",
    dob: "October 26, 2010",
    boys: 4,
    girls: 1,
    puppies: ["Atlas", "Heffalump", "Party", "Sirius", "Sonar"],
    sireimg: __webpack_require__(/*! ../../images/litters/sire.jpg */ "./images/litters/sire.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Pharrah.jpg */ "./images/litters/Pharrah.jpg")
  }, {
    id: 21,
    parents: "Chilly and Jimmy",
    breeders: "Kathy Hamilton and Cindy Flowers",
    sire: "Select Ch Council Cup's Star of Kodiak Acres RN DD CGC TDI",
    dam: "CH OLD BAY'S HELLFROZOVER TOPSHELF",
    dob: "April 10, 2010",
    boys: 1,
    girls: 0,
    puppies: ["Guiness"],
    sireimg: __webpack_require__(/*! ../../images/litters/sire.jpg */ "./images/litters/sire.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Chilly.jpg */ "./images/litters/Chilly.jpg")
  }, {
    id: 22,
    parents: "Pharrah and Dexter",
    breeders: "Cindy Flowers and Dirk Daelman",
    sire: "CH Allegiance Rock The Boat Old Bay",
    dam: "CH Waterford Frontpage ",
    dob: "June 24, 2010",
    boys: 2,
    girls: 2,
    puppies: ["Bridget", "Raven", "Linus", "Tyler"],
    sireimg: __webpack_require__(/*! ../../images/litters/Dexter.jpg */ "./images/litters/Dexter.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Pharrah.jpg */ "./images/litters/Pharrah.jpg")
  }, {
    id: 23,
    parents: "Cosmo and Carson",
    breeders: "Cindy Flowers and Deb Wigal",
    sire: "Muddy Creek's Carson",
    dam: "CH Top Shelf's Cosmopolitan",
    dob: "June 2, 2009",
    boys: 3,
    girls: 2,
    puppies: ["Happy", "Muddy", "Reba", "Rudd", "Miss Sunny"],
    sireimg: __webpack_require__(/*! ../../images/litters/sire.jpg */ "./images/litters/sire.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Cosmo.jpg */ "./images/litters/Cosmo.jpg")
  }, {
    id: 24,
    parents: "Chilly and Carson",
    breeders: "Kathy Hamilton and Cindy Flowers",
    sire: "Muddy Creek's Carson",
    dam: "CH OLD BAY'S HELLFROZOVER TOPSHELF ",
    dob: "June 9, 2009",
    boys: 2,
    girls: 1,
    puppies: ["Lucy", "Luke", "Tux"],
    sireimg: __webpack_require__(/*! ../../images/litters/sire.jpg */ "./images/litters/sire.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Chilly.jpg */ "./images/litters/Chilly.jpg")
  }, {
    id: 25,
    parents: "Spice and Bruce",
    breeders: "John and Cindy Flowers",
    sire: "CH Top Shelf's Troubles A Brewin, DD",
    dam: "GCH TOP SHELF SPICED WITH OLD BAY, NJP",
    dob: "December 3, 2008",
    boys: 6,
    girls: 1,
    puppies: ["Annie", "Cormack", "Jayne", "Maximus", "Mickey", "Nanaimo", "Sparkle"],
    sireimg: __webpack_require__(/*! ../../images/litters/Bruce.jpg */ "./images/litters/Bruce.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Spice.jpg */ "./images/litters/Spice.jpg")
  }, {
    id: 26,
    parents: "Chilly and Christopher",
    breeders: "Kathy Hamilton and Cindy Flowers",
    sire: "BISS CH SUNVALLEY PETITIONS POUCH COVE, ROM",
    dam: "CH OLD BAY'S HELLFROZOVER TOPSHELF ",
    dob: "April 10, 2008",
    boys: 4,
    girls: 1,
    puppies: ["Allie", "Burnie", "Canyon", "Potter", "Sampson"],
    sireimg: __webpack_require__(/*! ../../images/litters/sire.jpg */ "./images/litters/sire.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Chilly.jpg */ "./images/litters/Chilly.jpg")
  }, {
    id: 27,
    parents: "Spice and Lincoln",
    breeders: "John and Cindy Flowers",
    sire: "BIS, BISS, GCH SKIPPER'S EMINENCE KING OF HELLULAND",
    dam: "GCH TOP SHELF SPICED WITH OLD BAY, NJP",
    dob: "March 10, 2008",
    boys: 0,
    girls: 1,
    puppies: ["Sporty"],
    sireimg: __webpack_require__(/*! ../../images/litters/sire.jpg */ "./images/litters/sire.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Spice.jpg */ "./images/litters/Spice.jpg")
  }, {
    id: 28,
    parents: "Party and Rrrocky",
    breeders: "Top Shelf - Deb Wigal, Cindy Flowers and Kathy Hamilton",
    sire: "CH TOP SHELF'S ON THE ROCKS, ROM",
    dam: "CH TOP SHELF'S WILD NIGHT OUT, ROM",
    dob: "September 26, 2005",
    boys: 6,
    girls: 4,
    puppies: ["Izzy", "Chilly", "Cosmo", "Jagger", "Ice"],
    sireimg: __webpack_require__(/*! ../../images/litters/Rocky.jpg */ "./images/litters/Rocky.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Dam.jpg */ "./images/litters/Dam.jpg")
  }, {
    id: 29,
    breeders: " Cindy Flowers, John Flowers, Nancy Beres and Deb Wigal",
    sire: "",
    dam: "",
    dob: "May 16, 2002",
    boys: 4,
    girls: 1,
    puppies: ["Opie - Cindy and John", "Rocky - Kathy Hamilton", "Simon - Cindy and John", "Sid - Deb Wigal", "Frankie - Amy Lane"],
    sireimg: __webpack_require__(/*! ../../images/litters/sire.jpg */ "./images/litters/sire.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Daisy.jpg */ "./images/litters/Daisy.jpg")
  }],
  awards: [{
    award: "Award of Merit",
    show: "AKC Royal Canin Show",
    date: "December 15, 2019",
    dog: "Flash"
  }, {
    award: "Best of Winners, 1st 12-18 dog",
    show: " AKC Royal Canin Show",
    date: "December 15, 2019",
    dog: "Nash"
  }, {
    award: "Best Newf Puppy",
    show: "Central Florida Working Group",
    date: "December 13, 2019",
    dog: "Nash"
  },, {
    award: "Best of Breed",
    show: "Central Florida Working Group",
    date: "December 13, 2019",
    dog: "Flash"
  }, {
    award: "Best of Winners",
    show: "Central Florida Working Group",
    date: "December 13, 2019",
    dog: "Nash"
  }, {
    award: "BOS",
    show: "CNC Regional",
    date: "October 27, 2019",
    dog: "Kindle"
  }, {
    award: "RWB, 1st 9-12 bitch",
    show: "CNC Regional",
    date: "October 27, 2019",
    dog: "Cricket"
  }, {
    award: "Best in Sweepstakes",
    show: "CNC Regional",
    date: "October 27, 2019",
    dog: "Kindle"
  }, {
    award: "Winners Bitch, 1st 9-12 bitch",
    show: "CNC Regional",
    date: "October 26, 2019",
    dog: "Kindle"
  }, {
    award: "2nd 9-12 bitch",
    show: "CNC Regional",
    date: "October 26, 2019",
    dog: "Cricket"
  }, {
    award: "Best in Sweepstakes",
    show: "CNC Regional",
    date: "October 26, 2019",
    dog: "Kindle"
  }, {
    award: "Best in Sweepstakes",
    show: "CNC Supported Entry",
    date: "October 25, 2019",
    dog: "Kindle"
  }, {
    award: "BOS",
    show: "SENC Regional",
    date: "July 27, 2019",
    dog: "Flash"
  }, {
    award: "BOB",
    show: "SENC Regional",
    date: "July 27, 2019",
    dog: "Flash"
  }, {
    award: "2nd Brood Bitch",
    show: "National",
    date: "May 3, 2019",
    dog: "Snowball"
  }, {
    award: "Best Baby Puppy",
    show: "National",
    date: "April 30, 2019",
    dog: "Kindle"
  }, {
    award: "Best Baby Puppy",
    show: "National",
    date: "April 30, 2019",
    dog: "Kindle"
  }, {
    award: "Best Opposite Sex Baby Puppy",
    show: "National",
    date: "April 30, 2019",
    dog: "Nash"
  }, {
    award: "2nd Beginner Novice A",
    show: "National",
    date: "April 30, 2019",
    dog: "Gracie"
  }, {
    award: "2nd Novice A",
    show: "National",
    date: "April 30, 2019",
    dog: "Gracie"
  }, {
    award: "3rd Novice A",
    show: "National",
    date: "May 1, 2019",
    dog: "Gracie"
  }, {
    award: "1st Beginner Novice A",
    show: "National",
    date: "May 1, 2019",
    dog: "Gracie"
  }, {
    award: "BOS",
    show: "NewPenDel Regional",
    date: "March 16, 2019",
    dog: "Flash"
  }, {
    award: "Best Opposite Sex Sweepstakes, 14 months old",
    show: "NewPenDel Regional",
    date: "March 17, 2019",
    dog: "Maestro"
  }, {
    award: "WB, 1st Bred By",
    show: "NewPenDel Regional",
    date: "March 16, 2019",
    dog: "Fable"
  }, {
    award: "Best Opposite Sex Sweepstakes, 14 months old",
    show: "NewPenDel Regional",
    date: "March 16, 2019",
    dog: "Maestro"
  }, {
    award: "Select",
    show: "NCNE Supported Entry - morning",
    date: "March 3, 2018",
    dog: "Kiss"
  }, {
    award: "5 point major, BOW/WD, Best in Sweepstakes’s, BOBOH, and Best Puppy",
    show: "NCNE Supported Entry - afternoon",
    date: "March 3, 2018",
    dog: "Metronome"
  }, {
    award: "3 point major, WD",
    show: "NCNE Supported Entry - morning",
    date: "March 3, 2018",
    dog: "Radar"
  }, {
    award: "Select",
    show: "NCNE Supported Entry - afternoon",
    date: "March 3, 2018",
    dog: "Kiss"
  }, {
    award: "Award of Merit",
    show: "NCNE Supported Entry",
    date: "March 4, 2018",
    dog: "Kiss"
  }, {
    award: "4 point major, BOW/WD",
    show: "NCNE Supported Entry",
    date: "March 4, 2018",
    dog: "Radar"
  }, {
    award: "Select",
    show: "New Pen Del Regional ",
    date: "March 17, 2018",
    dog: "Kiss"
  }, {
    award: "Select",
    show: "New Pen Del Regional ",
    date: "March 18, 2018",
    dog: "Flash"
  }, {
    award: "NCA Select Dog",
    show: "2018 National",
    date: "May 5, 2018",
    dog: "Rolex"
  }, {
    award: "Best of Opposite in Sweepstakes & 1st in Regular Classes 9-12 puppy dog",
    show: "2018 National",
    date: "May 5, 2018",
    dog: "Metronome"
  }, {
    award: "1st in Brood Bitch",
    show: "2018 National",
    date: "May 5, 2018",
    dog: "Kiss"
  }, {
    award: "1st Team",
    show: "2018 National",
    date: "May 5, 2018",
    dog: "Kiss, Metro, Rolex, Radar"
  }, {
    award: "4th Stud Dog",
    show: "2018 National",
    date: "May 5, 2018",
    dog: "Rolex"
  }, {
    award: "3rd in 9-12 Sweepstakes",
    show: "2018 National",
    date: "May 5, 2018",
    dog: "Obi"
  }, {
    award: "BOS Sweepstakes / 1st 6-9 puppy dog",
    show: "Bear Mountain Supported Entry",
    date: "June 22, 2018",
    dog: "Nemo"
  }, {
    award: "1st 6-9 puppy dog sweeps and regular",
    show: "Bear Mountain Regional Specialty",
    date: "June 23, 2018",
    dog: "Nemo"
  }, {
    award: "BOBOH",
    show: "Bear Mountain Regional Specialty",
    date: "June 23, 2018",
    dog: "Kiss"
  }, {
    award: "RWD / 1st 6-9 puppy dog sweeps and regular",
    show: "Bear Mountain Regional Specialty",
    date: "June 24, 2018",
    dog: "Nemo"
  }, {
    award: "BOBOH",
    show: "Bear Mountain Regional Specialty",
    date: "June 24, 2018",
    dog: "Kiss"
  }, {
    award: "BOS",
    show: "SENC Regional",
    date: "July 28, 2018",
    dog: "Snowball"
  }, {
    award: "BOS",
    show: "SENC Regional",
    date: " July 29, 2018",
    dog: "Snowball"
  }, {
    award: "1st 6-9 Sweeps",
    show: "SENC Regional",
    date: "July 28, 2018",
    dog: "Maestro"
  }, {
    award: "1st 6-9 Sweeps / 2nd 6-9 Regular",
    show: "SENC Regional",
    date: "July 28, 2018",
    dog: "Maestro"
  }, {
    award: "BOB",
    show: "CNC Regional",
    date: "October 27, 2018",
    dog: "Flash"
  }, {
    award: "Select",
    show: "CNC Regional",
    date: "October 26, 2018",
    dog: "Flash"
  }, {
    award: "BOBOH",
    show: "CNC Regional",
    date: "October 27, 2018",
    dog: "Obi"
  }, {
    award: "Best of Winners and Best in Sweeps - 14 months",
    show: "CNC Regional",
    date: "October 26, 2018",
    dog: "Obi"
  }, {
    award: "Best of Winners and Best in Sweeps - 14 months",
    show: "CNC Supported Entry",
    date: "October 25, 2018",
    dog: "Obi"
  }, {
    award: "5 point major - Winners Bitch",
    show: "CNC Regional",
    date: "October 27, 2018",
    dog: "Fable"
  }]
}; //GCH CH Old Bay's Theodorable Spicy Altatude CD BN RA CGC
//GCH CH Old Bay's Son Of The Sea
//GCH CH Old Bays Voyage To Nitestar BN CGCA TKI
//GCH CH Old Bay's Cool Hand Luke At Belle Harbour
//GCHB CH Emalani Of Old Bay RN CGC
//GCH CH Old Bay's Get My Drift At Powder Ridge
//GCH CH Old Bay's Please Don'T Squeeze The Charm'N
//GCH CH Old Bay's "Potter As In Harry" CD BN RA CGC

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
//# sourceMappingURL=_app.js.4fed6be91d598543697c.hot-update.js.map