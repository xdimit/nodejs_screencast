let phrases = require('./ru');

class User {
    constructor(name) {
        this.name = name;
    }

    hello(who) {
        console.log(`${phrases.Hello}, ${who.name}`);
    }
}

exports.User = User;

console.log(module);