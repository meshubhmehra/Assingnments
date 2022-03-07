let emp = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let emp = [
        {
          name: "Dhanush",
          age: 20,
          city: "indore",
        },
        {
          name: "Rishi",
          age: 24,
          city: "Bhopal",
        },
        {
          name: "Yash",
          age: 26,
          city: "Pune",
        },
        {
          name: "Shreya",
          age: 20,
          city: "indore",
        },
      ];
      if (Array.isArray(emp)) {
        resolve(emp);
      } else {
        reject("Not an array");
      }
    }, 2000);
  });
};

emp()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
