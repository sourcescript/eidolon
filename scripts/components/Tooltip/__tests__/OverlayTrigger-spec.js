import { expect } from 'chai';
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import OverlayTrigger, {
  $OVERLAY_CONTAINER_PROP,
  $OVERLAY_CONTAINER_INSTANCE_PROP
} from '../OverlayTrigger';
import OverlayTriggerUtil from '../OverlayTriggerUtil';
import Tooltip from '../Tooltip';

describe('OverlayTrigger', () => {
  let sandbox;
  let Render;
  let Instance;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    // So we don't have to worry about it.
    sandbox.stub(OverlayTriggerUtil, 'calculatePosition').returns({ top: 0, left:0 });
    Render = (position = 'left', children = <section />, overlay = <section />) => {
      return TestUtils.renderIntoDocument(
        <OverlayTrigger position={position} overlay={() => { return overlay; }}>
          {children}
        </OverlayTrigger>
      );
    };
    Instance = Render();
  });

  describe('(it should mount the overlay) mounting the overlay', () => {
    describe('#_mountOverlayContainer', () => {
      it('should mount the overlay', () => {
        // Div our default container element. It should be appended to the body.
        expect(Instance[$OVERLAY_CONTAINER_PROP]).not.to.equal(null);
      });
    });

    describe('#_mountOverlay', () => {
      it('should mount the overlay', () => {;
        // Our container instance should be rendered (React.rendder).
        // We should have a default element of span (since null is not accepted).
        expect(Instance[$OVERLAY_CONTAINER_INSTANCE_PROP]).not.to.equal(null);
        expect(() => {
          let $overlay = Instance[$OVERLAY_CONTAINER_INSTANCE_PROP];
          TestUtils.findRenderedDOMComponentWithTag($overlay, 'span');
        }).not.to.throw();
      });
    });
  });

  describe('(it should mount the overlay) mounting the overlay', () => {
    describe('#_unmountOverlay', () => {
      it('should unmount the overlay', () => {
        Instance._unmountOverlay();
        expect(Instance[$OVERLAY_CONTAINER_INSTANCE_PROP]).to.equal(null);
      });
    });

     describe('#_unmountOverlayContainer', () => {
      it('should unmount the overlay', () => {
        Instance._unmountOverlayContainer();
        expect(Instance[$OVERLAY_CONTAINER_PROP]).to.equal(null);
        // Don't have to test whether the div doen't exist.
        // It's BOIOOOOOORING
      });
    });
  });

  describe('#_handleMouseEnter displaying the overlay', () => {
    it('should display the overlay', () => {
      Instance._handleMouseEnter();

      expect(Instance.state.show).to.equal(true);
      expect(() => {
        let $overlay = Instance[$OVERLAY_CONTAINER_INSTANCE_PROP];
        TestUtils.findRenderedDOMComponentWithTag($overlay, 'section');
      }).not.to.throw();
    });

    it('should calculate', () => {
      Instance._handleMouseEnter();
      expect(OverlayTriggerUtil.calculatePosition.called).to.equal(true);
    });
  });

  describe('#_handleMouseLeave hiding the overlay', () => {
    it('should hide the overlay', () => {
      // Since we've tested this, we'll just call it here so we can justify.
      Instance._handleMouseEnter();
      // Instance._handleMouseOut();
      TestUtils.Simulate.mouseOut(React.findDOMNode(Instance));
      expect(Instance.state.show).to.equal(false);
      expect(() => {
        let $overlay = Instance[$OVERLAY_CONTAINER_INSTANCE_PROP];
        TestUtils.findRenderedDOMComponentWithTag($overlay, 'span');
      }).not.to.throw();
    });
  });

  describe('#componentDidUpdate when the component updates', () => {
    it('should remount the overlay each update', () => {
      let $overlay = Instance[$OVERLAY_CONTAINER_INSTANCE_PROP];
      Instance.forceUpdate();
      expect($overlay).not.to.equal(Instance[$OVERLAY_CONTAINER_PROP]);
    });
  });

  describe('#_unmountOverlayContainer', () => {
    it('should unmount the overlay', () => {
      Instance._unmountOverlayContainer();
      expect(Instance[$OVERLAY_CONTAINER_PROP]).to.equal(null);
    });
  });

  afterEach(() => { sandbox.restore(); });
});
