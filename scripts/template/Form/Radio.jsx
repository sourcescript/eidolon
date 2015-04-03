import React from 'react';

export default React.createClass({
  render() {
    var { children, ...other} = this.props;
    var style = {  };

    return ( <input style={style} {...other} type="radio" /> );
  }
});
