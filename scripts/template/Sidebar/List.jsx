import React from 'react';

export default React.createClass({
  render() {
    var { children, ...other } = this.props;
    var style = {
      padding: '20px 0 20px 0',
      margin: 0
    };

    return (
      <ul style={style} {...other}>
        {children}
      </ul>
    );
  }
});
