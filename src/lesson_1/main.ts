// console.log('hello from TS');

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


class User{
    constructor(protected name: string,public age: number) {
    }
    getName():string{
        return this.name;
    }
}

let user = new User('jiji', 123);
console.log(user);
console.log(user.age);
// console.log(user.name);
console.log(user.getName());


console.log('---');

const users: User[] = [
    new User('max', 15),
    new User('kokos',3)
];
console.log(users);


console.log('==============');


interface IElectric {
    enginePower:number;

    getLedStatus():boolean;
}




class Car implements IElectric{
    enginePower: number;
    constructor(private seats:number,private brand:string,private year:number,enginePower:number) {
        this.enginePower = enginePower;
    }
    start():void{
        console.log('RRRrrrrrrr');
    }

    getInfo():void{
        console.log(`SEATS: ${this.seats} ---BRAND: ${this.brand}  ---YEAR: ${this.year}`);
    }

    getLedStatus(): boolean {
        return false;
    }
}

let car1 = new Car(77, 'bmw', 10,3.5);
console.log(car1);
car1.getInfo();
console.log(car1.enginePower);
console.log(car1.getLedStatus());


console.log('//////////////ABSTRACTION CLASS?//////////////');



abstract class Shape {
    abstract perimeter():number;

    abstract area():number;
}


// abstract class Triangle extends Shape{
// }

class Triangle extends Shape {
    constructor(private a:number,private b:number,private c:number) {
        super();
    }

    perimeter(): number {
        return this.a/this.c+this.b;
    }

    area(): number {
        return this.a+this.b*this.c;
    }
}



class Rectangle extends Shape{
    constructor(private a:number,private b:number) {
        super();
    }
    perimeter(): number {
        return this.a+this.b;
    }

    area(): number {
        return this.a+this.b*2;
    }

}


const shapes: Shape[] = [
    new Triangle(2, 2, 2),
    new Rectangle(3, 3),
    new Triangle(5,5,5)
];

console.log(shapes);

for (const shape of shapes) {
    console.log(shape.constructor['name']);
    console.log(shape.perimeter());
    console.log(shape.area());
}



