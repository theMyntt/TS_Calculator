"use strict";
var _a;
var nums = document.getElementsByClassName("num");
var operate = document.getElementsByClassName("operations");
var operationResult = document.getElementById("operationResult");
var finalResult = document.getElementById("final");
var num1 = "";
var num2 = "";
var operates = "";
var verify = 0;
var screenCalc;
var result = 0;
var _temp;
;
var operation = {
    plus: function (a, b) { return a + b; },
    minus: function (a, b) { return a - b; },
    times: function (a, b) { return a * b; },
    divide: function (a, b) {
        if (a === 0 || b === 0) {
            return 0;
        }
        else {
            return a / b;
        }
    },
    percent: function (a) {
        if (a === 0) {
            return 0;
        }
        else {
            return a / 100;
        }
    },
    negative: function (a) {
        _temp = a * 2;
        a -= _temp;
        return a;
    }
};
var _loop_1 = function (i) {
    nums[i].addEventListener("click", function () {
        if (verify % 2 == 0) {
            num1 += nums[i].textContent;
            operationResult.textContent += num1;
            console.log(num1);
        }
        else {
            num2 += nums[i].textContent;
            operationResult.textContent += num2;
            console.log(num2);
        }
    });
};
for (var i = 0; i < nums.length; i++) {
    _loop_1(i);
}
var _loop_2 = function (i) {
    operate[i].addEventListener("click", function () {
        operates = operate[i].textContent;
        if (operates == "C") {
            operationResult.textContent = "";
            verify = 0;
        }
        else {
            operationResult.textContent += operates;
            verify++;
        }
        console.log(operates);
    });
};
for (var i = 0; i < operate.length; i++) {
    _loop_2(i);
}
finalResult.addEventListener("click", function () {
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
(_a = document.getElementById("plusMinus")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    num1 = "-" + num1;
    operationResult.textContent = num1;
});
// operates == "+" || operates == "−" || operates == "×" || operates == "÷"
