const { of } = require('rxjs');

// function of(val) {
//   return new Observable((observer) => {
//     observer.next(val);
//   })
// }

const obs$ = of([2, 3, 4]);

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