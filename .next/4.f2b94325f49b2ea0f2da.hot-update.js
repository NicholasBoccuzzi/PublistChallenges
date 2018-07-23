webpackHotUpdate(4,{

/***/ "./components/mainContent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_cookie__ = __webpack_require__("./node_modules/react-cookie/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__searchContainer__ = __webpack_require__("./components/searchContainer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dropdown__ = __webpack_require__("./components/dropdown.js");
var _jsxFileName = "/Users/NickyB/Desktop/PublistChallenges/components/mainContent.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var MainContent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MainContent, _React$Component);

  function MainContent(props) {
    var _this;

    _classCallCheck(this, MainContent);

    _this = _possibleConstructorReturn(this, (MainContent.__proto__ || Object.getPrototypeOf(MainContent)).call(this, props));
    _this.state = {
      isHidden: true
    };
    _this.toggleModal = _this.toggleModal.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MainContent, [{
    key: "toggleModal",
    value: function toggleModal() {
      if (this.state.isHidden === true) {
        this.setState({
          isHidden: false
        });
      } else {
        this.setState({
          isHidden: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        className: "jsx-2667451623" + " " + "main-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2667451623",
        css: ".main-container.jsx-2667451623{width:100%;max-width:1600px;min-height:100vh;min-width:575px;padding:48px 72px 0;background:#f6f9fc;z-index:10;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.page-title.jsx-2667451623{color:var(--color-text-dark);font-size:28px;font-weight:600;}.flex-center.jsx-2667451623{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.flex-one.jsx-2667451623{-webkit-flex:1;-ms-flex:1;flex:1;}.dash-title.jsx-2667451623{color:#000;font-size:18px;font-weight:500;line-height:18px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}.dash-title-text.jsx-2667451623{margin-right:10px;}.to-dashboard.jsx-2667451623{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;color:rgb(187,187,187);-webkit-text-decoration:none;text-decoration:none;}.dashboard-dash.jsx-2667451623{margin-right:25px;font-size:40px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWFpbkNvbnRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJXLEFBRzBCLEFBV2tCLEFBS2hCLEFBSU4sQUFHSSxBQVVPLEFBR0wsQUFRSyxXQTNDRCxBQXVCRixPQVVqQixBQVdpQixRQXBCQyxFQXZCQyxDQVVGLElBU2pCLEFBeUJBLFNBcEJtQixFQWJELENBVkEsY0F3QkgsQ0FiZixDQVZzQixhQWFHLEFBb0JBLE9BaENKLG1CQUNSLFdBQ0Usc0JBcUJVLHdDQVZ6QixBQW9CcUIsWUE5QkcsK0NBcUJILCtCQXBCckIsR0E4QmlCLGVBQ1UsdUJBQ0oscUJBWE4sZUFDakIsY0FXQSIsImZpbGUiOiJjb21wb25lbnRzL21haW5Db250ZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9OaWNreUIvRGVza3RvcC9QdWJsaXN0Q2hhbGxlbmdlcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBjb29raWUgZnJvbSBcInJlYWN0LWNvb2tpZVwiO1xuaW1wb3J0IFNlYXJjaENvbnRhaW5lciBmcm9tIFwiLi9zZWFyY2hDb250YWluZXJcIjtcbmltcG9ydCBEcm9wZG93biBmcm9tIFwiLi9kcm9wZG93blwiO1xuXG5jbGFzcyBNYWluQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0hpZGRlbjogdHJ1ZVxuICAgIH07XG5cbiAgICB0aGlzLnRvZ2dsZU1vZGFsID0gdGhpcy50b2dnbGVNb2RhbC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdG9nZ2xlTW9kYWwoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaXNIaWRkZW4gPT09IHRydWUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0hpZGRlbjogZmFsc2UgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0hpZGRlbjogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250YWluZXJcIj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLm1haW4tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTYwMHB4O1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiA1NzVweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogNDhweCA3MnB4IDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNmY5ZmM7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhZ2UtdGl0bGUge1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1kYXJrKTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZsZXgtY2VudGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmxleC1vbmUge1xuICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRhc2gtdGl0bGUge1xuICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kYXNoLXRpdGxlLXRleHQge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudG8tZGFzaGJvYXJkIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYigxODcsIDE4NywgMTg3KTtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRhc2hib2FyZC1kYXNoIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNlbnRlclwiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9wdWJsaXN0LmFpL25pY2tib2NjdXp6aS9yZXBvcnRzXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvLWRhc2hib2FyZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtbGVmdCBkYXNoYm9hcmQtZGFzaFwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hib2FyZC10ZXh0XCI+RGFzaGJvYXJkPC9kaXY+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1vbmVcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaC10aXRsZVwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTW9kYWx9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoLXRpdGxlLXRleHRcIj5DdXJyZW50IFVzZXI8L2Rpdj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvd24gXCIgLz5cbiAgICAgICAgICAgIDxEcm9wZG93biBpc0hpZGRlbj17dGhpcy5zdGF0ZS5pc0hpZGRlbn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTZWFyY2hDb250YWluZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRlbnQ7XG4iXX0= */\n/*@ sourceURL=components/mainContent.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        className: "jsx-2667451623" + " " + "flex-center"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://publist.ai/nickboccuzzi/reports",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        className: "jsx-2667451623" + " " + "to-dashboard"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        className: "jsx-2667451623" + " " + "fa fa-angle-left dashboard-dash"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        className: "jsx-2667451623" + " " + "dashboard-text"
      }, "Dashboard")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        className: "jsx-2667451623" + " " + "flex-one"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        onClick: this.toggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        className: "jsx-2667451623" + " " + "dash-title"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        className: "jsx-2667451623" + " " + "dash-title-text"
      }, "Current User"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        className: "jsx-2667451623" + " " + "fa fa-angle-down "
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__dropdown__["a" /* default */], {
        isHidden: this.state.isHidden,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__searchContainer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }));
    }
  }]);

  return MainContent;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (MainContent);

/***/ })

})
//# sourceMappingURL=4.f2b94325f49b2ea0f2da.hot-update.js.map