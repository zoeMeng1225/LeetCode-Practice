/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const lastIndexPlus1 = new Map();
    let l = 0, ans = 0;
    for(let r = 0; r < s.length; r++){
        const ch = s[r];
        if(lastIndexPlus1.has(ch)){
            //把左指针跳到重复字符上次位置的下一位（不回退）
            l = Math.max(l, lastIndexPlus1.get(ch));
        }

        ans = Math.max(ans, r - l + 1);
        lastIndexPlus1.set(ch, r+ 1);
    }

    return ans;
};