require("babel/polyfill");

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
            <Sidebar.Item.Title> Admin Panel </Sidebar.Item.Title>
            <Sidebar.Item.Outer>
              <Sidebar.Item.Link href="..">
                <Sidebar.Item.Icon><i className="fa fa-home" /></Sidebar.Item.Icon>
                Home
              </Sidebar.Item.Link>
            </Sidebar.Item.Outer>
            <Sidebar.Item.Outer active={true}> <Sidebar.Item.Link href=".."> Manage Account </Sidebar.Item.Link> </Sidebar.Item.Outer>
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
          </Content.Inner>
        </Content.Outer>
      </div>
    );
  }
});

React.render(<App />, document.body);
