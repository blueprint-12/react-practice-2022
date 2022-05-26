import React from "react";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  // 변수에 JSX는 return 하는 리액트 요소가 1개만 있어야 하며
  // 여기서 요소 1개라는 건 정말 하나의 요소태그만 말하는게 아니라 시블링 태그X 트리구조니까
  // div 내부에 자식요소를 여러개 배치하는 것은 ok
  // 아무것도 리턴하지 않아도 에러발생 (null이라도 리턴, null도 js에선 객체)
  // JSX에서 변수 가져오는 법: {} 중괄호 안에 변수써주면 됨
  // {}안에 삼항연산자도 넣어줄 수 있음 if의 경우는 return 뒤에 나올수없으므로 그 대신 씀
  // JSX에서는 style을 객체로 넘겨줘야해서 {{key: value, }} 이런모양

  //아래의 코드와 같은 동작( 코드 가독성이 떨어진다.)
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "let's get started!"),
  //   React.createElement(Expenses, {items:  expenses})
  // );

  return (
    <div className="App">
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
