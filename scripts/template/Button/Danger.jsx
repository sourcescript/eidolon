import React from 'react';
import _base from '../styles';
import Default from './Default';

export default React.createClass({
  render() {
    var { children, ...other } = this.props;
    var color = _base['color-danger']; // Shorthand

    var style = {
      borderColor: color,
      states: [{ hover: { backgroundColor: color } }]
    };

    return (
      <Default style={style} {...other}>
        {children}
      </Default>
    )
  }
});
