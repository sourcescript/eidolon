var ceil = Math.ceil;
var floor = Math.floor;

/**
 * Contains all stylus variables
 * A lot of the base were taken from TWBS 3.x
 * https://github.com/twbs/bootstrap/blob/master/less/variables.less
 */
var _ = {};

_['color-primary']  = '#4AB1D1';
_['color-success']  = '#4AD1A3';
_['color-warning']  = '#E5E851';
_['color-danger']   = '#F24A53';
_['color-blocked']  = '#4D5159';
_['color-grey']     = 'rgba(255, 255, 255, 0.7)';

_['color-base']       = '#18222B';
_['color-highlight']  = '#F24A53';
// Percentage for use in stylus when darkening colors
// e.g., darken(color-base, color--dk)
// e.g., darken(color-primary, color--dk)
_['color--dk'] = '5%';

/**
 * Typography
 */
_['font-size-base'] = 14
_['font-size-large'] = ceil(_['font-size-base'] * 1.25); // ~18px
_['font-size-small'] = ceil(_['font-size-base'] * 0.85); // ~12px
_['h1'] = ceil(_['font-size-base'] * 2.6); // 36px
_['h3'] = ceil(_['font-size-base'] * 2.15); // ~30px
_['h3'] = ceil(_['font-size-base'] * 1.7); // ~24px
// _['h4'] = ceil(_['font-size-base'] * 1.25); // ~18px
_['h4'] = _['font-size-large'];
_['h5'] = _['font-size-base'];
_['h6'] = _['font-size-small'];
// _['h6'] = ceil(_['font-size-base'] * 0.85); // ~12px

_['base-line-height'] = 1.428571429; // 20/14
_['border-radius-base'] = 3;

/**
 * Screen sizes
 */
_['screen-xs']: 480;
_['screen-sm']: 768;

module.exports = _;
