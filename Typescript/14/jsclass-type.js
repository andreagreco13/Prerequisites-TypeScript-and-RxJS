var MyLogger = /** @class */ (function () {
    function MyLogger() {
    }
    MyLogger.prototype.log = function (msg) {
        console.log(msg);
    };
    MyLogger.prototype.generateId = function () {
        return Math.round(Math.random() * 10000);
    };
    return MyLogger;
}());
var MyMailLogger = /** @class */ (function () {
    function MyMailLogger() {
    }
    MyMailLogger.prototype.log = function (msg) {
    };
    MyMailLogger.prototype.generateId = function () {
        return 1;
    };
    return MyMailLogger;
}());
var mailLog;
function logData(logger) {
    return logger.generateId();
}
mailLog = new MyMailLogger();
console.log(logData(mailLog));
