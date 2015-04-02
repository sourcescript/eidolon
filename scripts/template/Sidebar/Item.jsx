import React from 'react';
import _base from '../styles';

export default React.createClass({
  propTypes: {
    /**
     * Used for the active styling
     */
    active: React.PropTypes.bool
  },

  /**
   * Set `active` prop to false
   */
  getDefaultProps() {
    return { active: false };
  },

  render() {
    var { style, children, active, ...other } = this.props;

    var style = Object.assign({
      padding: _base['padding-base-vt'],
      background: `rgba(0, 0, 0, ${active ? 0.2 : 0})`,
      height: _base['height-base'],
      listStyle: 'none',
      fontSize: _base['font-size-h6'],
      color: _base['sidebar-color']
    }, style);

    return (
      <li style={style} className="u-text -truncate" {...other}>
        {children}
      </li>
    );
  }
});
