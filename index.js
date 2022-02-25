import emp_data from "./emp.json" assert { type: "json" };

// emp_data.forEach((e, index) => {
//   e["id"] = index + 1;
// });

// console.log(emp_data);

// Search by am

function search() {
  return emp_data.filter((e) => e.name.includes("am"));
}
console.log(search());
