const x = 1;

function outer() {
  const x = 10;
  const inner = function () {
    console.log(x);
  };
  return inner;
}
const ella = outer();
ella();

//ella는 뭘 반환할까?
// 내 예상 outer가 리턴하는것이 inner고 inner은 x를 콘솔에 찍으니까
// 상위의 outer의 지역변수 x인 10을 리턴할 것이다.
//-> 사실 outer의 실행context 가 종료되면서 지역변수 10에 접근할 수 없어야 하는것이
// 맞지만 우리는 콜스택에서 제거된 outer()에 접근하여 10이라는 값이 출력되는 결과를
// 받을 수 있다! 왜 그럴 수 있을까? ->closure의 개념을 이해해야한다.
