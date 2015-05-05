// ES6 Polyfill
require("babel/polyfill");

import React from 'react';
import {
  OverlayTrigger,
  Tooltip,
  Dropdown,
  Sidebar,
  Topbar,
  Content,
  Form
} from '../../../scripts/index';

var App = React.createClass({
  render() {
    return (
      <div>
        <Sidebar.Outer>
          <Sidebar.List>
            <Sidebar.ListTitle> Main </Sidebar.ListTitle>
            <Sidebar.ListItem>
              <Sidebar.ListItemLink href="..">
                <Sidebar.ListItemLinkIcon><i className="fa fa-home" /></Sidebar.ListItemLinkIcon>
                Dashboard
              </Sidebar.ListItemLink>
            </Sidebar.ListItem>

            <Sidebar.ListItem active={false}>
              <Sidebar.ListItemLink href="..">
                <Sidebar.ListItemLinkIcon><i className="fa fa-cog" /></Sidebar.ListItemLinkIcon>
                Manage Account
              </Sidebar.ListItemLink>
            </Sidebar.ListItem>

            <Sidebar.ListItem active={true}>
              <Sidebar.ListItemLink href="..">
                <Sidebar.ListItemLinkIcon><i className="fa fa-users" /></Sidebar.ListItemLinkIcon>
                Manage Users
              </Sidebar.ListItemLink>
            </Sidebar.ListItem>

            <Sidebar.ListItem active={false}>
              <Sidebar.ListItemLink href="..">
                <Sidebar.ListItemLinkIcon><i className="fa fa-envelope-o" /></Sidebar.ListItemLinkIcon>
                Messages
              </Sidebar.ListItemLink>
            </Sidebar.ListItem>

            <Sidebar.ListSeparator />
          </Sidebar.List>

          <Sidebar.List>
            <Sidebar.ListTitle> More </Sidebar.ListTitle>
            <Sidebar.ListItem active={false}>
              <Sidebar.ListItemLink href="..">
                <Sidebar.ListItemLinkIcon><i className="fa fa-map-marker" /></Sidebar.ListItemLinkIcon>
                Maps
              </Sidebar.ListItemLink>
            </Sidebar.ListItem>

            <Sidebar.ListItem active={false}>
              <Sidebar.ListItemLink href="..">
                <Sidebar.ListItemLinkIcon><i className="fa fa-calendar-o" /></Sidebar.ListItemLinkIcon>
                Calendar
              </Sidebar.ListItemLink>
            </Sidebar.ListItem>

            <Sidebar.ListItem active={false}>
              <Sidebar.ListItemLink href="..">
                <Sidebar.ListItemLinkIcon><i className="fa fa-th" /></Sidebar.ListItemLinkIcon>
                List
              </Sidebar.ListItemLink>
            </Sidebar.ListItem>
          </Sidebar.List>
        </Sidebar.Outer>

        <Topbar.Outer>
          <Topbar.Title style={{ textAlign: 'center' }}>
            <h4 style={{ marginTop: 0, color: '#fff' }}> Eidolon </h4>
          </Topbar.Title>
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

              <hr />

              <h6 className="title"> Buttons </h6>

              <div style={{ marginBottom: 10 }}>
                <button className="btn btn--default btn--xs"> Extra Small </button>&nbsp;
                <button className="btn btn--primary btn--xs"> Extra Small </button>&nbsp;
                <button className="btn btn--warning btn--xs"> Extra Small </button>&nbsp;
                <button className="btn btn--danger btn--xs"> Extra Small </button>&nbsp;
                <button className="btn btn--success btn--xs"> Extra Small </button>&nbsp;
              </div>

              <div style={{ marginBottom: 10 }}>
                <button className="btn btn--default btn--sm"> Cancel </button>&nbsp;
                <button className="btn btn--primary btn--sm"> Cancel </button>&nbsp;
                <button className="btn btn--warning btn--sm"> Cancel </button>&nbsp;
                <button className="btn btn--danger btn--sm"> Cancel </button>&nbsp;
                <button className="btn btn--success btn--sm"> Cancel </button>&nbsp;
              </div>

              <div style={{ marginBottom: 10 }}>
                <button className="btn btn--default"> Close </button>&nbsp;
                <button className="btn btn--primary"> Submit </button>&nbsp;
                <button className="btn btn--warning"> Cancel </button>&nbsp;
                <button className="btn btn--success"> Save </button>&nbsp;
                <button className="btn btn--danger"> Remove </button>&nbsp;
              </div>

              <div style={{ marginBottom: 10 }}>
                <button className="btn btn--default btn--rounded"> Close </button>&nbsp;
                <button className="btn btn--primary btn--rounded"> Submit </button>&nbsp;
                <button className="btn btn--warning btn--rounded"> Cancel </button>&nbsp;
                <button className="btn btn--success btn--rounded"> Save </button>&nbsp;
                <button className="btn btn--danger btn--rounded"> Remove </button>&nbsp;
              </div>

              <div style={{ marginBottom: 10 }}>
                <button className="btn btn--default btn--lg"> Hello </button>&nbsp;
                <button className="btn btn--primary btn--lg"> Hello </button>&nbsp;
                <button className="btn btn--warning btn--lg"> Hello </button>&nbsp;
                <button className="btn btn--danger btn--lg"> Hello </button>&nbsp;
                <button className="btn btn--success btn--lg"> Hello </button>&nbsp;
              </div>

              <hr />
              <div style={{ width: '50%' }}>
                <h6 className="title"> Alert </h6>
                <div className="alert alert--primary">Alert, alas hello to world!</div>
                <div className="alert alert--success">Alert, it was successful!</div>
                <div className="alert alert--warning">Alert, it is invalid!</div>
                <div className="alert alert--danger">Alert, an error occured!</div>
              </div>
              <hr />

              <h6 className="title"> Input </h6>
              <div className="form-group"><input type="text" className="form-control" /></div>
              <div className="form-group"><textarea className="form-control" /></div>
              <div className="form-group"><input type="radio" /></div>
              <div className="form-group">
                <label> Username </label>
                <p className="form-control-static"> Oh, hey! </p>
              </div>

              <h6 className="title"> Tables </h6>

              <table className="table -striped -hover">
                <thead>
                  <tr>
                    <th> # </th>
                    <th> Name </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> 1 </td>
                    <td> Kier Borromeo </td>
                  </tr>
                  <tr>
                    <td> 2 </td>
                    <td> John Doe </td>
                  </tr>
                </tbody>
              </table>

              <hr />

              <h6 className="title"> Labels </h6>
              <div className="label label--default"> Undefined </div>&nbsp;
              <div className="label label--primary"> Note </div>&nbsp;
              <div className="label label--warning"> Oops! </div>&nbsp;
              <div className="label label--danger"> Error </div>&nbsp;
              <div className="label label--success"> Success! </div>&nbsp;

              <h6 className="title"> Dropdown </h6>
              <div className="dropdown">
                <Dropdown trigger={ref => <button className="btn btn--default"> Close </button> }>
                 <ul className="dropdown__menu">
                  <li><a href="#"> Hi po </a></li>
                  <li><a href="#" className="dropdown__menu__link--active"> Hi po </a></li>
                 </ul>
                </Dropdown>
              </div>
              <h6 className="title"> Tooltip </h6>
              <OverlayTrigger overlay={() => { return <Tooltip> Hover Me! </Tooltip> }}>
                <button className="btn btn--default"> Hover Me! </button>
              </OverlayTrigger>
              <OverlayTrigger overlay={() => { return <Tooltip> Hover Me! </Tooltip> }} position={'top'}>
                <button className="btn btn--default"> Hover Me! </button>
              </OverlayTrigger>
                <OverlayTrigger overlay={() => { return <Tooltip> Hover Me! </Tooltip> }} position={'right'}>
                <button className="btn btn--default"> Hover Me! </button>
              </OverlayTrigger>
                <OverlayTrigger overlay={() => { return <Tooltip> Hover Me! </Tooltip> }} position={'bottom'}>
                <button className="btn btn--default"> Hover Me! </button>
              </OverlayTrigger>
            </Content.Body>
          </Content.Inner>
        </Content.Outer>
      </div>
    );
  }
});

React.render(<App />, document.body);
