// 1)შექმენი ცარიელი სია, ფორ ლუპით ჩაამატე მასში რიცხვები 1 დან 15 მდე, შემდეგ ფორ ლუპით წაშალა ებოლო 5 ელემენტი,
//  შემდეგ შექმენი კიდევ ერთი სია 3 ცალი სტრინგით, ეს ორი სია გააერთიანე და შეინახე ახალ ცვლადში, შემდეგ გაერთიანებული
//  სიიდან ამოშალე შუა 2 ან 3 ელემენტი, შემდეგ გადააქციე ეს სია სტრინგად და გამოყავი თითო ელემენტი სფეისით

let random = []
for (let i = 1; i < 15; i++){
    random.push(i)
}
for (let d = 0; d < 5; d++){
    random.pop()
}
let lstn = ['demna','demna2','demna3']
let fuckedUp = random.concat(lstn)
fuckedUp.splice(2,3)
console.log(fuckedUp.join(' '))

// 2)გადახედეთ რესურს https://www.w3schools.com/js/js_array_methods.asp
// ok

// 3)შექმენით სია, ჩაამატეთ 10 ელემენტი, შემდეგ 5 ამოშალეთ

let ranodm2 = []
for (let i = 0; i <= 10; let++){
    ranodm2.push(i)
}

for (let d = 0; d <= 5; d++){
    random2.pop()
}

// 4) შექმენით სია და ყველა მეთოდი აამუშავეთ მაგაზე
let arr = [1, 2, 3, 4, 5];

arr.length;
arr.toString();
arr.at(2);
arr.join("-");
arr.pop();
arr.push(6);
arr.shift();
arr.unshift(0);
delete arr[2];
arr.concat([7, 8, 9]);
arr.copyWithin(1, 2, 4);
arr.flat();
arr.slice(1, 3);
arr.splice(2, 0, "a", "b");
arr.toSpliced(1, 2, "x", "y");

// 5)მოიძიეთ ინფორმაცია javasccript ზე
