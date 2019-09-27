module.exports = function zeros(expression) {
  // Functions
  const getTwosAndFives = multiplier => {
    const integer = Number(multiplier.replace(/!/g, ''));
    return multiplier.includes('!!') ? factorial(integer, 2) : factorial(integer, 1);
  }
  const factorial = (number, step) => {
    let five = 0;
    let two = 0;

    for (let i = number; i > 1; i -= step) {
      number = i;
      while (number % 5 == 0) {
        five++;
        number /= 5;
      }
      while (number % 2 == 0) {
        two++;
        number /= 2;
      }
    }

    return [two, five];
  }
  const getZeros = numbers => {
    twoAndFive = [0, 0];

    numbers.forEach(elem => {
      twoAndFive[0] += elem[0];
      twoAndFive[1] += elem[1];
    });

    return Math.min(twoAndFive[0], twoAndFive[1]);
  }

  // Variables
  const multipliers = expression.split("*");
  const nums = [];

  for (let multiplier of multipliers) {
    nums.push(getTwosAndFives(multiplier));
  }

  return getZeros(nums);
}