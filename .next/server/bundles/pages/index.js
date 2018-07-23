module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.next/static/logo-dark.svg":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjdweCIgaGVpZ2h0PSIxOXB4IiB2aWV3Qm94PSIwIDAgMjcgMTkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ik5ld3MtRGFzaGJvYXJkLUxhbmRpbmciIGZpbGw9IiMwMDAwMDAiPgogICAgICAgICAgICA8ZyBpZD0iTmF2YmFyIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJMb2dvIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMC41MzE5MzQ3ODksMC4wMDA2Mjc5NzM3NzcgQzAuMjI5NDQzNTYzLDAuMDI4Mzc4NDE0NyAtMC4wMDEzMDQ0NzI1NSwwLjI3NjIyMjEzMiA1LjU1MDE1MTc3ZS0wNiwwLjU3MTk2NjgzNSBMNS41NTAxNTE3N2UtMDYsMy40Mjg2NjExNCBDMy44MDQxNjY1NWUtMDUsMy43NDQxODk3OCAwLjI2MjgwODM0MSwzLjk5OTk2ODM3IDAuNTg2OTYxOTUxLDQgTDI2LjQxMzA0MzYsNCBDMjYuNzM3MTk3MiwzLjk5OTk2ODM3IDI2Ljk5OTk2NzUsMy43NDQxODk3OCAyNywzLjQyODY2MTE0IEwyNywwLjU3MTk2NjgzNSBDMjYuOTk5OTY3NSwwLjI1NjQzODE5NiAyNi43MzcxOTcyLDAuMDAwNjU5NjAwNzY3IDI2LjQxMzA0MzYsMC4wMDA2Mjc5NzM3NzcgTDAuNTg2OTYxOTUxLDAuMDAwNjI3OTczNzc3IEMwLjU2ODYyOTY0OSwtMC4wMDAyMDkzMjQ1OTIgMC41NTAyNjcwOTEsLTAuMDAwMjA5MzI0NTkyIDAuNTMxOTM0Nzg5LDAuMDAwNjI3OTczNzc3IFogTTEsMSBMMjYsMSBMMjYsMyBMMSwzIEwxLDEgWiBNNS41NTAyMjg3Nyw1LjAwMDYyNzk3IEM1LjIzNzMzNDQ1LDUuMDI4Mzc4NDEgNC45OTg2NTA2Niw1LjI3NjIyMjEzIDUuMDAwMDA1NzQsNS41NzE5NjY4MyBMNS4wMDAwMDU3NCw4LjQyODY2MTE0IEM1LjAwMDAzOTM1LDguNzQ0MTg5NzggNS4yNzE4NDY2OSw4Ljk5OTk2ODM3IDUuNjA3MTQ4MzksOSBMMjEuMzkyODU3Myw5IEMyMS43MjgxNTkxLDguOTk5OTY4MzcgMjEuOTk5OTY2NCw4Ljc0NDE4OTc4IDIyLDguNDI4NjYxMTQgTDIyLDUuNTcxOTY2ODMgQzIxLjk5OTk2NjQsNS4yNTY0MzgyIDIxLjcyODE1OTEsNS4wMDA2NTk2IDIxLjM5Mjg1NzMsNS4wMDA2Mjc5NyBMNS42MDcxNDgzOSw1LjAwMDYyNzk3IEM1LjU4ODE4NTYyLDQuOTk5NzkwNjggNS41NjkxOTE1NSw0Ljk5OTc5MDY4IDUuNTUwMjI4NzcsNS4wMDA2Mjc5NyBaIE02LDYgTDIxLDYgTDIxLDggTDYsOCBMNiw2IFogTTkuNTA5NzcwNjQsMTAuMDAwNjI4IEM5LjIxOTg4MzMzLDEwLjAyODM3ODQgOC45OTg3NDk4OCwxMC4yNzYyMjIxIDkuMDAwMDA1MzIsMTAuNTcxOTY2OCBMOS4wMDAwMDUzMiwxMy40Mjg2NjExIEM5LjAwMDAzNjQ2LDEzLjc0NDE4OTggOS4yNTE4NTc5LDEzLjk5OTk2ODQgOS41NjI1MDQ5OSwxNCBMMTcuNDM3NTAwMywxNCBDMTcuNzQ4MTQ3NCwxMy45OTk5Njg0IDE3Ljk5OTk2ODksMTMuNzQ0MTg5OCAxOCwxMy40Mjg2NjExIEwxOCwxMC41NzE5NjY4IEMxNy45OTk5Njg5LDEwLjI1NjQzODIgMTcuNzQ4MTQ3NCwxMC4wMDA2NTk2IDE3LjQzNzUwMDMsMTAuMDAwNjI4IEw5LjU2MjUwNDk5LDEwLjAwMDYyOCBDOS41NDQ5MzY1NCw5Ljk5OTc5MDY4IDkuNTI3MzM5MDksOS45OTk3OTA2OCA5LjUwOTc3MDY0LDEwLjAwMDYyOCBaIE0xMCwxMSBMMTcsMTEgTDE3LDEzIEwxMCwxMyBMMTAsMTEgWiBNMTEuNTAzNDc2OSwxNS4wMDA2MjggQzExLjIxNzE2ODYsMTUuMDI4Mzc4NCAxMC45OTg3NjUzLDE1LjI3NjIyMjEgMTEuMDAwMDA1MywxNS41NzE5NjY4IEwxMS4wMDAwMDUzLDE4LjQyODY2MTEgQzExLjAwMDAzNiwxOC43NDQxODk4IDExLjI0ODc0ODQsMTguOTk5OTY4NCAxMS41NTU1NjAyLDE5IEwxNS40NDQ0NDUsMTkgQzE1Ljc1MTI1NjgsMTguOTk5OTY4NCAxNS45OTk5NjkyLDE4Ljc0NDE4OTggMTYsMTguNDI4NjYxMSBMMTYsMTUuNTcxOTY2OCBDMTUuOTk5OTY5MiwxNS4yNTY0MzgyIDE1Ljc1MTI1NjgsMTUuMDAwNjU5NiAxNS40NDQ0NDUsMTUuMDAwNjI4IEwxMS41NTU1NjAyLDE1LjAwMDYyOCBDMTEuNTM4MjA4NywxNC45OTk3OTA3IDExLjUyMDgyODUsMTQuOTk5NzkwNyAxMS41MDM0NzY5LDE1LjAwMDYyOCBaIE0xMiwxNiBMMTUsMTYgTDE1LDE4IEwxMiwxOCBMMTIsMTYgWiIgaWQ9IlNoYXBlIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./components/dropdown.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
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
        className: "jsx-2149325440" + " " + "current-user-info ".concat(this.checkHidden())
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2149325440",
        css: ".current-user-info.jsx-2149325440{position:absolute;box-shadow:0 1px 5px rgba(0,0,0,0.25);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;overflow:hidden;width:200px;height:150px;background:white;z-index:100;top:100px;right:75px;pointer:default;}.hidden.jsx-2149325440{display:none;}a.jsx-2149325440:hover{background:rgba(239,239,239,0.3);color:black;}.current-user-reports.jsx-2149325440{font-size:14px;padding:10px 20px;}.current-user-settings.jsx-2149325440{font-size:14px;padding:10px 20px;}.current-user-name.jsx-2149325440{padding:10px 20px 0px 20px;font-size:16px;}.current-user-email.jsx-2149325440{padding:10px 20px;font-size:12px;color:rgba(239,239,239);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZHJvcGRvd24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNENvQixBQUcrQixBQWNMLEFBR3VCLEFBSXJCLEFBSUEsQUFJWSxBQUlULGFBbEJwQixFQU9vQixBQUlBLEdBekJ1QixBQWlDMUIsU0FKQSxNQVpILEFBS2QsQUFJQSxBQVE0QixTQUo1QixHQVpBLFdBakJlLENBa0NmLHlFQWpDd0IsOEVBQ04sZ0JBQ0osWUFDQyxhQUNJLGlCQUNMLFlBQ0YsVUFDQyxXQUNLLGdCQUNsQiIsImZpbGUiOiJjb21wb25lbnRzL2Ryb3Bkb3duLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9OaWNreUIvRGVza3RvcC9QdWJsaXN0Q2hhbGxlbmdlcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuY2hlY2tIaWRkZW4gPSB0aGlzLmNoZWNrSGlkZGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kb05vdGhpbmcgPSB0aGlzLmRvTm90aGluZy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICBpZiAocHJvcHMuaXNIaWRkZW4pIHtcbiAgICAgIGxldCByZXR1cm5PYmogPSB7XG4gICAgICAgIGlzSGlkZGVuOiBwcm9wcy5pc0hpZGRlblxuICAgICAgfTtcbiAgICAgIHJldHVybiByZXR1cm5PYmo7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzSGlkZGVuOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHt9XG5cbiAgY2hlY2tIaWRkZW4oKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaXNIaWRkZW4gPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBcImhpZGRlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gIH1cblxuICBkb05vdGhpbmcoKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuaXNIaWRkZW4pO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuZG9Ob3RoaW5nfVxuICAgICAgICBjbGFzc05hbWU9e2BjdXJyZW50LXVzZXItaW5mbyAke3RoaXMuY2hlY2tIaWRkZW4oKX1gfVxuICAgICAgPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmN1cnJlbnQtdXNlci1pbmZvIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiA3NXB4O1xuICAgICAgICAgICAgcG9pbnRlcjogZGVmYXVsdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhpZGRlbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjM5LCAyMzksIDIzOSwgMC4zKTtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmN1cnJlbnQtdXNlci1yZXBvcnRzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmN1cnJlbnQtdXNlci1zZXR0aW5ncyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jdXJyZW50LXVzZXItbmFtZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHggMHB4IDIwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jdXJyZW50LXVzZXItZW1haWwge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjM5LCAyMzksIDIzOSk7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VycmVudC11c2VyLW5hbWVcIj5DdXJyZW50IFVzZXI8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXJyZW50LXVzZXItZW1haWxcIj5DdXJyZW50VXNlckBnbWFpbC5jb208L2Rpdj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiY3VycmVudC11c2VyLXJlcG9ydHNcIiBocmVmPVwiaHR0cHM6Ly9wdWJsaXN0LmFpL3JlcG9ydHNcIj5cbiAgICAgICAgICBEYXNoYm9hcmRcbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJjdXJyZW50LXVzZXItc2V0dGluZ3NcIiBocmVmPVwiaHR0cHM6Ly9wdWJsaXN0LmFpL3NldHRpbmdzXCI+XG4gICAgICAgICAgU2V0dGluZ3NcbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjtcbiJdfQ== */\n/*@ sourceURL=components/dropdown.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        className: "jsx-2149325440" + " " + "current-user-name"
      }, "Current User"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        className: "jsx-2149325440" + " " + "current-user-email"
      }, "CurrentUser@gmail.com"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://publist.ai/reports",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        className: "jsx-2149325440" + " " + "current-user-reports"
      }, "Dashboard"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://publist.ai/settings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        className: "jsx-2149325440" + " " + "current-user-settings"
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

