var ceil = Math.ceil;
var floor = Math.floor;

/**
 * Contains all stylus variables
 * A lot of the base were taken from TWBS 3.x
 * https://github.com/twbs/bootstrap/blob/master/less/variables.less
 */
var _ = {};

/**
 * Directories
 */
_['dist'] = '/dist/';
_['fonts'] = _['dist'] + 'fonts/';
_['bower'] = '/../bower_components/';

/**
 * Colors
 * dk - darker
 * lt - lighter
 */
_['color-primary']  = '#399bff';
_['color-success']  = '#4AD1A3';
_['color-warning']  = '#FFD500';
_['color-danger']   = '#F24A53';
_['color-blocked']  = '#3d464d';

_['color-grey']     = '#999';
_['color-grey--lt'] = '#f2f2f2';

_['color-base']       = '#000';
_['color-base-sub']  = _['color-blocked'];
// Percentage for use in stylus when darkening / lightening colors
// e.g., darken(color-base, color--dk)
// e.g., darken(color-primary, color--dk)
_['color--lt'] = 15;
_['color--dk'] = 15;

// _['body-bg']
_['text-color'] = '#000';

_['link-color'] = _['color-primary'];
_['link-decoration'] = 'underline';

/**
 * Typography
 */
_['open-sans-weight-light'] = 300;
_['open-sans-weight-normal'] = 400;
_['open-sans-weight-semi'] = 600;
_['open-sans-weight-bold'] = 700;
_['open-sans-weight-extra'] = 800;
_['font-family-base'] = '"Open Sans", sans-serif';
_['font-weight-base'] = _['open-sans-weight-normal'];

_['montserrat-weight-normal'] = 400;
_['montserrat-weight-bold'] = 700;
_['headings-font-family'] = '"Montserrat", sans-serif';
_['headings-font-weight'] = _['montserrat-weight-normal'];
_['headings-line-height'] = 1.1; // IDK y
_['headings-color'] = _['text-color'];
_['headings-small-color'] = _['color-grey']; // IDK y

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

_['letter-spacing-base'] = 0.4;
_['letter-spacing-large'] = 1;
_['line-height-base'] = 1.428571429; // <= 20/14
_['line-height-computed'] = floor(_['font-size-base'] * _['line-height-base']); // ~20
_['border-radius-base'] = 3;

/**
 * Screen sizes
 */
_['screen-xs'] = 480;
_['screen-sm'] = 768;
_['screen-md'] = 992;

_['height-base'] = 50;
_['height-base-lg'] = _['height-base'] * 2;
_['height-base-sm'] = _['height-base'] / 2;

_['padding-base-vt'] = (_['height-base'] - _['line-height-computed']) / 2;
_['padding-base-hr'] = _['padding-base-vt'];

/**
 * Table
 */
_['table-bg'] = 'transparent';
_['table-border-color'] = '#ddd';
_['table-cell-padding'] = 8;
//** Background color used for `.table-striped`.
_['table-bg-accent'] = '#f9f9f9';
//** Background color used for `.table-hover`
_['table-bg-hover'] = '#f5f5f5';

/**
 * Input
 */
_['input-color'] = '#444';
_['input-padding'] = 6;

/**
 * Transition settings
 */
_['transition-base'] = '0.2s';
_['transition-base-short'] = _['transition-base'] / 1.5;
_['transition-base-long'] = _['transition-base'] * 2;

/**
 * Btn variables
 */
_['btn-font-family'] = _['headings-font-family'];
_['btn-padding-hr'] = _['padding-base-hr'];
_['btn-padding-vt'] = _['padding-base-vt'] / 2;

/**
 * Sidebar stuff
 */
_['sidebar-width'] = 250;
// sidebar-bg == color-base-sub
// sidebar-color == color-base-sub-overlay
// This is done this way so there are little
// complications for further changes ;)
_['sidebar-color'] = 'rgba(255, 255, 255, 0.6)';
_['sidebar-bg'] = _['color-blocked'];
_['sidebar-icon-width'] = 20;
_['topbar-height'] = _['height-base'];
_['topbar-bg'] = _['color-primary'];

module.exports = _;
