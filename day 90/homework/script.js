let text = document.getElementById('text')
let value = ''
function addnumber(num){
    value+=num
    text.textContent = value
}
function deletes(){
    value = value.slice(0,-1)
    text.textContent = value 
    
}

document.getElementById('seven').onclick = () =>{
    addnumber('7')
}

document.getElementById('eight').onclick = () =>{
    addnumber('8')
}

document.getElementById('nine').onclick = () =>{
    addnumber('9')
}

document.getElementById('DEL').onclick = () => {
    deletes()
}

document.getElementById('four').onclick = () =>{
    addnumber('4')
}

document.getElementById('six').onclick = () =>{
    addnumber('6')
}

document.getElementById('plus').onclick = () =>{
    addnumber('+')
}

document.getElementById('one').onclick = () =>{
    addnumber('1')
}

document.getElementById('two').onclick = () =>{
    addnumber('2')
}

document.getElementById('three').onclick = () =>{
    addnumber('3')
}

document.getElementById('minus').onclick = () =>{
    addnumber('-')
}
document.getElementById('dot').onclick = () =>{
    addnumber('.')
}

document.getElementById('zero').onclick = () =>{
    addnumber('0')
}

document.getElementById('divide').onclick = () =>{
    addnumber('/')
}

document.getElementById('multiply').onclick = () =>{
    addnumber('*')
}

document.getElementById('RESET').onclick = () =>{
    text.textContent = '0'
    value = ''
}

document.getElementById('equal').onclick = () =>{
    text.textContent = String(eval(`${value}`))
    value = String(eval(`${value}`))
}

document.getElementById('five').onclick = () =>{
    addnumber('5')
}