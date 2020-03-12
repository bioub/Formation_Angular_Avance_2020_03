// setTimeout(() => {
//   console.log('1000ms');
// }, 1000)

function timeout(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

timeout(1000)
  .then(() => {
    console.log('1000ms');
    return timeout(1000);
  })
  .then(() => {
    console.log('1000ms');
    return timeout(1000);
  })
  .then(() => {
    console.log('1000ms');
    return timeout(1000);
  })
  .then(() => {
    console.log('1000ms');
    return timeout(1000);
  })
  .then(() => {
    console.log('1000ms');
    return timeout(1000);
  });