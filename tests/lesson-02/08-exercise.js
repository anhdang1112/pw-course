// Bài tập khai báo biến và điều kiện:

// Ex1:
console.log("Bài tập 1: ");
const number = 12;
let name = "my number";
let isEven = false;

if (number % 2 === 0) {
  console.log((isEven = true));
}

// Ex2:
console.log("Bài tập 2: ");
let myName = "Alex";
myName = "Nagi";

console.log(myName);

// Ex3:
console.log("Bài tập 3: ");
const x = 1.2;

if (x > 0) {
  console.log("Giá trị bạn nhập là số dương");
} else if (x < 0) {
  console.log("Giá trị bạn nhập là số âm");
} else {
  console.log("Giá trị bạn nhập là số 0");
}

// Ex4:
console.log("Bài tập 4: ");
let yourHeight = 170;
let y = yourHeight - 100;

console.log(
  "Cân nặng lý tưởng của bạn là: " +
    (y * 9) / 10 +
    "kg" +
    " ; " +
    "Cân nặng tối đa của bạn là: " +
    y +
    "kg" +
    " ; " +
    "Cân nặng tối thiểu của bạn là: " +
    (y * 8) / 10 +
    "kg."
);

// Bài tập vòng lặp:
// Ex5:
console.log("Bài tập 5: ");
for (let z = 0; z <= 100; z++) {
  if (z % 2 === 0) {
    console.log("Số " + z + " là số chẵn");
    console.log("-".repeat(20));
  } else {
    console.log("Số " + z + " là số lẻ");
    console.log("-".repeat(20));
  }
}

// Ex6:
console.log("Bài tập 6: ");
for (let ex6 = 0; ex6 <= 30; ex6++) {
  if ((12 <= ex6) & (ex6 <= 30)) {
    console.log(ex6);
    console.log("-".repeat(20));
  }
}

// Ex7:
console.log("Bài tập 7: ");
for (let ex7 = 0; ex7 <= 2000; ex7++) {
  if ((ex7 % 3 === 0) & (1000 <= ex7) & (ex7 >= 2000)) {
    console.log(ex7);
    console.log("-".repeat(20));
  }
}

// Ex8:
console.log("Bài tập 8: ");
let ex8 = 1;
while (ex8 <= 100) {
  console.log(ex8);
  console.log("-".repeat(20));
  ex8 += 4;
}

// Ex9:
console.log("Bài tập 9: ");
for (let ex9 = 25; (12 <= ex9) & (ex9 <= 25); ex9--) {
  console.log(ex9);
  console.log("-".repeat(20));
}
