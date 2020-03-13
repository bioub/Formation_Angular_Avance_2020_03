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


// pile d'appels
// ^
// |                           setTimeout
// |setTimeout                 => (executor)  
// |=> (executor)              Promise
// |Promise               lg - timeout
// |timeout        ..⟳.. cb1                   ..⟳.. 
// +----------------------1002-------------------------------------> temps
//         

// file d'attente (1000ms) : cb1
// file d'attente (1002ms) : 