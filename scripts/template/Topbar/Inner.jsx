import React from 'react';
import _base from '../styles';

export default React.createClass({
  render() {
    var { children, ...other } = this.props;
    
    var style = {
      padding: _base['padding-base-vt'],
      float: 'left'
    };

    return (
      <div style={style} {...other}>
        {children}
      </div>
    );
  }
});
