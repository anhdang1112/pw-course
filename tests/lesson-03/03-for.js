// Bai tap 1:
let total = 0;
for (let i = 1; i <= 100; i++) {
  total += i;
}

const x = total;
console.log(x);

// Bai tap 2:

for (let i = 1; i <= 9; i++) {
  console.log("-".repeat(20));
  console.log("Bảng cửu chương " + i);
  for (let j = 1; j <= 10; j++) {
    console.log(i + " x " + j + " = " + i * j);
  }
}
// Bai tap 3:

const oddNum = [];
for (let i = 1; i <= 99; i++) {
  if (i % 2 != 0) {
    oddNum.push(i);
  }
}
console.log(oddNum);

// Bai tap 4:
for (let i = 0; i < 10; i++) {
  console.log("tuna" + i + "@example.com");
}

// Bai tap 5:

const rev2025 = [
  { month: 1, total: 100 },
  { month: 2, total: 300 },
  { month: 3, total: 190 },
  { month: 4, total: 200 },
  { month: 5, total: 310 },
  { month: 6, total: 250 },
  { month: 7, total: 300 },
  { month: 8, total: 260 },
  { month: 9, total: 400 },
  { month: 10, total: 450 },
  { month: 11, total: 500 },
  { month: 12, total: 700 },
];

function getTotalRev(arr) {
  let rev = 0;
  for (let i = 0; i < arr.length; i++) {
    rev += arr[i].total;
  }
  return rev;
}

const checkTotalRev = getTotalRev(rev2025);
console.log(checkTotalRev);
