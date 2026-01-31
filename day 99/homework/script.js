// დავალება 1

// მოცემულია მასივი:

let nums = [1, 2, 3, 4, 5];

// შექმენი ახალი მასივი, სადაც ყველა რიცხვი იქნება გაორმაგებული.

let numss = nums.map(num => num*2)

// დავალება 2

// მოცემულია მასივი:

let names = ["ana", "gio", "luka"];

// შექმენი ახალი მასივი, სადაც ყველა სახელი იქნება დიდი ასოებით.

let namess = names.map(el => el.toUpperCase())
console.log(namess)

// დავალება 3

// მოცემულია მასივი:

let prices = [10, 20, 30];

// შექმენი ახალი მასივი, სადაც თითოეულ ფასს დაემატება 18% გადასახადი.

let pricess = prices.map(el => el + el*1.18) 

// დავალება 4

// მოცემულია მასივი:

let nums1 = [2, 4, 6, 8];

// შექმენი ახალი მასივი, სადაც თითოეული რიცხვი იქნება სტრინგი ასეთი ფორმით:
// "Number: 2", "Number: 4" და ა.შ.

let nums2 = nums1.map(el => `number: ${el}`)
console.log(nums2)

// დავალება 5

// მოცემულია მასივი ობიექტების:

let users = [
  { name: "Ana", age: 15 },
  { name: "Gio", age: 17 },
  { name: "Luka", age: 16 }
];

// შექმენი ახალი მასივი, რომელიც შეიცავს მხოლოდ სახელებს.

let users2 = users.map(el => el['name'])
console.log(users2)