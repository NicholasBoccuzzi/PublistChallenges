import React from 'react';
import MainContent from '../components/mainContent';
import Sidebar from '../components/sidebar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-solid-svg-icons'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.tokenStr =
    this.state = {
    };
  }

  ComponentWillMount() {
    library.add(faGoogle);
  }


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

          }
          `}</style>
        <Sidebar></Sidebar>
        <MainContent></MainContent>
      </div>
    )
  }
}

export default IndexPage
