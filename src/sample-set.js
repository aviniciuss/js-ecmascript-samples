let colors = new Set();

colors.add('red').add('blue').add('red');

if(colors.size === 2 && colors.has('red')) {
    for(let index of colors) {
        console.log(index);
    }
}
