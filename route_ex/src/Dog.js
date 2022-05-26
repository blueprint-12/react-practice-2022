import React from "react";
import { useHistory } from "react-router-dom";

const Dog = (props) => {
  console.log(props);
  const history = useHistory();
  //push는 페이지 이동
  return (
    <div
      onClick={() => {
        // 아래는 직접 component 형식으로 받아온 객체를 사용한 것
        // props.history.push("/");
        //히스토리 훅 이용한 것
        history.push("/cat");
      }}
    >
      강아지🐕 화면 입니다!
    </div>
  );
};

//컴포를 다른 곳에서 불러쓸 수 있도록 내보내기
export default Dog;
