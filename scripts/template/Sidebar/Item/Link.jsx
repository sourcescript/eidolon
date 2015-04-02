import React from 'react';
import _base from '../../styles';

var _vt = _base['padding-base-vt'];
var _hr = _base['padding-base-hr'];

export default React.createClass({
  render() {
    var { children, ...other } = this.props;

    var style = {
      position: 'relative',
      display: 'block',
      height: _base['height-base'],
      padding: `${_vt}px ${_hr}px ${_vt}px ${_hr + (_base['sidebar-icon-width'] * 2)}px`,
      width: '100%',
      color: 'inherit',
      textDecoration: 'none'
    };

    return (
      <a style={style} {...other}>
        {children}
      </a>
    );
  }
});
