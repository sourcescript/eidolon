import React from 'react';
import _base from '../styles';

export default React.createClass({
  render() {
    var { children, ...other } = this.props;

    var style = {
      maxHeight: '100vh',
      overflow: 'scroll',
      position: 'fixed',
      paddingTop: _base['topbar-height'],
      width: _base['sidebar-width'],
      fontFamily: _base['headings-font-family']
    };

    return (
      <div style={style} {...other}>
        {children}
      </div>
    )
  }
})
