import React from 'react';
import _base from '../styles';

export default React.createClass({
  render: function() {
    var { children, ...other } = this.props;

    var style = {
      position: 'fixed',
      height: _base['topbar-height'],
      background: _base['topbar-bg'],
      width: '100%',
      color: '#fff'
    };

    return (
      <div style={style} {...other} className="u-clearfix">
        {children}
      </div>
    );
  }
});
