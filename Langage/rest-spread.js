// REST Params (ES2015)
// conversion liste de valeurs 3, 4 en un tableau [3, 4]
function sum(a, b, ...nbs) {
  let result = a + b;

  for (const nb of nbs) {
    result += nb;
  }

  return result
}

console.log(sum(1, 2, 3, 4)); // a = 1, b = 2, nbs = [3, 4]

// SPREAD Operator (ES2015)
// conversion tableau [3, 4] vers un liste de valeurs 3, 4

const nbs = [1, 2, 3, 4];

function multiply(a, b, c, d) {
  return a * b * c * d;
}

console.log(multiply(...nbs)); // [1, 2, 3, 4] devient 1, 2, 3, 4
// equivalent à :
// console.log(multiply(nbs[0], nbs[1], nbs[2], nbs[3]));

// function hello(name) {} -> appel hello('Romain');
// affectation name = 'Romain'

// ... à gauche -> REST Params
// ... à droite -> SPREAD Operator

// Cloner un tableau SPREAD Operator
const clone = [...nbs];
// équivalent à 
// const clone = [nbs[0], nbs[1], nbs[2], nbs[3]];


function doubleMutable(array) {
  for (let i = 0; i < array.length; i++) {
    const val = array[i];
    array[i] = val * 2;
  }

  return array;
}

function doubleImmutable(array) {
  array = [...array];
  for (let i = 0; i < array.length; i++) {
    const val = array[i];
    array[i] = val * 2;
  }

  return array;
}


doubleMutable(nbs);
// nbs est modifié
console.log(nbs); // [ 2, 4, 6, 8 ]


doubleImmutable(nbs);
// nbs n'est pas modifié
console.log(nbs); // [ 1, 2, 3, 4 ]


// const nbs = [1, 2, 3, 4];

// Destructuring array + REST Params
//    [1  , 2   , 3, 4]
const [one, two, ...threeAndFour] = nbs;

// équivalent à
// const one = nbs[0];
// const two = nbs[1];
// const threeAndFour = nbs.slice(2);

// Depuis ES2018 on peut faire pareil sur des objets
// ne fonctionne pas sur les fonctions

const state = {
  count: 1,
  name: 'Romain'
};

// SPREAD (cloner)
const newState = {...state, count: state.count + 1};

// REST (moins fréquent)
const { name, ...stateRest } = state;
console.log(name); // 'Romain'
console.log(stateRest) // {count: 2}

