import React from 'react';
import { StyleResolverMixin, BrowserStateMixin } from 'radium';
import _base from '../styles';

export default React.createClass({
  // Used for the `hover` styling
  mixins: [StyleResolverMixin, BrowserStateMixin],

  propTypes: {
    /**
     * Whether the button is a `block` (styling)
     *
     * @default {bool} false
     */
    block: React.PropTypes.bool,

    /**
     * Size of the button, in which it should
     * be a string, and should have a value
     * in the given set
     *
     * @default {str} 'md'
     */
    size(props, propName) {
      var value = props[propName];
      var sizes = ['xs', 'sm', 'md', 'lg'];

      // The tilde (`~`) produces 0 (aka false) for `-1` values
      // e.g., (~-1 == 0 // => true). `indexOf` returns `-1`
      // when it doesn't find the value in the array.
      if ( !typeof value == 'string' || !~sizes.indexOf(value) ) {
        throw new Error(`Expected size to be a string and either
          of the following: [${set.join(', ')}] but got ${value}`);
      }
    },

    /**
     * To inverse the background and border
     *
     * @default {bool} false
     */
    inverse: React.PropTypes.bool
  },

  /**
   * Default settings
   */
  getDefaultProps() {
    return { block: false, size: 'md', inverse: false };
  },

  render() {
    var { style, size, block, inverse, children, ...other } = this.props;
    var mul = ({ xs: .5, sm: .75, md: 1, lg: 2 })[size]; // Multiplier based on the size

    // Mainly based on TWBS's btn css.
    // https://github.com/twbs/bootstrap/blob/master/less/buttons.less
    var style = this.buildStyles(Object.assign({
      // Adds the `block` styling when the provided `block` prop is set to true
      display: block ? 'block' : 'inline-block',
      width: block ? '100%' : 'auto',
      // ------------------------
      padding: `${_base['btn-padding-vt'] * mul}px ${_base['btn-padding-hr'] * mul}px`,
      fontFamily: _base['btn-font-family'],
      textAlign: 'center',
      verticalAlign: 'middle',
      touchAction: 'manipulation',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      // Reset unusual Firefox-on-Android default style;
      // see https://github.com/necolas/normalize.css/issues/214,
      backgroundImage: 'none',
      backgroundColor: 'transparent',
      border: '1px solid',
      borderColor: _base['color-grey'],
      borderRadius: _base['border-radius-base'],
      transition: _base['transition-base'],

      // Invert the backgroundColor and borderColor on hover
      states: [{ hover: {
        backgroundColor: _base['color-grey'],
        borderColor: 'transparent',
        color: '#fff'
      } }]
    }, style));

    return (
      <button {...this.getBrowserStateEvents()} style={style} {...other}>
        {children}
      </button>
    )
  }
});
