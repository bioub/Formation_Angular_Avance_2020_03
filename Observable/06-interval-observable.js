const { Observable, Subject } = require('rxjs');

// setInterval(() => {
//   console.log('1000ms');
// }, 1000)

function interval(delay) {
  return new Observable((observer) => {
    setInterval(() => {
      observer.next();
    }, delay);
  });
}

interval(1000)
  .subscribe(() => {
    console.log('1000ms');
  });
