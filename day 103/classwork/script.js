// შექმენით რიცხვების სია. , filter-ით გაფილტრეთ ისინი კენტი რიცხვებისგან და reduce-ით დაითვალეთ მათი ჯამი.
// let arr = [1,2,3,4,5]
// let arr1 = arr.filter(el => el%2 == 0).reduce((el,el1) => el+el1) 

// შექმენით სტუდენტების ობიექტების სია, {name: "giorgi",  score:70} ბევრი ასეთი ობიექტით.
//  map-ის გამოყენებით დაამატეთ თითოეულს status (score > 50 ? "Pass" : "Fail"). შემდეგ filter-ით დააბრუნეთ მხოლოდ ჩაჭრილები.
// let names = [{names: 'giorgi', score: 70},{names: 'demetre', score: -50}]
// names.map((el) => {
//     return el.score > 50 ? el.status = 'pass' : el.status = 'fail'
// })
// let names2 = names.filter((el) => {
//     return el.status == 'pass'
// })

// while loop-ის გამოყენებით შექმენით სია 1-დან 20-მდე რიცხვებით. შემდეგ reduce-ით იპოვეთ მათი ნამრავლი.
// let arr = []
// let count = 0
// while (count != 20){
//     count++
//     arr.push(count)
// }
// let arr2 = arr.reduce((el,el2) => el*el2)

// შექმენით პროდუქტების სია ობიექტებით, {name: "apple", price:50}. filter-ით დატოვეთ მხოლოდ ის პროდუქტები,
//  რომლის ფასი > 100. შემდეგ map-ით დააბრუნეთ მხოლოდ მათი სახელები.
// let Products = [{name: 'apple', price:50}, {name:'car',price:-150}]
// let Products2 = Products.filter(el => el.price > 100)

// შექმენით კონსტრუქტორი (brand, year). და შექმენითობიექტი car ("bmw", 2005). switch case-ის გამოყენებით year-ის მიხედვით დააბრუნეთ ტექსტი: "Old", "Modern", "New".
// function newyear(brand,year){
//     this.brand = brand
//     this.year = year
// }

// let car1 = new newyear('bmw',2025)

// switch(true){
//     case car1.year <= 2010:
//         console.log('olf i guess idk')
//         break
//     case car1.year <= 2020:
//         console.log('modern')
//         break
//     case car1.year <= 2026:
//         console.log('new')
//         break
// }

// შექმენით სია რიცხვებით. map-ით თითოეულ ელემენტს დაუმატეთ მისი ინდექსი. გამოიყენეთ ternary იმის შესამოწმებლად, არის თუ არა შედეგი 10-ზე მეტი.
// let arr = [1,2,3,4,5]
// let arr1 = arr.map((el, ind) => {
//     return `${el+ind}, ${el+ind > 10 ? 'result is > 10' : 'result is < 10'}`
// })

// დაწერეთ კონსტრუქტორი ფუნქცია User(name, age). შექმენით რამდენიმე ობიექტი შეინახე სიაში და filter-ით დააბრუნეთ მხოლოდ სრულწლოვნები.
// function User(name,age){
//     this.name = name
//     this.age = age
// }
// let arr = [new User('deme',15), new User('gio',-10), new User('aleqsandre',150000000000)]
// let arr1 = arr.filter(el => el.age >= 18)

// შექმენით ორი სია და spread operator-ით გააერთიანეთ. შემდეგ for loop-ით დაბეჭდეთ ყველა ელემენტი.
// let arr1 = [1,2,3,4,5]
// let arr2 = [6,7,8,9,10]
// let uh = [...arr1,...arr2]
// for (let i of uh){
//     console.log(i)
// }

// შექმენით ფუნქცია, რომელიც იღებს ობიექტს და destructuring + spread-ის გამოყენებით ამატებს ახალ property-ს (isActive: true).
// let obj = {name:'demna'}
// function uhh(obj){
//     return {...obj, isActive: true}
// }

// შექმენით სია სიტყვებით. filter-ით დატოვეთ მხოლოდ ის სიტყვები, რომლის სიგრძე > 5. შემდეგ map-ით გადააკეთეთ ისინი დიდ ასოებად.
// let names = ['demetre','tornike','giorgi','ana']
// let names2 = names.filter(el => el.length > 5).map(el => el.toLocaleUpperCase())

// while loop-ის გამოყენებით დაითვალეთ რამდენი რიცხვია სიაში 10-ზე მეტი. გამოიყენეთ if else.
// let arr = [1,15,2,51,1,9]
// let count = 0
// let len = arr.length
// while (len != 0){
//     if (arr[len] > 10){
//         count++
//     }
//     len--
// }

// შექმენით ობიექტების სია (name, role). switch case-ის გამოყენებით თითოეულს დაუმატეთ ხელფასი role-ის მიხედვით (map-ით).
// let arr = [{name: 'tornike', role: 'programmer'},{name:"demetre",role:'plumber'}].map(el => {
//     switch(true){
//         case el.role == 'programmer':
//             return el.salery = '150k'
//         case el.role == 'plumber':
//             return el.salery = '10k'
//     }
// })

// დაწერეთ ფუნქცია, რომელიც იღებს სიას და აბრუნებს ახალ სიას, სადაც მხოლოდ ლუწი ელემენტებია (for loop-ის გამოყენებით).
// let arr = [1,2,3,4,5]
// function ragaca(list){
//     let news = []
//     for (let i of list){
//         if (i % 2 == 0){
//             news.push(i)
//         }
//     }
//     return news
// }

// შექმენით კონსტრუქტორი ფუნქცია Product(name, price). შექმენით რამდენიმე პროდუქტი  შეინახეთ სიაში და reduce-ით დაითვალეთ მათი საერთო ფასი.
// function ragaca(name,price){
//     this.name = name
//     this.price = price
// }

// let arr = [new ragaca('uhh',150),new ragaca('uhhhhh',150)]
// let arr2 = arr.reduce((el,el2) => {
//     return el.price + el2.price
// })

// დაწერეთ ფუნქცია, რომელიც იღებს ობიექტს და ამოწმებს აქვს თუ არა age property (if else). თუ არ აქვს, დაამატეთ spread operator-ით age: 0.
// let object = {name: 'demna'}
// function ragaca(obj){
//     if (obj['age'] === undefined){
//         return {...obj, age:0}
//     }
//     else{
//         return obj
//     }
// }
// შექმენით მომხმარებლების სია (name, isAdmin). filter-ით გამოიტანეთ მხოლოდ ადმინები, შემდეგ map-ით დააბრუნეთ მათი სახელები.
// let object = [{name: "tornike", isAdmin:true},{name:'demetre', isAdmin:false}].filter(el => el.isAdmin == true).map(el => el.name)