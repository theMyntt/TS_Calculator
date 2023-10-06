const nums: any = document.getElementsByClassName("num") as HTMLCollectionOf<HTMLButtonElement>;
const operate: any = document.getElementsByClassName("operations") as HTMLCollectionOf<HTMLButtonElement>;
const operationResult: any = document.getElementById("operationResult") as HTMLParagraphElement;
const finalResult: any = document.getElementById("final") as HTMLButtonElement;
const percentBtn: any = document.getElementById("percentBtn") as HTMLButtonElement;

let num1: string = "";
let num2: string = "";
let operates: string = "";
let verify: number = 0;

var screenCalc: string;
var result: number = 0;
var _temp;

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


percentBtn.addEventListener("click", function() {
    result = operation.percent(parseFloat(num1));
    operationResult.textContent = result;
    num1 = result.toString();
});

for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener("click", function () {
        if (verify % 2 == 0) {
            // VerifyDot(0);
            num1 += nums[i].textContent;
            
            operationResult.textContent = num1;
            console.log(num1);
        } else {
            // VerifyDot(1);
            num2 += nums[i].textContent;
            let lastNumber = num2.slice(-1);
            operationResult.textContent += lastNumber;
            console.log(num2);
        }
    });
}

for (let i = 0; i < operate.length; i++) {
    operate[i].addEventListener("click", function () {
        operates = operate[i].textContent;
        if (operates == "C") {
            operationResult.textContent = "";
            num1 = "";
            num2 = "";
            verify = 0;
        } 
        else if (operates == "%") {
            verify++;
        } else {
            operationResult.textContent += operates;
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

        }
    }
});

document.getElementById("plusMinus")?.addEventListener("click", function () {
    num1 = "-" + num1;
    operationResult.textContent = num1;
});

// operates == "+" || operates == "−" || operates == "×" || operates == "÷"