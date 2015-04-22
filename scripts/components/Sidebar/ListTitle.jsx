import React from 'react';

export default React.createClass({
  render() {
    var { children, ...other } = this.props;
    return <li className="l-sidebar__item-title"> {children} </li>;
  }
});
