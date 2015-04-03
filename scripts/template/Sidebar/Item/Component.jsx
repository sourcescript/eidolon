import React from 'react';
import { StyleResolverMixin, BrowserStateMixin } from 'radium';
import _base from '../../styles';

export default React.createClass({
  // Used mainly to put the `active` styling
  // on hover or if the `active` prop
  // is set to true
  mixins: [StyleResolverMixin, BrowserStateMixin],

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

    var _active = 'rgba(0, 0, 0, 0.2)'; // Shorthand
    var _default = _base['sidebar-color']; // Shorthand
    var _highlight = '#f2f2f2'; // Shorthand
    var _border = `2px solid ${_base['color-primary']}` // Border for active
    var style = this.buildStyles(Object.assign({
      height: _base['height-base'],
      listStyle: 'none',
      fontSize: _base['font-size-h6'],
      // Apply the `active` styling accordingly
      background: active ? _active : 'transparent',
      color: active ? _highlight : _default,
      borderLeft: active ? _border : 'none',

      // Apply the `active` styling on hover
      states: [{ hover: {
        background: _active,
        color: _highlight
      } }]
    }, style));

    return (
      <li {...this.getBrowserStateEvents()} style={style} className="u-text -truncate" {...other}>
        {children}
      </li>
    );
  }
});
