/* ------------------ */
// Given two crystal balls that will break if dropped from high enough
// distance, determine the exact spot in which it will break in the most
// optimized way.

/* 
twoCrystalBalls function takes an array of booleans sorted F->T 

Calculate sqrt of arrap length
Initialize iterator variable to by jump amount
    for reuse in two seperate for loops
Walk through array by sqrt(n) at a time
    break loop on finding first true value in array
        this hold iterator at most recent false value
    worst case sqrt(n) number of steps
If ball breaks search linearly from last point
    worst case sqrt(n) number of steps

O(sqrt(n))
*/
function twoCrystalBalls(breaks) {

    const jmpAmount = Math.floor(Math.sqrt(breaks.length));
    let i = jmpAmount;

    for(; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jmpAmount;

    for(let j = 0; j < jmpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1

}
