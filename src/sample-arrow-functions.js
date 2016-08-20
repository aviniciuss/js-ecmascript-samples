const bob = {
    _name: 'Bob',
    _friends: ['Foo', 'Bar'],
    printFriends: function printFriends() {
        this._friends.forEach(friend => console.log(`${this._name} knows ${friend}`);
    }
};

bob.printFriends();
