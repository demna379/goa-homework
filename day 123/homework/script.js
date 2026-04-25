// 1)
// შექმენი 2 Promise:

// "Start" — 1 წამში
// "Finish" — 2 წამში

// 👉 გამოიყენე then ისე, რომ output იყოს:

// Start
// Finish

// (დაიწყოს მეორე მხოლოდ პირველის დასრულების შემდეგ)
// let random1 = new Promise((yes,no) => {
//     setTimeout(() => {
//         yes('Start')
//     }, 1000);
// })

// let random2 = new Promise((yes,no) => {
//     setTimeout(() => {
//         yes('Finish')
//     }, 2000);
// })
// random1.then(result => {console.log(result)})
// random2.then(result => {console.log(result)})

// 2)
// შექმენი Promise, რომელიც 2 წამში აბრუნებს რიცხვს 5
// 👉 შემდეგ then-ებში გააკეთე:

// გაამრავლე 2-ზე
// მერე დაამატე 10

// 👉 საბოლოოდ დაბეჭდე შედეგი
// let random1 = new Promise((yes,no) => {
//     setTimeout(() => {
//         yes(5)
//     }, 2000);
// })
// random1.then(result => {
//     result*=2
//     result+=10
//     console.log(result)
// })

// 3)
// შექმენი 3 Promise:

// "One" — 4 წამში
// "Two" — 2 წამში
// "Three" — 3 წამში

// 👉 გამოიყენე Promise.race() და დაბეჭდე შედეგი
// 👉 შემდეგ შეცვალე დროები ისე, რომ სხვა Promise-მა გაიმარჯვოს

// let random1 = new Promise((yes,no) => {
//     setTimeout(() => {
//         yes('One')
//     }, 4000);
// })

// let random2 = new Promise((yes,no) => {
//     setTimeout(() => {
//         yes('Two')
//     }, 2000);
// })

// let random3 = new Promise((yes,no) => {
//     setTimeout(() => {
//         yes('Three')
//     }, 3000);
// })

// Promise.race([random1,random2,random3]).then(result => {console.log(result)})
// 4)
// დაწერე კოდი სადაც:

// setTimeout შიგნით resolve ხდება Promise-ის

// 👉 3 წამში უნდა დაიბეჭდოს "Loaded!"
// let random1 = new Promise((yes,no) => {yes('Loaded!')})
// setTimeout(() => {
//     random1.then(result => {console.log(result)})
// }, 3000);

// 5)
// შექმენი 2 Promise:

// პირველი resolve-ს აკეთებს "Step 1"
// მეორე resolve-ს აკეთებს "Step 2"
let random1 = new Promise((yes,no) => {
    setTimeout(() => {
        yes('Step One')
    }, 1000);
})

let random2 = new Promise((yes,no) => {
    setTimeout(() => {
        yes('Step Two')
    }, 2000);
})
random1.then(result => {console.log(result)})
random2.then(result => {console.log(result)})
// 👉 გააკეთე chaining ისე, რომ:

// Step 1
// Step 2

// დაიბეჭდოს nested then-ების გარეშე (ანუ არ ჩასვა then შიგნით then)