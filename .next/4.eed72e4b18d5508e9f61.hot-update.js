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
      modalActive: false
    };
    _this.toggleModal = _this.toggleModal.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MainContent, [{
    key: "toggleModal",
    value: function toggleModal() {
      this.setState({
        modalActive: !this.state.modalActive
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-731801070" + " " + "main-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "731801070",
        css: ".main-container.jsx-731801070{width:100%;max-width:1600px;min-height:100vh;padding:48px 72px 0;background:#F6F9FC;z-index:10;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.page-title.jsx-731801070{color:var(--color-text-dark);font-size:28px;font-weight:600;}.flex-center.jsx-731801070{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.flex-one.jsx-731801070{-webkit-flex:1;-ms-flex:1;flex:1;}.dash-title.jsx-731801070{color:#000;font-size:18px;font-weight:500;line-height:18px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}.dash-title-text.jsx-731801070{margin-right:10px;}.to-dashboard.jsx-731801070{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;color:rgb(187,187,187);-webkit-text-decoration:none;text-decoration:none;}.dashboard-dash.jsx-731801070{margin-right:25px;font-size:40px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWFpbkNvbnRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JvQixBQUd3QixBQVVrQixBQUtoQixBQUlOLEFBR0ksQUFVTyxBQUdMLEFBUUssV0ExQ0QsQUFzQkYsT0FVakIsQUFXaUIsUUFwQkMsRUF0QkMsQ0FTRixJQVNqQixBQXlCQSxTQXBCbUIsRUFiRCxDQVRJLGNBdUJQLENBYmYsS0FUcUIsU0FZSSxBQW9CQSxVQS9CWixXQUNFLHNDQXFCVSxvQ0FwQkQsSUFVeEIsQUFvQnFCLDJEQVRBLGVBcEJyQixtQkE4QmlCLGVBQ1UsdUJBQ0oscUJBWE4sZUFDakIsY0FXQSIsImZpbGUiOiJjb21wb25lbnRzL21haW5Db250ZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9OaWNreUIvRGVza3RvcC9QdWJsaXN0Q2hhbGxlbmdlcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICdyZWFjdC1jb29raWUnO1xuaW1wb3J0IFNlYXJjaENvbnRhaW5lciBmcm9tICcuL3NlYXJjaENvbnRhaW5lcic7XG5cblxuY2xhc3MgTWFpbkNvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb2RhbEFjdGl2ZTogZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLnRvZ2dsZU1vZGFsID0gdGhpcy50b2dnbGVNb2RhbC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdG9nZ2xlTW9kYWwgKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe21vZGFsQWN0aXZlOiAhdGhpcy5zdGF0ZS5tb2RhbEFjdGl2ZX0pO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcblxuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250YWluZXJcIj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5tYWluLWNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTYwMHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBwYWRkaW5nOiA0OHB4IDcycHggMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGNkY5RkM7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucGFnZS10aXRsZSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1kYXJrKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mbGV4LWNlbnRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mbGV4LW9uZSB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGFzaC10aXRsZSB7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kYXNoLXRpdGxlLXRleHQge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG8tZGFzaGJvYXJkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDE4NywgMTg3LCAxODcpO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGFzaGJvYXJkLWRhc2gge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY2VudGVyXCI+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcHVibGlzdC5haS9uaWNrYm9jY3V6emkvcmVwb3J0c1wiIGNsYXNzTmFtZT1cInRvLWRhc2hib2FyZFwiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtbGVmdCBkYXNoYm9hcmQtZGFzaFwiPjwvaT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaGJvYXJkLXRleHRcIj5EYXNoYm9hcmQ8L2Rpdj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LW9uZVwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaC10aXRsZVwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTW9kYWx9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoLXRpdGxlLXRleHRcIj5DdXJyZW50IFVzZXI8L2Rpdj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvd24gXCI+PC9pPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFNlYXJjaENvbnRhaW5lciAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5Db250ZW50O1xuIl19 */\n/*@ sourceURL=components/mainContent.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        className: "jsx-731801070" + " " + "flex-center"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://publist.ai/nickboccuzzi/reports",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        className: "jsx-731801070" + " " + "to-dashboard"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        className: "jsx-731801070" + " " + "fa fa-angle-left dashboard-dash"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        className: "jsx-731801070" + " " + "dashboard-text"
      }, "Dashboard")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        className: "jsx-731801070" + " " + "flex-one"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        onClick: this.toggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        className: "jsx-731801070" + " " + "dash-title"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        className: "jsx-731801070" + " " + "dash-title-text"
      }, "Current User"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        className: "jsx-731801070" + " " + "fa fa-angle-down "
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__searchContainer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }));
    }
  }]);

  return MainContent;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (MainContent);

/***/ })

})
//# sourceMappingURL=4.eed72e4b18d5508e9f61.hot-update.js.map