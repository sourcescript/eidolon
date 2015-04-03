import React from 'react';
import _base from '../styles';

export default React.createClass({
  render() {
    var { style, children, ...other } = this.props;
    var style = Object.assign({
      float: 'left',
      padding: _base['padding-base-vt'],
      height: _base['topbar-height'],
      width: _base['sidebar-width'],
      background: _base['color-base-highlight']
    }, style);

    return (
      <div style={style} {...other}>
        {children}
      </div>
    );
  }
});
