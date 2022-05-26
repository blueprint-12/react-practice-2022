import React from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
// 이 페이지에서는 해당 요일의 평점을 남길 수 있도록 해줄거예요.
// n번째 회색 동그라미를 누르면 평점이 n점으로 기록되도록 해줍시다!
// 그리고 평점이 n점이 되면 1~n번째 동그라미는 노랑색으로 바뀌게 해줄거예요.

const Review = (props) => {
  const history = useHistory();
  const params = useParams();

  //평점은 state에 넣고 관리한다.
  const [rate, setRate] = React.useState(0);

  //키보드 입력 추가 구현 (Pass)

  return (
    <ReviewCont>
      <h3 style={{ textAlign: "center" }}>
        <span
          style={{
            color: "#fff",
            fontWeight: "900",
            background: "orange",
            padding: "0.2rem",
            borderRadius: "5px",
          }}
        >
          {/* 파라미터를 받아서 화면에 넘겨줬어요. */}
          {params.week_day}요일
        </span>{" "}
        평점 남기기
      </h3>
    </ReviewCont>
  );
};

const ReviewCont = styled.div`
  max-width: "350px";
  width: "80vw";
  height: "90vh";
  margin: "5vh auto";
  padding: "5vh 5vw";
  border: "1px solid #ddd";
  box-sizing: "border-box";
  border-radius: "5px";
`;
export default Review;
