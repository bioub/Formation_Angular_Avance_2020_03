const fs = require('fs');
const readline = require('readline');
const { fromEvent } = require('rxjs');

const rl = readline.createInterface(fs.createReadStream('package.json'));

// let cpt = 0;
// rl.addListener('line', (line) => {
//   console.log(++cpt, line);
// });
 
const obs$ = fromEvent(rl, 'line');

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