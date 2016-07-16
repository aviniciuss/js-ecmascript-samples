"use strict";

// arrow functions: this._name don't miss the reference of the parent scope
var bob = {
    _name: "Bob",
    _friends: ["Foo", "Bar"],
    printFriends: function printFriends() {
        var _this = this;

        this._friends.forEach(function (friend) {
            return console.log(_this._name + " knows " + friend);
        });
    }
};

bob.printFriends();
'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var People = function () {
    function People(name, email) {
        _classCallCheck(this, People);

        this.name = name;
        this.email = email;
    }

    _createClass(People, [{
        key: 'toString',
        value: function toString() {
            return 'Name: ' + this.name + ' Email: ' + this.email;
        }
    }]);

    return People;
}();

var Client = function (_People) {
    _inherits(Client, _People);

    function Client(id, name, email) {
        _classCallCheck(this, Client);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Client).call(this, name, email));

        _this.id = id;
        return _this;
    }

    _createClass(Client, [{
        key: 'toString',
        value: function toString() {
            return 'ID: ' + this.id + ' ' + _get(Object.getPrototypeOf(Client.prototype), 'toString', this).call(this);
        }
    }]);

    return Client;
}(People);

var client = new Client(1, 'John', 'john@gmail.com');

console.log(client.toString());
"use strict";

var number = 1234.44;

var USD = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(number);
console.log(USD);

var BRL = new Intl.NumberFormat("pt-BER", { style: "currency", currency: "BRL" }).format(number);
console.log(BRL);
"use strict";

var US = new Intl.DateTimeFormat("en-US");
var BRL = new Intl.DateTimeFormat("pt-BR");

console.log(US.format(new Date(2016, 0, 23)));
console.log(BRL.format(new Date(2016, 0, 23)));
"use strict";

var list = [{ name: "John" }, { name: "Jack" }];

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var data = _step.value;

        console.log(data);
    }

    // ES5
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

for (var i in list) {
    console.log(list[i]);
}
"use strict";

var map = new Map();

map.set(1, "Vivamus suscipit tortor eget felis porttitor volutpat.");
map.set(2, "Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan tincidunt.");

console.log(map.get(1));
console.log(map.size);
"use strict";

var number = 1234.44;

var en = new Intl.NumberFormat("en-US").format(number);
console.log(en);

var de = new Intl.NumberFormat("de-DE").format(number);
console.log(de);
"use strict";

var colors = new Set();

colors.add("red").add("blue").add("red");

if (colors.size === 2 && colors.has("red")) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = colors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var index = _step.value;

            console.log(index);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
"use strict";

// ES5
console.log("hello".indexOf("e") >= 1);

// ES6
console.log("hello".startsWith("he", 0));
console.log("hello".endsWith("hello", 5));
console.log("hello".includes("llo", 2));

// fromCodePoint
console.log(String.fromCodePoint(65, 90));
"use strict";

var name = "John";
var age = 27;

var text = "Name: " + name + " Age: " + age;

console.log(text);
"use strict";

function sum(valueA) {
    var valueB = arguments.length <= 1 || arguments[1] === undefined ? 5 : arguments[1];

    return valueA + valueB;
}

console.log(sum(5));
