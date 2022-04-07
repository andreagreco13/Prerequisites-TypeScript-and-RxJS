export{};
//primo modo per creare una funzione
function myFunction(){

}

//secondo modo
let myFunc = function(){

}
//per invocarla
myFunc();

//Terzo modo
//Typescript permette di verificare il 
//valore di ingresso e di uscita
let myArrowFunc = (e:any) => {
    console.log(e);
}
myArrowFunc("HI!");
//verifica tipo dato in ingresso
let myArrowFunc2 = (e: number) => e*2;
//verifica tipo ritornato
let myArrowFunc3 = (e: number) : number => e*9;

console.log(myArrowFunc2(7));

function func(x: string, y: number) : void {
    console.log('I am func');
}

//Variabile di tipo funzione
let myFunc2 : (x: string, y: number) => void;

myFunc2 = func;
myFunc2('ts', 4);
myFunc2 = function (name: string, age: number) : void{
    console.log(name + " is " + age + " years old")
}

myFunc2('Andrea', 34);