var MathCalc = /** @class */ (function () {
    function MathCalc() {
    }
    MathCalc.calcCirclePerimeter = function (r) {
        return 2 * MathCalc.PI * r;
    };
    MathCalc.prototype.calcEuroToDollar = function (e) {
        return e * MathCalc.rate;
    };
    MathCalc.PI = 3.14159;
    MathCalc.rate = 1.13;
    return MathCalc;
}());
var calc = new MathCalc();
//le variabili e i metodi statici vanno chiamate dalla classe e non dall'istanza
console.log(MathCalc.PI);
console.log(MathCalc.calcCirclePerimeter(2));
//Un metodo non statico può essere chiamato anche tramite un'istanza
console.log('120 Euro sono ' + calc.calcEuroToDollar(120) + ' Dollari');
