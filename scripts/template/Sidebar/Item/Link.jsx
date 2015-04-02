import React from 'react';
import _base from '../../styles';

export default React.createClass({
  render() {
    var { children, ...other } = this.props;

    var style = {
      display: 'block',
      height: _base['height-base'],
      padding: _base['padding-base-vt'],
      width: '100%',
      color: _base['sidebar-color'],
      textDecoration: 'none'
    };

    return (
      <a style={style} {...other}>
        {children}
      </a>
    );
  }
});
