// Bai tap 1:

const { Console } = require("console");

function getBMI(weight, height) {
  let bmiFormula = weight / (height * height);

  if (bmiFormula < 18.5) {
    return console.log("Thiếu cân");
  } else if (bmiFormula < 25) {
    return console.log("Bình thường");
  } else if (bmiFormula < 30) {
    return console.log("Thừa cân");
  } else {
    return console.log("Béo phì");
  }
}

let yourBMI = getBMI(65, 1.75);

// Bai tap 2:

function temperatureExchange(temperature, tempType) {
  let exchangeFromCToF = (temperature * 9) / 5 + 31;
  let exchangeFromFToC = ((temperature - 32) * 5) / 9;

  if (tempType === "F") {
    console.log("Nhiệt độ: " + exchangeFromFToC);
  } else if (tempType === "C") {
    console.log("Nhiệt độ: " + exchangeFromCToF);
  } else {
    console.log("Loại nhiệt độ bạn nhập vào không hợp lệ");
  }
}

let getTemperature = temperatureExchange(85, "F");

// Bai tap 3:
let arr = [1, 3, 6, 9];
let total = 0;
for (let i = 0; i < arr.length; i++) {
  total += arr[i];
}
console.log(total);

// Bai tap 4:

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function getPrimeNumbers(arr2) {
  return arr2.filter(isPrime);
}

let arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

console.log(
  "Các số sau là số nguyên tố : " + (primeNumber = getPrimeNumbers(arr2))
);

// Cach 2:

function isPrime2(n) {
  if (n < 2) {
    return false;
  }
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
      if (count >= 3) {
        return false;
      }
    }
  }
  return true;
}

function getPrimeNumbers2(arr) {
  return arr.filter(isPrime2);
}

let arr3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

console.log(
  "Các số sau là số nguyên tố : " + (primeNumber2 = getPrimeNumbers2(arr3))
);

// Bai tap 5:

const listUser = [
  {
    name: "Tuan Anh",
    email: "email",
  },
  {
    name: "Cristiano",
    email: "email2",
  },
  {
    name: "Lionel",
    email: "email3",
  },
];

function replaceEmail(name, newEmail) {
  for (let i = 0; i < listUser.length; i++) {
    if (name === listUser[i].name) {
      return "Name :" + " " + name + " " + (listUser[i].name = newEmail);
    }
  }
}

console.log((userUpdated = replaceEmail("Lionel", "updatedEmail")));

// Bai tap 6:

const studentScore = [
  { name: "Alex", score: 85 },
  { name: "Cris", score: 70 },
  { name: "Leo", score: 96 },
  { name: "Brooklin", score: 91 },
  { name: "Saw", score: 85 },
];

function getGPA(n) {
  let gpa = 0;
  let count = 0;
  for (let i = 0; i < n.length; i++) {
    if (studentScore[i].score != NaN) {
      gpa += studentScore[i].score;
      count++;
    }
  }
  return (gpa = gpa / count);
}

console.log((studentsGPA = getGPA(studentScore)));

// Bai tap 7:

const productPrice = [
  { name: "product1", price: 100 },
  { name: "product2", price: 1 },
  { name: "product3", price: 30 },
  { name: "product4", price: 10 },
  { name: "product5", price: 500 },
];

function checkProductPrice(n) {
  for (let i = 0; i < n.length; i++) {
    if (n[i].price <= 0) {
      return false;
    }
  }
  return true;
}

const getResult = checkProductPrice(productPrice);
console.log(getResult);

// Cách làm khác ngắn gọn hơn dùng arrow function (search)

const productPrice2 = [
  { name: "product1", price: 100 },
  { name: "product2", price: 0 },
  { name: "product3", price: 30 },
  { name: "product4", price: 10 },
  { name: "product5", price: 500 },
];

function checkProductPrice2(n) {
  return n.every((product) => product.price > 0);
}
const getResult2 = checkProductPrice(productPrice2);
console.log(getResult2);

// Bai tap 8:

function getOpenTime(time) {
  if (9 <= time && time <= 21) {
    return "Cửa hàng đang mở cửa";
  } else return "Cửa hàng đã đóng cửa";
}

const checkOpenTime = getOpenTime(10);
console.log(checkOpenTime);

// Bai tap 9:
function getFee(age) {
  if (age <= 5) {
    return "Giá vé: 0đ";
  } else if (6 <= age && age <= 17) {
    return "Giá vé: 50k";
  } else if (age >= 18) {
    return "Giá vé: 100k";
  } else {
    return "Vui lòng nhập 1 số.";
  }
}

const checkFee = getFee("a");
console.log(checkFee);

// Bai tap 10:
function getMonth(month) {
  switch (month) {
    case 1:
      return "Jan";
      break;
    case 2:
      return "Feb";
      break;
    case 3:
      return "Mar";
      break;
    case 4:
      return "Apr";
      break;
    case 5:
      return "May";
      break;
    case 6:
      return "Jun";
      break;
    case 7:
      return "Jul";
      break;
    case 8:
      return "Aug";
      break;
    case 9:
      return "Sep";
      break;
    case 10:
      return "Oct";
      break;
    case 11:
      return "Nov";
      break;
    case 12:
      return "Dec";
      break;

    default:
      return "Vui lòng nhập một tháng.";
      break;
  }
}

const checkMonth = getMonth(2);
console.log(checkMonth);

// Bai tap 11:
function getRank(grade) {
  if (grade < 5) {
    return "Xếp loại Yếu";
  } else if (5 <= grade && grade <= 6.5) {
    return "Xếp loại Trung Bình";
  } else if (6.5 <= grade && grade < 8) {
    return "Xếp loại Khá";
  } else if (grade >= 8) {
    return "Xếp loại Giỏi";
  } else {
    return "Vui lòng nhập điểm số đúng.";
  }
}

const checkRank = getRank(8);
console.log(checkRank);

// Bai tap 12:
function getWeatherState(temperature) {
  if (temperature < 20) {
    return "Trời lạnh";
  } else if (20 <= temperature && temperature < 30) {
    return "Trời mát";
  } else if (temperature >= 30) {
    return "Trời nóng";
  } else {
    return "Vui lòng nhập một số.";
  }
}

const checkWeatherState = getWeatherState(NaN);
console.log(checkWeatherState);
