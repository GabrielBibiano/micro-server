"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(require("react"));

var _express = _interopRequireDefault(require("express"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _path = _interopRequireDefault(require("path"));

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.get('/', function (req, res) {
  res.send('running');
});
app.post('/:component', function _callee(req, res) {
  var component, props, url, GettedComponent;
  return _regenerator["default"].async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          component = req.params.component;
          props = req.body.props;

          try {
            url = _path["default"].resolve(__dirname, "./components/".concat(component, "/index.js"));
            GettedComponent = require(url);
            res.send(_server["default"].renderToString(_react["default"].createElement(GettedComponent["default"], props)));
          } catch (e) {
            console.log('ERROR: ', e);
            res.send('Component not found').status(404);
          }

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
});
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("APP LISTEN IN PORT ".concat(PORT));
});