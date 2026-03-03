function lengthOfLastWord(s: string): number {
    //
    return s.trim().split(/\s+/).pop()!.length;
};