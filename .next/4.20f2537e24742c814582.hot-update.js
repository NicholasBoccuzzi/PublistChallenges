webpackHotUpdate(4,{

/***/ "./components/dropdown.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/NickyB/Desktop/PublistChallenges/components/dropdown.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var Dropdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));
    _this.checkHidden = _this.checkHidden.bind(_assertThisInitialized(_this));
    _this.doNothing = _this.doNothing.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Dropdown, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {}
  }, {
    key: "checkHidden",
    value: function checkHidden() {
      if (this.state.isHidden === true) {
        return "hidden";
      } else {
        return "";
      }
    }
  }, {
    key: "doNothing",
    value: function doNothing() {
      return;
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state.isHidden);
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        onClick: this.doNothing,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        className: "jsx-3684045102" + " " + "current-user-info ".concat(this.checkHidden())
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3684045102",
        css: ".current-user-info.jsx-3684045102{position:absolute;box-shadow:0 1px 5px rgba(0,0,0,0.25);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;overflow:hidden;width:200px;height:200px;background:white;z-index:100;top:100px;right:75px;pointer:default;}.hidden.jsx-3684045102{display:none;}a.jsx-3684045102:hover{background:rgba(239,239,239,0.3);color:black;}.current-user-reports.jsx-3684045102{font-size:14px;padding:10px 20px;}.current-user-settings.jsx-3684045102{font-size:14px;padding:10px 20px;}.current-user-name.jsx-3684045102{padding:10px 20px;font-size:20px;}.current-user-email.jsx-3684045102{padding:10px 20px;font-size:14px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZHJvcGRvd24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNENvQixBQUcrQixBQWNMLEFBR3VCLEFBSXJCLEFBSUEsQUFJRyxBQUlBLGFBbEJwQixFQU9vQixBQUlBLEdBekJ1QixBQTZCMUIsQUFJQSxlQWhCSCxBQUtkLEFBSUEsQUFJQSxBQUlBLFlBaEJBLFdBakJlLDBFQUNTLDhFQUNOLGdCQUNKLFlBQ0MsYUFDSSxpQkFDTCxZQUNGLFVBQ0MsV0FDSyxnQkFDbEIiLCJmaWxlIjoiY29tcG9uZW50cy9kcm9wZG93bi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTmlja3lCL0Rlc2t0b3AvUHVibGlzdENoYWxsZW5nZXMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIERyb3Bkb3duIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmNoZWNrSGlkZGVuID0gdGhpcy5jaGVja0hpZGRlbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZG9Ob3RoaW5nID0gdGhpcy5kb05vdGhpbmcuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XG4gICAgaWYgKHByb3BzLmlzSGlkZGVuKSB7XG4gICAgICBsZXQgcmV0dXJuT2JqID0ge1xuICAgICAgICBpc0hpZGRlbjogcHJvcHMuaXNIaWRkZW5cbiAgICAgIH07XG4gICAgICByZXR1cm4gcmV0dXJuT2JqO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc0hpZGRlbjogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7fVxuXG4gIGNoZWNrSGlkZGVuKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmlzSGlkZGVuID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gXCJoaWRkZW5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICB9XG5cbiAgZG9Ob3RoaW5nKCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmlzSGlkZGVuKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXt0aGlzLmRvTm90aGluZ31cbiAgICAgICAgY2xhc3NOYW1lPXtgY3VycmVudC11c2VyLWluZm8gJHt0aGlzLmNoZWNrSGlkZGVuKCl9YH1cbiAgICAgID5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jdXJyZW50LXVzZXItaW5mbyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgICAgIHRvcDogMTAwcHg7XG4gICAgICAgICAgICByaWdodDogNzVweDtcbiAgICAgICAgICAgIHBvaW50ZXI6IGRlZmF1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oaWRkZW4ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgMjM5LCAyMzksIDAuMyk7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jdXJyZW50LXVzZXItcmVwb3J0cyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jdXJyZW50LXVzZXItc2V0dGluZ3Mge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY3VycmVudC11c2VyLW5hbWUge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY3VycmVudC11c2VyLWVtYWlsIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXJyZW50LXVzZXItbmFtZVwiPkN1cnJlbnQgVXNlcjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cnJlbnQtdXNlci1lbWFpbFwiPkN1cnJlbnRVc2VyQGdtYWlsLmNvbTwvZGl2PlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJjdXJyZW50LXVzZXItcmVwb3J0c1wiIGhyZWY9XCJodHRwczovL3B1Ymxpc3QuYWkvcmVwb3J0c1wiPlxuICAgICAgICAgIERhc2hib2FyZFxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImN1cnJlbnQtdXNlci1zZXR0aW5nc1wiIGhyZWY9XCJodHRwczovL3B1Ymxpc3QuYWkvc2V0dGluZ3NcIj5cbiAgICAgICAgICBTZXR0aW5nc1xuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duO1xuIl19 */\n/*@ sourceURL=components/dropdown.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        className: "jsx-3684045102" + " " + "current-user-name"
      }, "Current User"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        className: "jsx-3684045102" + " " + "current-user-email"
      }, "CurrentUser@gmail.com"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://publist.ai/reports",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        className: "jsx-3684045102" + " " + "current-user-reports"
      }, "Dashboard"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://publist.ai/settings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        className: "jsx-3684045102" + " " + "current-user-settings"
      }, "Settings"));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.isHidden) {
        var returnObj = {
          isHidden: props.isHidden
        };
        return returnObj;
      } else {
        return {
          isHidden: false
        };
      }
    }
  }]);

  return Dropdown;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Dropdown);

/***/ })

})
//# sourceMappingURL=4.20f2537e24742c814582.hot-update.js.map