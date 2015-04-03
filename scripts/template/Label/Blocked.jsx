import React from 'react';
import _base from '../styles';
import Default from './Default';

export default React.createClass({
  render() {
    var { style, children, ...other } = this.props;
    var style = Object.assign({
      backgroundColor: _base['color-blocked']
    }, style);

    return (
      <Default style={style} {...other}>
        { children }
      </Default>
    );
  }
});
