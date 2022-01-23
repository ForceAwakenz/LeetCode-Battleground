// https://leetcode.com/problems/plus-one/

/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.
*/

// faster than 11.34%
// Memory Usage less than 69.54%

// function plusOne(digits: number[]): number[] {
//     return addOne(digits, digits.length - 1);
// }

// function addOne(arr: number[], index: number): number[] {
//     if (arr[index] === 9) {
//         if (index === 0) {
//             arr[index] = 0;
//             arr.unshift(1);
//             return arr;
//         } else {
//             arr[index] = 0;
//             return addOne(arr, index - 1);
//         }
//     } else {
//         arr[index]++;
//         return arr;
//     }
// }


// faster than 61.76%
// Memory Usage: 40.7 MB, less than 24.79% 

// function plusOne(digits: number[]): number[] {
//     let plusOnePoint = 0;
//     for (let i = digits.length - 1; i >= 0; i--) {
//         if (digits[i] === 9) {
//             digits[i] = 0;
//             plusOnePoint++;
//         } else {
//             break;
//         }
//     }
//     if (digits.length - 1 - plusOnePoint === -1) {
//         digits.unshift(1);
//     } else {
//         digits[digits.length - 1 - plusOnePoint]++;
//     }
//     return digits;
// }

// ================== Forum solutions

// The idea here is that we add 1 to every point regardless
// then every 10 we turn into 0
// the time we face with non-10 - we return the array
// if we face only 10s, we add a 1 at start of the array
// // Interesting idea to split logic into returning array
// // in case of non-10 first number, and going to further branch otherwise.
// // Downsides: we add 1 to every array element and then check if the element
// // is bigger then 10. It's too much of redundant work on 99999999-like arrays
// // since we execute two actions instead of one

// function plusOne(digits: number[]) {
//     for (var i = digits.length - 1; i >= 0; i--) {
//         digits[i]++;
//         if (digits[i] > 9) {
//             digits[i] = 0;
//         } else {
//             return digits;
//         }
//     }
//     digits.unshift(1);
//     return digits;
// }


// This soulution asks at first: if it's a non-9 number?
// If it is, we just add 1 and return
// If not, we make current element 0, until next elemen is non-9
// If every element is 9 we never return an array from the loop
// and go further in code to add 1 at start
// //

function plusOne(digits: number[]) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++
            return digits
        }

        digits[i] = 0
    }
    digits.unshift(1)
    return digits
};