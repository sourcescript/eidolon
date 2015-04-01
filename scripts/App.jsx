import React from 'react';

import Sidebar from './template/Sidebar/index';
import Topbar from './template/Topbar/index';
import Content from './template/Content/index';
import Form from './template/Form/index';

var App = React.createClass({
  render() {
    return (
      <div>
        <Sidebar.Outer>
          <Sidebar.List>
            <Sidebar.Item> Admin Panel </Sidebar.Item>
            <Sidebar.Item> <Sidebar.Link href=".."> Hello </Sidebar.Link> </Sidebar.Item>
            <Sidebar.Item active={true}> <Sidebar.Link href=".."> Hello </Sidebar.Link> </Sidebar.Item>
          </Sidebar.List>
        </Sidebar.Outer>

        <Topbar.Outer>
          <Topbar.Title> In Here </Topbar.Title>
          <Topbar.Inner>
            HEY
          </Topbar.Inner>
        </Topbar.Outer>

        <Content.Outer>
          <Content.Inner>
            <Form.Input />
            <Form.TextArea />
            <Form.Radio />
            <Form.Checkbox />
          </Content.Inner>
        </Content.Outer>
      </div>
    );
  }
});

React.render(<App />, document.body);
