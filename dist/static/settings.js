'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SETTINGS = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _teleports = require('../../assets/maps/content/teleports.json');

var _teleports2 = _interopRequireDefault(_teleports);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Settings = function () {
  _createClass(Settings, [{
    key: 'locToTeleport',
    value: function locToTeleport(name) {
      return _lodash2.default.find(this.allTeleports, { name: name });
    }
  }]);

  function Settings() {
    _classCallCheck(this, Settings);

    this.timeframeSeconds = 5;
    this.maxLevel = 200;
    this.xpPerStep = 5;

    this.pvpBattleRange = 10;
    this.minBattleLevel = 5;
    this.minPartyLevel = 10;
    this.maxPartyMembers = 4;

    this.merchantMultiplier = 3;

    this.saveSteps = 10;
    this.achievementSteps = 60; // once every 5 minutes

    this.reductionDefaults = {
      itemFindRange: 12,
      itemFindRangeMultiplier: 0.5,
      itemValueMultiplier: 0.1,
      merchantCostReductionMultiplier: 0.0,
      merchantItemGeneratorBonus: 5
    };

    this.validGenders = ['male', 'female', 'not a bear', 'glowcloud', 'astronomical entity'];
    this.validPetAttributes = ['a top hat', 'a monocle', 'a fedora', 'a bag of chips', 'a giant keychain', 'a rubber duck', 'a glowing leek', 'a YBox controller', 'a Gandum minifig', 'a pocket watch', 'a cumberbund', 'a funky tie', 'a doily', 'a polka-dot pillowcase', 'a giant stack of sticky notes', 'a miniature replica of the worlds biggest roller-coaster', 'a spork with a knife on the other side', 'a shiny medallion', 'a used drinking straw', 'a popping filter', 'a giant rock used to stop doors dead in their tracks', 'a tab formerly attached to a Dosa Can'];

    this.maxChoices = 10;

    this.chatMessageMaxLength = 500;

    this.holidays = {
      winter: {
        start: new Date('Dec 1'),
        end: new Date('Dec 31')
      },
      valentine: {
        start: new Date('Feb 1'),
        end: new Date('Feb 28')
      }
    };

    this.externalChat = 'irc';

    this.chatConfig = {};
    this.chatConfig.irc = {
      server: 'irc.freenode.net',
      nick: 'idlelandschat',
      channel: '##idlebot'
    };

    this.allTeleports = (0, _lodash2.default)(_teleports2.default).values().map(function (entry) {
      return _lodash2.default.map(entry, function (loc, key) {
        loc.name = key;
        return loc;
      });
    }).flattenDeep().value();

    this.gidMap = {
      1: 'StairsDown',
      2: 'StairsUp',
      3: 'BrickWall',
      4: 'Grass',
      5: 'Water',
      6: 'Lava',
      7: 'Tile',
      8: 'Ice',
      9: 'Forest',
      10: 'Sand',
      11: 'Swamp',
      12: 'BlueNPC',
      13: 'RedNPC',
      14: 'GreenNPC',
      15: 'QuestionMark',
      16: 'Tree',
      17: 'Mountain',
      18: 'Door',
      19: 'Dirt',
      20: 'FighterTrainer',
      21: 'MageTrainer',
      22: 'ClericTrainer',
      23: 'JesterTrainer',
      24: 'RogueTrainer',
      25: 'GeneralistTrainer',
      26: 'Boss',
      27: 'Chest',
      28: 'PurpleTeleport',
      29: 'RedTeleport',
      30: 'YellowTeleport',
      31: 'GreenTeleport',
      32: 'BlueTeleport',
      33: 'Cloud',
      34: 'Wood',
      35: 'Hole',
      36: 'Gravel',
      37: 'Mushroom',
      38: 'StoneWall',
      39: 'Box',
      40: 'LadderUp',
      41: 'LadderDown',
      42: 'RopeUp',
      43: 'RopeDown',
      44: 'Table',
      45: 'Pot',
      46: 'Barrel',
      47: 'Bed',
      48: 'Sign',
      49: 'Carpet',
      50: 'CrumblingBrick',
      51: 'Skeleton',
      52: 'Snow',
      53: 'Fence',
      54: 'Dead Tree',
      55: 'Palm Tree',
      56: 'Cactus',
      57: 'Pillar',
      58: 'StoneDoor',
      59: 'Chair',
      60: 'GoldPile',
      61: 'Bloodstain',
      62: 'FenceGate',
      63: 'Glowcloud',
      64: 'ArcherTrainer',
      65: 'PirateTrainer',
      66: 'MagicalMonsterTrainer',
      67: 'MonsterTrainer',
      68: 'BarbarianTrainer',
      69: 'BardTrainer',
      70: 'SandwichArtistTrainer',
      71: 'NecromancerTrainer',
      72: 'BitomancerTrainer',
      73: 'NotABear',
      74: 'AstronomicalEntity',
      75: 'TownCrier',
      76: 'LootSack',
      77: 'LootSackWithSword',
      78: 'EmptyLootSack',
      79: 'Tombstone',
      80: 'Astral',
      81: 'NightSky',
      82: 'Acid',
      83: 'TreeStump',
      84: 'AntiShrine',
      85: 'Shrine',
      86: 'Merchant',
      87: 'JailDoor',
      88: 'StoneJailDoor'
    };

    this.revGidMap = _lodash2.default.invert(this.gidMap);
  }

  return Settings;
}();

var SETTINGS = exports.SETTINGS = new Settings();