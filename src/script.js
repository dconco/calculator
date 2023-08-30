/** OPENjs.
* -v1.0.0
* SCIENTIFIC CALCULATOR VERSION 1.0.0 DEVELOPED BY DAVE CONCO & SAMUEL OTP.
* DEVELOPED FROM SCRATCH
* CODE MINIFIED FOR SECURITY
* CONTACT US FOR ORIGINAL CODES ON GITHUB
* SEE README.MD FILE
*/
import Calculator from "./calc.js";

var inputWrite = document.getElementById('input_write');
var inputRes = document.getElementById('input_res');
let rad = document.getElementById('rad');
let rad_div = document.getElementById('rad-div');
rad_div.innerHTML = "DEG";

/* FUNCTION TO ADD HEADER LINKS */
document.head.innerHTML += ('<link rel="stylesheet" href="style.css"/>');

inputWrite.addEventListener("input", () => calcRes2());

/* SELECT ALL HTML ELEMENTS */
let buttons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '^', '÷', '×', '-', '+', '/', '.', '%', '!', 'π', 'e', '²', '(', ')'];
for (let i = 0; i < buttons.length; i++) {
    let btns = document.getElementById(`${buttons[i]}`);
    btns.onclick = () => calcWrite(`${buttons[i]}`);
}
document.getElementById('solve').onclick = () => calcRes();
document.getElementById('solve2').onclick = () => calcRes();

var calc = new Calculator(inputWrite, inputRes, rad_div);

// write to input function 
const calcWrite = (e) => {
    calc.add_value(e);
    rad_div.style.display = 'none';
}

// delete function 
const calcDel = () => {
    calc.del() & calc.simpleEval();
    rad_div.style.display = 'none';
}

// result function 
const calcRes = () => {
    calc.Eval();
    calc.vibrate(100);
    if (rad.innerHTML == 'Deg') {
        rad_div.innerHTML = 'RAD';
        rad_div.style.display = 'block';
    } else {
        rad_div.innerHTML = 'DEG';
        rad_div.style.display = 'block';
    }
}
const calcRes2 = () => calc.simpleEval();

let del_btn = document.getElementById('del');
let del_btn2 = document.getElementById('del2');
var int = '';

/* NORMAL BUTTONS DELETE */
del_btn.onclick = () => calcDel();
del_btn2.onclick = () => calcDel();

del_btn.onmouseover = function() {
    int = setInterval(() => calcDel(), 200);
}
del_btn.onmouseup = function() {
    clearInterval(int);
}

/* SCIENTIFIC BUTTONS DELETE */
del_btn2.onmouseover = function() {
    int = setInterval(() => calcDel(), 200);
}
del_btn2.onmouseup = function() {
    clearInterval(int);
}

/* ALL BUTTONS SELECTOR */
let btns = document.querySelectorAll("button");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
        inputWrite.scroll(1000000, 0)
    })
}

/** TOGGLE SCIENTIFIC SYMBOLS**/
let sci = document.getElementById('sci');
let norm = document.getElementById('norm');
let left = document.getElementById('left');
let right = document.getElementById('right');
let shift = document.getElementById('shift');

/** FUNCTION TO CHANGE TO SCIENTIFIC SYMBOLS **/
right.onclick = function(e) {
    calc.vibrate(100);
    
    norm.style.transform = "scale(0.5, 0.5)";
    norm.style.opacity = 0;
    setTimeout(function() {
        norm.style.display = 'none';
        sci.style.display = 'block';
        setTimeout(function() {
            sci.style.transform = 'none';
            sci.style.opacity = 1;
        }, 100);
    }, 300);
}

/** FUNCTION TO CHANGE TO NORMAL SYMBOLS **/
left.onclick = function(e) {
    calc.vibrate(100);
    
    sci.style.transform = "scale(0.5, 0.5)";
    sci.style.opacity = 0;
    setTimeout(function() {
        sci.style.display = 'none';
        norm.style.display = 'block';
        setTimeout(function() {
            norm.style.transform = "none";
            norm.style.opacity = 1;
        }, 100);
    }, 300);
}

