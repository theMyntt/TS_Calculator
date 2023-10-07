"use strict";
var _a;
var nums = document.getElementsByClassName("num");
var operate = document.getElementsByClassName("operations");
var operationResult = document.getElementById("operationResult");
var finalResult = document.getElementById("final");
var percentBtn = document.getElementById("percentBtn");
var num1Text = document.getElementById("num1Text");
var num2Text = document.getElementById("num2Text");
var operateText = document.getElementById("operation");
var num1 = "";
var num2 = "";
var numbersInDot = [num1, num2];
var operates = "";
var verify = 0;
var screenCalc;
var result = 0;
var _temp; //
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
};
function VerifyDot() {
    if (num1 === "." || num2 == ".") {
        if (num1 == ".") {
            num1 = "0" + num1;
            return num1;
        }
        else {
            num2 = "0" + num2;
            return num2;
        }
    }
}
percentBtn.addEventListener("click", function () {
    result = operation.percent(parseFloat(num1));
    num1Text.textContent = result;
    num1 = result.toString();
});
var _loop_1 = function (i) {
    nums[i].addEventListener("click", function () {
        if (verify % 2 == 0) {
            num1 += nums[i].textContent;
            VerifyDot();
            num1Text.textContent = num1;
            console.log(num1);
        }
        else {
            num2 += nums[i].textContent;
            VerifyDot();
            num2Text.textContent = num2;
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
            num1Text.textContent = "0";
            num2Text.textContent = "";
            operateText.textContent = "";
            num1 = "";
            num2 = "";
            verify = 0;
        }
        else if (operates == "%") {
            verify++;
        }
        else {
            operateText.textContent += " " + operates + " ";
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
                num1Text.textContent = result;
                num2Text.textContent = "";
                operateText.textContent = "";
                num1 = "";
                num2 = "";
                break;
            case "−":
                result = operation.minus(parseFloat(num1), parseFloat(num2));
                num1Text.textContent = result;
                num2Text.textContent = "";
                operateText.textContent = "";
                num1 = "";
                num2 = "";
                break;
            case "×":
                result = operation.times(parseFloat(num1), parseFloat(num2));
                num1Text.textContent = result;
                num2Text.textContent = "";
                operateText.textContent = "";
                num1 = "";
                num2 = "";
                break;
            case "÷":
                result = operation.divide(parseFloat(num1), parseFloat(num2));
                num1Text.textContent = result;
                num2Text.textContent = "";
                operateText.textContent = "";
                num1 = "";
                num2 = "";
                break;
        }
    }
});
(_a = document.getElementById("plusMinus")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    num1Text.textContent = "−" + num1;
    num1 = "-" + num1;
});
// operates == "+" || operates == "−" || operates == "×" || operates == "÷"
