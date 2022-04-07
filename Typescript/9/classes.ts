export{};
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

class Animal {
    name: string;
    constructor(name: string){
        this.name = name;
    }
    getName(){
        return 'my name is ' + this.name;
    }
}

var cat = new Animal('cat');
console.log(cat.getName());