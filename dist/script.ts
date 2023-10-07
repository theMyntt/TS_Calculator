const nums: any = document.getElementsByClassName("num") as HTMLCollectionOf<HTMLButtonElement>;
const operate: any = document.getElementsByClassName("operations") as HTMLCollectionOf<HTMLButtonElement>;
const operationResult: any = document.getElementById("operationResult") as HTMLParagraphElement;
const finalResult: any = document.getElementById("final") as HTMLButtonElement;
const percentBtn: any = document.getElementById("percentBtn") as HTMLButtonElement;

const num1Text: any = document.getElementById("num1Text") as HTMLElement;
const num2Text = document.getElementById("num2Text") as HTMLElement;
const operateText = document.getElementById("operation") as HTMLElement

let num1: string = "";
let num2: string = "";
let numbersInDot: any = [num1, num2];
let operates: string = "";
let verify: number = 0;

var screenCalc: string;
var result: number = 0;
var _temp; //

interface Operations {
    plus(a: number, b: number): number;
    minus(a: number, b: number): number;
    times(a: number, b: number): number;
    divide(a: number, b: number): number;
    percent(a: number): number;
};

const operation: Operations = {
    plus: (a, b) => a + b,
    minus: (a, b) => a - b,
    times: (a, b) => a * b,
    divide: (a, b) => {
        if (a === 0 || b === 0) {
            return 0;
        } else {
            return a / b;
        }
    },
    percent: (a) => {
        if (a === 0) {
            return 0;
        } else {
            return a / 100;
        }
    },
};

function VerifyDot() {
    if (num1 === "." || num2 == ".") {
        if (num1 == ".") {
            num1 = "0" + num1;
            return num1;
        }else{
            num2 = "0" + num2;
            return num2
        }
        
    }
}

percentBtn.addEventListener("click", function() {
    result = operation.percent(parseFloat(num1));
    num1Text.textContent = result;
    num1 = result.toString();
});

for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener("click", function () {
        if (verify % 2 == 0) {
            
            num1 += nums[i].textContent;
            VerifyDot();
            num1Text.textContent = num1;
            console.log(num1);
        } else {
            num2 += nums[i].textContent;
            VerifyDot();
            
            num2Text.textContent = num2;
            console.log(num2);
        }
    });
}

for (let i = 0; i < operate.length; i++) {
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
        } else {
            operateText.textContent += ` ${operates} `;
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

document.getElementById("plusMinus")?.addEventListener("click", function () {
    num1 = "-" + num1;
    num1Text.textContent = num1;
});

// operates == "+" || operates == "−" || operates == "×" || operates == "÷"