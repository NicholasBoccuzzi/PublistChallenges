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
        className: "jsx-2594389104" + " " + "current-user-info ".concat(this.checkHidden())
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2594389104",
        css: ".current-user-info.jsx-2594389104{position:absolute;box-shadow:0 1px 5px rgba(0,0,0,0.25);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;overflow:hidden;width:200px;height:160px;background:white;z-index:100;top:100px;right:75px;pointer:default;}.hidden.jsx-2594389104{display:none;}a.jsx-2594389104:hover{background:rgba(239,239,239,0.3);color:black;}.current-user-reports.jsx-2594389104{font-size:14px;padding:10px 20px;}.current-user-settings.jsx-2594389104{font-size:14px;padding:10px 20px;}.current-user-name.jsx-2594389104{padding:10px 20px;font-size:16px;}.current-user-email.jsx-2594389104{padding:10px 20px;font-size:12px;color:rgba(239,239,239);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZHJvcGRvd24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNENvQixBQUcrQixBQWNMLEFBR3VCLEFBSXJCLEFBSUEsQUFJRyxBQUlBLGFBbEJwQixFQU9vQixBQUlBLEdBekJ1QixBQTZCMUIsQUFJQSxlQWhCSCxBQUtkLEFBSUEsQUFJQSxBQUk0QixZQWhCNUIsV0FqQmUsQ0FrQ2YseUVBakN3Qiw4RUFDTixnQkFDSixZQUNDLGFBQ0ksaUJBQ0wsWUFDRixVQUNDLFdBQ0ssZ0JBQ2xCIiwiZmlsZSI6ImNvbXBvbmVudHMvZHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL05pY2t5Qi9EZXNrdG9wL1B1Ymxpc3RDaGFsbGVuZ2VzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBEcm9wZG93biBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5jaGVja0hpZGRlbiA9IHRoaXMuY2hlY2tIaWRkZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmRvTm90aGluZyA9IHRoaXMuZG9Ob3RoaW5nLmJpbmQodGhpcyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgIGlmIChwcm9wcy5pc0hpZGRlbikge1xuICAgICAgbGV0IHJldHVybk9iaiA9IHtcbiAgICAgICAgaXNIaWRkZW46IHByb3BzLmlzSGlkZGVuXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJldHVybk9iajtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNIaWRkZW46IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge31cblxuICBjaGVja0hpZGRlbigpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5pc0hpZGRlbiA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIFwiaGlkZGVuXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgfVxuXG4gIGRvTm90aGluZygpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5pc0hpZGRlbik7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17dGhpcy5kb05vdGhpbmd9XG4gICAgICAgIGNsYXNzTmFtZT17YGN1cnJlbnQtdXNlci1pbmZvICR7dGhpcy5jaGVja0hpZGRlbigpfWB9XG4gICAgICA+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY3VycmVudC11c2VyLWluZm8ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE2MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgICAgICB0b3A6IDEwMHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDc1cHg7XG4gICAgICAgICAgICBwb2ludGVyOiBkZWZhdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGlkZGVuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMzksIDIzOSwgMjM5LCAwLjMpO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY3VycmVudC11c2VyLXJlcG9ydHMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY3VycmVudC11c2VyLXNldHRpbmdzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmN1cnJlbnQtdXNlci1uYW1lIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmN1cnJlbnQtdXNlci1lbWFpbCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyMzksIDIzOSwgMjM5KTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXJyZW50LXVzZXItbmFtZVwiPkN1cnJlbnQgVXNlcjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cnJlbnQtdXNlci1lbWFpbFwiPkN1cnJlbnRVc2VyQGdtYWlsLmNvbTwvZGl2PlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJjdXJyZW50LXVzZXItcmVwb3J0c1wiIGhyZWY9XCJodHRwczovL3B1Ymxpc3QuYWkvcmVwb3J0c1wiPlxuICAgICAgICAgIERhc2hib2FyZFxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImN1cnJlbnQtdXNlci1zZXR0aW5nc1wiIGhyZWY9XCJodHRwczovL3B1Ymxpc3QuYWkvc2V0dGluZ3NcIj5cbiAgICAgICAgICBTZXR0aW5nc1xuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duO1xuIl19 */\n/*@ sourceURL=components/dropdown.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        className: "jsx-2594389104" + " " + "current-user-name"
      }, "Current User"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        className: "jsx-2594389104" + " " + "current-user-email"
      }, "CurrentUser@gmail.com"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://publist.ai/reports",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        className: "jsx-2594389104" + " " + "current-user-reports"
      }, "Dashboard"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://publist.ai/settings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        className: "jsx-2594389104" + " " + "current-user-settings"
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
//# sourceMappingURL=4.75dac11b9b3db96dcbbf.hot-update.js.map