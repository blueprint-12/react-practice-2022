import React, { useState } from "react";

export default function Word({ word: w }) {
  // useState의 기본값인 word와 변수명이 겹치므로
  // 받아오는 word props를 새로운 변수명인 w로 할당하여 사용
  const [word, setWord] = useState(w);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  function toggleShow() {
    setIsShow((isShow) => !isShow);
  }

  function toggleDone() {
    // setIsDone((isDone) => !isDone);
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  }

  function deleteWord() {
    // 바로 삭제가 가능하게 하면 안되고, 유저가 정말 삭제하고 싶은 것인지 확인
    if (window.confirm("삭제하시겠습니까?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setWord({ id: 0 });
        }
      });
    }
    //해당 요소의 아이디가 0일 경우, null을 리턴하도록 하여 화면에서 삭제
    //요소가 ✅null값을 가지면 화면에 그려지지 않음
    // 바로 setWord(word.id === 0)은 setWord(true), setWord(false) 와 같아서 위와 같이 처리
  }

  //del함수 내부에서 if절을 하면 텍스트만 사라지게 되므로,
  //밖에서 해줘야함
  if (word.id === 0) {
    return null;
  }

  //체크박스 체크 -> 암기 o, 아닌 경우, 암기 x
  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
        <button className="btn_del" onClick={deleteWord}>
          삭제
        </button>
      </td>
    </tr>
  );
}
