import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";
import Detail from "./Detail";
import NotFound from "./NotFount";
import { createBucket } from "./redux/modules/bucket";

function App() {
  const [list, setList] = React.useState([
    "영화관 가기",
    "매일 책읽기",
    "수영 배우기",
  ]);
  const text = React.useRef(null);
  const dispatch = useDispatch();

  const addBucketList = () => {
    // 스프레드 문법! 기억하고 계신가요? :)
    // 원본 배열 list에 새로운 요소를 추가해주었습니다.
    // setList([...list, text.current.value]);

    //모듈에 있는 액션 생성 함수를 임포트해오고 써준다
    // 액션 생성 함수가 {key : value} 이렇게 생긴 애를 리턴해주니까..
    // 액션 생성 함수에 새로운 bucket의 내용을 전달해준다. 참고로 이건 바로 리턴해줘야해서 바로 실행 ()
    // text.current.value가 input태그의 입력값이니까 이걸 전달해준다.
    dispatch(createBucket(text.current.value));
  };
  return (
    <AppWrap className="App">
      <Container>
        <Title>내 버킷리스트</Title>
        <Line />
        {/* 컴포넌트를 넣어줍니다. */}
        {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
        <Switch>
          <Route path="/" exact>
            <BucketList list={list} />
          </Route>
          <Route path="/detail/:index">
            <Detail />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Container>
      {/* 인풋박스와 추가하기 버튼을 넣어줬어요. */}
      <Input>
        <input type="text" ref={text} />
        <button onClick={addBucketList}>추가하기</button>
      </Input>
    </AppWrap>
  );
}
const AppWrap = styled.div`
  background-color: #eee;
  /* 100vh 는 화면비율로해서 100%주겠다는 의미 */
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;
const Input = styled.div`
  min-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  //인풋이랑 버튼 중앙에 정렬
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  min-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default App;
