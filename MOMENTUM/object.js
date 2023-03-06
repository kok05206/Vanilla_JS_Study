const player = {
  name: 'hwang',
  points: 5,
  fat: false,
};

console.log(player);
console.log(player.name);

player.favorite = 'potato';
player.fat = false;
console.log(player);

function sayHello(name, age) {
  console.log('Hello my name is ' + name + ', ' + age + ' old');
}
sayHello();
sayHello('hwang', 26);

function plus(first, second) {
  console.log(first + second);
}

plus(5, 20);
