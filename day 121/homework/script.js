// შექმენი Promise, რომელიც resolve-ს გააკეთებს ტექსტზე "Hello" და then-ში დაბეჭდე შედეგი.
// let ragaca = new Promise((yes,no) => {
//     yes('hello')
// })
// ragaca.then(result => {
//     console.log(result)
// })

// შექმენი Promise, რომელიც reject-ს გააკეთებს ტექსტზე "Error" და catch-ში დაბეჭდე შედეგი.
// let ragaca = new Promise((yes,Fuck_No)=>{
//     Fuck_No('Error')
// })
// ragaca.then(result => {
//     console.log(result)
// })


// შექმენი Promise, რომელიც resolve-ს გააკეთებს რიცხვზე 5 და then-ში გაამრავლე 2-ზე, შემდეგ დაბეჭდე შედეგი.
// let random = new Promise(yes => {
//     yes(5)
// })
// random.then(result => {
//     result *= 2
//     console.log(result)
// })

// შექმენი Promise, რომელიც resolve-ს გააკეთებს ტექსტზე "Start" და then-ში დააბრუნე "Start -> End", შემდეგ დაბეჭდე შედეგი.
// let random = new Promise((yes,no)=>{
//     if ('start' == 'start'){
//         yes('start -> end')
//     }
// })
// random.then(result => {
//     console.log(result)
// })


// შექმენი Promise, რომელიც შემთხვევით (Math.random())
// resolve-ს გააკეთებს "Success"
// ან reject-ს "Fail"
// და then / catch გამოყენებით დაბეჭდე შედეგი.
// let random = new Promise((yes,no) => {
//     let arr = ['yes("Success")','no("Fail")']
//     eval(arr[Math.floor(Math.random() * 2)])
// })
// random.then(result => {
//     console.log(result)
// }).catch(result => {
//     console.log(result)
// })