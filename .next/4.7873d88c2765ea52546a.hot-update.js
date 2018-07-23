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
        className: "jsx-296723558" + " " + "search-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "296723558",
        css: ".search-container.jsx-296723558{width:100%;margin:auto;}.inner-search-container.jsx-296723558{position:relative;margin:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:white;border-radius:6px;min-height:100vh;box-shadow:0 2px 8px rgba(0,0,0,0.2);}.search-title.jsx-296723558{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:34px;width:100%;color:rgb(163,163,163);opacity:0.5;}.search-input.jsx-296723558{font-size:28px;border:0px;margin-bottom:4px;margin-top:25px;width:100%;max-width:300px;text-align:center;border-bottom:1px solid white;}.search-input.jsx-296723558:hover{border-bottom:1px solid black;}.search-input.jsx-296723558:focus{outline:none;border-bottom:1px solid black;}.search-result-container.jsx-296723558{margin:30px;}.search-count.jsx-296723558{position:absolute;top:35px;right:50px;color:rgb(163,163,163);}@media only screen and (max-width:900px){.search-count.jsx-296723558{top:65px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Hb0IsQUFHd0IsQUFJTyxBQVVMLEFBU0UsQUFVZSxBQUdqQixBQUlELEFBR00sQUFPUCxTQUNYLEVBbERZLENBd0NkLENBSmdDLEVBYm5CLEdBbkJDLEFBdUNILEtBMUNYLEdBdUJvQixDQW9CUCxHQXZDRSxBQTRCZixRQVkyQixLQVIzQixDQVprQixnQkFDTCxDQW9CYixVQW5Ca0IsR0FiRyxhQWNELGlCQXRCSSxDQXVCUSw4QkFDaEMsUUFmeUIsdUNBUk4saUJBQ0Msa0JBQ0QsaUJBQ3VCLFFBTXpCLGVBQ0osV0FDYyxHQVAzQixvQkFRYyxZQUNkIiwiZmlsZSI6ImNvbXBvbmVudHMvc2VhcmNoQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9OaWNreUIvRGVza3RvcC9QdWJsaXN0Q2hhbGxlbmdlcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBjb29raWUgZnJvbSBcInJlYWN0LWNvb2tpZVwiO1xuaW1wb3J0IFNlYXJjaFJlc3VsdCBmcm9tIFwiLi9zZWFyY2hSZXN1bHRcIjtcblxuY2xhc3MgU2VhcmNoQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnRva2VuID1cbiAgICAgIFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2TkRRc0ltNWhiV1VpT2lKT2FXTnJJRUp2WTJOMWVucHBJaXdpWlcxaGFXd2lPaUp1YVdOb2IyeGhjM0ppYjJOamRYcDZhVUJuYldGcGJDNWpiMjBpTENKbGJXRnBiRjkyWlhKcFptbGxaQ0k2ZEhKMVpTd2laVzFoYVd4ZmRtVnlhV1pwWTJGMGFXOXVYMk52WkdVaU9pSTNOek00T0RFaUxDSndZWE56ZDI5eVpDSTZJaVF5WVNReE1DUmtjazl2U2xGck5TOW9TRmx3VTFGa09XUjJabUl1UW5sWlQxa3ZUMmQwU3pFNGMwOVhkbUkxVFVrM0xsZHpMakZIZFRONGNTSXNJbkJsY20xcGMzTnBiMjV6SWpwdWRXeHNMQ0owYVcxbGVtOXVaU0k2SWtGdFpYSnBZMkV2VEc5elgwRnVaMlZzWlhNaUxDSnBjRjloWkdSeVpYTnpJam9pTmpjdU1qUXpMakl4TkM0eE56Y3ZNeklpTENKdmNIUnBiMjV6SWpwN2ZTd2liV1YwWVdSaGRHRWlPbnQ5TENKc1lYTjBYMnh2WjJsdUlqb2lNakF4T0Mwd055MHlNRlF3TWpvd09Eb3dPQzQzTXpSYUlpd2liR0Z6ZEY5aFkzUnBkbVVpT2lJeU1ERTRMVEEzTFRJd1ZEQXlPakE0T2pBNExqY3pORm9pTENKMWNHUmhkR1ZrSWpvaU1qQXhPQzB3TnkweU1GUXdNam93T0Rvd09DNDNNelJhSWl3aVkzSmxZWFJsWkNJNklqSXdNVGd0TURjdE1qQlVNREk2TURnNk1EZ3VOek0wV2lJc0ltbGhkQ0k2TVRVek1qQTFNalE0T1N3aVpYaHdJam94TlRNek1qWXlNRGc1ZlEuMWZuVU1iMjdpbHJRRk50OVV5ajFTVzJQN2JwMmx5RGZYV25fNkQtdEdzNFwiO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbnB1dDogXCJcIixcbiAgICAgIGRhdGE6IFtdLFxuICAgICAgZGlzcGxheURhdGE6IFtdXG4gICAgfTtcbiAgICB0aGlzLnBhcnNlRGF0YUZvcklucHV0ID0gdGhpcy5wYXJzZURhdGFGb3JJbnB1dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlSW5wdXQgPSB0aGlzLnVwZGF0ZUlucHV0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVEYXRhTm9kZSA9IHRoaXMuY3JlYXRlRGF0YU5vZGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8vIE5PVEU6XG4gIC8qXG4gIFdlIGhhdmUgYWRkZWQgbXkgcGVyc29uYWwgdG9rZW4gYmVsb3cgZm9yIGRlbW9uc3RyYXRpb24gcHVycG9zZXMsIG90aGVyd2lzZVxuICB3ZSB3b3VsZCB1c2UgcmVhY3QtY29va2llIHRvIGFjY2VzcyB0aGUgdXNlcidzIHRva2VuIHdpdGg6IGNvb2tpZS5sb2FkKCdjb25uZWN0LnNpZCcpO1xuICAqL1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy50b2tlbiA9PSBcIlwiKSB7XG4gICAgICB0aGlzLnRva2VuID0gY29va2llLmxvYWQoXCJjb25uZWN0LnNpZFwiKTtcbiAgICB9XG5cbiAgICBheGlvcyh7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vcHVibGlzdC5haS9hcGkvdjIvam9icy5mcm9udGVuZFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyLSR7dGhpcy50b2tlbn1gLFxuICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgcXVlcnk6IFwiaGlcIlxuICAgICAgfVxuICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEuZGF0YVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaW5wdXQubGVuZ3RoICE9IHByZXZTdGF0ZS5pbnB1dC5sZW5ndGgpIHtcbiAgICAgIHRoaXMucGFyc2VEYXRhRm9ySW5wdXQoKTtcbiAgICB9XG4gIH1cblxuICBwYXJzZURhdGFGb3JJbnB1dCgpIHtcbiAgICBsZXQgcmV0dXJuRGF0YSA9IFtdO1xuICAgIGlmICh0aGlzLnN0YXRlLmlucHV0Lmxlbmd0aCA+PSAxKSB7XG4gICAgICB0aGlzLnN0YXRlLmRhdGEuZm9yRWFjaChhcnRpY2xlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYXJ0aWNsZSk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBhcnRpY2xlLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zdGF0ZS5pbnB1dCkgfHxcbiAgICAgICAgICBhcnRpY2xlLmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zdGF0ZS5pbnB1dClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuRGF0YS5wdXNoKHRoaXMuY3JlYXRlRGF0YU5vZGUoYXJ0aWNsZSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlEYXRhOiByZXR1cm5EYXRhIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheURhdGE6IFtdIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZURhdGFOb2RlKGFydGljbGUpIHtcbiAgICBpZiAoYXJ0aWNsZS50aXRsZS5sZW5ndGggPiA1MCkge1xuICAgICAgYXJ0aWNsZS50aXRsZSA9IGFydGljbGUudGl0bGUuc2xpY2UoMCwgNTApICsgXCIuLi5cIjtcbiAgICB9XG5cbiAgICBpZiAoYXJ0aWNsZS5kZXNjcmlwdGlvbi5sZW5ndGggPiA3NSkge1xuICAgICAgYXJ0aWNsZS5kZXNjcmlwdGlvbiA9IGFydGljbGUuZGVzY3JpcHRpb24uc2xpY2UoMCwgNzUpICsgXCIuLi5cIjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNlYXJjaFJlc3VsdFxuICAgICAgICBpbWFnZT17YXJ0aWNsZS5pbWFnZV91cmx9XG4gICAgICAgIGRlc2NyaXB0aW9uPXthcnRpY2xlLmRlc2NyaXB0aW9ufVxuICAgICAgICB0aXRsZT17YXJ0aWNsZS50aXRsZX1cbiAgICAgICAgdXJsPXthcnRpY2xlLnVybH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIHVwZGF0ZUlucHV0KGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXQ6IGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCkgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cInNlYXJjaC1jb250YWluZXJcIj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5zZWFyY2gtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5uZXItc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW46IDUwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoLXRpdGxlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTYzLCAxNjMsIDE2Myk7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWFyY2gtaW5wdXQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoLWlucHV0OmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaC1pbnB1dDpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoLXJlc3VsdC1jb250YWluZXIge1xuICAgICAgICAgICAgbWFyZ2luOiAzMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoLWNvdW50IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMzVweDtcbiAgICAgICAgICAgIHJpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgY29sb3I6IHJnYigxNjMsIDE2MywgMTYzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgICAgICAgICAgLnNlYXJjaC1jb3VudCB7XG4gICAgICAgICAgICAgIHRvcDogNjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaW5uZXItc2VhcmNoLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXRpdGxlXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWlucHV0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDbGljayBIZXJlIHRvIFNlYXJjaC4uLlwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUlucHV0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1jb3VudFwiPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUuZGlzcGxheURhdGEubGVuZ3RofSBSZXN1bHRzXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUuZGlzcGxheURhdGF9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvbWFpbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaENvbnRhaW5lcjtcbiJdfQ== */\n/*@ sourceURL=components/searchContainer.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        className: "jsx-296723558" + " " + "inner-search-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        className: "jsx-296723558" + " " + "search-title"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        placeholder: "Click Here to Search...",
        onChange: this.updateInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        className: "jsx-296723558" + " " + "search-input"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        className: "jsx-296723558" + " " + "search-count"
      }, this.state.displayData.length, " Results"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        className: "jsx-296723558" + " " + "search-result-container"
      }, this.state.displayData)));
    }
  }]);

  return SearchContainer;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SearchContainer);

/***/ })

})
//# sourceMappingURL=4.7873d88c2765ea52546a.hot-update.js.map