import React from 'react';
import _base from '../styles';
export default React.createClass({
  getInitialState: function() {
      return { active: false };
  },

  onChange: function() {
    this.setState({active: !this.state.active });
  },
  render() {
    var { children, ...other } = this.props;
    var controller = {  
      transform: this.state.active ? 'translateX(30px)' : 'translateX(0px)', 
      outline: 'none',
      display: 'block',
      height: 30,
      width: 30,
      borderRadius: '50%',
      transition: '0.1s all',
      backgroundColor: 'white',
      border: '1px solid black'
    }; 
    var container = {
      backgroundColor: this.state.active ? _base['color-success'] : 'gray',
      width: 60,
      borderRadius: 25,
      height: 'auto',
      cursor: 'pointer'
    };

    return ( 
        <div style={container} onClick={this.onChange}>
          <div style={controller} {...other}> </div> 
        </div>
      );
  }
});
