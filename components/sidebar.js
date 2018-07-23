import React from "react";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  ComponentDidMount() {}

  render() {
    return (
      <div className="sidebar-container">
        <style jsx>{`
          .sidebar-container {
            position: relative;
            display: flex;
            flex-direction: row;
            height: auto;
            min-width: 94px;
            min-height: 100vh;
            z-index: 20;
          }
          .center {
            display: block;
            text-align: center;
            justify-content: center;
            margin: 0 auto;
          }
          .logo {
            font-size: 24px;
            font-weight: 600;
            letter-spacing: 1px;
          }
          .logo-container {
            margin-top: 50px;
          }
          .sidebar-sticky {
            position: fixed;
            max-width: 94px;
            min-height: 100vh;
            width: 100%;
            top: 0px;
            left: 0px;
            background: white;
            box-shadow: 0.5px 0 2px 0 #f0f3f4;
          }
          .cog-container {
            font-size: 18px;
            cursor: pointer;
            margin-top: 42px;
            color: black;
          }
          .home-container {
            font-size: 18px;
            cursor: pointer;
            margin-top: 190px;
            color: black;
          }
        `}</style>
        <div className="sidebar-sticky center">
          <a
            href="https://publist.ai/reports"
            className="logo logo-container"
          >
            <img src={require("../.next/static/logo-dark.svg")} />
          </a>
          <a href="https://publist.ai/reports" className="home-container">
            <i className="fa fa-home" />
          </a>
          <a href="https://publist.ai/settings" className="cog-container">
            <i className="fa fa-cog" />
          </a>
        </div>
      </div>
    );
  }
}

export default Sidebar;
