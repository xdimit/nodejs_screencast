const user = require('./user');

const vasya = new user.User("Вася");
const petya = new user.User("Петя");

vasya.hello(petya);