"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

  _createClass(Body, [{
    key: "render",
    value: function render() {
      var _props = this.props;
      var children = _props.children;

      var other = _objectWithoutProperties(_props, ["children"]);

      return _React2["default"].createElement(
        "div",
        _extends({ className: "l-content__inner__body" }, other),
        children
      );
    }
  }]);

  return Body;
})(_React2["default"].Component);

exports["default"] = Body;
module.exports = exports["default"];
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

  _createClass(Inner, [{
    key: "render",
    value: function render() {
      var _props = this.props;
      var children = _props.children;

      var other = _objectWithoutProperties(_props, ["children"]);

      return _React2["default"].createElement(
        "div",
        _extends({ className: "l-content__inner" }, other),
        children
      );
    }
  }]);

  return Inner;
})(_React2["default"].Component);

exports["default"] = Inner;
module.exports = exports["default"];
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

  _createClass(Outer, [{
    key: "render",
    value: function render() {
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
    }
  }]);

  return Outer;
})(_React2["default"].Component);

exports["default"] = Outer;
module.exports = exports["default"];
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

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

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

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

    _get(Object.getPrototypeOf(Dropdown.prototype), 'constructor', this).call(this, props);

    // active = used to show / hide the dropdown menu
    this.state = { active: false };
  }

  _inherits(Dropdown, _React$Component);

  _createClass(Dropdown, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.$clickListener = _EventListener2['default'].listen(document, 'click', this._handleClick.bind(this));
      this.$keyUpListener = _EventListener2['default'].listen(document, 'keyup', this._handleKeyUp.bind(this));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.$clickListener.remove();
      this.$keyUpListener.remove();
    }
  }, {
    key: 'render',
    value: function render() {
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
    }
  }, {
    key: '_handleClick',
    value: function _handleClick(evt) {
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
    }
  }, {
    key: '_handleKeyUp',
    value: function _handleKeyUp(evt) {
      // Close the dropdown menu when the `escape` key is pressed
      // while the state is active (menu is shown).
      if (this.state.active && evt.keyCode === ESC_KEY) {
        this.setState({ active: false });
      }
    }
  }], [{
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

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _Checkbox2 = require('./Checkbox');

var _Checkbox3 = _interopRequireWildcard(_Checkbox2);

exports.Checkbox = _Checkbox3['default'];
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var List = (function (_React$Component) {
  function List(props) {
    _classCallCheck(this, List);

    _get(Object.getPrototypeOf(List.prototype), 'constructor', this).call(this, props);
  }

  _inherits(List, _React$Component);

  _createClass(List, [{
    key: 'render',
    value: function render() {
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
    }
  }]);

  return List;
})(_React2['default'].Component);

exports['default'] = List;
module.exports = exports['default'];
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _React = require("react");

var _React2 = _interopRequireWildcard(_React);

var ListItem = (function (_React$Component) {
  function ListItem(props) {
    _classCallCheck(this, ListItem);

    _get(Object.getPrototypeOf(ListItem.prototype), "constructor", this).call(this, props);
  }

  _inherits(ListItem, _React$Component);

  _createClass(ListItem, [{
    key: "render",
    value: function render() {
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
    }
  }]);

  return ListItem;
})(_React2["default"].Component);

;

exports["default"] = ListItem;
module.exports = exports["default"];
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var ListItemLink = (function (_React$Component) {
  function ListItemLink(props) {
    _classCallCheck(this, ListItemLink);

    _get(Object.getPrototypeOf(ListItemLink.prototype), 'constructor', this).call(this, props);
  }

  _inherits(ListItemLink, _React$Component);

  _createClass(ListItemLink, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;

      var other = _objectWithoutProperties(_props, ['children']);

      return _React2['default'].createElement(
        'a',
        other,
        children
      );
    }
  }]);

  return ListItemLink;
})(_React2['default'].Component);

exports['default'] = ListItemLink;
module.exports = exports['default'];
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

  _createClass(ListItemLinkIcon, [{
    key: "render",
    value: function render() {
      var _props = this.props;
      var children = _props.children;

      var other = _objectWithoutProperties(_props, ["children"]);

      return _React2["default"].createElement(
        "span",
        _extends({ className: "l-sidebar__item__pre-icon" }, other),
        children
      );
    }
  }]);

  return ListItemLinkIcon;
})(_React2["default"].Component);

