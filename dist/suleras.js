"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _React = require("react");

var _React2 = _interopRequireWildcard(_React);

var Body = (function (_React$Component) {
  function Body() {
    _classCallCheck(this, Body);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Body, _React$Component);

  Body.prototype.render = function render() {
    var _props = this.props;
    var children = _props.children;

    var other = _objectWithoutProperties(_props, ["children"]);

    return _React2["default"].createElement(
      "div",
      _extends({ className: "l-content__inner__body" }, other),
      children
    );
  };

  return Body;
})(_React2["default"].Component);

exports["default"] = Body;
module.exports = exports["default"];
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _React = require("react");

var _React2 = _interopRequireWildcard(_React);

var Inner = (function (_React$Component) {
  function Inner() {
    _classCallCheck(this, Inner);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Inner, _React$Component);

  Inner.prototype.render = function render() {
    var _props = this.props;
    var children = _props.children;

    var other = _objectWithoutProperties(_props, ["children"]);

    return _React2["default"].createElement(
      "div",
      _extends({ className: "l-content__inner" }, other),
      children
    );
  };

  return Inner;
})(_React2["default"].Component);

exports["default"] = Inner;
module.exports = exports["default"];
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _React = require("react");

var _React2 = _interopRequireWildcard(_React);

var Outer = (function (_React$Component) {
  function Outer() {
    _classCallCheck(this, Outer);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Outer, _React$Component);

  Outer.prototype.render = function render() {
    var _props = this.props;
    var children = _props.children;

    var other = _objectWithoutProperties(_props, ["children"]);

    return _React2["default"].createElement(
      "div",
      _extends({ className: "l-content" }, other),
      " ",
      children,
      " "
    );
  };

  return Outer;
})(_React2["default"].Component);

exports["default"] = Outer;
module.exports = exports["default"];
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

exports.__esModule = true;

var _Outer2 = require('./Outer');

var _Outer3 = _interopRequireWildcard(_Outer2);

exports.Outer = _Outer3['default'];

var _Inner2 = require('./Inner');

var _Inner3 = _interopRequireWildcard(_Inner2);

exports.Inner = _Inner3['default'];

var _Body2 = require('./Body');

var _Body3 = _interopRequireWildcard(_Body2);

exports.Body = _Body3['default'];
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

exports.__esModule = true;

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var _DomUtils = require('../../utils/DomUtils');

var _DomUtils2 = _interopRequireWildcard(_DomUtils);

var _EventListener = require('../../utils/EventListener');

var _EventListener2 = _interopRequireWildcard(_EventListener);

var ESC_KEY = 27;
var TRIGGER_REF = 'trigger';
// Flag if a node inside the root element should close.
var CLOSE_EXCEPTION_CLASS = 'js-dropdown-ex-flag';

exports.CLOSE_EXCEPTION_CLASS = CLOSE_EXCEPTION_CLASS;

var Dropdown = (function (_React$Component) {
  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    _React$Component.call(this, props);

    // active = used to show / hide the dropdown menu
    this.state = { active: false };
  }

  _inherits(Dropdown, _React$Component);

  Dropdown.prototype.componentDidMount = function componentDidMount() {
    this.$clickListener = _EventListener2['default'].listen(document, 'click', this._handleClick.bind(this));
    this.$keyUpListener = _EventListener2['default'].listen(document, 'keyup', this._handleKeyUp.bind(this));
  };

  Dropdown.prototype.componentWillUnmount = function componentWillUnmount() {
    this.$clickListener.remove();
    this.$keyUpListener.remove();
  };

  Dropdown.prototype.render = function render() {
    var active = this.state.active;
    var _props = this.props;
    var trigger = _props.trigger;
    var children = _props.children;

    return _React2['default'].createElement(
      'span',
      null,
      trigger(TRIGGER_REF),
      active ? children : null
    );
  };

  Dropdown.prototype._handleClick = function _handleClick(evt) {
    var active = this.state.active;
    var disabled = this.props.disabled;

    var target = evt.target;
    var root = _React2['default'].findDOMNode(this);
    // "Hey, dropdown, fuck it, it's disabled, okay?"
    // "It's not me, it's them, dropdown!"
    // let hasClass = DomUtils.hasClass(target, CLOSE_EXCEPTION_CLASS);
    if (disabled) {
      return false;
    }

    var triggerNode = _React2['default'].findDOMNode(this.refs[TRIGGER_REF]);
    // We'll create this condition here, so we don't use
    // `preventDefault` and `stopPropagation` on child nodes
    // or elements not inside the root node.
    if (target === triggerNode) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
    }

    this.setState({ active: _DomUtils2['default'].isNodeInRoot(target, root) ? !active : false });
  };

  Dropdown.prototype._handleKeyUp = function _handleKeyUp(evt) {
    // Close the dropdown menu when the `escape` key is pressed
    // while the state is active (menu is shown).
    if (this.state.active && evt.keyCode === ESC_KEY) {
      this.setState({ active: false });
    }
  };

  _createClass(Dropdown, null, [{
    key: 'propTypes',
    enumerable: true,
    value: {
      /**
       * The component which toggles the dropdown
       * It should be a function that returns a VDOM node.
       */
      trigger: _React2['default'].PropTypes.func,

      /**
       * Props which disabled the whole component to function
       */
      disabled: _React2['default'].PropTypes.bool
    }
  }, {
    key: 'defaultProps',
    enumerable: true,
    value: {
      disabled: false
    }
  }]);

  return Dropdown;
})(_React2['default'].Component);

