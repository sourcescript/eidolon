import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var { children, ...other } = this.props;
    return <li className="sidebar__item" {...other}> {children} </li>;
  }
};

export default ListItem;
