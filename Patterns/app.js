///////////////////////////////////////
//
// Iterator
//
///////////////////////////////////////
function iterator(names) {
  let next = 0;

  return {
    next: function () {
      return next < names.length
        ? { value: names[next++], done: false }
        : { done: true };
    },
  };
}

// const namesArr = [1, 22, 333, 45, 3252, 51];
// const nameIter = iterator(namesArr);
// console.log(nameIter.next());
// console.log(nameIter.next());
// console.log(nameIter.next());

///////////////////////////////////////
//
// Generator
//
///////////////////////////////////////

function* gene() {
  yield 'A';
  yield 'BB';
  yield 'CCC';
}

// const g = gene();
// console.log(g.next());

function* createID() {
  let index = 1;
  while (true) {
    yield index++;
  }
}

// let id = createID();
// console.log(id.next());
// console.log(id.next());
// console.log(id.next());

///////////////////////////////////////
//
// Mediator pattern
//
///////////////////////////////////////

const User = function (name) {
  this.name = name;
  this.chatroom = null;
};

User.prototype = {
  send: function (message, to) {
    this.chatroom.send(message, this, to);
  },
  recieve: function (message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  },
};

const Chatroom = function () {
  let users = {};

  return {
    register: function (user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function (message, from, to) {
      if (to) {
        to.recieve(message, from);
      } else {
        for (key in users) {
          if (users[key] !== from) {
            users[key].recieve(message, from);
          }
        }
      }
    },
  };
};

// const bob = new User('Bob');
// const alice = new User('Alice');

// const chatroom = new Chatroom();

// chatroom.register(Bob);
// chatroom.register(alice);

// bob.send('Hello, Alice', alice);
// alice.send('Hi, Bob', bob);
