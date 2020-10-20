let user = require('./user');

let vasya = new user.User("Вася");
let petya = new user.User("Петя"); 

vasya.hello(petya);