exports['default'] = Dropdown;
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _expect = require('chai');

var _React = require('react/addons');

var _React2 = _interopRequireWildcard(_React);

var _TestUtils = require('react/lib/ReactTestUtils');

var _TestUtils2 = _interopRequireWildcard(_TestUtils);

var _Dropdown = require('../Dropdown');

var _Dropdown2 = _interopRequireWildcard(_Dropdown);

var _DomUtils = require('../../../utils/DomUtils');

var _DomUtils2 = _interopRequireWildcard(_DomUtils);

var _EventListener = require('../../../utils/EventListener');

var _EventListener2 = _interopRequireWildcard(_EventListener);

var ESC_KEY = 27;

describe('Dropdown component', function () {
  // https://github.com/airportyh/simulate.js/blob/master/simulate.js
  var sandbox = undefined;
  var removeSpy = undefined;
  var evt = undefined;
  var trigger = undefined;
  var Instance = undefined;
  beforeEach(function () {
    sandbox = sinon.sandbox.create();
    removeSpy = sandbox.spy();
    // Spy on EventListener before the component is rendered
    // Return some value only for verification purposes
    sandbox.stub(_EventListener2['default'], 'listen').returns({ remove: removeSpy });
    evt = { preventDefault: sandbox.spy(), stopPropagation: sandbox.spy() };
    Instance = _TestUtils2['default'].renderIntoDocument(_React2['default'].createElement(_Dropdown2['default'], { trigger: function (ref) {
        return _React2['default'].createElement(
          'button',
          { type: 'button', ref: ref },
          'Hi'
        );
      } }));
    trigger = _React2['default'].findDOMNode(Instance.refs.trigger);
  });

  it('should be closed by default', function () {
    _expect.expect(Instance.state.active).to.equal(false);
  });

  describe('#handleClick @when trigger is clicked', function () {
    it('should be triggered by the `click` event', function () {
      _expect.expect(_EventListener2['default'].listen.called).to.equal(true);
      _expect.expect(Instance.$clickListener).not.to.equal(undefined);
    });

    it('should open', function () {
      _expect.expect(Instance.state.active).to.equal(false);

      evt.target = trigger;
      Instance._handleClick(evt);
      _expect.expect(Instance.state.active).to.equal(true);
    });

    it('should hide when an outside element is pressed', function () {
      Instance.state.active = true;

      evt.target = document.documentElement;
      Instance._handleClick(evt);
      _expect.expect(Instance.state.active).to.equal(false);
    });

    it('should not do anything if the menu is hidden and an outside element is pressed', function () {
      _expect.expect(Instance.state.active).to.equal(false);

      evt.target = document.documentElement;
      Instance._handleClick(evt);
      _expect.expect(Instance.state.active).to.equal(false);
    });
  });

  //
  // //// ------------------------------

  describe('#_handleKeyUp @when ESC key is pressed', function () {
    it('should be triggered by the `click` event', function () {
      _expect.expect(_EventListener2['default'].listen.called).to.equal(true);
      _expect.expect(Instance.$keyUpListener).not.to.equal(undefined);
    });

    it('should prevent default actions if the trigger was clicked', function () {
      evt.target = trigger;
      Instance._handleClick(evt);
      _expect.expect(evt.preventDefault.called).to.equal(true);
      _expect.expect(evt.stopPropagation.called).to.equal(true);
    });

    it('should hide stuff while the menu is open', function () {
      Instance.state.active = true;

      Instance._handleKeyUp({ keyCode: ESC_KEY });
      _expect.expect(Instance.state.active).to.equal(false);
    });

    it('should not do anything when the menu is not open', function () {
      var deep = JSON.parse(JSON.stringify(Instance.state)); // Deep copy

      Instance._handleKeyUp({ keyCode: ESC_KEY });
      _expect.expect(deep).to.deep.equal(Instance.state);
    });

    it('should not do anything when not the esc key is pressed', function () {
      Instance.state.active = true;

      Instance._handleKeyUp({ keyCode: 69 });
      _expect.expect(Instance.state.active).not.to.equal(false);
    });
  });

  afterEach(function () {
    sandbox.restore();
  });
});
"use strict";

