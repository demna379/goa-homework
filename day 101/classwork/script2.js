// 1)კომენტარების სახით ახსენით რას  აკეთებს map & filter, და რაში გამოიყენება თითოეული
// map uvlis sias da cvlis elementebs romelic axal siashi emateba da filteri amatebs mxolod im elementebs romelic true aris filteris shignit

// 2)შექმენით სია, სადაც იქნება ბევრი რიცხვი, შემდეგ გაფილტრეთ ეს სია ისე რომ დარჩეს მხოლოდ 10 ზე მეტი რიცხვები
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let arr1 = arr.filter(el => el > 10)

// 3)შექმენით სახლების სია, სადაც ბევრი სახელი იქნება ჩაშენებული, გაფილტრეთ სია ისე რომ დარჩეს მარტო panidrome ები,
//  ანუ ისეთი სახელები რომლებიც შემოტრიალებულზე იგივე რჩება(მაგალითად ana)
let arr2 = ['name','name','name','name','name','ana']
let arr3 = arr2.filter(el => el == el.split("").reverse().join(''))
console.log(arr3)