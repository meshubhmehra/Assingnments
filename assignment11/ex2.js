function printNumbers(m, n) {
  for (let i = m; i <= n; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 100);
  }
}
printNumbers(20, 40);
