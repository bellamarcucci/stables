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
 
function logAvailableStalls() {
    let availableStalls = totalStalls - horses.length;
    console.log("There are " + availableStalls + " stalls available at " + stable + ".");
}
 
logAvailableStalls();
 
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
 


