import React from 'react';
import _base from '../../styles';

export default React.createClass({
  render() {
    var vt = _base['padding-base-vt'];
    var hr = _base['padding-base-hr'];
    var style = {
      // We'll remove the set fixed height in <Item>
      height: 'auto',
      padding: 0,
      marginTop: vt,
      marginBottom: vt * 2,
      marginLeft: hr,
      marginRight: hr,
      borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
      listStyle: 'none'
    };

    return <li style={style} />;
  }
})
