function timeout(msg) {
  const delay = Math.random() * 1000;
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        msg,
        delay
      });
    }, delay);
  });
}

// timeout("A").then(({ msg, delay }) => {
//   console.log(msg, delay);
// });

// timeout("B").then(({ msg, delay }) => {
//   console.log(msg, delay);
// });

// timeout("C").then(({ msg, delay }) => {
//   console.log(msg, delay);
// });

// console.time('Total');
// timeout('A')
//   .then(({ msg, delay }) => {
//     console.log(msg, delay);
//     return timeout('B');
//   })
//   .then(({ msg, delay }) => {
//     console.log(msg, delay);
//     return timeout('C');
//   })
//   .then(({ msg, delay }) => {
//     console.log(msg, delay);
//     console.timeEnd('Total');
//   });

console.time('Total');
Promise.all([
  timeout('A'),
  timeout('B'),
  timeout('C'),
]).then((messages) => {
  console.log(messages);
  console.timeEnd('Total');
})

