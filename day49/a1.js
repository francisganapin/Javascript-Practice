const priceInCents = 1999;
const quantity = 3;
const totalInCents = priceInCents * quantity;

const formatMoney = (cents) => `$ ${(cents/100).toFixed(2)}`;
console.log(`Total: ${formatMoney(totalInCents)}`);

const taxInCents = Math.round(totalInCents * 0.12);
console.log(`Tax (12): ${formatMoney(taxInCents)}`);