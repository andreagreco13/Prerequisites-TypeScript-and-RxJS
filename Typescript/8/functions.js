"use strict";
exports.__esModule = true;
//primo modo per creare una funzione
function myFunction() {
}
//secondo modo
var myFunc = function () {
};
//per invocarla
myFunc();
//Terzo modo
//Typescript permette di verificare il 
//valore di ingresso e di uscita
var myArrowFunc = function (e) {
    console.log(e);
};
myArrowFunc("HI!");
//verifica tipo dato in ingresso
var myArrowFunc2 = function (e) { return e * 2; };
//verifica tipo ritornato
var myArrowFunc3 = function (e) { return e * 9; };
console.log(myArrowFunc2(7));
function func(x, y) {
    console.log('I am func');
}
//Variabile di tipo funzione
var myFunc2;
myFunc2 = func;
myFunc2('ts', 4);
myFunc2 = function (name, age) {
    console.log(name + " is " + age + " years old");
};
myFunc2('Andrea', 34);
