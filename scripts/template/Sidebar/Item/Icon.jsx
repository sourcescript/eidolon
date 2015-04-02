import React from 'react';
import _base from '../../styles';

export default React.createClass({
  render() {
    var { children, ...other } = this.props;
    var style = {
      position: 'absolute',
      top: _base['sidebar-icon-width'] / 2,
      left: _base['sidebar-icon-width'],
      fontSize: 18
    };

    return (
      <span style={style} {...other}>
        {children}
      </span>
    );
  }
});
