var assert = require('assert');

var _ = require('lodash');

module.exports = function (action, quantity, limitPrice, stopPrice, optionals) {
  assert(_.isString(action), 'Action must be a string.');
  assert(_.isNumber(quantity), 'Quantity must be a number.');
  assert(_.isNumber(stopPrice), 'Stop price must be a number.');
  assert(_.isNumber(limitPrice), 'Limit price must be a number.');

  return {
    action: action,
    lmtPrice: limitPrice,
    auxPrice: stopPrice,
    orderType: 'STP LMT',
    totalQuantity: quantity,

    tif: optionals.tif || 'DAY',
    outsideRth: optionals.outsideRTH || false,
    transmit: optionals.transmitOrder || true,
    parentId: optionals.parentId || 0,
  };
};
