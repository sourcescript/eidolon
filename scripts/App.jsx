require("babel/polyfill");

import React from 'react';
import Sidebar from './template/Sidebar/index';
import Topbar from './template/Topbar/index';
import Content from './template/Content/index';
import Form from './template/Form/index';
import Button from './template/Button/index';

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
            <Sidebar.Item.Title> More </Sidebar.Item.Title>
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
          <Content.Body>
            <h3>
              Dashboard
              <small> This is a quick overview of some features </small>
            </h3>
          </Content.Body>

          <Content.Inner>
            <Content.Body>
              <h6 className="title"> My Files </h6>
              <h2> Heading 2 </h2>
              <h3> Heading 3 </h3>
              <Form.Input />
              <Button.Default> Close </Button.Default>
              <Button.Primary block={true}> Submit </Button.Primary>
              <Button.Warning size={'lg'}> Cancel </Button.Warning>
              <Button.Success size={'xs'}> Save </Button.Success>
              <Button.Danger size={'sm'}> Remove </Button.Danger>
              <Button.Blocked> Blocked </Button.Blocked>
              <a href="..">This is a text</a>
            </Content.Body>
          </Content.Inner>
        </Content.Outer>
      </div>
    );
  }
});

React.render(<App />, document.body);
