import React from "react";
import MainContent from "../components/mainContent";
import Sidebar from "../components/sidebar";

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.tokenStr = this.state = {};
  }

  ComponentDidMount() {}

  render() {
    return (
      <div className="flex">
        <style jsx global>{`
          .flex {
            display: flex;
            justify-content: flex-start;
            height: 100%;
          }
          html {
            padding: 0px;
            margin: 0px;
            height: 100vh;
          }
          body {
            margin: 0px;
            height: 100vh;
            font-family: Roboto;
          }
          a {
            display: block;
            color: black;
            text-decoration: none;
          }
          a:hover {
            color: rgb(163, 163, 163);
            text-decoration: underline;
          }
        `}</style>
        <head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
          />
        </head>
        <Sidebar />
        <MainContent />
      </div>
    );
  }
}

export default IndexPage;