exports["default"] = ListItemLinkIcon;
module.exports = exports["default"];
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

  _createClass(ListSeparator, [{
    key: "render",
    value: function render() {
      return _React2["default"].createElement("li", { className: "l-sidebar__item-separator" });
    }
  }]);

  return ListSeparator;
})(_React2["default"].Component);

exports["default"] = ListSeparator;
module.exports = exports["default"];
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

Object.defineProperty(exports, '__esModule', {
  value: true
});

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
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var _cloneWithProps = require('react/lib/cloneWithProps');

var _cloneWithProps2 = _interopRequireWildcard(_cloneWithProps);

var _OverlayTriggerUtil = require('./OverlayTriggerUtil');

var _OverlayTriggerUtil2 = _interopRequireWildcard(_OverlayTriggerUtil);

var $container = document.body;
// Export for testing
var $OVERLAY_CONTAINER_PROP = Symbol();
exports.$OVERLAY_CONTAINER_PROP = $OVERLAY_CONTAINER_PROP;
var $OVERLAY_CONTAINER_INSTANCE_PROP = Symbol();

exports.$OVERLAY_CONTAINER_INSTANCE_PROP = $OVERLAY_CONTAINER_INSTANCE_PROP;
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

var OverlayTrigger = (function (_React$Component) {
  function OverlayTrigger(props) {
    _classCallCheck(this, OverlayTrigger);

    _get(Object.getPrototypeOf(OverlayTrigger.prototype), 'constructor', this).call(this, props);
    this.state = {
      show: false,
      top: 0,
      left: 0
    };
  }

  _inherits(OverlayTrigger, _React$Component);

  _createClass(OverlayTrigger, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._mountOverlayContainer();
      this._mountOverlay();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._unmountOverlay();
      this._unmountOverlayContainer();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      // Remount the overlay
      if (this[$OVERLAY_CONTAINER_INSTANCE_PROP]) {
        this._unmountOverlay();
      }

      this._mountOverlay();
    }
  }, {
    key: 'render',
    value: function render() {
      return _cloneWithProps2['default'](this.props.children, {
        onMouseEnter: this._handleMouseEnter.bind(this),
        onMouseOut: this._handleMouseOut.bind(this)
      });
    }
  }, {
    key: '_handleMouseEnter',

    /**
     * Displays the overlay
     */
    value: function _handleMouseEnter() {
      var _this = this;

      this.setState({ show: true }, function () {
        var position = _this.props.position;

        var trigger = _React2['default'].findDOMNode(_this);
        var overlay = _React2['default'].findDOMNode(_this[$OVERLAY_CONTAINER_INSTANCE_PROP]);
        var offset = _OverlayTriggerUtil2['default'].calculatePosition(trigger, overlay, position);
        _this.setState({ top: offset.top, left: offset.left });
      });
    }
  }, {
    key: '_handleMouseOut',

    /**
     * Hides the overlay
     */
    value: function _handleMouseOut() {
      this.setState({ show: false });
    }
  }, {
    key: '_mountOverlay',

    /**
     * Mounts the overlay and its container
     */
    value: function _mountOverlay() {
      // Mount the overlay itself
      var offset = { top: this.state.top, left: this.state.left };
      var overlay = typeof this.props.overlay == 'function' ? this.props.overlay() : this.props.overlay;

      this[$OVERLAY_CONTAINER_INSTANCE_PROP] = _React2['default'].render(this.state.show ? _cloneWithProps2['default'](overlay, offset) : _React2['default'].createElement('span', null), this[$OVERLAY_CONTAINER_PROP]);
    }
  }, {
    key: '_mountOverlayContainer',
    value: function _mountOverlayContainer() {
      // Mount the container
      this[$OVERLAY_CONTAINER_PROP] = document.createElement('div');
      $container.appendChild(this[$OVERLAY_CONTAINER_PROP]);
    }
  }, {
    key: '_unmountOverlay',

    /**
     * Unmounts the overlay and its container
     */
    value: function _unmountOverlay() {
      _React2['default'].unmountComponentAtNode(this[$OVERLAY_CONTAINER_PROP]);
      this[$OVERLAY_CONTAINER_INSTANCE_PROP] = null;
    }
  }, {
    key: '_unmountOverlayContainer',
    value: function _unmountOverlayContainer() {
      $container.removeChild(this[$OVERLAY_CONTAINER_PROP]);
      this[$OVERLAY_CONTAINER_PROP] = null;
    }
  }], [{
    key: 'propTypes',
    enumerable: true,
    value: {
      /**
       * The overlay component
       */
      overlay: _React2['default'].PropTypes.oneOfType([_React2['default'].PropTypes.func, _React2['default'].PropTypes.Element]).isRequired,

      /**
       * Position to display the overlay
       */
      position: _React2['default'].PropTypes.oneOf(['top', 'left', 'right', 'bottom'])
    }
  }, {
    key: 'defaultProps',
    enumerable: true,
    value: {
      position: 'left'
    }
  }]);

  return OverlayTrigger;
})(_React2['default'].Component);

