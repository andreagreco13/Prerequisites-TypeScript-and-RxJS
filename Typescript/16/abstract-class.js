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
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.generateId = function () {
        return Math.round(Math.random() * 100000);
    };
    return Logger;
}());
//Per utilizzare la classe devo estenderla
// let log = new Logger(); NO!
var ConsoleLogger = /** @class */ (function (_super) {
    __extends(ConsoleLogger, _super);
    function ConsoleLogger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.msg = '';
        _this.id = 0;
        return _this;
    }
    ConsoleLogger.prototype.log = function (msg) {
        console.log(msg);
    };
    return ConsoleLogger;
}(Logger));
var cLog = new ConsoleLogger();
cLog.log('Logging to console');
console.log(cLog.generateId());
