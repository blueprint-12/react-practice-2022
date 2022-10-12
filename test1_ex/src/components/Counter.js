import React, { useState } from "react";
import OddEvenResult from "../OddEvenResult";
function Counter(props) {
  console.log(props);

  //한 컴포넌트에 state는 여러 개 가질 수 있다.

  //리렌더링 일어나는 경우?(해당 함수가 다시 호출되는 것)
  //1. 자신의 state가 변했을 경우
  //2.  props가 변할 경우
  //3. 부모컴포넌트가 렌더링되는 경우

  //👾props로는 모든 것을 내릴 수 있다. 컴포넌트 자체도 가능!

  //state는 컴포넌트 내에서 관리하는 변동하는 값(동적인 데이터, 정적인 데이터말고)
  const [count, setCount] = useState(0);
  const onIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const onDecrease = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <h2 style={{ color: "pink" }}>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <OddEvenResult count={count} />
    </div>
  );
}

//만약에 없는 props의 이름에 접근하여 할당할 경우 undefined가 할당된다.
//(예를 들어 부모컴포넌트에서 내려주는 것을 까먹었을 때 전달받지 못한 props의 기본값을 설정할 수 있다.)
//-> 이 버그를 해결하기 위해서 defaultProps를 사용할 수 있다.
Counter.defaultProps = {
  initialValue: 0,
};

export default Counter;
