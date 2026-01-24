// 1)შექმენით კონსტრუქტორი მანქანაზე, რომელიც შექმენის ობიექტს მოდელით, ფერით, წლით,( ეგენი  უნდა   გადაეცეს არგუმენტად  ) და ერთი default გაუწერეთ რომელიც ყველა შექმნილ ობიექტში იქნება  თავისით,
//  მაგალითად status:  'working', შემდეგ new keyword ით 5 ცვლადში შეინახეთ სხვადასხვა ობიექტები ამ კონსტრუქოტის გამოყენებით
function car(model,color,age){
    this.model = model
    this.color = color
    this.age = age
    this.status = 'working'
    this.info = 'this car functions on hope and determination, so luckly for you it doesnt need fuel'
}
let cars = new car('idk','idk','idk')
let car1 = new car('idk','idk','idk')
let car2 = new car('idk','idk','idk')
let car3 = new car('idk','idk','idk')
let car4 = new car('idk','idk','idk')

// 2)ზემოთა კონსტქურტოს დაუმატეტ  მეთოდი რომელსაც გამოაქვს  ინფო მანქანაზე, 

// 3)ახსენით რა არის nested  objects
// nested object aris obieqtis shignit sheqmnili obieqti (qvemit aris example)
let demna = {
    demna: {
        demna: {
            demna: {
                demna: {
                    demna: {
                        demna: {
                            demna: {
                                demna: {

                                }
                            }
                        }
                    }
                }
            }
        }
    }
}