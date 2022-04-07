class User {
    private _name : string

    setName(name : string) {
        this._name = name.toUpperCase();
    }

    getName() {
        return this._name;
    }
}

let user = new User();
user.setName('andrea');

console.log(user.getName());