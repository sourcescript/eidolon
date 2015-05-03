import { expect } from 'chai';
import React from 'react/addons';
import TestUtils from 'react/lib/ReactTestUtils';
import Dropdown from '../Dropdown';
import DomUtils from '../../../utils/DomUtils';
import EventListener from '../../../utils/EventListener';
import Simulate from '../../../../test/Simulate';

const ESC_KEY = 13;

describe('Dropdown component', () => {
  // https://github.com/airportyh/simulate.js/blob/master/simulate.js
  let sandbox;
  let listenSpy;
  let hasClassStub;

  let evt;
  let _mouse;
  let _keyup;
  let Instance;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    // listenSpy = sandbox.spy();
    // sandbox.stub(EventListener, 'listen').returns({ remove: listenSpy });
    // hasClassStub = sandbox.stub(DomUtils, 'hasClass');

    _mouse = document.createEvent('HTMLEvents');
    _mouse.initEvent('click', true, true);

    _keyup = document.createEvent('Events');
    _keyup.initEvent('keyup', true, true);

    evt = { preventDefault: sandbox.spy(), stopPropagation: sandbox.spy() };

    Instance = TestUtils.renderIntoDocument(
      <Dropdown trigger={(ref) => { return <button type="button" ref={ref}>Hi</button>; }} />
    );
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should be closed by default', () => {
    expect(Instance.state.active).to.equal(false);
  });

  describe('#handleClick @when trigger is clicked', () => {
    it('should open', () => {
      expect(Instance.state.active).to.equal(false);

      evt.target = React.findDOMNode(Instance.refs.trigger);
      Instance._handleClick(evt);
      expect(Instance.state.active).to.equal(true);
    });

    it('should hide when an outside element is pressed', () => {
      Instance.state.active = true;

      evt.target = document.documentElement;
      Instance._handleClick(evt);
      expect(Instance.state.active).to.equal(false);
    });

    it('should not do anything if the menu is hidden and an outside element is pressed', () => {
      expect(Instance.state.active).to.equal(false);

      evt.target = document.documentElement;
      Instance._handleClick(evt);
      expect(Instance.state.active).to.equal(false);
    });
  });

  //
  // //// ------------------------------

  describe('#_handleKeyUp @when ESC key is pressed', () => {
    it('should hide stuff while the menu is open', () => {
      Instance.state.active = true;

      Instance._handleKeyUp({ keyCode: ESC_KEY });
      expect(Instance.state.active).to.equal(false);
    });

    it('should not do anything when the menu is not open', () => {
      let deep = JSON.parse(JSON.stringify(Instance.state)); // Deep copy

      Instance._handleKeyUp({ keyCode: ESC_KEY });
      expect(deep).to.deep.equal(Instance.state);
    });

    it('should not do anything when not the esc key is pressed', () => {
      Instance.state.active = true;

      Instance._handleKeyUp({ keyCode: 69 });
      expect(Instance.state.active).not.to.equal(false);
    });
  });
});
