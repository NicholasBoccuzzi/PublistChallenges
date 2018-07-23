import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import SearchContainer from './searchContainer';


class MainContent extends React.Component {
  constructor(props){
    super(props);
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
            display: flex;
            flex-direction: column;
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
            margin-right: 25px;
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
        <SearchContainer />
      </div>
    )
  }
}

export default MainContent;
