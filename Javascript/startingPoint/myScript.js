var x = 10;
console.log(x);

function bipra(a, b) {
    var sum = 0;
    sum = a + b;
    return sum;
}

function binit(a, b) {
    return a - b;
}

var total = bipra(10, 20);
console.log(total);

console.log(binit(30, 12));

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
function doMath(number1,number2,callback) {
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
    doMath(5,2,multiplyThem);
    doMath(10,3,divideThem);
    doMath(81,9,modThem);
},false);