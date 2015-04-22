import React from 'react';

export default React.createClass({
  render() {
    var { style, children, ...other } = this.props;
    var style = Object.assign({
      position: 'absolute',
      margin: 0,
      padding: 0,
      backgroundColor: '#fff'
    }, style);

    return (
      <div style={style} {...other}>
        {children}
      </div>
    );
  }
});
