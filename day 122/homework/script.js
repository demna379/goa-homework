// დავალება 1 — Book კლასი

// შექმენი Book კლასი:

// properties:

// title
// author
// pages
// isRead (true/false)

// methods:

// read() → isRead = true
// getSummary() → "Title by Author, X pages"

class book{
    constructor(title,author,pages,isRead){
        this.title = title
        this.author = author
        this.pages = pages
        this.isRead = isRead
    }

    read(){
        this.isRead = true
    }

    getSummery(){
        return `title by ${this.author}, ${this.pages} pages`
    }
}



// დავალება 2 — Laptop კლასი

// შექმენი Laptop კლასი:

// properties:

// brand
// ram (GB)
// storage (GB)
// isOn (true/false)

// methods:

// turnOn() → isOn = true
// turnOff() → isOn = false
// upgradeRam(amount) → გაზარდოს ram

class laptop{
    constructor(brand,ram,storage,isOn){
        this.brand = brand
        this.ram = ram
        this.storage = storage
        this.isOn = isOn
    }

    turnon(){
        this.isOn = true
    }

    turnof(){
        this.isOn = false
    }

    upgraderam(amount){
        this.ram += amount
    }
}



// დავალება 3 — Player კლასი (game style)

// შექმენი Player კლასი:

// properties:

// username
// health (0–100)
// level

// methods:

// takeDamage(amount) → health შემცირდეს
// heal(amount) → health გაიზარდოს (max 100)
// levelUp() → level +1

class player{
    constructor(username,health,level){
        this.username = username
        this.health = health
        this.level = level
    }

    takedamage(amount){
        this.health -= amount
    }

    heal(amount){
        this.health += amount
    }

    levelup(){
        this.level += 1
    }
}


// დავალება 4 — ShoppingCart კლასი

// შექმენი ShoppingCart კლასი:

// properties:

// items (array)

// methods:

// addItem(item) → დაამატოს item
// removeItem(item) → წაშალოს item
// getTotalItems() → items.length

// 💡 ბონუსი: თითო item იყოს object { name, price }
class ShoppingCart{
    constructor(item){
        this.item = item
    }

    additem(item2){
        this.item.push(item2)
    }

    removeitem(item2){
        this.item.pop(item2)
    }

    gettotalitems(){
        return this.item.length
    }
}


// დავალება 5 — Timer კლასი

// შექმენი Timer კლასი:

// properties:

// time (seconds)

// methods:

// start() → დაბეჭდოს countdown (console.log)
// stop() → გააჩეროს
// reset() → time = 0

// 💡 მინიშნება: გამოიყენე setInterval

class timer{
    constructor(time){
        this.time = time
    }

    start(){
        this.id = setInterval(()=>{
            this.time -= 1
            console.log(this.time)
        },1000)
    }

    stop(){
        clearInterval(this.id)
    }

    reset(){
        this.time = 0
    }
}

let random = new timer(10)
random.start()