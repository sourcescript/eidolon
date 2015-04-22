import React from 'react';

export default React.createClass({
  render() {
    var { children, ...other } = this.props;

    return (
      <div className="topbar__title" {...other}>
        {children}
      </div>
    );
  }
});
