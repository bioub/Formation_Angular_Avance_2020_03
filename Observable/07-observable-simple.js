const { Observable } = require('rxjs');

function simpleObservable() {
  return new Observable((observer) => {
    observer.next('A');
    observer.next('B');
    observer.next('C');
    setTimeout(() => {
      observer.next('D');
    }, 1000);
  });
}

const simple$ = simpleObservable();

simple$.subscribe((msg) => {
  console.log(msg);
});

console.log('FIN');

// pile d'appels
// ^
// |                   lg                    
// |                   next - st             lg
// |Observable         => (sub)            next (=> du subscribe)
// |simpleObservable - subscribe - lg  ... => (=> du setTimeout)
// +---------------------------------------1000--------------------> temps
//                     DEBUT       FIN     A
