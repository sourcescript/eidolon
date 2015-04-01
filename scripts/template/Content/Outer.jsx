import React from 'react';
import _base from '../styles';

export default React.createClass({
  render: function() {
    var { children, ...other } = this.props;

    var style = {
      paddingTop: _base['topbar_height'],
      marginLeft: _base['sidebar_width'],
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
