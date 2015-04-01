import React from 'react';

export default React.createClass({
  render() {
    var { children, ...other } = this.props;
    var style = { paddingLeft: 0 };

    return (
      <ul style={style} {...other}>
        {children}
      </ul>
    );
  }
});
