console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA


//////////////////////////////////
// console.dir(function () {})
// console.dir(class {})

// class Test {
//     name: string;
//     age: number;
//     // sayHi: Function; - утечки памяти
//     city:string='Minsk'  //можно задать и так, тогда в конструкторе не надо, будет автоматом внутри каждого
//
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//         // this.sayHi = function (){} - утечки памяти
//     }
//
//     sayHi() {           // - теперь этот метод будет доступен в прототипе
//         console.log(this.name)
//     }
//
//     bindFunc = () => {  //движок поместил на уровень объекта  и this стрелочной функции всегда указывает на этот объект
//         console.log(this.name)
//     }                  //мы точно знаем что контекст не будет потерян
//                      //!!!!!!!!еще обнаружено что так же ведет себя function expression
//
// }
//
// let obj = new Test('Maksim', 38)
// console.log(obj)
// obj.city='Moscow'
// console.log(obj.city)
// let obj2 = new Test('Miro', 10)
// console.log(obj2)

// class Test {
//     name: string;
//
//     constructor(name: string) {
//         this.name = name
//     }
//
//     sayHi() {
//         console.log('hi from parent')
//     }
//
//     arrow=()=>{
//         console.log('arrow - hi from parent')
//     }
// }
//
// class Test2 extends Test {
//     age: number;
//
//     constructor(name: string, age: number) {
//         super(name);    //для построения правильного наследования, вызывает конструктор родителя
//         //!!!!!ДО вызова super - у Test2 не существует this!!!!!!!!
//         this.age = age
//     }
//
//     sayBye() {
//     }
//
//     sayHi() {
//         console.log('hi from child')  //переопределили метод!
//         super.sayHi()
//     }
//     arrow=()=>{
//         console.log('Booombbbb - hi from child') //как только переопределили стрелку - родительская исчезнет навсегда
//     }
// }
//
// let obj = new Test2('Maksim', 38)
// console.log(obj)
// obj.sayHi()
// obj.arrow()

// class Test {
//     name: string;
//
//     constructor(name: string) {
//         this.name = name
//     }
//
//     sayHi() {
//         console.log('hi from parent')
//     }
//
//     aroow=()=>{
//         console.log('blabla')}
// }
//
// class Test2 extends Test {
//     age: number;
//
//     constructor(name: string, age: number) {
//         super(name);    //для построения правильного наследования, вызывает конструктор родителя
//         //!!!!!ДО вызова super - у Test2 не существует this!!!!!!!!
//         this.age = age
//     }
//
//     sayBye() {
//     }
// }
//
// class Test3 extends Test2 {
//     city: string;
//
//     constructor(name: string, age: number, city: string) {
//         super(name, age);    //для построения правильного наследования, вызывает конструктор родителя
//         //!!!!!ДО вызова super - у Test2 не существует this!!!!!!!!
//         this.city = city
//     }
//
//     sayBerebere() {
//     }
// }
// let obj = new Test3 ('AHHH', 50, 'Racooncity')
// console.log(obj)

//
// interface Itest {  //это типизация класса
//     name: string
//     sayBye: Function
// }
//
// interface Itest2 {
//     age: number
//     sayBrrr:Function
// }
//
// interface Itest3 extends Itest2 {
//     sayHi: Function
// }
//
// class Test implements Itest,Itest3 {
//     name: string;  //это типизация свойства
//     age: number
//     constructor(name: string, age: number) {
//         this.name = name
//         this.age = age
//     }
//
//     sayHi() {
//         console.log('hi from parent')
//     }
//     sayBye(){}
//
//     sayBrrr() {
//     }
// }

// interface Itest {
//     name: string
//     sayBye: Function
// }
// class Test implements Itest{
//     constructor(public name:string, public age:number) {  //public это возможность тайпскрипта сразу создать свойства с типами
//     }
//
//     sayBye() {
//     }
// }
// let obj=new Test('Yo',20)
// console.log(obj)


// class Test {  # это приватность от движка JS
//     #param = 10;  //# означает приватное свойство или метод, достучаться можно только с помощью другого метода внутри класса
//                   //так они еще и не наследуются!!! но можно переопределить
//     #showPrivate(){
//         console.log(this.#param)
//     }
// }
// let obj = new Test();
// console.log(obj)
// obj.showPrivate()

// class Test {
//     #param = 10;
//
//     #showPrivate(){
//         console.log(this.#param)
//     }
//     showPr (){
//         console.log(this.#param)
//     }
// }
//
// class Test2 extends Test{
//     #param = 15515651651651;
//     showPr (){
//         console.log(this.#param)
//     }
// }
//
// let obj = new Test2();
// console.log(obj)
// obj.showPr()
// Test2 {#showPrivate: ƒ, #param: 10, #param: 15515651651651}
//10
//Test2 {#showPrivate: ƒ, #param: 10, #param: 15515651651651}
//15515651651651
//  в итоге видит два парама и выведет тот, который в том же Тесте где и метод


