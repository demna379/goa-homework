// 1)შექმენით  რიცხვების სია, და მასში დააჯამეთ რიცხვები reduce ის გამოყენებით
let arr = [1,2,3,4,5,6,7]
let arr2 = arr.reduce((el,el2) => el+el2)

// 2)შექმენით სია სადაც იქნება ბევრი სტრინგი, ეს სტრინგეი უნდა იყოს განაწილებული რომ სიტყვა გამოვიდეს

// მაგ: ['n', 'i', 'g', 'g', 'e', 'r']

// და შეემდეგ reduce ით ეს სტრინგები გააერთიანდე

let arr1 = ['n', 'i', 'g', 'g', 'e', 'r']
let arr3 = arr1.reduce((el,el2) => el+el2)
console.log(arr3)

// 3)შექმენით სია რიცხვებით სავსე, და შემდეგ ამ სიის  საშუალო არითმეტიკული გამოითვალეთ 
let arrr = [1,2,3,4,5]
let arrr2 = arrr.reduce((el,el2) => {
    return el+el2
})
let uhh = arrr2/arrr.length

// ჯამი გაყოფილი სიგრძეზე

// 4)ახსენით როგორ მუშაობს map & filter & reduce
// map uvlis yovel elements ragac cvladshi da igebs funqcias ris mixedvitac titoeul elements shecvlis da axal cvladshi sheinaxavs listis saxit
// filter evlis yovel elements ragac cvlaadshi da igebs funqcias romlis mixedvitac sheamowmebs tu mocemuli elementi aris funqciistvis true an false da amatebs axal cvladshi listis saxit
// reduce gadaecema 2 argumenti an meti, es aris pirveli da meore elementi. pirveli elementi iwyeba rame data typis pirveli indexit da meore ki pirveli indexi, da rasac daaretarnebs es funqcia is gaxdeba pirveli argumenti eg daretarnebuli kodi
// da meore argumenti ki xdedba shemdegi indexi

// 5)გაიარეთ sololearn map & filter ამდე