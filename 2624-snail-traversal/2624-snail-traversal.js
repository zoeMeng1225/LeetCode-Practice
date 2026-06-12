/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    //validation: check if the total elements match the matrix size
    if(rowsCount * colsCount !== this.length){
        return []
    }

    //intialize the 2D array(matrix)
    //create an array of 'rowsCount' empty array
    const result = Array.from({length: rowsCount}, () => new Array(colsCount))

    //Traverse the 1D array and place elements in the correct 2D position
    for(let i = 0; i < this.length; i++){
        //calculate the current column index
        const col = Math.floor(i/rowsCount);

        //calculate the current row index based on the column's direction
        //if column is even, go top to bottom, if odd, go bottom to top
        const isEventCol = col % 2 === 0;
        const row = isEventCol ? i % rowsCount
        : rowsCount - 1 - (i % rowsCount)

        result[row][col] = this[i]
    }

    return result;
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */