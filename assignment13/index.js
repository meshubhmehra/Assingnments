const emp_data = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const emp = [
        {
          name: "shubham",
          city: "bhopal",
          age: 25,
        },
        {
          name: "shreya",
          city: "indore",
          age: 22,
        },
        {
          name: "Rahul",
          city: "pune",
          age: 27,
        },
        {
          name: "shreya",
          city: "indore",
          age: 22,
        },
      ];
      resolve(emp);
    }, 2000);
  });
};

async function getData() {
  const data = await emp_data();
  console.log(data);
}
getData();
