import React from 'react';

export default React.createClass({
  render() {
    var { children, ...other } = this.props;

    var style = {
      display: 'block',
      width: '100%',
      color: '#fff',
      textDecoration: 'none'
    };

    return (
      <a style={style} {...other}>
        {children}
      </a>
    );
  }
});
