import React from 'react';
import _base from '../../styles';

export default React.createClass({
  render() {
    var { children, ...other } = this.props;
    var style = {
      paddingRight: _base['padding-base-hr'] / 1.5,
      fontSize: _base['font-size-base']
    };

    return (
      <span style={style} {...other}>
        {children}
      </span>
    );
  }
});
