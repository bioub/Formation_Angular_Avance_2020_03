// const { Observable } = require("rxjs");

class Observable {
  constructor(subscribeCallback) {
    this.subscribeCallback = subscribeCallback;
  }
  subscribe(observer) {
    this.subscribeCallback(observer);
  }
}

function completeObservable() {
  return new Observable((observer) => {
    let count = 0;
    const interval = setInterval(() => {
      observer.next(count++);

      // observer.error(new Error('tdg'));

      if (count === 5) {
        clearInterval(interval);
        observer.complete();
      }
    }, 1000);
  });
}

const simple$ = completeObservable();

// simple$.subscribe(
//   (msg) => {
//     console.log(msg);
//   },
//   (err) => {
//     console.log(err);
//   },
//   () => {
//     console.log("DONE");
//   }
// );


simple$.subscribe({
  next(msg) {
    console.log(msg);
  },
  error(err) {
    // 
  },
  complete() {
    console.log('DONE');
  }
});

console.log("FIN");
