import React from "react";
import axios from "axios";
import cookie from "react-cookie";
import SearchContainer from "./searchContainer";
import Dropdown from "./dropdown";

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    if (this.state.isHidden === true) {
      this.setState({ isHidden: false });
    } else {
      this.setState({ isHidden: true });
    }
  }

  render() {
    return (
      <div className="main-container">
        <style jsx>
          {`
            .main-container {
              width: 100%;
              max-width: 1600px;
              min-height: 100vh;
              min-width: 575px;
              padding: 48px 72px 0;
              background: #f6f9fc;
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
          <a
            href="https://publist.ai/nickboccuzzi/reports"
            className="to-dashboard"
          >
            <i className="fa fa-angle-left dashboard-dash" />
            <div className="dashboard-text">Dashboard</div>
          </a>
          <div className="flex-one" />
          <div className="dash-title" onClick={this.toggleModal}>
            <div className="dash-title-text">Current User</div>
            <i className="fa fa-angle-down " />
          </div>
          <Dropdown isHidden={this.state.isHidden} />
        </div>
        <SearchContainer />
      </div>
    );
  }
}

export default MainContent;
