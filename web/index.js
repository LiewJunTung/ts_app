var Dog = /** @class */ (function () {
    function Dog(name, age) {
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(Dog.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: true,
        configurable: true
    });
    Dog.prototype.bark = function () {
        console.log(this._name + ":" + this._age + ":: Woof!");
    };
    Dog.prototype.jump = function (func) {
        func(20);
    };
    Dog.prototype.sleep = function (options) {
        if (options.bed) {
            console.log(this._name + " is sleeping on a " + options.hardness + " Bed.");
        }
        else {
            console.log(this._name + " is sleeping on the floor :(");
        }
    };
    return Dog;
}());
var myModule = { Dog: Dog };
