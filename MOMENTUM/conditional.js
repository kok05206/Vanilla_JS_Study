const age = prompt('How old are you?');
// prompt -> 사용자에게 창을 띄울수 있도록 해준다!
// 값이 입력 될 때까지 => prompt는 css도 적용할 수 없기 때문에 잘 사용하지 않는다!

console.log(typeof age);
// 값을 타입을 가져올땐 typeof value or typeof(value)을 사용.

console.log(typeof parseInt('15'), typeof '15');
// parseInt() : String타입을 int로 바꿔주는 함수

console.log(typeof toString(15), typeof 15);

const getAge = parseInt(prompt('How old are you?'));
console.log(getAge);
console.log(isNaN(getAge)); // isNaN 함수로 숫자인지 확인을 한다! => 반환값은 true or false

if (isNaN(getAge) || age < 0) {
  console.log('Error, is not number');
} else if (getAge < 18) {
  console.log('you are too young.');
} else if (18 <= getAge && getAge <= 50) {
  console.log('Thanks, you can drink beer.');
} else if (80 <= getAge) {
  console.log('Please write a real positive number');
} else if (getAge === 100) {
  console.log('wow you are wise');
} else {
  console.log('You can do whatever you want.');
}
