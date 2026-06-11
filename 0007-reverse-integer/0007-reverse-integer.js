/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const sign = x < 0 ? -1 : 1
    let num = Math.abs(x)
    let result = 0;
    const LIMIT = 2** 31;

    while(num > 0){
        result = result * 10+ (num%10);

        if(result * sign > LIMIT - 1 || result * sign < -LIMIT) return 0;
        num = Math.floor(num / 10)
    }

    return result * sign
};