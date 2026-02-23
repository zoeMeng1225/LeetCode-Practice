/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const newWord = s.trim().split(' ');
    if(newWord.length !== pattern.length) return false;

    console.log(newWord)
    const p2w = new Map(); //letter to word 
    const w2p = new Map(); //word to letter;

    for(let i = 0; i < pattern.length; i++){
        const p = pattern[i], w = newWord[i];
        
        if(p2w.has(p) && p2w.get(p) !== w) return false;
        if(w2p.has(w) && w2p.get(w) !== p) return false;

        p2w.set(p, w);
        w2p.set(w, p);
    }


    return true
};