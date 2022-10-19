import React, { useEffect, useState } from "react";

// 😎한 js파일에서 여러 컴포넌트를 만들어도 된다.
// 테스트용도이기 때문에 가독성은 고려하지 않고 UnmountTest컴포넌트를 만들어보겠습니다.

const UnmountTest = () => {
  useEffect(() => {
    console.log("마운트");
    return () => {
      //언마운트되는 시점에 발생하는 콜백함수를 리턴해주면 된다.
      console.log("언마운트");
    };
  }, []);
  return <div>unmount Testing Compo</div>;
};

function LifecycleTwo() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisible = () => setIsVisible(!isVisible);

  //단락회로 평가를 통해서 isVisible이 true 이면 뒤의 컴포넌트를 렌더링하고,
  //아니라면 렌더링하지 않는 것으로
  return (
    <div>
      <button onClick={toggleVisible}>ON/OFF</button>
      {isVisible && <UnmountTest />}
    </div>
  );
}

export default LifecycleTwo;
