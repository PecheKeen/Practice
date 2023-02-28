//binary search is a divide and conquer algorithm
//because the array length is halved in each loop the time complexity is:
//O(log n)

/* 
search (arr, lo, hi, n)
middle = low + (high - low) / 2
value = arr[middle]
if value = n
    return t
else if value > middle
    low = middle + 1
else
    high = middle

do while low < hi
return false
*/
function binarySort(haystack, needle) {
    let lo = 0;
    let hi = haystack.length;
    
    do {
        const mid = Math.floor(lo + (hi - lo) / 2);
        const value = haystack[mid];
    
        if(value === needle) {
            return true;
        } else if(value > needle) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    
    } while(lo < hi);
    
    return false;
}

