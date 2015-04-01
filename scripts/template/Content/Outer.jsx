import React from 'react';
import _base from '../styles';

export default React.createClass({
  render() {
    var { children, ...other } = this.props;

    var style = {
      paddingTop: _base['topbar-height'],
      marginLeft: _base['sidebar-width'],
      background: '#ddd',
      minHeight: '100vh'
    };

    return (
      <div style={style} {...other}>
        {children}
      </div>
    )
  }
});
