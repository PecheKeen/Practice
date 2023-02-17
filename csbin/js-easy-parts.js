/* Challenge 1
Replace the blank underscores inside the console logs with the data type 
(i.e. 'string') you think each value will be. (Leave the quotes)
Ex.
var myStr = "hello"
  console.log(typeof myStr === "string") //=> true */
//Uncomment the lines below to test your code
// console.log(typeof 7.0 === "_______")
// console.log(typeof 22 === "_______")
// console.log(typeof true === "_______")

var myVar;
// console.log(typeof myVar === "hello")

//myVar = //add your name here
// console.log(typeof myVar === "_______")

//Comment them back out with two forward slashes at the beginning once you have finished


/* Challenge 2
Create a functon buildSentence that takes three words (strings) and adds them together 
and console.logs the whole sentence (string) complete with capitalization and punctuation. */

function buildSentence(word1, word2, word3) {
  word1 = word1.slice(0, 1).toUpperCase() + word1.slice(1);
  return `${word1} ${word2} ${word3}.`
}

// console.log(buildSentence("coding", "is", "awesome")) //=> "Coding is awesome."
// console.log(buildSentence("we're", "number", "1")) //=> "We're number 1."


/* Challenge 3
Create a function lastLetter that takes a word (string) and console.logs the last character/letter of that word.
Hint: Remember that each character/letter in a string has an index position that you can access with brackets: [] */


function lastLetter(word) {
  console.log(word.slice(-1))
  return word.slice(-1)
}

//Uncomment the lines below to test your code
// lastLetter("hello") //=> "o"
// lastLetter("goodbye!") //=> "!"
// lastLetter("ZeltoiD") //=> "D"


/* Challenge 4
Create a function buildGreeting that takes a time (integer) and a name (string) and print a greeting 
based on the following rules:
    If time is between 0 (inclusive) and 11 (inclusive): "Good Morning, <name>!
    If time is between 12 (inclusive) and 16 (inclusive): "Good Afternoon, <name>!
    If time is between 17 (inclusive) and 23 (inclusive): "Good Evening, <name>!
    If time is anything else: "That's not a real time, <name>. Maybe you need some sleep! */


function buildGreeting(time, name) {
  //your code goes here...
  if(time >= 0 && time < 12) return `Good Morning, ${name}!`;
  if(time < 17) return `Good Afternoon, ${name}!`;
	if(time < 24) return `Good Evening, ${name}!`;
  
  return `That's not a real time, ${name}!`
}


// console.log(buildGreeting(8, "Maggie")) //=> "Good Morning, Maggie!"
// console.log(buildGreeting(12, "John")) //=> "Good Afternoon, John!"
// console.log(buildGreeting(22, "Stacey")) //=> "Good Evening, Stacey!"
// console.log(buildGreeting(31, "Derrick")) //=> "That's not a real time, Derrick. Maybe you need some sleep!"


/* Challenge 5
indexOf is a function that you can call on a string (string1) and accepts another string (string2) as an argument.
It searches through string1 from left to right checking each character to see if it can find string2.
If it finds string2 it returns the index position of the FIRST character that matches string2. If it cannot find string2 
it returns negative one: -1.
Enter the index position you think indexOf will return for each below. */
function indexOf(str1, str2) {
  return str1.indexOf(str2)
}

// console.log( indexOf("CodeSmith", "o") === 1)
// console.log( indexOf("hello", "ll") === 2)
// console.log( indexOf("zebra", "z") === 0)
// console.log( indexOf("banana", "B") === -1)


/* Challenge 6
Create a function letterExists that takes a word (string) 
and a character (string), and console.logs whether 
that letter can be found inside that word. */


function letterExists(word, letter) {
  console.log(word.includes(letter))
  return word.includes(letter);

}

// letterExists("superman", "e") //=> true
// letterExists("starship", "S") //=> false
// letterExists("th1s", "1") //=> true
// letterExists("he!lo", "!") //=> true


/* Challenge 7
Create a function isPrime that console.logs a boolean 
indicating if `number` is prime or not. */


function isPrime(num) {
  if(num === 2) return true;
	if(num < 2 || num % 2 === 0) return false;
  
  for(let div = 3; div < num/2; div++) {
    if(num % div === 0) return false;
  }
	
  return true;
}

// console.log(isPrime(-7)); // => false
// console.log(isPrime(2)); // => true
// console.log(isPrime(11)); // => true
// console.log(isPrime(15)); // => false


