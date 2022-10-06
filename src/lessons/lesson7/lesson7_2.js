//сделаем то же что и в классовом синтаксисе , теперь с функциями конструкторами

function Test(name, age) {
    this.name = name;
    this.age = age;
}

Test.prototype.getName = function () {
};

// //как запилить наследование с использованием функций?
//
function SuperTest(name, age, city) {
    Test.call(this, name, age)  //эта строчка нужна чтобы не дублировать код и чтобы отследить где именно объект начинает формироваться и где какие свойства заполняются
    //то есть методом call мы заполняем собственные свойства объекта
    //а методом object.create создаем наследование прототипов
    this.city = city
}
//
// //но прототипа нужного не будет, поэтому:
//
SuperTest.prototype = Object.create(Test.prototype, {
    constructor: {
        value: SuperTest, //конструктор указывает на саму функцию: это позволяет установить связь экземпляра
        //с функцией создавшей этот экз, и если экземпляр оказался в коде там где недоступна функция-создатель, то
        // вдруг нам нужен в этом месте другой экз-р от этой функции, то мы из нашего существующего экземпляра сделаем
        //еще один экземпляр!
    },
    getName: {
        value: function () {
        }
    }
})

let obj = new SuperTest('Hanna', 35, 'Brya')
console.dir(SuperTest)
console.log(obj);
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


//Task 01 - done
// Реализовать класс Animal который принимает name(по умолчанию 'Animal') в качестве параметра, у которого будет 3
// метода walk, eat, sleep - каждый метод должен выводить в консоль строку имя + действие. Пример:
// walk => `${this.name} walking`
// проверить, что методы работают

class Animal {
    constructor(name = 'Animal') {
        this.name = name
    }

    walk() {
        console.log(`${this.name} walking`)
    }

    eat() {
        console.log(`${this.name} eating`)
    }

    sleep() {
        console.log(`${this.name} sleeping`)
    }
}

let animal = new Animal()

// console.log(animal.walk())
// console.log(animal.eat())
// console.log(animal.sleep())


//Task 02 -
// Реализовать класс Monkey на базе класса Animal,  конструктор принимает name(по умолчанию 'Monkey') в качестве
// параметра, реализовать методы roar и climb аналогично классу Animal
// проверить, что все методы работают

class Monkey extends Animal {
    constructor(name = 'Monkey') {
        super(name);
    }

    roar() {
        console.log(`${this.name} roaring`)
    }

    climb() {
        console.log(`${this.name} climbing`)
    }
}

let monkey = new Monkey()
// console.dir(Animal)
// console.dir(Monkey)
// console.log(animal)
// console.log(monkey)
// console.log(monkey.name)
// console.log(monkey.roar())
// console.log(monkey.climb())

//Task 03
// Реализовать класс Human на базе класса Monkey, конструктор принимает name(по умолчанию 'Human') в качестве
// параметра, реализовать методы speak и think аналогично классу Animal
// проверить, что все методы работают

class Human extends Monkey {
    constructor(name = 'Human') {
        super(name);
    }

    speak() {
        console.log(`${this.name} speaking`)
    }

    think() {
        console.log(`${this.name} thinking`)
    }
}

let human = new Human()
// console.dir(Human)
// console.log(human)
// console.log(human.name)
// console.log(human.speak())
// console.log(human.think())


// Task 04 -done!
// Реализовать таски 01-03 через функции конструкторы в отдельном JS файле, реализовать наследование
function Animal_F(name = "Animal") {
    this.name = name
}

Animal_F.prototype = Object.create({}, {
    constructor: {
        value: Animal_F
    },
    walk: {
        value: function () {
            console.log(`${this.name} walking`)
        },
    },

    eat: {
        value: function () {
            console.log(`${this.name} eating`)
        }
    },

    sleep: {
        value: function () {
            console.log(`${this.name} sleeping`)
        }
    },

})

function Monkey_F(name = "Monkey") {
    this.name = name
}

Monkey_F.prototype = Object.create(Animal_F.prototype, {
    constructor: {
        value: Monkey_F
    },
    roar: {
        value: function () {
            console.log(`${this.name} roaring`)
        }
    },
    climb: {
        value: function () {
            console.log(`${this.name} climbing`)
        }
    },
})

function Human_F(name = "Human") {
    this.name = name
}
Human_F.prototype=Object.create(Monkey_F.prototype,{
    constructor: {
        value: Human_F
    },
    speak: {
        value: function () {
            console.log(`${this.name} speaking`)
        }
    },
    think: {
        value: function () {
            console.log(`${this.name} thinking`)
        }
    },
})

let animal1 = new Animal_F()
let monkey1= new Monkey_F()
let human1= new Human_F()

// console.dir(Animal_F)
// console.log(animal1)
// console.dir(Monkey_F)
// console.log(monkey1)
console.dir(Human_F)
console.log(human1)

console.log(human1 instanceof Animal_F) //true
console.log(human1 instanceof Monkey_F) //true
console.log(human1 instanceof Human_F) //true


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
///////////////prototype-inheritance

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


// let user = {
//     name: "John",
//     surname: "Smith",
//
//     set fullName(value) {
//         [this.name, this.surname] = value.split(" ");
//     },
//
//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     }
// };
//
// console.log(user);
//
// let admin = {
//     isAdmin: true
// };
//
// Object.setPrototypeOf(admin, user)
//
// console.log(admin);
// console.log(admin.fullName);
//
// admin.fullName='Maksim Sologubov'
// console.log(admin.fullName);