exports['default'] = OverlayTrigger;
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = {
  /**
   * Calculates the position of the overlay (tooltip)
   *
   * The math here is as simple as the requirement. We just
   * want the tooltip to appear in the center of the provided
   * placement (for example, horizontally center it if top or btm;
   * or vertically center it if left or right).
   *
   * To center `top`:
   * (left): (<A> + <B / 2> + <C / 2>)
   * A = offsetLeft; distance between the left-most screen and `trigger`
   * B = ./.
   * C = ./.
   *
   * I left a comment here because the terminologies were a bit confusing.
   * There's duplicated code (for example, top and bottom had the same `left` offset;
   * left and right had the same `top` offset) because obviously, it would be unnecessarily
   * expensiver and/or the code with be more lengthy (which is seriously fucking bad).
   */
  calculatePosition: function calculatePosition(trigger, overlay, placement) {
    // offsetTop, offsetLeft
    switch (placement) {
      case 'left':
        return {
          top: trigger.offsetTop + trigger.offsetHeight / 2 - overlay.offsetHeight / 2,
          left: trigger.offsetLeft - overlay.offsetWidth
        };
      case 'right':
        return {
          top: trigger.offsetTop + trigger.offsetHeight / 2 - overlay.offsetHeight / 2,
          left: trigger.offsetLeft + trigger.offsetWidth
        };
      case 'top':
        return {
          top: trigger.offsetTop - overlay.offsetHeight,
          left: trigger.offsetLeft + trigger.offsetWidth / 2 - overlay.offsetWidth / 2
        };
      case 'bottom':
        return {
          top: trigger.offsetTop + trigger.offsetHeight,
          left: trigger.offsetLeft + trigger.offsetWidth / 2 - overlay.offsetWidth / 2
        };
      default:
      // I can't imagine this being ran through
      // No need for this since the placement is validated with `propTypes`
    }
  }
};
module.exports = exports['default'];
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var _classnames = require('classnames');

var _classnames2 = _interopRequireWildcard(_classnames);

var Tooltip = (function (_React$Component) {
  function Tooltip(props) {
    _classCallCheck(this, Tooltip);

    _get(Object.getPrototypeOf(Tooltip.prototype), 'constructor', this).call(this, props);
  }

  _inherits(Tooltip, _React$Component);

  _createClass(Tooltip, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var top = _props.top;
      var left = _props.left;

      return _React2['default'].createElement(
        'div',
        { className: 'tooltip', style: { top: top, left: left } },
        children
      );
    }
  }]);

  return Tooltip;
})(_React2['default'].Component);

exports['default'] = Tooltip;
module.exports = exports['default'];
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _expect = require('chai');

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var _TestUtils = require('react/lib/ReactTestUtils');

var _TestUtils2 = _interopRequireWildcard(_TestUtils);

var _OverlayTrigger$$OVERLAY_CONTAINER_PROP$$OVERLAY_CONTAINER_INSTANCE_PROP = require('../OverlayTrigger');

var _OverlayTrigger$$OVERLAY_CONTAINER_PROP$$OVERLAY_CONTAINER_INSTANCE_PROP2 = _interopRequireWildcard(_OverlayTrigger$$OVERLAY_CONTAINER_PROP$$OVERLAY_CONTAINER_INSTANCE_PROP);

