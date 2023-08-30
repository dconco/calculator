class ClassFunction {
    constructor() {
        this.rad_div = '';
        
        // natural logarithm function
        this.e = Math.E;
        this.π = Math.PI;
    }
    
    sin(arg) {
        // convert sin value to Radius
        if (this.rad_div.innerHTML == 'RAD') {
            return Math.sin(arg);
        }
        // convert sin value to Degree
        else {
            return Math.sin(arg * Math.PI/180);
        }
    }
    
    // cosine function 
    cos(arg) {
        // convert cos value to Radius
        if (this.rad_div.innerHTML == 'RAD') {
            return Math.cos(arg);
        }
        // convert cos value to Degree
        else {
            return Math.cos(arg * Math.PI/180);
        }
    }
    
    // tangent function 
    tan(arg) {
        // convert tangent value to Radius
        if (this.rad_div.innerHTML == 'RAD') {
            return Math.tan(arg);
        }
        // convert tangent value to Degree
        else {
            return Math.tan(arg * Math.PI/180);
        }
    }
    
    /* TRIGONOMETRY RATIO VICE-VERSA */
    // arcsine function 
    asin(arg) {
        // convert arcsin value to Radius
        if (this.rad_div.innerHTML == 'RAD') {
            return Math.asin(arg);
        }
        // convert arcsin value to Degree
        else {
            return Math.asin(arg * Math.PI/180);
        }
    }
    
    // arccosine function 
    acos(arg) {
        // convert arcos value to Radius
        if (this.rad_div.innerHTML == 'RAD') {
            return Math.acos(arg);
        }
        // convert arcos value to Degree
        else {
            return Math.acos(arg * Math.PI/180);
        }
    }
    
    // arctangent function 
    atan(arg) {
        // convert arctangent value to Radius
        if (this.rad_div.innerHTML == 'RAD') {
            return Math.atan(arg);
        }
        // convert arctangent value to Degree
        else {
            return Math.atan(arg * Math.PI/180);
        }
    }
    
    // logarithm function
    log(arg) { 
        return Math.log10(arg);
    }
    
    // square root function
    sqrt(arg) {
        return Math.sqrt(arg);
    }
    
    // cube root function
    cbrt(arg) {
        return Math.cbrt(arg);
    }
    
    // exponential function
    exp(arg) {
        return Math.exp(arg);
    }
    
    // normal logarithm
    ln(arg) {
        return eval(`Math.LN${arg}`);
    }
}

export default ClassFunction;