function convert(s: string, numRows: number): string {
    //edge case: if only one row or string is shorter than numRows, return derictly.
    if(numRows === 1 || s.length <= numRows){
        return s;
    }

    //initialize an array of string to represent each row
    const rows: string[] = new Array(numRows).fill('');

    let currentRow = 0;
    let goingDown = false;

    //iterate through each character in the sring
    for(const char of s){
        rows[currentRow] += char;

        //if we hit the top or bottom row, we change the direction
        if(currentRow === 0 || currentRow === numRows -1){
            goingDown = !goingDown
        }

        //move to the next row based on the direction.
        currentRow += goingDown ? 1 : -1;
    }

    //concatenate all rows to form the final Zigzag string
    return rows.join('')


};