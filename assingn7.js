let emp = [
  (emp1 = {
    name: "vinod",
    email: "vinod@gmail.com",
    age: 26,
    address: "indore",
    phone_no: "1234567890",
    gender: "male",
    is_married: "no",
  }),
  (emp2 = {
    name: "rakesh",
    email: "rakesh@gmail.com",
    age: 42,
    address: "indore",
    phone_no: "535356564",
    gender: "male",
    is_married: "no",
  }),
  (emp3 = {
    name: "shreya",
    email: "shreya@gmail.com",
    age: 25,
    address: "pune",
    phone_no: "464224842",
    gender: "female",
    is_married: "no",
  }),
  (emp4 = {
    name: "krishna",
    email: "abc@gmail.com",
    age: 50,
    address: "bhopal",
    phone_no: "5459911545",
    gender: "male",
    is_married: "no",
  }),
  (emp5 = {
    name: "Laxman",
    email: "abc@gmail.com",
    age: 51,
    address: "nasik",
    phone_no: "666464125",
    gender: "male",
    is_married: "no",
  }),
];

const newemp = emp.filter((e) => {
  return e.age >= 50;
});

console.log(newemp);
