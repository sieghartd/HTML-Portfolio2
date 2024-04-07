// var generateName = require('sillyname');

// import generateName from "sillyname"
// var sillyName = generateName();

// console.log(`My name is ${sillyName}.`);

import superheroes from "superheroes"
const superheroes = require('superheroes');
 
// superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]
 
superheroes.random();
//=> 'Spider-Ham'

console.log(`My name is ${superheroes.random()}`);