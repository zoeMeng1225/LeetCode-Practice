/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    //define a tree node structure using a map for children to allow function or object
    const root = {children: new Map(), hasResult: false}
    return function(...args) {
        let node = root; 

        //traverse the trie layer using arguments
        for(const arg of args){
            if(!node.children.has(arg)){
                node.children.set(arg, {children: new Map(), hasResult: false})
            }

            //move the pointer to next level
            node = node.children.get(arg)
        }
        if(node.hasResult){
            return node.result
        }

        //if it's a new combination of arguments, compute the result using original function
        const result = fn.apply(this, args)

        //cache the newly computed result in current terminal node
        node.hasResult = true
        node.result = result;

        return result
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */