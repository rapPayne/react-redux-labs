Number.prototype.toCurrency = function () {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })
  return formatter.format(this);
}

/* eslint no-extend-native: 0 */