var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//classes
var AnimalBase = /** @class */ (function () {
    function AnimalBase(name) {
        this.name = name;
    }
    AnimalBase.prototype.move = function (distance) {
        console.log('I am moving ' + distance + ' meters');
    };
    AnimalBase.prototype.getName = function () {
        return 'My name is ' + this.name;
    };
    return AnimalBase;
}());
var Birds = /** @class */ (function (_super) {
    __extends(Birds, _super);
    function Birds(name, place) {
        if (place === void 0) { place = 'SEA'; }
        var _this = _super.call(this, name) || this;
        _this.place = place;
        return _this;
    }
    Birds.prototype.getPlace = function () {
        return 'And I come frome the ' + this.place;
    };
    Birds.prototype.setPlace = function (place) {
        this.place = place;
    };
    Birds.prototype.move = function (distance) {
        console.log('I am flying ' + distance + ' meters');
    };
    return Birds;
}(AnimalBase));
var dove = new Birds('Dove', 'OCEAN');
dove.move(50);
console.log(dove.getName());
console.log(dove.getPlace());
