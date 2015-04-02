import React from 'react';
import _base from '../styles';
import Item from './Item';

export default React.createClass({
  render() {
    var { children, ...other } = this.props;

    var style = {
      paddingTop: 0,
      paddingBottom: _base['padding-base-vt'] / 2,
      letterSpacing: 0.4,
      // We'll remove the set fixed height in <Item>
      // since we want our title item to create a
      // variation and be recognizable
      height: 'auto',
      // Decrease font size for variation
      fontSize: 10
    };

    return <Item style={style} className="u-text -up"> {children} </Item>;
  }
})
