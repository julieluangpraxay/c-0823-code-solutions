const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const mapped = prices.map((prices) => ({
  price: prices,
  salesPrice: prices / 2,
}));

console.log('Price objects', mapped);

const fixedPrices = prices.map((prices) => `$${prices.toFixed(2)}`);

console.log('Formatted Prices', fixedPrices);
