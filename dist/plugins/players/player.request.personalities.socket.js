'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.socket = exports.args = exports.description = exports.event = undefined;

var _gameState = require('../../core/game-state');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// import { Logger } from '../../shared/logger';

var event = exports.event = 'plugin:player:request:personalities';
var description = exports.description = 'Request personality data. Generally used only when looking at personalities.';
var args = exports.args = '';
var socket = exports.socket = function socket(_socket) {

  var requestpersonalities = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var playerName, player;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (_socket.authToken) {
                _context.next = 2;
                break;
              }

              return _context.abrupt('return');

            case 2:
              playerName = _socket.authToken.playerName;

              if (playerName) {
                _context.next = 5;
                break;
              }

              return _context.abrupt('return');

            case 5:
              player = _gameState.GameState.getInstance().getPlayer(playerName);

              if (player) {
                _context.next = 8;
                break;
              }

              return _context.abrupt('return');

            case 8:
              // Logger.info('Socket:Player:RequestPersonalities', `${socket.playerName} (${socket.address.ip}) requesting personalities.`);

              player._updatePersonalities();

            case 9:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function requestpersonalities() {
      return _ref.apply(this, arguments);
    };
  }();

  _socket.on(event, requestpersonalities);
};