// import React from 'react';
// import _base from '../styles';
// export default React.createClass({
//   getInitialState: function() {
//       return { active: false };
//   },
//
//   onChange: function() {
//     this.setState({active: !this.state.active });
//   },
//   render() {
//     var { children, ...other } = this.props;
//     var controller = {
//       transform: this.state.active ? 'translateX(30px)' : 'translateX(0px)',
//       outline: 'none',
//       display: 'block',
//       height: 30,
//       width: 30,
//       borderRadius: '50%',
//       transition: '0.1s all',
//       backgroundColor: 'white',
//       border: '1px solid black'
//     };
//     var container = {
//       backgroundColor: this.state.active ? _base['color-success'] : 'gray',
//       width: 60,
//       borderRadius: 25,
//       height: 'auto',
//       cursor: 'pointer'
//     };
//
//     return (
//         <div style={container} onClick={this.onChange}>
//           <div style={controller} {...other}> </div>
//         </div>
//       );
//   }
// });
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

exports.__esModule = true;

var _Checkbox2 = require('./Checkbox');

var _Checkbox3 = _interopRequireWildcard(_Checkbox2);

exports.Checkbox = _Checkbox3['default'];
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

exports.__esModule = true;

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var List = (function (_React$Component) {
  function List(props) {
    _classCallCheck(this, List);

    _React$Component.call(this, props);
  }

  _inherits(List, _React$Component);

  List.prototype.render = function render() {
    var _props = this.props;
    var children = _props.children;

    var other = _objectWithoutProperties(_props, ['children']);

    return _React2['default'].createElement(
      'ul',
      other,
      ' ',
      children,
      ' '
    );
  };

  return List;
})(_React2['default'].Component);

exports['default'] = List;
module.exports = exports['default'];
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _React = require("react");

var _React2 = _interopRequireWildcard(_React);

var ListItem = (function (_React$Component) {
  function ListItem(props) {
    _classCallCheck(this, ListItem);

    _React$Component.call(this, props);
  }

  _inherits(ListItem, _React$Component);

  ListItem.prototype.render = function render() {
    var _props = this.props;
    var children = _props.children;

    var other = _objectWithoutProperties(_props, ["children"]);

    return _React2["default"].createElement(
      "li",
      _extends({ className: "l-sidebar__item" }, other),
      " ",
      children,
      " "
    );
  };

  return ListItem;
})(_React2["default"].Component);

;

exports["default"] = ListItem;
module.exports = exports["default"];
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

exports.__esModule = true;

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var ListItemLink = (function (_React$Component) {
  function ListItemLink(props) {
    _classCallCheck(this, ListItemLink);

    _React$Component.call(this, props);
  }

  _inherits(ListItemLink, _React$Component);

  ListItemLink.prototype.render = function render() {
    var _props = this.props;
    var children = _props.children;

    var other = _objectWithoutProperties(_props, ['children']);

    return _React2['default'].createElement(
      'a',
      other,
      children
    );
  };

  return ListItemLink;
})(_React2['default'].Component);

exports['default'] = ListItemLink;
module.exports = exports['default'];
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _React = require("react");

var _React2 = _interopRequireWildcard(_React);

