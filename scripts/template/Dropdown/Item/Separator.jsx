import React from 'react';

export default React.createClass({
  render() {
    var { style, children, ...other } = this.props;
    var style = Object.assign({

    }, style);

    return (
      <div style={style} {...other}>
        {children}
      </div>
    );
  }
});
