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
    _this.state = {
      isHidden: !props.hidden
    };
    _this.isHidden = _this.isHidden.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Dropdown, [{
    key: "isHidden",
    value: function isHidden() {
      console.log("hello");

      if (this.state.isHidden === true) {
        return "hidden";
      } else {
        return "";
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-1898113641" + " " + "current-user-info ".concat(this.isHidden())
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1898113641",
        css: ".hidden.jsx-1898113641{display:none;}.current-user-info.jsx-1898113641{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;width:200px;height:200px;background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZHJvcGRvd24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JvQixBQUcwQixBQUdBLGFBRmYsNkRBR2tCLGdCQUNKLFlBQ0MsYUFDSSxpQkFDbkIiLCJmaWxlIjoiY29tcG9uZW50cy9kcm9wZG93bi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTmlja3lCL0Rlc2t0b3AvUHVibGlzdENoYWxsZW5nZXMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBEcm9wZG93biBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0hpZGRlbjogIXByb3BzLmhpZGRlbixcbiAgICB9XG5cbiAgICB0aGlzLmlzSGlkZGVuID0gdGhpcy5pc0hpZGRlbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaXNIaWRkZW4gKCkge1xuICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG4gICAgaWYgKHRoaXMuc3RhdGUuaXNIaWRkZW4gPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBcImhpZGRlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gIH1cbiAgcmVuZGVyICgpIHtcblxuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY3VycmVudC11c2VyLWluZm8gJHt0aGlzLmlzSGlkZGVuKCl9YH0+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaGlkZGVuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jdXJyZW50LXVzZXItaW5mbyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICB9XG5cblxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXJyZW50LXVzZXItbmFtZVwiPkN1cnJlbnQgVXNlcjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VycmVudC11c2VyLWVtYWlsXCI+Q3VycmVudFVzZXJAZ21haWwuY29tPC9kaXY+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY3VycmVudC11c2VyLXJlcG9ydHNcIiBocmVmPVwiaHR0cHM6Ly9wdWJsaXN0LmFpL3JlcG9ydHNcIj5cbiAgICAgICAgICBEYXNoYm9hcmRcbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJjdXJyZW50LXVzZXItc2V0dGluZ3NcIiBocmVmPVwiaHR0cHM6Ly9wdWJsaXN0LmFpL3NldHRpbmdzXCI+XG4gICAgICAgICAgU2V0dGluZ3NcbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duO1xuIl19 */\n/*@ sourceURL=components/dropdown.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        className: "jsx-1898113641" + " " + "current-user-name"
      }, "Current User"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        className: "jsx-1898113641" + " " + "current-user-email"
      }, "CurrentUser@gmail.com"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://publist.ai/reports",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        className: "jsx-1898113641" + " " + "current-user-reports"
      }, "Dashboard"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://publist.ai/settings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        className: "jsx-1898113641" + " " + "current-user-settings"
      }, "Settings"));
    }
  }]);

  return Dropdown;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Dropdown);

/***/ })

})
//# sourceMappingURL=4.cc94c79cdf753d622fda.hot-update.js.map