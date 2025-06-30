// Bai tap 1:
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021,
};
console.log(car.year);

// Bai tap 2:
const person = {
  name: "Tuan Anh",
  address: {
    street: "Cau Giay",
    city: "Ha Noi",
    country: "Viet Nam",
  },
};
console.log(person.address.street);

// Bai tap 3:
const student = {
  name: "Student 1",
  grade: {
    math: 9,
    english: 8,
  },
};
console.log(student.grade["math"]);

// Bai tap 4:
const product = {
  product1: "$123",
  product2: "$100",
  product3: "$201",
};
for (let key in product) {
  console.log(key + " = " + product[key]);
}

// Bai tap 5:
const settings = {
  volume: 15,
  brightness: 90,
};
settings.volume = 20;
console.log(settings["volume"]);

// Bai tap 6:
const bike = {};
bike.color = "White";

// Bai tap 7:
const employee = {
  name: "",
  age: "",
};
delete employee.age;

// Bai tap 8:
const school = {
  classA: ["An", "Bình", "Châu"],
  classB: ["Đào", "Hương", "Giang"],
};
