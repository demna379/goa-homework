const left = document.getElementById('left')
const right = document.getElementById('right')
const down = document.getElementById('down')
const up = document.getElementById('up')
const box = document.getElementById('box')
box.style.transition = '0.1s'
let position = 0
let position_up = 0
left.onclick = function(){
    position -= 50
    box.style.left = position + 'px'
}
right.onclick = function(){
    position += 50
    box.style.left = position + 'px'
}
up.onclick = function(){
    position_up += 50
    box.style.bottom = position_up + 'px'
}
down.onclick = function(){
    position_up -= 50
    box.style.bottom = position_up + 'px'
}