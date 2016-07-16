const list = [{name: "John"},{name: "Jack"}];

for(let data of list) {
    console.log(data);
}

// ES5
for(let i in list) {
    console.log(list[i]);
}