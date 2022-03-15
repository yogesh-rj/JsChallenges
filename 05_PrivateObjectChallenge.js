/*
  Create a user object which has three properties:

  - username
  - password
  - age

  Username and password must not be accessible when accessed with
  alert() or console.log(). Age can be publicly accessed.

  WRITE YOUR SOLUTION HERE
*/

const username = Symbol("username");
const password = Symbol("password");

const User = {
  [username]:'johndoe',
  [password]:'password',
  age: 30
};

console.log(User.username);
