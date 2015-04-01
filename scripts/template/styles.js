var ceil = Math.ceil;
var floor = Math.floor;

/**
 * Contains all stylus variables
 * A lot of the base were taken from TWBS 3.x
 * https://github.com/twbs/bootstrap/blob/master/less/variables.less
 */
var _ = {};

_['color-primary']  = '#399bff';
_['color-success']  = '#4AD1A3';
_['color-warning']  = '#E5E851';
_['color-danger']   = '#F24A53';
_['color-blocked']  = '#3d464d';
_['color-grey']     = 'rgba(255, 255, 255, 0.7)';

_['color-base']       = '#fff';
_['color-base-sub']  = _['color-blocked'];
_['color-base-highlight']  = _['color-primary'];
// Percentage for use in stylus when darkening colors
// e.g., darken(color-base, color--dk)
// e.g., darken(color-primary, color--dk)
_['color--dk'] = '5%';

/**
 *
 */

/**
 * Typography
 */
_['font-size-base'] = 14
_['font-size-large'] = ceil(_['font-size-base'] * 1.25); // ~18px
_['font-size-small'] = ceil(_['font-size-base'] * 0.85); // ~12px
_['font-size-h1'] = ceil(_['font-size-base'] * 2.6); // 36px
_['font-size-h2'] = ceil(_['font-size-base'] * 2.15); // ~30px
_['font-size-h3'] = ceil(_['font-size-base'] * 1.7); // ~24px
// _['font-sizeh4'] = ceil(_['font-size-base'] * 1.25); // ~18px
_['font-size-h4'] = _['font-size-large'];
_['font-size-h5'] = _['font-size-base'];
_['font-size-h6'] = _['font-size-small'];
// _['font-size-h6'] = ceil(_['font-size-base'] * 0.85); // ~12px

_['line-height-base'] = 1.428571429; // <= 20/14
_['line-height-computed'] = floor(_['font-size-base'] * _['line-height-base']); // ~20
_['border-radius-base'] = 3;

/**
 * Screen sizes
 */
_['screen-xs'] = 480;
_['screen-sm'] = 768;

_['height-base'] = 50;
_['height-base-lg'] = _['height-base'] * 2;
_['height-base-sm'] = _['height-base'] / 2;

_['padding-base-vt'] = (_['height-base'] - _['line-height-computed']) / 2;
_['padding-base-hr'] = _['padding-base-vt'] * 2;

/**
 * Stuff
 */
_['sidebar-width'] = 250;
_['sidebar-bg'] = _['color-base-sub'];
_['topbar-height'] = _['height-base'];

module.exports = _;
