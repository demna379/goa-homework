// 1)შექმენით  სია ელემენტებით  [3, 4, 5], შემდეგ შექმენით კიდევ ერთი სია სადაც ამ წინა სიას დაშლით spread ოპერატორით, მაგრამ დასაწყისში უნდა იყოს დამატებული  1, 2,  ანუ მეორე სიაში უნდა იყოს [1, 2, 3, 4, 5]

// 2)შექმენით ობიეეტი, 4 property ით, name, surname,  age, height, შემდეგ  შექმენით კიდევ  ერთი ობიექტი, სადაც იქნება დაშლილი ეს წინა ობიექტი  spread ოპერატორით, და დამატებული დასაწყისში იქნება eyeColor property

// 3)ახსენით რატომაა ცუდი როცა დაკოპირებისას  ჩვენ ცვლადს ვუტოლებთ სხვა  ცვლადის სახელს და რატომაა უკეთესი რომ გამოვიყენოთ მნიშვნელობის დაკოპირებისთვის spread operator

let lstn = [3,4,5]
let lstn1 = [1,2,...lstn]
console.log(lstn1)
// next

let random = {
    name: "demetre",
    surname: "tavdadebuli",
    age: "64 bit integer",
    height: "negative"
}

let another_random = {
    eyeColor: 'brown',
    ...random
}

// next

// roca cvladshi shevinaxavt sxva cvlads saxelit is inaxavs misamarts da roca meores vcvlit pirvelic icvleba da spread operatorit marto elementebs vakopirebts da ara misamarts