var Car = /** @class */ (function () {
    function Car(version, name, model, year, color) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.color = color;
        this.version = '1.1';
        this.version = version;
    }
    Car.prototype.setVersion = function (version) {
        //Non è permesso perché è una variabile di sola lettura
        //this.version = version;
        //È possibile impostare un unico valore quando viene creata la classe
        //Oppure quando creo un'instanza
    };
    Car.prototype.getVersion = function () {
        return this.version;
    };
    Car.prototype.getColor = function () {
        return this.color;
    };
    return Car;
}());
var car = new Car('2.0', 'Fiat 500', '500C', '2016', 'Red');
console.log(car.getVersion());
console.log(car.getColor());