///Теперь посмотрим как реализована приватность на уровне ТайпСкрипта
// class Test {
//     constructor(private name:string, public age:number) {  //private это возможность тайпскрипта создать приватные типы
//     }                                           //в данном случае приватность работает на уровне компиляции а не визуально
//     sayName(){
//         console.log(this.name)
//         this.sayBrrrrrrr()
//     }
//     private sayBrrrrrrr(){   //тоже не даст использовать извне
//         console.log('Brrrrrrr')
//     }
//     protected sayNooo(){ //этот модификатор нужен если мы все же хотим расширять наш метод
//         console.log('Nooooo') // то есть в наследовании уже даст обратиться, наследуется
//     }
// }
// let obj=new Test('Yo',20)
// console.log(obj)
// //obj.name  // не даст обратиться, не предложит такой вариант даже
// //можно только создать внутри метод который будет работать с этим свойством
// obj.sayName()
//
// class Test2 extends Test {
//     constructor( name:string, public age:number) {
//         super(name, age)
//     }
//     someGetMethod (){
//         this.sayNooo()
//     }
// }
// let obj2=new Test2('RRRRRann',50)
// console.log(obj)
// obj2.sayName()
// obj2.someGetMethod()


// class Test {
//     static param:string = 'Boo' //модификатор статик говорит что это свойство не будет установлено экземпляру класса
//     someGetMethod(){
//         // this здесь указывает на будущий экземпляр класса
//     }
//     static testMethod() {  //здесь виден парам, потому что испся в статическом методе
//         console.log(this.param)  // this здесь указывает на сам класс Тест
//     }
// }
//статик - это нужно для ООП подхода, когда нет разнообразия строк кода, а есть цепочки методов классов
// let obj=new Test()
// console.log(obj)  // нет такого свойства
// console.log(Test.param)
// Test.testMethod()

// console.dir(Test)
// console.dir(Promise)  //такие же статические методы есть и у класса промис
//////////////////////////

///////////Tasks from LearnJavascript:
//Задача 1
// class Animal {
//      name: any;
//
//     constructor(name:any) {
//         this.name = name;
//     }
//
// }
//
// class Rabbit extends Animal {
//      created: number;
//
//     constructor(name:any) {
//         super(name)          //обязательно нужно указать super, чтобы обратиться к родительскому конструктору и взять прототипы
//         this.name = name;
//         this.created = Date.now();
//     }
// }
//
// let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
// alert(rabbit.name);
// console.log(rabbit.created);

//Задача 2 - Улучшенные часы
// Создайте новый класс ExtendedClock, который будет наследоваться от Clock и
// добавьте параметр precision – количество миллисекунд между «тиками».
// Установите значение в 1000 (1 секунда) по умолчанию.
//
//     Сохраните ваш код в файл extended-clock.js
// Не изменяйте класс clock.js. Расширьте его.
// class Clock {
//     constructor({ template }) {
//         this.template = template;
//     }
//
//     render() {
//         let date = new Date();
//
//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;
//
//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;
//
//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;
//
//         let output = this.template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);
//
//         console.log(output);
//     }
//
//     stop() {
//         clearInterval(this.timer);
//     }
//
//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(), 1000);
//     }
// }
//
// class ExtendedClock extends Clock {
//     constructor({ template }, precision) {
//         super({ template },);
//         this.precision = precision
//     }
//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(), this.precision);
//     }
// }
//
// let lowResolutionClock = new ExtendedClock({template: 'h:m:s',},  10000);
//
// lowResolutionClock.start();

//Задача 3 Проверка класса: "instanceof"
// function A() {}
// function B() {}
//
// A.prototype = B.prototype = {};
//
// let a = new A();
//
// console.log( a instanceof B ); // true
//Почему true? Потому что
// Да, действительно, выглядит странно.
//     Но instanceof не учитывает саму функцию при проверке, а только prototype, который проверяется на совпадения в прототипной цепочке.
//     И в данном примере a.__proto__ == B.prototype, так что instanceof возвращает true.
//     Таким образом, по логике instanceof, именно prototype в действительности определяет тип, а не функция-конструктор.


// class CoffeeMachine {
//     _waterAmount = 0;
//
//     set waterAmount(value) {
//         if (value < 0) throw new Error("Отрицательное количество воды");
//         this._waterAmount = value;
//     }
//
//     get waterAmount() {
//         return this._waterAmount;
//     }
//
//     constructor(power) {
//         this._power = power;
//     }
//
// }
//
// // создаём новую кофеварку
// let coffeeMachine = new CoffeeMachine(100);
//
// // устанавливаем количество воды
// // coffeeMachine.waterAmount = -10; // Error: Отрицательное количество воды
// coffeeMachine.waterAmount = 100
// console.log(coffeeMachine.waterAmount)







/////////////////////////////////////
// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.


// just a plug
export default () => {
};