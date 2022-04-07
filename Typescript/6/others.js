"use strict";
exports.__esModule = true;
var age;
age = 45;
age = [];
age = 'aa';
//any si usa quando non sappiamo i dati previsti
var userData = [45, 'lol', 'roftl', { address: 'aci' }];
/* ERRoRE
userData = 4; */
//Corretto:
userData = ['444', [], {}];
//void si usa solo per le funzioni che ritornano vuoto
function printName() {
}
