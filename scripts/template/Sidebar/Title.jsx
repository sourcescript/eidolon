import React from 'react';
import Item from './Item';

export default React.createClass({
  render() {
    var { children, ...other } = this.props;
    var style = {};

    return <Item style={style} />;
  }
})
