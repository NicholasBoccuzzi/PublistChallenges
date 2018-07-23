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
        className: "jsx-2485772864"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2485772864",
        css: ".hidden.jsx-2485772864{display:none;}.current-user-info.jsx-2485772864{overflow:hidden;width:200px;height:200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZHJvcGRvd24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JvQixBQUcwQixBQUdHLGFBRmxCLEdBR2MsWUFDQyxhQUNmIiwiZmlsZSI6ImNvbXBvbmVudHMvZHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL05pY2t5Qi9EZXNrdG9wL1B1Ymxpc3RDaGFsbGVuZ2VzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNIaWRkZW46ICFwcm9wcy5oaWRkZW4sXG4gICAgfVxuXG4gICAgdGhpcy5pc0hpZGRlbiA9IHRoaXMuaXNIaWRkZW4uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGlzSGlkZGVuICgpIHtcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xuICAgIGlmICh0aGlzLnN0YXRlLmlzSGlkZGVuID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gXCJoaWRkZW5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICB9XG4gIHJlbmRlciAoKSB7XG5cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmhpZGRlbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY3VycmVudC11c2VyLWluZm8ge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGN1cnJlbnQtdXNlci1pbmZvICR7dGhpcy5pc0hpZGRlbigpfWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VycmVudC11c2VyLW5hbWVcIj5DdXJyZW50IFVzZXI8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cnJlbnQtdXNlci1lbWFpbFwiPkN1cnJlbnRVc2VyQGdtYWlsLmNvbTwvZGl2PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImN1cnJlbnQtdXNlci1yZXBvcnRzXCIgaHJlZj1cImh0dHBzOi8vcHVibGlzdC5haS9yZXBvcnRzXCI+XG4gICAgICAgICAgRGFzaGJvYXJkXG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiY3VycmVudC11c2VyLXNldHRpbmdzXCIgaHJlZj1cImh0dHBzOi8vcHVibGlzdC5haS9zZXR0aW5nc1wiPlxuICAgICAgICBTZXR0aW5nc1xuICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjtcbiJdfQ== */\n/*@ sourceURL=components/dropdown.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        className: "jsx-2485772864" + " " + "current-user-info ".concat(this.isHidden())
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        className: "jsx-2485772864" + " " + "current-user-name"
      }, "Current User"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        className: "jsx-2485772864" + " " + "current-user-email"
      }, "CurrentUser@gmail.com"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://publist.ai/reports",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        className: "jsx-2485772864" + " " + "current-user-reports"
      }, "Dashboard"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://publist.ai/settings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        className: "jsx-2485772864" + " " + "current-user-settings"
      }, "Settings")));
    }
  }]);

  return Dropdown;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Dropdown);

/***/ })

})
//# sourceMappingURL=4.58ed7021c08e6a46982b.hot-update.js.map