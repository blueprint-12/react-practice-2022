import React, { useState, useEffect } from "react";

// 1.마운트 시점에 라이프사이클 제어하기
// 2. 업데이트 시점
// 3. 언마운트 시점

function Liftcycle() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  //useEffect(콜백함수, [deps])
  //1.컴포넌트가 마운트됐을 때만 무언가를 처리하고 싶다면
  //의존성 배열을 []빈배열로 주고 내부에 사이드 이펙트 작업을 해주면 된다.

  useEffect(() => {
    console.log("마운트했당!");
  }, []);

  //2. 업데이트 시 무언가를 처리하고싶다면, 의존성 배열을
  //작성하지 않으면 된다.
  // 즉, useEffect의 dependency Array만 잘 활용하면
  // 우리가 감지하고 싶은 것만 컨트롤하여 쓸 수 있다.
  useEffect(() => {
    console.log("업데이트");
  });

  useEffect(() => {
    if (count > 5) {
      alert("count가 5를 넘어갔습니다! 주의!!! count를 1로 초기화합니다.");
      setCount(1);
    }
  }, [count]);

  useEffect(() => {
    if (text.length === 0) {
      return;
    }
    console.log(`업데이트된 text state의 값은 ${text} 입니다.`);
  }, [text]);

  return (
    <div style={{ padding: 20 }}>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +
      </button>
      <div>
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default Liftcycle;
