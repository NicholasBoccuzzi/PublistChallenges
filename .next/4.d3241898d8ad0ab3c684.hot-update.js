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
      isHidden: props.isHidden
    };
    _this.checkHidden = _this.checkHidden.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Dropdown, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      console.log(prevProps);
    }
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
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        className: "jsx-992646179" + " " + "current-user-info ".concat(this.checkHidden())
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "992646179",
        css: ".current-user-info.jsx-992646179{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;width:200px;height:200px;background:white;}.hidden.jsx-992646179{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZHJvcGRvd24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NvQixBQUcwQixBQU9BLGFBQ2YsNkRBUGtCLGdCQUNKLFlBQ0MsYUFDSSxpQkFDbkIiLCJmaWxlIjoiY29tcG9uZW50cy9kcm9wZG93bi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTmlja3lCL0Rlc2t0b3AvUHVibGlzdENoYWxsZW5nZXMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBEcm9wZG93biBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0hpZGRlbjogcHJvcHMuaXNIaWRkZW4sXG4gICAgfVxuXG4gICAgdGhpcy5jaGVja0hpZGRlbiA9IHRoaXMuY2hlY2tIaWRkZW4uYmluZCh0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XG4gICAgY29uc29sZS5sb2cocHJvcHMpO1xuICAgIGNvbnNvbGUubG9nKHByb3BzLmlzSGlkZGVuKVxuICAgIGlmIChwcm9wcy5pc0hpZGRlbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNIaWRkZW46IHByb3BzLmlzSGlkZGVuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlIChwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGNvbnNvbGUubG9nKHByZXZQcm9wcyk7XG4gIH1cblxuICBjaGVja0hpZGRlbiAoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaXNIaWRkZW4gPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBcImhpZGRlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BjdXJyZW50LXVzZXItaW5mbyAke3RoaXMuY2hlY2tIaWRkZW4oKX1gfT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jdXJyZW50LXVzZXItaW5mbyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhpZGRlbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXJyZW50LXVzZXItbmFtZVwiPkN1cnJlbnQgVXNlcjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VycmVudC11c2VyLWVtYWlsXCI+Q3VycmVudFVzZXJAZ21haWwuY29tPC9kaXY+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY3VycmVudC11c2VyLXJlcG9ydHNcIiBocmVmPVwiaHR0cHM6Ly9wdWJsaXN0LmFpL3JlcG9ydHNcIj5cbiAgICAgICAgICBEYXNoYm9hcmRcbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJjdXJyZW50LXVzZXItc2V0dGluZ3NcIiBocmVmPVwiaHR0cHM6Ly9wdWJsaXN0LmFpL3NldHRpbmdzXCI+XG4gICAgICAgICAgU2V0dGluZ3NcbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duO1xuIl19 */\n/*@ sourceURL=components/dropdown.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        className: "jsx-992646179" + " " + "current-user-name"
      }, "Current User"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        className: "jsx-992646179" + " " + "current-user-email"
      }, "CurrentUser@gmail.com"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://publist.ai/reports",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        className: "jsx-992646179" + " " + "current-user-reports"
      }, "Dashboard"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://publist.ai/settings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        className: "jsx-992646179" + " " + "current-user-settings"
      }, "Settings"));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      console.log(props);
      console.log(props.isHidden);

      if (props.isHidden) {
        return {
          isHidden: props.isHidden
        };
      }
    }
  }]);

  return Dropdown;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Dropdown);

/***/ })

})
//# sourceMappingURL=4.d3241898d8ad0ab3c684.hot-update.js.map