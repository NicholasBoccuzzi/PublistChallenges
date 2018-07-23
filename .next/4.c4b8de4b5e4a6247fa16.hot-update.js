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
        className: "jsx-3708040485" + " " + "article-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3708040485",
        css: ".article-container.jsx-3708040485{padding:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-text-decoration:none;text-decoration:none;color:black;margin-bottom:20px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.article-container.jsx-3708040485:hover{-webkit-text-decoration:underline;text-decoration:underline;color:rgb(163,163,163);box-shadow:0 2px 8px rgba(0,0,0,.2);}.article-title.jsx-3708040485{font-size:20px;margin-bottom:10px;}.article-description.jsx-3708040485{font-size:14px;margin-bottom:10px;}.article-image-container.jsx-3708040485{width:200px;margin-right:50px;}.article-image.jsx-3708040485{max-width:200px;max-height:200px;object-fit:cover;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoUmVzdWx0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCVyxBQUcyQixBQVNjLEFBS1gsQUFJQSxBQUlILEFBSUksWUF6QkosQUFzQk0sR0FSQyxBQUlBLENBUUYsY0FIbkIsR0FJbUIsQ0FabkIsQUFJQSxnQkFTQSxVQW5CeUIsdUJBQ2EsR0FUakIsaUNBVXJCLG9DQVR1QixrREFDVCxZQUNPLG1CQUNBLDZGQUNyQiIsImZpbGUiOiJjb21wb25lbnRzL3NlYXJjaFJlc3VsdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTmlja3lCL0Rlc2t0b3AvUHVibGlzdENoYWxsZW5nZXMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBTZWFyY2hSZXN1bHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1cmw6IHByb3BzLnVybCxcbiAgICAgIGltYWdlOiBwcm9wcy5pbWFnZSxcbiAgICAgIHRpdGxlOiBwcm9wcy50aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5kZXNjcmlwdGlvbixcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybihcbiAgICAgIDxhIGNsYXNzTmFtZT1cImFydGljbGUtY29udGFpbmVyXCIgaHJlZj17dGhpcy5zdGF0ZS51cmx9PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAuYXJ0aWNsZS1jb250YWluZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYXJ0aWNsZS1jb250YWluZXI6aG92ZXIge1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYigxNjMsMTYzLDE2Myk7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLC4yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hcnRpY2xlLXRpdGxlIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFydGljbGUtZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYXJ0aWNsZS1pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hcnRpY2xlLWltYWdlIHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1pbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImFydGljbGUtaW1hZ2VcIiBzcmM9e3RoaXMuc3RhdGUuaW1hZ2V9PjwvaW1nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLXRpdGxlXCI+e3RoaXMuc3RhdGUudGl0bGV9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLWRlc2NcIj57dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9hPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hSZXN1bHQ7XG4iXX0= */\n/*@ sourceURL=components/searchResult.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        className: "jsx-3708040485" + " " + "article-image-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: this.state.image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        className: "jsx-3708040485" + " " + "article-image"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        className: "jsx-3708040485"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        className: "jsx-3708040485" + " " + "article-title"
      }, this.state.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        className: "jsx-3708040485" + " " + "article-desc"
      }, this.state.description)));
    }
  }]);

  return SearchResult;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SearchResult);

/***/ })

})
//# sourceMappingURL=4.c4b8de4b5e4a6247fa16.hot-update.js.map