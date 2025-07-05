const student = {
  name: "Alex",
  age: 30,
  salary: 50,
};

//1
for (let key in student) {
  console.log(`${key} = ${student[key]}`);
}

//2
let sumNumber = 0;
for (let property in student) {
  if (!isNaN(student[property])) {
    sumNumber = sumNumber + parseInt(student[property]);
  }
}
console.log(sumNumber);

//3
let newStudent = [];
for (let key in student) {
  newStudent.push(key);
}
console.log(newStudent);
