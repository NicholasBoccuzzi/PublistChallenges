import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';


class MainContent extends React.Component {
  constructor(props){
    super(props);

    this.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDQsIm5hbWUiOiJOaWNrIEJvY2N1enppIiwiZW1haWwiOiJuaWNob2xhc3Jib2NjdXp6aUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZW1haWxfdmVyaWZpY2F0aW9uX2NvZGUiOiI3NzM4ODEiLCJwYXNzd29yZCI6IiQyYSQxMCRkck9vSlFrNS9oSFlwU1FkOWR2ZmIuQnlZT1kvT2d0SzE4c09XdmI1TUk3LldzLjFHdTN4cSIsInBlcm1pc3Npb25zIjpudWxsLCJ0aW1lem9uZSI6IkFtZXJpY2EvTG9zX0FuZ2VsZXMiLCJpcF9hZGRyZXNzIjoiNjcuMjQzLjIxNC4xNzcvMzIiLCJvcHRpb25zIjp7fSwibWV0YWRhdGEiOnt9LCJsYXN0X2xvZ2luIjoiMjAxOC0wNy0yMFQwMjowODowOC43MzRaIiwibGFzdF9hY3RpdmUiOiIyMDE4LTA3LTIwVDAyOjA4OjA4LjczNFoiLCJ1cGRhdGVkIjoiMjAxOC0wNy0yMFQwMjowODowOC43MzRaIiwiY3JlYXRlZCI6IjIwMTgtMDctMjBUMDI6MDg6MDguNzM0WiIsImlhdCI6MTUzMjA1MjQ4OSwiZXhwIjoxNTMzMjYyMDg5fQ.1fnUMb27ilrQFNt9Uyj1SW2P7bp2lyDfXWn_6D-tGs4";
    this.state = {

    }
  }

// NOTE:
/*
We have added my personal token below for demonstration purposes, otherwise
we would use react-cookie to access the user's token with: cookie.load('connect.sid');
*/
  componentDidMount() {
    if (this.token == "") {
      this.token = cookie.load('connect.sid');
    }


    axios({
      method: "post",
      url: 'https://publist.ai/api/v2/jobs.frontend',
      headers: {
          Authorization : `Bearer-${this.token}`,
          "Content-type" : "application/json"
        },
      data: {
          "query": "hi"
        },
      }
    ).then((response) => {
      this.setState({
        data: response.data.data
      })
    });
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log(this.state);
  }

  render () {

    return(
      <div className="main-container">
        <style jsx>{`
          .main-container {
            width: 100%;
            max-width: 1600px;
            min-height: 100vh;
            padding: 48px 72px 0;
            background: #F6F9FC;
            z-index: 10;
          }
          .page-title {
            color: var(--color-text-dark);
            font-size: 28px;
            font-weight: 600;
          }
          .flex-center {
            display: flex;
            justify-content: center;
          }
          .flex-one {
            flex: 1;
          }
          .dash-title {
            color: #000;
            font-size: 18px;
            font-weight: 500;
            line-height: 18px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }
          .dash-title-text {
            margin-right: 10px;
          }
          .to-dashboard {
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            color: rgb(187, 187, 187);
            text-decoration: none;
          }
          .dashboard-dash {
            margin-right: 10px;
            font-size: 40px;
          }
          `}
        </style>
        <div className="flex-center">
          <a href="https://publist.ai/nickboccuzzi/reports" className="to-dashboard">
            <i className="fa fa-angle-left dashboard-dash"></i>
            <div className="dashboard-text">Dashboard</div>
          </a>
          <div className="flex-one"></div>
          <div className="dash-title">
            <div className="dash-title-text">Current User</div>
            <i className="fa fa-angle-down "></i>
          </div>
        </div>
      </div>
    )
  }
}

export default MainContent;
