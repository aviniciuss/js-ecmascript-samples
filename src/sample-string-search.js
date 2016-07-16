// ES5
console.log("hello".indexOf("e") >= 1);

// ES6
console.log("hello".startsWith("he", 0));
console.log("hello".endsWith("hello", 5));
console.log("hello".includes("llo", 2));

// fromCodePoint
console.log(String.fromCodePoint(65, 90));