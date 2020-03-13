const { interval } = require("rxjs");

const obs$ = interval(1000);

const subcription = obs$.subscribe({
  next(msg) {
    console.log('next', msg);
  },
  error(err) {
    console.log('error', err)
  },
  complete() {
    console.log('complete');
  }
});

console.log("FIN");

setTimeout(() => {
  subcription.unsubscribe();
}, 5500);


