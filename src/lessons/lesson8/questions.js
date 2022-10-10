//Task A
// var a = 50
// function f(){
// 	a = 100
// 	let b= 150
// }
// if(true){
// 	a= 175
// 	let c = 200
// 	var d = 300
// 	const e = 400
// }
// f()
// console.log(a) //100
// console.log(b) //error
// console.log(c) //after an error was detected, next rows of code won't have been done.
// console.log(d)
// console.log(e)


//Task B
//
// 	let a = 5
// {
// 	a = 10
// }
// console.log(a)          //10
// function f2() {
// 	console.log (a)
// 	a = 20
// 	var b = 20
// }
// console.log(b)             // Uncaught ReferenceError: b is not defined
// f2()
// console.log(a)
//


//Task C
// {
//     let c = 100
//     var family = 'it-incubator'
//     function f(){
//         console.log(c)
//     }
// }
// let doc = false
// if (!doc){
//     function c(){
//         console.log(family)
//     }
// }
// f()  //100 - because during initializing function declarations (as ours 'f') they're memorizing their
// 		//  outer lexical environment and accordingly a variables declared here.
// c()  // 'it-incubator'
// console.log(family)  // 'it-incubator'
// console.log(c) //function c


//Task 1

// let car1 = new Promise((_, reject) => setTimeout(reject, 2000, 'Car 1 crashed in'));
// let car2 = new Promise(resolve => setTimeout(resolve, 1500, 'Car 2 completed'));
// let car3 = new Promise(resolve => setTimeout(resolve, 3000, 'Car 3 completed'));
//
// Promise.race([car1, car2, car3])
// 	.then(value => {
// 		let result = `${value} the race.`; //Car 2 completed the race.
// 		console.log(result)
// 	})
// 	.catch(err => console.log('Race is cancelled.', err));


//Task 2
// console.log('Start');
// Promise.resolve('Success').then(console.log);
// console.log('End');
// // Start  End   Success


//Task 3
// setCurrentUrl();
// console.log('The current URL is: ' + url);   //The current URL is: http://localhost:3000/
//
// function setCurrentUrl() {
// 	url = window.location.href;
// }

//Task 4
// Какие ключи будут заполнены у pet1
// function Animal(size, type) {
// 	this.type = type || 'Animal';
// 	this.canTalk = false;
// }
// Animal.prototype.speak = function() {
// 	if (this.canTalk) {
// 		console.log('It spoke!');
// 	}
// }
//
// let Pet = function(size, type, name, owner) {
// 	Animal.call(this, size, type);
// 	this.size = size;
// 	this.name = name;
// 	this.owner = owner;
// }
//
// Pet.prototype = Object.create(Animal.prototype);
// let pet1 = new Pet();
// console.dir(pet1)
// //type Animal
// //canTalk=false
// //size ''
// //name ''
// //owner ''
// //[[prototype]]: speak : function()

//Task 5
// let array = [1,2,3,4,4,5,4,4];
// for (let i = 0; i < array.length; i++) {
// 	if (array[i] === 4){
// 		array.splice(i,1);
// 	}
// }
// console.log(array);
// // [1,2,3,4,5,4]; - because method 'splice'  cut out  elements with i-index from an array and mutate array,
// // but cycle 'for'  pass through an array and analyze an element with next i-index, increased on 1.

//Task 5a
// function Monster(){};
// Monster.prototype.growl = () => console.log('Grr!');
//
// console.log(new Monster().growl === new Monster().growl);
// //true - because method growl has hard recorded to prototype of constructor-function Monster, and all
// // instances of Monster have identical methods which are refer to one source function growl

//Task 6
// let first = 'Who';
// let second = 'What';
// try {
// 	try {
// 		throw new Error('Sad trombone');
// 	} catch (err) {
// 		first = 'Why';
// 		throw err;
// 	} finally {
// 		second = 'When';
// 	}
// } catch (err) {
// 	second = 'Where';
// }
//
// console.log(first);
// console.log(second);
//
// //Why Where