var ListItemLinkIcon = (function (_React$Component) {
  function ListItemLinkIcon() {
    _classCallCheck(this, ListItemLinkIcon);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(ListItemLinkIcon, _React$Component);

  ListItemLinkIcon.prototype.render = function render() {
    var _props = this.props;
    var children = _props.children;

    var other = _objectWithoutProperties(_props, ["children"]);

    return _React2["default"].createElement(
      "span",
      _extends({ className: "l-sidebar__item__pre-icon" }, other),
      children
    );
  };

  return ListItemLinkIcon;
})(_React2["default"].Component);

exports["default"] = ListItemLinkIcon;
module.exports = exports["default"];
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

exports.__esModule = true;

var _React = require("react");

var _React2 = _interopRequireWildcard(_React);

var ListSeparator = (function (_React$Component) {
  function ListSeparator() {
    _classCallCheck(this, ListSeparator);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(ListSeparator, _React$Component);

  ListSeparator.prototype.render = function render() {
    return _React2["default"].createElement("li", { className: "l-sidebar__item-separator" });
  };

  return ListSeparator;
})(_React2["default"].Component);

exports["default"] = ListSeparator;
module.exports = exports["default"];
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

exports.__esModule = true;

var _React = require("react");

var _React2 = _interopRequireWildcard(_React);

exports["default"] = _React2["default"].createClass({
  displayName: "ListTitle",

  render: function render() {
    var _props = this.props;
    var children = _props.children;

    var other = _objectWithoutProperties(_props, ["children"]);

    return _React2["default"].createElement(
      "li",
      { className: "l-sidebar__item-title" },
      " ",
      children,
      " "
    );
  }
});
module.exports = exports["default"];
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _React = require("react");

var _React2 = _interopRequireWildcard(_React);

exports["default"] = _React2["default"].createClass({
  displayName: "Outer",

  render: function render() {
    var _props = this.props;
    var children = _props.children;

    var other = _objectWithoutProperties(_props, ["children"]);

    return _React2["default"].createElement(
      "div",
      _extends({ className: "l-sidebar" }, other),
      children
    );
  }
});
module.exports = exports["default"];
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

exports.__esModule = true;

var _Outer2 = require('./Outer');

var _Outer3 = _interopRequireWildcard(_Outer2);

exports.Outer = _Outer3['default'];

var _List2 = require('./List');

var _List3 = _interopRequireWildcard(_List2);

exports.List = _List3['default'];

var _ListItem2 = require('./ListItem');

var _ListItem3 = _interopRequireWildcard(_ListItem2);

exports.ListItem = _ListItem3['default'];

var _ListItemLink2 = require('./ListItemLink');

var _ListItemLink3 = _interopRequireWildcard(_ListItemLink2);

exports.ListItemLink = _ListItemLink3['default'];

var _ListItemLinkIcon2 = require('./ListItemLinkIcon');

var _ListItemLinkIcon3 = _interopRequireWildcard(_ListItemLinkIcon2);

exports.ListItemLinkIcon = _ListItemLinkIcon3['default'];

var _ListTitle2 = require('./ListTitle');

var _ListTitle3 = _interopRequireWildcard(_ListTitle2);

exports.ListTitle = _ListTitle3['default'];

var _ListSeparator2 = require('./ListSeparator');

var _ListSeparator3 = _interopRequireWildcard(_ListSeparator2);

exports.ListSeparator = _ListSeparator3['default'];
"use strict";
"use strict";
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _React = require("react");

var _React2 = _interopRequireWildcard(_React);

var Inner = (function (_React$Component) {
  function Inner() {
    _classCallCheck(this, Inner);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Inner, _React$Component);

  Inner.prototype.render = function render() {
    var _props = this.props;
    var children = _props.children;

    var other = _objectWithoutProperties(_props, ["children"]);

    return _React2["default"].createElement(
      "div",
      _extends({ className: "l-topbar__inner" }, other),
      children
    );
  };

  return Inner;
})(_React2["default"].Component);

exports["default"] = Inner;
module.exports = exports["default"];
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _React = require("react");

var _React2 = _interopRequireWildcard(_React);

var Outer = (function (_React$Component) {
  function Outer() {
    _classCallCheck(this, Outer);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Outer, _React$Component);

  Outer.prototype.render = function render() {
    var _props = this.props;
    var children = _props.children;

    var other = _objectWithoutProperties(_props, ["children"]);

    return _React2["default"].createElement(
      "div",
      _extends({ className: "l-topbar" }, other),
      children
    );
  };

  return Outer;
})(_React2["default"].Component);

exports["default"] = Outer;
module.exports = exports["default"];
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _React = require("react");

var _React2 = _interopRequireWildcard(_React);

var Title = (function (_React$Component) {
  function Title() {
    _classCallCheck(this, Title);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Title, _React$Component);

  Title.prototype.render = function render() {
    var _props = this.props;
    var children = _props.children;

    var other = _objectWithoutProperties(_props, ["children"]);

    return _React2["default"].createElement(
      "div",
      _extends({ className: "l-topbar__title" }, other),
      children
    );
  };

  return Title;
})(_React2["default"].Component);

exports["default"] = Title;
module.exports = exports["default"];
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

exports.__esModule = true;

var _Outer2 = require('./Outer');

var _Outer3 = _interopRequireWildcard(_Outer2);

exports.Outer = _Outer3['default'];

var _Inner2 = require('./Inner');

var _Inner3 = _interopRequireWildcard(_Inner2);

exports.Inner = _Inner3['default'];

var _Title2 = require('./Title');

var _Title3 = _interopRequireWildcard(_Title2);

exports.Title = _Title3['default'];
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

exports.__esModule = true;

var _import = require('./components/Topbar/index');

var _Topbar = _interopRequireWildcard(_import);

exports.Topbar = _Topbar;

var _import2 = require('./components/Sidebar/index');

var _Sidebar = _interopRequireWildcard(_import2);

exports.Sidebar = _Sidebar;

var _import3 = require('./components/Content/index');

var _Content = _interopRequireWildcard(_import3);

exports.Content = _Content;

var _import4 = require('./components/Form/index');

var _Form = _interopRequireWildcard(_import4);

exports.Form = _Form;

var _Dropdown2 = require('./components/Dropdown/Dropdown');

var _Dropdown3 = _interopRequireWildcard(_Dropdown2);

exports.Dropdown = _Dropdown3['default'];

var _import5 = require('./components/Tooltip/index');

var _Tooltip = _interopRequireWildcard(_import5);

exports.Tooltip = _Tooltip;
'use strict';

exports.__esModule = true;
exports['default'] = {
  /**
   * Checks whether a node is within
   * a root nodes tree
   *
   * Copyright 2014+ React Bootstrap.
   * This content of this was copied from
   * https://github.com/react-bootstrap/react-bootstrap/blob/master/src/DropdownStateMixin.js
   *
   * @param {DOMElement} node
   * @param {DOMElement} root
   * @returns {boolean}
   */
  isNodeInRoot: function isNodeInRoot(node, root) {
    while (node) {
      if (node === root) {
        return true;
      }
      node = node.parentNode;
    }

    return false;
  },

  /**
   * Checks if the given node has the given class
   *
   * @param {DOMElement} node
   * @param {string} className
   * @returns {boolean}
   */
  hasClass: function hasClass(node, className) {
    return node.className.split(' ').indexOf(className) !== -1;
  }
};
module.exports = exports['default'];
'use strict';

exports.__esModule = true;
/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * This file contains a modified version of:
 * https://github.com/facebook/react/blob/v0.12.0/src/vendor/stubs/EventListener.js
 *
 * This file's contents were copied from:
 * https://github.com/react-bootstrap/react-bootstrap/blob/master/src/utils/EventListener.js
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * TODO: remove in favour of solution provided by:
 *  https://github.com/facebook/react/issues/285
 */

/**
 * Does not take into account specific nature of platform.
 */
exports['default'] = {
  /**
   * Listen to DOM events during the bubble phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
  listen: function listen(target, eventType, callback) {
    if (target.addEventListener) {
      target.addEventListener(eventType, callback, false);
      return {
        remove: function remove() {
          target.removeEventListener(eventType, callback, false);
        }
      };
    } else if (target.attachEvent) {
      target.attachEvent('on' + eventType, callback);
      return {
        remove: function remove() {
          target.detachEvent('on' + eventType, callback);
        }
      };
    }
  }
};
module.exports = exports['default'];
