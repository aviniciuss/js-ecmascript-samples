// arrow functions: this._name don't miss the reference of the parent scope
const bob = {
    _name: "Bob",
    _friends: ["Foo", "Bar"],
    printFriends: function printFriends() {
        this._friends.forEach( friend => {
            return console.log(this._name + " knows " + friend );
        });
    }
};

bob.printFriends();