/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    //something need to do is
    //1. remove the whitespace
    //2. decide the positive or negative
    //3. skip the leading zero,and remove all the non-digital charater after that, if the the first charater of non-digital return 0
    //4.the integer less -21^31 should rounded to -21^31 , greater than 2^31 -1 should rounded 2^31 -1

    //initialize variable 
    let i = 0;
    const len = s.length;
    let result = 0;
    let sign = 1; // for to multiply the result and decide whether negative or positive

    const MAX_INT = Math.pow(2, 31) -1;
    const MIN_INT = -Math.pow(2, 31);
    
    //check the whitespace
    while(i < len && s[i] === " "){
        i++ //if it comes whitespace, keep going.
    }   

    //signedness
    if(i < len && (s[i] === "+" || s[i] === "-")){
        sign = s[i] === "-" ? -1 : 1;
        i++;
    } 


    //conversion
    while(i < len && s[i] >= '0' && s[i] <= '9'){
        const digit = parseInt(s[i], 10);//convert the string to number
        result = result * 10 + digit //arrange them by their digital
       

        //rounding: check out of bound
        //use sign to check if it negative or positive
        if(sign === 1 && result > MAX_INT){
            return MAX_INT
        }
        if(sign === -1 && -result < MIN_INT){
            return MIN_INT
        }
        i++
    }

        return result * sign

};