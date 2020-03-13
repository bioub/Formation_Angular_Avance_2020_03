const prenoms = ['Jean', 'Romain', 'Eric'];

// Programmation fonctionnelle
prenoms.filter((p) => p.length === 4)
       .map((p) => p.toUpperCase())
       .forEach((p) => console.log(p));

console.log('FIN');


// pile d'appels
// ^
// |               up   up   lg   lg
// |=> - => - =>   => - =>   => - =>
// |filter       - map     - forEach - lg
// +--------------------------------------> temps
//                           JEAN ERIC FIN