/* Challenge 8
Create a function range that console.logs all numbers between 
'start' and 'end' in sequential order. */


function range(start, end) {
  if(start < end) {
    while (start <= end) {
      console.log(start);
      start++
    }
  } else {
    while (start >= end) {
      console.log(start);
      start--;
    }
  }

}

//Uncomment the lines below to test your code
// range(1,4) //=> 1, 2, 3, 4
// range(4,2) //=>


/* Challenge 9
Create a function myIndexOf that takes an array and an 
element and console.logs the index of the element in the 
array, or -1 if it doesn't exist.
Assume the `ele` will be a primitive data type (no arrays or objects).
DO NOT USE THE BUILT-IN `indexOf` METHOD IN YOUR SOLUTION! */


function myIndexOf(array, ele){
  if(array.includes(ele)) {
    for(let i = 0; i < array.length; i++) {
      if(array[i] === ele) return i;
    }
  }
  return -1
}

// console.log(myIndexOf([1, 2, 3, 4, 5], 5)) //=> 4
// console.log(myIndexOf(["a", "b", "c"], "a")) //=> 0
// console.log(myIndexOf(["a", "b", "c"], "d")) //=> -1


/* Challenge 10
Create a function unique that console.logs an array where all 
the duplicates of the input array have been removed; 
in other words, every element remaining is unique. */

function unique(array) {
  // return [...new Set(array)]
  const newArr = [];
  for(let i = 0; i < array.length; i++) {
    if(!newArr.includes(array[i])) {
      newArr.push(array[i]);
    }
  }
  return newArr
}
//create new array
//check if each element is in array
	//add if not
//return new array

// console.log(unique([1, 1, 2, 3, 3]))// => [1, 2, 3]
// console.log(unique(["a", "a", "c", "aa", "b", "b"]))// => ["a", "c", "aa", "b"]


/* Challenge 11
Create a function longestWord that that retuns the longest word of a sentence.
If there are ties, the function should return the later word. */

function longestWord(sentence) {
  const words = sentence.split(' ');
  let longest = ''
  for(let i = 0; i < words.length; i++) {
    if(longest.length <= words[i].length) {
      longest = words[i];
    }
  }
  return longest;
}

//Uncomment the lines below to test your function:

// console.log(longestWord('my JavaScript is exceptional')); // => 'exceptional'
// console.log(longestWord('hate having hungry hippos')); // => 'hippos'
// console.log(longestWord('JavaScript')); // => 'JavaScript'
// console.log(longestWord('')); // => ''


/* Challenge 12
Create a function disemvowel that takes in a string and 
returns a string with all vowels removed. */

function disemvowel(string) {
  const dict = {
    a: true, A: true,
    e: true, E: true,
    i: true, I: true,
    o: true, O: true,
    u: true, U: true
  }
  
  let newStr = ''
  for(let i = 0; i < string.length; i++) {
    if(!(string[i] in dict)) {
      newStr += string[i]
    }
  }
  return newStr
}


//Uncomment the lines below to test your function:

// console.log(disemvowel('CodeSmith')); // => 'CdSmth'
// console.log(disemvowel('BANANA')); // => 'BNN'
// console.log(disemvowel('hello world')); // => 'hll wrld'


/* Challenge 13
Create a function divisibleByFivePairSum that takes an array of numbers.
It should return an array of all the pairs of indices whose sum is a multiple of five. */

function divisibleByFivePairSum(array){
  
  const newArray = [];
  
	for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j < array.length; j++) {
      if((array[i] + array[j]) % 5 === 0) {
        newArray.push([i, j]);
      }
    }
  }
  
  return newArray;
}


//Uncomment the lines below to test your function:

// console.log(divisibleByFivePairSum([1, 5, 2, 0, 4])); // => [ [ 0, 4 ], [ 1, 3 ] ]
// console.log(divisibleByFivePairSum([13, 22, 8, -3, 12])); // => [[ 0, 1 ], [ 0, 3 ], [ 0, 4 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ]]


/* Challenge 14
Create a function highestScore that takes in an array of student objects as a parameter.
It should return a string that corresponds to the student with the highest score.
The string should contain that student's initials concatenated with their id.
Assume the array contains at least 1 student object and the student with the highest score is unique (there are no ties). */

