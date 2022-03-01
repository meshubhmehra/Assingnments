const char = "aasssdassddfgd";
const obj = {};
for (let i = 0; i < char.length; i++) {
  const ch = char[i];
  if (!obj[ch]) {
    obj[ch] = 0;
  }
  obj[ch]++;
}

let set = new Set();
set.forEach((e) => {
  set.add(e);
});

const string = [...new Set([...char])].join("");

console.log(obj);
console.log(string);
