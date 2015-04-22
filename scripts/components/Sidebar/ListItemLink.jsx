import React from 'react';

class ListItemLink extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    var { children, ...other } = this.props;
    return <a {...other}>{children}</a>;
  }
}

export default ListItemLink;
