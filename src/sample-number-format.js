const number = 1234.44;

let en = new Intl.NumberFormat('en-US').format(number);
console.log(en);

let de = new Intl.NumberFormat('de-DE').format(number);
console.log(de);
