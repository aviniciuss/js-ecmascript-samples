// Reflect.apply(target, context, arguments)
console.log(Reflect.apply(Math.floor, undefined, [1.75]));

// Reflect.get(target, propertyKey[, receiver])
console.log(Reflect.get(['zero', 'one'], 1));
