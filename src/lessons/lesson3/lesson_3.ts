import axios from "axios";


console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661


// let promise = new Promise((resolve, reject) => {
//
//     //здесь симулируем запрос на сервер
//     setTimeout((response) => {
//
//         if (response.HTTPstatus >= 200 && response.HTTPstatus < 400) {
//             resolve(response.body)
//         } else {
//             reject(response.error)
//         }
//     }, 200, {HTTPstatus: 201, body: {data: 'success'}, error: ''})
//
// })
// //если используем return из  коллбека then, то  СОЗДАЕТСЯ НОВЫЙ ОБЪЕКТ PROMISE В СОСТОЯНИИ RESOLVE СО ЗНАЧЕНИЕМ ИЗ РЕТУРНА!!!!!!!
// //А ЭТО ЗНАЧИТ МОЖЕМ ПРОДОЛЖИТЬ ЦЕПОЧКУ THEN , ПРИМЕНЯЯ К НОВОМУ ОБЪЕКТУ С НОВЫМ ЗНАЧЕНИЕМ!!!
// promise.then((resp) => {
//     console.log(resp)
// return {data: 'privet!'}
// })
//     .then((resp2)=>{
//         console.log(resp2)  //если из коллбека нет явного ретурна то мы получим RESOLVE со значением undefined
//     })
//     .then((resp3)=>{
//         console.log(resp3)   //undefined
//     })

//движок js, в том случае если видит в цепочке undefined и не видит продолжения цепочки - останавливается и цепочка заканчивается.

//
// let userDataPromise = new Promise((resolve, reject) => {
//
//
//     setTimeout((response) => {
//
//         if (response.HTTPstatus >= 200 && response.HTTPstatus < 400) {
//             resolve(response.body.access_token)
//         } else {
//             reject(response.error)
//         }
//     }, 1000, {HTTPstatus: 200, body: {access_token: '^^^^^fhwjehfjwhejeuuuuu'}, error: ''})
//
// })
// userDataPromise.then((token) => {
//     console.log('token', token);
//     //далее идет запрос с использованием токена на http: www.google.com/incubator/courses/2?access_token=token
//     return new Promise((res, rej) => {
//         setTimeout(response => {
//             if (response.HTTPstatus >= 200 && response.HTTPstatus < 400) {
//                 res({body: response.body, token})               //если нужно из цепочки в цепочку передать какое либо значение, то
//                                                 //нужно конфигурировать новый объект, то есть к  body добавлять ьсвойство token
//             } else {
//                 rej(response.error)
//             }
//         }, 1000, {HTTPstatus: 200, body: {courseName: 'Promise', videolink: 'someUrl'}, error: ''})
//     })
// })
//     .then((resp) => {
//         console.log(resp)
//     })
//
//
// console.log(userDataPromise)


// let userDataPromise = new Promise((resolve, reject) => {
//
//
//     setTimeout((response) => {
//
//         if (response.HTTPstatus >= 200 && response.HTTPstatus < 400) {
//             resolve(response.body.access_token)
//         } else {
//             reject(response.error)
//         }
//     }, 1000, {HTTPstatus: 404, body: {}, error: 'Bad request'})
//
// })
// userDataPromise.then((token) => {
//     console.log('token', token);
//     return new Promise((res, rej) => {
//         setTimeout(response => {
//             if (response.HTTPstatus >= 200 && response.HTTPstatus < 400) {
//                 res({body: response.body, token})
//             } else {
//                 rej(response.error)
//             }
//         }, 1000, {HTTPstatus: 200, body: {courseName: 'Promise', videolink: 'someUrl'}, error: ''})
//     })
// }, err=>{
//     console.log('err -', err)   //если получим ошибку типа превышен интервал ожидания то можем сделать повторный запрос...
// // но так как ожидалось другое поведение то уже явным образом не ретурнится!!!!!
//     //делается рекурсивная функция которая запускает все сначала, и устанавливается счетчик наприрмер до 5 ти запросов, дальше обрыв!
//     //или второй вариант - берутся какие либо данные и подставляются в ретурн, только внутри данных можем что то поменять в объекте!!!
//
//     //Это позволит нам подкинуть данные, которые не сломают приложение, а позволят хоть как то завершиться
//     //Пользователь увидит - сорри, запрос не получился, но вместо этого иди вот сюда, что то посмотри пока, и попробуй запросить позже!
//     return {HTTPstatus: 200, body: {courseName: 'INTRO', videolink: 'someUrl'}, error: ''}
// })
//     .then((resp) => {
//         console.log(resp)
//     })
// console.log(userDataPromise)

//(resp)=>{}, (err)=>{} - это обработчики. 1- обработчик resolve, 2-обработчик reject
//err - обрабатывает ошибки возникшие на предыдущем шаге
//если этот обработчик поставить в самом конце всей цепочки, то ошибка пройдет через всю цепочку и будет отслежена в самом конце
// если этот обработчик поставить в каждом шаге - то мы можем отследить возникающие ошибки на каждом шаге, если это нужно..


