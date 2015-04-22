import React from 'react';

const ESC_KEY = 13;
const TRIGGER_REF = 'trigger';

class Dropdown extends React.Component {
  static propTypes = {
    /**
     * The component which toggles the dropdown
     * It should be a function that returns a VDOM node.
     */
    trigger: React.PropTypes.func,

    /**
     * Props which disabled the whole component to function
     */
    disabled: React.PropTypes.bool
  }

  static defaultProps = {
    disabled: false
  }

  constructor(props) {
    super(props);

    // active = used to show / hide the dropdown menu
    this.state = { active: false };
  }

  componentDidMount() {
    window.addEventListener('click', this._handleClick.bind(this));
    window.addEventListener('keyup', this._handleKeyUp.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('click', this._handleClick);
    window.removeEventListener('keyup', this._handleKeyUp);
  }

  render() {
    var { active } = this.state;
    var { trigger, children } = this.props;

    return (
      <span>
        {trigger(TRIGGER_REF)}
        { active ? children : null }
      </span>
    );
  }

  _handleClick(evt) {
    var { active } = this.state;
    // "Hey, dropdown, fuck it, it's disabled, okay?"
    // "It's not me, it's them, dropdown!"
    if ( this.props.disabled ) {
      return false;
    }

    var triggerNode = React.findDOMNode(this.refs[TRIGGER_REF]);

    // We'll create this condition here, so we don't use
    // `preventDefault` and `stopPropagation` on elements
    // we don't own.
    if ( evt.target !== triggerNode ) {
      if ( active ) {
        this.setState({ active: false });
      }

      return;
    }
    evt.preventDefault();
    evt.stopPropagation && evt.stopPropagation();
    this.setState({ active: !active });
  }

  _handleKeyUp(evt) {
    // Close the dropdown menu when the `escape` key is pressed
    // while the state is active (menu is shown).
    if ( this.state.active && evt.keyCode == ESC_KEY ) {
      this.setState({ active: false });
    }
  }
}

export default Dropdown;
