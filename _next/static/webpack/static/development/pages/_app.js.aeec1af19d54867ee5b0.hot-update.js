webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./images/info/Atlas.jpg":
false,

/***/ "./images/info/Bacardi.jpg":
false,

/***/ "./images/info/Bennie.jpg":
false,

/***/ "./images/info/Betty.jpg":
false,

/***/ "./images/info/Bridget.jpg":
false,

/***/ "./images/info/Burnie.jpg":
false,

/***/ "./images/info/Cosmo.jpg":
false,

/***/ "./images/info/Dasher.jpg":
false,

/***/ "./images/info/Dexter.jpg":
false,

/***/ "./images/info/Flyer.jpg":
false,

/***/ "./images/info/Katie.jpg":
false,

/***/ "./images/info/Kindle.jpg":
false,

/***/ "./images/info/Latte.jpg":
false,

/***/ "./images/info/Linus.jpg":
false,

/***/ "./images/info/Maestro.jpg":
false,

/***/ "./images/info/Metro.jpg":
false,

/***/ "./images/info/Nemo.jpg":
false,

/***/ "./images/info/NewfJump.jpg":
false,

/***/ "./images/info/Radar.jpg":
false,

/***/ "./images/info/Raisin.jpg":
false,

/***/ "./images/info/Simon.jpg":
false,

/***/ "./images/info/Sirius.jpg":
false,

/***/ "./images/info/Snoopy.jpg":
false,

/***/ "./images/info/Snowball.jpg":
false,

/***/ "./images/info/Sparkle.jpg":
false,

/***/ "./images/info/Sporty.jpg":
false,

/***/ "./images/info/Sunny.jpg":
false,

/***/ "./images/info/Tommy.jpg":
false,

/***/ "./images/info/Tyler.jpg":
false,

/***/ "./images/info/Yogi.jpg":
false,

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
    id: 64,
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
    image: __webpack_require__(/*! ../../images/specialties/AtlasAndObiBrace2019.jpg */ "./images/specialties/AtlasAndObiBrace2019.jpg"),
    award: "3rd Brace",
    show: "2019 National",
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
}; //GCH CH Old Bay's Theodorable Spicy Altatude CD BN RA CGC
//GCH CH Old Bay's Son Of The Sea
//GCH CH Old Bays Voyage To Nitestar BN CGCA TKI
//GCH CH Old Bay's Cool Hand Luke At Belle Harbour
//GCHB CH Emalani Of Old Bay RN CGC
//GCH CH Old Bay's Get My Drift At Powder Ridge
//GCH CH Old Bay's Please Don'T Squeeze The Charm'N
//GCH CH Old Bay's "Potter As In Harry" CD BN RA CGC

function byDate(a, b) {
  if (a.date < b.date) return 1;
  if (a.date > b.date) return -1;
  return 0;
}

function byDOB(a, b) {
  if (a.dob < b.dob) return 1;
  if (a.dob > b.dob) return -1;
  return 0;
}

initState.awards.sort(byDate);
initState.litters.sort(byDOB);

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
//# sourceMappingURL=_app.js.aeec1af19d54867ee5b0.hot-update.js.map