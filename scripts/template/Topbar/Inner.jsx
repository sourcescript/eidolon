import React from 'react';
import _base from '../styles';

export default React.createClass({
  render() {
    var { style, children, ...other } = this.props;

    var style = Object.assign({
      padding: _base['padding-base-vt'],
      float: 'left'
    }, style);

    return (
      <div style={style} {...other}>
        {children}
      </div>
    );
  }
});
