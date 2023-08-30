import CalcFunction from './extends/Func.js';

class Calculator extends CalcFunction {
    constructor (calc, calc_res, rad_div) {
        super(CalcFunction);
        
        this.calc = calc;
        this.calc_res = calc_res;
        this.rad_div = rad_div;
        this.values = "";
    }
    
    vibrate(num) {
        // To check that is vibration API supported
        if (navigator.vibrate) {
            window.navigator.vibrate(num);
        }
    }

    add_value(args) {
        this.values = args;
        this.calc.value += this.values;
        
        this.simpleEval();
    }
    
    del() {
        let val = this.calc.value;
        let res = val.slice(0, val.length-1);
        this.calc.value = res;
        
        if (val === "" && this.calc.placeholder !== "0") {
            this.calc.placeholder = 0;
            this.vibrate(200);
        } else {
            this.calc.placeholder = "";
        }
    }
    
    Eval() {
        var inputWrite = this.calc;
        var inputRes = this.calc_res;
        
        // define all functions 
        const e = this.e;
        const π = this.π;
        
        const sin = sin => this.sin(sin);
        const cos = cos => this.cos(cos);
        const tan = tan => this.tan(tan);
        
        const asin = asin => this.asin(asin);
        const acos = acos => this.acos(acos);
        const atan = atan => this.atan(atan);
        
        const log = log => this.log(log);
        const sqrt = sqrt => this.sqrt(sqrt);
        const cbrt = cbrt => this.cbrt(cbrt);
        const exp = exp => this.exp(exp);
        const ln = ln => this.ln(ln);
        
        try {
            //"use strict";
            
            let newRes = inputWrite.value.toString();
            while (newRes[0] === '0') {
                newRes = newRes.substr(1, newRes.length);
            }
            
            let res = newRes;
            // match times 
            if (inputWrite.value.match("×")) {
                res = res.replaceAll("×", "*");
            }
            // match divide 
            if (inputWrite.value.match("÷")) {
                res = res.replaceAll("÷", "/")
            }
            // match power 
            if (inputWrite.value.match("^")) {
                res = res.replaceAll("^", "**")
            }
            // match power 2 
            if (inputWrite.value.match("²")) {
                res = res.replaceAll("²", "**2")
            }
            // cube root
            if (inputWrite.value.match("³√")) {
                res = res.replaceAll("³√", "cbrt")
            }
            // Square root
            if (inputWrite.value.match("√")) {
                res = res.replaceAll("√", "sqrt")
            }
            // Mod Calculate 
            if (inputWrite.value.match("%%")) {
                res = res.replaceAll("%%", "$$$")
            }
            // Percentage 
            if (inputWrite.value.match("%")) {
                res = res.replaceAll("%", "/100")
            }
            // Mod Calculate continue 
            if (inputWrite.value.match("$$")) {
                res = res.replaceAll("$$", "%")
            }
            
            // Factor Calculation, ! Sign
            if (inputWrite.value.match("!")) {
                let a = res.replaceAll('!', '$$!');
                let b = a.split('!');
                
                for (let i = 0; i < b.length; i++) {
                    if (b[i].includes('$')) {
                        var c = b[i].split(/[/\/*+-/]/);
                        console.log(c);
                    }
                    //console.log(b[i]);
                }
                
                    /*for (let b = num; b > 0; b--) {
                        s += b + '*';
                    }
                    
                    num2 = (sym)
                        ? num2 + sym + s.substr(0, s.length-1) 
                        : num2 + s.substr(0, s.length-1);
                    s = '';*/
                
                //res = num2 + split[split.length-1];
            }
            
            // evaluate final function 
            inputRes.value = eval(res) == undefined 
                ? "0" 
                : eval(res);
        }
        catch (e) {
            console.error(e);
            
            let msg = "";
            if (e.message == "Invalid or unexpected token") {
                msg = "Unexpected Error";
            } 
            else if (e.message = "Invalid left-hand side expression in postfix operation") {
                msg = "Math Error";
            } else {
                msg = "Syntax Error"
            }
            
            inputRes.value = msg;
        }
    }
    
    simpleEval() {
        var inputWrite = this.calc;
        var inputRes = this.calc_res;
        
        // define all functions 
        const e = this.e;
        const π = this.π;
        
        const sin = sin => this.sin(sin);
        const cos = cos => this.cos(cos);
        const tan = tan => this.tan(tan);
        
        const asin = asin => this.asin(asin);
        const acos = acos => this.acos(acos);
        const atan = atan => this.atan(atan);
        
        const log = log => this.log(log);
        const sqrt = sqrt => this.sqrt(sqrt);
        const cbrt = cbrt => this.cbrt(cbrt);
        const exp = exp => this.exp(exp);
        const ln = ln => this.ln(ln);
    
        try {
            "use strict";
            
            let newRes = inputWrite.value.toString();
            while (newRes[0] === '0') {
                newRes = newRes.substr(1, newRes.length);
            }
            
            let res = newRes;
            res = (inputWrite.value.match("×")) ? res.replaceAll("×", "*") : res;
            res = (inputWrite.value.match("÷")) ? res.replaceAll("÷", "/") : res;
            res = (inputWrite.value.match("^")) ? res.replaceAll("^", "**") : res;
            res = (inputWrite.value.match("²")) ? res.replaceAll("²", "**2") : res;
            res = (inputWrite.value.match("³√")) ? res.replaceAll("³√", "cbrt") : res;
            res = (inputWrite.value.match("√")) ? res.replaceAll("√", "sqrt") : res;
            res = (inputWrite.value.match("%%")) ? res.replaceAll("%%", "$$$") : res;
            res = (inputWrite.value.match("%")) ? res.replaceAll("%", "/100") : res;
            res = (inputWrite.value.match("$$")) ? res.replaceAll("$$", "%") : res;
            
            // Factor Calculation, ! Sign
            if (inputWrite.value.match("!")) {
                let split = res.split('!');
                let num = '';
                let num2 = '';
                let s = '';
                res = "";
                
                for (let i = 0; i < split.length-1; i++) {
                    if (split[i] != 0 && (split[i][0] == "+" || split[i][0] == "*" || split[i][0] == "-" || split[i][0] == "/" || split[i][0] == "%")) 
                    {
                        var sym = split[i].slice(0, 1);
                        var spl = split[i].slice(1, split[i].length);
                    }
                    num = Math.round(eval(spl ? spl : split[i]));
                    for (let b = num; b > 0; b--) {
                        s += b + '*';
                    }
                    
                    num2 = (sym) 
                        ? '('+num2 + sym + s.substr(0, s.length-1)+')'
                        : num2 + s.substr(0, s.length-1);
                    s = '';
                }
                
                res = num2 + split[split.length-1];
            }
            
            inputRes.value = eval(res) == undefined 
                ? "0" 
                : eval(res);
                
            return true;
        } catch (e) {}
    }
}

export default Calculator;