const { range } = require('rxjs');

// const obs$ = from([2, 3, 4]);
const obs$ = range(2, 3);

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