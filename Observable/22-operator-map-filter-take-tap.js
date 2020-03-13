const { interval } = require('rxjs');
const { take, filter, map, tap } = require('rxjs/operators');

const obs$ = interval(1000).pipe(
  take(5),
  tap((v) => console.log('tap', v)),
  filter((v) => v % 2 === 0),
  map((v) => v * 2)
);

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

// ----0----1----2----3----4----5----6----7---.....
// take(5)
// ----0----1----2----3----4|
// tap((v) => console.log(v))
// ----0----1----2----3----4|
// filter((v) => v % 2 === 0)
// ----0---------2---------4|
// map((v) => v * 2)
// ----0---------4---------8|


// startLoader()
// this.httpClient.get('/users').pipe(
//  tap(() => stopLoader())
// ).subscribe((users) => {
//   
//})