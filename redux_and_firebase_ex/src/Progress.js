import React from "react";

import styled from "styled-components";
import { useSelector } from "react-redux";

//프로그래스 바 만들 때, tip 두 요소를 형제 관계로 해주면 두 요소를 겹칠때를 따로 작업해줘야
//하기 때문에 그냥 프로그래스 바의 자식요소로 하이라이트 컴포(오렌지색 바)를 넣어주는 것이 좋다.
const Progress = (props) => {
  const bucket_list = useSelector((state) => state.bucket.list);
  console.log("Progress 버켓리스트 정보 가져오기:", bucket_list);

  //완료된 카운트를 사용하기 위해서 맵을 돌려서
  // b.completed가 true이면 count를 하나 올려줘
  let count = 0;
  bucket_list.map((b, idx) => {
    if (b.completed) {
      count++;
    }
  });

  console.log(count);
  return (
    <ProgressBar>
      <HighLight width={(count / bucket_list.length) * 100 + "%"} />
      <Dot />
    </ProgressBar>
  );
};

//CSS TIP: 넓이, 높이 단위 통일 필요없음
const ProgressBar = styled.div`
  display: flex;
  background-color: #eee;
  width: 100%;
  height: 20px;
  border-radius: 12px;
  //동그리가 중앙에 오게 만들고 싶으면 margin으로 조작하는 거보단
  //display: flex를 줬으니 align-items를 사용하면 좋다
  align-items: center;
`;
//✅자 이제 하이라이트의 width를 완료된 개수만큼
// 채워줘야 하니까 redux스토어에서 데이터를 가져와야겠죠?
// 그러면 import로 useSelector를 가져옵니다.
const HighLight = styled.div`
  background-color: #673ab7;
  /*트랜지션에 "어떤 요소"가 변할 때에서 어떤 요소를 직접 써줘도 되지만
  width를 생략하면 그냥 모든 요소가 변할 때 라는 의미가 되기때문에 굳이 width 를 안써줘도 된다.
  */
  transition: 1s;
  width: ${(props) => props.width};
  height: 20px;
  border-radius: 12px;
`;
//Dot이랑 Progressbar 겹치게하는 법 부모에 flex 주면됨
const Dot = styled.div`
  width: 37px;
  height: 37px;
  background: white;
  border: 5px solid #673ab7;
  //동그리 넣어주려면 반지름보다 크게 넣어주면 됨
  border-radius: 25px;
  //동그리랑 형제요소랑 걍 나란히 있으니까 겹치게해주려면
  //margin 속성을 -(마이너스)로 줘서 해결할 수 있다.
  margin-left: -20px;
`;

export default Progress;
