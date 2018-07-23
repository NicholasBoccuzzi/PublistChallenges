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
        className: "jsx-3099276768" + " " + "article-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3099276768",
        css: ".article-container.jsx-3099276768{padding:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-text-decoration:none;text-decoration:none;color:black;margin-bottom:20px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;top:100px;}.article-text-container.jsx-3099276768{margin:auto;}.flex-query.jsx-3099276768{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.article-container.jsx-3099276768:hover{-webkit-text-decoration:underline;text-decoration:underline;color:rgb(163,163,163);box-shadow:0 2px 8px rgba(0,0,0,.2);}.article-title.jsx-3099276768{font-size:20px;margin-bottom:10px;}.article-description.jsx-3099276768{font-size:14px;margin-bottom:10px;}.article-image-container.jsx-3099276768{width:200px;margin-right:50px;}.article-image.jsx-3099276768{max-width:200px;max-height:200px;object-fit:cover;}@media only screen and (max-width:900px){.flex-query.jsx-3099276768{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.article-image-container.jsx-3099276768{margin:0 auto;}.article-description.jsx-3099276768{font-size:12px;text-align:center;}.article-title.jsx-3099276768{font-size:16px;text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoUmVzdWx0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCVyxBQUcyQixBQVdBLEFBR0MsQUFJYSxBQUtYLEFBSUEsQUFJSCxBQUlJLEFBTVEsQUFJUixBQUdDLEFBSUEsWUFuREwsQUFXZCxBQW9Cb0IsRUFjbEIsQ0F0Qm1CLEFBSUEsQUFxQkMsQUFJQSxDQWpCSCxjQUhuQixHQUltQixBQWFqQixBQUlBLENBN0JGLEFBSUEsZ0JBU0EsVUFuQnlCLGNBSkosSUEyQk0sS0F0QlcsR0FsQmpCLGlDQW1CckIsd0JBTEEsWUFidUIsc0JBd0NyQiw0QkF2Q1ksWUFDTyxtQkFDQSw2RkFDRCxrQkFDUixVQUNaIiwiZmlsZSI6ImNvbXBvbmVudHMvc2VhcmNoUmVzdWx0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9OaWNreUIvRGVza3RvcC9QdWJsaXN0Q2hhbGxlbmdlcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFNlYXJjaFJlc3VsdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVybDogcHJvcHMudXJsLFxuICAgICAgaW1hZ2U6IHByb3BzLmltYWdlLFxuICAgICAgdGl0bGU6IHByb3BzLnRpdGxlLFxuICAgICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uLFxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGEgY2xhc3NOYW1lPVwiYXJ0aWNsZS1jb250YWluZXJcIiBocmVmPXt0aGlzLnN0YXRlLnVybH0+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5hcnRpY2xlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB0b3A6IDEwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFydGljbGUtdGV4dC1jb250YWluZXIge1xuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmxleC1xdWVyeXtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hcnRpY2xlLWNvbnRhaW5lcjpob3ZlciB7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICBjb2xvcjogcmdiKDE2MywxNjMsMTYzKTtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwwLDAsLjIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFydGljbGUtdGl0bGUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYXJ0aWNsZS1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hcnRpY2xlLWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFydGljbGUtaW1hZ2Uge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgICAgICAgICAgIC5mbGV4LXF1ZXJ5IHtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5hcnRpY2xlLWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmFydGljbGUtZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmFydGljbGUtdGl0bGV7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1xdWVyeVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1pbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXJ0aWNsZS1pbWFnZVwiIHNyYz17dGhpcy5zdGF0ZS5pbWFnZX0+PC9pbWc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYXJ0aWNsZS10ZXh0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLXRpdGxlXCI+e3RoaXMuc3RhdGUudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtZGVzY3JpcHRpb25cIj57dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hSZXN1bHQ7XG4iXX0= */\n/*@ sourceURL=components/searchResult.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        className: "jsx-3099276768" + " " + "flex-query"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        className: "jsx-3099276768" + " " + "article-image-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: this.state.image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        className: "jsx-3099276768" + " " + "article-image"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        className: "jsx-3099276768" + " " + "article-text-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        className: "jsx-3099276768" + " " + "article-title"
      }, this.state.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        className: "jsx-3099276768" + " " + "article-description"
      }, this.state.description))));
    }
  }]);

  return SearchResult;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SearchResult);

/***/ })

})
//# sourceMappingURL=4.01463b1bf7a339486ffc.hot-update.js.map