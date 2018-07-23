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
        className: "jsx-992646179" + " " + "current-user-info ".concat(this.isHidden())
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "992646179",
        css: ".current-user-info.jsx-992646179{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;width:200px;height:200px;background:white;}.hidden.jsx-992646179{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZHJvcGRvd24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JvQixBQUcwQixBQU9BLGFBQ2YsNkRBUGtCLGdCQUNKLFlBQ0MsYUFDSSxpQkFDbkIiLCJmaWxlIjoiY29tcG9uZW50cy9kcm9wZG93bi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTmlja3lCL0Rlc2t0b3AvUHVibGlzdENoYWxsZW5nZXMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBEcm9wZG93biBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0hpZGRlbjogIXByb3BzLmhpZGRlbixcbiAgICB9XG5cbiAgICB0aGlzLmlzSGlkZGVuID0gdGhpcy5pc0hpZGRlbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaXNIaWRkZW4gKCkge1xuICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG4gICAgaWYgKHRoaXMuc3RhdGUuaXNIaWRkZW4gPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBcImhpZGRlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gIH1cbiAgcmVuZGVyICgpIHtcblxuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY3VycmVudC11c2VyLWluZm8gJHt0aGlzLmlzSGlkZGVuKCl9YH0+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY3VycmVudC11c2VyLWluZm8ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oaWRkZW4ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VycmVudC11c2VyLW5hbWVcIj5DdXJyZW50IFVzZXI8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cnJlbnQtdXNlci1lbWFpbFwiPkN1cnJlbnRVc2VyQGdtYWlsLmNvbTwvZGl2PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImN1cnJlbnQtdXNlci1yZXBvcnRzXCIgaHJlZj1cImh0dHBzOi8vcHVibGlzdC5haS9yZXBvcnRzXCI+XG4gICAgICAgICAgRGFzaGJvYXJkXG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiY3VycmVudC11c2VyLXNldHRpbmdzXCIgaHJlZj1cImh0dHBzOi8vcHVibGlzdC5haS9zZXR0aW5nc1wiPlxuICAgICAgICAgIFNldHRpbmdzXG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjtcbiJdfQ== */\n/*@ sourceURL=components/dropdown.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        className: "jsx-992646179" + " " + "current-user-name"
      }, "Current User"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        className: "jsx-992646179" + " " + "current-user-email"
      }, "CurrentUser@gmail.com"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://publist.ai/reports",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        className: "jsx-992646179" + " " + "current-user-reports"
      }, "Dashboard"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://publist.ai/settings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        className: "jsx-992646179" + " " + "current-user-settings"
      }, "Settings"));
    }
  }]);

  return Dropdown;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Dropdown);

/***/ })

})
//# sourceMappingURL=4.3f871f342592dfca4ac8.hot-update.js.map