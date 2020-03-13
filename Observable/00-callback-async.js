setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);
// setTimeout(() => console.log('E'), Math.random() * 1000);

console.log('FIN');


// pile d'appels
// ^
// |
// |                              lg         lg    lg         lg
// |st - st - st - st - lg ..⟳.. cbB  ..⟳.. cbA - cbD ..⟳.. cbC
// +-----0------------------------10---------502---504--------1003-----> temps
//                      FIN       B          A     D          C 

// File d'attente (0ms) : cbB
// File d'attente (10ms) : 
// File d'attente (500ms) : cbA - cbD
// File d'attente (502ms) : cbD
// File d'attente (504ms) : 
// File d'attente (1000ms) : cbC
// File d'attente (1003ms) : 



// Node.js / Browser sont écrits en C++
// Lib -> Moteur JavaScript (V8, SpiderMonckey, JSCore, Chakra) -> exécute le JS
// Côté C++ le code s'exécute dans une boucle appelée Event Loop
// function main() {
//   do {
//     const callbacks = getCallbacks();
//     for (const cb of callbacks) {
//       cb();  
//     }
//   } while (hasCallbacks());
// }