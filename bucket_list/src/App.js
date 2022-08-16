import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";
import Progress from "./Progress";
import Detail from "./Detail";
import NotFound from "./NotFount";
import {
  createBucket,
  loadBucketFB,
  addBucketFB,
} from "./redux/modules/bucket";
import { db } from "./firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

function App() {
  const [list, setList] = React.useState([
    "영화관 가기",
    "매일 책읽기",
    "수영 배우기",
  ]);

  const text = React.useRef(null);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadBucketFB());
  }, []);

  //db확인용(파이어베이스)
  // React.useEffect(async () => {
  //   console.log(db);

  //   addDoc(collection(db, "buckets"), { text: "new", completed: false });
  // }, []);

  const addBucketList = () => {
    // 스프레드 문법! 기억하고 계신가요? :)
    // 원본 배열 list에 새로운 요소를 추가해주었습니다.
    // setList([...list, text.current.value]);
    // 모듈에 있는 액션 생성 함수를 임포트해오고 써준다
    // 액션 생성 함수가 {key : value} 이렇게 생긴 애를 리턴해주니까..
    // 액션 생성 함수에 새로운 bucket의 내용을 전달해준다. 참고로 이건 바로 리턴해줘야해서 바로 실행 ()
    // text.current.value가 input태그의 입력값이니까 이걸 전달해준다.
    // dispatch(createBucket({ text: text.current.value, completed: false }));

    dispatch(addBucketFB({ text: text.current.value, completed: false }));
  };
  return (
    <AppWrap className="App">
      <Container>
        <Title>내 버킷리스트</Title>
        <Progress></Progress>
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
        <button
          onClick={() => {
            //scrollTo()에 param으로 그냥 0,0이렇게 줘도되는데 {} 객체로 보내서 좀더 세밀한 작업이 가능하다.
            //behavior: "smooth"로 주면 스크롤이 부드럽게 올라간다.
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          위로 가기
        </button>
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
  display: flex;
  align-items: center;
  justify-content: space-between;

  //SCSS에서 &는 나 자신을 뜻함 이걸로 네스팅?(nesting, 중첩)
  //자식속성 모두에게 무슨 적용을 하고 싶으면 >
  & > * {
    padding: 5px;
  }

  & input {
    border: 1px solid #888;
    margin: 0px 5px;
    width: 60%;
  }
  & input:focus {
    //웹상에서 input은 기본적으로 outline을 제공해줌
    //얘를 없애주면 됨
    outline: none;
    border: 1px solid #a673ff;
  }
  // %(퍼센트)는 부모기준 몇 프로를 나타낸다.
  & button {
    margin: 0px 5px;
    width: 25%;
    color: #fff;
    border: #a673ff;
    background: #a673ff;
  }
`;

const Container = styled.div`
  min-width: 350px;
  // min-height는 자동으로 스크롤생김
  /* min-height: 60vh; */
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
