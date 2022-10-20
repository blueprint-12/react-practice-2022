import React from "react";

//에러 바운더리 라는 뜻
// 여기서 react-error-boundary 패키지를 쓸 것임
function ErrorB() {
  const somethingData = "데이터아님";
  if (somethingData !== "데이터") {
    throw new Error("이건 데이터가 아닙니다.");
  }
  return <div>{somethingData}</div>;
}

export default ErrorB;
