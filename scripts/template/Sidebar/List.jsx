import React from 'react';

export default React.createClass({
  render() {
    var { children, ...other } = this.props;
    var style = { margin: 0, padding: 0 };

    return (
      <ul style={style} {...other}>
        {children}
      </ul>
    );
  }
});
