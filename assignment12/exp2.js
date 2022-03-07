//Create another promisified function that sorts this employee list from above response by name. Chain it to above promise

let arr = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let emp = [
        {
          name: "Shreya",
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
          name: "dha",
          age: 20,
          city: "indore",
        },
      ];
      const compare = (a, b) => {
        if (a["name"] < b["name"]) {
          return -1;
        } else if (a["name"] > b["name"]) {
          return 1;
        } else {
          return 0;
        }
      };
      if (Array.isArray(emp)) {
        const newArr = emp.sort(compare);
        resolve(newArr);
      } else {
        reject("Not an Array");
      }
    }, 2000);
  });
};
arr().then((data) => {
  console.log(data);
});
