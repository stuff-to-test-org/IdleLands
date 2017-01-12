'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Siphon = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _spell = require('../spell');

var _AllStatsDown = require('../effects/AllStatsDown');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Siphon = exports.Siphon = (_temp = _class = function (_Spell) {
  _inherits(Siphon, _Spell);

  function Siphon() {
    _classCallCheck(this, Siphon);

    return _possibleConstructorReturn(this, (Siphon.__proto__ || Object.getPrototypeOf(Siphon)).apply(this, arguments));
  }

  _createClass(Siphon, [{
    key: 'determineTargets',
    value: function determineTargets() {
      return this.$targetting.randomEnemyWithoutEffect('AllStatsDown');
    }
  }, {
    key: 'calcDamage',
    value: function calcDamage() {
      var min = this.caster.liveStats.int / 8;
      var max = this.caster.liveStats.int / 4;
      return this.minMax(min, max) * this.spellPower;
    }
  }, {
    key: 'calcDuration',
    value: function calcDuration() {
      return 2 + this.spellPower;
    }
  }, {
    key: 'calcPotency',
    value: function calcPotency() {
      return 5 * this.spellPower;
    }
  }, {
    key: 'preCast',
    value: function preCast() {
      var _this2 = this;

      var targets = this.determineTargets();
      var message = '%player used %spellName on %targetName and siphoned %damage hp!';

      _lodash2.default.each(targets, function (target) {
        var damage = _this2.calcDamage();

        _this2.caster.$battle.healDamage(_this2.caster, damage, target);

        _get(Siphon.prototype.__proto__ || Object.getPrototypeOf(Siphon.prototype), 'cast', _this2).call(_this2, {
          damage: damage,
          message: message,
          applyEffect: _AllStatsDown.AllStatsDown,
          targets: [target]
        });
      });
    }
  }], [{
    key: 'shouldCast',
    value: function shouldCast(caster) {
      return this.$canTarget.enemyWithoutEffect(caster, 'AllStatsDown');
    }
  }]);

  return Siphon;
}(_spell.Spell), _class.element = _spell.SpellType.DEBUFF, _class.tiers = [{ name: 'siphon', spellPower: 2, weight: 30, cost: 100, level: 1, profession: 'Necromancer' }, { name: 'drain', spellPower: 3, weight: 30, cost: 500, level: 15, profession: 'Necromancer' }, { name: 'deteriorate', spellPower: 4, weight: 30, cost: 3000, level: 35, profession: 'Necromancer' }, { name: 'wither', spellPower: 5, weight: 30, cost: 7500, level: 75, profession: 'Necromancer' }, { name: 'colander', spellPower: 1, weight: 30, cost: 1000, level: 35, profession: 'MagicalMonster',
  collectibles: ['Evil Pebble'] }], _temp);