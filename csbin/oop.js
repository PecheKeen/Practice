/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 ***/
// Create a function that has two parameters (name and age) 
// and returns an object. Let's call this function makePerson. 
// This function will:
// 1. Create an empty object.
// 2. Add a name property to the newly created object with its 
// value being the 'name' argument passed into the function.
// 3. Add an age property to the newly created object with its 
// value being the 'age' argument passed into the function.
// 4. Return the object.

function makePerson(name, age) {
	return {
    name: name,
    age: age
  }
}

// const vicky = makePerson('Vicky', 24);
// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24

/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 2 - 4 ***/
// 2) Inside personStore object, create a property greet where the 
// value is a function that logs "hello".

// 3) Create a function personFromPersonStore that takes as input a 
// name and an age. When called, the function will create person 
// objects using the Object.create method on the personStore object.

// 4) Without editing the code you've already written, add an introduce 
// method to the personStore object that logs "Hi, my name is [name]".

const personStore = {
  greet: function () {
    console.log('hello');
  }
}

function personFromPersonStore(name, age) {
    const newPerson = Object.create(personStore)
    newPerson.name = name;
    newPerson.age = age;
    return newPerson;
}
personStore.introduce = function() {
  console.log(`Hi, my name is ${this.name}`)
}

// personStore.greet(); // -> Logs 'hello'
// const sandra = personFromPersonStore('Sandra', 26);
// console.log(sandra.name); // -> Logs 'Sandra'
// console.log(sandra.age); //-> Logs 26
// sandra.greet(); //-> Logs 'hello'
// sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 5 - 7 ***/
// 5) Create a function PersonConstructor that uses the this keyword 
// to save a single property onto its scope called greet. greet 
// should be a function that logs the string 'hello'.

// 6) Create a function personFromConstructor that takes as input 
// a name and an age. When called, the function will create person 
// objects using the new keyword instead of the Object.create method.

// 7) Without editing the code you've already written, add an introduce 
// method to the PersonConstructor function that logs "Hi, my name 
// is [name]".

function PersonConstructor() {
  this.greet = function() {
    console.log('hello')
  }
}

function personFromConstructor(name, age) {
    const newPerson = new PersonConstructor;
	newPerson.name = name;
	newPerson.age = age;
	return newPerson;
}

PersonConstructor.prototype.introduce = function() {
  console.log(`Hi, my name is ${this.name}`)
}


// const simon = new PersonConstructor;
// simon.greet(); // -> Logs 'hello'
// const mike = personFromConstructor('Mike', 30);
// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); //-> Logs 30
// mike.greet(); //-> Logs 'hello'
// mike.introduce(); // -> Logs 'Hi, my name is Mike'

/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 8 - 9 ***/
// 8) Create a class PersonClass. PersonClass should have a constructor that 
// is passed an input of name and saves it to a property by the same name. 
// PersonClass should also have a method called greet that logs 
// the string 'hello'.

// 9) Create a class DeveloperClass that creates objects by extending the 
// PersonClass class. In addition to having a name property and greet method, 
// DeveloperClass should have an introduce method. When called, introduce 
// should log the string 'Hello World, my name is [name]'.

class PersonClass {
  constructor(name) {
    this.name = name;
  }
	
  greet = function () {
    console.log('hello')
  }
}

class DeveloperClass extends PersonClass {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  
  introduce = function () {
    console.log(`Hello World, my name is ${this.name}`);
  }
}

// const george = new PersonClass;
// george.greet(); // -> Logs 'hello'
// const thai = new DeveloperClass('Thai', 32);
// console.log(thai.name); // -> Logs 'Thai'
// thai.introduce(); //-> Logs 'Hello World, my name is Thai'

/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/


/*** CHALLENGE 10 - 14 ***/
// 10)Create an object adminFunctionStore that has access to all methods in the 
// userFunctionStore object, without copying them over individually.

// 11) Create an adminFactory function that creates an object with all the 
// same data fields (and default values) as objects of the userFactory class, 
// but without copying each data field individually.

// 12) Then make sure the value of the 'type' field for adminFactory objects 
// is 'Admin' instead of 'User'.

// 13) Make sure that adminFactory objects have access to adminFunctionStore 
// methods, without copying them over.

// 14) Created a method called sharePublicMessage that logs 'Welcome users!' 
// and will be available to adminFactory objects, but not userFactory objects. 
// Do not add this method directly in the adminFactory function.

const userFunctionStore = {
  sayType: function() {
    console.log("I am a " + this.type);
  }
}
  
function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = "User";
  user.name = name;
  user.score = score;
  return user;
}
  
const adminFunctionStore = {};
adminFunctionStore.prototype = Object.create(userFunctionStore);
  
function adminFactory(name, score) {
  const newAdmin = userFactory.call(this, name, score);
  newAdmin.type = 'Admin';
  return newAdmin;
}

adminFunctionStore.__proto__.sharePublicMessage = function () {
    console.log('Welcome Users!');
}
  
// const adminFromFactory = adminFactory("Eva", 5);
// adminFromFactory.sayType() // -> Logs "I am a Admin"
// adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"

/****************************************************************
EXTENSION: MIXINS
****************************************************************/
// Mixins are a tool in object-oriented programming that allows objects to be 
// given methods and properties beyond those provided by their inheritance. 
// For this challenge, complete the missing code, giving all of the robotMixin 
// properties to robotFido. Do this in a single line of code, without adding 
// the properties individually.

class Dog {
  constructor() {
    this.legs = 4;
  }
  speak() {
    console.log('Woof!');
  }
}

const robotMixin = {
  skin: 'metal',
  legs: 6,
  speak: function() { console.log(`I have ${this.legs} legs and am made of ${this.skin}`) },
}

// let robotFido = new Dog();
// robotFido = Object.assign(Dog.prototype, robotMixin)
// robotFido.speak() // -> Logs "I am made of metal"

