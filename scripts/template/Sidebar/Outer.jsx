import React from 'react';
import _base from '../styles';

export default React.createClass({
  render() {
    var { children, ...other } = this.props;

    var vt = _base['padding-base-vt'];
    var style = {
      maxHeight: '100vh',
      overflow: 'scroll',
      position: 'fixed',
      marginTop: _base['topbar-height'],
      paddingTop: vt,
      paddingBottom: vt,
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