// let prom = new Promise<void>((resolve, reject) => {
//     resolve();
// });
//
// prom
//     .then(resp1 => {
//         throw 0;
//     }, err => {
//         console.log('err', err);
//     })
//     .then(resp2 => {
//     }, err2 => {
//         console.log('err2', err2) //err2 0
//     })
//     .then(resp3 => {
//         console.log('resp3', resp3) //resp3 undefined
//     })


// let prom = new Promise<void>((resolve, reject) => {
//     reject(500);
// });
//
// prom
//     .then(resp1 => {
//         throw 0;
//     }, err => {
//         console.log('err', err);  //500
//         throw 1000;
//     })
//     .then(resp2 => {
//     }, err2 => {
//         console.log('err2', err2) //1000
//     })
//     .then(resp3 => {
//         console.log('resp3', resp3) //resp3 undefined
//     })


//сделаем то же самое но с одним обработчиком

// let prom = new Promise<void>((resolve, reject) => {
//     reject(500);
// });
//
// prom
//     .then(resp1 => {
//         throw 0;
//     }, )
//     .then(resp2 => {
//     }, )
//     .then(resp3 => {
//         console.log('resp3', resp3)
//     }, err3=>{
//         console.log('err3', err3) //500
//     })


//Для целей тестирования нужно создавать промис сразу в нужном состоянии - resolve, reject
//
// Promise.resolve(1).then(console.log)
// Promise.reject(0).then(console.log, console.log)


// Promise.resolve(10)
//     .then(resp => {
//         console.log('resp', resp)
//         return resp * 2;
//     })
//     .catch(err => {
//         console.log('err', err)
//         return 'YOYOYO!!!!!!MAN'
//     })
//     .then(resp => {
//         console.log('resp', resp)
//         // @ts-ignore
//         return resp * 2;
//     })
//     .catch(err => {
//         console.log('err', err)
//         return 'YOYOYO!!!!!!MAN'
//     })
//     .then(resp => {
//         console.log('resp', resp)
//         throw 0;
//     })
//     .catch(err => {
//         console.log('err', err)
//         return 'YOYOYO!!!!!!MAN'
//     })
//     .then(console.log)


// Promise.resolve(10)
//     .finally(()=>{
//         console.log('finally')
//     })
//     .then(resp => {
//         console.log('resp', resp)
//         return resp * 2;
//     })
//     .finally(()=>{        // смысл finally в том чтобы передать в него выполнение другого какого либо кода, отличного от представленных
//         console.log('finally')
//     })
//     .then(resp => {
//         console.log('resp', resp)
//         return resp * 2;
//     })
//     .catch(err => {
//         console.log('err', err)
//         return 'YOYOYO!!!!!!MAN'
//     })
//     .finally(()=>{
//         console.log('finally')
//     })


// Promise.resolve(10)
//     .finally(() => {           // в данной ситуации finally генерирует ошибку - упакует в новый Промис reject и перезатрет тот промис который ранее был запущен!!!
//         console.log('finally')
//         throw  500;
//     })
//     .then(resp => {
//         console.log('resp', resp)
//         return resp * 2;
//     })
//     .then(resp => {
//         console.log('resp', resp)
//         return resp * 2;
//     })
//     .catch(err => {
//         console.log('err', err)
//         return 'YOYOYO!!!!!!MAN'
//     })

//event loop - цепочка выполняется не по порядку, а в соответствии с очередностью задач в стеке.
//сначала выполняется весь синхронный код, потом асинхронный
//очередь задач - далее микрозадачи(например создание промисов) - далее макрозадачи(например setinterval or settimeout)
// console.log('start')
// Promise.resolve(10).then(console.log).then(console.log)
// Promise.reject(0).catch(console.log).then(console.log)
// console.log('end')
//in result be:
// start
// end
// 10
// 0
// undefined
// undefined


// console.log('start')
// Promise.resolve(10).then(console.log).then(console.log)
// setInterval(console.log, 1000, "YO!")
// Promise.reject(0).catch(console.log).then(console.log)
// console.log('end')


//From Learn Javascript:
// 1.Задержка на промисах

// function delay(ms:number) {
//     return new Promise(resolve=>{
//         setTimeout(resolve,ms,)
//     })
// }
//
// delay(3000).then(() => alert('выполнилось через 3 секунды'));


//Task #5..6

const reqInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
    responseType: "json",
    withCredentials: true,
})

const JSONPlaceholderAPI = {
    async getUserPosts() {
        let promise = reqInstance.get('?userId=5',)
        let response = await promise;
        console.log(response.data)
    },
    async deleteUserPosts() {
        let promise = reqInstance.delete('/5',)
        let response = await promise;
        console.log(response.data)
        alert('Deleted')
    },
    async putUserPosts() {
        let promise = reqInstance.put('/3', {
            "userId": 1,
            "id": 3,
            "title": "YOOOOOOO!!!!!!!!!",
            "body": "PRIVEEEEEEETTTT"
        })
        let response = await promise;
        console.log(response.data)
    },
    async postUserData() {
        let promise = reqInstance.post('', {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident...",
            "body": "...sunt rem eveniet architecto"
        })
        let response = await promise;
        console.log(response.data)
    }
}

