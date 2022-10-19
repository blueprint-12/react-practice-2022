import React, { useContext } from "react";
import DiaryItem from "./DiaryItem";
import { DiaryStateContext } from "../App";

function DiaryList({ onRemove, onEdit }) {
  // useContext의 인자로 만들어둔 컨텍스트 컴포넌트를 넣어줘야 한다.
  // export해놓은 context 컴포넌트를 임포트해오고 사용
  const diaryList = useContext(DiaryStateContext);

  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <b>총 {diaryList.length}개의 일기가 있습니다.</b>
      <div>
        <ul>
          {diaryList.map((item) => {
            return <DiaryItem key={item.id} {...item} />;
          })}
        </ul>
      </div>
    </div>
  );
}

//undefined이면 안되는 props의 기본값을 지정해줄 수 있다.
DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
