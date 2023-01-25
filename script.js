const numbersArray = [];
let stringNum = '';
let isFirst = true;
operator = '';
pastNum = 0;
let isCalled = false;
const display = document.querySelector('.display h2');

numbersArray[0] = document.querySelector("#zero")
numbersArray[1] = document.querySelector('#one');
numbersArray[2] = document.querySelector('#two');
numbersArray[3] = document.querySelector('#three');
numbersArray[4] = document.querySelector('#four');
numbersArray[5] = document.querySelector('#five');
numbersArray[6] = document.querySelector('#six');
numbersArray[7] = document.querySelector('#seven');
numbersArray[8] = document.querySelector('#eight');
numbersArray[9] = document.querySelector('#nine');


const clear = document.querySelector('#clear');
const addNum = document.querySelector('#add');
const subtractNum = document.querySelector('#subtract');
const multiplyNum = document.querySelector('#multiply');
const divideNum = document.querySelector('#divide');
const equalsNum = document.querySelector('#equals');

clear.addEventListener('click', () => {
    stringNum = '';
    pastNum = 0;
    display.textContent = pastNum;
    isFirst = true;
})

for (let i = 0; i < 10; i++) {
    numbersArray[i].addEventListener('click', () => {
        stringNum += i + '';
        display.textContent = stringNum;
    })
}

addNum.addEventListener('click', () => {
    add();
})

subtractNum.addEventListener('click', () => {
    subtract();
})

multiplyNum.addEventListener('click', () => {
    multiply();
})

divideNum.addEventListener('click', () => {
    divide();
})

equalsNum.addEventListener('click', () => {
    equals();
})

function add() {
    if (isFirst === true) {
        operator = 'add';
        isFirst = false;
        pastNum = parseInt(stringNum);
        stringNum = '';
    }
    else if (isFirst === false) {
        pastNum = equals();
        operator = 'add';
    }

}

function subtract() {
    if (isFirst === true) {
        operator = 'subtract';
        isFirst = false;
        pastNum = parseInt(stringNum);
        stringNum = '';
    }
    else if (isFirst === false) {
        pastNum = equals();
        operator = 'subtract';
    }
}

function multiply() {
    if (isFirst === true) {
        operator = 'multiply';
        isFirst = false;
        pastNum = parseInt(stringNum);
        stringNum = '';
    }
    else if (isFirst === false) {
        pastNum = equals();
        operator = 'multiply';
    }
}

function divide() {
    if (isFirst === true) {
        operator = 'divide';
        isFirst = false;
        pastNum = parseInt(stringNum);
        stringNum = '';
    }
    else if (isFirst === false) {
        pastNum = equals();
        operator = 'divide';
    }
}

function equals() {
    if (operator == 'add') {
    pastNum = +stringNum + pastNum;
    }
    else if (operator == 'subtract') {
        pastNum = pastNum - +stringNum;
    }
    else if (operator == 'multiply') {
        if (+stringNum == 0) {
        }
        else {
        pastNum = pastNum * +stringNum;
        }
    }
    else if (operator == 'divide') {
        if (+stringNum == 0) {
        }
        else {
        pastNum = pastNum / +stringNum;
        }
    }
    stringNum = '';
    isCalled = false;
    display.textContent = pastNum;
    return pastNum;
    
}






