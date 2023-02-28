/* 

compare current array item with item in next highest index
swap if current is greater than next index
shrink range of inner loop by number of total loops - 1

O(n**2)

*/

function bubbleSort(arr) {
    for(let i = 0; i < arr.length; ++i) {
        for(let j = 0; j < arr.length - 1 - i; ++j) {
            if(arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}