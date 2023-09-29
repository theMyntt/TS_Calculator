"use strict";
const nums = document.getElementsByClassName("num");
const operate = document.getElementsByClassName("operations");
const operationResult = document.getElementById("operationResult");
const finalResult = document.getElementById("final");
let num1 = "";
let num2 = "";
let operates = "";
let verify = 0;
var screenCalc;
var result = 0;
var _temp;
;
const operation = {
    plus: (a, b) => a + b,
    minus: (a, b) => a - b,
    times: (a, b) => a * b,
    divide: (a, b) => {
        if (a === 0 || b === 0) {
            return 0;
        }
        else {
            return a / b;
        }
    },
    percent: (a) => {
        if (a === 0) {
            return 0;
        }
        else {
            return a / 100;
        }
    },
    negative: (a) => {
        _temp = a * 2;
        a -= _temp;
        return a;
    }
};
for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener("click", function () {
        if (verify % 2 == 0) {
            num1 += nums[i].textContent;
            operationResult.textContent = num1;
            console.log(num1);
        }
        else {
            num2 += nums[i].textContent;
            operationResult.textContent = num2;
            console.log(num2);
        }
    });
}
for (let i = 0; i < operate.length; i++) {
    operate[i].addEventListener("click", function () {
        operates = operate[i].textContent;
        if (operates == "C") {
            operationResult.textContent = "";
            verify = 0;
        }
        else {
            operationResult.textContent = operates;
            verify++;
        }
        console.log(operates);
    });
}
finalResult.addEventListener("click", () => {
    if (num1 != "" && operates != "") {
        switch (operates) {
            case "+":
                result = operation.plus(parseFloat(num1), parseFloat(num2));
                operationResult.textContent = result;
                num1 = "";
                num2 = "";
                break;
            case "−":
                result = operation.minus(parseFloat(num1), parseFloat(num2));
                operationResult.textContent = result;
                num1 = "";
                num2 = "";
                break;
            case "×":
                result = operation.times(parseFloat(num1), parseFloat(num2));
                operationResult.textContent = result;
                num1 = "";
                num2 = "";
                break;
            case "÷":
                result = operation.divide(parseFloat(num1), parseFloat(num2));
                operationResult.textContent = result;
                num1 = "";
                num2 = "";
                break;
            case "%":
                num2 = "";
                result = operation.percent(parseFloat(num1));
                operationResult.textContent = result;
                num1 = "";
                break;
        }
    }
});
document.getElementById("plusMinus")?.addEventListener("click", function () {
    num1 = "-" + num1;
    operationResult.textContent = num1;
});
// operates == "+" || operates == "−" || operates == "×" || operates == "÷"
