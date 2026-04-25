// 1)
// შექმენი 3 setTimeout, რომლებიც გამოიტანენ:

// "A" 3 წამში
// "B" 1 წამში
// "C" 2 წამში

// setTimeout(() => {
//     console.log('A')
// }, 3000);

// setTimeout(() => {
//     console.log('B')
// }, 1000);

// setTimeout(() => {
//     console.log('C')
// }, 2000);

// 👉 დაადგინე რა იქნება საბოლოო output-ის რიგი (კოდით შეამოწმე)
// B
// C
// A

// 2)
// შექმენი Promise, რომელიც 2 წამში დააბრუნებს "Hello".
// შემდეგ then-ით დაამატე " World" და დაბეჭდე შედეგი.

// let random = new Promise((yes,no) => {
//     setTimeout(() => {
//         yes('Hello')
//     }, 2000);
// })

// random.then(result => {
//     result += ' World'
//     console.log(result)
// })

// 👉 საბოლოო output უნდა იყოს:
// Hello World

// 3)
// შექმენი 2 Promise:

// პირველი აბრუნებს "Eat" 2 წამში
// მეორე აბრუნებს "Sleep" 1 წამში
// let random1 = new Promise((yes,no) => {
//     setTimeout(() => {
//         yes('Eat')
//     }, 2000);
// })

// let random2 = new Promise((yes,no) => {
//     setTimeout(() => {
//         yes('Sleep')
//     }, 1000);
// })

// random1.then(result => {
//     console.log(result)
//     random2.then(result2 => {
//         console.log(result2)
//     })
// })

// 👉 დაალაგე ისე then-ების გამოყენებით, რომ output იყოს:

// Eat  
// Sleep

// (მიუხედავად იმისა, რომ მეორე უფრო სწრაფია)

// 4)
// შექმენი 3 Promise:

// "Task 1" — 3 წამში
// "Task 2" — 2 წამში
// "Task 3" — 1 წამში

// 👉 გამოიყენე Promise.race() და დაბეჭდე რომელი შესრულდა პირველი
// let random = new Promise((yes,no) => {
//     setTimeout(() => {
//         yes('Task 1')
//     }, 3000);
// })

// let random2 = new Promise((yes,no) => {
//     setTimeout(() => {
//         yes('Task 2')
//     }, 2000);
// })

// let random3 = new Promise((yes,no) => {
//     setTimeout(() => {
//         yes('Task 3')
//     }, 1000);
// })

// Promise.race([random,random2,random3]).then(result => {
//     console.log(result)
// })

// 5)
// შექმენი Promise, რომელიც:

// თუ შემთხვევითი რიცხვი < 0.5 → resolve("Success")
// სხვა შემთხვევაში → reject("Error")

// 👉 გამოიყენე then და catch, რომ ორივე შემთხვევა დაბეჭდო

// let random = new Promise((yes,no) => {
//     let uhh = Math.floor(Math.random() * 2)
//     if (uhh < 0.5){
//         yes('Success')
//     } else{
//         no('Error')
//     }
// })

// random
//     .then(result => {
//         console.log(result)
//     })
//     .catch(result => {
//         console.log(result)
//     })