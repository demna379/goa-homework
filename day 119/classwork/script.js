// 1️⃣
// შექმენი კონსტრუქტორი Car, რომელსაც გადაეცემა:

// brand
// model
// color
function car(brand,model,color){
    this.brand = brand
    this.model = model
    this.color = color
}

// და შექმენი 2 ობიექტი new-ით.
let car1 = new car('ragaca','ragaca','ragaca')
let car2 = new car('ragaca','ragaca','ragaca')

// 2️⃣
// შექმენი კონსტრუქტორი Student, რომელსაც გადაეცემა:

// name
// age
// grade
function student(name,age,grade){
    this.name = name
    this.age = age
    this.grade = grade
}
// და შექმენი 3 სხვადასხვა სტუდენტი.
let student1 = new student('demetre','15','-150')
let student2 = new student('vigaca','50','rato')
let student3 = new student('tornike','idk','-500')  

// 3️⃣
// შექმენი კონსტრუქტორი Phone, რომელსაც გადაეცემა:

// brand
// price
// storage
function phone(brand,price,storage){
    this.brand = brand
    this.price = price
    this.storage = storage
}

// და შექმენი 2 ტელეფონის ობიექტი.
let phone1 = new phone('iphone','1 quantilion','500petabytes')
let phone2 = new phone('nokia','50$','10^10^10^10^10^10^10^10^10^10^10^10^10 megabytes')


// 4️⃣
// შექმენი კონსტრუქტორი Animal, რომელსაც გადაეცემა:

// type
// name
// age
function Animal(type,name,age){
    this.type = type
    this.name = name
    this.age = age
}

// და შექმენი მინიმუმ 2 ცხოველი.
let Animal1 = new Animal('idk','rabbit','500+')
let Animal2 = new Animal('dog','cake','50000000000')


// 5️⃣ (ცოტა tricky)
// შექმენი კონსტრუქტორი User, რომელსაც გადაეცემა:

// username
// email
// isActive
function user(username,email,isActive){
    this.username = username
    this.email = email
    this.isActive = isActive
}

// და შექმენი 2 user — ერთი isActive: true, მეორე false.

let user1 = user('demetre','email',true)
let user2 = user('tornike','idklol',false)