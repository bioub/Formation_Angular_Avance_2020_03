const obj1 = { a: 1 };
const obj2 = { b: 2, c: 3 };
const obj3 = { b: 1, c: 1 };

// Objectif
// obj1 === {a: 1, b: 2, c: 3};

Object.assign(obj1, obj2, obj3);

console.log(obj1);

class Range {
  constructor(options) {
    Object.assign(this, {min: 0, max: 100}, options);
  }
}

const range1 = new Range({
  min: 10,
  max: 20,
});

console.log(range1);


const range2 = new Range({
  max: 20,
});

console.log(range2); 

const range3 = new Range({
  min: 10,
});

console.log(range3); // 10