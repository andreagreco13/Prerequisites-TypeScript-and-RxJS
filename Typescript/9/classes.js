"use strict";
exports.__esModule = true;
//In JS:
/* function Animal(name: any){
    this.name = name;
}

Animal.prototype.getName = function(){
    return this.name;
}

var cat = new Animal('cat');
console.log(cat.getName()); */
//Invece in typescript: 
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.getName = function () {
        return 'my name is ' + this.name;
    };
    return Animal;
}());
var cat = new Animal('cat');
console.log(cat.getName());
