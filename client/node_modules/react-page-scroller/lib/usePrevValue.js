"use strict";

exports.__esModule = true;
exports.default = usePrevious;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function usePrevious(value) {
  var ref = (0, _react.useRef)({});

  (0, _react.useEffect)(function () {
    ref.current = value;
  }, [value]);

  return ref.current;
} // eslint-disable-next-line no-unused-vars
module.exports = exports["default"];