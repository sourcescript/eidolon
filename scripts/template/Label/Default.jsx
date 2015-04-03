import React from 'react';
import _base from '../styles';

export default React.createClass({
  render() {
    var { style, children, ...other } = this.props;
    var style = Object.assign({
      display: 'inline-block',
      fontFamily: _base['headings-font-family'],
      fontSize: 10,
      textTransform: 'uppercase',
      letterSpacing: _base['letter-spacing-base'],
      borderRadius: _base['border-radius-base'],
      padding: '2px 5px',
      color: '#fff',
      backgroundColor: _base['color-grey']
    }, style);

    return (
      <div style={style} {...other}>
        { children }
      </div>
    );
  }
});
