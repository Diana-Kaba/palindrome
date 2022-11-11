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

function checkPalindrome(val) {
  let str = val.toLowerCase();
  str = str.replaceAll(" ", "");
  str = str.replaceAll(",", "");
  str = str.replaceAll("—", "");
  let arrStr = str.split("");
  arrStr.reverse();
  let reversedStr = arrStr.join("");
  //   if (reversedStr != str) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // let bool = reversedStr == str;
  return reversedStr == str;
}

console.log(arr.filter(checkPalindrome));
