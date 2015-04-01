import React from 'react';

export default React.createClass({
  getInitialState: function() {
      return { active: false };
  },

  onChange: function() {
    this.setState({active: !this.state.active });
  },
  render() {
    var { children, ...other } = this.props;
    var style = {  
      transform: this.state.active ? 'scale(10)' : 'scale(5)',
      outline : 'none',
      display: 'block'
    }; 

    return ( <input style={style} {...other} type="checkbox" onClick={this.onChange} /> );
  }
});
