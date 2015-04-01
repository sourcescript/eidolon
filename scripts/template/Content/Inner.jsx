import React from 'react';

export default React.createClass({
  render: function() {
    var { children, ...other } = this.props;

    var style = { padding: 20 };

    return (
      <div style={style} {...other}>
        {children}
      </div>
    )
  }
});
