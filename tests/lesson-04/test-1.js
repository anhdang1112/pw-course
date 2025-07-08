// Chapter 1
let departurePlanet = "Trái Đất";
let mission = "Khám phá vũ trụ K11";
const crew = ["Tuan Anh", "Tra", "Nguyen"];
function launchShip(person) {
  return (
    "Chuẩn bị khởi động! Phi hành đoàn gồm: " +
    person +
    " sẽ đồng hành cùng bạn trong chuyến phiêu lưu " +
    mission +
    " !"
  );
}

let welcomeMessage = launchShip(crew);
console.log(welcomeMessage);

// Chapter 2
function calculateDistance(speed, time) {
  let dist = speed * time;
  return dist;
}
let spacecraftSpeed = 1000;
let flyTime = 24;
let distance = calculateDistance(spacecraftSpeed, flyTime);
console.log(distance);

// Chapter 3
function convertTimeToHex(decTime) {
  let hexadecimalNumber = decTime.toString(16);
  return hexadecimalNumber;
}
let decTime = 120;
console.log(convertTimeToHex(decTime));

// Chapter 4
function decryptCode(code) {
  let newCode = "";
  for (let element of code) {
    if (element !== element.toLowerCase()) {
      element = element.toLowerCase();
    } else {
      element = element.toUpperCase();
    }
    newCode += element;
  }
  return newCode;
}

let pass = "K11 Challenge";
let passWord = decryptCode(pass);
console.log(passWord);

// Chapter 5
function returnToEarth() {
  return "Chuẩn bị trở về trái đất!";
}
console.log(returnToEarth());
