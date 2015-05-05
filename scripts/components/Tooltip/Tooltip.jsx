import React from 'react';
import classnames from 'classnames';

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { children, top, left } = this.props;

    return (
      <div className="tooltip" style={{ top: top, left: left }}>
        {children}
      </div>
    );
  }
}

export default Tooltip;
