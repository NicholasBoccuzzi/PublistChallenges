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

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__searchResult__["a" /* default */], {
        image: article.image_url,
        description: article.description,
        title: article.title,
        url: article.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      });
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
          lineNumber: 98
        },
        className: "jsx-688194799" + " " + "search-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "688194799",
        css: ".search-container.jsx-688194799{width:100%;margin:auto;}.inner-search-container.jsx-688194799{position:relative;margin:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:white;border-radius:6px;min-height:100vh;box-shadow:0 2px 8px rgba(0,0,0,.2);}.search-title.jsx-688194799{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:34px;width:100%;color:rgb(163,163,163);opacity:.5;}.search-input.jsx-688194799{font-size:34px;border:0px;margin-bottom:4px;margin-top:25px;width:100%;max-width:300px;text-align:center;border-bottom:1px solid white;}.search-input.jsx-688194799:hover{border-bottom:1px solid black;}.search-input.jsx-688194799:focus{outline:none;border-bottom:1px solid black;}.search-result-container.jsx-688194799{margin:30px;}.search-count.jsx-688194799{position:absolute;top:30px;right:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtHb0IsQUFHeUIsQUFJTSxBQVVMLEFBU0UsQUFXZSxBQUdqQixBQUlELEFBR00sV0EzQ0wsQ0F5Q2YsQ0FKZ0MsRUFkbkIsR0FuQkMsQUF3Q0gsS0EzQ1gsR0F1Qm9CLENBcUJQLEdBeENFLEFBNkJmLFFBWUEsS0FSQSxDQWJrQixnQkFDTCxXQUNLLEdBYkcsYUFjRixpQkF0QkssQ0F1QlEsOEJBRWhDLFFBaEJnQyx1Q0FSYixpQkFDQyxrQkFDRCxpQkFDbUIsd0JBTXJCLFlBTGpCLEdBTWEsV0FDWSx1QkFDWixXQUNiIiwiZmlsZSI6ImNvbXBvbmVudHMvc2VhcmNoQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9OaWNreUIvRGVza3RvcC9QdWJsaXN0Q2hhbGxlbmdlcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICdyZWFjdC1jb29raWUnO1xuaW1wb3J0IFNlYXJjaFJlc3VsdCBmcm9tICcuL3NlYXJjaFJlc3VsdCc7XG5cbmNsYXNzIFNlYXJjaENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnRva2VuID0gXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZORFFzSW01aGJXVWlPaUpPYVdOcklFSnZZMk4xZW5wcElpd2laVzFoYVd3aU9pSnVhV05vYjJ4aGMzSmliMk5qZFhwNmFVQm5iV0ZwYkM1amIyMGlMQ0psYldGcGJGOTJaWEpwWm1sbFpDSTZkSEoxWlN3aVpXMWhhV3hmZG1WeWFXWnBZMkYwYVc5dVgyTnZaR1VpT2lJM056TTRPREVpTENKd1lYTnpkMjl5WkNJNklpUXlZU1F4TUNSa2NrOXZTbEZyTlM5b1NGbHdVMUZrT1dSMlptSXVRbmxaVDFrdlQyZDBTekU0YzA5WGRtSTFUVWszTGxkekxqRkhkVE40Y1NJc0luQmxjbTFwYzNOcGIyNXpJanB1ZFd4c0xDSjBhVzFsZW05dVpTSTZJa0Z0WlhKcFkyRXZURzl6WDBGdVoyVnNaWE1pTENKcGNGOWhaR1J5WlhOeklqb2lOamN1TWpRekxqSXhOQzR4Tnpjdk16SWlMQ0p2Y0hScGIyNXpJanA3ZlN3aWJXVjBZV1JoZEdFaU9udDlMQ0pzWVhOMFgyeHZaMmx1SWpvaU1qQXhPQzB3TnkweU1GUXdNam93T0Rvd09DNDNNelJhSWl3aWJHRnpkRjloWTNScGRtVWlPaUl5TURFNExUQTNMVEl3VkRBeU9qQTRPakE0TGpjek5Gb2lMQ0oxY0dSaGRHVmtJam9pTWpBeE9DMHdOeTB5TUZRd01qb3dPRG93T0M0M016UmFJaXdpWTNKbFlYUmxaQ0k2SWpJd01UZ3RNRGN0TWpCVU1ESTZNRGc2TURndU56TTBXaUlzSW1saGRDSTZNVFV6TWpBMU1qUTRPU3dpWlhod0lqb3hOVE16TWpZeU1EZzVmUS4xZm5VTWIyN2lsclFGTnQ5VXlqMVNXMlA3YnAybHlEZlhXbl82RC10R3M0XCI7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlucHV0OiBcIlwiLFxuICAgICAgZGF0YTogW10sXG4gICAgICBkaXNwbGF5RGF0YTogW10sXG4gICAgfVxuICAgIHRoaXMucGFyc2VEYXRhRm9ySW5wdXQgPSB0aGlzLnBhcnNlRGF0YUZvcklucHV0LmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVJbnB1dCA9IHRoaXMudXBkYXRlSW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZURhdGFOb2RlID0gdGhpcy5jcmVhdGVEYXRhTm9kZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy8gTk9URTpcbiAgLypcbiAgV2UgaGF2ZSBhZGRlZCBteSBwZXJzb25hbCB0b2tlbiBiZWxvdyBmb3IgZGVtb25zdHJhdGlvbiBwdXJwb3Nlcywgb3RoZXJ3aXNlXG4gIHdlIHdvdWxkIHVzZSByZWFjdC1jb29raWUgdG8gYWNjZXNzIHRoZSB1c2VyJ3MgdG9rZW4gd2l0aDogY29va2llLmxvYWQoJ2Nvbm5lY3Quc2lkJyk7XG4gICovXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnRva2VuID09IFwiXCIpIHtcbiAgICAgIHRoaXMudG9rZW4gPSBjb29raWUubG9hZCgnY29ubmVjdC5zaWQnKTtcbiAgICB9XG5cbiAgICBheGlvcyh7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9wdWJsaXN0LmFpL2FwaS92Mi9qb2JzLmZyb250ZW5kJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uIDogYEJlYXJlci0ke3RoaXMudG9rZW59YCxcbiAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiIDogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgICBcInF1ZXJ5XCI6IFwiaGlcIlxuICAgICAgICB9LFxuICAgICAgfVxuICAgICkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkYXRhOiByZXNwb25zZS5kYXRhLmRhdGFcbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUgKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMuc3RhdGUuaW5wdXQubGVuZ3RoICE9IHByZXZTdGF0ZS5pbnB1dC5sZW5ndGhcbiAgICApe1xuICAgICAgICB0aGlzLnBhcnNlRGF0YUZvcklucHV0KCk7XG4gICAgfVxuICB9XG5cbiAgcGFyc2VEYXRhRm9ySW5wdXQgKCkge1xuICAgIGxldCByZXR1cm5EYXRhID0gW107XG4gICAgaWYgKHRoaXMuc3RhdGUuaW5wdXQubGVuZ3RoID49IDEpIHtcbiAgICAgIHRoaXMuc3RhdGUuZGF0YS5mb3JFYWNoKChhcnRpY2xlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGFydGljbGUpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgYXJ0aWNsZS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc3RhdGUuaW5wdXQpIHx8XG4gICAgICAgICAgYXJ0aWNsZS5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc3RhdGUuaW5wdXQpKXtcbiAgICAgICAgICByZXR1cm5EYXRhLnB1c2godGhpcy5jcmVhdGVEYXRhTm9kZShhcnRpY2xlKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHtkaXNwbGF5RGF0YTogcmV0dXJuRGF0YX0pO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZURhdGFOb2RlKGFydGljbGUpIHtcbiAgICBpZiAoYXJ0aWNsZS50aXRsZS5sZW5ndGggPiAzMCkge1xuICAgICAgYXJ0aWNsZS50aXRsZSA9IGFydGljbGUudGl0bGUuc2xpY2UoMCwgMzApICsgXCIuLi5cIjtcbiAgICB9XG5cbiAgICBpZiAoYXJ0aWNsZS5kZXNjcmlwdGlvbi5sZW5ndGggPiA1MCkge1xuICAgICAgYXJ0aWNsZS5kZXNjcmlwdGlvbiA9IGFydGljbGUuZGVzY3JpcHRpb24uc2xpY2UoMCwgNTApICsgXCIuLi5cIjtcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICA8U2VhcmNoUmVzdWx0XG4gICAgICAgIGltYWdlPXthcnRpY2xlLmltYWdlX3VybH1cbiAgICAgICAgZGVzY3JpcHRpb249e2FydGljbGUuZGVzY3JpcHRpb259XG4gICAgICAgIHRpdGxlPXthcnRpY2xlLnRpdGxlfVxuICAgICAgICB1cmw9e2FydGljbGUudXJsfVxuICAgICAgLz5cbiAgICApXG4gIH1cblxuICB1cGRhdGVJbnB1dChlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aW5wdXQ6IGUudGFyZ2V0LnZhbHVlfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJzZWFyY2gtY29udGFpbmVyXCI+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5uZXItc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW46IDUwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLDAsMCwuMik7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWFyY2gtdGl0bGV7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgY29sb3I6IHJnYigxNjMsMTYzLDE2Myk7XG4gICAgICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaC1pbnB1dCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgICAgICBib3JkZXI6IDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcblxuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoLWlucHV0OmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaC1pbnB1dDpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoLXJlc3VsdC1jb250YWluZXIge1xuICAgICAgICAgICAgbWFyZ2luOiAzMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoLWNvdW50IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMzBweDtcbiAgICAgICAgICAgIHJpZ2h0OiA1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJpbm5lci1zZWFyY2gtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtdGl0bGVcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzZWFyY2gtaW5wdXRcInBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCIgb25DaGFuZ2U9e3RoaXMudXBkYXRlSW5wdXR9PjwvaW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtY291bnRcIj57dGhpcy5zdGF0ZS5kaXNwbGF5RGF0YS5sZW5ndGh9IFJlc3VsdHM8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1yZXN1bHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5kaXNwbGF5RGF0YX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9tYWluPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hDb250YWluZXI7XG4iXX0= */\n/*@ sourceURL=components/searchContainer.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        className: "jsx-688194799" + " " + "inner-search-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        className: "jsx-688194799" + " " + "search-title"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        placeholder: "Search...",
        onChange: this.updateInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        className: "jsx-688194799" + " " + "search-input"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        className: "jsx-688194799" + " " + "search-count"
      }, this.state.displayData.length, " Results"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        className: "jsx-688194799" + " " + "search-result-container"
      }, this.state.displayData)));
    }
  }]);

  return SearchContainer;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SearchContainer);

/***/ })

})
//# sourceMappingURL=4.734dc847b21b2af4be42.hot-update.js.map