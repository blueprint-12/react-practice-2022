import React, { useState } from "react";
import styled from "styled-components";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  //주의 new Date객체가 반환된 것이므로 string으로 데이터 조작을 해줘야한다.

  //리턴 전은 순수 JS이고 return 내부에 있는 것들은 JSX입니다.
  //JSX안에서 {JS코드 작성!}중괄호를 쓰면 JS를 사용할 수 있습니다!

  //ExpenseDate를 컴포넌트로 쪼개놨으니 당연히 App에서 받아온 date를 쓸 수 있게
  //props로 또 보내줘야 합니다.!

  //JSX코드 내부에는 너무 많은 로직이 있으면 안되기 때문에 함수는 여기에 작성해서 넣어준다.
  // 이벤트 실행 시 작동할 함수 등등
  // 특정 이벤트 발생시 작동하는 함수는 event명Handler 라고 짓는게 관습입니다.

  // JSX코드 내부에서 어떤 값이 새로 변해도 리액트 컴포넌트는
  // 처음을 빼고나면 리렌더링해주지 않는다. 이럴 때 쓰는 것이
  // useState() 훅이다. 괄호 안에는 초기값을 넣어주고 이를 통해서 특별한 변수를 만들어줄 수 있는 것이다.
  // useState의 반환값을 받는 변수는 항상 const여야 한다.
  // 리턴값으로 배열을 반환하는데 [현재 상태값, 그 상태값을 업데이트하는 함수] 이다.
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    //우리는 유즈스테이트를 활용해서 등호와 함께 새로운 값으로 할당하지 않을겁니다.(e.g title = newValue; 이런식으로)
    //대신 setTitle 함수를 호출해서 새 값을 할당할 것임
    setTitle("updated!");
    // 그렇다면 왜 새로운 값을 할당하는 대신 state를 업데이트하는 함수를 사용할까?
    // 그 이유는 변수에 새로운 값을 할당하는 것이 아니라 리액트에게 새 값을 할당할거야! 라고 알려줘야하기 때문임
    //그리고 state가 등록된 컴포넌트는 재평가돼야 한다고 알려주기 때문임
    //그러면 리액트컴포넌트(컴포넌트형 함수)는 재실행되고 그 다음 JSX코드를 다시 평가한다. 그리고 지난 번과 빅해서
    // 감지된 변화들을 화면에 나타나게 합니다. (리렌더링)

    //State는 컴포넌트의 인스턴스별로 나누어져있다.
    //응용 프로그램에게 반응성을 추가하는 것이 state이다.
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
