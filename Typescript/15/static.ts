class MathCalc {
    static readonly PI = 3.14159;
    static readonly rate = 1.13;
    static calcCirclePerimeter(r : number) {
        return 2*MathCalc.PI*r;
    }

    calcEuroToDollar(e : number) {
        return e*MathCalc.rate;
    }

}

let calc = new MathCalc();
//le variabili e i metodi statici vanno chiamate dalla classe e non dall'istanza
console.log(MathCalc.PI);
console.log(MathCalc.calcCirclePerimeter(2));
//Un metodo non statico può essere chiamato anche tramite un'istanza
console.log('120 Euro sono ' + calc.calcEuroToDollar(120) + ' Dollari');