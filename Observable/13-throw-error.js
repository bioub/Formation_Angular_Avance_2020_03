const { throwError } = require('rxjs');

// function of(val) {
//   return new Observable((observer) => {
//     observer.next(val);
//   })
// }

const obs$ = throwError(new Error('Mon erreur'));

obs$.subscribe({
  next(msg) {
    console.log('next', msg);
  },
  error(err) {
    console.log('error', err.message)
  },
  complete() {
    console.log('complete');
  }
});