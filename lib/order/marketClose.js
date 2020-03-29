var assert = require('assert');

var _ = require('lodash');

module.exports = function (action, quantity, optionals) {
  assert(_.isString(action), 'Action must be a string.');
  assert(_.isNumber(quantity), 'Quantity must be a number.');

  return {
    action: action,
    orderType: 'MOC',
    totalQuantity: quantity,
    transmit: optionals.transmitOrder || true,
  };
};
