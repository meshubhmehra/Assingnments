import emp_data from "./emp.json" assert { type: "json" };
function search() {
  return emp_data.filter((e) => e.name.includes("am"));
}
console.log(search());
