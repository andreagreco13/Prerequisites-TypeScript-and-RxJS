// any, void, null, undefined, never
export{};
let age: any;
age = 45;
age = [];
age = 'aa';
//any si usa quando non sappiamo i dati previsti
let userData: any[] = [45, 'lol', 'roftl', {address: 'aci'}];
/* ERRoRE
userData = 4; */
//Corretto:
userData = ['444', [], {}];

//void si usa solo per le funzioni che ritornano vuoto
function printName() : void{

}
