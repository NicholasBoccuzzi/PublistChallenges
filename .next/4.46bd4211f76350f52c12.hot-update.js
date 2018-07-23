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
      console.log(this.state.modalActive);
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        className: "jsx-731801070" + " " + "main-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "731801070",
        css: ".main-container.jsx-731801070{width:100%;max-width:1600px;min-height:100vh;padding:48px 72px 0;background:#F6F9FC;z-index:10;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.page-title.jsx-731801070{color:var(--color-text-dark);font-size:28px;font-weight:600;}.flex-center.jsx-731801070{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.flex-one.jsx-731801070{-webkit-flex:1;-ms-flex:1;flex:1;}.dash-title.jsx-731801070{color:#000;font-size:18px;font-weight:500;line-height:18px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}.dash-title-text.jsx-731801070{margin-right:10px;}.to-dashboard.jsx-731801070{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;color:rgb(187,187,187);-webkit-text-decoration:none;text-decoration:none;}.dashboard-dash.jsx-731801070{margin-right:25px;font-size:40px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWFpbkNvbnRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJvQixBQUd3QixBQVVrQixBQUtoQixBQUlOLEFBR0ksQUFVTyxBQUdMLEFBUUssV0ExQ0QsQUFzQkYsT0FVakIsQUFXaUIsUUFwQkMsRUF0QkMsQ0FTRixJQVNqQixBQXlCQSxTQXBCbUIsRUFiRCxDQVRJLGNBdUJQLENBYmYsS0FUcUIsU0FZSSxBQW9CQSxVQS9CWixXQUNFLHNDQXFCVSxvQ0FwQkQsSUFVeEIsQUFvQnFCLDJEQVRBLGVBcEJyQixtQkE4QmlCLGVBQ1UsdUJBQ0oscUJBWE4sZUFDakIsY0FXQSIsImZpbGUiOiJjb21wb25lbnRzL21haW5Db250ZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9OaWNreUIvRGVza3RvcC9QdWJsaXN0Q2hhbGxlbmdlcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICdyZWFjdC1jb29raWUnO1xuaW1wb3J0IFNlYXJjaENvbnRhaW5lciBmcm9tICcuL3NlYXJjaENvbnRhaW5lcic7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9kcm9wZG93bic7XG5cblxuY2xhc3MgTWFpbkNvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb2RhbEFjdGl2ZTogZmFsc2UsXG4gICAgfVxuXG4gICAgdGhpcy50b2dnbGVNb2RhbCA9IHRoaXMudG9nZ2xlTW9kYWwuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHRvZ2dsZU1vZGFsICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHttb2RhbEFjdGl2ZTogIXRoaXMuc3RhdGUubW9kYWxBY3RpdmV9KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm1vZGFsQWN0aXZlKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG5cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGFpbmVyXCI+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubWFpbi1jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE2MDBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgcGFkZGluZzogNDhweCA3MnB4IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjZGOUZDO1xuICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBhZ2UtdGl0bGUge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtZGFyayk7XG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZmxleC1jZW50ZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZmxleC1vbmUge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRhc2gtdGl0bGUge1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGFzaC10aXRsZS10ZXh0IHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRvLWRhc2hib2FyZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgY29sb3I6IHJnYigxODcsIDE4NywgMTg3KTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRhc2hib2FyZC1kYXNoIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNlbnRlclwiPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3B1Ymxpc3QuYWkvbmlja2JvY2N1enppL3JlcG9ydHNcIiBjbGFzc05hbWU9XCJ0by1kYXNoYm9hcmRcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWxlZnQgZGFzaGJvYXJkLWRhc2hcIj48L2k+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hib2FyZC10ZXh0XCI+RGFzaGJvYXJkPC9kaXY+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1vbmVcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2gtdGl0bGVcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZU1vZGFsfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaC10aXRsZS10ZXh0XCI+Q3VycmVudCBVc2VyPC9kaXY+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1kb3duIFwiPjwvaT5cbiAgICAgICAgICAgIDxEcm9wZG93biBpc0hpZGRlbj17dGhpcy5zdGF0ZS5tb2RhbEFjdGl2ZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTZWFyY2hDb250YWluZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGVudDtcbiJdfQ== */\n/*@ sourceURL=components/mainContent.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        className: "jsx-731801070" + " " + "flex-center"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://publist.ai/nickboccuzzi/reports",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        className: "jsx-731801070" + " " + "to-dashboard"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        className: "jsx-731801070" + " " + "fa fa-angle-left dashboard-dash"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        className: "jsx-731801070" + " " + "dashboard-text"
      }, "Dashboard")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        className: "jsx-731801070" + " " + "flex-one"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        onClick: this.toggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        className: "jsx-731801070" + " " + "dash-title"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        className: "jsx-731801070" + " " + "dash-title-text"
      }, "Current User"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        className: "jsx-731801070" + " " + "fa fa-angle-down "
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__dropdown__["a" /* default */], {
        isHidden: this.state.modalActive,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__searchContainer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }));
    }
  }]);

  return MainContent;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (MainContent);

/***/ })

})
//# sourceMappingURL=4.46bd4211f76350f52c12.hot-update.js.map