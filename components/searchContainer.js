import React from "react";
import axios from "axios";
import cookie from "react-cookie";
import SearchResult from "./searchResult";

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDQsIm5hbWUiOiJOaWNrIEJvY2N1enppIiwiZW1haWwiOiJuaWNob2xhc3Jib2NjdXp6aUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZW1haWxfdmVyaWZpY2F0aW9uX2NvZGUiOiI3NzM4ODEiLCJwYXNzd29yZCI6IiQyYSQxMCRkck9vSlFrNS9oSFlwU1FkOWR2ZmIuQnlZT1kvT2d0SzE4c09XdmI1TUk3LldzLjFHdTN4cSIsInBlcm1pc3Npb25zIjpudWxsLCJ0aW1lem9uZSI6IkFtZXJpY2EvTG9zX0FuZ2VsZXMiLCJpcF9hZGRyZXNzIjoiNjcuMjQzLjIxNC4xNzcvMzIiLCJvcHRpb25zIjp7fSwibWV0YWRhdGEiOnt9LCJsYXN0X2xvZ2luIjoiMjAxOC0wNy0yMFQwMjowODowOC43MzRaIiwibGFzdF9hY3RpdmUiOiIyMDE4LTA3LTIwVDAyOjA4OjA4LjczNFoiLCJ1cGRhdGVkIjoiMjAxOC0wNy0yMFQwMjowODowOC43MzRaIiwiY3JlYXRlZCI6IjIwMTgtMDctMjBUMDI6MDg6MDguNzM0WiIsImlhdCI6MTUzMjA1MjQ4OSwiZXhwIjoxNTMzMjYyMDg5fQ.1fnUMb27ilrQFNt9Uyj1SW2P7bp2lyDfXWn_6D-tGs4";
    this.state = {
      input: "",
      data: [],
      displayData: []
    };
    this.parseDataForInput = this.parseDataForInput.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.createDataNode = this.createDataNode.bind(this);
  }

  // NOTE:
  /*
  We have added my personal token below for demonstration purposes, otherwise
  we would use react-cookie to access the user's token with: cookie.load('connect.sid');
  */
  componentDidMount() {
    if (this.token == "") {
      this.token = cookie.load("connect.sid");
    }

    axios({
      method: "post",
      url: "https://publist.ai/api/v2/jobs.frontend",
      headers: {
        Authorization: `Bearer-${this.token}`,
        "Content-type": "application/json"
      },
      data: {
        query: "hi"
      }
    }).then(response => {
      this.setState({
        data: response.data.data
      });
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.input.length != prevState.input.length) {
      this.parseDataForInput();
    }
  }

  parseDataForInput() {
    let returnData = [];
    if (this.state.input.length >= 1) {
      this.state.data.forEach(article => {
        console.log(article);
        if (
          article.title.toLowerCase().includes(this.state.input) ||
          article.description.toLowerCase().includes(this.state.input)
        ) {
          returnData.push(this.createDataNode(article));
        }
      });

      this.setState({ displayData: returnData });
    } else {
      this.setState({ displayData: [] });
    }
  }

  createDataNode(article) {
    if (article.title.length > 50) {
      article.title = article.title.slice(0, 50) + "...";
    }

    if (article.description.length > 75) {
      article.description = article.description.slice(0, 75) + "...";
    }

    return (
      <SearchResult
        image={article.image_url}
        description={article.description}
        title={article.title}
        url={article.url}
      />
    );
  }

  updateInput(e) {
    this.setState({ input: e.target.value.toLowerCase() });
  }

  render() {
    return (
      <main className="search-container">
        <style jsx>{`
          .search-container {
            width: 100%;
            margin: auto;
          }
          .inner-search-container {
            position: relative;
            margin: 50px;
            display: flex;
            flex-direction: column;
            background: white;
            border-radius: 6px;
            min-height: 100vh;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          }
          .search-title {
            display: flex;
            flex-direction: row;
            justify-content: center;
            font-size: 34px;
            width: 100%;
            color: rgb(163, 163, 163);
            opacity: 0.5;
          }
          .search-input {
            font-size: 28px;
            border: 0px;
            margin-bottom: 4px;
            margin-top: 25px;
            width: 100%;
            max-width: 300px;
            text-align: center;
            border-bottom: 1px solid white;
          }
          .search-input:hover {
            border-bottom: 1px solid black;
          }
          .search-input:focus {
            outline: none;
            border-bottom: 1px solid black;
          }
          .search-result-container {
            margin: 30px;
          }
          .search-count {
            position: absolute;
            top: 35px;
            right: 50px;
            color: rgb(163, 163, 163);
          }
          @media only screen and (max-width: 900px) {
            .search-count {
              top: 75px;
            }
          }
        `}</style>
        <section className="inner-search-container">
          <div className="search-title">
            <input
              className="search-input"
              placeholder="Type Here to Search..."
              onChange={this.updateInput}
            />
          </div>
          <div className="search-count">
            {this.state.displayData.length} Results
          </div>
          <div className="search-result-container">
            {this.state.displayData}
          </div>
        </section>
      </main>
    );
  }
}

export default SearchContainer;
