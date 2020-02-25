var assert = require('assert');

var _ = require('lodash');

module.exports = function (symbol, currency, exchange, multiplier) {
  assert(_.isString(symbol), 'Symbol must be a string.');

  return {
    secType: 'CONTFUT',
    symbol: symbol,
    currency: currency || 'USD',
    exchange: exchange || 'ONE',
    multiplier: multiplier
  };
};
