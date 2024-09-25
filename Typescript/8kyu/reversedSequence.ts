export const reverseSeq = (n: number): number[] => {
    const result:number[] = []
    for(let i=n; i>0; i--){
        result.push(i)
    }
    return result;
}