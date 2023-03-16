const calculator = {
  plus: function (a, b) {
    alert(a + b);
  },

  minus: function (a, b) {
    alert(a - b);
  },

  times: function (a, b) {
    alert(a * b);
  },

  divide: function (a, b) {
    alert(a / b);
  },

  power: function (a, b) {
    alert(a ** b);
  },
};

calculator.times(2, 3);
calculator.minus(2, 3);
calculator.divide(2, 3);
calculator.power(2, 3);
console.log(calculator.plus(2, 3));

const age = 96;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);
