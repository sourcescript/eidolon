import React from 'react';
import _base from '../styles';
import Default from './Default';

export default React.createClass({
  render() {
    var { style, children, ...other } = this.props;
    var color = _base['color-blocked']; // Shorthand

    var style = Object.assign({
      borderColor: color,
      states: [{ hover: { backgroundColor: color } }]
    }, style);

    return (
      <Default style={style} {...other}>
        {children}
      </Default>
    )
  }
});
