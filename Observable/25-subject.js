const { Subject } = require('rxjs');

const obs$ = new Subject();



obs$.next(1);
obs$.next(2);
obs$.next(3);

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


obs$.next(4);