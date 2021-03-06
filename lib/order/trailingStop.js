var assert = require('assert');

var _ = require('lodash');

module.exports = function (action, quantity, auxPrice, optionals) {
  optionals = optionals || {};
  assert(_.isObject(optionals), 'Optionals must be an object.');
  assert(_.isString(action), 'Action must be a string.');
  assert(_.isNumber(quantity), 'Quantity must be a number.');
  assert(_.isNumber(auxPrice), 'Price must be a number.');

  return {
    action: action,
    totalQuantity: quantity,
    orderType: 'TRAIL',  // https://www.interactivebrokers.com/en/software/api/apiguide/tables/supported_order_types.htm
    auxPrice: auxPrice,

    tif: optionals.tif || 'DAY',  // note - TRAIL orders are only triggered during the trading hours of the contract
    outsideRth: optionals.outsideRTH || false,
    transmit: optionals.transmitOrder || true,
    parentId: optionals.parentId || 0,
  };
};
