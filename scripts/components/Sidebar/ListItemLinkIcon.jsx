import React from 'react';

class ListItemLinkIcon extends React.Component {
  render() {
    var { children, ...other } = this.props;

    return (
      <span className="l-sidebar__item__pre-icon" {...other}>
        {children}
      </span>
    );
  }
}

export default ListItemLinkIcon;
