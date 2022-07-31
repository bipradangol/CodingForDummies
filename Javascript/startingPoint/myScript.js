var x = 10;
console.log(x);

function bipadd(a, b) {
    var sum = 0;
    sum = a + b;
    return sum;
}

function binsub(a, b) {
    return a - b;
}

var total = bipadd(10, 20);
console.log(total);

console.log(binsub(30, 12));

function sayHi(name) {
    console.log('Hi ' + name);
}

sayHi('Bipra');

sayHi('there')

sayHi();

function doMath(number1,number2,callback) {
    var result = callback(number1,number2);
    document.getElementById("theResult").innerHTML += ("The result is: " + result + "<br>");
}

document.addEventListener('DOMContentLoaded', function() {

    doMath(5, 2, function (number1, number2) {
        var calculation = number1 * number2;
        return calculation;
    }
    );

    doMath(10, 3, function (number1, number2) {
        var calculation = number1 / number2;
        return calculation;
    })
    doMath(81, 9, function (number1, number2) {
        var calculation = number1 % number2;
        return calculation;
    });
}, false);

//doMath with Named Functions
function doMath2(number1,number2,callback) {
    if (typeof callback === "function") {

        var result = callback(number1,number2);
        document.getElementById("theResult2").innerHTML += (callback.toString() + "<br> <br>The result is: " + result + "<br> <br>");
    }
}

function multiplyThem(number1,number2) {
    var calculation = number1 * number2;
    return calculation;
}
function divideThem(number1,number2) {
    var calculation = number1 / number2;
    return calculation;
}
function modThem(number1,number2) {
    var calculation = number1 % number2;
    return calculation;
}
document.addEventListener('DOMContentLoaded', function() {
    doMath2(5,2,multiplyThem);
    doMath2(10,3,divideThem);
    doMath2(81,9,modThem);
},false);

function add(){
    doMath2(5, 2, function (number1, number2) {
            var calculation = number1 + number2;
            return calculation;
        }
    );
}

function del() {
    document.getElementById("theResult").innerHTML = "";
    document.getElementById("theResult2").innerHTML = "";
}

function changeBackground() {
    colors = ["red", "green", "blue"];
    var randomNumber = Math.floor(Math.random()*colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
}

function addTwoNumbers() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = Number(num1) + Number(num2);
    document.getElementById("result1").value = result;
    console.log(result);
}

function subtractTwoNumbers() {
    var num1 = document.getElementById("numSub1").value;
    var num2 = document.getElementById("numSub2").value;
    var result = Number(num1) - Number(num2);
    document.getElementById("result2").value = result;
    console.log(result);
}

function addUp() {
    var inputString = document.getElementById("input").value;
    var input = Number(inputString);
    var sum = 0;
    for (let i = 1; i <= input; i++) {
        sum = sum + i;
    }
    document.getElementById("answer").value = sum;
}

function findFibonacciNum() {
    var inputOriginal = document.getElementById("insertNum").value;
    var input = Number(inputOriginal);

    var fibNum = getFibNumber(input);
    console.log(fibNum);
}

function getFibNumber(input) {
    var first = 0;
    var second = 1;
    var fibonacci = 0;
    if (input === 1) {
        return 0;
    } else if (input === 2) {
        return 1;
    } else {
        for (let i = 3; i <= input; i++) {
            fibonacci = first + second;
            first = second;
            second = fibonacci;
        }
    }
    return fibonacci;
}