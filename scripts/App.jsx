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
            <Sidebar.Item.Title> Main </Sidebar.Item.Title>
            <Sidebar.Item.Outer>
              <Sidebar.Item.Link href="..">
                <Sidebar.Item.Icon><i className="fa fa-home" /></Sidebar.Item.Icon>
                Dashboard
              </Sidebar.Item.Link>
            </Sidebar.Item.Outer>

            <Sidebar.Item.Outer active={false}>
              <Sidebar.Item.Link href="..">
                <Sidebar.Item.Icon><i className="fa fa-cog" /></Sidebar.Item.Icon>
                Manage Account
              </Sidebar.Item.Link>
            </Sidebar.Item.Outer>

            <Sidebar.Item.Outer active={true}>
              <Sidebar.Item.Link href="..">
                <Sidebar.Item.Icon><i className="fa fa-users" /></Sidebar.Item.Icon>
                Manage Users
              </Sidebar.Item.Link>
            </Sidebar.Item.Outer>

            <Sidebar.Item.Outer active={false}>
              <Sidebar.Item.Link href="..">
                <Sidebar.Item.Icon><i className="fa fa-envelope-o" /></Sidebar.Item.Icon>
                Messages
              </Sidebar.Item.Link>
            </Sidebar.Item.Outer>
          </Sidebar.List>

          <Sidebar.List>
            <Sidebar.Item.Title> Main </Sidebar.Item.Title>
            <Sidebar.Item.Outer active={false}>
              <Sidebar.Item.Link href="..">
                <Sidebar.Item.Icon><i className="fa fa-map-marker" /></Sidebar.Item.Icon>
                Maps
              </Sidebar.Item.Link>
            </Sidebar.Item.Outer>

            <Sidebar.Item.Outer active={false}>
              <Sidebar.Item.Link href="..">
                <Sidebar.Item.Icon><i className="fa fa-calendar-o" /></Sidebar.Item.Icon>
                Calendar
              </Sidebar.Item.Link>
            </Sidebar.Item.Outer>

            <Sidebar.Item.Outer active={false}>
              <Sidebar.Item.Link href="..">
                <Sidebar.Item.Icon><i className="fa fa-th" /></Sidebar.Item.Icon>
                List
              </Sidebar.Item.Link>
            </Sidebar.Item.Outer>
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
