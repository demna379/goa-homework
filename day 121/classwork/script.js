// 📘 თეორიული დავალებები (7)
// 1.

// რა არის Promise? დაწერე შენი სიტყვებით და მოიყვანე მაგალითი რეალური ცხოვრებიდან.
// promise aris obieqti romelic gamoiyeneba backendistvis da abrunebs 3 results.
// pirveli aris fulfilled, meore reject da mesame padding

// magalitad me momces davaleba da me es davaleba sworad shevasrule, es aris resolve. 
// tu me es davaleba ki shevasrule magram arasworad, mashin aris reject
// da me tu kide vaketeb davalebas mashin padding aris. aranairi pasuxi maq jerjerobit


// 2.

// რა განსხვავებაა:

// resolve
// reject

// როდის გამოიყენება თითოეული?
// resolve aris dadebiti shedegi, da gamoiyeneba imistvis rom shevamowmot tu swori informacia daabruna tu ara
// reject ki piriqit


// 3.

// ჩამოთვალე Promise-ის 3 მდგომარეობა და ახსენი:

// pending
// fulfilled
// rejected
// pendings aris roca promise arc resolves and rejecteds absunebs
// fulfilled xdeba mashin roca resolve xdeba
// da rejected roca rame arasworad moxda




// 4.

// რა არის PromiseResult?
// სად ინახება resolve / reject მნიშვნელობა?
// promise result aris promisis shedegi.
// result absunebs dadebits da reject uaryobits (errori savit shedegs)




// 5.

// რა განსხვავებაა:

// .then()
// .catch()
// then igebs shedegs resolvidan da catch rejectidan



// 6.

// რა მოხდება თუ Promise-ში:

// არც resolve გამოიძახე
// არც reject
// panding stateshi iqneba promisi



// 7.

// შეიძლება თუ არა .then()-ის გამოყენება ჩვეულებრივ ფუნქციაზე (რომელიც Promise არ აბრუნებს)?
// რატომ?
// chveulebriv funqciaze ar imushavebs radgan eg property ar ekutvnis chveulebriv funqcias


// 💻 პრაქტიკული დავალებები (7)

// 1. (საწყისი)

// შექმენი Promise, რომელიც:

// 2 წამში resolve-ს აბრუნებს "Hello World"

// 👉 hint: setTimeout

// const random = new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         resolve('hello')
//     },2000)
// })
// random.then(result => {
//     console.log(result)
// })

// 2.

// შექმენი Promise, რომელიც:

// იღებს რიცხვს
// თუ ლუწია → resolve "Even"
// თუ კენტია → reject "Odd"
// let random = new Promise((resolve,reject)=>{
//     let num = Number(window.prompt('enter a number: '))
//     if (num % 2 == 0){
//         resolve('even')
//     } else{
//         reject('odd')
//     }
// })


// 3.

// შექმენი Promise:

// რომელიც ამოწმებს პაროლს
// თუ "1234" → resolve "Access granted"
// სხვა შემთხვევაში → reject "Access denied"

// let random = new Promise((resolve,reject)=>{
//     let num = window.prompt('enter a password: ')
//     if (num == '1234'){
//         resolve('Acces granted')
//     } else{
//         reject('Acces denied')
//     }
// })


// 4.

// შექმენი Promise:

// რომელიც აბრუნებს user ობიექტს
// .then()-ში დაბეჭდე მხოლოდ name
// let random = new Promise((resolve,reject) => {
//     let obj = {
//         name: 'demetre',
//         age: 'gugugaga'
//     }
//     resolve(obj)
// })
// random.then(result => {
//     console.log(result.name)
// })



// 5.

// გააკეთე Promise chain:

// resolve(5)

// შემდეგ:

// გაამრავლე 2-ზე
// დაამატე 10
// დაბეჭდე შედეგი

// 👉 გამოიყენე რამდენიმე .then()
// Promise.resolve(2)
//     .then(result => result * 2 + 10)
//     .then(result => console.log(result))



// 6.

// შექმენი Promise:

// 50% შანსით resolve
// 50% შანსით reject

// 👉 hint: Math.random()
// let random = new Promise((yes,no) => {
//     let stupid_logic = ['yes("lol1")','no("lol2")']
//     eval(stupid_logic[Math.floor(Math.random() * 2)])
// })
// random.then(eh => console.log(eh)).catch(eh2 => console.log(eh2))


// 7. (advanced 🔥)

// შექმენი ფუნქცია:

// function checkUser(age)

// რომელიც აბრუნებს Promise-ს:

// თუ age >= 18 → resolve "Adult"
// თუ age < 18 → reject "Minor"

// 👉 გამოიძახე და დაამატე .then() და .catch()
// function checkUser(age){
//     let random = new Promise((yes,no) => {
//         if (age >= 18){
//             yes('Adult')
//         } else if(age < 18){
//             no('Minor')
//         }
//     })
//     return random.then(result => console.log(result)).catch(result => console.log(result))
// }

// checkUser(18)