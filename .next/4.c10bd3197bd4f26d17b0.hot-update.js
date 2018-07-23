webpackHotUpdate(4,{

/***/ "./components/searchResult.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
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
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: this.state.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        className: "jsx-1030678036" + " " + "article-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1030678036",
        css: ".article-container.jsx-1030678036{padding:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-text-decoration:none;text-decoration:none;color:black;margin-bottom:20px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}@media only screen and (max-width:900px){.article-container.jsx-1030678036{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}.article-container.jsx-1030678036:hover{-webkit-text-decoration:underline;text-decoration:underline;color:rgb(163,163,163);box-shadow:0 2px 8px rgba(0,0,0,.2);}.article-title.jsx-1030678036{font-size:20px;margin-bottom:10px;}.article-description.jsx-1030678036{font-size:14px;margin-bottom:10px;}.article-image-container.jsx-1030678036{width:200px;margin-right:50px;}.article-image.jsx-1030678036{max-width:200px;max-height:200px;object-fit:cover;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoUmVzdWx0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCVyxBQUcyQixBQVVZLEFBSUUsQUFLWCxBQUlBLEFBSUgsQUFJSSxZQTlCSixBQTJCTSxHQVJDLEFBSUEsQ0FRRixjQUhuQixHQUltQixDQVpuQixBQUlBLGdCQVNBLFVBbkJ5QixrQkFKdkIsS0FLb0MsR0FkakIsaUNBZXJCLG9DQWR1QixrREFDVCxZQUNPLG1CQUNBLDZGQUNyQiIsImZpbGUiOiJjb21wb25lbnRzL3NlYXJjaFJlc3VsdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTmlja3lCL0Rlc2t0b3AvUHVibGlzdENoYWxsZW5nZXMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBTZWFyY2hSZXN1bHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1cmw6IHByb3BzLnVybCxcbiAgICAgIGltYWdlOiBwcm9wcy5pbWFnZSxcbiAgICAgIHRpdGxlOiBwcm9wcy50aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5kZXNjcmlwdGlvbixcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybihcbiAgICAgIDxhIGNsYXNzTmFtZT1cImFydGljbGUtY29udGFpbmVyXCIgaHJlZj17dGhpcy5zdGF0ZS51cmx9PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAuYXJ0aWNsZS1jb250YWluZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgICAgICAgICAgIC5hcnRpY2xlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFydGljbGUtY29udGFpbmVyOmhvdmVyIHtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2IoMTYzLDE2MywxNjMpO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLDAsMCwuMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYXJ0aWNsZS10aXRsZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hcnRpY2xlLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFydGljbGUtaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYXJ0aWNsZS1pbWFnZSB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhcnRpY2xlLWltYWdlXCIgc3JjPXt0aGlzLnN0YXRlLmltYWdlfT48L2ltZz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS10aXRsZVwiPnt0aGlzLnN0YXRlLnRpdGxlfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1kZXNjXCI+e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvYT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUmVzdWx0O1xuIl19 */\n/*@ sourceURL=components/searchResult.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        className: "jsx-1030678036" + " " + "article-image-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: this.state.image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        className: "jsx-1030678036" + " " + "article-image"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        className: "jsx-1030678036"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        className: "jsx-1030678036" + " " + "article-title"
      }, this.state.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        className: "jsx-1030678036" + " " + "article-desc"
      }, this.state.description)));
    }
  }]);

  return SearchResult;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SearchResult);

/***/ })

})
//# sourceMappingURL=4.c10bd3197bd4f26d17b0.hot-update.js.map