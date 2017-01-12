'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FindTreasure = exports.WEIGHT = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _event = require('../event');

var _FindItem = require('./FindItem');

var _itemGenerator = require('../../../shared/item-generator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WEIGHT = exports.WEIGHT = -1;

// Find treasure
var FindTreasure = exports.FindTreasure = (_temp = _class = function (_Event) {
  _inherits(FindTreasure, _Event);

  function FindTreasure() {
    _classCallCheck(this, FindTreasure);

    return _possibleConstructorReturn(this, (FindTreasure.__proto__ || Object.getPrototypeOf(FindTreasure)).apply(this, arguments));
  }

  _createClass(FindTreasure, null, [{
    key: 'operateOn',
    value: function operateOn(player, _ref) {
      var treasureName = _ref.treasureName;

      player.$statistics.incrementStat('Character.Treasure.' + treasureName);
      _lodash2.default.each(_itemGenerator.ItemGenerator.getAllTreasure(treasureName), function (item) {
        if (!player.canEquip(item)) return;
        _FindItem.FindItem.operateOn(player, null, item);
      });
    }
  }]);

  return FindTreasure;
}(_event.Event), _class.WEIGHT = WEIGHT, _temp);