//Task 7
// setTimeout(() => console.log(1), 0);
// console.log(2);
// new Promise((resolve, reject) => {
// 	setTimeout(() => reject(console.log(3)), 1000);
// }).catch(() => console.log(4));
// console.log(5);
// //2 5 1 3 4

//Task 8
// let date = new Date(2020, 0o5,10);
// let dateDisplayOptions = {
// 	year: 'numeric',
// 	month: 'long',
// 	day: 'numeric',
// 	era: "long",
// 	//dateStyle: "full",
// };
// let formattedDate = date.toLocaleDateString('en', dateDisplayOptions);
// console.log(typeof formattedDate);
// console.log(formattedDate);
// //

//Task 9
// let objBook = {title: 'JavaScript',};
// Object.preventExtensions(objBook);
// let newObjBook = objBook;
// newObjBook.author = 'Robert';
//
// console.log(objBook);
// console.log(newObjBook);
// //'JavaScript'
// //'JavaScript'
//but in strict mode will be an error

//Task 10
// function getAvaliabilityMessage(item) {
// 	if (getAvailability(item)) {
// 		var msg = 'Username avaliable';
// 	}
// 	return msg;
// }
//
// function getAvailability(name) {
// 	return name === 'Eugene';
// }

// console.log('getAvaliabilityMessage ', getAvaliabilityMessage('newUserName'));

//getAvaliabilityMessage  undefined
// we will see undefined because var msg will have time to initialize and to get up to
// the nearest function declaration


// Task 11
// const entries = [];
// entries.push('a');
// entries.push('b', 'c');
// console.log(entries.pop());
// // c

// Task 12
// const entries = ['a', 1, true];
// console.log(entries instanceof Array);
// // true

// Task 13
// const priority = new Set(['High', 'Low']);
// function logSetElements(key, value, set) {
// 	console.log(`s[${key}] = ${value}`);
// }
// priority.forEach(logSetElements);
//s[High] = High
//s[Low] = Low
// it happens, because call of new Set is creating new iterable structure named 'set'(object type), which
// contains of values only (not 'key:value'). Callback inside method 'forEach' is receiving 3 arguments
// for having a compatibility with Map structure, but in our case 'key' and 'value' is the same!
// Thus, each element of our set will be used twice.

// Task 14
// const ids = new Set([1, '1']);
// console.log(ids.size);
// 2

// Task 15
// const entries = ['a', 'b', 'c'];
// entries.length = 10;
// console.log(entries.length);
//
// //10 - remember that empty values '', isn't iterable!


// Task 16
// const priority = [1, 2, 3];
// const priority100 = Array.from(
// 	priority,
// 	function(p) {
// 		return p*10 + this.adjustment;
// 	},
// 	// context for function
// 	{ adjustment: 100 }
// );
// console.log(priority100);
//[110,120,130]

// Task 17
// const ratings = [1, 2, 3, 4, 5];
// const result = ratings.reduce((start, next, index, array) =>
// 	start * next );
// console.log(result);
// //120


// Task 18
// const priority = [,,];
// for (const item of priority) {
// 	console.log(item);
// }
// // undefined
// // undefined


//
// Task 19
// const entries = ['a', 'b', 'c'];
// const newEntries =
// 	entries.concat(['d', 'e', 'f'], 'g', 'h');
// console.log(newEntries.length);
// //8

// Task 20
// const priority = ['Low', 'Normal', 'High'];
// // … - rest operator
// const [low, ...remaining] = priority;
// console.log(remaining);
// //['Normal', 'High']

// Task 21
// let task = { isDone: false };
// console.log( Object.prototype.isPrototypeOf(task) );
// //true

// Task 22
// let task1 = { id: 1 };
// let task2 = { id: 2, priority: 100 };
// let target = {};
// Object.assign(target, task1, task2);
// console.log(target);
// // {id: 2, priority: 100}

