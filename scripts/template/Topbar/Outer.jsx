import React from 'react';
import _base from '../styles';

export default React.createClass({
  render: function() {
    var { children, ...other } = this.props;

    var style = {
      position: 'fixed',
      height: 50,
      width: '100%',
      background: _base['color-base-highlight']
    };

    return (
      <div style={style} {...other} className="u-clearfix">
        {children}
      </div>
    );
  }
});
