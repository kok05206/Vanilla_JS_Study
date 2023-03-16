// document.title // title 값 불러오기
// document.title = "lalala" // title 값 수정
// document.getElementById("title") => id 중에 title 값을 가져옴

// const title = document.getElementById("title");
// console.dir(title); // element를 더 자세히 보여주는 dir사용

// title.innerText = "Got you!"; // title의 grab me를 변경

// console.log(title.id);
// console.log(title.className);

// const hellos = document.getElementsByClassName("hello");
// hello class를 받는 모든 값을 array로 받음
// console.log(hellos);

// #### getElement 방식 ####

const title = document.querySelector('.hello h1');
// .hello class 안에 있는 h1을 가져온다.
// 값을 만족하는 값 하나만 가져온다.
console.log(title);

title.innerText = 'Hello';
console.log(title);

const titleAll = document.querySelectorAll('.hello h1');
// 값을 만족하는 값 전부 가져온다

console.log(titleAll);

// #### querySelector() 방식 ####

// querySelector("#hello") == getElementById("hello")
