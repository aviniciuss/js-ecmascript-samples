const number = 1234.44;

let USD = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
console.log(USD);

let BRL = new Intl.NumberFormat('pt-BER', { style: 'currency', currency: 'BRL' }).format(number);
console.log(BRL);
