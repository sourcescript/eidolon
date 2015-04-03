require("babel/polyfill");

import React from 'react';
import Sidebar from './template/Sidebar/index';
import Topbar from './template/Topbar/index';
import Content from './template/Content/index';
import Form from './template/Form/index';
import Button from './template/Button/index';
import Hr from './template/Misc/Hr';

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

            <Sidebar.Item.Separator />
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
            <h4>
              Dashboard
              <small> This is a quick overview of some features </small>
            </h4>
          </Content.Body>

          <Content.Inner>
            <Content.Body>
              <h6 className="title"> Typography </h6>
              <h1> Heading 1 </h1>
              <h2> Heading 2 </h2>
              <h3> Heading 3 </h3>
              <h4> Heading 4 </h4>
              <h5> Heading 5 </h5>
              <h6> Heading 6 </h6>

              <Hr />

              <h6 className="title"> Buttons </h6>
              <Button.Default> Close </Button.Default>&nbsp;
              <Button.Primary> Submit </Button.Primary>&nbsp;
              <Button.Warning> Cancel </Button.Warning>&nbsp;
              <Button.Success> Save </Button.Success>&nbsp;
              <Button.Danger> Remove </Button.Danger>&nbsp;
              <Button.Blocked> Blocked </Button.Blocked>&nbsp;

              <h6 className="title"> Input </h6>
              <div><Form.Input /></div>

              <h6 className="title"> Tables </h6>
              <h6 className="title"> Labels </h6>
              <h6 className="title"> Dropdown </h6>
              <h6 className="title"> Tooltip </h6>
            </Content.Body>
          </Content.Inner>
        </Content.Outer>
      </div>
    );
  }
});

React.render(<App />, document.body);