function highestScore(students) {
  let highScore = students[0].score;
  let highestName = '';
  
  for(let student in students) {
    if(students[student].score > highScore) {
      highScore = students[student].score;
      let nameToArray = students[student].name.split(' ');
      highestName = `${nameToArray[0].charAt()}${nameToArray[1].charAt()}${students[student].id}`
      
    }
  }
  return highestName;


}

//Uncomment the lines below to test your function:

// var students = [
// {name: 'Will Sentance', id: 128, score: -42},
// {name: 'Jamie Bradshaw', id: 32, score: 57},
// {name: 'Lisa Simpson', id: 2, score: 99},
// {name: 'Luke Skywalker', id: 256, score: 94}
// ];

// console.log(highestScore(students)); //=> 'LS2'


/* Challenge 15
Create a function leastCommonMultiple that takes two numbers 
(integers) as input and returns the lowest number which is 
a multiple of both inputs. */

function leastCommonMultiple(num1, num2) {
  //determine largest and smallest of two nums
	let [large, small] = num1 > num2 ? [num1, num2] : [num2, num1];
  //declare test variable
  let test = large;
  //check if test num is divisible by small num
  while(test % small !== 0) {
    //increase test to next multiple of large
    test += large;
  }
  return test;
}


//Uncomment the lines below to test your function:

// console.log(leastCommonMultiple(2, 3)); //=> 6
// console.log(leastCommonMultiple(6, 10)); //=> 30
// console.log(leastCommonMultiple(24, 26)); //=> 312


/* Extension 1
Create a function arrayBuilder that takes in a count object 
and returns an array filled with the appropriate numbers of elements. 
The order of the elements in the array does not matter, 
but repeated elements should be grouped. */

function arrayBuilder(count) {
  const newArray = []
  for(let item in count) {
    for(let i = 0; i < count[item]; i++) {
      newArray.push(`${item}`);
    }
  }
	return newArray;
}


//Uncomment the lines below to test your function:

// console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs']
// console.log(arrayBuilder({})); //=> []


/* Extension 2
Create a function objectBuilder that takes in a number 
and returns an object whose keys are 0 up to number 
and the values are that same number multipled by 5. */

function objectBuilder(count) {
  const newObj = {}
  for(let i = 0; i <= count; i++) {
    newObj[i] = i * 5;
  }
	return newObj;
}


//Uncomment the lines below to test your function:

// console.log(objectBuilder(4)); //=> {
  // 0: 0,
  // 1: 5,
  // 2: 10,
  // 3: 15,
  // 4: 20,
// }
// console.log(objectBuilder(0)); //=> { 0: 0 }


/* Extension 3
Create a function secretCipher that takes in an string(sentence) 
and an object(cipher). Return a string where every character is 
replaced with its cooresponding value in the cipher. If the character 
doesn't exist in the cipher, use the original character. */

function secretCipher(sentence, cipher){
  let newStr = '';
  let letters = sentence.split('');
  
  letters.forEach((letter) => {
    if(letter in cipher) {
      newStr += cipher[letter];
    } else {
      newStr += letter;
    }
  });
  
  return newStr;
}



//Uncomment the lines below to test your function:

// console.log(secretCipher("lqq me on flcebzzk" , { l : "a", q : "d", z: "o"})); //=> "add me on facebook"
// console.log(secretCipher("where are you???" , { v : "l", '?' : "!"})) //=> "where are you!!!"
// console.log(secretCipher("twmce" , { m : "n", t : "d", w : "a"})); //=> "dance"


/* Extension 4
Create a function passingStudents that accepts an array of student objects.
It should iterate through the list of students and return an array of the 
names of all the students who have an average grade of at least 70. */

function passingStudents(students) {
  const passed = [];
  for(let student in students) {
    let avg = 0;
    for(let i = 0; i < students[student].grades.length; i++) {
      avg += students[student].grades[i].score
    }
    avg = avg / students[student].grades.length;
    if(avg >= 70) {
      passed.push(students[student].name)
    }
  }
  return passed

}


//Uncomment the lines below to test your function:

// var students = [
//   {
//     "name": "Marco",
//     "id": 12345,
//     "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
//   },
//   {
//     "name": "Donna",
//     "id": 55555,
//     "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
//   },
//   {
//     "name": "Jukay",
//     "id": 94110,
//     "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
//   }
// ];

// console.log(passingStudents(students)); // => [ 'Marco', 'Donna' ]



