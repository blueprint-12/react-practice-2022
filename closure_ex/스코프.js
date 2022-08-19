function add(x, y) {
  console.log(x, y);
  return x + y;
}
add(3, 6); // 3 6
console.log(x, y); // uncaught ReferenceError: x is not defined

//예상 시나리오
//1. add 내부의 console에서는 3 6 이 나오고
//2. 외부의 x,y는 참조 불가능하다고 에러를 뱉을 것이다.

// CODE는 선언 시점에 따라서 전역과 지역 스코프로 나눠진다. -> 전역변수, 지역변수
