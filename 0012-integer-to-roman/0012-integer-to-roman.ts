function intToRoman(num: number): string {
    //define our currency including the special substractive cases, sored in desending order.
    const values: { value: number, symbol: string }[] = [
        { value: 1000, symbol: "M" },
        { value: 900,  symbol: "CM" },
        { value: 500,  symbol: "D" },
        { value: 400,  symbol: "CD" },
        { value: 100,  symbol: "C" },
        { value: 90,   symbol: "XC" },
        { value: 50,   symbol: "L" },
        { value: 40,   symbol: "XL" },
        { value: 10,   symbol: "X" },
        { value: 9,    symbol: "IX" },
        { value: 5,    symbol: "V" },
        { value: 4,    symbol: "IV" },
        { value: 1,    symbol: "I" }
    ];

    let result = '';

    //iterate through each symbol and value from largest to smallest.
    for(const {value, symbol} of values){
        //while the current number is greater than equal to the value, we use symbol
        while(num >= value){
            result += symbol; //append the symbol to our result
            num -= value; //deduct the value from the total number
        }

        //if num becomes 0, we can stop early
        if(num === 0) break
    }

    return result
};