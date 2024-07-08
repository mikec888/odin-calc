// create 4 functions - add, subtract, multiply, divide

// 3 + 5. Create three variables for each of the parts of a calculator operation. 
// Create a variable for the first number, the operator, and the second number. You’ll use these variables to update your display later.

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

// Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key.

// There should also be a display for the calculator. Go ahead and fill it with some dummy numbers so it looks correct.

// a clear button

// Create the functions that 
// populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.

// round the number to 2 decimal

// do extra credit later

const displayScreen = document.querySelector(".displayScreen");
const displayScreen2 = document.querySelector(".displayScreen2");

const plusButton = document.querySelector("#plusButton");
const minusButton = document.querySelector("#minusButton");
const timesButton = document.querySelector("#timesButton");
const divideButton = document.querySelector("#divideButton");

const numOne = document.querySelector("#numOne");
const numTwo = document.querySelector("#numTwo");
const numThree = document.querySelector("#numThree");
const numFour = document.querySelector("#numFour");
const numFive = document.querySelector("#numFive");
const numSix = document.querySelector("#numSix");
const numSeven = document.querySelector("#numSeven");
const numEight = document.querySelector("#numEight");
const numNine = document.querySelector("#numNine");
const numZero = document.querySelector("#numZero");
const numDot = document.querySelector("#numDot");

const equalBtn = document.querySelector("#equalBtn");
const clearBtn = document.querySelector("#clearBtn");

let userInput1;
let userInput2;
let userInput3;

// add event listener to 0 - 9
numOne.addEventListener('click', function(){
    displayScreen.textContent += 1;
});

numTwo.addEventListener('click', function(){
    displayScreen.textContent += 2;
});

numThree.addEventListener('click', function(){
    displayScreen.textContent += 3;
});

numFour.addEventListener('click', function(){
    displayScreen.textContent += 4;
});

numFive.addEventListener('click', function(){
    displayScreen.textContent += 5;
});

numSix.addEventListener('click', function(){
    displayScreen.textContent += 6;
});

numSeven.addEventListener('click', function(){
    displayScreen.textContent += 7;
});

numEight.addEventListener('click', function(){
    displayScreen.textContent += 8;
});

numNine.addEventListener('click', function(){
    displayScreen.textContent += 9;
});

numZero.addEventListener('click', function(){
    displayScreen.textContent += 0;
});

numDot.addEventListener('click', function(){
    if (!displayScreen.textContent.includes('.')){
    displayScreen.textContent += ".";}
});

// add Event Listener to operators

plusButton.addEventListener('click', function(){
    userInput1 = displayScreen.textContent;
    userInput2 = "+";
    displayScreen.textContent = '';
    displayScreen2.textContent = "";
    return userInput1, userInput2;
});

minusButton.addEventListener('click', function(){
    userInput1 = displayScreen.textContent;
    userInput2 = "-";
    displayScreen.textContent = '';
    displayScreen2.textContent = "";
    return userInput1, userInput2;
});

timesButton.addEventListener('click', function(){
    userInput1 = displayScreen.textContent;
    userInput2 = "*";
    displayScreen.textContent = '';
    displayScreen2.textContent = "";
    return userInput1, userInput2;
});

divideButton.addEventListener('click', function(){
    userInput1 = displayScreen.textContent;
    userInput2 = "/";
    displayScreen.textContent = '';
    displayScreen2.textContent = "";
    return userInput1, userInput2;
});



// equation


equalBtn.addEventListener('click', function(){
    let result;
    userInput3 = displayScreen.textContent;
    if (userInput2 == "+"){
        result = Number(userInput1) + Number(userInput3);
    } else if (userInput2 == "-"){
        result = Number(userInput1) - Number(userInput3);
    } else if (userInput2 == "*"){
        result = Number(userInput1) * Number(userInput3);
    } else if (userInput2 == "/"){
        result = Number(userInput1) / Number(userInput3);
    }
    
    displayScreen2.textContent = `${userInput1} ${userInput2} ${userInput3} = ${result}`;

});




function clearDisplay(){
    displayScreen.textContent = "";
    displayScreen2.textContent = "";
    
}

clearBtn.addEventListener('click', clearDisplay);