/***/ }),

/***/ "./components/mainContent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_cookie__ = __webpack_require__("react-cookie");
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
          lineNumber: 27
        },
        className: "jsx-2667451623" + " " + "main-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2667451623",
        css: ".main-container.jsx-2667451623{width:100%;max-width:1600px;min-height:100vh;min-width:575px;padding:48px 72px 0;background:#f6f9fc;z-index:10;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.page-title.jsx-2667451623{color:var(--color-text-dark);font-size:28px;font-weight:600;}.flex-center.jsx-2667451623{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.flex-one.jsx-2667451623{-webkit-flex:1;-ms-flex:1;flex:1;}.dash-title.jsx-2667451623{color:#000;font-size:18px;font-weight:500;line-height:18px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}.dash-title-text.jsx-2667451623{margin-right:10px;}.to-dashboard.jsx-2667451623{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;color:rgb(187,187,187);-webkit-text-decoration:none;text-decoration:none;}.dashboard-dash.jsx-2667451623{margin-right:25px;font-size:40px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWFpbkNvbnRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJXLEFBRzBCLEFBV2tCLEFBS2hCLEFBSU4sQUFHSSxBQVVPLEFBR0wsQUFRSyxXQTNDRCxBQXVCRixPQVVqQixBQVdpQixRQXBCQyxFQXZCQyxDQVVGLElBU2pCLEFBeUJBLFNBcEJtQixFQWJELENBVkEsY0F3QkgsQ0FiZixDQVZzQixhQWFHLEFBb0JBLE9BaENKLG1CQUNSLFdBQ0Usc0JBcUJVLHdDQVZ6QixBQW9CcUIsWUE5QkcsK0NBcUJILCtCQXBCckIsR0E4QmlCLGVBQ1UsdUJBQ0oscUJBWE4sZUFDakIsY0FXQSIsImZpbGUiOiJjb21wb25lbnRzL21haW5Db250ZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9OaWNreUIvRGVza3RvcC9QdWJsaXN0Q2hhbGxlbmdlcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBjb29raWUgZnJvbSBcInJlYWN0LWNvb2tpZVwiO1xuaW1wb3J0IFNlYXJjaENvbnRhaW5lciBmcm9tIFwiLi9zZWFyY2hDb250YWluZXJcIjtcbmltcG9ydCBEcm9wZG93biBmcm9tIFwiLi9kcm9wZG93blwiO1xuXG5jbGFzcyBNYWluQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0hpZGRlbjogdHJ1ZVxuICAgIH07XG5cbiAgICB0aGlzLnRvZ2dsZU1vZGFsID0gdGhpcy50b2dnbGVNb2RhbC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdG9nZ2xlTW9kYWwoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaXNIaWRkZW4gPT09IHRydWUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0hpZGRlbjogZmFsc2UgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0hpZGRlbjogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250YWluZXJcIj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLm1haW4tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTYwMHB4O1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiA1NzVweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogNDhweCA3MnB4IDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNmY5ZmM7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhZ2UtdGl0bGUge1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1kYXJrKTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZsZXgtY2VudGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmxleC1vbmUge1xuICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRhc2gtdGl0bGUge1xuICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kYXNoLXRpdGxlLXRleHQge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudG8tZGFzaGJvYXJkIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYigxODcsIDE4NywgMTg3KTtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRhc2hib2FyZC1kYXNoIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNlbnRlclwiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9wdWJsaXN0LmFpL25pY2tib2NjdXp6aS9yZXBvcnRzXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvLWRhc2hib2FyZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtbGVmdCBkYXNoYm9hcmQtZGFzaFwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hib2FyZC10ZXh0XCI+RGFzaGJvYXJkPC9kaXY+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1vbmVcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaC10aXRsZVwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTW9kYWx9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoLXRpdGxlLXRleHRcIj5DdXJyZW50IFVzZXI8L2Rpdj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvd24gXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8RHJvcGRvd24gaXNIaWRkZW49e3RoaXMuc3RhdGUuaXNIaWRkZW59IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8U2VhcmNoQ29udGFpbmVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5Db250ZW50O1xuIl19 */\n/*@ sourceURL=components/mainContent.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        className: "jsx-2667451623" + " " + "flex-center"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://publist.ai/nickboccuzzi/reports",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        className: "jsx-2667451623" + " " + "to-dashboard"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        className: "jsx-2667451623" + " " + "fa fa-angle-left dashboard-dash"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        className: "jsx-2667451623" + " " + "dashboard-text"
      }, "Dashboard")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        className: "jsx-2667451623" + " " + "flex-one"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        onClick: this.toggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        className: "jsx-2667451623" + " " + "dash-title"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        className: "jsx-2667451623" + " " + "dash-title-text"
      }, "Current User"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        className: "jsx-2667451623" + " " + "fa fa-angle-down "
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__dropdown__["a" /* default */], {
        isHidden: this.state.isHidden,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__searchContainer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }));
    }
  }]);

  return MainContent;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (MainContent);

