"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _react = _interopRequireDefault(require("react"));

var _express = _interopRequireDefault(require("express"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.get('/', function (req, res) {
  res.send('running');
});
app.post('/:component', function _callee(req, res) {
  var component, props, GettedComponent;
  return _regenerator["default"].async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          component = req.params.component;
          props = req.body.props;
          _context.prev = 2;
          _context.next = 5;
          return _regenerator["default"].awrap(Promise.resolve().then(function () {
            return (0, _interopRequireWildcard2["default"])(require("./components/".concat(component)));
          }));

        case 5:
          GettedComponent = _context.sent;
          res.send(_server["default"].renderToString(_react["default"].createElement(GettedComponent["default"], props)));
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](2);
          res.send('Component not found').status(404);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 9]]);
});
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("APP LISTEN IN PORT ".concat(PORT));
});