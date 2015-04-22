import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var { children, ...other } = this.props;
    return <ul {...other}> {children} </ul>;
  }
}

export default List;
