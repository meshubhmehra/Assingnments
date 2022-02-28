const Employees = require("./emp");

const employeeArray = [
  {
    id: 1,
    name: "vinod",
    age: 20,
    salary: 51000,
  },
  {
    id: 2,
    name: "naman",
    age: 26,
    salary: 720000,
  },
  {
    id: 3,
    name: "shreya",
    age: 25,
    salary: 520000,
  },
  {
    id: 4,
    name: "vgf",
    age: 53,
    salary: 720000,
  },
];

var obj = new Employees(employeeArray);

let sortedArray = obj.sortEmployees("name", "<");
console.log(sortedArray);

sortedArray = obj.sortEmployees("name", ">");
console.log(sortedArray);

let filteredArray = obj.filterByAge("=", 20);
console.log(filteredArray);

filteredArray = obj.filterByAge("<", 50);
console.log(filteredArray);
