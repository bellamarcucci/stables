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
 

function stallsAvailable(totalStalls, occupiedStalls) {
  let availableStalls = totalStalls - occupiedStalls;
  console.log("There is room for " + availableStalls + " horses.");
}

stallsAvailable(totalStalls, horses.length);
 
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
 

//------------------------- Day to day operations (Project) -------------------------//

let treat = "carrots";

for (let horse of horses) {
    if (horse.favoriteFood === treat) {
        console.log(horse.name + " likes " + treat + "!");
        break;
    } else {
        console.log(horse.name + " does not like " + treat + ".");
    }
}


// Unique property
function checkBestFriend(horse) {
    if (horse.bestFriend === "Theodora") {
        console.log(horse.name + "'s best friend is Theodora!");
    } else {
        console.log(horse.name + "'s best friend is " + horse.bestFriend + ".");
    }
}

for (let horse of horses) {
    checkBestFriend(horse);
}

// Feed horses
function feedHorses() {
    for (let horse of horses) {
        if (!horse.isInsideStable) {
            horse.isInsideStable = true;
            console.log(horse.name + " came inside for food.");
        }

        console.log(horse.name + " ate " + horse.favoriteFood + ".");
        horse.isHungry = false;
    }
}

feedHorses();


moveHorses(false, theodora, lara);


// Bedtime
moveHorses(true, theodora, lara, pili);