console.log('Lesson 5');

// Keyword - this
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this
// https://learn.javascript.ru/object-methods
// https://habr.com/ru/company/ruvds/blog/419371/
// https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT

// А тут заходим и ставим лайк!!!
// https://www.youtube.com/watch?v=T1vJ8OdJq0o

// https://www.youtube.com/watch?v=xY-mwUzDjsk

// Keyword - new. Function-constructor
// https://learn.javascript.ru/constructor-new
// https://metanit.com/web/javascript/4.5.php
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/new

// Call, Apply, Bind
// https://learn.javascript.ru/call-apply-decorators
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE-%D0%BE-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B0%D1%85-apply-call-%D0%B8-bind-%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D1%85-%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-javascript-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D1%83-ddd5f9b06290


// Task 01 - done!
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта

type someObjType = {
    name: string;
    age: number;
}

let someObj: someObjType = {
    name: 'Maksim',
    age: 38
}

function greeting() {
    // @ts-ignore
    console.log(`My name is ${this.name}. I am ${this.age}`)
}

// @ts-ignore
someObj.greeting = greeting;
// @ts-ignore
someObj.greeting()


// Task 02 - done!
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект
let counter = {
    value: 0,
    getCurrentCount() {
        console.log(this.value)
    },
    increment() {
        this.value++
        return counter
    },
    decrement() {
        this.value--
        return counter
    },
    // @ts-ignore
    setCurrentCount(setValue) {
        this.value = setValue;
        return counter
    },
    resetCurrentCount() {
        this.value = 0;
    },

}
// Task 03 - done!
// переделайте код из Task 02, что бы сработал следующий код:
counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12


// Task 04 - done!
// Написать функцию конструктор myFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// у которого будут эти свойства и метод greeting из Task 01
// @ts-ignore
function MyFirstConstructorFunc(name, age) {
    // @ts-ignore
    this.name = name
    // @ts-ignore
    this.age = age
    MyFirstConstructorFunc.prototype.greeting = greeting
}

// @ts-ignore
let newObj = new MyFirstConstructorFunc('Hanna', 35)
console.log(newObj)
newObj.greeting()
console.log(newObj.name)
console.log(newObj.age)


// Task 05  - done!
// есть 2 объекта One и Two. С помощью bind и метода sayHello заставьте поздороваться объект One

