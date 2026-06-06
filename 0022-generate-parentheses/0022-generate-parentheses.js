/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];
    const path = [];

    function dfs(open, close){
        if(path.length === 2 * n){
            res.push(path.join(''));
            return;
        }

        //put (
        if(open < n){
            path.push("(");
            dfs(open + 1, close);
            path.pop();
        }
        
        //put ), only put it while close < open
        if(close < open){
            path.push(")");
            dfs(open, close + 1);
            path.pop();
        }
    }

        dfs(0, 0)
        return res
};