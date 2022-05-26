import React from "react";

//함수형 컴포넌트 껍데기 만들기
const Nemo = (props) => {
  const [count, setCount] = React.useState(3);
  console.log(count);
  const nemo_count = Array.from({ length: count }, (v, i) => i);

  const addNemo = () => {
    setCount(count + 1);
  };

  const removeNemo = () => {
    if (count > 0) {
      setCount(count + -1);
    } else {
      window.alert("네모가 없습니다!");
    }
  };

  return (
    <div>
      {nemo_count.map((n, index) => {
        return (
          <div
            key={index}
            style={{
              width: "150px",
              height: "150px",
              backgroundColor: "#ddd",
              margin: "40px",
            }}
          >
            nemo
          </div>
        );
      })}

      <div>
        <button onClick={addNemo}>하나 추가</button>
        <button onClick={removeNemo}>하나 빼기</button>
      </div>
    </div>
  );
};

export default Nemo;
