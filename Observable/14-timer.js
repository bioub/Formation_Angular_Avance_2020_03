const { timer } = require('rxjs');

// function of(val) {
//   return new Observable((observer) => {
//     observer.next(val);
//   })
// }

const obs$ = timer(1000);

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