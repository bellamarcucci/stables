
//------------------------- Seting up shop (Assignment 1) -------------------------//

let stable = "Brazilian Stables";
let greeting = "Hello, welcome to " + stable + "! ";
let lateFee = 0.20;

let theodora = {
    name: "Theodora",
    nickname: "Jujuba",
    age: 4,
    favoriteFood: "duck treats",
    costMonthly: 500,
    latePayment: 500 + (500 * lateFee),
    isInsideStable: true,
    bestFriend: "Isabella",
    isFriendly: false

};

let isabella = {
    name: "Isabella",
    nickname: "Bella",
    age: 3,
    favoriteFood: "carrots",
    costMonthly: 800,
    latePayment: 800 + (800 * lateFee),
    isInsideStable: false,
    bestFriend: "Theodora",
    isFriendly: true
};


let pili = {
    name: "Pili",
    nickname: "Pipi",
    age: 6,
    favoriteFood: "apples",
    costMonthly: 300,
    latePayment: 300 + (300 * lateFee),
    isInsideStable: true,
    bestFriend: "Theodora",
    isFriendly: true
};

let latePaymentMessage = "Oops! It looks like your payment is late. Your current amount for " + theodora.name + " is $" + theodora.latePayment + ".";

console.log(greeting + latePaymentMessage);



//------------------------- First day (Assignment 2) -------------------------//


let horses = [theodora, isabella, pili];
 
let lara = {
    name: "Lara",
    nickname: "Lala",
    favoriteFood: "blueberry treats",
    age: 5,
    costMonthly: 600,
    latePayment: 600 + (600 * lateFee),
    isInsideStable: false,
    bestFriend: "Isabella",
    isFriendly: false,
};
 
horses.push(lara);
 
theodora.isHungry = true;
isabella.isHungry = false;
pili.isHungry = true;
lara.isHungry = false;
 
let totalStalls = 13;
 
function logAvailableStalls(totalStalls, numberOfHorses) {
    let availableStalls = totalStalls - numberOfHorses;
    console.log("There is room for " + availableStalls + " horses.");
}

logAvailableStalls(totalStalls, horses.length);
 
function logLatePayment(horse) {
    let amountOwed = horse.costMonthly + (horse.costMonthly * lateFee);
    console.log("If rent is paid late, " + horse.name + " will owe $" + amountOwed + ".");
}
 
logLatePayment(lara);
 
function getNickname(horse) {
    return horse.nickname;
}
 
let chosenNickname = getNickname(isabella);
console.log(chosenNickname);
 

//------------------------- prova -------------------------//

const cart = [
  { name: "Horse feed", price: 25 },
  { name: "Bedding", price: 15 },
  { name: "Grooming brush", price: 10 }
];

function addToCart(cart, item) {
  cart.push(item);

  console.log(item.name + " was added to the cart.");

  if (cart.length >= 7) {
    console.log("You can no longer use the express checkout!");
  }

  return cart.length;
}

const itemCount = addToCart(cart, { name: "Hay", price: 20 });

console.log("There are " + itemCount + " items in the cart.");


