"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Props = function Props() {
    (0, _classCallCheck3.default)(this, Props);
};

exports.Props = Props;

var State = function State() {
    (0, _classCallCheck3.default)(this, State);

    this.selectLeft = true;
    this.selectTop = true;
    this.selectRight = true;
    this.selectBottom = true;
};

exports.State = State;