// Task 23
// 'use strict';
// let task = { id: 1 };
// Object.freeze(task);
// task.id = 2;
// task.action = 'Create';
// Object.defineProperty(task, 'priority', {value: 'High'})
// console.log(task);
// // Uncaught TypeError: Cannot assign to read only property 'id' of object '#<Object>'

// Task 24
// let task = {
// 	isDone: true,
// 	estHours: 16
// };
// let anotherTask = task;
// console.log(anotherTask.isDone);
// //true

// Task 25
// class Task {
// 	constructor() {
// 		console.log(new.target.name);
// 	}
// }
// class UrgentTask extends Task {
// }
// let task = new UrgentTask();
// //UrgentTask


// Task 26
// class Task {
// 	constructor(id = 2) {
// 		console.log('Constructing Task');
// 		this.taskId = id;
// 	}
// 	showId() {
// 		console.log(this.taskId);
// 	}
// }
// let task = new Task();
// task.showId();
// //Constructing Task
// //2

// Task 27
// class Task {
// 	constructor() {
// 		console.log('Constructing Task');
// 	}
// }
// class UrgentTask extends Task {
// 	constructor() {
// 		this.action = 'Urgent  Task'
// 		super();
// 		console.log(this.action);
// 	}
// }
// let task = new UrgentTask();
//Script snippet #2:8 Uncaught ReferenceError: Must call super constructor
// in derived class before accessing 'this' or returning from derived constructor


// Task 28
// let Task = function(action) {
// 	this.action = action;
// 	this.done = false;
// 	this.complete = function() {
// 		this.done = true;
// 	}
// };
// let task1 = new Task('create');
// let task2 = new Task('delete');
// console.log(task1.complete === task2.complete);
// //false

// Task 29
// let task1 = { action: 'Create…' };
// let task2 = { action: 'Delete…' };
// let project = new Map();
// project.set(task1, 'High Priority');
// project.set(task2, 'Normal Priority');
// project.clear();
// console.log(project.size);
// 0


// Task 30
// let sum = function() {
// 	let x = 0;
// 	[...arguments].forEach( (arg) => {
// 		x += arg;
// 	});
// 	return x;
// }
// console.log( sum(1, 2, 3) );
// // 6

// Task 31
// let squareFunc = function square(x, y) {
// 	console.log(x * y);
// };
// square(2, 3);
//
// // Uncaught ReferenceError: square is not defined

// Task 32
// function square(x, y) {
// 	console.log( x * y );
// }
// let v = square(2, 3);
// console.log(v);
// // 6
// // undefined

// Task 33
// let person = {
// 	firstName: 'Anna',
// lastName: 'Vasilieva',
// };
// function showFullName() {
// 	console.log(`${this.firstName}
// ${this.lastName}`);
// }
// showFullName.call(person);
// //Anna
// // Vasilieva

// Task 34
// uniqueInteger.count = 0;
// function uniqueInteger() {
// 	return uniqueInteger.count++;
// }
// console.log( uniqueInteger() );
// console.log( uniqueInteger() );
// // 0 1

// Task 35
// var callback = function(x) { console.log(x); };
// var callAClosure = function(closure) {
// 	closure(10);
// };
// callAClosure(callback);
// 10

// Task 36
// var x = 10;
// var capturedClosure = function() {
// 	console.log(x);
// };
// (function() {
// 	x = x * x;
// })();
// capturedClosure();
// // 100


// Task 37
// (function() {
// 'use strict';
// 	document.addEventListener('click', () => console.log(this) );
// })();
//
// //undefined - because function isn't return anything

// Task 38
// let getTaskId = () => {
//     id:
//         return 1
// };
// console.log(getTaskId());
// // 1

// Task 39
// let task = {
// 	id: 123,
// 	done: function() {
// 		return () => console.log(this.id);
// 	}
// };
// let anotherTask = {
// 	id: 987
// };
// task.done().bind( anotherTask )();
// //123 - because this of arrow function is unchangeable

