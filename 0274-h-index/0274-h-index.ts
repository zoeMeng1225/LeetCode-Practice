function hIndex(citations: number[]): number {
    //sort the citations array indescending order
    //for check the paper with highest citation
    citations.sort((a, b) => b - a);

    let h = 0;

    //iterate through the sort array
    //citation[h]: the citation count of the (h+ 1)th paper;
    while(h < citations.length && citations[h] > h){
        h++;
        //if the paper has enough citation, increase our h-index
    }

    return h
};