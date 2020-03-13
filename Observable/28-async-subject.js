const { AsyncSubject } = require('rxjs');

const currentUser$ = new AsyncSubject();

currentUser$.next({id: 345, username: 'Romain'});

currentUser$.subscribe({
  next(msg) {
    console.log('next composant 1', msg);
  },
  error(err) {
    console.log('error', err.message)
  },
  complete() {
    console.log('complete');
  }
});


currentUser$.next({id: 345, username: 'Toto'});


currentUser$.subscribe({
  next(msg) {
    console.log('next composant 2', msg);
  },
  error(err) {
    console.log('error', err.message)
  },
  complete() {
    console.log('complete');
  }
});


currentUser$.next({id: 345, username: 'Titi'});
currentUser$.complete();