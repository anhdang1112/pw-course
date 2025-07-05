// Bai tap 1
// const arr = [1, 2, 3, 4, 3, 55, 23];
// const value = 3;

// let firstIndex = -1;
// let lastIndex = -1;
// let i = 0;

// for (let item of arr) {
//   if (item === value) {
//     if (firstIndex === -1) {
//       firstIndex = i;
//     }
//     lastIndex = i;
//   }
//   i++;
// }

// if (firstIndex !== -1) {
//   console.log(`Vị trí đầu tiên của ${value} là: ${firstIndex}`);
//   console.log(`Vị trí cuối cùng của ${value} là: ${lastIndex}`);
// } else {
//   console.log(`Không tìm thấy giá trị ${value} trong mảng.`);
// }

// // Bai tap 2
// const arrText = "Playwright";
// let newArrText = [];
// let newArrTextReverse = [];
// for (let i = 0; i < arrText.length; i++) {
//   newArrText.push(arrText[i]);
// }
// newArrText = newArrText.reverse();
// console.log(newArrText);

// Cach 2 - dai hơn, k toi ưu bang
// for (let i = newArrText.length - 1; i >= 0; i--) {
//   newArrTextReverse.push(newArrText[i]);
// }
// console.log(newArrTextReverse);

// Bai tap 3
const arr = [1, 2, 3, 1, 2, 4, 5];
let count = {};

arr.forEach((element) => {
  count[element] = (count[element] || 0) + 1;
});
//console.log(count);

const arrUnique = arr.filter((element) => count[element] === 1);
console.log(arrUnique);
