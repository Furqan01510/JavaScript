function sumOfEven(n, sum) {

  for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  console.log(sum);
}

sumOfEven(6,0);