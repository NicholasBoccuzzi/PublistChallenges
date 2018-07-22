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
var _jsxFileName = "/Users/NickyB/Desktop/PublistChallenges/components/mainContent.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var MainContent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MainContent, _React$Component);

  function MainContent(props) {
    var _this;

    _classCallCheck(this, MainContent);

    _this = _possibleConstructorReturn(this, (MainContent.__proto__ || Object.getPrototypeOf(MainContent)).call(this, props));
    _this.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDQsIm5hbWUiOiJOaWNrIEJvY2N1enppIiwiZW1haWwiOiJuaWNob2xhc3Jib2NjdXp6aUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZW1haWxfdmVyaWZpY2F0aW9uX2NvZGUiOiI3NzM4ODEiLCJwYXNzd29yZCI6IiQyYSQxMCRkck9vSlFrNS9oSFlwU1FkOWR2ZmIuQnlZT1kvT2d0SzE4c09XdmI1TUk3LldzLjFHdTN4cSIsInBlcm1pc3Npb25zIjpudWxsLCJ0aW1lem9uZSI6IkFtZXJpY2EvTG9zX0FuZ2VsZXMiLCJpcF9hZGRyZXNzIjoiNjcuMjQzLjIxNC4xNzcvMzIiLCJvcHRpb25zIjp7fSwibWV0YWRhdGEiOnt9LCJsYXN0X2xvZ2luIjoiMjAxOC0wNy0yMFQwMjowODowOC43MzRaIiwibGFzdF9hY3RpdmUiOiIyMDE4LTA3LTIwVDAyOjA4OjA4LjczNFoiLCJ1cGRhdGVkIjoiMjAxOC0wNy0yMFQwMjowODowOC43MzRaIiwiY3JlYXRlZCI6IjIwMTgtMDctMjBUMDI6MDg6MDguNzM0WiIsImlhdCI6MTUzMjA1MjQ4OSwiZXhwIjoxNTMzMjYyMDg5fQ.1fnUMb27ilrQFNt9Uyj1SW2P7bp2lyDfXWn_6D-tGs4";
    _this.state = {};
    return _this;
  } // NOTE:

  /*
  We have added my personal token below for demonstration purposes, otherwise
  we would use react-cookie to access the user's token with: cookie.load('connect.sid');
  */


  _createClass(MainContent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.token == "") {
        this.token = __WEBPACK_IMPORTED_MODULE_3_react_cookie___default.a.load('connect.sid');
      }

      __WEBPACK_IMPORTED_MODULE_2_axios___default()({
        method: "post",
        url: 'https://publist.ai/api/v2/jobs.frontend',
        headers: {
          Authorization: "Bearer-".concat(this.token),
          "Content-type": "application/json"
        },
        data: {
          "query": "hi"
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
      console.log(this.state);
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        className: "jsx-3877196488" + " " + "main-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3877196488",
        css: ".main-container.jsx-3877196488{width:100%;max-width:1600px;min-height:100vh;padding:48px 72px 0;background:#F6F9FC;z-index:10;}.page-title.jsx-3877196488{color:var(--color-text-dark);font-size:28px;font-weight:600;}.flex-center.jsx-3877196488{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.flex-one.jsx-3877196488{-webkit-flex:1;-ms-flex:1;flex:1;}.dash-title.jsx-3877196488{color:#000;font-size:18px;font-weight:500;line-height:18px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}.dash-title-text.jsx-3877196488{margin-right:10px;}.to-dashboard.jsx-3877196488{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;color:rgb(187,187,187);-webkit-text-decoration:none;text-decoration:none;}.dashboard-dash.jsx-3877196488{margin-right:10px;font-size:40px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWFpbkNvbnRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RvQixBQUd3QixBQVFrQixBQUtoQixBQUlOLEFBR0ksQUFVTyxBQUdMLEFBUUssV0F4Q0QsQUFvQkYsT0FVakIsQUFXaUIsUUFwQkMsRUFwQkMsQ0FPRixJQVNqQixBQXlCQSxTQXBCbUIsRUFiRCxDQVBJLGNBcUJQLENBYmYsS0FQcUIsU0FVSSxBQW9CQSxVQTdCWixXQUNiLHNDQW1CeUIsd0NBVnpCLEFBb0JxQiwyREFUQSxrQ0FVSixlQUNVLHVCQUNKLHFCQVhOLGVBQ2pCLGNBV0EiLCJmaWxlIjoiY29tcG9uZW50cy9tYWluQ29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTmlja3lCL0Rlc2t0b3AvUHVibGlzdENoYWxsZW5nZXMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBjb29raWUgZnJvbSAncmVhY3QtY29va2llJztcblxuXG5jbGFzcyBNYWluQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnRva2VuID0gXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZORFFzSW01aGJXVWlPaUpPYVdOcklFSnZZMk4xZW5wcElpd2laVzFoYVd3aU9pSnVhV05vYjJ4aGMzSmliMk5qZFhwNmFVQm5iV0ZwYkM1amIyMGlMQ0psYldGcGJGOTJaWEpwWm1sbFpDSTZkSEoxWlN3aVpXMWhhV3hmZG1WeWFXWnBZMkYwYVc5dVgyTnZaR1VpT2lJM056TTRPREVpTENKd1lYTnpkMjl5WkNJNklpUXlZU1F4TUNSa2NrOXZTbEZyTlM5b1NGbHdVMUZrT1dSMlptSXVRbmxaVDFrdlQyZDBTekU0YzA5WGRtSTFUVWszTGxkekxqRkhkVE40Y1NJc0luQmxjbTFwYzNOcGIyNXpJanB1ZFd4c0xDSjBhVzFsZW05dVpTSTZJa0Z0WlhKcFkyRXZURzl6WDBGdVoyVnNaWE1pTENKcGNGOWhaR1J5WlhOeklqb2lOamN1TWpRekxqSXhOQzR4Tnpjdk16SWlMQ0p2Y0hScGIyNXpJanA3ZlN3aWJXVjBZV1JoZEdFaU9udDlMQ0pzWVhOMFgyeHZaMmx1SWpvaU1qQXhPQzB3TnkweU1GUXdNam93T0Rvd09DNDNNelJhSWl3aWJHRnpkRjloWTNScGRtVWlPaUl5TURFNExUQTNMVEl3VkRBeU9qQTRPakE0TGpjek5Gb2lMQ0oxY0dSaGRHVmtJam9pTWpBeE9DMHdOeTB5TUZRd01qb3dPRG93T0M0M016UmFJaXdpWTNKbFlYUmxaQ0k2SWpJd01UZ3RNRGN0TWpCVU1ESTZNRGc2TURndU56TTBXaUlzSW1saGRDSTZNVFV6TWpBMU1qUTRPU3dpWlhod0lqb3hOVE16TWpZeU1EZzVmUS4xZm5VTWIyN2lsclFGTnQ5VXlqMVNXMlA3YnAybHlEZlhXbl82RC10R3M0XCI7XG4gICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgIH1cbiAgfVxuXG4vLyBOT1RFOlxuLypcbldlIGhhdmUgYWRkZWQgbXkgcGVyc29uYWwgdG9rZW4gYmVsb3cgZm9yIGRlbW9uc3RyYXRpb24gcHVycG9zZXMsIG90aGVyd2lzZVxud2Ugd291bGQgdXNlIHJlYWN0LWNvb2tpZSB0byBhY2Nlc3MgdGhlIHVzZXIncyB0b2tlbiB3aXRoOiBjb29raWUubG9hZCgnY29ubmVjdC5zaWQnKTtcbiovXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnRva2VuID09IFwiXCIpIHtcbiAgICAgIHRoaXMudG9rZW4gPSBjb29raWUubG9hZCgnY29ubmVjdC5zaWQnKTtcbiAgICB9XG5cblxuICAgIGF4aW9zKHtcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICB1cmw6ICdodHRwczovL3B1Ymxpc3QuYWkvYXBpL3YyL2pvYnMuZnJvbnRlbmQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb24gOiBgQmVhcmVyLSR7dGhpcy50b2tlbn1gLFxuICAgICAgICAgIFwiQ29udGVudC10eXBlXCIgOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICAgIFwicXVlcnlcIjogXCJoaVwiXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEuZGF0YVxuICAgICAgfSlcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRhaW5lclwiPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm1haW4tY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNjAwcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDQ4cHggNzJweCAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0Y2RjlGQztcbiAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucGFnZS10aXRsZSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1kYXJrKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mbGV4LWNlbnRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mbGV4LW9uZSB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGFzaC10aXRsZSB7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kYXNoLXRpdGxlLXRleHQge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG8tZGFzaGJvYXJkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDE4NywgMTg3LCAxODcpO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGFzaGJvYXJkLWRhc2gge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY2VudGVyXCI+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcHVibGlzdC5haS9uaWNrYm9jY3V6emkvcmVwb3J0c1wiIGNsYXNzTmFtZT1cInRvLWRhc2hib2FyZFwiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtbGVmdCBkYXNoYm9hcmQtZGFzaFwiPjwvaT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaGJvYXJkLXRleHRcIj5EYXNoYm9hcmQ8L2Rpdj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LW9uZVwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaC10aXRsZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoLXRpdGxlLXRleHRcIj5DdXJyZW50IFVzZXI8L2Rpdj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvd24gXCI+PC9pPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGVudDtcbiJdfQ== */\n/*@ sourceURL=components/mainContent.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        className: "jsx-3877196488" + " " + "flex-center"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://publist.ai/nickboccuzzi/reports",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        className: "jsx-3877196488" + " " + "to-dashboard"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        className: "jsx-3877196488" + " " + "fa fa-angle-left dashboard-dash"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        className: "jsx-3877196488" + " " + "dashboard-text"
      }, "Dashboard")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        className: "jsx-3877196488" + " " + "flex-one"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        className: "jsx-3877196488" + " " + "dash-title"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        className: "jsx-3877196488" + " " + "dash-title-text"
      }, "Current User"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        className: "jsx-3877196488" + " " + "fa fa-angle-down "
      }))));
    }
  }]);

  return MainContent;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (MainContent);

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
          lineNumber: 18
        },
        className: "jsx-3085521990" + " " + "sidebar-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3085521990",
        css: ".sidebar-container.jsx-3085521990{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:auto;box-shadow:0.5px 0 2px 0 #f0f3f4;min-width:94px;min-height:100vh;z-index:20;}.center.jsx-3085521990{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0 auto;}.logo.jsx-3085521990{font-size:24px;font-weight:600;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}.logo-container.jsx-3085521990{margin-top:50px;}.sidebar-sticky.jsx-3085521990{position:absolute;width:100%;}.sticky.jsx-3085521990{position:fixed;}.cog-container.jsx-3085521990{font-size:18px;cursor:pointer;margin-top:42px;color:black;}.home-container.jsx-3085521990{font-size:18px;cursor:pointer;margin-top:190px;color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2lkZWJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQm9CLEFBRytCLEFBVUwsQUFNRSxBQUtDLEFBR0UsQUFJSCxBQUdBLEFBTUEsZUFwQkMsQUFZbEIsQUFHaUIsQUFNQSxDQWhCakIsRUFyQmUsQUF3QkYsV0FDYixDQU9rQixBQU1DLENBckJFLGVBZ0JQLENBTUEsV0FMZCxDQU1BLGVBOUJvQixrQkFUQyxBQVVJLGdDQU96QixxQ0FoQmMsWUFDcUIsa0JBU25CLGNBQ2hCLENBVGlCLGVBQ0UsaUJBQ04sV0FDYiIsImZpbGUiOiJjb21wb25lbnRzL3NpZGViYXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL05pY2t5Qi9EZXNrdG9wL1B1Ymxpc3RDaGFsbGVuZ2VzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgU2lkZWJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgfVxuICB9XG5cbiAgQ29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWNvbnRhaW5lclwiPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnNpZGViYXItY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMC41cHggMCAycHggMCAjZjBmM2Y0O1xuICAgICAgICAgICAgbWluLXdpZHRoOiA5NHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICB6LWluZGV4OiAyMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNlbnRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sb2dvLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2lkZWJhci1zdGlja3kge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdGlja3kge1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29nLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0MnB4O1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaG9tZS1jb250YWluZXIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTkwcHg7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc3RpY2t5IGNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3lcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcHVibGlzdC5haS9yZXBvcnRzXCIgY2xhc3NOYW1lPVwibG9nbyBsb2dvLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLm5leHQvc3RhdGljL2xvZ28tZGFyay5zdmdcIil9IC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcHVibGlzdC5haS9yZXBvcnRzXCIgY2xhc3NOYW1lPVwiaG9tZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1ob21lXCI+PC9pPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3B1Ymxpc3QuYWkvc2V0dGluZ3NcIiBjbGFzc05hbWU9XCJjb2ctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY29nXCI+PC9pPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIl19 */\n/*@ sourceURL=components/sidebar.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        className: "jsx-3085521990" + " " + "sidebar-sticky center"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        className: "jsx-3085521990" + " " + "sticky"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://publist.ai/reports",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        className: "jsx-3085521990" + " " + "logo logo-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: __webpack_require__("./.next/static/logo-dark.svg"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        className: "jsx-3085521990"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://publist.ai/reports",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        className: "jsx-3085521990" + " " + "home-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        className: "jsx-3085521990" + " " + "fa fa-home"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://publist.ai/settings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        className: "jsx-3085521990" + " " + "cog-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        className: "jsx-3085521990" + " " + "fa fa-cog"
      })))));
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
          lineNumber: 19
        },
        className: "jsx-4007917711" + " " + "flex"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "4007917711",
        css: ".flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;height:100%;}html{padding:0px;margin:0px;height:100vh;}body{margin:0px;height:100vh;font-family:Roboto;}a{display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CMkIsQUFHMEIsQUFLRCxBQUtELEFBS0csV0FKRCxDQUxGLEVBVWIsU0FUZSxDQUtNLFlBSnJCLE9BS0EsK0JBWjZCLHlHQUNmLFlBQ2QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL05pY2t5Qi9EZXNrdG9wL1B1Ymxpc3RDaGFsbGVuZ2VzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNYWluQ29udGVudCBmcm9tICcuLi9jb21wb25lbnRzL21haW5Db250ZW50JztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvc2lkZWJhcic7XG5cbmNsYXNzIEluZGV4UGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMudG9rZW5TdHIgPVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgfTtcbiAgfVxuXG4gIENvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIC5mbGV4IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8aGVhZD5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiLz5cbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgICAgPC9oZWFkPlxuICAgICAgICA8U2lkZWJhcj48L1NpZGViYXI+XG4gICAgICAgIDxNYWluQ29udGVudD48L01haW5Db250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZVxuIl19 */\n/*@ sourceURL=pages/index.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("head", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        className: "jsx-4007917711"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        className: "jsx-4007917711"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Roboto",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        className: "jsx-4007917711"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_sidebar__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_mainContent__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
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