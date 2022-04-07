var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.setName = function (name) {
        this._name = name.toUpperCase();
    };
    User.prototype.getName = function () {
        return this._name;
    };
    return User;
}());
var user = new User();
user.setName('andrea');
console.log(user.getName());
