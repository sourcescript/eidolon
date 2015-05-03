/**
 * Copyright, airportyh.
 * The file contains modified contents of:
 * https://github.com/airportyh/simulate.js/blob/master/simulate.js
 */
function extend(dst, src) {
  for ( let key in src ) {
    if ( Object.hasOwnProperty(key) ) {
      dst[key] = src[key];
    }
  }

  return src;
}

let Simulate = {
  event(element, eventName) {
    if (document.createEvent) {
      let evt = document.createEvent('HTMLEvents');
      evt.initEvent(eventName, true, true );
      element.dispatchEvent(evt);
    } else {
      let evt = document.createEventObject();
      element.fireEvent('on' + eventName, evt);
    }
  },

  keyEvent(element, type, options) {
    let evt;
    let e = {
      bubbles: true, cancelable: true, view: window,
      ctrlKey: false, altKey: false, shiftKey: false, metaKey: false,
      keyCode: 0, charCode: 0
    };

    extend(e, options);
    if (document.createEvent) {
      try {
        evt = document.createEvent('KeyEvents');
        evt.initKeyEvent(
          type, e.bubbles, e.cancelable, e.view,
          e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
          e.keyCode, e.charCode
        );
        element.dispatchEvent(evt);
      } catch(err) {
        evt = document.createEvent('Events');
        evt.initEvent(type, e.bubbles, e.cancelable);

        extend(evt, {
          view: e.view,
          ctrlKey: e.ctrlKey, altKey: e.altKey,
          shiftKey: e.shiftKey, metaKey: e.metaKey,
          keyCode: e.keyCode, charCode: e.charCode
        });
        element.dispatchEvent(evt);
      }
    }
  },

  keyup(element, chr) {
    let charCode = chr.charCodeAt(0);

    this.keyEvent(element, 'keyup', {
      keyCode: charCode,
      charCode: charCode
    });
  },

  keydown(element, chr) {
    let charCode = chr.charCodeAt(0);

    this.keyEvent(element, 'keydown', {
      keyCode: charCode,
      charCode: charCode
    });
  },

  keypress(element, chr) {
    let charCode = chr.charCodeAt(0);

    this.keyEvent(element, 'keypress', {
      keyCode: charCode,
      charCode: charCode
    });
  }
};

let events = [
  'click',
  'focus',
  'blur',
  'dblclick',
  'input',
  'change',
  'mousedown',
  'mousemove',
  'mouseout',
  'mouseover',
  'mouseup',
  'resize',
  'scroll',
  'select',
  'submit',
  'load',
  'unload'
];

for ( let i = events.length; i--; ) {
  let event = events[i];

  Simulate[event] = (element) => {
    Simulate.event(element, event);
  };
}

export default Simulate;
