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

    var style = this.buildStyles(Object.assign({
      height: _base['height-base'],
      listStyle: 'none',
      fontSize: _base['font-size-h6'],
      // Apply the `active` styling accordingly
      background: active ? _base['sidebar-active-bg'] : 'transparent',
      color: active ? _base['sidebar-color-highlight'] : _base['sidebar-color'],

      // Apply the `active` styling on hover
      states: [{ hover: {
        background: _base['sidebar-active-bg'],
        color: _base['sidebar-color-highlight']
      } }]
    }, style));

    return (
      <li {...this.getBrowserStateEvents()} style={style} className="u-text -truncate" {...other}>
        {children}
      </li>
    );
  }
});
