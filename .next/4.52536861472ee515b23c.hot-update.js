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
        className: "jsx-768697540" + " " + "article-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "768697540",
        css: ".article-container.jsx-768697540{padding:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-text-decoration:none;text-decoration:none;color:black;margin-bottom:20px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.flex-query.jsx-768697540{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.article-container.jsx-768697540:hover{-webkit-text-decoration:underline;text-decoration:underline;color:rgb(163,163,163);box-shadow:0 2px 8px rgba(0,0,0,.2);}.article-title.jsx-768697540{font-size:20px;margin-bottom:10px;}.article-description.jsx-768697540{font-size:14px;margin-bottom:10px;}.article-image-container.jsx-768697540{width:200px;margin-right:50px;}.article-image.jsx-768697540{max-width:200px;max-height:200px;object-fit:cover;}@media only screen and (max-width:900px){.flex-query.jsx-768697540{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.article-image-container.jsx-768697540{margin:0 auto;}.article-description.jsx-768697540{font-size:12px;text-align:center;}.article-title.jsx-768697540{font-size:16px;text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoUmVzdWx0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCVyxBQUcyQixBQVNDLEFBSWEsQUFLWCxBQUlBLEFBSUgsQUFJSSxBQU1RLEFBSVIsQUFHQyxBQUlBLFlBOUNMLEFBMEJNLEVBY2xCLENBdEJtQixBQUlBLEFBcUJDLEFBSUEsQ0FqQkgsY0FIbkIsR0FJbUIsQUFhakIsQUFJQSxDQTdCRixBQUlBLGdCQVNBLFVBbkJ5QixjQUpKLElBMkJNLEtBdEJXLEdBYmpCLGlDQWNyQix3QkFMQSxZQVJ1QixzQkFtQ3JCLDRCQWxDWSxZQUNPLG1CQUNBLDZGQUNyQiIsImZpbGUiOiJjb21wb25lbnRzL3NlYXJjaFJlc3VsdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTmlja3lCL0Rlc2t0b3AvUHVibGlzdENoYWxsZW5nZXMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBTZWFyY2hSZXN1bHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1cmw6IHByb3BzLnVybCxcbiAgICAgIGltYWdlOiBwcm9wcy5pbWFnZSxcbiAgICAgIHRpdGxlOiBwcm9wcy50aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5kZXNjcmlwdGlvbixcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybihcbiAgICAgIDxhIGNsYXNzTmFtZT1cImFydGljbGUtY29udGFpbmVyXCIgaHJlZj17dGhpcy5zdGF0ZS51cmx9PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAuYXJ0aWNsZS1jb250YWluZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmxleC1xdWVyeXtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hcnRpY2xlLWNvbnRhaW5lcjpob3ZlciB7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICBjb2xvcjogcmdiKDE2MywxNjMsMTYzKTtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwwLDAsLjIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFydGljbGUtdGl0bGUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYXJ0aWNsZS1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hcnRpY2xlLWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFydGljbGUtaW1hZ2Uge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgICAgICAgICAgIC5mbGV4LXF1ZXJ5IHtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5hcnRpY2xlLWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmFydGljbGUtZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmFydGljbGUtdGl0bGV7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1xdWVyeVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1pbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXJ0aWNsZS1pbWFnZVwiIHNyYz17dGhpcy5zdGF0ZS5pbWFnZX0+PC9pbWc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtdGl0bGVcIj57dGhpcy5zdGF0ZS50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1kZXNjcmlwdGlvblwiPnt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2E+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFJlc3VsdDtcbiJdfQ== */\n/*@ sourceURL=components/searchResult.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        className: "jsx-768697540" + " " + "flex-query"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        className: "jsx-768697540" + " " + "article-image-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: this.state.image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        className: "jsx-768697540" + " " + "article-image"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        className: "jsx-768697540"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        className: "jsx-768697540" + " " + "article-title"
      }, this.state.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        className: "jsx-768697540" + " " + "article-description"
      }, this.state.description))));
    }
  }]);

  return SearchResult;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SearchResult);

/***/ })

})
//# sourceMappingURL=4.52536861472ee515b23c.hot-update.js.map