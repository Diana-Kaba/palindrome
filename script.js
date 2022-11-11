"use strict";
let arr = [
  "А роза упала на лапу Азора",
  "Ого",
  "А Собака боса",
  "Привет, мир",
  "А Собака боса",
  "Лёша на полке клопа нашёл",
  "Я — арка края",
];

let pals = [];
function checkPalindrome(arr) {
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i].toLowerCase();
    str = str.replaceAll(" ", "");
    str = str.replaceAll(",", "");
    str = str.replaceAll("—", "");
    console.log(str);
    let arrStr = str.split("");
    arrStr.reverse();
    let reversedStr = arrStr.join("");
    console.log(reversedStr);
    if (str == reversedStr) {
      pals.push(arrStr);
    }
    return str;
  }
}

checkPalindrome(arr);
