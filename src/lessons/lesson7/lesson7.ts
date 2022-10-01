import './lesson7_2'

console.log('Lesson 7');

// __Proto__
// https://learn.javascript.ru/prototype-inheritance
// https://habr.com/ru/post/518360/
// https://learn.javascript.ru/native-prototypes

// Prototype
// https://learn.javascript.ru/function-prototype
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype


// https://www.youtube.com/watch?v=aQkgUUmUJy4&t=21s
// https://www.youtube.com/watch?v=b55hiUlhAzI

///////////////tasks from online lesson 15

// console.dir(function () {})
// console.dir( ()=> {})
// console.dir(class {})
//
// console.dir(Function)
// console.dir(Object)

// function f(){
//
// }
//
// console.log(f.prototype)
// console.log(typeof f.prototype)

// console.dir(Array)
// console.log([])

// console.log(Array.prototype)
// //а как получить свойства на экземпляре этого класса Array?
// const arrayPrototypeObj = Object.getPrototypeOf([]) //это современный синтаксис
// console.log(Array.prototype===arrayPrototypeObj)
// // @ts-ignore
// console.log(Array.prototype===[].__proto__) //это старый способ обращения. опасность изменения цепочки прототипов
//
// const obj = {name:'Yo'}
// console.log(obj)
// // @ts-ignore
// console.log(obj.__proto__)


// class Test {
//     constructor(public name: string) {
//
//     }
//
//     getName() {
//         return this.name
//     }
// }
//
// // @ts-ignore
// Test.prototype.sayHi = function () {} //нельзя так явным спосообом сделать!!!
//
// let obj = new Test('Maksssss')
//
// console.dir(Test);
// console.dir(obj);
//
// // @ts-ignore
// obj.__proto__.someFunc = function () {} //такая практика добавления категорически плохая потому что можно запутать цепочку
//
// let obj2 = new Test('BRRRRR')
// console.dir(obj2);
// // @ts-ignore
// console.log(obj.__proto__.__proto__===Object.prototype) //true
// // @ts-ignore
// console.log(Object.prototype.__proto__) //null
////////////////////////////////////

// class Test {
//     constructor(public name: string) {
//     }
//
//     getName() {
//         return this.name
//     }
// }
//
// let obj = new Test('Maksssss')
// console.dir(Test)
// console.log(obj);
// let objPrototype = Object.getPrototypeOf(obj)//присваиваем переменной ссылку на объект
// console.log(objPrototype);
// objPrototype = {f:function () {}} // теперь переприсвоили ссылку на новый объект с новыми свойствами
// console.log(objPrototype);
// console.log(obj) //этот экземпляр класса никак не изменился

// // @ts-ignore
// obj.__proto__= {f:function () {}} //таким образом изменится только прототайп экземпляра класса obj
// console.log(obj)
// let obj2 = new Test ('HRRRRRRRR')
// console.log(obj2) //а другие экземпляры и сам класс не претерпят изменений
//но если:
// @ts-ignore
//Test.prototype={yo:function () {}} // ошибка так как стоит защита readonly
// прототип класса закрыт от модификации, по умолчанию мы перезаписать его не можем, но менять можем!!!
// @ts-ignore
// Test.prototype.yo=function () {} //изменится класс и все экземпляры класса
//
//
// let objPrototype = Object.getPrototypeOf(obj)
// console.log(objPrototype)
// delete objPrototype.getName //именно удаляем и мутируем свойство из прототипа класса  и остальных экземпляров класса
// objPrototype.hhyhyhyhyhyh = 'bzz' //а здесь добавляем совсем новое свойсво
// console.log(obj) //свойство getName пропало из класса и всех экз-ров
// console.log(obj2)
/////////////////////////////////

// class Test {
//     constructor(public name: string) {
//     }
//
//     getName() {
//         return this.name
//     }
// }
//
// class SuperTest extends Test {
//     constructor(name: string) {
//         super(name);
//     }
//     getName() {
//         return ''
//     }
// }
//
// let obj = new SuperTest('Pelle')
// console.log(obj)
//
// // @ts-ignore
// obj.__proto__.getName= 50
// console.log(obj)
// // @ts-ignore
// obj.__proto__.__proto__.getName= 50 //таким образом с помощью прото мы можем идти по цепочке наследуемых экземпляров и менять даже переопределенные меетоды
// console.log(obj)
// //мы можем и новым синтаксисм сделать то же самое но это будет нечитабельно:
// const objParentPrototype = Object.getPrototypeOf(Object.getPrototypeOf(obj))
// objParentPrototype.getName = 100;
// console.log(obj)

//////////////////////
//Реализация кастомного дескриптора

// нужна функция конструктор

// function Test(name:string) {
//     // @ts-ignore
//     this.name=name;
// }
// Test.prototype = {
//     constructor: Test,
//     getName: function () {}
// }
//
// Object.defineProperty(Test, 'prototype', {writable:false})
//
// Test.prototype={f:function () {    }}
//
// // @ts-ignore
// let obj = new Test('BARARARAR')
// console.log(obj)
//Uncaught TypeError: Cannot assign to read only property 'prototype' of function 'function Test(name)
//таким образом реализована защита прототипа похожая на дефолтную защиту тайпскрипта!!!


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


// just a plug
export default () => null;