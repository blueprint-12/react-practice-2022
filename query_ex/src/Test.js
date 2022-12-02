import React from "react";

const A = () => {
  return <h1>안녕</h1>;
};

//리액트는 children prop를 사용해서 자식 엘리먼트를 받아와 쓸 수 있음
//Test컴포에서 B컴포는 children 으로 A컴포랑 p태그를 받고 있음
const B = (props) => {
  return <div>{props.children}</div>;
};

function Test() {
  return (
    <B>
      <A />
      <p>welcome</p>
    </B>
  );
}

export default Test;
