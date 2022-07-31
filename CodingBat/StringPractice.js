function helloName(inputString) {
    return "Hello " + inputString + "!";
}

function string1HelloName() {
    let inputString = document.getElementById("string1HelloNameInputString").value;
    let resultString = helloName(inputString);
    document.getElementById("string1HelloNameResult").innerText = resultString;
}
// ------------------------------
// string1MakeAbba
function makeAbba(input1, input2) {
    return input1 + input2 + input2 + input1;
}

function string1MakeAbba() {
    let input1 = document.getElementById("string1MakeAbbaInputString1").value;
    let input2 = document.getElementById("string1MakeAbbaInputString2").value;
    let resultString = makeAbba(input1, input2);
    document.getElementById("string1MakeAbbaResult").innerText = resultString;
}
// -------------------------------
// string1MakeTags
function makeTags(tag, word){
    return "<" + tag + ">" + word + "<" + "/" + tag + ">";
}

function string1MakeTags() {
    let tag = document.getElementById("string1MakeTagsInputString1").value;
    let word = document.getElementById("string1MakeTagsInputString2").value;
    let resultString = makeTags(tag, word);
    document.getElementById("string1MakeTagsResult").innerText = resultString;
}
// -------------------------------
// string1MakeOutWord
function makeOutWord(out, word) {
    return out.substring(0, 2) + word + out.substring(2, 4);// or (2)
}

function string1MakeOutWord() {
    let out = document.getElementById("string1MakeOutWordInputString1").value;
    let word = document.getElementById("string1MakeOutWordInputString2").value;
    let resultString = makeOutWord(out, word);
    document.getElementById("string1MakeOutWordResult").innerText = resultString;
}
// --------------------------
// string1ExtraEnd
function extraEnd(str) {
    let last2 = str.substring(str.length - 2);
    return last2 + last2 + last2;
}

function string1ExtraEnd() {
    let str = document.getElementById("string1ExtraEndInputString").value;
    let resultString = extraEnd(str);
    document.getElementById("string1ExtraEndResult").innerText = resultString;
}
// -----------------------
// string1FirstTwo
function firstTwo(str) {
    if (str.length < 2) {
        return str;
    }
    return str.substring(0, 2);
}

function string1FirstTwo() {
    let str = document.getElementById("string1FirstTwoInputString").value;
    let resultString = firstTwo(str);
    document.getElementById("string1FirstTwoResult").innerText = resultString;
}
// ---------------------
// string1FirstHalf
function firstHalf(str) {
    return str.substring(0, str.length/2);
}

function string1FirstHalf() {
    let str = document.getElementById("string1FirstHalfInputString").value;
    let resultString = firstHalf(str);
    document.getElementById("string1FirstHalfResult").innerText = resultString;
}
// -------------------
// string1WithoutEnd
function withoutEnd(str) {
    return str.substring(1, str.length - 1);
}

function string1WithoutEnd() {
    let str = document.getElementById("string1WithoutEndInputString").value;
    let resultString = withoutEnd(str);
    document.getElementById("string1WithoutEndResult").innerText = resultString;
}
// --------------------
// string1ComboString
function comboString(a, b) {
    if (a.length < b.length) {
        return a + b + a;
    } else {
        return b + a + b;
    }
}

function string1ComboString() {
    let a = document.getElementById("string1ComboStringInputString1").value;
    let b = document.getElementById("string1ComboStringInputString2").value;
    let resultString = comboString(a, b);
    document.getElementById("string1ComboStringResult").innerText = resultString;
}
// ------------------
// string1ComboString
function nonStart(a, b) {
    return a.substring(1, a.length) + b.substring(1, b.length);// or string.substring(1)
}

function string1NonStart() {
    let a = document.getElementById("string1NonStartInputString1").value;
    let b = document.getElementById("string1NonStartInputString2").value;
    let resultString = nonStart(a, b);
    document.getElementById("string1NonStartResult").innerText = resultString;
}
// ---------------------
// string1Left2
function left2(str) {
    return str.substring(2) + str.substring(0, 2);
}

