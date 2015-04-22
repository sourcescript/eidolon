import { expect } from 'chai';
import React from 'react/addons';
import Dropdown from '../Dropdown';

const ESC_KEY = 13;

var TestUtils = React.addons.TestUtils;
describe('Dropdown component', () => {
  // https://github.com/airportyh/simulate.js/blob/master/simulate.js
  var _mouse;
  var _keyup;
  var Instance;
  beforeEach(() => {
    _mouse = document.createEvent('HTMLEvents');
    _mouse.initEvent('click', true, true);

    _keyup = document.createEvent('Events');
    _keyup.initEvent('keyup', true, true);

    Instance = TestUtils.renderIntoDocument(
      <Dropdown trigger={(ref) => { return <button type="button" ref={ref}>Hi</button>; }} />
    );
  });

  describe('press esc', () => {
    it('should hide stuff when `esc` is pressed while the menu is open', () => {
      Instance.state.active = true;
      // Just to confirm ;)
      expect(Instance.state.active).to.equal(true);

      _keyup.keyCode = ESC_KEY;
      window.dispatchEvent(_keyup);
      expect(Instance.state.active).to.equal(false);
    });

    it('should not do anything when the menu is not open', () => {
      Instance.state.active = false;
      // Just to confirm ;)
      expect(Instance.state.active).to.equal(false);

      _keyup.keyCode = ESC_KEY;
      window.dispatchEvent(_keyup);
      expect(Instance.state.active).to.equal(false);
    });

    it('should not do anything when not the esc key is pressed', () => {
      Instance.state.active = true;
      // Just to confirm ;)
      expect(Instance.state.active).to.equal(true);

      _keyup.keyCode = 69;
      window.dispatchEvent(_keyup);
      expect(Instance.state.active).not.to.equal(false);
    });
  });

  it('should be closed by default', () => {
    expect(Instance.state.active).to.equal(false);
  });


  it('should toggle close/open when trigger is clicked', () => {
    expect(Instance.state.active).to.equal(false);

    var target = React.findDOMNode(Instance.refs.trigger);
    _mouse.target = target;
    window.dispatchEvent(_mouse);
    expect(Instance.state.active).to.equal(true);

    // _mouse.target = target;
    // window.dispatchEvent(_mouse);
    // expect(Instance.state.active).to.equal(false);
  });

  it('should hide when an outside element is pressed', () => {
    Instance.state.active = true;
    expect(Instance.state.active).to.equal(true);
    _mouse.target = window;
    window.dispatchEvent(_mouse);
    expect(Instance.state.active).to.equal(false);
  });

  it('should not do anything if the menu is hidden and an outside element is pressed', () => {
    expect(Instance.state.active).to.equal(false);
    _mouse.target = window;
    window.dispatchEvent(_mouse);
    expect(Instance.state.active).to.equal(false);
  })
});
