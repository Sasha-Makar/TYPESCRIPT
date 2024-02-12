// console.log('hello from TS');
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
console.log('**********INTERFACE....?,PARTIAL,....GENERIC,');
// const a: number = 7;
// console.log(a,typeof a);
//
// const b: string = a.toString();
// console.log(b, typeof b);
//
//
//
// function func(name:[number]):void {
// }
// interface IUser {
//     name:string,
//     age:number,
//     house:boolean
// }
//
// let user:IUser = {
//     name:'Max',
//     age: 25,
//     house:true
// }
// console.log(user);
//
// let user2:IUser ={
//     name:'asd',
//     age: 77,
//     house:false
// }
// console.log(user2);
// interface IUser<T,Q> {
//     name:string,
//     age:number,
//     house:boolean,
//     data:T,
//     data2:Q
// }
//
// let user:IUser<number, string> ={
//     name:'asdfg',
//     age: 77,
//     house:true,
//     data:111,
//     data2:'qweasdf'
// }
//
// console.log(user);
// interface IUser {
//     name:string,
//     age:number,
//     house?:boolean
// }
//
// let user:IUser ={
//     name: 'as',
//     age:77
// }
//
// console.log(user);
//
// let user2:Partial<IUser>={
//     name:'QWERT'
// }
//
// console.log(user2);
// interface IUser {
//     name:string,
//     age:number,
//     house?:number
// }
//
// let user:IUser = {
//     name: 'Max',
//     age:25,
//     house:20
// }
//
// console.log(user);
//
//
//
//
// const user2:IUser={
//     name:'qwe',
//     age:20
// }
// console.log(user2);
//
//
//
// const user3:Partial<IUser>={
//     age:10
// }
//
// console.log(user3);
// interface IUser<T> {
//     name:string,
//     age:number,
//     house?:number,
//     data:T
// }
//
// let user:IUser<number>={
//     age:10,
//     name:'asd',
//     data:77
// }
// console.log(user);
console.log('*');
console.log('*');
console.log('*');
console.log('*');
console.log('*');
////////class
console.log('***********CLASS**************');
// class User{
//     private name:string;
//     public age:number;
//
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     getName():string{
//         return this.name;
//     }
// }
//
// let user = new User('jiji', 123);
// console.log(user);
// console.log(user.age);
// // console.log(user.name);
// console.log(user.getName());
// class User{
//     constructor(private name: string,public age: number) {
//     }
//     getName():string{
//         return this.name;
//     }
// }
//
// let user = new User('jiji', 123);
// console.log(user);
// console.log(user.age);
// // console.log(user.name);
// console.log(user.getName());
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    return User;
}());
var user = new User('jiji', 123);
console.log(user);
console.log(user.age);
// console.log(user.name);
console.log(user.getName());
console.log('---');
var users = [
    new User('max', 15),
    new User('kokos', 3)
];
console.log(users);
console.log('==============');
var Car = /** @class */ (function () {
    function Car(seats, brand, year, enginePower) {
        this.seats = seats;
        this.brand = brand;
        this.year = year;
        this.enginePower = enginePower;
    }
    Car.prototype.start = function () {
        console.log('RRRrrrrrrr');
    };
    Car.prototype.getInfo = function () {
        console.log("SEATS: ".concat(this.seats, " ---BRAND: ").concat(this.brand, "  ---YEAR: ").concat(this.year));
    };
    Car.prototype.getLedStatus = function () {
        return false;
    };
    return Car;
}());
var car1 = new Car(77, 'bmw', 10, 3.5);
console.log(car1);
car1.getInfo();
console.log(car1.enginePower);
console.log(car1.getLedStatus());
console.log('//////////////ABSTRACTION CLASS?//////////////');
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
// abstract class Triangle extends Shape{
// }
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(a, b, c) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        _this.c = c;
        return _this;
    }
    Triangle.prototype.perimeter = function () {
        return this.a / this.c + this.b;
    };
    Triangle.prototype.area = function () {
        return this.a + this.b * this.c;
    };
    return Triangle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(a, b) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        return _this;
    }
    Rectangle.prototype.perimeter = function () {
        return this.a + this.b;
    };
    Rectangle.prototype.area = function () {
        return this.a + this.b * 2;
    };
    return Rectangle;
}(Shape));
var shapes = [
    new Triangle(2, 2, 2),
    new Rectangle(3, 3),
    new Triangle(5, 5, 5)
];
console.log(shapes);
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    console.log(shape.constructor['name']);
    console.log(shape.perimeter());
    console.log(shape.area());
}
