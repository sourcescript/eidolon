import React from 'react';
import _base from '../styles';

export default React.createClass({
  render() {
    var { children, ...other } = this.props;

    var style = {
      position: 'fixed',
      width: _base['sidebar_width'],
    };

    return (
      <div style={style} {...other}>
        {children}
      </div>
    )
  }
})
