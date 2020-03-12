'use strict';

const contact = {
  name: 'Romain'
};

function hello(p1, p2) {
  console.log(`Hello ${p1}, hello ${p2}, je m'appelle ${this.name}`);
}

hello.call(contact, 'Jean', 'Pierre');
hello.apply(contact, ['Jean', 'Pierre']);
hello.call(contact, ...['Jean', 'Pierre']);
const helloContact = hello.bind(contact);
helloContact('Jean', 'Pierre');