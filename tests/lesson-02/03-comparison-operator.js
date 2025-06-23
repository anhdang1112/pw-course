const a = 10;
const b = 11;
const c = "10";

const result = a > b; //false
console.log(result);

const result2 = a === 11; // false
const result3 = a !== 15; // true
console.log(result2);
console.log(result3);

const result4 = a === c; // false
const result5 = a == c; // true
console.log(result4);
console.log(result5);

// === : so sánh chặt (value, kiểu dữ liệu)
// == : CHỈ so sánh value
