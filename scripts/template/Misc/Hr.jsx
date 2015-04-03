import React from 'react';
import _base from '../styles';

export default React.createClass({
  render() {
    var bg = '#ddd';
    var margin = _base['padding-base-vt'];
    var style = {
      width: '100%',
      marginTop: margin,
      marginBottom: margin,
      border: 'none',
      borderBottom: `1px solid ${bg}`
    };

    return <hr style={style} {...this.props} />
  }
})
