import React from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

var App = React.createClass({
  render() {
    return (
      <div>
        <Sidebar>
          Something
        </Sidebar>

        <Topbar>
          In Here
        </Topbar>
      </div>
    );
  }
});

React.render(<App />, document.body);
