let US = new Intl.DateTimeFormat('en-US');
let BRL = new Intl.DateTimeFormat('pt-BR');

console.log(US.format(new Date(2016,0,23)));
console.log(BRL.format(new Date(2016,0,23)));
