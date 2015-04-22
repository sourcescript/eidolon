import React from 'react';

class Title extends React.Component {
  render() {
    var { children, ...other } = this.props;

    return (
      <div className="topbar__title" {...other}>
        {children}
      </div>
    );
  }
}

export default Title;
