// 2)შექმენით ფუნქცია რომლესც გადაეცემა სია, შემდე ფორ ლუპით გადაუარეთ ამ სიას, დააააა მასში ყველა სტრნგი დააპატარავეთ, შემდეგ დააბრუნეთ
function demna2(lstn){
    let random = []
    for (let i = 0; i <= lstn.length-1; i++){
        random.push(lstn[i].toLowerCase())
    }
    return random
}
console.log(demna2(['D']))