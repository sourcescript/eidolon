import { expect } from 'chai';
import React from 'react/addons';
import TestUtils from 'react/lib/ReactTestUtils';
import Dropdown from '../Dropdown';
import DomUtils from '../../../utils/DomUtils';
import EventListener from '../../../utils/EventListener';

const ESC_KEY = 13;

describe('Dropdown component', () => {
  // https://github.com/airportyh/simulate.js/blob/master/simulate.js
  let sandbox;
  let removeSpy;
  let evt;
  let trigger;
  let Instance;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    removeSpy = sandbox.spy();
    // Spy on EventListener before the component is rendered
    // Return some value only for verification purposes
    sandbox.stub(EventListener, 'listen').returns({ remove: removeSpy });
    evt = { preventDefault: sandbox.spy(), stopPropagation: sandbox.spy() };
    Instance = TestUtils.renderIntoDocument(
      <Dropdown trigger={ref => <button type="button" ref={ref}>Hi</button> } />
    );
    trigger = React.findDOMNode(Instance.refs.trigger);
  });

  it('should be closed by default', () => {
    expect(Instance.state.active).to.equal(false);
  });

  describe('#handleClick @when trigger is clicked', () => {
    it('should be triggered by the `click` event', () => {
      expect(EventListener.listen.called).to.equal(true);
      expect(Instance.$clickListener).not.to.equal(undefined);
    });

    it('should open', () => {
      expect(Instance.state.active).to.equal(false);

      evt.target = trigger;
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
    it('should be triggered by the `click` event', () => {
      expect(EventListener.listen.called).to.equal(true);
      expect(Instance.$keyUpListener).not.to.equal(undefined);
    });

    it('should prevent default actions if the trigger was clicked', () => {
      evt.target = trigger;
      Instance._handleClick(evt);
      expect(evt.preventDefault.called).to.equal(true);
      expect(evt.stopPropagation.called).to.equal(true);
    });

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

  afterEach(() => { sandbox.restore(); });
});
