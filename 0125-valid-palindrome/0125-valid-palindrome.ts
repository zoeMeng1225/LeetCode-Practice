function isPalindrome(s: string): boolean {
    //corner case
   if(s.length === 0) return true;

   //remove the punctuation and spance, converse all alphbets to lower case;
   const makeS = s.toLowerCase().replace(/[^a-z0-9]/g,"");
   
   //make double point
   let i = 0, j = makeS.length - 1;
   while(i <= j){
    if(makeS[i] === makeS[j]){
        i++;
        j--;
    }else{
        return false
    }
   }

   return true;
};