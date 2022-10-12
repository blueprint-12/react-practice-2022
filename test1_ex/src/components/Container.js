import React from "react";

//Container 라는 레이아웃컴포넌트를 만들고
//children 라는 속성으로 다른 컴포넌트들을 prop으로 받습니다.
//console.log로 확인해보시면 됩니다.

function Container({ children }) {
  console.log(children); //typeof react element 라고 뜸
  return (
    <div style={{ margin: 20, padding: 20, border: "1px solid gray" }}>
      {children} 컴포넌트를 다른 컴포넌트의 prop으로 받았어요!
    </div>
  );
}

export default Container;
