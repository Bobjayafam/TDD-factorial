const computeFactorial = number => {
  if (typeof number !== "number") {
    return "undefined";
  } else if (number < 0) {
    return "undefined";
  } else {
    let factorial = 1;
    for (let i = number; i > 0; i--) {
      factorial *= i;
    }
    return factorial;
  }
};

export default computeFactorial;
