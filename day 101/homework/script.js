// 1)შექმენით სახელების სია, სადაც ბევრი სახელი იქნება ჩაშენებული, შემდეგ გაფილტრეთ ეს სია ისე რომ დარჩეს მარტო ისეთი სახელები რომლებიც იწყება
//  a ზე და მთავრდება a ზე (მაგალითად ana, anamaria, axtona)
let names = ['ana','anamaria','axtona','demna']
let names2 = names.filter((el) => {
    return el[0] == 'a' && el[el.length] == 'a'
})

// 2)შექმენით სახელების და რიცხვების სია, შემდეგ გაფილტრეთ ეს სია ისე რომ დარჩეს მარტო კენტ ინდექსზე მდგომი სტრინგები და კენტი რიცხვები
let nums = [1,2,3,'ana','ragaca']
let nums2 = nums.filter((el,ind) => {
    return (el % 2 != 0 && typeof el == 'string') || (el % 2 != 0)
})

// 3)შექმენით რიცხვების სია, შემდეგ მარტო ლუწ ინდექსზე მდგომი ელემენტები დატოვეთ ფილტრაციით
let numb = [5,6,7,8]
let numb2 = numb.filter((el,ind) => ind % 2 == 0)

// 4)მოიძიეთ არის თუარა იგივე მეთოდები javascript ში (filter, map), რა განსხვავებაა პითონისა და js ის ამ ორ მეთოდს შორის
// python
// map(func,variable)
// filter(func,variable)

// javascript
// variable.map(func)
// variable.filter(func)

// 5)sololearn ბოლო თავის წინა თავამდე