// SCIENTIFIC FUNCTIONS EXECUTE
rad.onclick = function() {
    if (rad.innerHTML == 'Rad') {
        rad.innerHTML = 'Deg';
        rad_div.innerHTML = 'RAD';
    } else {
        rad.innerHTML = 'Rad';
        rad_div.innerHTML = 'DEG';
    }
    rad_div.style.display = 'block';
}

/** SHIFT FUNCTION TO CHANGE SOME SCIENTIFIC BUTTONS **/
var shift_div = document.getElementById("shift-div");

/** SELECT SOME SCIENTIFIC BUTTONS **/
var root = document.getElementById('root');
var frac = document.getElementById('frac');
var log1 = document.getElementById('log');
var sin1 = document.getElementById('sin');
var cos1 = document.getElementById('cos');
var tan1 = document.getElementById('tan');
var ln1 = document.getElementById('ln');

/* FUNCTION TO ADD FOOTER */
const p_elem = document.createElement("p");
const footer_elem = document.createElement("footer");
const cont = document.getElementsByClassName('container');

const content = 
(`
    Developed by 
    <span onclick="window.location.href = 'https://github.com/dconco'">Dave Conco</span> & 
    <span onclick="window.location.href = 'https://github.com/dconco'">Samuel Otp.</span>
`);
p_elem.innerHTML = content;
footer_elem.append(p_elem);
cont[0].after(p_elem);

/* SHIFT CLICK FUNCTION */
if (!shift_div.classList.contains("active"))
{
    // log function
    log1.onclick = () => inputWrite.value += "log(";
    // sin function 
    sin1.onclick = () => inputWrite.value += "sin(";
    // cos function 
    cos1.onclick = () => inputWrite.value += "cos(";
    // tan function 
    tan1.onclick = () => inputWrite.value += "tan(";
    // natural logarithm function 
    ln1.onclick = () => inputWrite.value += "ln(";
    // square root function 
    root.onclick = () => inputWrite.value += "√(";
}
    
    
shift.onclick = function() {
    calc.vibrate(100);
    shift_div.classList.toggle("active");
    
    if (shift_div.classList.contains("active")) 
    {
        // change 
        log1.innerHTML = '10<sup>x</sup>';
        sin1.innerHTML = 'sin<sup>-1</sup>';
        cos1.innerHTML = 'cos<sup>-1</sup>';
        tan1.innerHTML = 'tan<sup>-1</sup>';
        ln1.innerHTML = 'e<sup>x</sup>';
        root.innerHTML = '³√';
        // log function
        log1.onclick = () => {
            (inputWrite.value !== "") 
                ? inputWrite.value += "×(10^"
                : inputWrite.value = "10^";
        }
        // asin function 
        sin1.onclick = () => inputWrite.value += "asin(";
        // acos function 
        cos1.onclick = () => inputWrite.value += "acos(";
        // atan function
        tan1.onclick = () => inputWrite.value += "atan(";
        // acube root function
        root.onclick = () => inputWrite.value += "³√(";
        // exponential function
        ln1.onclick = () => inputWrite.value += "exp(";
    }
    else 
    {
        // change 
        log1.innerHTML = 'log';
        sin1.innerHTML = 'sin';
        cos1.innerHTML = 'cos';
        tan1.innerHTML = 'tan';
        ln1.innerHTML = 'ln';
        root.innerHTML = '√';
        
        // log function
        log1.onclick = () => inputWrite.value += "log(";
        // sin function 
        sin1.onclick = () => inputWrite.value += "sin(";
        // cos function 
        cos1.onclick = () => inputWrite.value += "cos(";
        // tan function 
        tan1.onclick = () => inputWrite.value += "tan(";
        // square root function 
        ln1.onclick = () => inputWrite.value += "ln(";
        // square root function 
        root.onclick = () => inputWrite.value += "√(";
    }
}