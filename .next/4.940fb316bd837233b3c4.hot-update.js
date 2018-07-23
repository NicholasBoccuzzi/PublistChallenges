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
        className: "jsx-595772624"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "595772624",
        css: ".hidden.jsx-595772624{display:none;}.current-user-info.jsx-595772624{overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZHJvcGRvd24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JvQixBQUcwQixBQUdHLGFBRmxCLEdBR0EiLCJmaWxlIjoiY29tcG9uZW50cy9kcm9wZG93bi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTmlja3lCL0Rlc2t0b3AvUHVibGlzdENoYWxsZW5nZXMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBEcm9wZG93biBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0hpZGRlbjogIXByb3BzLmhpZGRlbixcbiAgICB9XG5cbiAgICB0aGlzLmlzSGlkZGVuID0gdGhpcy5pc0hpZGRlbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaXNIaWRkZW4gKCkge1xuICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG4gICAgaWYgKHRoaXMuc3RhdGUuaXNIaWRkZW4gPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBcImhpZGRlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gIH1cbiAgcmVuZGVyICgpIHtcblxuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaGlkZGVuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jdXJyZW50LXVzZXItaW5mbyB7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BjdXJyZW50LXVzZXItaW5mbyAke3RoaXMuaXNIaWRkZW4oKX1gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cnJlbnQtdXNlci1uYW1lXCI+Q3VycmVudCBVc2VyPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXJyZW50LXVzZXItZW1haWxcIj5DdXJyZW50VXNlckBnbWFpbC5jb208L2Rpdj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjdXJyZW50LXVzZXItcmVwb3J0c1wiIGhyZWY9XCJodHRwczovL3B1Ymxpc3QuYWkvcmVwb3J0c1wiPlxuICAgICAgICAgIERhc2hib2FyZFxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImN1cnJlbnQtdXNlci1zZXR0aW5nc1wiIGhyZWY9XCJodHRwczovL3B1Ymxpc3QuYWkvc2V0dGluZ3NcIj5cbiAgICAgICAgU2V0dGluZ3NcbiAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247XG4iXX0= */\n/*@ sourceURL=components/dropdown.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        className: "jsx-595772624" + " " + "current-user-info ".concat(this.isHidden())
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        className: "jsx-595772624" + " " + "current-user-name"
      }, "Current User"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        className: "jsx-595772624" + " " + "current-user-email"
      }, "CurrentUser@gmail.com"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://publist.ai/reports",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        className: "jsx-595772624" + " " + "current-user-reports"
      }, "Dashboard"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://publist.ai/settings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        className: "jsx-595772624" + " " + "current-user-settings"
      }, "Settings")));
    }
  }]);

  return Dropdown;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Dropdown);

/***/ })

})
//# sourceMappingURL=4.940fb316bd837233b3c4.hot-update.js.map