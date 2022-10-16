import React, { useState, useRef, useEffect, useMemo } from "react";
import "./App.css";
import DiaryList from "./components/DiaryList";
import DiaryEditor from "./DiaryEditor";

function App() {
  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());
    console.log(res);

    const initData = res.slice(0, 20).map((item) => {
      return {
        author: item.email,
        contents: item.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });

    setData(initData);
  };
  useEffect(() => {
    getData();
  }, []);

  const [data, setData] = useState([]);

  //useRef를 사용하여 고유 아이디를 만들 수 있다.
  const dataId = useRef(0);

  //리스트 아이템 추가 기능
  const onCreate = (author, contents, emotion) => {
    //현재 시간은 지역상수로 그냥 여기서 만들어줘도 됨
    const created_date = new Date().getTime();

    const newItem = {
      author,
      contents,
      emotion,
      created_date,
      id: dataId.current,
    };
    //다음 일기 아이디는 다른 아이디를 가져야 하니까 1추가해주는 로직
    dataId.current += 1;
    //최신 아이템이 위로 오게 만들어줘야 하기때문에 원래 데이터를 뒤에 전개연산자로 펼쳐주기
    setData([newItem, ...data]);
  };

  //리스트 아이템 삭제 기능
  const onRemove = (targetId) => {
    const newDiaryList = data.filter((item) => item.id !== targetId);
    setData(newDiaryList);
  };

  //리스트 아이템 수정 기능
  const onEdit = (targetId, newContents) => {
    setData(
      //원래 데이터 배열의 item(일기) 객체의 아이디가
      //수정하려는 id와 동일하다면 그 객체의 일기요소를 전개 연산자로 풀어주고 contents의 값을 새로운 내용으로 덮어준다. 아니라면 원래 값유지
      data.map((item) =>
        item.id === targetId ? { ...item, contents: newContents } : item
      )
    );
  };

  //리액트에서는 return을 가지고 있는 함수를 메모이제이션할 수 있다.
  //메모이제이션하고 싶은 함수를 useMemo를 통해 감싸주면 된다.
  // useMemo()의 첫번째 인자로 콜백함수를 받고 이 콜백함수가 리턴하는 값(연산)을 최적화할 수 있도록 도와준다.
  const getDiaryAnalysis = useMemo(() => {
    console.log("일기 분석 시작");

    const goodCount = data.filter((item) => item.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return { goodCount, badCount, goodRatio };
  });

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis();

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <div>전체 일기: {data.length}</div>
      <div>기분 좋은 일기 개수 : {goodCount}</div>
      <div>기분 안좋은 일기 개수: {badCount}</div>
      <div>기분 좋은 일기 퍼센트: {goodRatio}%</div>

      <DiaryList diaryList={data} onRemove={onRemove} onEdit={onEdit} />
    </div>
  );
}

export default App;
