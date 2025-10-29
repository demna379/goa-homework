const left = document.getElementById('left')
const right = document.getElementById('right')
const down = document.getElementById('down')
const up = document.getElementById('up')
const box = document.getElementById('box')
const lefts = document.getElementById('lefts') // same as below
const ups = document.getElementById('ups') // html tag text content
box.style.transition = '0.1s'
let position = 0
let position_up = 0
left.onclick = function(){
    position -= 50
    box.style.left = position + 'px'
    lefts.textContent = 'position left, right: '+position
}
right.onclick = function(){
    position += 50
    box.style.left = position + 'px'
    lefts.textContent = 'position left, right: '+position
}
up.onclick = function(){
    position_up += 50
    box.style.bottom = position_up + 'px'
    ups.textContent = 'position up, down: '+position_up
}
down.onclick = function(){
    position_up -= 50
    box.style.bottom = position_up + 'px'
    ups.textContent = 'position up, down: '+position_up
}