//------------------------- Resumo do midterm (MDIA-1620) -------------------------//
//


 // 1. JAVASCRIPT BASICS

 // JavaScript is a **multi-paradigm programming language**.
 // It supports **object-oriented programming (OOP)**.
 // console.log() = **Displays information in the console**.
 // Single-line comment = **//**
 // Multi-line comment = **/* ... */**

 console.log("Hello World");


 // 2. PRIMITIVE DATA TYPES

 // NUMBER = **Numeric value without quotes**
 // STRING = **Text inside quotes**
 // BOOLEAN = **true or false without quotes**
 // UNDEFINED = **Variable declared without an assigned value**

 let age = 25;           // **Number**
 let name = "Emma";      // **String**
 let isStudent = true;   // **Boolean**
 let score;              // **Undefined**

 // "100" = **String**
 // 100 = **Number**
 // "false" = **String**
 // false = **Boolean**

 // const = **Variable declaration keyword, NOT a primitive type**


 // 3. LET VS CONST

 // let = **Can be reassigned**
 // const = **Cannot be reassigned**

 let city = "Burnaby";
 city = "Vancouver"; // **Works**

 const country = "Canada";
 // country = "Brazil"; // **Error**

 // REASSIGNMENT = **Changing an existing variable's value**
 // REDECLARATION = **Declaring the same variable again**

 let points = 10;
 points = 20; // **Works**

 // let points = 30; // **SyntaxError**

 // let cannot be redeclared in the **same scope**.
 // const must be **initialized when declared**.

 // IMPORTANT:
 // const arrays and objects = **Can be mutated**
 // const variables = **Cannot be reassigned**

 const numbers = [1, 2];
 numbers.push(3); // **Works**

 // numbers = [4, 5]; // **Error**


 // 4. OPERATORS

 // +   = **Addition**
 // -   = **Subtraction**
 // *   = **Multiplication**
 // /   = **Division**
 // %   = **Remainder**

 // === = **Equal value AND type**
 // !== = **Different value OR type**
 // >   = **Greater than**
 // <   = **Less than**
 // >=  = **Greater than or equal**
 // <=  = **Less than or equal**

 // && = **AND: both conditions must be true**
 // || = **OR: at least one condition must be true**
 // !  = **NOT: reverses a boolean**

 5 === 5;     // **true**
 5 === "5";   // **false**
 5 !== "5";   // **true**
 10 > 5;      // **true**

 // STRING CONCATENATION = **Joining strings using +**

 let firstName = "Anna";
 console.log("Hello " + firstName);

 // Output = **Hello Anna**


 // 5. CONDITIONAL STATEMENTS

 // if = **Executes when condition is true**
 // else if = **Checks another condition**
 // else = **Executes when previous conditions are false**

 let temperature = 18;

 if (temperature > 25) {
   console.log("Hot");
 } else if (temperature >= 15) {
   console.log("Mild");
 } else {
   console.log("Cold");
 }

 // Output = **Mild**

 // !false = **true**
 // !true = **false**

 let isClosed = false;

 if (!isClosed) {
   console.log("Store is open");
 }

 // Output = **Store is open**


 // 6. ARRAYS — BASICS

 // Array = **Stores multiple values**
 // First index = **0**
 // .length = **Number of elements**
 // Last index = **length - 1**

 let pets = ["Dog", "Cat", "Bird"];

 // pets[0] = **"Dog"**
 // pets[1] = **"Cat"**
 // pets[2] = **"Bird"**
 // pets.length = **3**


 // 7. ARRAY METHODS

 // push() = **Adds item to the END**
 // pop() = **Removes item from the END**
 // unshift() = **Adds item to the BEGINNING**
 // shift() = **Removes item from the BEGINNING**

 let colors = ["Red", "Blue"];

 colors.push("Green");
 // Result = **["Red", "Blue", "Green"]**

 colors.pop();
 // Result = **["Red", "Blue"]**

 colors.unshift("Pink");
 // Result = **["Pink", "Red", "Blue"]**

 colors.shift();
 // Result = **["Red", "Blue"]**

 // RETURN VALUES:

 // push() = **Returns new array length**
 // unshift() = **Returns new array length**
 // pop() = **Returns removed element**
 // shift() = **Returns removed element**

 let items = ["Pen", "Book"];
 let result = items.push("Pencil");

 // items = **["Pen", "Book", "Pencil"]**
 // result = **3, NOT the array**


 // 8. SPLICE()

 // splice(startIndex, deleteCount, newItems)
 // Purpose = **Removes, inserts, or replaces elements**
 // Modifies = **Original array**
 // Returns = **Array containing removed elements**

 let fruits = ["Pear", "Grape", "Kiwi"];

 fruits.splice(1, 1, "Mango", "Orange");

 // Result = **["Pear", "Mango", "Orange", "Kiwi"]**

 fruits.splice(2, 1);
 // Removes = **"Orange"**

 fruits.splice(1, 0, "Lemon");
 // Inserts = **"Lemon" at index 1**
 // Removes = **Nothing**


 // 9. OBJECTS

 // Object = **Stores KEY: VALUE pairs**
 // Key = **Property name**
 // Value = **Data assigned to the property**

 let person = {
   name: "Sophie",
   age: 24,
   isStudent: true
 };

 // DOT NOTATION = **object.property**
 // person.name = **"Sophie"**

 // BRACKET NOTATION = **object["property"]**
 // person["age"] = **24**

 person.age = 25;
 // Result = **Updates age to 25**

 person.city = "Vancouver";
 // Result = **Adds a new property**

 // Arrays use **numeric indexes**.
 // Objects use **property keys**.

 let products = [
   { name: "Notebook", price: 5 },
   { name: "Pencil", price: 2 }
 ];

 // products[0].name = **"Notebook"**
 // products[1].price = **2**
 // products.length = **2**


 // 10. FUNCTIONS — BASICS

 // Function = **Reusable block of code**
 // Declaration = **Defines the function**
 // Call = **Executes the function**

 function greet(name) {
   console.log("Hello " + name);
 }

 greet("Sophie");

 // Output = **Hello Sophie**


 // 11. PARAMETERS VS ARGUMENTS

 // PARAMETERS = **Names in function declaration**
 // ARGUMENTS = **Actual values passed in function call**

 function multiply(a, b) {
   return a * b;
 }

 // a, b = **Parameters**

 multiply(4, 5);

 // 4, 5 = **Arguments**
 // Returned value = **20**


 // 12. RETURN VS CONSOLE.LOG

 // console.log() = **Displays a value**
 // return = **Sends a value back to the caller**
 // No return = **Function returns undefined**
 // return = **Immediately stops function execution**

 function add(a, b) {
   console.log(a + b);
 }

 let result1 = add(2, 3);

 // Console output = **5**
 // result1 = **undefined**

 function addNumbers(a, b) {
   return a + b;
 }

 let result2 = addNumbers(2, 3);

 // result2 = **5**

 function calculate(x) {
   return x + 2;
   x = x * 3;
 }

 // calculate(5) = **7**
 // x = x * 3 = **Never executes**


 // 13. UNDEFINED VS ERRORS

 // undefined = **No assigned or returned value**
 // ReferenceError = **Variable not found or inaccessible**
 // TypeError = **Invalid operation on a value**
 // SyntaxError = **Invalid JavaScript syntax**

 let grade;
 console.log(grade);

 // Output = **undefined**

 function sayHi() {
   console.log("Hi");
 }

 let message = sayHi();

 // Prints = **Hi**
 // message = **undefined**

 // console.log(unknownName);
 // Result = **ReferenceError**

 let total = 15;
 // total();
 // Result = **TypeError**

 // Declaring let twice in the same scope:
 // Result = **SyntaxError**


 // 14. VARIABLE SCOPE

 // GLOBAL = **Declared outside a function**
 // LOCAL = **Declared inside a function**
 // Parameters = **Local to their function**
 // Local variables = **Not accessible outside their scope**

 let greeting = "Hello";

 function sayHello() {
   let username = "Alex";
   console.log(greeting);
 }

 // console.log(username);
 // Result = **ReferenceError**

 let price = 10;

 function updatePrice(price) {
   price = 20;
   return price;
 }

 updatePrice(price);

 // Outer price = **10**
 // Changing a parameter does NOT automatically
 // modify the outer variable.

 price = updatePrice(price);

 // Outer price = **20**


 // 15. ARRAY MUTATION IN FUNCTIONS

 // Array mutation = **Changes the original array**
 // Array parameters can reference **the same array**
 // Reassigning a parameter = **Does not replace outer array**

 let numbersList = [1, 2];

 function addNumber(list) {
   list.push(3);
 }

 addNumber(numbersList);

 // numbersList = **[1, 2, 3]**

 function replaceList(list) {
   list = ["Other"];
 }

 replaceList(numbersList);

 // numbersList = **[1, 2, 3]**
 // Outer array remains unchanged by reassignment.


 // 16. DEFAULT PARAMETERS

 // Default parameter = **Fallback value**
 // Used when argument = **Omitted or undefined**

 function welcome(name = "Guest") {
   return "Hello " + name;
 }

 // welcome() = **"Hello Guest"**
 // welcome("Emma") = **"Hello Emma"**


 // 17. REUSABLE / PORTABLE FUNCTIONS

 // Portable function = **Receives required data
 // through parameters instead of depending on
 // specific global variables**

 // GLOBAL DEPENDENCY:

 let tax = 5;

 function getTotal(price) {
   return price + tax;
 }

 // Depends on = **Global tax variable**

 // MORE PORTABLE:

 function calculateTotal(price, tax) {
   return price + tax;
 }

 // calculateTotal(20, 5) = **25**

 // Benefits = **Reusable, testable, predictable,
 // less dependent on global variables**


 // 18. FUNCTIONS + ARRAYS + OBJECTS

 // SHOPPING CART EXAMPLE:

 let cart = [
   { name: "Notebook", price: 5 },
   { name: "Marker", price: 3 }
 ];

 function addProduct(cart, product) {

   // Add product to array.
   cart.push(product);

   // Display meaningful message.
   console.log(product.name + " was added.");

   // Return item count.
   return cart.length;
 }

 let totalItems = addProduct(
   cart,
   { name: "Eraser", price: 2 }
 );

 // cart.length = **3**
 // totalItems = **3**
 // Console = **Eraser was added.**

 // cart.push(product) = **Modifies the array**
 // return cart.length = **Returns a number**
 // return cart = **Returns the array**

 function checkCart(cart) {
   if (cart.length >= 5) {
     console.log("Cart limit reached!");
   }
 }

 // Conditional = **Checks if cart has 5+ items**


 // 19. CLEAN CODE & COMMENTS

 // Meaningful variable names = **Clear purpose**
 // Indentation = **Organized code blocks**
 // Comments = **Explain logic and decisions**
 // Console messages = **Describe the action performed**

 function addToList(list, item) {

   // Add item to collection.
   list.push(item);

   // Confirm successful addition.
   console.log(item.name + " was added.");

   // Return updated count.
   return list.length;
 }


 // 20. TERMINAL / CLI

 // CLI = **Command Line Interface**
 // pwd = **Print working directory**
 // ls = **List files and directories**
 // cd folderName = **Enter folder**
 // cd .. = **Move to parent directory**
 // node app.js = **Run JavaScript using Node.js**
 // Tab = **Autocomplete file/directory names**

 // node app.js = **Executes JavaScript**
 // cd app.js = **Does NOT execute JavaScript**


 // 21. CRUD

 // C = **Create**
 // R = **Read**
 // U = **Update**
 // D = **Delete**


 // 22. GIT & COMMITS

 // git status = **View working tree status**
 // git add . = **Stage changes**
 // git commit -m "message" = **Create a commit**
 // git push = **Push commits to remote**

 // COMMON COMMIT FORMAT:
 // **type: short description**

 // feat = **New feature**
 // fix = **Bug fix**
 // docs = **Documentation**

 // Examples:
 // feat: add input validation
 // fix: correct total calculation
 // docs: explain function logic

 // IMPORTANT:
 // Follow the teacher's required format.


 // 23. EXAM STRATEGY / COMMON TRAPS

 // Array first index = **0**
 // Array last index = **length - 1**
 // .length = **Number of elements**
 // push() returns = **New length**
 // pop() returns = **Removed item**
 // splice() returns = **Array of removed items**
 // console.log() = **Displays a value**
 // return = **Returns a value and stops execution**
 // Function without return = **undefined**
 // Parameters = **Names in declaration**
 // Arguments = **Values in call**
 // Local variables = **Limited to their scope**
 // const = **No reassignment**
 // const arrays = **Can be mutated**
 // Object property = **Access using dot or brackets**
 // Functions = **Can modify arrays through parameters**
 // Reassigning parameter = **Does not reassign outer variable**

 // ALWAYS IDENTIFY THE QUESTION:

 // "What is logged?" = **Console output**
 // "What is returned?" = **Function return value**
 // "What is stored?" = **Assigned variable value**
 // "Final array?" = **Array after modifications**
 // "What happens?" = **Output, mutation, or error**
