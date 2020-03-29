var assert = require('assert');

var _ = require('lodash');

module.exports = function (action, quantity, price, optionals) {
  optionals = optionals || {};
  assert(_.isObject(optionals), 'Optionals must be an object.');
  assert(_.isString(action), 'Action must be a string.');
  assert(_.isNumber(quantity), 'Quantity must be a number.');
  assert(_.isNumber(price), 'Price must be a number.');

  return {
    action: action,
    auxPrice: price,
    orderType: 'STP',
    totalQuantity: quantity,

    tif: optionals.tif || 'DAY',
    outsideRth: optionals.outsideRTH || false,
    transmit: optionals.transmitOrder || true,
    parentId: optionals.parentId || 0,
  };
};
