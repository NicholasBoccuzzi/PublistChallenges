webpackHotUpdate(4,{

/***/ "./components/searchContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_cookie__ = __webpack_require__("./node_modules/react-cookie/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_cookie__);
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
      if (this.state.input.length != prevState.input.length) {
        this.parseDataForInput();
        console.log(this.state.displayData);
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

          if (article.title.includes(_this3.state.input) || article.description.includes(_this3.state.input)) {
            returnData.push(_this3.createDataNode(article));
          }
        });
        this.setState({
          displayData: returnData
        });
      }
    }
  }, {
    key: "createDataNode",
    value: function createDataNode(article) {
      if (article.title.length > 20) {
        article.title = article.title.slice(0, 20) + "...";
      }

      if (article.description.length > 30) {
        article.description = article.description.slice(0, 30) + "...";
      }

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "article-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "article-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, article.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "article-desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, article.description));
    }
  }, {
    key: "updateInput",
    value: function updateInput(e) {
      this.setState({
        input: e.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("main", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        className: "jsx-3339824981" + " " + "search-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3339824981",
        css: ".search-container.jsx-3339824981{width:100%;margin:auto;}.inner-search-container.jsx-3339824981{position:relative;margin:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:white;border-radius:6px;min-height:100vh;box-shadow:0 2px 8px rgba(0,0,0,.2);}.search-title.jsx-3339824981{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:34px;width:100%;color:rgb(163,163,163);opacity:.5;}.search-input.jsx-3339824981{font-size:34px;border:0px;margin-bottom:4px;margin-top:25px;width:100%;max-width:300px;text-align:center;}.search-input.jsx-3339824981:hover{border-bottom:1px solid black;}.search-input.jsx-3339824981:focus{outline:none;border-bottom:1px solid black;}.article-container.jsx-3339824981{margin:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdHb0IsQUFHeUIsQUFJTSxBQVVMLEFBUUUsQUFTZSxBQUdqQixBQUlGLFdBckNFLEFBc0NmLEVBSmdDLEVBWm5CLEdBbEJDLEtBSGQsR0FzQm9CLElBbEJMLEFBMEJmLGFBSUEsQ0FYa0IsZ0JBQ0wsV0FDSyxHQVpPLGFBYU4saUJBckJLLENBc0J4QixvRUFiaUIsU0FSRSxNQVNOLFdBUk8sQUFTSyxrQkFSTixLQVNOLFdBQ2IsQ0FUc0Msb0NBQ3RDIiwiZmlsZSI6ImNvbXBvbmVudHMvc2VhcmNoQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9OaWNreUIvRGVza3RvcC9QdWJsaXN0Q2hhbGxlbmdlcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICdyZWFjdC1jb29raWUnO1xuXG5jbGFzcyBTZWFyY2hDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy50b2tlbiA9IFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2TkRRc0ltNWhiV1VpT2lKT2FXTnJJRUp2WTJOMWVucHBJaXdpWlcxaGFXd2lPaUp1YVdOb2IyeGhjM0ppYjJOamRYcDZhVUJuYldGcGJDNWpiMjBpTENKbGJXRnBiRjkyWlhKcFptbGxaQ0k2ZEhKMVpTd2laVzFoYVd4ZmRtVnlhV1pwWTJGMGFXOXVYMk52WkdVaU9pSTNOek00T0RFaUxDSndZWE56ZDI5eVpDSTZJaVF5WVNReE1DUmtjazl2U2xGck5TOW9TRmx3VTFGa09XUjJabUl1UW5sWlQxa3ZUMmQwU3pFNGMwOVhkbUkxVFVrM0xsZHpMakZIZFRONGNTSXNJbkJsY20xcGMzTnBiMjV6SWpwdWRXeHNMQ0owYVcxbGVtOXVaU0k2SWtGdFpYSnBZMkV2VEc5elgwRnVaMlZzWlhNaUxDSnBjRjloWkdSeVpYTnpJam9pTmpjdU1qUXpMakl4TkM0eE56Y3ZNeklpTENKdmNIUnBiMjV6SWpwN2ZTd2liV1YwWVdSaGRHRWlPbnQ5TENKc1lYTjBYMnh2WjJsdUlqb2lNakF4T0Mwd055MHlNRlF3TWpvd09Eb3dPQzQzTXpSYUlpd2liR0Z6ZEY5aFkzUnBkbVVpT2lJeU1ERTRMVEEzTFRJd1ZEQXlPakE0T2pBNExqY3pORm9pTENKMWNHUmhkR1ZrSWpvaU1qQXhPQzB3TnkweU1GUXdNam93T0Rvd09DNDNNelJhSWl3aVkzSmxZWFJsWkNJNklqSXdNVGd0TURjdE1qQlVNREk2TURnNk1EZ3VOek0wV2lJc0ltbGhkQ0k2TVRVek1qQTFNalE0T1N3aVpYaHdJam94TlRNek1qWXlNRGc1ZlEuMWZuVU1iMjdpbHJRRk50OVV5ajFTVzJQN2JwMmx5RGZYV25fNkQtdEdzNFwiO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbnB1dDogXCJcIixcbiAgICAgIGRhdGE6IFtdLFxuICAgICAgZGlzcGxheURhdGE6IFtdLFxuICAgIH1cbiAgICB0aGlzLnBhcnNlRGF0YUZvcklucHV0ID0gdGhpcy5wYXJzZURhdGFGb3JJbnB1dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlSW5wdXQgPSB0aGlzLnVwZGF0ZUlucHV0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVEYXRhTm9kZSA9IHRoaXMuY3JlYXRlRGF0YU5vZGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8vIE5PVEU6XG4gIC8qXG4gIFdlIGhhdmUgYWRkZWQgbXkgcGVyc29uYWwgdG9rZW4gYmVsb3cgZm9yIGRlbW9uc3RyYXRpb24gcHVycG9zZXMsIG90aGVyd2lzZVxuICB3ZSB3b3VsZCB1c2UgcmVhY3QtY29va2llIHRvIGFjY2VzcyB0aGUgdXNlcidzIHRva2VuIHdpdGg6IGNvb2tpZS5sb2FkKCdjb25uZWN0LnNpZCcpO1xuICAqL1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy50b2tlbiA9PSBcIlwiKSB7XG4gICAgICB0aGlzLnRva2VuID0gY29va2llLmxvYWQoJ2Nvbm5lY3Quc2lkJyk7XG4gICAgfVxuXG4gICAgYXhpb3Moe1xuICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgIHVybDogJ2h0dHBzOi8vcHVibGlzdC5haS9hcGkvdjIvam9icy5mcm9udGVuZCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbiA6IGBCZWFyZXItJHt0aGlzLnRva2VufWAsXG4gICAgICAgICAgXCJDb250ZW50LXR5cGVcIiA6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgICAgXCJxdWVyeVwiOiBcImhpXCJcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YS5kYXRhXG4gICAgICB9KVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlIChwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnN0YXRlLmlucHV0Lmxlbmd0aCAhPSBwcmV2U3RhdGUuaW5wdXQubGVuZ3RoXG4gICAgKXtcbiAgICAgICAgdGhpcy5wYXJzZURhdGFGb3JJbnB1dCgpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRpc3BsYXlEYXRhKTtcbiAgICB9XG4gIH1cblxuICBwYXJzZURhdGFGb3JJbnB1dCAoKSB7XG4gICAgbGV0IHJldHVybkRhdGEgPSBbXTtcbiAgICBpZiAodGhpcy5zdGF0ZS5pbnB1dC5sZW5ndGggPj0gMSkge1xuICAgICAgdGhpcy5zdGF0ZS5kYXRhLmZvckVhY2goKGFydGljbGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYXJ0aWNsZSk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBhcnRpY2xlLnRpdGxlLmluY2x1ZGVzKHRoaXMuc3RhdGUuaW5wdXQpIHx8XG4gICAgICAgICAgYXJ0aWNsZS5kZXNjcmlwdGlvbi5pbmNsdWRlcyh0aGlzLnN0YXRlLmlucHV0KSl7XG4gICAgICAgICAgcmV0dXJuRGF0YS5wdXNoKHRoaXMuY3JlYXRlRGF0YU5vZGUoYXJ0aWNsZSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGlzcGxheURhdGE6IHJldHVybkRhdGF9KTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVEYXRhTm9kZShhcnRpY2xlKSB7XG4gICAgaWYgKGFydGljbGUudGl0bGUubGVuZ3RoID4gMjApIHtcbiAgICAgIGFydGljbGUudGl0bGUgPSBhcnRpY2xlLnRpdGxlLnNsaWNlKDAsIDIwKSArIFwiLi4uXCI7XG4gICAgfVxuXG4gICAgaWYgKGFydGljbGUuZGVzY3JpcHRpb24ubGVuZ3RoID4gMzApIHtcbiAgICAgIGFydGljbGUuZGVzY3JpcHRpb24gPSBhcnRpY2xlLmRlc2NyaXB0aW9uLnNsaWNlKDAsIDMwKSArIFwiLi4uXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtdGl0bGVcIj57YXJ0aWNsZS50aXRsZX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLWRlc2NcIj57YXJ0aWNsZS5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHVwZGF0ZUlucHV0KGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtpbnB1dDogZS50YXJnZXQudmFsdWV9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cInNlYXJjaC1jb250YWluZXJcIj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5zZWFyY2gtY29udGFpbmVyIHtcbiAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbm5lci1zZWFyY2gtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1hcmdpbjogNTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLC4yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaC10aXRsZXtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgY29sb3I6IHJnYigxNjMsMTYzLDE2Myk7XG4gICAgICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaC1pbnB1dCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgICAgICBib3JkZXI6IDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaC1pbnB1dDpob3ZlciB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWFyY2gtaW5wdXQ6Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFydGljbGUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJpbm5lci1zZWFyY2gtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtdGl0bGVcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzZWFyY2gtaW5wdXRcInBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCIgb25DaGFuZ2U9e3RoaXMudXBkYXRlSW5wdXR9PjwvaW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRpc3BsYXlEYXRhfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L21haW4+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaENvbnRhaW5lcjtcbiJdfQ== */\n/*@ sourceURL=components/searchContainer.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        className: "jsx-3339824981" + " " + "inner-search-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        className: "jsx-3339824981" + " " + "search-title"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        placeholder: "Search...",
        onChange: this.updateInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        className: "jsx-3339824981" + " " + "search-input"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        className: "jsx-3339824981" + " " + ""
      }, this.state.displayData)));
    }
  }]);

  return SearchContainer;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SearchContainer);

/***/ })

})
//# sourceMappingURL=4.3d2a3b7f66e20ba8a8f2.hot-update.js.map