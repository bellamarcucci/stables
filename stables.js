//------------------------- Seting up shop (Assignment 1) -------------------------//

let stable = "Brazilian Stables";
let greeting = "Hello, welcome to " + stable + "! ";
let lateFee = 0.20;

let theodora = {
    name: "Theodora",
    age: 4,
    favoriteFood: "duck treats",
    costMonthly: 500,
    latePayment: 500 + (500 * lateFee)
};

let isabella = {
    name: "Isabella",
    age: 3,
    favoriteFood: "carrots",
    costMonthly: 800,
    latePayment: 800 + (800 * lateFee)
};


let pili = {
    name: "Pili",
    age: 6,
    favoriteFood: "apples",
    costMonthly: 300,
    latePayment: 300 + (300 * lateFee)
};

let latePaymentMessage = "Ops! It looks like your payment is late. Your current amount for " + theodora.name + " is $" + theodora.latePayment + ".";

console.log(greeting + latePaymentMessage);
