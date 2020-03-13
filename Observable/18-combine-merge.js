const { merge, Observable } = require('rxjs');

function timeout(msg) {
  const delay = Math.random() * 1000;
  return new Observable(observer => {
    setTimeout(() => {
      observer.next({
        msg,
        delay
      });
      observer.complete();
    }, delay);
  });
}

console.time('Total');
merge(
  timeout('A'),
  timeout('B'),
  timeout('C'),
).subscribe({
  next(msg) {
    console.log('next', msg);
  },
  error(err) {
    console.log('error', err.message)
  },
  complete() {
    console.log('complete');
    console.timeEnd('Total');
  }
})


// Marble Graph
// merge(
// --------A|
// ---B|
// ---------C|
// )
// ---B----AC|
