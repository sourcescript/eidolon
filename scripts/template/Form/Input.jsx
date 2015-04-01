import React from 'react';

export default React.createClass({
	render() {
		var { children, ...other } = this.props;
		var style = {
      display: 'block'
    };

		return ( <input style={style} {...other} /> );
	}
});
