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
  }, {
    id: 2,
    title: "Belted chino trousers polo",
    price: 120,
    image: __webpack_require__(/*! ../../images/img2.jpg */ "./images/img2.jpg"),
    imageHover: __webpack_require__(/*! ../../images/img-hover2.jpg */ "./images/img-hover2.jpg"),
    quickView: __webpack_require__(/*! ../../images/quick-view-img.jpg */ "./images/quick-view-img.jpg")
  }],
  addedItems: [],
  addedItemsToCompare: [],
  total: 0,
  shipping: 0,
  currentDog: 1,
  dogs: [{
    id: 1,
    call: "Sirius",
    ours: true,
    sex: "male",
    stud: true,
    name: "GCH Old Bay's Let's Get Sirius CGC, TDI",
    sire: "",
    dam: "",
    dob: "10/26/2010",
    neutered: false,
    rip: "",
    owner: "Cindy and John Flowers",
    aka: "Seriously Cute, Serial",
    lives: "Cindy and John Flowers",
    health: "http://www.offa.org/display.html?appnum=1497430#animal",
    image: __webpack_require__(/*! ../../images/info/Sirius.jpg */ "./images/info/Sirius.jpg"),
    Titles: ["AKC Champion", "AKC Grand Champion", "Canine Good Citizen", "Therapy Dog International"]
  }, {
    id: 2,
    call: "Bennie",
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
    aka: "	Sonnora",
    lives: "Cindy and John Flowers",
    health: "https://www.ofa.org/advanced-search?f=sr&appnum=1718393",
    image: __webpack_require__(/*! ../../images/info/Sunny.jpg */ "./images/info/Sunny.jpg"),
    Titles: []
  }, {
    id: 4,
    call: "Rolex",
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
    Titles: ["AKC Champion", "AKC Grand Champion", "AKC Bronze Grand Champion", "NCA Select Dog 2018", "NCA Top Twenty 2017"]
  }, {
    id: 5,
    call: "Metronome",
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
    Titles: ["AKC Champion", "NCA National Best of Opposite in Sweepstakes 2018", "NCA National 1st 9-12 Dog 2018"]
  }, {
    id: 6,
    call: "Maestro",
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
    Titles: ["AKC Champion"]
  }, {
    id: 7,
    call: "Nemo",
    ours: false,
    stud: false,
    sex: "male",
    name: "CH Old Bay's Finding BluWater",
    sire: "GCHB Old Bay's Perfect Timing",
    dam: "GCHB Old Bay's Keep It Simple ROM",
    dob: "February 23, 2015",
    neutered: true,
    rip: "",
    owner: "Cindy and John Flowers and Joan Locker-Thuring",
    aka: "Metro",
    lives: "Jenni and David Arnett",
    health: "https://www.ofa.org/advanced-search?f=sr&appnum=1955991",
    image: __webpack_require__(/*! ../../images/info/Nemo.jpg */ "./images/info/Nemo.jpg"),
    Titles: ["AKC Champion"]
  }, {
    id: 8,
    call: "Raisin",
    ours: true,
    stud: false,
    sex: "female",
    name: "CH Old Bay's Ragin' Infurno",
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
    Titles: ["AKC Champion"]
  }, {
    id: 9,
    call: "Kiss",
    ours: true,
    stud: false,
    sex: "female",
    name: "GCHB Old Bay's Keep It Simple",
    sire: "GCH Sun Valley's It's As Simple As A.B.C (HG/L/P/HrC/Cn/Cerf)",
    dam: "GCH Old Bay's Please Don't Squeeze The Charm'n CGC, TDI (HF/L/P/CrC/Cn/Cerf/DNA) ",
    dob: "November 25, 2014",
    neutered: true,
    rip: "",
    owner: "Cindy Flowers and Kathy Hamilton",
    aka: "Kissy",
    lives: "Cindy and John Flowers",
    health: "http://www.offa.org/display.html?appnum=1698851#animal",
    image: __webpack_require__(/*! ../../images/info/Kiss.jpg */ "./images/info/Kiss.jpg"),
    Titles: ["AKC Champion", "AKC Grand Champion", "AKC Bronze Grand Champion", "NCA Top Twenty 2018", "NCA Register of Merit"]
  }, {
    id: 10,
    call: "Kiss",
    ours: true,
    stud: false,
    sex: "female",
    name: "GCH Old Bay's Snowballs Chance CD ",
    sire: "GCH Sun Valley's It's As Simple As A.B.C (HG/L/P/HrC/Cn/Cerf)",
    dam: "GCH Old Bay's Please Don't Squeeze The Charm'n CGC, TDI (HF/L/P/CrC/Cn/Cerf/DNA) ",
    dob: "November 25, 2014",
    neutered: true,
    rip: "",
    owner: "Cindy Flowers and Kathy Hamilton",
    aka: "Kissy",
    lives: "Cindy and John Flowers",
    health: "http://www.offa.org/display.html?appnum=1698851#animal",
    image: __webpack_require__(/*! ../../images/info/Kiss.jpg */ "./images/info/Kiss.jpg"),
    Titles: ["AKC Champion", "AKC Grand Champion", "AKC Bronze Grand Champion", "NCA Top Twenty 2018", "NCA Register of Merit"]
  }],
  litters: [{
    id: 1,
    parents: "Rhone and Kiss",
    breeders: "Old Bay Newfs - Cindy Flowers and Kathy Hamilton",
    sire: "GCH Chateaunewf'N Nakiska's Legend Of The Stones",
    dam: "GCHB Old Bay's Keep It Simple ROM",
    dob: "May 16, 2002",
    boys: 0,
    girls: 1,
    puppies: ["Sing"],
    sireimg: __webpack_require__(/*! ../../images/litters/sire.jpg */ "./images/litters/sire.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Kiss.jpg */ "./images/litters/Kiss.jpg")
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
    dam: "GCHB Old Bay's Keep It Simple",
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
    puppies: ["Flash - purple boy - Anne Nored (NC)", "Sailer - blue boy - (VA)", "Teddy - orange boy - Shawna Rogers-Curns (VA)", "Max - burgundy boy - Jeff and Jane Brueckner Totten (VA)", "Ellie - green girl - John and Juli Paladino (MD)", "Cayenne - yellow girl - Tom and Joan Locker-Thuring (Long Island)", "Snowball - Snowball - Cindy Flowers and Andrea Jung)"],
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
    puppies: ["Kiss - Cindy and John", "Soloman - black boy - Sue and Andrew", "Frankie - gray boy with white - Judith Janasik (WI)r", "Mr. Whipple - Mr. Whipple (LA)"],
    sireimg: __webpack_require__(/*! ../../images/litters/sire.jpg */ "./images/litters/sire.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Charm.jpg */ "./images/litters/Charm.jpg")
  }, {
    id: 10,
    parents: "Brodie and Nutmeg",
    breeders: "Cindy Flowers and Julia and Don Sharkey and Sue Faulkner",
    sire: "Powder Ridge's Dreams Come True, WD (HG/L/P/DNA)",
    dam: "Old Bay's Seasoned with Spice (HG/L/HrC/P/Eyes/DNA) ",
    dob: "June 1, 2014",
    boys: 2,
    girls: 0,
    puppies: ["Vail Cruiser", "Spinnaker - blue boy - Christie Smith (VA)"],
    sireimg: __webpack_require__(/*! ../../images/litters/sire.jpg */ "./images/litters/sire.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/Nutmeg.jpg */ "./images/litters/Nutmeg.jpg")
  }, {
    id: 11,
    parents: "Raisin and Todd",
    breeders: "Kathy Hamilton and John Borklund and Cindy Flowers",
    sire: "G.Ch. Sun Valley's It's As Simple As A.B.C (HG/L/P/HrC/Cn/Cerf)",
    dam: "Old Bay's Ragin' Infurno (HG/L/HrC/P/DNA)",
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
    sireimg: __webpack_require__(/*! ../../images/litters/sire.jpg */ "./images/litters/sire.jpg"),
    damimg: ""
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
    puppies: ["Tate", "Snickers"],
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
    puppies: ["Blitzen", "Brenden", "Dasher", "Dory", "Nutmeg", "Gus", "Latte", "Danceer"],
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
    sireimg: __webpack_require__(/*! ../../images/litters/sire.jpg */ "./images/litters/sire.jpg"),
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
    sireimg: __webpack_require__(/*! ../../images/litters/sire.jpg */ "./images/litters/sire.jpg"),
    damimg: __webpack_require__(/*! ../../images/litters/dam.jpg */ "./images/litters/dam.jpg")
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
  }]
};

var cartReducer = function cartReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_11__["SET_CURRENT_DOG"]) {
    return _objectSpread({}, state, {
      currentDog: action.id
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
//# sourceMappingURL=_app.js.b0cb6c57f2ee3c6332ac.hot-update.js.map