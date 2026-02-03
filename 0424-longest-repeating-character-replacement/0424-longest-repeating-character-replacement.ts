function characterReplacement(s: string, k: number): number {
    //map to store the frequency of characters in the current window
    const count:Map<string, number> = new Map();
    let left = 0, maxFrequency = 0, maxLength = 0;

    for(let right = 0; right < s.length; right++){
        const char = s[right];

        //update frequency for the new character
        count.set(char, (count.get(char) || 0) + 1)

        //update the max frequency found in the current window
        maxFrequency = Math.max(maxFrequency, count.get(char)!)

        //current window size is (right -left + 1)
        //if(window -left+1) - maxFrequency > k,we have too many diffrent characters
        while((right -left + 1) - maxFrequency > k){
            //shrink the window from the left
            const leftChar = s[left];
            count.set(leftChar, count.get(leftChar)!-1);
            left++;
            //don't strictly need to decrease maxFrequency here.
            //the result only increase when find a new maxFrequency
        }
        //update the result
        maxLength = Math.max(maxLength, right - left + 1)
    }
    return maxLength
};