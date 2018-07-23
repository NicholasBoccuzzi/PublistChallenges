webpackHotUpdate(4,{

/***/ "./components/searchResult.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/NickyB/Desktop/PublistChallenges/components/searchResult.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SearchResult =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SearchResult, _React$Component);

  function SearchResult(props) {
    var _this;

    _classCallCheck(this, SearchResult);

    _this = _possibleConstructorReturn(this, (SearchResult.__proto__ || Object.getPrototypeOf(SearchResult)).call(this, props));
    _this.state = {
      url: props.url,
      image: props.image,
      title: props.title,
      description: props.description
    };
    return _this;
  }

  _createClass(SearchResult, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
        jsx: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, "\n          .article-container {\n            padding: 5px;\n            display:flex;\n            flex-direction: row;\n            text-decoration: none;\n            color: black;\n            margin-bottom: 20px;\n            align-items: center;\n          }\n          @media (max-width: 900px) {\n            .article-container {\n              flex-direction: column;\n            }\n          }\n          .article-container:hover {\n            text-decoration: underline;\n            color: rgb(163,163,163);\n            box-shadow: 0 2px 8px rgba(0,0,0,.2);\n          }\n          .article-title {\n            font-size: 20px;\n            margin-bottom: 10px;\n          }\n          .article-description {\n            font-size: 14px;\n            margin-bottom: 10px;\n          }\n          .article-image-container {\n            width: 200px;\n            margin-right: 50px;\n          }\n          .article-image {\n            max-width: 200px;\n            max-height: 200px;\n            object-fit: cover;\n          }\n          ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "article-container",
        href: this.state.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "article-image-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "article-image",
        src: this.state.image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "article-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, this.state.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "article-desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, this.state.description))));
    }
  }]);

  return SearchResult;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SearchResult);

/***/ })

})
//# sourceMappingURL=4.50d1bf215cdcdd5242b7.hot-update.js.map