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
        input: e.target.value
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
        className: "jsx-985263427" + " " + "search-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "985263427",
        css: ".search-container.jsx-985263427{width:100%;margin:auto;}.inner-search-container.jsx-985263427{position:relative;margin:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:white;border-radius:6px;min-height:100vh;box-shadow:0 2px 8px rgba(0,0,0,.2);}.search-title.jsx-985263427{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:34px;width:100%;color:rgb(163,163,163);opacity:.5;}.search-input.jsx-985263427{font-size:28px;border:0px;margin-bottom:4px;margin-top:25px;width:100%;max-width:300px;text-align:center;border-bottom:1px solid white;}.search-input.jsx-985263427:hover{border-bottom:1px solid black;}.search-input.jsx-985263427:focus{outline:none;border-bottom:1px solid black;}.search-result-container.jsx-985263427{margin:30px;}.search-count.jsx-985263427{position:absolute;top:35px;right:50px;color:rgb(163,163,163);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Hb0IsQUFHeUIsQUFJTSxBQVVMLEFBU0UsQUFVZSxBQUdqQixBQUlELEFBR00sV0ExQ0wsQ0F3Q2YsQ0FKZ0MsRUFibkIsR0FuQkMsQUF1Q0gsS0ExQ1gsR0F1Qm9CLENBb0JQLEdBdkNFLEFBNEJmLFFBWXlCLEtBUnpCLENBWmtCLGdCQUNMLENBb0JiLFVBbkJrQixHQWJHLGFBY0YsaUJBdEJLLENBdUJRLDhCQUNoQyxRQWZ5Qix1Q0FSTixpQkFDQyxrQkFDRCxpQkFDbUIsUUFNckIsZUFDSixXQUNZLEVBUHpCLHFCQVFhLFdBQ2IiLCJmaWxlIjoiY29tcG9uZW50cy9zZWFyY2hDb250YWluZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL05pY2t5Qi9EZXNrdG9wL1B1Ymxpc3RDaGFsbGVuZ2VzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgY29va2llIGZyb20gJ3JlYWN0LWNvb2tpZSc7XG5pbXBvcnQgU2VhcmNoUmVzdWx0IGZyb20gJy4vc2VhcmNoUmVzdWx0JztcblxuY2xhc3MgU2VhcmNoQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMudG9rZW4gPSBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNk5EUXNJbTVoYldVaU9pSk9hV05ySUVKdlkyTjFlbnBwSWl3aVpXMWhhV3dpT2lKdWFXTm9iMnhoYzNKaWIyTmpkWHA2YVVCbmJXRnBiQzVqYjIwaUxDSmxiV0ZwYkY5MlpYSnBabWxsWkNJNmRISjFaU3dpWlcxaGFXeGZkbVZ5YVdacFkyRjBhVzl1WDJOdlpHVWlPaUkzTnpNNE9ERWlMQ0p3WVhOemQyOXlaQ0k2SWlReVlTUXhNQ1JrY2s5dlNsRnJOUzlvU0Zsd1UxRmtPV1IyWm1JdVFubFpUMWt2VDJkMFN6RTRjMDlYZG1JMVRVazNMbGR6TGpGSGRUTjRjU0lzSW5CbGNtMXBjM05wYjI1eklqcHVkV3hzTENKMGFXMWxlbTl1WlNJNklrRnRaWEpwWTJFdlRHOXpYMEZ1WjJWc1pYTWlMQ0pwY0Y5aFpHUnlaWE56SWpvaU5qY3VNalF6TGpJeE5DNHhOemN2TXpJaUxDSnZjSFJwYjI1eklqcDdmU3dpYldWMFlXUmhkR0VpT250OUxDSnNZWE4wWDJ4dloybHVJam9pTWpBeE9DMHdOeTB5TUZRd01qb3dPRG93T0M0M016UmFJaXdpYkdGemRGOWhZM1JwZG1VaU9pSXlNREU0TFRBM0xUSXdWREF5T2pBNE9qQTRMamN6TkZvaUxDSjFjR1JoZEdWa0lqb2lNakF4T0Mwd055MHlNRlF3TWpvd09Eb3dPQzQzTXpSYUlpd2lZM0psWVhSbFpDSTZJakl3TVRndE1EY3RNakJVTURJNk1EZzZNRGd1TnpNMFdpSXNJbWxoZENJNk1UVXpNakExTWpRNE9Td2laWGh3SWpveE5UTXpNall5TURnNWZRLjFmblVNYjI3aWxyUUZOdDlVeWoxU1cyUDdicDJseURmWFduXzZELXRHczRcIjtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5wdXQ6IFwiXCIsXG4gICAgICBkYXRhOiBbXSxcbiAgICAgIGRpc3BsYXlEYXRhOiBbXSxcbiAgICB9XG4gICAgdGhpcy5wYXJzZURhdGFGb3JJbnB1dCA9IHRoaXMucGFyc2VEYXRhRm9ySW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZUlucHV0ID0gdGhpcy51cGRhdGVJbnB1dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlRGF0YU5vZGUgPSB0aGlzLmNyZWF0ZURhdGFOb2RlLmJpbmQodGhpcyk7XG4gIH1cblxuICAvLyBOT1RFOlxuICAvKlxuICBXZSBoYXZlIGFkZGVkIG15IHBlcnNvbmFsIHRva2VuIGJlbG93IGZvciBkZW1vbnN0cmF0aW9uIHB1cnBvc2VzLCBvdGhlcndpc2VcbiAgd2Ugd291bGQgdXNlIHJlYWN0LWNvb2tpZSB0byBhY2Nlc3MgdGhlIHVzZXIncyB0b2tlbiB3aXRoOiBjb29raWUubG9hZCgnY29ubmVjdC5zaWQnKTtcbiAgKi9cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMudG9rZW4gPT0gXCJcIikge1xuICAgICAgdGhpcy50b2tlbiA9IGNvb2tpZS5sb2FkKCdjb25uZWN0LnNpZCcpO1xuICAgIH1cblxuICAgIGF4aW9zKHtcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICB1cmw6ICdodHRwczovL3B1Ymxpc3QuYWkvYXBpL3YyL2pvYnMuZnJvbnRlbmQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb24gOiBgQmVhcmVyLSR7dGhpcy50b2tlbn1gLFxuICAgICAgICAgIFwiQ29udGVudC10eXBlXCIgOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICAgIFwicXVlcnlcIjogXCJoaVwiXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEuZGF0YVxuICAgICAgfSlcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5zdGF0ZS5pbnB1dC5sZW5ndGggIT0gcHJldlN0YXRlLmlucHV0Lmxlbmd0aFxuICAgICl7XG4gICAgICAgIHRoaXMucGFyc2VEYXRhRm9ySW5wdXQoKTtcbiAgICB9XG4gIH1cblxuICBwYXJzZURhdGFGb3JJbnB1dCAoKSB7XG4gICAgbGV0IHJldHVybkRhdGEgPSBbXTtcbiAgICBpZiAodGhpcy5zdGF0ZS5pbnB1dC5sZW5ndGggPj0gMSkge1xuICAgICAgdGhpcy5zdGF0ZS5kYXRhLmZvckVhY2goKGFydGljbGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYXJ0aWNsZSk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBhcnRpY2xlLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zdGF0ZS5pbnB1dCkgfHxcbiAgICAgICAgICBhcnRpY2xlLmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zdGF0ZS5pbnB1dCkpe1xuICAgICAgICAgIHJldHVybkRhdGEucHVzaCh0aGlzLmNyZWF0ZURhdGFOb2RlKGFydGljbGUpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Rpc3BsYXlEYXRhOiByZXR1cm5EYXRhfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Rpc3BsYXlEYXRhOiBbXX0pO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZURhdGFOb2RlKGFydGljbGUpIHtcbiAgICBpZiAoYXJ0aWNsZS50aXRsZS5sZW5ndGggPiA1MCkge1xuICAgICAgYXJ0aWNsZS50aXRsZSA9IGFydGljbGUudGl0bGUuc2xpY2UoMCwgNTApICsgXCIuLi5cIjtcbiAgICB9XG5cbiAgICBpZiAoYXJ0aWNsZS5kZXNjcmlwdGlvbi5sZW5ndGggPiA3NSkge1xuICAgICAgYXJ0aWNsZS5kZXNjcmlwdGlvbiA9IGFydGljbGUuZGVzY3JpcHRpb24uc2xpY2UoMCwgNzUpICsgXCIuLi5cIjtcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICA8U2VhcmNoUmVzdWx0XG4gICAgICAgIGltYWdlPXthcnRpY2xlLmltYWdlX3VybH1cbiAgICAgICAgZGVzY3JpcHRpb249e2FydGljbGUuZGVzY3JpcHRpb259XG4gICAgICAgIHRpdGxlPXthcnRpY2xlLnRpdGxlfVxuICAgICAgICB1cmw9e2FydGljbGUudXJsfVxuICAgICAgLz5cbiAgICApXG4gIH1cblxuICB1cGRhdGVJbnB1dChlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aW5wdXQ6IGUudGFyZ2V0LnZhbHVlfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJzZWFyY2gtY29udGFpbmVyXCI+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5uZXItc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW46IDUwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLDAsMCwuMik7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWFyY2gtdGl0bGV7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDE2MywxNjMsMTYzKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoLWlucHV0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgIGJvcmRlcjogMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoLWlucHV0OmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaC1pbnB1dDpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoLXJlc3VsdC1jb250YWluZXIge1xuICAgICAgICAgICAgbWFyZ2luOiAzMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoLWNvdW50IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMzVweDtcbiAgICAgICAgICAgIHJpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgY29sb3I6IHJnYigxNjMsMTYzLDE2Myk7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImlubmVyLXNlYXJjaC1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC10aXRsZVwiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInNlYXJjaC1pbnB1dFwicGxhY2Vob2xkZXI9XCJDbGljayBIZXJlIHRvIFNlYXJjaC4uLlwiIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUlucHV0fT48L2lucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWNvdW50XCI+e3RoaXMuc3RhdGUuZGlzcGxheURhdGEubGVuZ3RofSBSZXN1bHRzPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUuZGlzcGxheURhdGF9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvbWFpbj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQ29udGFpbmVyO1xuIl19 */\n/*@ sourceURL=components/searchContainer.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        className: "jsx-985263427" + " " + "inner-search-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        className: "jsx-985263427" + " " + "search-title"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        placeholder: "Click Here to Search...",
        onChange: this.updateInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        className: "jsx-985263427" + " " + "search-input"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        className: "jsx-985263427" + " " + "search-count"
      }, this.state.displayData.length, " Results"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        className: "jsx-985263427" + " " + "search-result-container"
      }, this.state.displayData)));
    }
  }]);

  return SearchContainer;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SearchContainer);

/***/ })

})
//# sourceMappingURL=4.ed100fd03627b836bffb.hot-update.js.map