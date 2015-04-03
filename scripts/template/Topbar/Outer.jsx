import React from 'react';
import _base from '../styles';

export default React.createClass({
  render: function() {
    var { children, ...other } = this.props;

    var style = {
      position: 'fixed',
      height: _base['topbar-height'],
      width: '100%',
      background: _base['color-base-highlight'],
      color: '#fff'
    };

    return (
      <div style={style} {...other} className="u-clearfix">
        {children}
      </div>
    );
  }
});