/***/ }),

/***/ "./components/searchContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_cookie__ = __webpack_require__("react-cookie");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__searchResult__ = __webpack_require__("./components/searchResult.js");
var _jsxFileName = "/Users/NickyB/Desktop/PublistChallenges/components/searchContainer.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var SearchContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SearchContainer, _React$Component);

  function SearchContainer(props) {
    var _this;

    _classCallCheck(this, SearchContainer);

    _this = _possibleConstructorReturn(this, (SearchContainer.__proto__ || Object.getPrototypeOf(SearchContainer)).call(this, props));
    _this.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDQsIm5hbWUiOiJOaWNrIEJvY2N1enppIiwiZW1haWwiOiJuaWNob2xhc3Jib2NjdXp6aUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZW1haWxfdmVyaWZpY2F0aW9uX2NvZGUiOiI3NzM4ODEiLCJwYXNzd29yZCI6IiQyYSQxMCRkck9vSlFrNS9oSFlwU1FkOWR2ZmIuQnlZT1kvT2d0SzE4c09XdmI1TUk3LldzLjFHdTN4cSIsInBlcm1pc3Npb25zIjpudWxsLCJ0aW1lem9uZSI6IkFtZXJpY2EvTG9zX0FuZ2VsZXMiLCJpcF9hZGRyZXNzIjoiNjcuMjQzLjIxNC4xNzcvMzIiLCJvcHRpb25zIjp7fSwibWV0YWRhdGEiOnt9LCJsYXN0X2xvZ2luIjoiMjAxOC0wNy0yMFQwMjowODowOC43MzRaIiwibGFzdF9hY3RpdmUiOiIyMDE4LTA3LTIwVDAyOjA4OjA4LjczNFoiLCJ1cGRhdGVkIjoiMjAxOC0wNy0yMFQwMjowODowOC43MzRaIiwiY3JlYXRlZCI6IjIwMTgtMDctMjBUMDI6MDg6MDguNzM0WiIsImlhdCI6MTUzMjA1MjQ4OSwiZXhwIjoxNTMzMjYyMDg5fQ.1fnUMb27ilrQFNt9Uyj1SW2P7bp2lyDfXWn_6D-tGs4";
    _this.state = {
      input: "",
      data: [],
      displayData: []
    };
    _this.parseDataForInput = _this.parseDataForInput.bind(_assertThisInitialized(_this));
    _this.updateInput = _this.updateInput.bind(_assertThisInitialized(_this));
    _this.createDataNode = _this.createDataNode.bind(_assertThisInitialized(_this));
    return _this;
  } // NOTE:

  /*
  We have added my personal token below for demonstration purposes, otherwise
  we would use react-cookie to access the user's token with: cookie.load('connect.sid');
  */


  _createClass(SearchContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.token == "") {
        this.token = __WEBPACK_IMPORTED_MODULE_3_react_cookie___default.a.load("connect.sid");
      }

      __WEBPACK_IMPORTED_MODULE_2_axios___default()({
        method: "post",
        url: "https://publist.ai/api/v2/jobs.frontend",
        headers: {
          Authorization: "Bearer-".concat(this.token),
          "Content-type": "application/json"
        },
        data: {
          query: "hi"
        }
      }).then(function (response) {
        _this2.setState({
          data: response.data.data
        });
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.state.input.length != prevState.input.length) {
        this.parseDataForInput();
      }
    }
  }, {
    key: "parseDataForInput",
    value: function parseDataForInput() {
      var _this3 = this;

      var returnData = [];

      if (this.state.input.length >= 1) {
        this.state.data.forEach(function (article) {
          console.log(article);

          if (article.title.toLowerCase().includes(_this3.state.input) || article.description.toLowerCase().includes(_this3.state.input)) {
            returnData.push(_this3.createDataNode(article));
          }
        });
        this.setState({
          displayData: returnData
        });
      } else {
        this.setState({
          displayData: []
        });
      }
    }
  }, {
    key: "createDataNode",
    value: function createDataNode(article) {
      if (article.title.length > 50) {
        article.title = article.title.slice(0, 50) + "...";
      }

      if (article.description.length > 75) {
        article.description = article.description.slice(0, 75) + "...";
      }

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__searchResult__["a" /* default */], {
        image: article.image_url,
        description: article.description,
        title: article.title,
        url: article.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      });
    }
  }, {
    key: "updateInput",
    value: function updateInput(e) {
      this.setState({
        input: e.target.value.toLowerCase()
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("main", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        className: "jsx-1700834732" + " " + "search-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1700834732",
        css: ".search-container.jsx-1700834732{width:100%;margin:auto;}.inner-search-container.jsx-1700834732{position:relative;margin:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:white;border-radius:6px;min-height:100vh;box-shadow:0 2px 8px rgba(0,0,0,0.2);}.search-title.jsx-1700834732{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:34px;width:100%;color:rgb(163,163,163);opacity:0.5;}.search-input.jsx-1700834732{font-size:28px;border:0px;margin-bottom:4px;margin-top:25px;width:100%;max-width:300px;text-align:center;border-bottom:1px solid white;}.search-input.jsx-1700834732:hover{border-bottom:1px solid black;}.search-input.jsx-1700834732:focus{outline:none;border-bottom:1px solid black;}.search-result-container.jsx-1700834732{margin:30px;}.search-count.jsx-1700834732{position:absolute;top:35px;right:50px;color:rgb(163,163,163);}@media only screen and (max-width:900px){.search-count.jsx-1700834732{top:75px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Hb0IsQUFHd0IsQUFJTyxBQVVMLEFBU0UsQUFVZSxBQUdqQixBQUlELEFBR00sQUFPUCxTQUNYLEVBbERZLENBd0NkLENBSmdDLEVBYm5CLEdBbkJDLEFBdUNILEtBMUNYLEdBdUJvQixDQW9CUCxHQXZDRSxBQTRCZixRQVkyQixLQVIzQixDQVprQixnQkFDTCxDQW9CYixVQW5Ca0IsR0FiRyxhQWNELGlCQXRCSSxDQXVCUSw4QkFDaEMsUUFmeUIsdUNBUk4saUJBQ0Msa0JBQ0QsaUJBQ3VCLFFBTXpCLGVBQ0osV0FDYyxHQVAzQixvQkFRYyxZQUNkIiwiZmlsZSI6ImNvbXBvbmVudHMvc2VhcmNoQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9OaWNreUIvRGVza3RvcC9QdWJsaXN0Q2hhbGxlbmdlcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBjb29raWUgZnJvbSBcInJlYWN0LWNvb2tpZVwiO1xuaW1wb3J0IFNlYXJjaFJlc3VsdCBmcm9tIFwiLi9zZWFyY2hSZXN1bHRcIjtcblxuY2xhc3MgU2VhcmNoQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnRva2VuID1cbiAgICAgIFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2TkRRc0ltNWhiV1VpT2lKT2FXTnJJRUp2WTJOMWVucHBJaXdpWlcxaGFXd2lPaUp1YVdOb2IyeGhjM0ppYjJOamRYcDZhVUJuYldGcGJDNWpiMjBpTENKbGJXRnBiRjkyWlhKcFptbGxaQ0k2ZEhKMVpTd2laVzFoYVd4ZmRtVnlhV1pwWTJGMGFXOXVYMk52WkdVaU9pSTNOek00T0RFaUxDSndZWE56ZDI5eVpDSTZJaVF5WVNReE1DUmtjazl2U2xGck5TOW9TRmx3VTFGa09XUjJabUl1UW5sWlQxa3ZUMmQwU3pFNGMwOVhkbUkxVFVrM0xsZHpMakZIZFRONGNTSXNJbkJsY20xcGMzTnBiMjV6SWpwdWRXeHNMQ0owYVcxbGVtOXVaU0k2SWtGdFpYSnBZMkV2VEc5elgwRnVaMlZzWlhNaUxDSnBjRjloWkdSeVpYTnpJam9pTmpjdU1qUXpMakl4TkM0eE56Y3ZNeklpTENKdmNIUnBiMjV6SWpwN2ZTd2liV1YwWVdSaGRHRWlPbnQ5TENKc1lYTjBYMnh2WjJsdUlqb2lNakF4T0Mwd055MHlNRlF3TWpvd09Eb3dPQzQzTXpSYUlpd2liR0Z6ZEY5aFkzUnBkbVVpT2lJeU1ERTRMVEEzTFRJd1ZEQXlPakE0T2pBNExqY3pORm9pTENKMWNHUmhkR1ZrSWpvaU1qQXhPQzB3TnkweU1GUXdNam93T0Rvd09DNDNNelJhSWl3aVkzSmxZWFJsWkNJNklqSXdNVGd0TURjdE1qQlVNREk2TURnNk1EZ3VOek0wV2lJc0ltbGhkQ0k2TVRVek1qQTFNalE0T1N3aVpYaHdJam94TlRNek1qWXlNRGc1ZlEuMWZuVU1iMjdpbHJRRk50OVV5ajFTVzJQN2JwMmx5RGZYV25fNkQtdEdzNFwiO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbnB1dDogXCJcIixcbiAgICAgIGRhdGE6IFtdLFxuICAgICAgZGlzcGxheURhdGE6IFtdXG4gICAgfTtcbiAgICB0aGlzLnBhcnNlRGF0YUZvcklucHV0ID0gdGhpcy5wYXJzZURhdGFGb3JJbnB1dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlSW5wdXQgPSB0aGlzLnVwZGF0ZUlucHV0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVEYXRhTm9kZSA9IHRoaXMuY3JlYXRlRGF0YU5vZGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8vIE5PVEU6XG4gIC8qXG4gIFdlIGhhdmUgYWRkZWQgbXkgcGVyc29uYWwgdG9rZW4gYmVsb3cgZm9yIGRlbW9uc3RyYXRpb24gcHVycG9zZXMsIG90aGVyd2lzZVxuICB3ZSB3b3VsZCB1c2UgcmVhY3QtY29va2llIHRvIGFjY2VzcyB0aGUgdXNlcidzIHRva2VuIHdpdGg6IGNvb2tpZS5sb2FkKCdjb25uZWN0LnNpZCcpO1xuICAqL1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy50b2tlbiA9PSBcIlwiKSB7XG4gICAgICB0aGlzLnRva2VuID0gY29va2llLmxvYWQoXCJjb25uZWN0LnNpZFwiKTtcbiAgICB9XG5cbiAgICBheGlvcyh7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vcHVibGlzdC5haS9hcGkvdjIvam9icy5mcm9udGVuZFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyLSR7dGhpcy50b2tlbn1gLFxuICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgcXVlcnk6IFwiaGlcIlxuICAgICAgfVxuICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEuZGF0YVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaW5wdXQubGVuZ3RoICE9IHByZXZTdGF0ZS5pbnB1dC5sZW5ndGgpIHtcbiAgICAgIHRoaXMucGFyc2VEYXRhRm9ySW5wdXQoKTtcbiAgICB9XG4gIH1cblxuICBwYXJzZURhdGFGb3JJbnB1dCgpIHtcbiAgICBsZXQgcmV0dXJuRGF0YSA9IFtdO1xuICAgIGlmICh0aGlzLnN0YXRlLmlucHV0Lmxlbmd0aCA+PSAxKSB7XG4gICAgICB0aGlzLnN0YXRlLmRhdGEuZm9yRWFjaChhcnRpY2xlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYXJ0aWNsZSk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBhcnRpY2xlLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zdGF0ZS5pbnB1dCkgfHxcbiAgICAgICAgICBhcnRpY2xlLmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zdGF0ZS5pbnB1dClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuRGF0YS5wdXNoKHRoaXMuY3JlYXRlRGF0YU5vZGUoYXJ0aWNsZSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlEYXRhOiByZXR1cm5EYXRhIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheURhdGE6IFtdIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZURhdGFOb2RlKGFydGljbGUpIHtcbiAgICBpZiAoYXJ0aWNsZS50aXRsZS5sZW5ndGggPiA1MCkge1xuICAgICAgYXJ0aWNsZS50aXRsZSA9IGFydGljbGUudGl0bGUuc2xpY2UoMCwgNTApICsgXCIuLi5cIjtcbiAgICB9XG5cbiAgICBpZiAoYXJ0aWNsZS5kZXNjcmlwdGlvbi5sZW5ndGggPiA3NSkge1xuICAgICAgYXJ0aWNsZS5kZXNjcmlwdGlvbiA9IGFydGljbGUuZGVzY3JpcHRpb24uc2xpY2UoMCwgNzUpICsgXCIuLi5cIjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNlYXJjaFJlc3VsdFxuICAgICAgICBpbWFnZT17YXJ0aWNsZS5pbWFnZV91cmx9XG4gICAgICAgIGRlc2NyaXB0aW9uPXthcnRpY2xlLmRlc2NyaXB0aW9ufVxuICAgICAgICB0aXRsZT17YXJ0aWNsZS50aXRsZX1cbiAgICAgICAgdXJsPXthcnRpY2xlLnVybH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIHVwZGF0ZUlucHV0KGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXQ6IGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCkgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cInNlYXJjaC1jb250YWluZXJcIj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5zZWFyY2gtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5uZXItc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW46IDUwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoLXRpdGxlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTYzLCAxNjMsIDE2Myk7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWFyY2gtaW5wdXQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoLWlucHV0OmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaC1pbnB1dDpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoLXJlc3VsdC1jb250YWluZXIge1xuICAgICAgICAgICAgbWFyZ2luOiAzMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoLWNvdW50IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMzVweDtcbiAgICAgICAgICAgIHJpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgY29sb3I6IHJnYigxNjMsIDE2MywgMTYzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgICAgICAgICAgLnNlYXJjaC1jb3VudCB7XG4gICAgICAgICAgICAgIHRvcDogNzVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaW5uZXItc2VhcmNoLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXRpdGxlXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWlucHV0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIEhlcmUgdG8gU2VhcmNoLi4uXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlSW5wdXR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWNvdW50XCI+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5kaXNwbGF5RGF0YS5sZW5ndGh9IFJlc3VsdHNcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1yZXN1bHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5kaXNwbGF5RGF0YX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9tYWluPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQ29udGFpbmVyO1xuIl19 */\n/*@ sourceURL=components/searchContainer.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        className: "jsx-1700834732" + " " + "inner-search-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        className: "jsx-1700834732" + " " + "search-title"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        placeholder: "Type Here to Search...",
        onChange: this.updateInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        className: "jsx-1700834732" + " " + "search-input"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        className: "jsx-1700834732" + " " + "search-count"
      }, this.state.displayData.length, " Results"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        className: "jsx-1700834732" + " " + "search-result-container"
      }, this.state.displayData)));
    }
  }]);

  return SearchContainer;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SearchContainer);

