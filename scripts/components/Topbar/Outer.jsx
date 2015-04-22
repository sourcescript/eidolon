import React from 'react';

class Outer extends React.Component {
  render() {
    var { children, ...other } = this.props;

    return (
      <div className="topbar" {...other}>
        {children}
      </div>
    );
  }
}

export default Outer;
