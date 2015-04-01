import React from 'react';
import _base from '../styles';

export default React.createClass({
  propTypes: {
    /**
     * Used for the active styling
     */
    active: React.PropTypes.boolean
  },

  /**
   * Set `active` prop to false
   */
  getDefaultProps() {
    return { active: false };
  },

  render() {
    var { children, active, ...other } = this.props;

    var style = {
      background: `rgba(0, 0, 0, ${active ? 0.5 : 0})`,
      height: _base['height-base'],
      listStyle: 'none'
    };

    return (
      <li style={style} {...other}>
        {children}
      </li>
    );
  }
});