var _OverlayTriggerUtil = require('../OverlayTriggerUtil');

var _OverlayTriggerUtil2 = _interopRequireWildcard(_OverlayTriggerUtil);

var _Tooltip = require('../Tooltip');

var _Tooltip2 = _interopRequireWildcard(_Tooltip);

describe('OverlayTrigger', function () {
  var sandbox = undefined;
  var Render = undefined;
  var Instance = undefined;
  beforeEach(function () {
    sandbox = sinon.sandbox.create();
    // So we don't have to worry about it.
    sandbox.stub(_OverlayTriggerUtil2['default'], 'calculatePosition').returns({ top: 0, left: 0 });
    Render = function () {
      var position = arguments[0] === undefined ? 'left' : arguments[0];
      var children = arguments[1] === undefined ? _React2['default'].createElement('section', null) : arguments[1];
      var overlay = arguments[2] === undefined ? _React2['default'].createElement('section', null) : arguments[2];

      return _TestUtils2['default'].renderIntoDocument(_React2['default'].createElement(
        _OverlayTrigger$$OVERLAY_CONTAINER_PROP$$OVERLAY_CONTAINER_INSTANCE_PROP2['default'],
        { position: position, overlay: function () {
            return overlay;
          } },
        children
      ));
    };
    Instance = Render();
  });

  describe('(it should mount the overlay) mounting the overlay', function () {
    describe('#_mountOverlayContainer', function () {
      it('should mount the overlay', function () {
        // Div our default container element. It should be appended to the body.
        _expect.expect(Instance[_OverlayTrigger$$OVERLAY_CONTAINER_PROP$$OVERLAY_CONTAINER_INSTANCE_PROP.$OVERLAY_CONTAINER_PROP]).not.to.equal(null);
      });
    });

    describe('#_mountOverlay', function () {
      it('should mount the overlay', function () {
        ;
        // Our container instance should be rendered (React.rendder).
        // We should have a default element of span (since null is not accepted).
        _expect.expect(Instance[_OverlayTrigger$$OVERLAY_CONTAINER_PROP$$OVERLAY_CONTAINER_INSTANCE_PROP.$OVERLAY_CONTAINER_INSTANCE_PROP]).not.to.equal(null);
        _expect.expect(function () {
          var $overlay = Instance[_OverlayTrigger$$OVERLAY_CONTAINER_PROP$$OVERLAY_CONTAINER_INSTANCE_PROP.$OVERLAY_CONTAINER_INSTANCE_PROP];
          _TestUtils2['default'].findRenderedDOMComponentWithTag($overlay, 'span');
        }).not.to['throw']();
      });
    });
  });

  describe('(it should mount the overlay) mounting the overlay', function () {
    describe('#_unmountOverlay', function () {
      it('should unmount the overlay', function () {
        Instance._unmountOverlay();
        _expect.expect(Instance[_OverlayTrigger$$OVERLAY_CONTAINER_PROP$$OVERLAY_CONTAINER_INSTANCE_PROP.$OVERLAY_CONTAINER_INSTANCE_PROP]).to.equal(null);
      });
    });

    describe('#_unmountOverlayContainer', function () {
      it('should unmount the overlay', function () {
        Instance._unmountOverlayContainer();
        _expect.expect(Instance[_OverlayTrigger$$OVERLAY_CONTAINER_PROP$$OVERLAY_CONTAINER_INSTANCE_PROP.$OVERLAY_CONTAINER_PROP]).to.equal(null);
        // Don't have to test whether the div doen't exist.
        // It's BOIOOOOOORING
      });
    });
  });

  describe('#_handleMouseEnter displaying the overlay', function () {
    it('should display the overlay', function () {
      Instance._handleMouseEnter();

      _expect.expect(Instance.state.show).to.equal(true);
      _expect.expect(function () {
        var $overlay = Instance[_OverlayTrigger$$OVERLAY_CONTAINER_PROP$$OVERLAY_CONTAINER_INSTANCE_PROP.$OVERLAY_CONTAINER_INSTANCE_PROP];
        _TestUtils2['default'].findRenderedDOMComponentWithTag($overlay, 'section');
      }).not.to['throw']();
    });

    it('should calculate', function () {
      Instance._handleMouseEnter();
      _expect.expect(_OverlayTriggerUtil2['default'].calculatePosition.called).to.equal(true);
    });
  });

  describe('#_handleMouseLeave hiding the overlay', function () {
    it('should hide the overlay', function () {
      // Since we've tested this, we'll just call it here so we can justify.
      Instance._handleMouseEnter();
      // Instance._handleMouseOut();
      _TestUtils2['default'].Simulate.mouseOut(_React2['default'].findDOMNode(Instance));
      _expect.expect(Instance.state.show).to.equal(false);
      _expect.expect(function () {
        var $overlay = Instance[_OverlayTrigger$$OVERLAY_CONTAINER_PROP$$OVERLAY_CONTAINER_INSTANCE_PROP.$OVERLAY_CONTAINER_INSTANCE_PROP];
        _TestUtils2['default'].findRenderedDOMComponentWithTag($overlay, 'span');
      }).not.to['throw']();
    });
  });

  describe('#componentDidUpdate when the component updates', function () {
    it('should remount the overlay each update', function () {
      var $overlay = Instance[_OverlayTrigger$$OVERLAY_CONTAINER_PROP$$OVERLAY_CONTAINER_INSTANCE_PROP.$OVERLAY_CONTAINER_INSTANCE_PROP];
      Instance.forceUpdate();
      _expect.expect($overlay).not.to.equal(Instance[_OverlayTrigger$$OVERLAY_CONTAINER_PROP$$OVERLAY_CONTAINER_INSTANCE_PROP.$OVERLAY_CONTAINER_PROP]);
    });
  });

  describe('#_unmountOverlayContainer', function () {
    it('should unmount the overlay', function () {
      Instance._unmountOverlayContainer();
      _expect.expect(Instance[_OverlayTrigger$$OVERLAY_CONTAINER_PROP$$OVERLAY_CONTAINER_INSTANCE_PROP.$OVERLAY_CONTAINER_PROP]).to.equal(null);
    });
  });

  afterEach(function () {
    sandbox.restore();
  });
});
"use strict";
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

  _createClass(Inner, [{
    key: "render",
    value: function render() {
      var _props = this.props;
      var children = _props.children;

      var other = _objectWithoutProperties(_props, ["children"]);

      return _React2["default"].createElement(
        "div",
        _extends({ className: "l-topbar__inner" }, other),
        children
      );
    }
  }]);

  return Inner;
})(_React2["default"].Component);