JSONPlaceholderAPI.getUserPosts();
JSONPlaceholderAPI.deleteUserPosts();
JSONPlaceholderAPI.putUserPosts();
JSONPlaceholderAPI.postUserData()


// axios.get('https://jsonplaceholder.typicode.com/posts?userId=5',).then(resp => console.log(resp.data))
//
// axios.delete('https://jsonplaceholder.typicode.com/posts/5').then(resp => {
//     console.log(resp.data)
//     alert('Deleted')
// });
//
// axios.put('https://jsonplaceholder.typicode.com/posts/3', {
//     "userId": 1,
//     "id": 3,
//     "title": "YOOOOOOO!!!!!!!!!",
//     "body": "PRIVEEEEEEETTTT"
// }).then(resp => console.log(resp.data))
//
// axios.post('https://jsonplaceholder.typicode.com/posts', {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident...",
//     "body": "...sunt rem eveniet architecto"
// }).then(resp => console.log(resp.data))


//LESSON 12 VIDEO
//const func = async () => {}

// async function f() {    }
// f()  - имеем промис резолв со знач undefined

// async function f() {  throw 500 }
// f() - имеем промис режект

// async function f() {
//     const response = await someRequest() //ожидается промис именно резолв.
// }
// f()

// async function f() {
//     console.log('start function code')
//     console.log('end function code')
// }
// console.log('start')
// f()
// console.log('end')
// start
// start function code
//  end function code
//  end


// async function f() {
//     console.log('start function code')
//     console.log('end function code')
// }
// console.log('start')
// f().then(()=>console.log('Promise'))
// console.log('end')
// start
//  start function code
// end function code
//  end
//  Promise

// async function f() {
//     console.log('start function code')
//     const resp = await new Promise((resolve=>{
//         setTimeout(()=>{
//             resolve('Async response')
//         }, 1000)
//     }))
//     console.log('response ', resp)
//     console.log('end function code')
// }
// console.log('start')
// f().then(()=>console.log('Promise'))
// console.log('end')
// start
// start function code
//  end
// response  Async response
// end function code
// Promise


// async function f() {
//     console.log('start function code')
//     const resp = await new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject('Rejected')   // если имеем режект, то остальной код внутри f
                //пропускается и не выполняется!!!!!!!
//         }, 1000)
//     })
//     console.log('response ', resp)
//     console.log('end function code')
// }
// console.log('start')
// f().then(()=>console.log('Promise'))
// console.log('end')
// start
//  start function code
// end
//  Uncaught (in promise) Rejected


//Как сделать чтобы код проолжил работу? Перехватить ошибку!
// async function f() {
//     console.log('start function code')
//     const resp = await new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject('Rejected')
//         }, 1000)
//     })
//     console.log('response ', resp)
//     console.log('end function code')
// }
// console.log('start')
// f().then(()=>console.log('Promise')).catch(err=>{
//     console.log('error: ', err)})
// console.log('end')
// start
// start function code
// end
// error:  Rejected
//такая конструкция перехвата выглядит некрасиво в том случае если асинхронная
//функция передается для нажатия кнопке...

//предлагается другая конструкция "try-catch":
// async function f() {
//     try {
//         console.log('start function code')
//         const resp = await new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 reject('Rejected')
//             }, 1000)
//         })
//         console.log('response ', resp)
//         console.log('end function code')
//     } catch (err) {
//         console.log('error: ', err)
//     }
// }
// console.log('start')
// f().then(()=>console.log('Promise'))
// console.log('end')
// start
// start function code
// end
// error:  Rejected
// Promise



// async function f() {
//     try {
//         console.log('start function code')
//         const resp = await new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 reject('Rejected')
//             }, 1000)
//         })
//         console.log('response ', resp)
//         console.log('end function code')
//     } catch (err) {
//         console.log('error: ', err) //весь код пропускается и обратно в код из Кэтча мы
//         // уже попасть не сможем!!!
//     }
// }
// console.log('start')
// f();
// console.log('end')
//Важно! Если мы проанализируем ошибку, то вероятно, что просто превышен запрос ожидания и нужно
//попытаться еще раз направить запрос еще раз! (рекурсивно вызвать функцию )
//пользователь не заметит что запросов было множество а не один!!!!!


async function secondRequest () {
    try {
//some request
    } catch (err){
        //error handler
    }
}

async function f() {
    try {
        console.log('start function code')
        const resp = await new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('Rejected')
            }, 1000)
        })
        console.log('response ', resp)
        console.log('end function code')
    } catch (err) {
        secondRequest();
    }
}

console.log('start')
f();
console.log('end')






// just a plug
export default () => {
};