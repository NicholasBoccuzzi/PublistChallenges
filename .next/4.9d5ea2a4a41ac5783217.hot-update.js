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
    key: "render",
    value: function render() {
      console.log(this.state.isHidden);
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        className: "jsx-2876218986" + " " + "current-user-info ".concat(this.checkHidden())
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2876218986",
        css: ".current-user-info.jsx-2876218986{position:absolute;box-shadow:0 1px 5px rgba(0,0,0,.25);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;width:200px;height:200px;background:white;z-index:100;top:100px;right:0px;}.hidden.jsx-2876218986{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZHJvcGRvd24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNvQixBQUcrQixBQVlMLGFBQ2YsS0FadUMscUNBQ3hCLDBFQUNHLGdCQUNKLFlBQ0MsYUFDSSxpQkFDTCxZQUNGLFVBQ0EsVUFDWiIsImZpbGUiOiJjb21wb25lbnRzL2Ryb3Bkb3duLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9OaWNreUIvRGVza3RvcC9QdWJsaXN0Q2hhbGxlbmdlcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIERyb3Bkb3duIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmNoZWNrSGlkZGVuID0gdGhpcy5jaGVja0hpZGRlbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICBpZiAocHJvcHMuaXNIaWRkZW4pIHtcbiAgICAgIGxldCByZXR1cm5PYmogPSB7XG4gICAgICAgIGlzSGlkZGVuOiBwcm9wcy5pc0hpZGRlblxuICAgICAgfVxuICAgICAgcmV0dXJuIHJldHVybk9iajtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNIaWRkZW46IGZhbHNlLFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgfVxuXG4gIGNoZWNrSGlkZGVuICgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5pc0hpZGRlbiA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIFwiaGlkZGVuXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5pc0hpZGRlbilcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGN1cnJlbnQtdXNlci1pbmZvICR7dGhpcy5jaGVja0hpZGRlbigpfWB9PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmN1cnJlbnQtdXNlci1pbmZvIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsMCwwLC4yNSk7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgICAgIHRvcDogMTAwcHg7XG4gICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGlkZGVuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cnJlbnQtdXNlci1uYW1lXCI+Q3VycmVudCBVc2VyPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXJyZW50LXVzZXItZW1haWxcIj5DdXJyZW50VXNlckBnbWFpbC5jb208L2Rpdj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjdXJyZW50LXVzZXItcmVwb3J0c1wiIGhyZWY9XCJodHRwczovL3B1Ymxpc3QuYWkvcmVwb3J0c1wiPlxuICAgICAgICAgIERhc2hib2FyZFxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImN1cnJlbnQtdXNlci1zZXR0aW5nc1wiIGhyZWY9XCJodHRwczovL3B1Ymxpc3QuYWkvc2V0dGluZ3NcIj5cbiAgICAgICAgICBTZXR0aW5nc1xuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247XG4iXX0= */\n/*@ sourceURL=components/dropdown.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        className: "jsx-2876218986" + " " + "current-user-name"
      }, "Current User"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        className: "jsx-2876218986" + " " + "current-user-email"
      }, "CurrentUser@gmail.com"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://publist.ai/reports",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        className: "jsx-2876218986" + " " + "current-user-reports"
      }, "Dashboard"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://publist.ai/settings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        className: "jsx-2876218986" + " " + "current-user-settings"
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
//# sourceMappingURL=4.9d5ea2a4a41ac5783217.hot-update.js.map