exports["default"] = Inner;
module.exports = exports["default"];
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

  _createClass(Outer, [{
    key: "render",
    value: function render() {
      var _props = this.props;
      var children = _props.children;

      var other = _objectWithoutProperties(_props, ["children"]);

      return _React2["default"].createElement(
        "div",
        _extends({ className: "l-topbar" }, other),
        children
      );
    }
  }]);

  return Outer;
})(_React2["default"].Component);

exports["default"] = Outer;
module.exports = exports["default"];
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

  _createClass(Title, [{
    key: "render",
    value: function render() {
      var _props = this.props;
      var children = _props.children;

      var other = _objectWithoutProperties(_props, ["children"]);

      return _React2["default"].createElement(
        "div",
        _extends({ className: "l-topbar__title" }, other),
        children
      );
    }
  }]);

  return Title;
})(_React2["default"].Component);

exports["default"] = Title;
module.exports = exports["default"];
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

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

Object.defineProperty(exports, '__esModule', {
  value: true
});

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

var _OverlayTrigger2 = require('./components/Tooltip/OverlayTrigger');

var _OverlayTrigger3 = _interopRequireWildcard(_OverlayTrigger2);

exports.OverlayTrigger = _OverlayTrigger3['default'];

var _Tooltip2 = require('./components/Tooltip/Tooltip');

var _Tooltip3 = _interopRequireWildcard(_Tooltip2);

exports.Tooltip = _Tooltip3['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
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

Object.defineProperty(exports, '__esModule', {
  value: true
});
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

//# sourceMappingURL=suleras.js.map