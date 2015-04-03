import React from 'react/addons';
import _base from '../styles';

export default React.createClass({
  render() {
    var { children, ...other } = this.props;
    var len = React.Children.count(children);
    var radius = _base['border-radius-base'];

    return (
      <div {...other} className="u-clearfix">
        {React.Children.map(children, (Child, i) => {
          var isFirst = i == 0;
          var isLast = i == len - 1;
          var isSingle = len == 1;

          return React.addons.cloneWithProps(Child, Object.assign({ style: (!isSingle ? {
            borderTopLeftRadius: isFirst ? radius : 0 ,
            borderTopRightRadius: isLast ? radius : 0,
            borderBottomLeftRadius: isFirst ? radius : 0,
            borderBottomRightRadius: isLast ? radius : 0
          } : { borderRadius: radius })}, { className: '--left', key: i }) );
        })}
      </div>
    );
  }
})
