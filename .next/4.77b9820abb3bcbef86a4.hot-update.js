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
        className: "jsx-1387927723" + " " + "article-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1387927723",
        css: ".article-container.jsx-1387927723{padding:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-text-decoration:none;text-decoration:none;color:black;margin-bottom:20px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.article-text-container.jsx-1387927723{margin:auto;}.flex-query.jsx-1387927723{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.article-container.jsx-1387927723:hover{-webkit-text-decoration:underline;text-decoration:underline;color:rgb(163,163,163);box-shadow:0 2px 8px rgba(0,0,0,0.2);}.article-title.jsx-1387927723{font-size:20px;margin-bottom:10px;}.article-description.jsx-1387927723{font-size:14px;margin-bottom:10px;}.article-image-container.jsx-1387927723{width:200px;margin-right:50px;}.article-image.jsx-1387927723{max-width:200px;max-height:200px;object-fit:cover;}@media only screen and (max-width:900px){.flex-query.jsx-1387927723{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.article-image-container.jsx-1387927723{margin:0 auto;}.article-description.jsx-1387927723{font-size:12px;text-align:center;}.article-title.jsx-1387927723{font-size:16px;text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoUmVzdWx0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCVyxBQUcyQixBQVNBLEFBR0MsQUFJYSxBQUtYLEFBSUEsQUFJSCxBQUlJLEFBTVEsQUFJUixBQUdDLEFBSUEsWUFqREosQUFTZixBQW9Cb0IsRUFjbEIsQ0F0Qm1CLEFBSUEsQUFxQkMsQUFJQSxDQWpCSCxjQUhuQixHQUltQixBQWFqQixBQUlBLENBN0JGLEFBSUEsZ0JBU0EsVUFuQjJCLGNBSk4sSUEyQk0sS0F0QmUsR0FoQnJCLGtDQWlCckIsdUJBTEEsWUFYdUIsc0JBc0NyQiw0QkFyQ1ksWUFDTyxtQkFDQSw2RkFDckIiLCJmaWxlIjoiY29tcG9uZW50cy9zZWFyY2hSZXN1bHQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL05pY2t5Qi9EZXNrdG9wL1B1Ymxpc3RDaGFsbGVuZ2VzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBTZWFyY2hSZXN1bHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXJsOiBwcm9wcy51cmwsXG4gICAgICBpbWFnZTogcHJvcHMuaW1hZ2UsXG4gICAgICB0aXRsZTogcHJvcHMudGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb25cbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8YSBjbGFzc05hbWU9XCJhcnRpY2xlLWNvbnRhaW5lclwiIGhyZWY9e3RoaXMuc3RhdGUudXJsfT5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmFydGljbGUtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hcnRpY2xlLXRleHQtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZsZXgtcXVlcnkge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFydGljbGUtY29udGFpbmVyOmhvdmVyIHtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2IoMTYzLCAxNjMsIDE2Myk7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYXJ0aWNsZS10aXRsZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hcnRpY2xlLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFydGljbGUtaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYXJ0aWNsZS1pbWFnZSB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICAgICAgICAgICAgLmZsZXgtcXVlcnkge1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmFydGljbGUtaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuYXJ0aWNsZS1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuYXJ0aWNsZS10aXRsZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1xdWVyeVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1pbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXJ0aWNsZS1pbWFnZVwiIHNyYz17dGhpcy5zdGF0ZS5pbWFnZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhcnRpY2xlLXRleHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtdGl0bGVcIj57dGhpcy5zdGF0ZS50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1kZXNjcmlwdGlvblwiPnt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hSZXN1bHQ7XG4iXX0= */\n/*@ sourceURL=components/searchResult.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        className: "jsx-1387927723" + " " + "flex-query"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        className: "jsx-1387927723" + " " + "article-image-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: this.state.image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        className: "jsx-1387927723" + " " + "article-image"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        className: "jsx-1387927723" + " " + "article-text-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        className: "jsx-1387927723" + " " + "article-title"
      }, this.state.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        className: "jsx-1387927723" + " " + "article-description"
      }, this.state.description))));
    }
  }]);

  return SearchResult;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SearchResult);

/***/ })

})
//# sourceMappingURL=4.77b9820abb3bcbef86a4.hot-update.js.map