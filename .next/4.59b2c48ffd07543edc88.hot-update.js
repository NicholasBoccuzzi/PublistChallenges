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
        className: "jsx-3022328323" + " " + "article-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3022328323",
        css: ".article-container.jsx-3022328323{padding:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-text-decoration:none;text-decoration:none;color:black;margin-bottom:20px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.flex-query.jsx-3022328323{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.article-container.jsx-3022328323:hover{-webkit-text-decoration:underline;text-decoration:underline;color:rgb(163,163,163);box-shadow:0 2px 8px rgba(0,0,0,.2);}.article-title.jsx-3022328323{font-size:20px;margin-bottom:10px;}.article-description.jsx-3022328323{font-size:14px;margin-bottom:10px;}.article-image-container.jsx-3022328323{width:200px;margin-right:50px;}.article-image.jsx-3022328323{max-width:200px;max-height:200px;object-fit:cover;}@media only screen and (max-width:900px){.flex-query.jsx-3022328323{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.article-image-container.jsx-3022328323{margin:0 auto;}.article-description.jsx-3022328323{justify-self:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;text-align:center;}.article-title.jsx-3022328323{justify-self:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoUmVzdWx0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCVyxBQUcyQixBQVNDLEFBSWEsQUFLWCxBQUlBLEFBSUgsQUFJSSxBQU1RLEFBSVIsQUFHSyxBQUtBLFlBL0NULEFBMEJNLEVBY2xCLENBdEJtQixBQUlBLENBUUYsSUFhRSxBQUtBLFVBckJyQixHQUltQixDQVpuQixBQUlBLGdCQVNBLFVBbkJ5QixjQUpKLElBMkJNLEtBdEJXLEdBYmpCLEtBMkNDLEFBS0Esa0JBSnBCLEFBS0EsVUFuQ0Ysd0JBTEEsWUFSdUIsc0JBbUNyQiw0QkFsQ1ksWUFDTyxtQkFDQSw2RkFDckIiLCJmaWxlIjoiY29tcG9uZW50cy9zZWFyY2hSZXN1bHQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL05pY2t5Qi9EZXNrdG9wL1B1Ymxpc3RDaGFsbGVuZ2VzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgU2VhcmNoUmVzdWx0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXJsOiBwcm9wcy51cmwsXG4gICAgICBpbWFnZTogcHJvcHMuaW1hZ2UsXG4gICAgICB0aXRsZTogcHJvcHMudGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4oXG4gICAgICA8YSBjbGFzc05hbWU9XCJhcnRpY2xlLWNvbnRhaW5lclwiIGhyZWY9e3RoaXMuc3RhdGUudXJsfT5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmFydGljbGUtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZsZXgtcXVlcnl7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYXJ0aWNsZS1jb250YWluZXI6aG92ZXIge1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYigxNjMsMTYzLDE2Myk7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLC4yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hcnRpY2xlLXRpdGxlIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFydGljbGUtZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYXJ0aWNsZS1pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hcnRpY2xlLWltYWdlIHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgICAgICAgICAgICAuZmxleC1xdWVyeSB7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuYXJ0aWNsZS1pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5hcnRpY2xlLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6Y2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6Y2VudGVyO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuYXJ0aWNsZS10aXRsZXtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6Y2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6Y2VudGVyO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1xdWVyeVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1pbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXJ0aWNsZS1pbWFnZVwiIHNyYz17dGhpcy5zdGF0ZS5pbWFnZX0+PC9pbWc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtdGl0bGVcIj57dGhpcy5zdGF0ZS50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1kZXNjXCI+e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUmVzdWx0O1xuIl19 */\n/*@ sourceURL=components/searchResult.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        className: "jsx-3022328323" + " " + "flex-query"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        className: "jsx-3022328323" + " " + "article-image-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: this.state.image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        className: "jsx-3022328323" + " " + "article-image"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        className: "jsx-3022328323"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        className: "jsx-3022328323" + " " + "article-title"
      }, this.state.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        className: "jsx-3022328323" + " " + "article-desc"
      }, this.state.description))));
    }
  }]);

  return SearchResult;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SearchResult);

/***/ })

})
//# sourceMappingURL=4.59b2c48ffd07543edc88.hot-update.js.map