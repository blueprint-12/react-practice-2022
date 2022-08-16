// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const BucketList = (props) => {
  // const my_lists = props.list;

  const history = useHistory();

  // 위에는 App.js에서 가져왔던 것 (props.list)
  //아래는 리덕스의 데이터를 가져다가 씀 (정말 이 데이터를 가져오는 지 궁금하면
  // 초기값에 하나 추가해보셈)
  const my_lists = useSelector((state) => state.bucket.list);

  return (
    <ListStyle>
      {my_lists.map((list, index) => {
        return (
          <ItemStyle
            className="list_item"
            key={index}
            onClick={() => {
              history.push("/detail/" + index);
            }}
          >
            {list.text}
          </ItemStyle>
        );
      })}
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  //아래는 스크롤 바 주기
  overflow-y: auto;
  height: 50vh;
  max-height: 50vh;
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  color: ${(props) => (props.completed ? "#fff" : "#333")};
  background-color: ${(props) => (props.completed ? "#673ab7" : "aliceblue")};
`;

export default BucketList;
