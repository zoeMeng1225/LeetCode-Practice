/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 * 
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 * 
 */


function cloneGraph(node: _Node | null): _Node | null {
	//boundary case
    if(node === null) return null

    //create a map to record the visited nodes(key: original node; value:cloned node)
    const visited = new Map<_Node, _Node>();

    //define DFS recursive function
    const dfs = (curr: _Node): _Node => {
        //base case: if the node has been cloned, return the corresponding cloned node;
        if(visited.has(curr)){
            return visited.get(curr)
        }

        //create a new node(now, neighbors is empty)
        const clone = new _Node(curr.val);
        
        //before recursing the neighbors, first store it to Map
        //in this way, if the neighbor points back to me, I can be found in the base case above.
        visited.set(curr, clone)

        //recursing all neighbors
        for(const neighbor of curr.neighbors){
            clone.neighbors.push(dfs(neighbor))
        }

        return clone;
    }
    
    return dfs(node)
};