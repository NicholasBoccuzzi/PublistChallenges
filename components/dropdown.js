import React from "react";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.checkHidden = this.checkHidden.bind(this);
    this.doNothing = this.doNothing.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.isHidden) {
      let returnObj = {
        isHidden: props.isHidden
      };
      return returnObj;
    } else {
      return {
        isHidden: false
      };
    }
  }

  componentDidUpdate(prevProps, prevState) {}

  checkHidden() {
    if (this.state.isHidden === true) {
      return "hidden";
    } else {
      return "";
    }
  }

  doNothing() {
    return;
  }

  render() {
    console.log(this.state.isHidden);
    return (
      <div
        onClick={this.doNothing}
        className={`current-user-info ${this.checkHidden()}`}
      >
        <style jsx>{`
          .current-user-info {
            position: absolute;
            box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
            display: flex;
            flex-direction: column;
            overflow: hidden;
            width: 200px;
            height: 150px;
            background: white;
            z-index: 100;
            top: 100px;
            right: 75px;
            pointer: default;
          }
          .hidden {
            display: none;
          }
          a:hover {
            background: rgba(239, 239, 239, 0.3);
            color: black;
          }
          .current-user-reports {
            font-size: 14px;
            padding: 10px 20px;
          }
          .current-user-settings {
            font-size: 14px;
            padding: 10px 20px;
          }
          .current-user-name {
            padding: 10px 20px 0px 20px;
            font-size: 16px;
          }
          .current-user-email {
            padding: 10px 20px;
            font-size: 12px;
            color: rgba(239, 239, 239);
          }
        `}</style>
        <div className="current-user-name">Current User</div>
        <div className="current-user-email">CurrentUser@gmail.com</div>
        <a className="current-user-reports" href="https://publist.ai/reports">
          Dashboard
        </a>
        <a className="current-user-settings" href="https://publist.ai/settings">
          Settings
        </a>
      </div>
    );
  }
}

export default Dropdown;