function string1Left2() {
    let str = document.getElementById("string1Left2InputString").value;
    let resultString = left2(str);
    document.getElementById("string1Left2Result").innerText = resultString;
}
// ----------------
// string1Right2
function right2(str) {
    return str.substring(str.length - 2) + str.substring(0, str.length - 2);
}

function string1Right2() {
    let str = document.getElementById("string1Right2InputString").value;
    let resultString = right2(str);
    document.getElementById("string1Right2Result").innerText = resultString;
}
// -------------------
// string1TheEnd
function theEnd(str, front) {
    if (front === "true") {
        return str.substring(0, 1);
    } else {
        return str.substring(str.length - 1);
    }
}

function string1TheEnd() {
    let str = document.getElementById("string1TheEndInputString1").value;
    let front = document.getElementById("string1TheEndInputString2").value;
    let resultString = theEnd(str, front);
    document.getElementById("string1TheEndResult").innerText = resultString;
}
// --------------------
// string1WithoutEnd2
function withoutEnd2(str) {
    if (str.length <= 2) {
        return "";
    }

    return str.substring(1, str.length - 1);
}

function string1WithoutEnd2() {
    let str = document.getElementById("string1WithoutEnd2InputString").value;
    let resultString = withoutEnd2(str);
    document.getElementById("string1WithoutEnd2Result").innerText = resultString;
}
// ------------------
// string1MiddleTwo
function middleTwo(str) {
    return str.substring(((str.length)/2)-1,((str.length)/2)+1);
}

function string1MiddleTwo() {
    let str = document.getElementById("string1MiddleTwoInputString").value;
    let resultString = middleTwo(str);
    document.getElementById("string1MiddleTwoResult").innerText = resultString;
}
// ------------------------
// string1EndsLy
function endsLy(str) {
    if (str.substring(str.length - 2) === "ly") {
        return "true";
    } else {
        return "false";
    }// Java: if (str.length() >= 2 && str.substring(str.length()-2).equals("ly")) {
             // return true;
           // }
            //return false;
}

function string1EndsLy() {
    let str = document.getElementById("string1EndsLyInputString").value;
    let resultString = endsLy(str);
    document.getElementById("string1EndsLyResult").innerText = resultString;
}
// ----------------------
// string1NTwice
function nTwice(str, n) {
    return str.substring(0, n) + str.substring(str.length - n);
}

function string1NTwice() {
    let str = document.getElementById("string1NTwiceInputString1").value;
    let n = document.getElementById("string1NTwiceInputString2").value;
    let resultString = nTwice(str, Number(n));
    document.getElementById("string1NTwiceResult").innerText = resultString;
}
// -------------------
// string1TwoChar
function twoChar(str, index) {
    if (index + 2 > str.length || index < 0) {
        return str.substring(0, 2);
    }
    return str.substring(index, index + 2);
}

function string1TwoChar() {
    let str = document.getElementById("string1TwoCharInputString1").value;
    let index = document.getElementById("string1TwoCharInputString2").value;
    let resultString = twoChar(str, Number(index));
    document.getElementById("string1TwoCharResult").innerText = resultString;
}
// ----------------------
// string1MiddleThree
function middleThree(str) {

}

function string1MiddleThree() {
    let str = document.getElementById("string1MiddleThreeInputString").value;
    let resultString = middleThree(str);
    document.getElementById("string1MiddleThreeResult").innerText = resultString;
}
// ----------------------------
// string1HasBad
function hasBad(str) {
    if (str.substring(0, 3) === "bad" || str.substring(1, 4) === "bad") {
        return "true";
    } else {
        return "false";
    }
}
//or: (str.length() >= 3 && str.substring(0, 3).equals("bad")) ||
//    (str.length() >= 4 && str.substring(1, 4).equals("bad"))

function string1HasBad() {
    let str = document.getElementById("string1HasBadInputString").value;
    let resultString = hasBad(str);
    document.getElementById("string1HasBadResult").innerText = resultString;
}