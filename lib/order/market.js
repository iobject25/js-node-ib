var assert = require('assert');

var _ = require('lodash');

module.exports = function (action, quantity, optionals) {
  optionals = optionals || {};
  assert(_.isObject(optionals), 'Optionals must be an object.');
  assert(_.isString(action), 'Action must be a string.');
  assert(_.isNumber(quantity), 'Quantity must be a number.');

  return {
    action: action,
    orderType: 'MKT',
    totalQuantity: quantity,

    tif: optionals.tif || 'DAY',
    outsideRth: optionals.outsideRTH || false,
    transmit: optionals.transmitOrder || true,
    goodAfterTime: optionals.goodAfterTime || '',
    goodTillDate: optionals.goodTillDate || ''
  };
};
