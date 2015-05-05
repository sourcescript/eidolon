// ES6 Polyfill
require("babel/polyfill");

import React from 'react';
import { Sidebar, Topbar, Content, Form } from '../../../scripts/index';

var App = React.createClass({
  render() {
    return (
      <div className="login">
        <div className="login__inner">
          <div className="login__container">
            <div className="login__body">
              <form onSubmit={(e) => { e.preventDefault(); }}>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="your@email.com" />
                </div>

                <div className="form-group">
                  <input type="text" className="form-control" placeholder="**********" />
                </div>

                <button type="submit" className="btn btn--primary btn--block">
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

React.render(<App />, document.body);
