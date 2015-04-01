import React from 'react';

import Sidebar from './template/Sidebar/Sidebar';
import Topbar from './template/Topbar/Topbar';
import Content from './template/Content/index';

var App = React.createClass({
  render() {
    return (
      <div>
        <Sidebar>
          Something Here
        </Sidebar>

        <Topbar>
          In Here
        </Topbar>

        <Content.Outer>
          <Content.Inner>
            Heyaa
          </Content.Inner>
        </Content.Outer>
      </div>
    );
  }
});

React.render(<App />, document.body);
