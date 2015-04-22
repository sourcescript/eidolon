import React from 'react';

class Body extends React.Component {
  render() {
    var { children, ...other } = this.props;

    return (
      <div className="content__inner__body" {...other}>
        {children}
      </div>
    )
  }
}

export default Body;
