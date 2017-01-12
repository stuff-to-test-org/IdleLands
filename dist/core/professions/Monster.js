'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Monster = undefined;

var _class, _temp;

var _profession = require('../base/profession');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Monster = exports.Monster = (_temp = _class = function (_Profession) {
  _inherits(Monster, _Profession);

  function Monster() {
    _classCallCheck(this, Monster);

    return _possibleConstructorReturn(this, (Monster.__proto__ || Object.getPrototypeOf(Monster)).apply(this, arguments));
  }

  return Monster;
}(_profession.Profession), _class.baseHpPerLevel = _profession.Profession.baseHpPerLevel + 240, _class.baseMpPerLevel = _profession.Profession.baseMpPerLevel + 30, _class.baseConPerLevel = 4, _class.baseDexPerLevel = 4, _class.baseAgiPerLevel = 4, _class.baseStrPerLevel = 4, _class.baseIntPerLevel = 4, _temp);