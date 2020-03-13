const { interval } = require('rxjs');
const { mapTo, take } = require('rxjs/operators');

const obs$ = interval(1000).pipe(
  take(5),
  // map((v) => 'Hello')
  mapTo('Hello')
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

// ----(  0  )----(  1  )----(  2  )----(  3  )----(  4  )----(  5  ).....
// take(5)
// ----(  0  )----(  1  )----(  2  )----(  3  )----(  4  )|
// mapTo('Hello')
// ----(Hello)----(Hello)----(Hello)----(Hello)----(Hello)|
