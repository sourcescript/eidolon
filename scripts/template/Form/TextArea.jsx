import React from 'react';

export default React.createClass({
  render() {
    var { children, ...other} = this.props;
    var style = {  };

    return ( <textarea style={style} {...other} /> );
  }
});
