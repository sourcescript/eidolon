import React from 'react';

import Sidebar from './template/Sidebar/index';
import Topbar from './template/Topbar/Topbar';
import Content from './template/Content/index';
import Form from './template/Form/index';

var App = React.createClass({
  render() {
    return (
      <div>
        <Sidebar.Outer>
          <Sidebar.List>
            <Sidebar.Item active={true}> Admin Panel </Sidebar.Item>
            <Sidebar.Item active={true}> <Sidebar.Link href=".."> Hello </Sidebar.Link> </Sidebar.Item>
            <Sidebar.Item active={true}> <Sidebar.Link href=".."> Hello </Sidebar.Link> </Sidebar.Item>
          </Sidebar.List>
        </Sidebar.Outer>

        <Topbar>
          In Here
        </Topbar>

        <Content.Outer>
          <Content.Inner>
            <Form.Input />
          </Content.Inner>
        </Content.Outer>
      </div>
    );
  }
});

React.render(<App />, document.body);