/***/ }),

/***/ "./components/searchResult.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/NickyB/Desktop/PublistChallenges/components/searchResult.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SearchResult =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SearchResult, _React$Component);

  function SearchResult(props) {
    var _this;

    _classCallCheck(this, SearchResult);

    _this = _possibleConstructorReturn(this, (SearchResult.__proto__ || Object.getPrototypeOf(SearchResult)).call(this, props));
    _this.state = {
      url: props.url,
      image: props.image,
      title: props.title,
      description: props.description
    };
    return _this;
  }

  _createClass(SearchResult, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: this.state.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        className: "jsx-1387927723" + " " + "article-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1387927723",
        css: ".article-container.jsx-1387927723{padding:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-text-decoration:none;text-decoration:none;color:black;margin-bottom:20px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.article-text-container.jsx-1387927723{margin:auto;}.flex-query.jsx-1387927723{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.article-container.jsx-1387927723:hover{-webkit-text-decoration:underline;text-decoration:underline;color:rgb(163,163,163);box-shadow:0 2px 8px rgba(0,0,0,0.2);}.article-title.jsx-1387927723{font-size:20px;margin-bottom:10px;}.article-description.jsx-1387927723{font-size:14px;margin-bottom:10px;}.article-image-container.jsx-1387927723{width:200px;margin-right:50px;}.article-image.jsx-1387927723{max-width:200px;max-height:200px;object-fit:cover;}@media only screen and (max-width:900px){.flex-query.jsx-1387927723{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.article-image-container.jsx-1387927723{margin:0 auto;}.article-description.jsx-1387927723{font-size:12px;text-align:center;}.article-title.jsx-1387927723{font-size:16px;text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoUmVzdWx0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCVyxBQUcyQixBQVNBLEFBR0MsQUFJYSxBQUtYLEFBSUEsQUFJSCxBQUlJLEFBTVEsQUFJUixBQUdDLEFBSUEsWUFqREosQUFTZixBQW9Cb0IsRUFjbEIsQ0F0Qm1CLEFBSUEsQUFxQkMsQUFJQSxDQWpCSCxjQUhuQixHQUltQixBQWFqQixBQUlBLENBN0JGLEFBSUEsZ0JBU0EsVUFuQjJCLGNBSk4sSUEyQk0sS0F0QmUsR0FoQnJCLGtDQWlCckIsdUJBTEEsWUFYdUIsc0JBc0NyQiw0QkFyQ1ksWUFDTyxtQkFDQSw2RkFDckIiLCJmaWxlIjoiY29tcG9uZW50cy9zZWFyY2hSZXN1bHQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL05pY2t5Qi9EZXNrdG9wL1B1Ymxpc3RDaGFsbGVuZ2VzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBTZWFyY2hSZXN1bHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXJsOiBwcm9wcy51cmwsXG4gICAgICBpbWFnZTogcHJvcHMuaW1hZ2UsXG4gICAgICB0aXRsZTogcHJvcHMudGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb25cbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8YSBjbGFzc05hbWU9XCJhcnRpY2xlLWNvbnRhaW5lclwiIGhyZWY9e3RoaXMuc3RhdGUudXJsfT5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmFydGljbGUtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hcnRpY2xlLXRleHQtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZsZXgtcXVlcnkge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFydGljbGUtY29udGFpbmVyOmhvdmVyIHtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2IoMTYzLCAxNjMsIDE2Myk7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYXJ0aWNsZS10aXRsZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hcnRpY2xlLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFydGljbGUtaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYXJ0aWNsZS1pbWFnZSB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICAgICAgICAgICAgLmZsZXgtcXVlcnkge1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmFydGljbGUtaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuYXJ0aWNsZS1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuYXJ0aWNsZS10aXRsZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1xdWVyeVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1pbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXJ0aWNsZS1pbWFnZVwiIHNyYz17dGhpcy5zdGF0ZS5pbWFnZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhcnRpY2xlLXRleHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtdGl0bGVcIj57dGhpcy5zdGF0ZS50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1kZXNjcmlwdGlvblwiPnt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hSZXN1bHQ7XG4iXX0= */\n/*@ sourceURL=components/searchResult.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        className: "jsx-1387927723" + " " + "flex-query"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        className: "jsx-1387927723" + " " + "article-image-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: this.state.image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        className: "jsx-1387927723" + " " + "article-image"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        className: "jsx-1387927723" + " " + "article-text-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        className: "jsx-1387927723" + " " + "article-title"
      }, this.state.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        className: "jsx-1387927723" + " " + "article-description"
      }, this.state.description))));
    }
  }]);

  return SearchResult;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SearchResult);

