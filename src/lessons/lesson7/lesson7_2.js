//сделаем то же что и в классовом синтаксисе , теперь с функциями конструкторами

// function Test(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// Test.prototype.getName = function () {
// };
//
// //как запилить наследование с использованием функций?
//
// function SuperTest(name, age, city) {
//     Test.call(this, name, age)  //эта строчка нужна чтобы не дублировать код и чтобы отследить где именно объект начинает формироваться и где какие свойства заполняются
//     //то есть методом call мы заполняем собственные свойства объекта
//     //а методом object.create создаем наследование прототипов
//     this.city = city
// }
//
// //но прототипа нужного не будет, поэтому:
//
// SuperTest.prototype = Object.create(Test.prototype, {
//     constructor: {
//         value: SuperTest, //конструктор указывает на саму функцию: это позволяет установить связь экземпляра
//         //с функцией создавшей этот экз, и если экземпляр оказался в коде там где недоступна функция-создатель, то
//         // вдруг нам нужен в этом месте другой экз-р от этой функции, то мы из нашего существующего экземпляра сделаем
//         //еще один экземпляр!
//     },
//     getName: {
//         value: function () {
//         }
//     }
// })
//
// let obj = new SuperTest('Hanna', 35, 'Brya')
// console.log(obj);
// //то есть для функций всегда  нужно будет вызывать call, заполнять все нужные нам свойста, а далее
// //переопределять прототип чтобы четко работало
// // переопределение делается сразу после объявления функции
// //в общем в итоге выполняется все то что делает ключевое слово extends  в классах
//
// let obj2 = new obj.constructor('Yo', 450, 'Minsk')
// console.log(obj2);
//
// //мы бы хотели знать экземпляром чего является какой то объект?
// console.dir(obj.constructor) //SuperTest - we get name of function which creates this obj
//
// //в JS есть instanceof:
// console.log(obj2 instanceof SuperTest) //true
// console.log(obj2 instanceof Test) //true
//это экземпляр и того и другого!
//ключевое слово инстанс идет по цепочке [[Prototype]] от ближнего (первого) прототипа до первого совпадения,
// находит и возвращает истину.
//собственные свойства на объекте не проверяются,
//а например сам объект когда мы с ним работаем, проверяет сначала собственные свойства а потом цепочку прототайп
//если мы не знаем какой класс от какого наследуется то только двумя проверками можем узнать
//экземпляром какого класса будет являться объект

//////////Для создания фреймворков например нужны объекты с кастомной функциональностью,
//тогда можно сделать так, создать объект вообще без стандартных методов и наполнить его методами нашими:
// let obj = {name: 'Yo'}
// // Object.setPrototypeOf(obj, {Bla:'Bla'})
// // console.log(obj)  //но здесь в итоге вссе равно первоначален прототип класса объект
// let protoObj = Object.create(null)
// console.log(protoObj) //создан объект без свойств!
// protoObj.bla='vla'
// Object.setPrototypeOf(obj, protoObj)
// console.log(obj)//создали объект с нужным нам прототипом


////////???????????Задачка - переписать определение объекта чтобы все получилось и увидеть лог? (тут работа с сеттером и геттером)
//let obj3 = {a: 1}
// let obj3 = Object.create({}, {
//     a1: {
//         value: 1,
//         writable:true,
//         configurable: false,
//         enumerable: false,
//     },
//     a: {
//         configurable: true,
//         enumerable: true,
//         get() {
//             return this.a1++
//         },
//         set(value) {
//             this.a1 = value
//         }
//     }
// })
// console.log(obj3)
// console.log(Object.getOwnPropertyDescriptor(obj3, 'a'))
// console.log(Object.getOwnPropertyDescriptor(obj3, 'a1'))
//
// if (obj3.a === 1 && obj3.a === 2 && obj3.a === 3) {
//     alert('Bingo!!!!!!')
// }

////////////////////////////////////////////


