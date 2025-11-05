// 5)შექმენით თქვენს გემოზე რაიმე პროექტი, ყველა იმ მასალის გამოყენებით რაც იცით, შემდეგ გაკვეთილზე მანახეთ
// random ahh question
let random_ahh_question = window.prompt('do you like balls (y/n)');
if (random_ahh_question == 'y'){
    alert('YOU SUSSY BACKA');
}
else if(random_ahh_question == 'n'){
    alert('signmaa');
}
else{
    alert('wrong input dumbass');
}
// random ahh question

// ---------------------

// random number generator
document.getElementById('submit').onclick = function () {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    document.getElementById('placeholder').textContent = Math.floor(Math.random() * (num2 - num1) + num1);
}
// random number generator

// ----------------------

// calculator
document.getElementById('calc_submit').onclick = function() {
    let calc_num1 = Number(document.getElementById('calc-num1').value);
    let calc_num2 = Number(document.getElementById('calc-num2').value);
    let opp = document.getElementById('opp').value;
    document.getElementById('calc_placeholder').textContent = eval(`calc_num1 ${opp} calc_num2`);
}
// calculator

// ----------------------

// increas-decreas-reset
const increas = document.getElementById('increase');
const reset = document.getElementById('reset');
const decrease = document.getElementById('decrease');
let count = 0;
increas.onclick = function(){
    count ++;
    document.getElementById('counter').textContent = count;
}
reset.onclick = function(){
    count = 0;
    document.getElementById('counter').textContent = count;
}
decrease.onclick = function(){
    count --;
    document.getElementById('counter').textContent = count;
}
// increas-decreas-reset

// ----------------------

// background color changer
const button = document.getElementById('changer');
const random_rgb = document.getElementById('random_rgb');
button.onclick = function(){
    const r = document.getElementById('r').value;
    const g = document.getElementById('g').value;
    const b = document.getElementById('b').value;
    if (r > 255){
        alert('nuh uh. it cant be more than 255');
    }
    if(g > 255){
        alert('same with the color green');
    }
    if(b > 255){
        alert("bruh");
    }
    document.getElementById('background_changer').style.transition = '0.1s';
    document.getElementById('background_changer').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    document.getElementById('background_changer').style.boxShadow = `0 0 30px 10px rgb(${r}, ${g}, ${b})`;
    document.getElementById('random_rgb_h1').textContent = `rgb(${r}, ${g}, ${b})`;
    document.getElementById('random_rgb_h1').style.color = `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
    document.getElementById('background_changer').style.border = 'none';
}
random_rgb.onclick = function(){
    let random_r = Math.floor(Math.random() * 255);
    let random_g = Math.floor(Math.random() * 255);
    let random_b = Math.floor(Math.random() * 255);
    document.getElementById('background_changer').style.transition = '0.2s';
    document.getElementById('background_changer').style.backgroundColor = `rgb(${random_r}, ${random_g}, ${random_b})`;
    document.getElementById('background_changer').style.boxShadow = `0 0 30px 10px rgb(${random_r}, ${random_g}, ${random_b})`;
    document.getElementById('random_rgb_h1').textContent = `rgb(${random_r}, ${random_g}, ${random_b})`;
    document.getElementById('random_rgb_h1').style.color = `rgb(${255 - random_r}, ${255 - random_g}, ${255 - random_b})`;
}
const start = document.getElementById("start");
const stops = document.getElementById("stop");
const resets = document.getElementById('resets');
let random_id;
start.onclick = function() {
    if (!!random_id === false){
        random_id = setInterval(() => {
            let r, g, b;
            r = Math.floor(Math.random() * 255);
            g = Math.floor(Math.random() * 255);
            b = Math.floor(Math.random() * 255);  
            document.getElementById('background_changer').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            document.getElementById('background_changer').style.transition = '0.3s';
            document.getElementById('random_rgb_h1').textContent = `rgb(${r}, ${g}, ${b})`;
            }, 500)
    }
}
stops.onclick = function(){
    clearInterval(random_id);
    random_id = null;
}
resets.onclick = function(){
    document.getElementById('background_changer').style.backgroundColor = `rgb(0,0,0)`;
    document.getElementById('background_changer').style.boxShadow = `none`;
    document.getElementById('random_rgb_h1').textContent = "rgb(0;0;0)";
}   
// background color changer