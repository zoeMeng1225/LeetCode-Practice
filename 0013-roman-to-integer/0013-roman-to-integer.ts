function romanToInt(s: string): number {
    const map: Record<string, number> = {'I': 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}

    let total = 0;
    for(let i = 0; i < s.length; i++){
        const current = map[s[i]]; //current value;
        const next = map[s[i+1]]; 

        if(next !== undefined && current < next){
            total -= current;
        }else{
            total += current;
        }
    }

    return total;
};