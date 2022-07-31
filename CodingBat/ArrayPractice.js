let firstLast6Input = [13, 6, 1, 2, 3];
function array1FirstLast6Logic(input) {
    if (input[0] === 6 || input[input.length - 1] === 6) {
        return true;
    }
    return false;
}
function array1FirstLast6() {
    document.getElementById("Array1FirstLast6Result").innerText = array1FirstLast6Logic(firstLast6Input);
}
// ---------------------
// array1SameFirstLast
let sameFirstLastNums = [];
function array1SameFirstLastLogic(nums) {
    if (nums.length >= 1 && nums[0] === nums[nums.length - 1]) {
        return true;
    }
    return false;
}
function array1SameFirstLast() {
    document.getElementById("Array1SameFirstLastResult").innerText = array1SameFirstLastLogic(sameFirstLastNums);
}
// ---------------------
// array1MakePi
let makePi = [3, 1, 4];
function array1MakePi() {
    document.getElementById("Array1MakePiResult").innerText = makePi;
}
// Java:
// public int[] makePi() {
//   int[] pi = {3, 1, 4};
//   return pi;
// }
// --------------------
// array1commonEnd
let commonEnd1 = [1, 2, 3];
let commonEnd2 = [7, 3, 2];
function array1CommonEndLogic(commonEnd1, commonEnd2) {
    if (commonEnd1[commonEnd1.length - 1] === commonEnd2[commonEnd2.length - 1] || commonEnd1[0] === commonEnd2[0]) {
        return true;
    }
    return false;
}
function array1CommonEnd() {
    document.getElementById("Array1CommonEndResult").innerText = array1CommonEndLogic(commonEnd1, commonEnd2);
}
// -------------------------
// array1Sum3
let sum3 = [1, 2, 3];
function array1Sum3Logic(sum3) {
    return sum3[0] + sum3[1] + sum3[2];
}
function array1Sum3() {
    document.getElementById("Array1Sum3Result").innerText = array1Sum3Logic(sum3);
}
// ------------------
// array1RotateLeft3
let rotateLeft3 = [1, 2, 3];
function array1RotateLeft3Logic(rotateLeft3) {
    let result = [rotateLeft3[1], rotateLeft3[2], rotateLeft3[0]];
    console.log(result);
    return result;
}
// Java:
// int[] result = {nums[1], nums[2], nums[0]};
// return result;
function array1RotateLeft3() {
    document.getElementById("Array1RotateLeft3Result").innerText = array1RotateLeft3Logic(rotateLeft3);
}
// --------------------
// array1Reverse3
let reverse3 = [7, 0, 0];
function array1Reverse3Logic(reverse3) {
    let result = [reverse3[2], reverse3[1], reverse3[0]];
    return result;
}
function array1Reverse3() {
    document.getElementById("Array1Reverse3Result").innerText = array1Reverse3Logic(reverse3);
}
// -------------------------
// array1MaxEnd3
let maxEnd3 = [2, 11, 3];
function array1MaxEnd3Logic(maxEnd3) {
    if (maxEnd3[0] > maxEnd3[2]) {
        let result = [maxEnd3[0], maxEnd3[0], maxEnd3[0]];
        return result;
    } else if (maxEnd3[2] > maxEnd3[0]) {
        let other = [maxEnd3[2], maxEnd3[2], maxEnd3[2]];
        return other;
    }
}
// Java:
// public int[] maxEnd3(int[] nums) {
//   int max = Math.max(nums[0], nums[2]);
//   nums[0] = max;
//   nums[1] = max;
//   nums[2] = max;
//   return nums;
//
//   // Solution notes: you could write if-logic to figure out
//   // which element is the biggest, but here we use Math.max()
//   // to solve that part nicely.
// }
// Another Way:
// int max = nums[2];
//   if (nums[0] > nums[2]) {
//     max = nums[0];
//   }
//   int[] result = {max, max, max};
//   return result;
// int[] is used for arrays & int for single values.
function array1MaxEnd3() {
    document.getElementById("Array1MaxEnd3Result").innerText = array1MaxEnd3Logic(maxEnd3);
}
// --------------------
// array1Sum2
let sum2 = [1, 1, 1, 1];
function array1Sum2Logic(sum2) {
    if (sum2.length >= 2) {
        return sum2[0] + sum2[1];
    } else if (sum2.length === 1) {
        return sum2[0];
    }
    return 0;
}
function array1Sum2() {
    document.getElementById("Array1Sum2Result").innerText = array1Sum2Logic(sum2);
}
// ---------------------
// array1MiddleWay
let middleWay1 = [5, 2, 9];
let middleWay2 = [1, 4, 5];
function array1MiddleWayLogic(middleWay1, middleWay2) {
    let result = [middleWay1[1], middleWay2[1]];
    return result;
}
function array1MiddleWay() {
    document.getElementById("Array1MiddleWayResult").innerText = array1MiddleWayLogic(middleWay1, middleWay2);
}
// --------------------
// array1MakeEnds
let makeEnds = [1, 2, 3];
function array1MakeEndsLogic(makeEnds) {
    let result = [makeEnds[0], makeEnds[makeEnds.length - 1]];
    return result;
}
function array1MakeEnds() {
    document.getElementById("Array1MakeEndsResult").innerText = array1MakeEndsLogic(makeEnds);
}
// ---------------------
// array1Has23
let has23 = [3, 5];
function array1Has23Logic(has23) {
    if (has23[0] === 2 || has23[0] === 3 || has23[1] === 2 || has23[1] === 3) {
        return true;
    }
    return false;
}
function array1Has23() {
    document.getElementById("Array1Has23Result").innerText = array1Has23Logic(has23);
}
// ---------------------
// array1No23
let no23 = [4, 2];
function array1No23Logic(nums) {
    if (nums[0] !== 2 && nums[0] !== 3 && nums[1] !== 2 && nums[1] !== 3) {
        return true;
    }
    return false;
}
function array1No23() {
    document.getElementById("Array1No23Result").innerText = array1No23Logic(no23);
}
// --------------------
// array1MakeLast
let makeLast = [4, 5, 6];
function array1MakeLastLogic(nums) {
    return nums; // Have not finished yet.
}
function array1MakeLast() {
    document.getElementById("Array1MakeLastResult").innerText = array1MakeLastLogic(makeLast);
}
// -----------------------
cars = ["Saab", "Volvo", "BMW"];
var cars;

console.log(cars[0]);

const car = ["Volvo", "BMW"];   // Allowed
console.log(car);
{
    const car = ["Honda", "Chevrolet"]; // Allowed
    console.log(car);

}
{
    const car = ["Subaru", "Toyota"]; // Allowed
    console.log(car);
}
//
let nothing = [1, 2, 3]
//if (nothing[0] !== 1)