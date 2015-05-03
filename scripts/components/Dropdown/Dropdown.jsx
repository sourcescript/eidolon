import React from 'react';
import DomUtils from '../../utils/DomUtils';
import EventListener from '../../utils/EventListener';

const ESC_KEY = 13;
const TRIGGER_REF = 'trigger';
// Flag if a node inside the root element should close.
export const CLOSE_EXCEPTION_CLASS = 'js-dropdown-ex-flag';

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
    this.$clickListener = EventListener.listen(document, 'click', this._handleClick.bind(this));
    this.$keyUpListener = EventListener.listen(document, 'keyup', this._handleKeyUp.bind(this));
  }

  componentWillUnmount() {
    this.$clickListener.remove();
    this.$keyUpListener.remove();
  }

  render() {
    let { active } = this.state;
    let { trigger, children } = this.props;

    return (
      <span>
        {trigger(TRIGGER_REF)}
        {active ? children : null}
      </span>
    );
  }

  _handleClick(evt) {
    let { active } = this.state;
    let { disabled } = this.props;
    let target = evt.target;
    let root = React.findDOMNode(this);
    // "Hey, dropdown, fuck it, it's disabled, okay?"
    // "It's not me, it's them, dropdown!"
    // let hasClass = DomUtils.hasClass(target, CLOSE_EXCEPTION_CLASS);
    if ( disabled ) {
      return false;
    }

    let triggerNode = React.findDOMNode(this.refs[TRIGGER_REF]);
    // We'll create this condition here, so we don't use
    // `preventDefault` and `stopPropagation` on child nodes
    // or elements not inside the root node.
    if ( target === triggerNode ) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
    }

    this.setState({ active: DomUtils.isNodeInRoot(target, root) ? !active : false });
  }

  _handleKeyUp(evt) {
    // Close the dropdown menu when the `escape` key is pressed
    // while the state is active (menu is shown).
    if ( this.state.active && evt.keyCode === ESC_KEY ) {
      this.setState({ active: false });
    }
  }
}

export default Dropdown;
