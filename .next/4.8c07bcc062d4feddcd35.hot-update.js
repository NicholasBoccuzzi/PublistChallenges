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
          lineNumber: 85
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
          lineNumber: 100
        },
        className: "jsx-1934638587" + " " + "search-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1934638587",
        css: ".search-container.jsx-1934638587{width:100%;margin:auto;}.inner-search-container.jsx-1934638587{position:relative;margin:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:white;border-radius:6px;min-height:100vh;box-shadow:0 2px 8px rgba(0,0,0,.2);}.search-title.jsx-1934638587{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:34px;width:100%;color:rgb(163,163,163);opacity:.5;}.search-input.jsx-1934638587{font-size:28px;border:0px;margin-bottom:4px;margin-top:25px;width:100%;max-width:300px;text-align:center;border-bottom:1px solid white;}.search-input.jsx-1934638587:hover{border-bottom:1px solid black;}.search-input.jsx-1934638587:focus{outline:none;border-bottom:1px solid black;}.search-result-container.jsx-1934638587{margin:30px;}.search-count.jsx-1934638587{position:absolute;top:35px;right:50px;color:rgb(163,163,163);}@media only screen and (max-width:900px){.search-count.jsx-1934638587{top:65px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Hb0IsQUFHeUIsQUFJTSxBQVVMLEFBU0UsQUFVZSxBQUdqQixBQUlELEFBR00sQUFPUCxTQUNYLEVBbERhLENBd0NmLENBSmdDLEVBYm5CLEdBbkJDLEFBdUNILEtBMUNYLEdBdUJvQixDQW9CUCxHQXZDRSxBQTRCZixRQVl5QixLQVJ6QixDQVprQixnQkFDTCxDQW9CYixVQW5Ca0IsR0FiRyxhQWNGLGlCQXRCSyxDQXVCUSw4QkFDaEMsUUFmeUIsdUNBUk4saUJBQ0Msa0JBQ0QsaUJBQ21CLFFBTXJCLGVBQ0osV0FDWSxFQVB6QixxQkFRYSxXQUNiIiwiZmlsZSI6ImNvbXBvbmVudHMvc2VhcmNoQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9OaWNreUIvRGVza3RvcC9QdWJsaXN0Q2hhbGxlbmdlcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICdyZWFjdC1jb29raWUnO1xuaW1wb3J0IFNlYXJjaFJlc3VsdCBmcm9tICcuL3NlYXJjaFJlc3VsdCc7XG5cbmNsYXNzIFNlYXJjaENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnRva2VuID0gXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZORFFzSW01aGJXVWlPaUpPYVdOcklFSnZZMk4xZW5wcElpd2laVzFoYVd3aU9pSnVhV05vYjJ4aGMzSmliMk5qZFhwNmFVQm5iV0ZwYkM1amIyMGlMQ0psYldGcGJGOTJaWEpwWm1sbFpDSTZkSEoxWlN3aVpXMWhhV3hmZG1WeWFXWnBZMkYwYVc5dVgyTnZaR1VpT2lJM056TTRPREVpTENKd1lYTnpkMjl5WkNJNklpUXlZU1F4TUNSa2NrOXZTbEZyTlM5b1NGbHdVMUZrT1dSMlptSXVRbmxaVDFrdlQyZDBTekU0YzA5WGRtSTFUVWszTGxkekxqRkhkVE40Y1NJc0luQmxjbTFwYzNOcGIyNXpJanB1ZFd4c0xDSjBhVzFsZW05dVpTSTZJa0Z0WlhKcFkyRXZURzl6WDBGdVoyVnNaWE1pTENKcGNGOWhaR1J5WlhOeklqb2lOamN1TWpRekxqSXhOQzR4Tnpjdk16SWlMQ0p2Y0hScGIyNXpJanA3ZlN3aWJXVjBZV1JoZEdFaU9udDlMQ0pzWVhOMFgyeHZaMmx1SWpvaU1qQXhPQzB3TnkweU1GUXdNam93T0Rvd09DNDNNelJhSWl3aWJHRnpkRjloWTNScGRtVWlPaUl5TURFNExUQTNMVEl3VkRBeU9qQTRPakE0TGpjek5Gb2lMQ0oxY0dSaGRHVmtJam9pTWpBeE9DMHdOeTB5TUZRd01qb3dPRG93T0M0M016UmFJaXdpWTNKbFlYUmxaQ0k2SWpJd01UZ3RNRGN0TWpCVU1ESTZNRGc2TURndU56TTBXaUlzSW1saGRDSTZNVFV6TWpBMU1qUTRPU3dpWlhod0lqb3hOVE16TWpZeU1EZzVmUS4xZm5VTWIyN2lsclFGTnQ5VXlqMVNXMlA3YnAybHlEZlhXbl82RC10R3M0XCI7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlucHV0OiBcIlwiLFxuICAgICAgZGF0YTogW10sXG4gICAgICBkaXNwbGF5RGF0YTogW10sXG4gICAgfVxuICAgIHRoaXMucGFyc2VEYXRhRm9ySW5wdXQgPSB0aGlzLnBhcnNlRGF0YUZvcklucHV0LmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVJbnB1dCA9IHRoaXMudXBkYXRlSW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZURhdGFOb2RlID0gdGhpcy5jcmVhdGVEYXRhTm9kZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy8gTk9URTpcbiAgLypcbiAgV2UgaGF2ZSBhZGRlZCBteSBwZXJzb25hbCB0b2tlbiBiZWxvdyBmb3IgZGVtb25zdHJhdGlvbiBwdXJwb3Nlcywgb3RoZXJ3aXNlXG4gIHdlIHdvdWxkIHVzZSByZWFjdC1jb29raWUgdG8gYWNjZXNzIHRoZSB1c2VyJ3MgdG9rZW4gd2l0aDogY29va2llLmxvYWQoJ2Nvbm5lY3Quc2lkJyk7XG4gICovXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnRva2VuID09IFwiXCIpIHtcbiAgICAgIHRoaXMudG9rZW4gPSBjb29raWUubG9hZCgnY29ubmVjdC5zaWQnKTtcbiAgICB9XG5cbiAgICBheGlvcyh7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9wdWJsaXN0LmFpL2FwaS92Mi9qb2JzLmZyb250ZW5kJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uIDogYEJlYXJlci0ke3RoaXMudG9rZW59YCxcbiAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiIDogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgICBcInF1ZXJ5XCI6IFwiaGlcIlxuICAgICAgICB9LFxuICAgICAgfVxuICAgICkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkYXRhOiByZXNwb25zZS5kYXRhLmRhdGFcbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUgKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMuc3RhdGUuaW5wdXQubGVuZ3RoICE9IHByZXZTdGF0ZS5pbnB1dC5sZW5ndGhcbiAgICApe1xuICAgICAgICB0aGlzLnBhcnNlRGF0YUZvcklucHV0KCk7XG4gICAgfVxuICB9XG5cbiAgcGFyc2VEYXRhRm9ySW5wdXQgKCkge1xuICAgIGxldCByZXR1cm5EYXRhID0gW107XG4gICAgaWYgKHRoaXMuc3RhdGUuaW5wdXQubGVuZ3RoID49IDEpIHtcbiAgICAgIHRoaXMuc3RhdGUuZGF0YS5mb3JFYWNoKChhcnRpY2xlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGFydGljbGUpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgYXJ0aWNsZS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc3RhdGUuaW5wdXQpIHx8XG4gICAgICAgICAgYXJ0aWNsZS5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc3RhdGUuaW5wdXQpKXtcbiAgICAgICAgICByZXR1cm5EYXRhLnB1c2godGhpcy5jcmVhdGVEYXRhTm9kZShhcnRpY2xlKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHtkaXNwbGF5RGF0YTogcmV0dXJuRGF0YX0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtkaXNwbGF5RGF0YTogW119KTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVEYXRhTm9kZShhcnRpY2xlKSB7XG4gICAgaWYgKGFydGljbGUudGl0bGUubGVuZ3RoID4gNTApIHtcbiAgICAgIGFydGljbGUudGl0bGUgPSBhcnRpY2xlLnRpdGxlLnNsaWNlKDAsIDUwKSArIFwiLi4uXCI7XG4gICAgfVxuXG4gICAgaWYgKGFydGljbGUuZGVzY3JpcHRpb24ubGVuZ3RoID4gNzUpIHtcbiAgICAgIGFydGljbGUuZGVzY3JpcHRpb24gPSBhcnRpY2xlLmRlc2NyaXB0aW9uLnNsaWNlKDAsIDc1KSArIFwiLi4uXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgPFNlYXJjaFJlc3VsdFxuICAgICAgICBpbWFnZT17YXJ0aWNsZS5pbWFnZV91cmx9XG4gICAgICAgIGRlc2NyaXB0aW9uPXthcnRpY2xlLmRlc2NyaXB0aW9ufVxuICAgICAgICB0aXRsZT17YXJ0aWNsZS50aXRsZX1cbiAgICAgICAgdXJsPXthcnRpY2xlLnVybH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG5cbiAgdXBkYXRlSW5wdXQoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2lucHV0OiBlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJzZWFyY2gtY29udGFpbmVyXCI+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5uZXItc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW46IDUwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLDAsMCwuMik7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWFyY2gtdGl0bGV7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDE2MywxNjMsMTYzKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoLWlucHV0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgIGJvcmRlcjogMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoLWlucHV0OmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaC1pbnB1dDpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoLXJlc3VsdC1jb250YWluZXIge1xuICAgICAgICAgICAgbWFyZ2luOiAzMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoLWNvdW50IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMzVweDtcbiAgICAgICAgICAgIHJpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgY29sb3I6IHJnYigxNjMsMTYzLDE2Myk7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICAgICAgICAgIC5zZWFyY2gtY291bnQge1xuICAgICAgICAgICAgICB0b3A6IDY1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImlubmVyLXNlYXJjaC1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC10aXRsZVwiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInNlYXJjaC1pbnB1dFwicGxhY2Vob2xkZXI9XCJDbGljayBIZXJlIHRvIFNlYXJjaC4uLlwiIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUlucHV0fT48L2lucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWNvdW50XCI+e3RoaXMuc3RhdGUuZGlzcGxheURhdGEubGVuZ3RofSBSZXN1bHRzPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUuZGlzcGxheURhdGF9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvbWFpbj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQ29udGFpbmVyO1xuIl19 */\n/*@ sourceURL=components/searchContainer.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        className: "jsx-1934638587" + " " + "inner-search-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        className: "jsx-1934638587" + " " + "search-title"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        placeholder: "Click Here to Search...",
        onChange: this.updateInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        className: "jsx-1934638587" + " " + "search-input"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        className: "jsx-1934638587" + " " + "search-count"
      }, this.state.displayData.length, " Results"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        className: "jsx-1934638587" + " " + "search-result-container"
      }, this.state.displayData)));
    }
  }]);

  return SearchContainer;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SearchContainer);

/***/ })

})
//# sourceMappingURL=4.8c07bcc062d4feddcd35.hot-update.js.map