let One = {name: 'One'};
let Two = {
    name: 'Two',
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}`)
    }
};
Two.sayHello.bind(One)();

// Task 06 - done!
// создайте объект helperObj у которого есть следующие методы:
// changeName - меняет значение у свойства name объекта на полученное значение
// setAge - устанавливает полученное значение в свойство age объекта
// greeting - используется функция sayHello из Task 05
// можно использовать @ts-ignore

// @ts-ignore
let helperObj = {
    name: '',
    // @ts-ignore
    changeName(newName) {
        this.name = newName
    },
    // @ts-ignore
    setAge(age) {
        // @ts-ignore
        this.age = age;
    },
    greeting: Two.sayHello
}

console.log(helperObj)
helperObj.changeName('Habibullah')
console.log(helperObj)
helperObj.greeting()


// Bind на суппорт!!!!!!!!!!
// 1) DONE!   Дана функция sumTwoNumbers, реализовать функцию bindNumber которая принимает функцию sumTwoNumbers и число, и
// возвращает другую функцию, которое также принимает число и возвращает сумму этих чисел. Замыкание использовать нельзя
function sumTwoNumbers(a: number, b: number): number {
    return a + b
};
// @ts-ignore
function bindNumber (sumTwoNumbers, num) {
    return sumTwoNumbers.bind(null,num)
}
console.log(bindNumber(sumTwoNumbers,100)(10))


// 2) DONE! Напишите функцию которая принимает первым аргументом объект One, а вторым helperObj. Данная функция
// возвращает другую функцию которая принимает строку в качестве аргумента и устанавливает ее свойству name объекта One
// @ts-ignore
// function setNameByChain(obj1,obj2) {
//     // @ts-ignore
//     return obj2.changeName.bind(obj1)
// }
// setNameByChain(One,helperObj)('Barabulya!!!')
// console.log(One.name)


// 3) DONE!   Одной строкой установить с помощью helperObj объекту Two поле age в значение 30
// helperObj.setAge.bind(Two,30)()
// // @ts-ignore
// console.log(Two.age)


// // 4) DONE! Создать метод hi у объекта One, который всегда вызывает метод greeting объекта helperObj от имени Two
// // @ts-ignore
// One.hi=helperObj.greeting.bind(Two)
// // @ts-ignore
// One.hi()

// Реализовать задачи 2-4 из Bind с помощью Call
// 2-CALL) DONE! Напишите функцию которая принимает первым аргументом объект One, а вторым helperObj. Данная функция
// возвращает другую функцию которая принимает строку в качестве аргумента и устанавливает ее свойству name объекта One
// @ts-ignore
function setNameByChain(obj1,obj2,) {
    // @ts-ignore
     return function (newName) {obj2.changeName.call(obj1,newName)}
}
setNameByChain(One,helperObj)('Of Crimea')
console.log(One.name)

// 3) DONE!   Одной строкой установить с помощью helperObj объекту Two поле age в значение 30
helperObj.setAge.call(Two,38)
// @ts-ignore
console.log(Two.age)

// 4) DONE! Создать метод hi у объекта One, который всегда вызывает метод greeting объекта helperObj от имени Two
// @ts-ignore

One.hi=function (){helperObj.greeting.call(Two)}
// @ts-ignore
One.hi()



/////////////////// У функции есть Владелец!
// let obj = {name: 'Maksim'}
// function f() {
//     console.log('function', this)
// }
//
// f()
//
// obj.f = f;
// obj.f()

//this недоступен через замыкание! его нельзя достать через замыкание
// let obj = {name: 'Maksim'}
// let obj2 = {
//     name: 'Hanna',
//     f() {
//         function inner(){
//             console.log('function', this)
//         }
//         inner();
//     },
// }
// obj2.f();
//в данном случае слева от inner ничего нет, поэтому this отнесено к глобальному объекту window!

//достанем this из замыкания, записав в переменную
// let obj = {name: 'Maksim'}
// let obj2 = {
//     name: 'Hanna',
//     f() {
//         const _this=this;
//         function inner(){
//             console.log('function', this);
//             console.log('closure _this', _this)
//         }
//         inner();
//     },
// }
// obj2.f();

//отдали inner  в obj , тогда this уже будет относиться к obj
// let obj = {name: 'Maksim'}
// let obj2 = {
//     name: 'Hanna',
//     f() {
//         function inner(){
//             console.log('function', this);
//         }
//         return inner;
//     },
// }
// obj.f = obj2.f();
// obj.f();


////// в данном случае видим что this относится только к объекту innerObj сслева от функции
// let obj = {name: 'Maksim'}
// let obj2 = {
//     name: 'Hanna',
//     f() {
//         function inner(){
//             console.log('function', this);
//         }
//         return inner;
//     },
//     innerObj: {
//         name: 'innerObj',
//         f() {
//             console.log('function', this);
//         }
//     }
// }
// obj2.innerObj.f();

///////
// var test=function UUUU() {  //function expression declaration
//     UUUU(); //- это будет рекурсия, все будет работать
//     test(); // будет работать пока test содержит ссылку на UUUU;
// }
//
// let test2=test; //теперь ссылка на UUUU есть у тест2
// test=null; //ссылка в тест уничножена
// test2(); // будет работать так как ссылка на UUUU   в тест2 осталась
//

/// теперь то же самое но анонимная функция в тест
// var test=function () {  //function expression анонимная функция, которой будет присвоено имя test
//     test(); // будет работать
// }
//
// let test2=test; //теперь ссылка на тест есть у тест2
// test=null; //ссылка в тест уничножена
// test2(); // не будет работать так как тест более не существует.

/////
// let obj = {name: 'Maksim'}
// let obj2 = {name: 'Hanna'}
//
// function f() {
//     function inner(){
//         console.log('function', this);
//     }
//     return inner;
// }
//
// f.f=f();
// f.f();

//// про стрелочные функции
// let obj = {name: 'Maksim'}
// let obj2 = {name: 'Hanna'}
//
// let arrow = () => {
//     console.log('arrow', this)
// };
//
// arrow(); //в данном случае контекст this это глобал объект window
///  в стрелках - контекст this формируется в момент определения функции
// именно в той области вилимости, где она была определена
// поэтому в след примере опять увидим window
// let obj = {name: 'Maksim'}
// let obj2 = {
//     name: 'Hanna',
//     arrow: ()=>{
//         console.log('arrow', this)
//     }
// }
// obj2.arrow()


/////////здесь по всем правилам 2 раза window
// let obj = {name: 'Maksim'}
// let obj2 = {
//     name: 'Hanna',
//     arrow: () => {
//         console.log('arrow', this);
//         function inner() {
//             console.log('Function', this);
//         }
//         inner();
//     }
// }
//
// obj2.arrow()

////////
// let obj = {name: 'Maksim'}
// let obj2 = {
//     name: 'Hanna',
//     arrow: () => {
//         console.log('arrow', this);
//         let inner=()=> {
//             console.log('inner arrow', this);
//         }
//         inner();
//     }
// }
// obj.a = obj2.arrow();
//увидим 2 раза window
////////

// let obj = {name: 'Maksim'}
// let obj2 = {
//     name: 'Hanna',
//     a ()  {
//         console.log('function', this);
//         let inner=()=> {
//             console.log('inner arrow', this);
//         }
//         inner();
//     }
// }
// obj.a = obj2.a();
/// а теперь 2 раза Hanna
////

// let obj = {name: 'Maksim'}
// let obj2 = {
//     name: 'Hanna',
//     a ()  {
//         console.log('function', this);
//         let inner=()=> {
//             console.log('inner arrow', this);
//         }
//         return inner;
//     }
// }
// obj.a = obj2.a();
// obj.a();
// здесь 2 Ханны, т к в момент вызова a - у иннера появится контекст this объекта obj2
////////

// let obj2 = {
//     name: 'Hanna',
//     test() {
//         setTimeout(function () {
//             console.log('Function', this)
//         }, 100)
//         setTimeout(() => {
//             console.log('inner arrow', this);
//         },100)
//     }
// }
// obj2.test();
//увидим window, и hanna(у стрелки)


///// Переходим в тему call, apply, bind - методы функций

// let obj={name:'Maksim'}
// let obj2={
//     name:'Hanna',
//     sayHi(){
//         console.log(`My name is ${this.name}`)
//     }
// }
// obj2.sayHi() // проблем нет
// //но если нужно обратиться к этому методу от имени obj?
// obj2.sayHi.bind(obj)(); //мы изменили контекст для функции sayHi
// //можем сохранить в переменную
// let bindedFunc = obj2.sayHi.bind(obj);
// bindedFunc();


///////
// let obj={name:'Maksim'}
// let obj2={
//     name:'Hanna',
//     sayHi(a1:any,a2:any,a3:any){
//         console.log(`My name is ${this.name}.My args are - ${a1},${a2},${a3}`)
//     }
// }
// obj2.sayHi.bind(obj,100,500)(1000) //помимо связанного контекста мы связали и аргументы!
//в первых скобках обязательные аргументы для функции
//мы как бы каррируем аргументы, для необходимости

// obj2.sayHi.call(obj,2,5,10,) //придуман для случая когда аргументы передаются поштучно
// obj2.sayHi.apply(obj,[2,5,10]) //придуман для случая когда аргументы передаются в виде массива
//два этих метода были придуманы когда не было деструктуризации и спред и рест операторов
//два эти метода- намного проще bind потому что они вызывают функцию на месте, а не создают новую функцию!

//можно с их помощью одалживать методы!!!:
// @ts-ignore
// function test (a,b,c) {
//     console.log(arguments);
//     console.log([].filter.call(arguments,el=>el>11))
// }
// test(5,10,20)
// в данном примере у псевдомассива аргументов нет вообще методов, поэтому мы
//одолжили метод фильтр у пустого массива и вызвали вместе с аргументс!!!

/////если нужны большие коллекции однотипных данных
///на выходе создавать однотипную структуру
// @ts-ignore
// const constructor = (name, age, city) =>{
//     return {
//         name,age,city,sayHi(){
//             console.log(this.name)}
//     }
// }
// let obj = constructor('Hanna',35,'Bryansk')
// console.log(obj);
// в данном случае созданный объект не имеет никакой связи с создавшей его функцией
// нужно знать - экземпляр какой функции перед нами находится
//если так создать множество объектов через конструктор -
//получится множество одинаковых функций sayHi и потеря памяти!!!
// нет способов поместить sayHi функцию в прототип каждого созданного объекта
// именно для этого создано слово 'new'!!!
//оно меняет this этой функции sayHi
//1.теперь под капотом будет создан новый пустой объект и this указывает на пустой объект который эта функция вернет
//2.объект Prototype который есть у каждой function declaration -
// по дефолту устанавливается в качестве прототипа объекта который создаст эта функция

//что за прототип (обязательно у function declaration. У стрелки нет)
//console.dir(function(){})
//prototype:{constructor: f} - этот прототип будет указан у каждого объекта созданного с помощью ключевого слова new!

//по соглашению программистов функция конструктор именуется с большой буквы
//и вызывается только с ключевым словом new

// function Test(name, age) {
//     //под капотом this={}
//     // @ts-ignore
//     this.name = name;
//     // @ts-ignore
//     this.age = age;
//     //return 10 - игнор;
//     //return [10] - ретурнится объект
// }
//
// Test.prototype.sayHi = function () {
//     alert('HI!!!!')
// }
// // @ts-ignore
// let obj = new Test('Maksim', 38)
// console.log(obj)
//теперь можем узнать какой функцией создан объект
//внутри ф-ции конструктора явный ретурн примитива игнорится
//если явный возврат НЕ примитива - то возвращается НЕ примитив

//-но проблема осталась!! Если в конструктор дописать метод sayHi,
//то он будет идти к каждому создаваемому объекту!
//тогда сделаем так:
// Test.prototype.sayHi = function(){alert ('HI!!!!')}
// этой записью мы записываем функцию sayHi в прототип каждому новому объекту который
//будет создан способом  new Test
//теперь:
// @ts-ignore
// let obj2 = new Test('Hanna',30);
// console.log(obj.sayHi===obj2.sayHi)  // true


/////////////задачи из Learn JavaScript
// let user = {
//     name: "Джон",
//     go: function() { alert(this.name) }
// };
// // @ts-ignore
// (user.go)() //Джон
/////////
// function makeUser() {
//     return {
//         name: "Джон",
//         ref: this
//     };
// };
//
// let user = makeUser();
//
// console.log( user.ref ) //window
////////
// let obj, method;
//
// obj = {
//     go: function() { alert(this); }
// };
//
// obj.go();  //{go: ƒ}
//
// (obj.go)(); //{go: ƒ}
//
// (method = obj.go)();  //window
//
// (obj.go || obj.stop)();  //window
///////
// @ts-ignore
// let calculator = {
//     // @ts-ignore
//         read(a,b) {
//             // @ts-ignore
//             calculator.a=a;
//             // @ts-ignore
//             calculator.b=b;
//         },
//     sum(){
//         // @ts-ignore
//         console.log(this.a+this.b)
//     },
//     mul() {
//         // @ts-ignore
//         console.log(this.a*this.b)
//     }
// };
// calculator.read(10,15);
// console.log(calculator.sum())  //25
// console.log(calculator.mul())   //150
///////
// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//     },
//     down() {
//         this.step--;
//     },
//     showStep: function() { // показывает текущую ступеньку
//         console.log( this.step );
//     }
// };
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();//1
//измените код так чтобы сделать вызовы по цепочке:
// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//        return  ladder
//     },
//     down() {
//         this.step--;
//         return  ladder
//     },
//     showStep: function() { // показывает текущую ступеньку
//         console.log( this.step );
//     }
// };
//
// ladder.up().up().down().showStep(); //1
//////
//Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.
// function Calculator() {
//     // @ts-ignore
//     this.read = function () {
//         // @ts-ignore
//         this.a = +prompt('a?', 0);
//         // @ts-ignore
//         this.b = +prompt('b?', 0);
//     }
//     // @ts-ignore
//     this.sum = function () {
//         return this.a + this.b
//     }
//     // @ts-ignore
//     this.mul= function (){
//         return this.a * this.b
//     }
// }
// // @ts-ignore
// let calc1=new Calculator()
// console.log(calc1)
// calc1.read()
// console.log(calc1)
/////
//Напишите функцию-конструктор Accumulator(startingValue).
//
// Объект, который она создаёт, должен уметь следующее:
//
// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.
// function Accumulator(startingValue) {
//     // @ts-ignore
//     this.value=startingValue
//     // @ts-ignore
//     this.read=function (){
//         // @ts-ignore
//         this.value = this.value + (+prompt('new Value?', 0));
//     }
// }
//
// // @ts-ignore
// let accum1 = new Accumulator(100)
// console.log(accum1)
// console.log(accum1.value)
// accum1.read()
// accum1.read()
// console.log(accum1.value)
////////////////////////////
// Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.
//
//     Каждый вызов должен сохраняться как массив аргументов.

// function spy(func) {
//     // @ts-ignore
//     function wrapper(...args) {
//                 // @ts-ignore
//         wrapper.calls.push(args);
//         // @ts-ignore
//         console.log(this)
//         // @ts-ignore
//         return func.apply(this, arguments)
//     }
//     // @ts-ignore
//     wrapper.calls=[]
//     return wrapper
// }
//
// // @ts-ignore
// function work(a, b) {
//     console.log(a + b); // произвольная функция или метод
// }
//
// // @ts-ignore
// work = spy(work);
//
// work(1, 2); // 3
// work(4, 5); // 9
// // @ts-ignore
// for (let args of work.calls) {
//     console.log('call:' + args.join()); // "call:1,2", "call:4,5"
// }
///////////////////////////////////


// just a plug
const Lesson5 = () => {
    return (
        <div>Lesson 5</div>
    )
}
export default Lesson5;