import React from "react";
import DiaryItem from "./DiaryItem";

function DiaryList({ diaryList, onRemove, onEdit }) {
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <b>총 {diaryList.length}개의 일기가 있습니다.</b>
      <div>
        <ul>
          {diaryList.map((item) => {
            return (
              <DiaryItem
                key={item.id}
                {...item}
                onRemove={onRemove}
                onEdit={onEdit}
              />
            );
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
