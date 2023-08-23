var inputWrite = document.getElementById('input_write');
var inputRes = document.getElementById('input_res');
var calc = new Calculator(inputWrite, inputRes);

const calcWrite = (e) => calc.add_value(e);
const calcDel = () => calc.del() & calc.simpleEval();

const calcRes = () => calc.Eval();
const calcRes2 = () => calc.simpleEval();

let del_btn = document.getElementById('del');
let del_btn2 = document.getElementById('del2');
var int = '';

/* NORMAL BUTTONS DELETE */
del_btn.onmouseover = function() {
    int = setInterval(() => calcDel(), 300);
}
del_btn.onmouseup = function() {
    clearInterval(int);
}

/* SCIENTIFIC BUTTONS DELETE */
del_btn2.onmouseover = function() {
    int = setInterval(() => calcDel(), 300);
}
del_btn2.onmouseup = function() {
    clearInterval(int);
}

/* ALL BUTTONS SELECTOR */
let btns = document.querySelectorAll("button");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
        inputWrite.scroll(10000, 0)
    })
}

const redirect = (e) =>
    e === 'dave' 
        ? window.location.href = 'https://github.com/dconco'
        : window.location.href = 'https://github.com/dconco';


/** TOGGLE SCIENTIFIC SYMBOLS**/
let sci = document.getElementById('sci');
let norm = document.getElementById('norm');
let left = document.getElementById('left');
let right = document.getElementById('right');
let shift = document.getElementById('shift');

/** FUNCTION TO CHANGE TO SCIENTIFIC SYMBOLS **/
right.onclick = function(e) {
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

/** SHIFT FUNCTION TO CHANGE SOME SCIENTIFIC BUTTONS **/
let shift_click = 0;
shift.onclick = function() {
    /** SELECT SOME SCIENTIFIC BUTTONS **/
    let root = document.getElementById('root');
    let frac = document.getElementById('frac');
    let log = document.getElementById('log');
    let sin = document.getElementById('sin');
    let cos = document.getElementById('cos');
    let tan = document.getElementById('tan');
    
    
    if (shift_click === 0) 
    {
        // style
        sin.style.fontWeight = 'lighter';
        cos.style.fontWeight = 'lighter';
        tan.style.fontWeight = 'lighter';
        sin.style.fontSize = '20px';
        cos.style.fontSize = '20px';
        tan.style.fontSize = '20px';
        
        // change 
        log.innerHTML = '10x';
        sin.innerHTML = 'asin';
        cos.innerHTML = 'acos';
        tan.innerHTML = 'atan';
        root.innerHTML = '³√';
        frac.innerHTML = 'a.b';
        shift_click = 1;
    }
    else 
    {
        // styles 
        sin.style.fontWeight = 'bolder';
        cos.style.fontWeight = 'bolder';
        tan.style.fontWeight = 'bolder';
        sin.style.fontSize = '25px';
        cos.style.fontSize = '25px';
        tan.style.fontSize = '25px';
        
        // change 
        log.innerHTML = 'log';
        sin.innerHTML = 'sin';
        cos.innerHTML = 'cos';
        tan.innerHTML = 'tan';
        root.innerHTML = '√';
        frac.innerHTML = 'a/b';
        shift_click = 0;
    }
}


// function POST() {
//     let info = {
//         name: "Dave",
//         age: 15
//     }
//     
//     axios({
//         method: 'POST',
//         url: 'http://localhost:8080/api/account/register',
//         data: JSON.stringify(info)
//     })
//     .then(function (res) {
//         alert(res.data);
//     })
//     .catch(function(err) {
//         alert(err)
//     });
//}