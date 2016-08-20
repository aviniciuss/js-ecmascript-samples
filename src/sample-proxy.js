class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getUserInfo() {
    console.log(`Name: ${this.name} - Email: ${this.email}`);
  }
}

let user = new Proxy(new User('Anderson Vinicius', 'avinicius.adorno@gmail.com'), {
  set: (target, property, value, receiver) => {
    console.log(`called ${property} = ${value}`);
  },
  apply: (target, thisArg, argumentsList) => {
    console.log('called: ' + argumentsList.join(', '));
  }
});


user.name = 'Anderson Vinicius A da Silva';
user.getUserInfo();
