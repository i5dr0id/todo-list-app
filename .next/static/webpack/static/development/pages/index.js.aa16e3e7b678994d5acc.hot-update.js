webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/List.js":
/*!****************************!*\
  !*** ./components/List.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var List = function List(props) {
  var removeItem = function removeItem(index) {
    props.setItems(function (items) {
      var list = items.filter(function (item, j) {
        return index !== item.id;
      });
      return list;
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, props.items.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: item.id
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "list-item"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, item.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn-remove",
      onClick: function onClick() {
        return removeItem(item.id);
      }
    }, "X")));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ })

})
//# sourceMappingURL=index.js.aa16e3e7b678994d5acc.hot-update.js.map