/***/ }),

/***/ "./components/sidebar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/NickyB/Desktop/PublistChallenges/components/sidebar.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Sidebar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar(props) {
    var _this;

    _classCallCheck(this, Sidebar);

    _this = _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(Sidebar, [{
    key: "ComponentDidMount",
    value: function ComponentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        className: "jsx-2802567975" + " " + "sidebar-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2802567975",
        css: ".sidebar-container.jsx-2802567975{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:auto;min-width:94px;min-height:100vh;z-index:20;}.center.jsx-2802567975{display:block;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0 auto;}.logo.jsx-2802567975{font-size:24px;font-weight:600;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}.logo-container.jsx-2802567975{margin-top:50px;}.sidebar-sticky.jsx-2802567975{position:fixed;max-width:94px;min-height:100vh;width:100%;top:0px;left:0px;background:white;box-shadow:0.5px 0 2px 0 #f0f3f4;}.cog-container.jsx-2802567975{font-size:18px;cursor:pointer;margin-top:42px;color:black;}.home-container.jsx-2802567975{font-size:18px;cursor:pointer;margin-top:190px;color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2lkZWJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhb0IsQUFHK0IsQUFTSixBQU1DLEFBS0MsQUFHRCxBQVVBLEFBTUEsY0E3QkcsQ0FNRixBQVFELEFBVUEsQUFNQSxDQW5CakIsRUFwQmUsWUF3QkksQUFVRCxBQU1DLENBeEJFLENBTkksY0F5QlgsQ0FWRCxBQWdCQyxXQWZKLEFBVVYsQ0FNQSxPQWZXLFNBQ1EsaUJBM0JFLEFBNEJjLGdDQVpuQyxDQWFBLE1BbkJnQixjQUNoQixnQkFWYyxZQUNHLGVBQ0UsaUJBQ04sV0FDYiIsImZpbGUiOiJjb21wb25lbnRzL3NpZGViYXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL05pY2t5Qi9EZXNrdG9wL1B1Ymxpc3RDaGFsbGVuZ2VzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBTaWRlYmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG5cbiAgQ29tcG9uZW50RGlkTW91bnQoKSB7fVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWNvbnRhaW5lclwiPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnNpZGViYXItY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgbWluLXdpZHRoOiA5NHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICB6LWluZGV4OiAyMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNlbnRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubG9nby1jb250YWluZXIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNpZGViYXItc3RpY2t5IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIG1heC13aWR0aDogOTRweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMC41cHggMCAycHggMCAjZjBmM2Y0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29nLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0MnB4O1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaG9tZS1jb250YWluZXIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTkwcHg7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1zdGlja3kgY2VudGVyXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3B1Ymxpc3QuYWkvcmVwb3J0c1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dvIGxvZ28tY29udGFpbmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy5uZXh0L3N0YXRpYy9sb2dvLWRhcmsuc3ZnXCIpfSAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9wdWJsaXN0LmFpL3JlcG9ydHNcIiBjbGFzc05hbWU9XCJob21lLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtaG9tZVwiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3B1Ymxpc3QuYWkvc2V0dGluZ3NcIiBjbGFzc05hbWU9XCJjb2ctY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jb2dcIiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iXX0= */\n/*@ sourceURL=components/sidebar.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        className: "jsx-2802567975" + " " + "sidebar-sticky center"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://publist.ai/reports",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        className: "jsx-2802567975" + " " + "logo logo-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: __webpack_require__("./.next/static/logo-dark.svg"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        className: "jsx-2802567975"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://publist.ai/reports",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        className: "jsx-2802567975" + " " + "home-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        className: "jsx-2802567975" + " " + "fa fa-home"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://publist.ai/settings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        className: "jsx-2802567975" + " " + "cog-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        className: "jsx-2802567975" + " " + "fa fa-cog"
      }))));
    }
  }]);

  return Sidebar;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Sidebar);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_mainContent__ = __webpack_require__("./components/mainContent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_sidebar__ = __webpack_require__("./components/sidebar.js");
var _jsxFileName = "/Users/NickyB/Desktop/PublistChallenges/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var IndexPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IndexPage, _React$Component);

  function IndexPage(props) {
    var _this;

    _classCallCheck(this, IndexPage);

    _this = _possibleConstructorReturn(this, (IndexPage.__proto__ || Object.getPrototypeOf(IndexPage)).call(this, props));
    _this.tokenStr = _this.state = {};
    return _this;
  }

  _createClass(IndexPage, [{
    key: "ComponentDidMount",
    value: function ComponentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-2396532696" + " " + "flex"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2396532696",
        css: ".flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;height:100%;}html{padding:0px;margin:0px;height:100vh;}body{margin:0px;height:100vh;font-family:Roboto;}a{display:block;color:black;-webkit-text-decoration:none;text-decoration:none;}a:hover{color:rgb(163,163,163);-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWUyQixBQUcwQixBQUtELEFBS0QsQUFLRyxBQUtXLFdBVFosQ0FMRixFQVVDLFNBVEMsQUFjYSxDQVRQLEVBS0UsVUFUdkIsT0FLQSwrQkFaNkIsRUFpQjdCLE9BSUEsZ0dBcEJjLFlBQ2QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL05pY2t5Qi9EZXNrdG9wL1B1Ymxpc3RDaGFsbGVuZ2VzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1haW5Db250ZW50IGZyb20gXCIuLi9jb21wb25lbnRzL21haW5Db250ZW50XCI7XG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9zaWRlYmFyXCI7XG5cbmNsYXNzIEluZGV4UGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMudG9rZW5TdHIgPSB0aGlzLnN0YXRlID0ge307XG4gIH1cblxuICBDb21wb25lbnREaWRNb3VudCgpIHt9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAuZmxleCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTYzLCAxNjMsIDE2Myk7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvXCJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvaGVhZD5cbiAgICAgICAgPFNpZGViYXIgLz5cbiAgICAgICAgPE1haW5Db250ZW50IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcbiJdfQ== */\n/*@ sourceURL=pages/index.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("head", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        className: "jsx-2396532696"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        className: "jsx-2396532696"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Roboto",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        className: "jsx-2396532696"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_sidebar__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_mainContent__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }));
    }
  }]);

  return IndexPage;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-cookie":
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map