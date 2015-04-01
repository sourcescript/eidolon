import React from 'react';
import _base from '../styles';

export default React.createClass({
  render() {
    var { children, ...other } = this.props;
    var style = {
      float: 'left',
      padding: _base['padding-base-vt'],
      height: _base['topbar-height'],
      width: _base['sidebar-width'],
      background: _base['color-base-highlight']
    };

    return (
      <div style={style} {...other}>
        {children}
      </div>
    );
  }
});
