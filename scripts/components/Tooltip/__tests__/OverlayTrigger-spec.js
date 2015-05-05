import { expect } from 'chai';
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import OverlayTrigger, {
  $OVERLAY_CONTAINER_PROP,
  $OVERLAY_CONTAINER_INSTANCE_PROP
} from '../OverlayTrigger';
import OverlayTriggerUtil from '../OverlayTriggerUtil';

describe('OverlayTrigger', () => {
  let sandbox;
  let Render;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    // So we don't have to worry about it. We can restore it later tho.
    sandbox.stub(OverlayTriggerUtil, 'calculatePosition').returns({ top: 0, left:0 });
    Render = (children = <section />, placement = 'left') => {
      return TestUtils.renderIntoDocument(
        <OverlayTrigger
          placement={placement}
          overlay={() => { return children; }}>
          {children}
        </OverlayTrigger>
      );
    }
  });

  describe('(it should mount the overlay) mounting the overlay', () => {
    describe('#_mountOverlayContainer', () => {
      it('should mount the overlay', () => {
        let Instance = Render();
        // Div our default container element. It should be appended to the body.
        // Our container instance should be rendered (React.rendder).
        // We should have a default element of span (since null is not accepted).
        expect(Instance[$OVERLAY_CONTAINER_PROP]).not.to.equal(null);
      });
    });

    describe('#_mountOverlay', () => {
      it('should mount the overlay', () => {
        let Instance = Render();
        // Div our default container element. It should be appended to the body.
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
        let Instance = Render();
        Instance._unmountOverlay();
        expect(Instance[$OVERLAY_CONTAINER_INSTANCE_PROP]).to.equal(null);
      });
    });

     describe('#_unmountOverlayContainer', () => {
      it('should unmount the overlay', () => {
        let Instance = Render();
        Instance._unmountOverlayContainer();
        expect(Instance[$OVERLAY_CONTAINER_PROP]).to.equal(null);
        // Don't have to test whether the div doen't exist.
        // It's BOIOOOOOORING
      });
    });
  });

  describe('displaying the overlay', () => {
    it('should display the overlay', () => {
      let Instance = Render();
      Instance._handleMouseEnter();

      expect(Instance.state.show).to.equal(true);
      expect(() => {
        let $overlay = Instance[$OVERLAY_CONTAINER_INSTANCE_PROP];
        TestUtils.findRenderedDOMComponentWithTag($overlay, 'section');
      }).not.to.throw();
    });

    it('should hide the overlay', () => {
      let Instance = Render();
      // Since we've tested this, we'll just call it here so we can justify.
      Instance._handleMouseEnter();
      Instance._handleMouseOut();
      expect(Instance.state.show).to.equal(false);
      expect(() => {
        let $overlay = Instance[$OVERLAY_CONTAINER_INSTANCE_PROP];
        TestUtils.findRenderedDOMComponentWithTag($overlay, 'span');
      }).not.to.throw();
    });
  });

  it('should remount the overlay each update');
  it('should calculate');

  describe('#_unmountOverlayContainer', () => {
    it('should unmount the overlay', () => {
      let Instance = Render();
      Instance._unmountOverlayContainer();
      expect(Instance[$OVERLAY_CONTAINER_PROP]).to.equal(null);
    });
  });

  // describe('@placement', () => {
  //   it('should display to the right');
  //   it('should display to the left');
  //   it('should display to the top');
  //   it('should display to the bottom');
  //   it('should default to left');
  // });

  afterEach(() => {
    sandbox.restore();
  });
});
