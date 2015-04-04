// ES6 Polyfill
require("babel/polyfill");

import React from 'react';
import { Sidebar, Topbar, Content, Form } from './index';

var App = React.createClass({
  render() {
    return (
      <div>
        <Sidebar.Outer>
          <Sidebar.List>
            <Sidebar.Item.Title> Main </Sidebar.Item.Title>
            <Sidebar.Item.Component>
              <Sidebar.Item.Link href="..">
                <Sidebar.Item.Icon><i className="fa fa-home" /></Sidebar.Item.Icon>
                Dashboard
              </Sidebar.Item.Link>
            </Sidebar.Item.Component>

            <Sidebar.Item.Component active={false}>
              <Sidebar.Item.Link href="..">
                <Sidebar.Item.Icon><i className="fa fa-cog" /></Sidebar.Item.Icon>
                Manage Account
              </Sidebar.Item.Link>
            </Sidebar.Item.Component>

            <Sidebar.Item.Component active={true}>
              <Sidebar.Item.Link href="..">
                <Sidebar.Item.Icon><i className="fa fa-users" /></Sidebar.Item.Icon>
                Manage Users
              </Sidebar.Item.Link>
            </Sidebar.Item.Component>

            <Sidebar.Item.Component active={false}>
              <Sidebar.Item.Link href="..">
                <Sidebar.Item.Icon><i className="fa fa-envelope-o" /></Sidebar.Item.Icon>
                Messages
              </Sidebar.Item.Link>
            </Sidebar.Item.Component>

            <Sidebar.Item.Separator />
          </Sidebar.List>

          <Sidebar.List>
            <Sidebar.Item.Title> More </Sidebar.Item.Title>
            <Sidebar.Item.Component active={false}>
              <Sidebar.Item.Link href="..">
                <Sidebar.Item.Icon><i className="fa fa-map-marker" /></Sidebar.Item.Icon>
                Maps
              </Sidebar.Item.Link>
            </Sidebar.Item.Component>

            <Sidebar.Item.Component active={false}>
              <Sidebar.Item.Link href="..">
                <Sidebar.Item.Icon><i className="fa fa-calendar-o" /></Sidebar.Item.Icon>
                Calendar
              </Sidebar.Item.Link>
            </Sidebar.Item.Component>

            <Sidebar.Item.Component active={false}>
              <Sidebar.Item.Link href="..">
                <Sidebar.Item.Icon><i className="fa fa-th" /></Sidebar.Item.Icon>
                List
              </Sidebar.Item.Link>
            </Sidebar.Item.Component>
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
                <button className="btn -default -xs"> Extra Small </button>&nbsp;
                <button className="btn -primary -xs"> Extra Small </button>&nbsp;
                <button className="btn -warning -xs"> Extra Small </button>&nbsp;
                <button className="btn -danger -xs"> Extra Small </button>&nbsp;
                <button className="btn -success -xs"> Extra Small </button>&nbsp;
              </div>

              <div style={{ marginBottom: 10 }}>
                <button className="btn -default -sm"> Cancel </button>&nbsp;
                <button className="btn -primary -sm"> Cancel </button>&nbsp;
                <button className="btn -warning -sm"> Cancel </button>&nbsp;
                <button className="btn -danger -sm"> Cancel </button>&nbsp;
                <button className="btn -success -sm"> Cancel </button>&nbsp;
              </div>

              <div style={{ marginBottom: 10 }}>
                <button className="btn -default"> Close </button>&nbsp;
                <button className="btn -primary"> Submit </button>&nbsp;
                <button className="btn -warning"> Cancel </button>&nbsp;
                <button className="btn -success"> Save </button>&nbsp;
                <button className="btn -danger"> Remove </button>&nbsp;
              </div>

              <div style={{ marginBottom: 10 }}>
                <button className="btn -default -inverse"> Close </button>&nbsp;
                <button className="btn -primary -inverse"> Submit </button>&nbsp;
                <button className="btn -warning -inverse"> Cancel </button>&nbsp;
                <button className="btn -success -inverse"> Save </button>&nbsp;
                <button className="btn -danger -inverse"> Remove </button>&nbsp;
              </div>

              <div style={{ marginBottom: 10 }}>
                <button className="btn -default -lg"> Hello </button>&nbsp;
                <button className="btn -primary -lg"> Hello </button>&nbsp;
                <button className="btn -warning -lg"> Hello </button>&nbsp;
                <button className="btn -danger -lg"> Hello </button>&nbsp;
                <button className="btn -success -lg"> Hello </button>&nbsp;
              </div>

              <hr />
              <div style={{ width: '50%' }}>
                <h6 className="title"> Alert </h6>
                <div className="alert -primary">Alert, alas hello to world!</div>
                <div className="alert -success">Alert, it was successful!</div>
                <div className="alert -warning">Alert, it is invalid!</div>
                <div className="alert -danger">Alert, an error occured!</div>
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
              <div><Form.Checkbox /></div>

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
              <div className="label -default"> Undefined </div>&nbsp;
              <div className="label -primary"> Note </div>&nbsp;
              <div className="label -warning"> Oops! </div>&nbsp;
              <div className="label -danger"> Error </div>&nbsp;
              <div className="label -success"> Success! </div>&nbsp;

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
