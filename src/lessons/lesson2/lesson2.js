console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

//1 way realized;
/*function sum (num1:number) {
    return function (num2:number) {
        return num1+num2;
    }
}
console.log(sum(3)(6))*/

//2 way realized;
/*const sum = (num1) => (num2) => num1 + num2
console.log(sum(3)(6))*/

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

//1 way realized
/*const makeCounter = () => {
    let count = 0;
    return function () {
        return ++count
    };
}
const counter = makeCounter();
const counter2 = makeCounter();
console.log(counter())
console.log(counter())
console.log(counter2())
console.log(counter())*/


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

//1 way realized
/*function makeCounter2(num) {
    let count = num;
    return {
        increase() {
            return ++count
        },
        decrease() {
            return --count
        },
        reset() {
            count = 0;
        },
        set() {
            count = prompt('задайте число');
        },
    }
}

const newCounter = makeCounter2(10);
console.log(newCounter.set())
console.log(newCounter.increase())
console.log(newCounter.increase())
console.log(newCounter.increase())
console.log(newCounter.increase())
console.log(newCounter.reset())
console.log(newCounter.decrease())
console.log(newCounter.decrease())
console.log(newCounter.decrease())*/


// Каррирование из Learn Javascript
/*
function curry(f) {
    return function (a) {
        return function (b) {
            return f(a, b)
        }
    }
}*/

//используем:
/*function sum1(a, b) {
    return a + b;
}*/

/*
let curriedSum1 = curry(sum1)
console.log(curriedSum1(100)(200))
*/


// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

//1 way realized
/*
function superSum(num) {
    if (num <= 0) return 0;
    if (num === 1) return num;
    let _args = [];
    return function curried(...args) {
        _args = [..._args, ...args];
        if (_args.length >= num) {
            _args.length = num - 1;
            return (num + _args.reduce((acc, el) => acc + el))
        } else {
            return curried;
        }
    }
}

console.log(superSum(5)(1)(1)(1)(435398745)(656456456))
console.log(superSum(0))
console.log(superSum(1))
console.log(superSum(3)(2)(5)(3))
console.log(superSum(3)(2)(5, 3))
console.log(superSum(3)(2, 5, 3))
console.log(superSum(3)(2, 5)(3))
console.log(superSum(3)(2, 5)(3, 9))
*/


// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

//1.Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n
//Сделайте три варианта решения:
//
// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.


//1 way realized С использованием цикла.
/*function sumTo(n) {
    let result = 0;
    for (let i = n; i >= 1; i--) {
        result += i;
    }
    return result
}

console.log(sumTo(5))*/

//2 way realized Через рекурсию
/*let result=0;
function sumTo(n) {
    result +=n;
    n-=1;
        if (n < 1) {
                    return result;
    } else {
        return sumTo(n);
    }
}
console.log(sumTo(5))   //chrome 11424 max.*/

//2 way - variant 'from lesson' Через рекурсию
/*function sumTo(n) {
    if (n === 1) return n;
    return n + sumTo(n - 1)
}

console.log(sumTo(5))*/

//2 way - variant 'from lesson' - ХВОСТОВАЯ РЕКУРСИЯ!
/*function sumTo(n, acc) {
    if (n === 1) return n + acc;
    return sumTo(n - 1, acc + n);
}

console.log(sumTo(5,0))*/

//3 way realized С использованием формулы арифметической прогрессии.
/*function sumTo(n) {
    return (n / 2) * (n + 1)
}

console.log(sumTo(5))*/


//Вычислить факториал
/*function sumTo(n) {
    if (n === 1) return n;
    return n * sumTo(n - 1)
}

console.log(sumTo(5))*/


//Числа Фибоначчи-
//1 way realized:
/*let arr = [];
let i=0;
function fib(n) {
     i+=1;
    if (i<=n) {
        if (i===1){arr.push(0)}
        if (i===2){arr.push(1)}
        if (i>2) {arr.push(arr[i-2]+arr[i-3])};
        return fib(n)}
    else {
        return arr[n-1]}
}

console.log(fib(78))*/

//2 way - variant 'from lesson' Через рекурсию:
/*
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log(fib(77))
*/

// alert( fib(3) ); // 2
// alert( fib(7) ); // 13
// fib(77); // вычисляется очень долго

//3 way - variant 'from lesson' Через цикл for:
/*function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

alert( fib(3) ); // 2
alert( fib(7) ); // 13
alert( fib(77) ); // 5527939700884757*/


//Вывод односвязного списка
//Напишите функцию printList(list), которая выводит элементы списка по одному.

//Сделайте два варианта решения: используя цикл и через рекурсию.


/*let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};*/

//цикл
/*function printList(list) {

    let tmp = list
    while (tmp) {
        alert(tmp.value);
        tmp = tmp.next;
    }
 }
(printList(list))*/

//recursion

//1 way realized
/*function printList(list) {
    if (list) {
        alert(list.value)
        list = list.next
        printList(list)
    }
}

(printList(list))*/


//2 way realized
/*function printList(list) {
    debugger
    alert(list.value)
    if (list.next) {
        printList(list.next)
    }
}

(printList(list))*/


//Вывод односвязного списка в обратном порядке
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

//цикл
/*function printReverseList(list) {

    let arr = [];
    let tmp = list
    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        alert(arr[i])
    }

}

printReverseList(list)*/

//recursion

/*function printReverseList(list) {
    if (list.next) {
        printReverseList(list.next)
    }
    alert(list.value)
}

printReverseList(list)*/

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

var arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
//console.log(arr.flat(Infinity))
let newArr =[];
function flat (arr) {
   arr.map((elem)=>Array.isArray(elem)? flat(elem): newArr.push(elem))
return newArr;
}
console.log(flat(arr))


// just a plug
export default () => {
};














