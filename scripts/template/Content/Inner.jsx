import React from 'react';
import _base from '../styles';

export default React.createClass({
  render() {
    var { children, ...other } = this.props;

    var vt = _base['padding-base-vt'];
    var hr = _base['padding-base-hr'];
    var style = { padding: `${vt}px ${hr * 2}px` };

    return (
      <div style={style} {...other}>
        {children}
      </div>
    )
  }
});
