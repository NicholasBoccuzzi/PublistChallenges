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
        input: e.target.value
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
        className: "jsx-2165750435" + " " + "search-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2165750435",
        css: ".search-container.jsx-2165750435{width:100%;margin:auto;}.inner-search-container.jsx-2165750435{position:relative;margin:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:white;border-radius:6px;min-height:100vh;box-shadow:0 2px 8px rgba(0,0,0,.2);}.search-title.jsx-2165750435{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:34px;width:100%;color:rgb(163,163,163);opacity:.5;}.search-input.jsx-2165750435{font-size:34px;border:0px;margin-bottom:4px;margin-top:25px;width:100%;max-width:300px;text-align:center;border-bottom:1px solid white;}.search-input.jsx-2165750435:hover{border-bottom:1px solid black;}.search-input.jsx-2165750435:focus{outline:none;border-bottom:1px solid black;}.search-result-container.jsx-2165750435{margin:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Hb0IsQUFHeUIsQUFJTSxBQVVMLEFBUUUsQUFXZSxBQUdqQixBQUlELFdBdkNDLENBd0NmLENBSmdDLEVBZG5CLEdBbEJDLEtBSGQsR0FzQm9CLElBbEJMLEFBNEJmLGFBSUEsQ0Fia0IsZ0JBQ0wsV0FDSyxHQVpPLGFBYU4saUJBckJLLENBc0JRLDhCQUVoQyxzQ0FmaUIsU0FSRSxNQVNOLFdBUk8sQUFTSyxrQkFSTixLQVNOLFdBQ2IsQ0FUc0Msb0NBQ3RDIiwiZmlsZSI6ImNvbXBvbmVudHMvc2VhcmNoQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9OaWNreUIvRGVza3RvcC9QdWJsaXN0Q2hhbGxlbmdlcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICdyZWFjdC1jb29raWUnO1xuaW1wb3J0IFNlYXJjaFJlc3VsdCBmcm9tICcuL3NlYXJjaFJlc3VsdCc7XG5cbmNsYXNzIFNlYXJjaENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnRva2VuID0gXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZORFFzSW01aGJXVWlPaUpPYVdOcklFSnZZMk4xZW5wcElpd2laVzFoYVd3aU9pSnVhV05vYjJ4aGMzSmliMk5qZFhwNmFVQm5iV0ZwYkM1amIyMGlMQ0psYldGcGJGOTJaWEpwWm1sbFpDSTZkSEoxWlN3aVpXMWhhV3hmZG1WeWFXWnBZMkYwYVc5dVgyTnZaR1VpT2lJM056TTRPREVpTENKd1lYTnpkMjl5WkNJNklpUXlZU1F4TUNSa2NrOXZTbEZyTlM5b1NGbHdVMUZrT1dSMlptSXVRbmxaVDFrdlQyZDBTekU0YzA5WGRtSTFUVWszTGxkekxqRkhkVE40Y1NJc0luQmxjbTFwYzNOcGIyNXpJanB1ZFd4c0xDSjBhVzFsZW05dVpTSTZJa0Z0WlhKcFkyRXZURzl6WDBGdVoyVnNaWE1pTENKcGNGOWhaR1J5WlhOeklqb2lOamN1TWpRekxqSXhOQzR4Tnpjdk16SWlMQ0p2Y0hScGIyNXpJanA3ZlN3aWJXVjBZV1JoZEdFaU9udDlMQ0pzWVhOMFgyeHZaMmx1SWpvaU1qQXhPQzB3TnkweU1GUXdNam93T0Rvd09DNDNNelJhSWl3aWJHRnpkRjloWTNScGRtVWlPaUl5TURFNExUQTNMVEl3VkRBeU9qQTRPakE0TGpjek5Gb2lMQ0oxY0dSaGRHVmtJam9pTWpBeE9DMHdOeTB5TUZRd01qb3dPRG93T0M0M016UmFJaXdpWTNKbFlYUmxaQ0k2SWpJd01UZ3RNRGN0TWpCVU1ESTZNRGc2TURndU56TTBXaUlzSW1saGRDSTZNVFV6TWpBMU1qUTRPU3dpWlhod0lqb3hOVE16TWpZeU1EZzVmUS4xZm5VTWIyN2lsclFGTnQ5VXlqMVNXMlA3YnAybHlEZlhXbl82RC10R3M0XCI7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlucHV0OiBcIlwiLFxuICAgICAgZGF0YTogW10sXG4gICAgICBkaXNwbGF5RGF0YTogW10sXG4gICAgfVxuICAgIHRoaXMucGFyc2VEYXRhRm9ySW5wdXQgPSB0aGlzLnBhcnNlRGF0YUZvcklucHV0LmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVJbnB1dCA9IHRoaXMudXBkYXRlSW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZURhdGFOb2RlID0gdGhpcy5jcmVhdGVEYXRhTm9kZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy8gTk9URTpcbiAgLypcbiAgV2UgaGF2ZSBhZGRlZCBteSBwZXJzb25hbCB0b2tlbiBiZWxvdyBmb3IgZGVtb25zdHJhdGlvbiBwdXJwb3Nlcywgb3RoZXJ3aXNlXG4gIHdlIHdvdWxkIHVzZSByZWFjdC1jb29raWUgdG8gYWNjZXNzIHRoZSB1c2VyJ3MgdG9rZW4gd2l0aDogY29va2llLmxvYWQoJ2Nvbm5lY3Quc2lkJyk7XG4gICovXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnRva2VuID09IFwiXCIpIHtcbiAgICAgIHRoaXMudG9rZW4gPSBjb29raWUubG9hZCgnY29ubmVjdC5zaWQnKTtcbiAgICB9XG5cbiAgICBheGlvcyh7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9wdWJsaXN0LmFpL2FwaS92Mi9qb2JzLmZyb250ZW5kJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uIDogYEJlYXJlci0ke3RoaXMudG9rZW59YCxcbiAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiIDogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgICBcInF1ZXJ5XCI6IFwiaGlcIlxuICAgICAgICB9LFxuICAgICAgfVxuICAgICkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkYXRhOiByZXNwb25zZS5kYXRhLmRhdGFcbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUgKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMuc3RhdGUuaW5wdXQubGVuZ3RoICE9IHByZXZTdGF0ZS5pbnB1dC5sZW5ndGhcbiAgICApe1xuICAgICAgICB0aGlzLnBhcnNlRGF0YUZvcklucHV0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZGlzcGxheURhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHBhcnNlRGF0YUZvcklucHV0ICgpIHtcbiAgICBsZXQgcmV0dXJuRGF0YSA9IFtdO1xuICAgIGlmICh0aGlzLnN0YXRlLmlucHV0Lmxlbmd0aCA+PSAxKSB7XG4gICAgICB0aGlzLnN0YXRlLmRhdGEuZm9yRWFjaCgoYXJ0aWNsZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhhcnRpY2xlKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGFydGljbGUudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnN0YXRlLmlucHV0KSB8fFxuICAgICAgICAgIGFydGljbGUuZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnN0YXRlLmlucHV0KSl7XG4gICAgICAgICAgcmV0dXJuRGF0YS5wdXNoKHRoaXMuY3JlYXRlRGF0YU5vZGUoYXJ0aWNsZSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGlzcGxheURhdGE6IHJldHVybkRhdGF9KTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVEYXRhTm9kZShhcnRpY2xlKSB7XG4gICAgaWYgKGFydGljbGUudGl0bGUubGVuZ3RoID4gMzApIHtcbiAgICAgIGFydGljbGUudGl0bGUgPSBhcnRpY2xlLnRpdGxlLnNsaWNlKDAsIDMwKSArIFwiLi4uXCI7XG4gICAgfVxuXG4gICAgaWYgKGFydGljbGUuZGVzY3JpcHRpb24ubGVuZ3RoID4gNTApIHtcbiAgICAgIGFydGljbGUuZGVzY3JpcHRpb24gPSBhcnRpY2xlLmRlc2NyaXB0aW9uLnNsaWNlKDAsIDUwKSArIFwiLi4uXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgPFNlYXJjaFJlc3VsdFxuICAgICAgICBpbWFnZT17YXJ0aWNsZS5pbWFnZV91cmx9XG4gICAgICAgIGRlc2NyaXB0aW9uPXthcnRpY2xlLmRlc2NyaXB0aW9ufVxuICAgICAgICB0aXRsZT17YXJ0aWNsZS50aXRsZX1cbiAgICAgICAgdXJsPXthcnRpY2xlLnVybH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG5cbiAgdXBkYXRlSW5wdXQoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2lucHV0OiBlLnRhcmdldC52YWx1ZX0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwic2VhcmNoLWNvbnRhaW5lclwiPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnNlYXJjaC1jb250YWluZXIge1xuICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmlubmVyLXNlYXJjaC1jb250YWluZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWFyZ2luOiA1MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwwLDAsLjIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoLXRpdGxle1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDE2MywxNjMsMTYzKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoLWlucHV0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICAgICAgICAgIGJvcmRlcjogMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuXG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWFyY2gtaW5wdXQ6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoLWlucHV0OmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWFyY2gtcmVzdWx0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW46IDMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImlubmVyLXNlYXJjaC1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC10aXRsZVwiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInNlYXJjaC1pbnB1dFwicGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiBvbkNoYW5nZT17dGhpcy51cGRhdGVJbnB1dH0+PC9pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1yZXN1bHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5kaXNwbGF5RGF0YX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9tYWluPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hDb250YWluZXI7XG4iXX0= */\n/*@ sourceURL=components/searchContainer.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        className: "jsx-2165750435" + " " + "inner-search-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        className: "jsx-2165750435" + " " + "search-title"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        placeholder: "Search...",
        onChange: this.updateInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        className: "jsx-2165750435" + " " + "search-input"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        className: "jsx-2165750435" + " " + "search-result-container"
      }, this.state.displayData)));
    }
  }]);

  return SearchContainer;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SearchContainer);

/***/ })

})
//# sourceMappingURL=4.3b474a8e8fb58e6fe53a.hot-update.js.map