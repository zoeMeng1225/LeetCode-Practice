function hIndex(citations: number[]): number {
    //sort the citations array in descending order;
    //this allow us to easily check the papers with the highest citations first
    citations.sort((a, b) => b - a); //[3,0,6,1,5] -> [6, 5, 3, 1, 0]

    let h = 0;

    //iterate through the sorted array
    //we check if the current paper has more citations than our current h count
    //citation[h] represent the citation count of the (h + 1) -th paper
    //e.g. citation[0](6) > 0, citation[1](5) > 1 ...
    //h is play 2 roles: 1. index, it represent which article we are about read; 2. It is the "H-Index compliance quantity (Count)" that we have currently confirmed.
    while(h < citations.length && citations[h] > h){
        h++;
    }

    //this loop breaks when a peper doesn't meet the condition
    //at this point, h repersent s the maximum possible h-index;
    return h
};