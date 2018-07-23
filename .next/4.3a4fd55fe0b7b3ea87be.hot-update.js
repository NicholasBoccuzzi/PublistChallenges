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

          if (article.title.toLowerCase().includes(_this3.state.input) || article.description.toLowerCase().includes(_this3.state.input)) {
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
      if (article.title.length > 30) {
        article.title = article.title.slice(0, 30) + "...";
      }

      if (article.description.length > 50) {
        article.description = article.description.slice(0, 50) + "...";
      }

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        className: "article-container",
        href: article.url,
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
        className: "jsx-708633031" + " " + "search-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "708633031",
        css: ".search-container.jsx-708633031{width:100%;margin:auto;}.inner-search-container.jsx-708633031{position:relative;margin:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:white;border-radius:6px;min-height:100vh;box-shadow:0 2px 8px rgba(0,0,0,.2);}.search-title.jsx-708633031{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:34px;width:100%;color:rgb(163,163,163);opacity:.5;}.search-input.jsx-708633031{font-size:34px;border:0px;margin-bottom:4px;margin-top:25px;width:100%;max-width:300px;text-align:center;}.search-input.jsx-708633031:hover{border-bottom:1px solid black;}.search-input.jsx-708633031:focus{outline:none;border-bottom:1px solid black;}.search-result-container.jsx-708633031{margin:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdHb0IsQUFHeUIsQUFJTSxBQVVMLEFBUUUsQUFTZSxBQUdqQixBQUlELFdBckNDLENBc0NmLENBSmdDLEVBWm5CLEdBbEJDLEtBSGQsR0FzQm9CLElBbEJMLEFBMEJmLGFBSUEsQ0FYa0IsZ0JBQ0wsV0FDSyxHQVpPLGFBYU4saUJBckJLLENBc0J4QixvRUFiaUIsU0FSRSxNQVNOLFdBUk8sQUFTSyxrQkFSTixLQVNOLFdBQ2IsQ0FUc0Msb0NBQ3RDIiwiZmlsZSI6ImNvbXBvbmVudHMvc2VhcmNoQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9OaWNreUIvRGVza3RvcC9QdWJsaXN0Q2hhbGxlbmdlcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICdyZWFjdC1jb29raWUnO1xuXG5jbGFzcyBTZWFyY2hDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy50b2tlbiA9IFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2TkRRc0ltNWhiV1VpT2lKT2FXTnJJRUp2WTJOMWVucHBJaXdpWlcxaGFXd2lPaUp1YVdOb2IyeGhjM0ppYjJOamRYcDZhVUJuYldGcGJDNWpiMjBpTENKbGJXRnBiRjkyWlhKcFptbGxaQ0k2ZEhKMVpTd2laVzFoYVd4ZmRtVnlhV1pwWTJGMGFXOXVYMk52WkdVaU9pSTNOek00T0RFaUxDSndZWE56ZDI5eVpDSTZJaVF5WVNReE1DUmtjazl2U2xGck5TOW9TRmx3VTFGa09XUjJabUl1UW5sWlQxa3ZUMmQwU3pFNGMwOVhkbUkxVFVrM0xsZHpMakZIZFRONGNTSXNJbkJsY20xcGMzTnBiMjV6SWpwdWRXeHNMQ0owYVcxbGVtOXVaU0k2SWtGdFpYSnBZMkV2VEc5elgwRnVaMlZzWlhNaUxDSnBjRjloWkdSeVpYTnpJam9pTmpjdU1qUXpMakl4TkM0eE56Y3ZNeklpTENKdmNIUnBiMjV6SWpwN2ZTd2liV1YwWVdSaGRHRWlPbnQ5TENKc1lYTjBYMnh2WjJsdUlqb2lNakF4T0Mwd055MHlNRlF3TWpvd09Eb3dPQzQzTXpSYUlpd2liR0Z6ZEY5aFkzUnBkbVVpT2lJeU1ERTRMVEEzTFRJd1ZEQXlPakE0T2pBNExqY3pORm9pTENKMWNHUmhkR1ZrSWpvaU1qQXhPQzB3TnkweU1GUXdNam93T0Rvd09DNDNNelJhSWl3aVkzSmxZWFJsWkNJNklqSXdNVGd0TURjdE1qQlVNREk2TURnNk1EZ3VOek0wV2lJc0ltbGhkQ0k2TVRVek1qQTFNalE0T1N3aVpYaHdJam94TlRNek1qWXlNRGc1ZlEuMWZuVU1iMjdpbHJRRk50OVV5ajFTVzJQN2JwMmx5RGZYV25fNkQtdEdzNFwiO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbnB1dDogXCJcIixcbiAgICAgIGRhdGE6IFtdLFxuICAgICAgZGlzcGxheURhdGE6IFtdLFxuICAgIH1cbiAgICB0aGlzLnBhcnNlRGF0YUZvcklucHV0ID0gdGhpcy5wYXJzZURhdGFGb3JJbnB1dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlSW5wdXQgPSB0aGlzLnVwZGF0ZUlucHV0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVEYXRhTm9kZSA9IHRoaXMuY3JlYXRlRGF0YU5vZGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8vIE5PVEU6XG4gIC8qXG4gIFdlIGhhdmUgYWRkZWQgbXkgcGVyc29uYWwgdG9rZW4gYmVsb3cgZm9yIGRlbW9uc3RyYXRpb24gcHVycG9zZXMsIG90aGVyd2lzZVxuICB3ZSB3b3VsZCB1c2UgcmVhY3QtY29va2llIHRvIGFjY2VzcyB0aGUgdXNlcidzIHRva2VuIHdpdGg6IGNvb2tpZS5sb2FkKCdjb25uZWN0LnNpZCcpO1xuICAqL1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy50b2tlbiA9PSBcIlwiKSB7XG4gICAgICB0aGlzLnRva2VuID0gY29va2llLmxvYWQoJ2Nvbm5lY3Quc2lkJyk7XG4gICAgfVxuXG4gICAgYXhpb3Moe1xuICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgIHVybDogJ2h0dHBzOi8vcHVibGlzdC5haS9hcGkvdjIvam9icy5mcm9udGVuZCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbiA6IGBCZWFyZXItJHt0aGlzLnRva2VufWAsXG4gICAgICAgICAgXCJDb250ZW50LXR5cGVcIiA6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgICAgXCJxdWVyeVwiOiBcImhpXCJcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YS5kYXRhXG4gICAgICB9KVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlIChwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnN0YXRlLmlucHV0Lmxlbmd0aCAhPSBwcmV2U3RhdGUuaW5wdXQubGVuZ3RoXG4gICAgKXtcbiAgICAgICAgdGhpcy5wYXJzZURhdGFGb3JJbnB1dCgpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRpc3BsYXlEYXRhKTtcbiAgICB9XG4gIH1cblxuICBwYXJzZURhdGFGb3JJbnB1dCAoKSB7XG4gICAgbGV0IHJldHVybkRhdGEgPSBbXTtcbiAgICBpZiAodGhpcy5zdGF0ZS5pbnB1dC5sZW5ndGggPj0gMSkge1xuICAgICAgdGhpcy5zdGF0ZS5kYXRhLmZvckVhY2goKGFydGljbGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYXJ0aWNsZSk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBhcnRpY2xlLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zdGF0ZS5pbnB1dCkgfHxcbiAgICAgICAgICBhcnRpY2xlLmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zdGF0ZS5pbnB1dCkpe1xuICAgICAgICAgIHJldHVybkRhdGEucHVzaCh0aGlzLmNyZWF0ZURhdGFOb2RlKGFydGljbGUpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Rpc3BsYXlEYXRhOiByZXR1cm5EYXRhfSk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlRGF0YU5vZGUoYXJ0aWNsZSkge1xuICAgIGlmIChhcnRpY2xlLnRpdGxlLmxlbmd0aCA+IDMwKSB7XG4gICAgICBhcnRpY2xlLnRpdGxlID0gYXJ0aWNsZS50aXRsZS5zbGljZSgwLCAzMCkgKyBcIi4uLlwiO1xuICAgIH1cblxuICAgIGlmIChhcnRpY2xlLmRlc2NyaXB0aW9uLmxlbmd0aCA+IDUwKSB7XG4gICAgICBhcnRpY2xlLmRlc2NyaXB0aW9uID0gYXJ0aWNsZS5kZXNjcmlwdGlvbi5zbGljZSgwLCA1MCkgKyBcIi4uLlwiO1xuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgIDxhIGNsYXNzTmFtZT1cImFydGljbGUtY29udGFpbmVyXCIgaHJlZj17YXJ0aWNsZS51cmx9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtdGl0bGVcIj57YXJ0aWNsZS50aXRsZX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLWRlc2NcIj57YXJ0aWNsZS5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgIDwvYT5cbiAgICApXG4gIH1cblxuICB1cGRhdGVJbnB1dChlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aW5wdXQ6IGUudGFyZ2V0LnZhbHVlfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJzZWFyY2gtY29udGFpbmVyXCI+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5uZXItc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW46IDUwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLDAsMCwuMik7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWFyY2gtdGl0bGV7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTYzLDE2MywxNjMpO1xuICAgICAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWFyY2gtaW5wdXQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWFyY2gtaW5wdXQ6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoLWlucHV0OmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWFyY2gtcmVzdWx0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW46IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImlubmVyLXNlYXJjaC1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC10aXRsZVwiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInNlYXJjaC1pbnB1dFwicGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiBvbkNoYW5nZT17dGhpcy51cGRhdGVJbnB1dH0+PC9pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1yZXN1bHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5kaXNwbGF5RGF0YX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9tYWluPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hDb250YWluZXI7XG4iXX0= */\n/*@ sourceURL=components/searchContainer.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        className: "jsx-708633031" + " " + "inner-search-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        className: "jsx-708633031" + " " + "search-title"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        placeholder: "Search...",
        onChange: this.updateInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        className: "jsx-708633031" + " " + "search-input"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        className: "jsx-708633031" + " " + "search-result-container"
      }, this.state.displayData)));
    }
  }]);

  return SearchContainer;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SearchContainer);

/***/ })

})
//# sourceMappingURL=4.3a4fd55fe0b7b3ea87be.hot-update.js.map