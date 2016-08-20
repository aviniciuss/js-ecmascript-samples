/**
* Os geradores são funções que podem ser encerrado e depois re-introduzidos.
* Seu contexto ( ligações variáveis) será salvo por re-entradas.
**/

function *tasks() {
  yield setTimeout(() => console.log('task 1'), 5000);
  yield console.log('task 2');
  yield console.log('task 3');
  yield console.log('task 4');
  console.log(yield);
}

let gen = tasks();
gen.next();
gen.next();
gen.next();
gen.next();
gen.next(console.log('hello'));
