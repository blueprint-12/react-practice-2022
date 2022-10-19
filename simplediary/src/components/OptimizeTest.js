import React, { useState, useEffect } from "react";

// const TextView = React.memo(({ text }) => {
//   useEffect(() => {
//     console.log(`text :: updated ${text}`);
//   });
//   return <div>{text ? text : "값이 아직 없어용"}</div>;
// });

// const CountView = React.memo(({ count }) => {
//   useEffect(() => {
//     console.log(`count :: updated ${count}`);
//   });
//   return <div>{count}</div>;
// });

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`counter A :: count ${count}`);
  });
  return <div>{count}</div>;
});

const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`counter B :: obj ${obj.count}`);
  });
  return <div>{obj.count}</div>;
};

const areEqual = (prevProp, nextProp) => {
  //이전 prop 값과 지금 prop값을 비교해서 같다면 true를 반환-> 렌더링X
  // 다르다면 false 반환 -> 렌더링 O
  //   if (prevProp.obj.count === nextProp.obj.count) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  //위의 코드는 어차피 boolean 값을 반환하면되니까 아래와 같이 조건식 자체의 결과를 리턴해주면 된다.
  return prevProp.obj.count === nextProp.obj.count;
};

const MemoizedCounterB = React.memo(CounterB, areEqual);

function OptimizeTest() {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({ count: 1 });

  return (
    <div style={{ padding: 50 }}>
      <div>
        Counter A
        <button
          onClick={() => {
            setCount(count);
          }}
        >
          버튼A
        </button>
        <CounterA count={count} />
      </div>
      <div>
        counter B
        <button
          onClick={() => {
            setObj({ count: obj.count });
          }}
        >
          버튼B
        </button>
        <MemoizedCounterB obj={obj} />
      </div>
    </div>
  );
}

export default OptimizeTest;
