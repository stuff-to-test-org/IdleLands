'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XPForsake = exports.WEIGHT = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _event = require('../event');

var _adventureLog = require('../../../shared/adventure-log');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WEIGHT = exports.WEIGHT = 5;

// Lose 3-5% XP
var XPForsake = exports.XPForsake = (_temp = _class = function (_Event) {
  _inherits(XPForsake, _Event);

  function XPForsake() {
    _classCallCheck(this, XPForsake);

    return _possibleConstructorReturn(this, (XPForsake.__proto__ || Object.getPrototypeOf(XPForsake)).apply(this, arguments));
  }

  _createClass(XPForsake, null, [{
    key: 'operateOn',
    value: function operateOn(player) {
      var percent = _event.Event.chance.floating({ fixed: 5, min: 0.03, max: 0.05 });
      var baseXP = Math.floor(player._xp.maximum * percent);
      var xpMod = player.gainXp(-baseXP);
      var eventText = this.eventText('forsakeXp', player, { xp: Math.abs(xpMod) });

      this.emitMessage({ affected: [player], eventText: eventText + ' [-' + Math.abs(xpMod) + ' xp, ~' + (percent * 100).toFixed(2) + '%]', category: _adventureLog.MessageCategories.XP });

      return [player];
    }
  }]);

  return XPForsake;
}(_event.Event), _class.WEIGHT = WEIGHT, _temp);