//Task 01
// Реализовать класс Animal который принимает name(по умолчанию 'Animal') в качестве параметра, у которого будет 3
// метода walk, eat, sleep - каждый метод должен выводить в консоль строку имя + действие. Пример:
// walk => `${this.name} walking`
// проверить, что методы работают


//Task 02
// Реализовать класс Monkey на базе класса Animal,  конструктор принимает name(по умолчанию 'Monkey') в качестве
// параметра, реализовать методы roar и climb аналогично классу Animal
// проверить, что все методы работают


//Task 03
// Реализовать класс Human на базе класса Monkey, конструктор принимает name(по умолчанию 'Human') в качестве
// параметра, реализовать методы speak и think аналогично классу Animal
// проверить, что все методы работают


// Task 04
// Реализовать таски 01-03 через функции конструкторы в отдельном JS файле, реализовать наследование


// Task 05
// Используя метод Apply реализовать свой собственный метод bind

// Function.prototype.customBind = function (context, ...args) {
//     const _self = this //для сохранения контекста в случае func declaration
//     return function (...args2) {
//         return _self.apply(context, [...args, ...args2])
//     }
// }

// let obj = {name: 'Hanna'}
// let obj2 = {
//     name: 'Yo',
//     sayName() {
//         console.log(this.name)
//     }
// }
//
// obj2.sayName.customBind(obj)() //Hanna
// console.log(obj);
// console.log(obj2);

// 'это один из вариантов, есть еще один, без использования call,apply...

// Function.prototype.anotherBind = function (context, ...args) {
//     context._property_ = this //для сохранения контекста в случае func declaration
//     return function (...args2) {
//         return context._property_(...args, ...args2)
//     }
// }
//
// let obj = {name: 'Hanna'}
// let obj2 = {
//     name: 'Yo',
//     sayName() {
//         console.log(this.name)
//     }
// }
//
// obj2.sayName.anotherBind(obj)()
// console.log(obj);
// console.log(obj2);

//////////////еще один вопрос для собесов:

// Function.prototype.anotherBind = function (context, ...args) {
//     context._property_ = this //для сохранения контекста в случае func declaration
//     return function (...args2) {
//         return context._property_(...args, ...args2)
//     }
// }
//
// let obj = {name: 'Hanna'}
// let obj2 = {
//     name: 'Yo',
//     sayName() {
//         console.log(this.name,...arguments)
//     }
// }
// let obj3={name:'Bla'}
//
// obj2.sayName.anotherBind(obj3,50).anotherBind(obj,100)()

//Bla 50 100
//второй раз bind пропускается потому что функция которая возвращается не использует контекст,
//а раз не исп-ся значит второй bind пропускается..

///////////////////////////////////////
//Еще одна задачка!!!!!!:

// const qq = () => {
//     const a = {
//         a: 5,
//     }
//     a.valueOf = function () {
//         return this.a++
//     }
//     if (a == 5 && a == 6 && a == 7) {
//         console.log('It Works!!!!!1')
//     }
// }
//
// console.log(qq())


///////////Tasks from LearnJS!!!!!

// let animal = {
//     eats: true,
//     walk() {
//         console.log("Animal walk");
//     }
// };
// let rabbit = {
//     jumps: true
// };
//
// //rabbit.__proto__ = animal;
// Object.setPrototypeOf(rabbit, animal); //или так
// // console.log(rabbit)
// // console.log(rabbit.eats);
//
// let longEar = {
//     earLength: 10,
//     __proto__: rabbit
// };
//
// console.log(longEar)
// console.log(longEar.walk());
//
// rabbit.walk=function () {
//     console.log("Rabbit! Bounce-bounce!")
// }
// rabbit.walk()
// console.log(rabbit)


let user = {
    name: "John",
    surname: "Smith",

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },

    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};

console.log(user);

let admin = {
    isAdmin: true
};

Object.setPrototypeOf(admin, user)

console.log(admin);
console.log(admin.fullName);

admin.fullName='Maksim Sologubov'
console.log(admin.fullName);