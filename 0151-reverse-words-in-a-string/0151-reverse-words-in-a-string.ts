function reverseWords(s: string): string {
    //use two pointers

    const result: string[] = [];
    let i = s.length - 1;

    //traverse the string from right to left;
    while(i >= 0){
        //skip all trailing space
        while(i >= 0 && s[i] === ' '){
            i--;
        }

        //break if we have reached the beginning of the string
        if(i < 0) break;

        //found the end of a word, mark it with right
        let right = i;

        //keep moving left to find the start of the word
        while(i >= 0 && s[i] !== ' '){
            i--
        }

        //extract the word and push it to our result array
        result.push(s.substring(i + 1, right + 1));
    }

    return result.join(' ')
};