"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var OneClickBuy = function OneClickBuy(props) {
  return _react["default"].createElement("button", (0, _extends2["default"])({}, props, {
    "data-one-click-buy": true
  }), "Comprar com um click");
};

var _default = OneClickBuy;
exports["default"] = _default;