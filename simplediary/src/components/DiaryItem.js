import React, { useState, useRef, useEffect, useContext } from "react";
import { DiaryDispatchContext } from "../App";

function DiaryItem({ id, author, contents, emotion, created_date }) {
  const { onRemove, onEdit } = useContext(DiaryDispatchContext);

  useEffect(() => {
    console.log(`${id}번째 친구가 렌더링되었습니다.`);
  });
  const localContentsInput = useRef();
  //new Date()에 우리가 만들어놓은 밀리세컨드를 인자로 넘겨주면
  // Date객체를 생성해준다. 이 객체에 toLocaleString() 메소드를 쓰면 알아볼 수 있는 날짜로 변환시켜준다.

  //수정상태(기본값: false)
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);
  //수정 textarea에 원래값을 그냥 받아온 원래 값으로 지정해주면 된다.
  const [localContents, setLocalContents] = useState(contents);

  const handleRemove = () => {
    if (window.confirm(`${id} 번째 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };
  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContents(contents);
  };

  //수정 완료 버튼을 눌렀을 때 실행될 함수
  const handleEdit = () => {
    if (localContents.length < 5) {
      //컨텐츠의 길이가 5이상이 아니라면 포커스를 주고 return 으로 작업을 끝내준다.
      localContentsInput.current.focus();
      return;
    }

    //수정을 정말 완료하기 전에 확인하는 메세지를 출력
    if (window.confirm(`${id}번째 일기를 수정하시겠습니까?`)) {
      //App으로부터 받아온 onEdit함수에 인자를 전달해주고,
      //수정 폼을 닫아줘야 한다.
      onEdit(id, localContents);
      toggleIsEdit();
    }
  };

  return (
    <div className="DiaryItem">
      <div id="info">
        <span>
          작성자: {author} | 감정 점수:{emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEdit ? (
          <>
            <textarea
              ref={localContentsInput}
              value={localContents}
              onChange={(e) => {
                setLocalContents(e.target.value);
              }}
            />
          </>
        ) : (
          <>{contents}</>
        )}
      </div>

      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정취소</button>
          <button onClick={handleEdit}>수정완료</button>
        </>
      ) : (
        <>
          <button onClick={handleRemove}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </div>
  );
}

export default React.memo(DiaryItem);
