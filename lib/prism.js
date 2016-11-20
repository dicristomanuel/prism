'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Prism = function () {
  function Prism() {
    _classCallCheck(this, Prism);

    this.nextState = [];
  }

  _createClass(Prism, [{
    key: 'create',
    value: function create(states) {
      states.forEach(this.addState, this);
    }
  }, {
    key: 'next',
    value: function next(data) {
      this.nextState.forEach(this.findNextState(data), this);
    }
  }, {
    key: 'addState',
    value: function addState(state) {
      var _this = this;

      if (state.onUpdate) {
        this['onUpdate'] = function (data) {
          return new Promise(function (resolve, reject) {
            resolve(state.onUpdate(data));
          });
        };
      } else {
        (function () {
          var parent = _this;
          _this[state.to] = {
            on: function on(data) {
              return new Promise(function (resolve, reject) {
                data ? resolve(state.on(data)) : reject('PRISM: missing data or state');
              });
            },
            off: function off(data) {
              return new Promise(function (resolve, reject) {
                if (!data.state) reject('PRISM: missing data or state');else if (state.from === data.state) resolve(state.off(data));else if (parent.onUpdate) resolve(parent['onUpdate'](data).then(parent['callState'](data)));else resolve(parent['callState'](data));
              });
            }
          };
          _this.nextState.push({ current: state.from, next: state.to });
        })();
      }
    }
  }, {
    key: 'callState',
    value: function callState(data) {
      this[data.state].on(data).then(this[data.state].off).catch(function (error) {
        console.log('Prism ERROR: ' + error.stack);
      });
    }
  }, {
    key: 'findNextState',
    value: function findNextState(data) {
      return function (state) {
        if (data.state === state.current) {
          if (this.onUpdate) this.onUpdate(_extends({}, data, { state: state.next }));
          return this.callState(_extends({}, data, { state: state.next }));
        }
      };
    }
  }]);

  return Prism;
}();

exports.default = Prism;