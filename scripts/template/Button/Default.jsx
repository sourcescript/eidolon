import React from 'react';
import _base from '../styles';

export default React.createClass({
  render() {
    var { children, ...other } = this.props;

    return (
      <button {...other}>
        {children}
      </button>
    )
  }
});
