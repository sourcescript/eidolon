import React from 'react';
import cloneWithProps from 'react/lib/cloneWithProps';
import OverlayTriggerUtil from './OverlayTriggerUtil';

let $container = document.body;
// Export for testing
export const $OVERLAY_CONTAINER_PROP = Symbol();
export const $OVERLAY_CONTAINER_INSTANCE_PROP = Symbol();

/**
 * Tooltip
 *
 * @usage
 * <Overlay trigger={() => { return <div className="tooltip"; }}>
 *   <a href="#"> .. </a>
 * </Overlay>
 *
 * Limitations:
 * - No transitional delays
 * - No display / hide delays
 * - No other event trigger besides mousein -> mouseout
 * - Changes are not tracked (placement or whatever) :)
 */
class OverlayTrigger extends React.Component {
  static propTypes = {
    /**
     * The overlay component
     */
    overlay: React.PropTypes.oneOfType([
      React.PropTypes.func,
      React.PropTypes.Element
    ]).isRequired,

    /**
     * Position to display the overlay
     */
    position: React.PropTypes.oneOf([
      'top',
      'left',
      'right',
      'bottom'
    ])
  }

  static defaultProps = {
     position: 'left'
  }

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      top: 0,
      left: 0
    };
  }

  componentDidMount() {
    this._mountOverlayContainer();
    this._mountOverlay();
  }

  componentWillUnmount() {
    this._unmountOverlay();
    this._unmountOverlayContainer();
  }

  componentDidUpdate() {
    // Remount the overlay
    if ( this[$OVERLAY_CONTAINER_INSTANCE_PROP] ) {
      this._unmountOverlay();
    }

    this._mountOverlay();
  }

  render() {
    return cloneWithProps(this.props.children, {
      onMouseEnter: this._handleMouseEnter.bind(this),
      onMouseOut: this._handleMouseOut.bind(this)
    });
  }

  /**
   * Displays the overlay
   */
  _handleMouseEnter() {
    this.setState({ show: true }, () => {
      let { position } = this.props;
      let trigger = React.findDOMNode(this);
      let overlay = React.findDOMNode(this[$OVERLAY_CONTAINER_INSTANCE_PROP]);
      let offset = OverlayTriggerUtil.calculatePosition(trigger, overlay, position);
      this.setState({ top: offset.top, left: offset.left });
    });
  }

  /**
   * Hides the overlay
   */
  _handleMouseOut() {
    this.setState({ show: false });
  }

  /**
   * Mounts the overlay and its container
   */
  _mountOverlay() {
    // Mount the overlay itself
    let offset = { top: this.state.top, left: this.state.left };
    let overlay = typeof this.props.overlay == 'function'
      ? this.props.overlay()
      : this.props.overlay;

    this[$OVERLAY_CONTAINER_INSTANCE_PROP] = React.render(
      this.state.show ? cloneWithProps(overlay, offset) : <span />,
      this[$OVERLAY_CONTAINER_PROP]
    );
  }

  _mountOverlayContainer() {
    // Mount the container
    this[$OVERLAY_CONTAINER_PROP] = document.createElement('div');
    $container.appendChild(this[$OVERLAY_CONTAINER_PROP]);
  }

  /**
   * Unmounts the overlay and its container
   */
  _unmountOverlay() {
    React.unmountComponentAtNode(this[$OVERLAY_CONTAINER_PROP]);
    this[$OVERLAY_CONTAINER_INSTANCE_PROP] = null;
  }

  _unmountOverlayContainer() {
    $container.removeChild(this[$OVERLAY_CONTAINER_PROP]);
    this[$OVERLAY_CONTAINER_PROP] = null;
  }
}

export default OverlayTrigger;
