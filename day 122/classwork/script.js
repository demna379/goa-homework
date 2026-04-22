// დავალება 1 — Car კლასი

// შექმენი Car კლასი:

// properties:

// brand
// model
// year
// speed

// methods:

// drive() → დააბრუნოს "The car is moving"
// increaseSpeed(amount) → გაზარდოს speed
class Car {
    constructor(brand,model,year,speed){
        this.brand = brand
        this.model = model
        this.year = year
        this.speed = speed
    }
    drive(){
        return 'the car is moving'
    }
    increaseSpeed(amount){
        this.speed += amount
        return amount
    }
}


// დავალება 2 — Student კლასი

// შექმენი Student კლასი:

// properties:

// name
// age
// grade

// methods:

// introduce() → "Hi, my name is ..."
// isPassed() → თუ grade >= 51 → true, სხვა შემთხვევაში false
class Student {
    constructor(name,age,grade){
        this.age = age
        this.name = name
        this.grade = grade
    }
    introduce(){
        return `hi my name is ${this.name}, my age is ${this.age} and im in ${this.grade}`
    }
    isPassed(){
        if (this.grade >= 51){
            return true
        } else{
            return false
        }
    }
}

// დავალება 3 — Rectangle კლასი

// შექმენი Rectangle კლასი:

// properties:

// width
// height

// methods:

// getArea() → ფართობი
// getPerimeter() → პერიმეტრი
class Rectangle{
    constructor(width,height){
        this.width = width
        this.height = height   
    }
    getArea(){
        return this.width * this.height
    }
    getPerimeter(){
        return 2*(this.height+this.width)
    }
}


// დავალება 4 — BankAccount კლასი

// შექმენი BankAccount კლასი:

// properties:

// owner
// balance

// methods:

// deposit(amount) → დაამატოს თანხა
// withdraw(amount) → გამოაკლოს თანხა (თუ საკმარისია)
// getBalance() → დააბრუნოს ბალანსი
class BankAccount{
    constructor(owner,balance){
        this.owner = owner
        this.balance = balance
    }
    deposit(amount){
        this.balance += amount
        return this.balance
    }
    widtdraw(amount){
        if (this.balance - amount >= 0){
            this.balance -= amount
            return this.balance
        } else{
            return 'Error: not enough balance'
        }
    }
}

// დავალება 5 — Phone კლასი

// შექმენი Phone კლასი:

// properties:

// brand
// model
// battery (0–100)

// methods:

// charge() → battery = 100
// use(amount) → დააკლოს battery
// თუ battery <= 0 → "Phone is dead"
class phone{
    constructor(brand,model,battery){
        this.brand = brand
        this.model = model
        this.battery = battery
    }
    charge(){
        this.battery = 100
    }
    use(amount){
        if (this.battery - amount > 0){
            this.battery -= amount
        } else{
            return 'phone is dead'
        }
    }
}

// დავალება 6 — Animal კლასი

// შექმენი Animal კლასი:

// properties:

// name
// type
// sound

// methods:

// makeSound() → დააბრუნოს sound
// info() → "This is a [type] named [name]"
class animal{
    constructor(name,type,sound){
        this.name = name
        this.type = type
        this.sound = sound
    }
    makesound(){
        return this.sound
    }
    info(){
        return `this is a ${this.type} named ${this.name}`
    }
}