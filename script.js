let btn = document.querySelector('#second');
let btn2 = document.querySelector('#first');
let num = document.querySelector('#num');
var x = 0;
var y = 45;
let n = 0;
let nr =360*999;


function rotate() {
    x += 45;
    n++;
    num.textContent = n;
    btn.style.transform = `rotate(${x}deg)`;
    num.style.transform = `rotate(${0}deg)`;

    function rotate2() {
        y += 45;
        btn2.style.transform = `rotate(${y}deg)`;
    }
    rotate2()
}



