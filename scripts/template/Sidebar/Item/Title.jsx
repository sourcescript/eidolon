import React from 'react';
import _base from '../../styles';

export default React.createClass({
  render() {
    var { children, ...other } = this.props;

    var style = {
      padding: `0 ${_base['padding-base-vt']}px ${_base['padding-base-vt'] / 2}px`,
      letterSpacing: 0.4,
      // We'll remove the set fixed height in <Item>
      // since we want our title item to create a
      // variation and be recognizable
      height: 'auto',
      // Decrease font size for variation
      fontSize: 10,
      color: _base['color-base-sub-overlay'],
      listStyle: 'none'
    };

    return <li style={style} className="u-text -up"> {children} </li>;
  }
})
