import React from 'react';

class Inner extends React.Component {
  render() {
    var { children, ...other } = this.props;

    return (
      <div className="topbar__inner" {...other}>
        {children}
      </div>
    );
  }
}

export default Inner;
