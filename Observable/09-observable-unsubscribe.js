const { Observable } = require("rxjs");

function interval(delay) {
  return new Observable((observer) => {
    let count = 0;
    const interval = setInterval(() => {
      observer.next(count++);
    }, delay);
    return () => {
      clearInterval(interval);
    };
  });
}

const obs$ = interval(1000);

const subcription = obs$.subscribe((msg) => {
  console.log(msg);
});

console.log("FIN");

setTimeout(() => {
  subcription.unsubscribe();
}, 5500);