// let animal = {
//     walk() {
//         if (!this.isSleeping) {
//             console.log(`I walk`);
//         }
//     },
//     sleep() {
//         this.isSleeping = true;
//     }
// };
//
// let rabbit = {
//     name: "White Rabbit",
// };
//
// Object.setPrototypeOf(rabbit, animal)
//
// console.log(rabbit);
// rabbit.sleep()
// console.log(rabbit)
// console.log(animal.isSleeping)
//
// console.log(Object.keys(rabbit)) // Object.keys возвращает только собственные ключи
//
// for (let prop in rabbit) { //for..in проходит и по своим, и по унаследованным ключам
//     /*let ownProp = rabbit.hasOwnProperty(prop)
//     if (ownProp)  console.log(prop)*/
//
//     if(Object.hasOwn(rabbit,prop)) console.log(prop)
// }

/////////Какие значения показываются в процессе выполнения кода?

// let animal = {
//     jumps: null
// };
// let rabbit = {
//     __proto__: animal,
//     jumps: true
// };
//
// alert( rabbit.jumps ); // ? (1) true
//
// delete rabbit.jumps;
//
// alert( rabbit.jumps ); // ? (2) null
//
// delete animal.jumps;
//
// alert( rabbit.jumps ); // ? (3) undefined


// 1.С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся
// по следующему пути: pockets → bed → table → head. Например, pockets.pen должно возвращать
// значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
// 2.Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или
// через head.glasses? При необходимости составьте цепочки поиска и сравните их.

// let head = {
//     glasses: 1
// };
//
// let table = {
//     pen: 3
// };
//
// let bed = {
//     sheet: 1,
//     pillow: 2
// };
//
// let pockets = {
//     money: 2000
// };
//
// pockets.__proto__=bed
// bed.__proto__=table
// table.__proto__=head
//
// // console.log( pockets.pen)
// // console.log( bed.glasses)


//Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

// let animal = {
//     eat() {
//         this.full = true;
//     }
// };
//
// let rabbit = {
//     __proto__: animal
// };
//
// rabbit.eat();
// console.log(rabbit)

//У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.
// Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?

// let hamster = {
//     stomach: [],
//
//     // eat(food) {
//     //     this.stomach.push(food);
//     // }
//
//     eat(food) {
//         this.stomach=[food]
//     }
// };
//
// let speedy = {
//     //stomach: [],
//     __proto__: hamster
// };
//
// let lazy = {
//     //stomach: [],
//     __proto__: hamster
// };
//
// console.log(speedy)
//
// // Этот хомяк нашёл еду
// speedy.eat("apple");
// console.log( speedy.stomach ); // apple
//
// // У этого хомяка тоже есть еда. Почему? Исправьте
// console.log( lazy.stomach ); // apple


///////////Tasks from LearnJS!!!!!
///////////////native-prototypes

// let obj = {};
// console.log(obj);
// console.log(Object.prototype.__proto__) //null

//Добавить функциям метод "f.defer(ms)"
//Добавьте всем функциям в прототип метод defer(ms),
// который вызывает функции через ms миллисекунд.

// console.dir(f)
// Function.prototype.defer=function (ms){setTimeout(this, ms,)}
//
//
// function f() {
//     console.log("Hello!");
// }
//
// f.defer(5000); // выведет "Hello!" через 5 секунду

//Добавьте функциям декорирующий метод "defer()"
//Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку,
// откладывающую вызов функции на ms миллисекунд.


// Function.prototype.defer = function(ms,) {
//     const func = this;
//     return function (...args) {
//         setTimeout(()=>func(...args), ms,)
//     }
// }
// function f(a, b) {
//     console.log(a + b);
// }
//
// function f1(a, b,c) {
//     console.log(a*b*c);
// }
//
// f.defer(3000)(12, 1); // выведет 13 через 3 секунду.
//
// console.dir(f1.defer(2000)) // ƒ anonymous()
//
// f1.defer(2000)(5,6,7) //210

//////////////////////////function-prototype

///Изменяем "prototype"
// function Rabbit() {}
// Rabbit.prototype = {
//     eats: true
// };
// console.dir(Rabbit)
//
// let rabbit = new Rabbit();
// //
// Rabbit.prototype = {};
// //
// console.dir(rabbit)
// //
// console.log( rabbit.eats ); // true
//
// Rabbit.prototype.eats = false;
//
// delete rabbit.eats;
//
// delete Rabbit.prototype.eats;

///////////Создайте новый объект с помощью уже существующего

// function SomeFunc (){};
// let obj = new SomeFunc()
// let obj2 = new obj.constructor();
// console.dir(obj)
// console.dir(obj2)
//Всё получилось, потому что SomeFunc.prototype.constructor == SomeFunc.
//Но если кто-то перезапишет SomeFunc.prototype и забудет заново назначить
// свойство "constructor", чтобы оно указывало на SomeFunc, то ничего не выйдет.

// function SomeFunc (){};
//
// // SomeFunc.prototype = {
// //     bla (){},
// // }  // будут разные результаты
//
// SomeFunc.prototype.bla = function (){} // снова все в порядке
//
// let obj = new SomeFunc()
// let obj2 = new obj.constructor();
// console.dir(obj)
// console.dir(obj2)

