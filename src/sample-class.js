class People {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    toString() {
        return `Name: ${this.name} Email: ${this.email}`;
    }
}


class Client extends People{
    constructor(id, name, email) {
        super(name, email);
        this.id = id;
    }

    toString() {
        return `ID: ${this.id} ${super.toString()}`;
    };
}

let client = new Client(1, 'John', 'john@gmail.com');

console.log(client.toString());