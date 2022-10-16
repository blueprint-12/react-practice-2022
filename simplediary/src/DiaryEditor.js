import React, { useState, useRef } from "react";

//*렌더링? 화면에 표시하는 것

//만들어야 하는 것
//1. 작성자
//2. text area (일기 본문) *input 태그와 사용방법이 완전 똑같음
//3. 오늘의 기분 점수 1-5
function DiaryEditor({ onCreate }) {
  //거의 동일한 작업을 하는 setState는 따로 두지않고 state끼리 묶어도 된다.
  //조건은 setState가 하는 작업이 각각의 state에 동일하게 들어가야 할 거 같다.

  // const [author, setAuthor] = useState("");
  // const [contents, setContents] = useState("");

  //setState( 새로운 값 ) -> setState 함수로 새롭게 업데이트시켜줘야 한다.
  //초기값이 객체이기 때문에 값을 바꿀 때에도 객체값을 전달해줘야 합니다.
  const [state, setState] = useState({
    author: "",
    contents: "",
    emotion: 1,
  });

  //DOM요소에 직접 접근하는 useRef훅은 current 객체를 반환합니다.
  const authorInput = useRef();
  const contentsInput = useRef();

  /* setState({
            ...state,
            author: e.target.value,
            // contents: state.contents,
            //만약 state 가 contents 말고 많을 경우는 "전개 연산자"를 사용하면 된다.
            //주의점: 코드가 위에서 아래로 진행되는 것을 명심/ 전개할 때 원래 author의 값도 펼쳐지게 되는데 원래 값에 다시 덮어쓰여지면 변경이 안된다.
            //그렇기 때문에 먼저 원래 있던 값들을 펼치고 그 다음 변경된 값을 세팅해야 한다.
          });

  */

  //onChange 이벤트 핸들러가 2번 반복되므로 하나로 뭉쳐주겠음
  const handleChangeState = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setState({
      ...state,
      //괄호 표기법으로 각각의 state에 다른 다른 값을 업데이트해준다.
      //객체의 . 마침표 표기법이랑 대괄호 표기법이 있는데 객체 key의 value에 접근하는 방법 중 하나입니다.
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      //alert를 띄우는 것은 유저 사용성에 좋지 않기 때문에 포커스를 주는 것으로 대체한다.
      authorInput.current.focus();
      return;
    }

    if (state.contents.length < 5) {
      // alert("일기 본문은 최소 5글자 이상입니다.");
      //focus
      contentsInput.current.focus();
      return;
    }
    //App컴포에서 받아온 onCreate함수를 호출하여 validation을 통과한 3인자를 넘겨준다.
    onCreate(state.author, state.contents, state.emotion);
    alert("저장 성공");
    //ref를 사용하지 않기 때문에
    //저장 성공 시 setState로 input의 값을 초기화
    setState({
      author: "",
      contents: "",
      emotion: 1,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <input
        value={state.author}
        name="author"
        onChange={handleChangeState}
        ref={authorInput}
      />
      <br />
      <textarea
        ref={contentsInput}
        value={state.contents}
        name="contents"
        onChange={handleChangeState}
      />
      <div className="EmotionCounter">
        오늘의 감정 점수 :&nbsp;
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
}

export default DiaryEditor;
