//Challenge 1
// Write a recursive function countdown that accepts a positive 
// integer n as an input and logs every number from n (inclusive) 
// to 0 (exclusive) to the console.

function countdown(n) {
  if(n === 0) return;
  console.log(n)
  return countdown(n-1);
}

// countdown(5);
// countdown(10);

//Challenge 2
// Write a recursive function sum that calculates the sum of 
// an array of integers.
function sum(array) {
  let index = array.length
	if(array.length === 0) return 0;
  return array[0] += sum(array.slice(1));
}

 // console.log(sum([1,1,1])); // -> returns 3
 // console.log(sum([1,2,3,4,5,6])); // -> returns 21


//Challenge 3
// Write a recursive function palindrome that accepts a string as 
// an input and returns true if that string is a palindrome 
// (the string is the same forward and backwards). The input string 
// may have punctuation and symbols, but that should not affect 
// whether the string is a palindrome.

function palindrome(string) {
  
  //Strip input of all punctuation and spaces, and change to lower case
  string = string.replace(/[^a-z]/gi, '').toLowerCase();
  //basecase -true
  //return true if string length 1 or 0
  if(string.length <= 1) return true
  //basecase -false
  //compare first and last character for equality
  if(string[0] !== string[string.length-1]) return false
  //recursion case
  //remove first and last letters from string
  return palindrome(string.slice(1,-1))
}

// console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
// console.log(palindrome("llam mall")); //-> true
// console.log(palindrome("jmoney")); //-> false


//Challenge 4
// Write a recursive function isPrime that determines if a 
// number is prime and returns true if it is.

function isPrime(num, div = 3) {
  //Check number for evenness and values less than 2
  if(num === 2) return true;
  if(num < 2 || num % 2 === 0) return false;
  //Test for factors of num, in the case of num = a * b 
  //One factor is always less than or equal to the square root of num.
  //Check if any odd numbers up to the square of div will divide num evenly.
  if(div*div > num) return true;
  if(num % div === 0) return false;
  return isPrime(num, div + 2);
}

// console.log(isPrime(1)); //-> false
// console.log(isPrime(2)); //-> true
// console.log(isPrime(3)); //-> true
// console.log(isPrime(21)); //-> false


//Challenge 5
// Write a recursive function pathFinder that takes an object and 
// array as inputs and returns the value with the given path.

function pathFinder(obj, arr) {
  //basecase -last array key
  if(arr.length === 1) return obj[arr[0]];
  //recursion -
  obj = obj[arr[0]];
  arr = arr.slice(1);
  return pathFinder(obj, arr)
}

// const obj = { first: { second: { third: "finish" } }, second: { third: "wrong" } };
// const arr = ["first", "second", "third"];
// console.log(pathFinder(obj, arr));   //-> "finish"


//Challenge 6
// Write a recursive function flattenRecursively that flattens a 
// nested array. Your function should be able to handle varying 
// levels of nesting.

function flattenRecursively(arr) {
  const outputArray = [];
  
  function recursion(index, arr, outputArray) {
    //Basecase - Array fully parsed
    if(index >= arr.length) return;
    if(Array.isArray(arr[index])) {
    //Recursion - If element is an array, move through each element of subarray
      recursion(0, arr[index], outputArray);
    } else {
    //Push element to outputArray if not an array
      outputArray.push(arr[index]);
    }
		//Recursion - Move to next element
    recursion(index+1, arr, outputArray)
	}
  recursion(0, arr, outputArray);
  return outputArray;
}

// console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
// console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]


//Challenge 7 - Binary Search
// Write a recursive function findInOrderedSet that determines if 
// a number is in an ordered array. Assume the array is sorted. 
// BONUS: Write the function in such a way that fully iterating 
// through the array to check isn't necessary.

function findInOrderedSet(arr, target) {
  //Calculate middle of array
  let middle = Math.floor(arr.length/2);
  //Check middle of array for target
  if(arr[middle] === target) {
    return true;
  }
  //Recursion - If array is still divisible, divide and search again
  if(arr.length > 1) {
    if(arr[middle] > target) {
  	//If middle greater than target repeat search on lower half of array
			return findInOrderedSet(arr.splice(0, middle), target);
    } else {
    //If middle less than target repeat search on upper half of array
			return findInOrderedSet(arr.splice(middle, arr.length), target);
  	}
  }
  return false;
}

// const nums = [1, 4, 6, 7, 9, 17, 45];
// console.log(findInOrderedSet(nums, 1));  //-> true
// console.log(findInOrderedSet(nums, 47));  //-> false


//Challenge 8 - Fibonacci
// There are n stairs. A person standing at the bottom wants to 
// reach the top. The person can climb either 1 or 2 stairs at a 
// time. Write a function countWaysToReachNthStair to count the 
// number of ways the person can reach the top (order does matter). 
// See test cases for examples.

function countWaysToReachNthStair(n) {
  function fib(n) {
		return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }
  return fib(n + 1);
}

// console.log(countWaysToReachNthStair(1)) //-> 1 (only one way to climb 1 stair)
// console.log(countWaysToReachNthStair(2)) //-> 2 ((1, 1), (2))
// console.log(countWaysToReachNthStair(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))


//Challenge 9 - Depth First Search
// Given a collection of distinct integers, write a function 
// getPermutations to return all possible permutations.

// maintain two arrays
// one array of explored elements in the order they are explored
// one array of unexplored elements

// Iterate over elements in unexplored items, moving them from 
// unexplored to explored array. DO NOT MUTATE ARRAYS.
// Pass both into recursive function call

// when unexplored array is empty push explored array to results and return 

// [][1,2,3] -> [1] [2,3] -> [1,2][3] -> [1,2,3][]
// 						  -> [1,3][2] -> [1,3,2][]

function getPermutations(arr) {
  let result = [];
  
  function permute(curr, rest) {
    //base case
    if(rest.length === 0) return result.push(curr);
    //recurse while moving elements from unexplored to explored arrays
    for(let i = 0; i < rest.length; i++) {
      permute([...curr, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)]);
    }  
  }
  
  permute([], arr);
  return result;
}

// console.log(getPermutations([1, 2])) //-> [[1, 2], [2, 1]]
// console.log(getPermutations([1, 2, 3])) 
//-> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]


//Challenge 10
// Write a function getRangeBetween that returns an array of all 
// integers between values x and y, not including x and y.
function getRangeBetween(x, y) {
  const newArr = []
  
  function recurse() {
    if(x < y - 1) {
      x++;
      newArr.push(x);
      recurse(x, y);
    }
  }
  recurse(x, y)
  return newArr
}

// console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
// console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]
