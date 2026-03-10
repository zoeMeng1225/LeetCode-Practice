class Solution {
    public void rotate(int[][] matrix) {
        int n = matrix.length;
        if(n <= 1){
            return;
        }
        
        
        mirrorY(matrix, n);
        mirrorYEX(matrix, n);    
    }
    
    
    private void mirrorY(int[][] matrix, int n){
        for(int i = 0; i < n; i++){
            for(int j = 0; j < n / 2; j++){
                swap(matrix, i, j, i, n - 1 - j);
            }
        }
    }
    
    private void mirrorYEX(int[][] matrix, int n){
        for(int i = 0; i < n; i++){
            for(int j = 0; i + j < n -1; j++){
                swap(matrix, i , j , n - 1 - j, n - 1 - i);
            }
        }
    }
    
    private void swap(int[][] matrix, int iRow, int iCol, int jRow, int jCol){
        int tmp = matrix[iRow][iCol];
        matrix[iRow][iCol] = matrix[jRow][jCol];
        matrix[jRow][jCol] = tmp;
    }
}