class Car {
    readonly version : string = '1.1';
    constructor(version : string, 
                protected name : string, 
                protected model : string, 
                protected year : string,
                public color : string) 
    {
        this.version = version;
    }
    setVersion(version : string) {
        //Non è permesso perché è una variabile di sola lettura
        //this.version = version;
        //È possibile impostare un unico valore quando viene creata la classe
        //Oppure quando creo un'instanza
    }
    getVersion() {
        return this.version;
    }
    getColor(){
        return this.color;
    }

}

let car = new Car('2.0', 'Fiat 500', '500C', '2016', 'Red');
console.log(car.getVersion());
console.log(car.getColor());