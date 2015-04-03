import React from 'react';
import _base from '../styles';

export default React.createClass({
  render() {
    var padding = _base['padding-base-vt'];
    var style = {
      width: '100%',
      paddingTop: padding,
      paddingBottom: padding
    };

    return <hr style={style} {...this.props} />
  }
})
