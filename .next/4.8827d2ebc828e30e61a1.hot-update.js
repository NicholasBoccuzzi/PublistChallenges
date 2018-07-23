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
      console.log(this.state.isHidden);

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
          lineNumber: 30
        },
        className: "jsx-1626284652" + " " + "main-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1626284652",
        css: ".main-container.jsx-1626284652{width:100%;max-width:1600px;min-height:100vh;min-width:575px;padding:48px 72px 0;background:#F6F9FC;z-index:10;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.page-title.jsx-1626284652{color:var(--color-text-dark);font-size:28px;font-weight:600;}.flex-center.jsx-1626284652{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.flex-one.jsx-1626284652{-webkit-flex:1;-ms-flex:1;flex:1;}.dash-title.jsx-1626284652{color:#000;font-size:18px;font-weight:500;line-height:18px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}.dash-title-text.jsx-1626284652{margin-right:10px;}.to-dashboard.jsx-1626284652{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;color:rgb(187,187,187);-webkit-text-decoration:none;text-decoration:none;}.dashboard-dash.jsx-1626284652{margin-right:25px;font-size:40px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWFpbkNvbnRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJvQixBQUd3QixBQVdrQixBQUtoQixBQUlOLEFBR0ksQUFVTyxBQUdMLEFBUUssV0EzQ0QsQUF1QkYsT0FVakIsQUFXaUIsUUFwQkMsRUF2QkMsQ0FVRixJQVNqQixBQXlCQSxTQXBCbUIsRUFiRCxDQVZBLGNBd0JILENBYmYsQ0FWc0IsYUFhRyxBQW9CQSxPQWhDSixtQkFDUixXQUNFLHNCQXFCVSx3Q0FWekIsQUFvQnFCLFlBOUJHLCtDQXFCSCwrQkFwQnJCLEdBOEJpQixlQUNVLHVCQUNKLHFCQVhOLGVBQ2pCLGNBV0EiLCJmaWxlIjoiY29tcG9uZW50cy9tYWluQ29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTmlja3lCL0Rlc2t0b3AvUHVibGlzdENoYWxsZW5nZXMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBjb29raWUgZnJvbSAncmVhY3QtY29va2llJztcbmltcG9ydCBTZWFyY2hDb250YWluZXIgZnJvbSAnLi9zZWFyY2hDb250YWluZXInO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4vZHJvcGRvd24nO1xuXG5cbmNsYXNzIE1haW5Db250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNIaWRkZW46IHRydWUsXG4gICAgfVxuXG4gICAgdGhpcy50b2dnbGVNb2RhbCA9IHRoaXMudG9nZ2xlTW9kYWwuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHRvZ2dsZU1vZGFsICgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmlzSGlkZGVuKVxuICAgIGlmICh0aGlzLnN0YXRlLmlzSGlkZGVuID09PSB0cnVlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtpc0hpZGRlbjogZmFsc2V9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNIaWRkZW46IHRydWV9KVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG5cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGFpbmVyXCI+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubWFpbi1jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE2MDBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgbWluLXdpZHRoOiA1NzVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDQ4cHggNzJweCAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0Y2RjlGQztcbiAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wYWdlLXRpdGxlIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LWRhcmspO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZsZXgtY2VudGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZsZXgtb25lIHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kYXNoLXRpdGxlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRhc2gtdGl0bGUtdGV4dCB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50by1kYXNoYm9hcmQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTg3LCAxODcsIDE4Nyk7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kYXNoYm9hcmQtZGFzaCB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jZW50ZXJcIj5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9wdWJsaXN0LmFpL25pY2tib2NjdXp6aS9yZXBvcnRzXCIgY2xhc3NOYW1lPVwidG8tZGFzaGJvYXJkXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1sZWZ0IGRhc2hib2FyZC1kYXNoXCI+PC9pPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoYm9hcmQtdGV4dFwiPkRhc2hib2FyZDwvZGl2PlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtb25lXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoLXRpdGxlXCIgb25DbGljaz17dGhpcy50b2dnbGVNb2RhbH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2gtdGl0bGUtdGV4dFwiPkN1cnJlbnQgVXNlcjwvZGl2PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtZG93biBcIj48L2k+XG4gICAgICAgICAgICA8RHJvcGRvd24gaXNIaWRkZW49e3RoaXMuc3RhdGUuaXNIaWRkZW59IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8U2VhcmNoQ29udGFpbmVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRlbnQ7XG4iXX0= */\n/*@ sourceURL=components/mainContent.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        className: "jsx-1626284652" + " " + "flex-center"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://publist.ai/nickboccuzzi/reports",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        className: "jsx-1626284652" + " " + "to-dashboard"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        className: "jsx-1626284652" + " " + "fa fa-angle-left dashboard-dash"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        className: "jsx-1626284652" + " " + "dashboard-text"
      }, "Dashboard")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        className: "jsx-1626284652" + " " + "flex-one"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        onClick: this.toggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        className: "jsx-1626284652" + " " + "dash-title"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        className: "jsx-1626284652" + " " + "dash-title-text"
      }, "Current User"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        className: "jsx-1626284652" + " " + "fa fa-angle-down "
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__dropdown__["a" /* default */], {
        isHidden: this.state.isHidden,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__searchContainer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }));
    }
  }]);

  return MainContent;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (MainContent);

/***/ })

})
//# sourceMappingURL=4.8827d2ebc828e30e61a1.hot-update.js.map