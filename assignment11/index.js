const emp = {
  name: "abc",
  age: 10,
  m_no: 1234564566,
  adress: 25,
};

try {
  throw emp.age / null;
} catch (error) {
  console.log(emp.age / 2);
}
