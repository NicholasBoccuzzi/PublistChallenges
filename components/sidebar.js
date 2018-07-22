import React from 'react';

class Sidebar extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  ComponentDidMount() {

  }

  render () {
    return(
      <div className="sidebar-container">
        <style jsx>{`
          .sidebar-container {
            display: flex;
            flex-direction: row;
            height: auto;
            box-shadow: 0.5px 0 2px 0 #f0f3f4;
            min-width: 220px;
            padding: 0px 30px;
            min-height: 100vh;
            z-index: 20;
          }
          .center {
            display: flex;
            text-align: center;
            justify-content: center;
            margin: 0 auto;
          }
          .logo {
            font-size: 24px;
            font-weight: 600;
          }
          .logo-container {
            margin-top: 50px;
          }
          `}</style>
          <div className="center">
            <div className="logo logo-container">
              <img src="logo.svg"></img>
              Publist
            </div>
          </div>
      </div>
    )
  }
}

export default Sidebar;
