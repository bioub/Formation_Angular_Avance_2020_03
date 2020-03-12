const nbs = [1, 2, 3, 4];

// function transform(nbs) {
//   nbs = Object.assign([...nbs], {[nbs.findIndex(n => n === 3)]: 10})
//   return nbs;
// }

function transform(nbs) {
  return nbs.map((n) => n === 3 ? 10 : n);
}

const newNbs = transform(nbs); // [1, 2, 10, 4]
console.log(newNbs);
console.log(nbs); // [1, 2, 3, 4]