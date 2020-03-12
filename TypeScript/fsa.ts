// Flux Standard Action

/*
{
  type: 'ADD_TODO',
  payload: {
    value: 'Acheter du pain',
  }
}
*/

interface FSA<P = string> {
  type: string,
  payload: P
}

type ReadOnlyFsa = Readonly<FSA>;


class AddTodoAction implements FSA {
  type: 'ADD_TODO';
  payload: '12';
}

class IncrementCounterAction implements FSA<number> {
  type: 'ADD_TODO';
  constructor(public payload: number) {}
}

const increment = new IncrementCounterAction(10);

function reducer(state, action: ReadOnlyFsa) {
  // action.type = 'test';
}

interface Address {
  city: string;
  postCode: string;
  isPrimary: boolean;
}

interface User {
  id: number;
  name: string;
  birthdate: Date;
  address: Address;
}

const newUser: Partial<User> = {};


// this.httpClient.get<User[]>('/users').subscribe((users) => {});

// function get<T>(): Observable<T> {
//   return new Observable();
// }

console.log(newUser.address && newUser.address.city);
// TypeScript >= 3.7 (Optionnal chaining)
console.log(newUser.address?.city);

// TypeScript >= 3.7 (Nullish Coalescing operator)
console.log(newUser.address?.isPrimary ?? true);

// || remplace 0, false, '', null, undefined
// ?? remplace null, undefined