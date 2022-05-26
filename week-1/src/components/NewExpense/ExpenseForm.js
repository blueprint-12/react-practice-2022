import React, { useState } from "react";
import "./ExpsenseForm.css";

const ExpenseForm = (props) => {
  //입력된 input값을 저장하기 위해 state사용 초기값은 처음 렌더링됐을 때
  // 인풋의 내용이 빈칸이므로 ""를 설정

  //초기값은 똑같이 빈배열이다 입력타입은 number인데 왜?-> 수신할 때마다,
  //만약 입력(input만 해당하나봄) 요소값을 읽는다면 항상 문자열이기 때문이다.
  //항상 모든 상태를 문자열로 초기화한다.
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //위에는 개별적으로 state를 관리하는 방법이고 아래는 다같이 객체로 뭉쳐서 관리하는 법
  //대신 모든 3개의 인풋을 전체로 묶어서 관리해야함, 초기값을 객체로
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    //2번째 방법: 1개의 state에 3개의 인풋을 객체로 넣어서 관리
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    // //3번째 방법: 2번 방법은 그리 좋지않음, 함수형으로 아래와 같이 작성하는 것이 추천됨
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="summit" onClick={}>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
