//CSS 스타일드 컴포넌트
import styled from "styled-components";
//리액트, 리액트 라우터
import React from "react";
import { Route, Switch } from "react-router-dom";
//컴포넌트 임포트 (컴포넌트는 .js 생략하고 가져온다.)
import MyWeek from "./MyWeek";
import Review from "./Review";
function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <MyWeek />
      </Route>
      <Route path="/review/:week_day" exact>
        <Review />
      </Route>
    </div>
  );
}

// const Container = styled.div`
//   max-width: 350px;
//   min-height: 80vh;
//   background-color: #fff;
//   padding: 16px;
//   margin: 5vh auto;
//   border-radius: 5px;
//   border: 1px solid #ddd;
//   display: flex;
//   flex-direction: column;
//   align-content: center;
//   justify-content: center;
//   align-items: center;
// `;

// const ContentBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

export default App;
