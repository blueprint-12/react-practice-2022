import React from "react";

const OddEvenResult = ({ count }) => {
  console.log(count);
  return (
    <div style={{ color: "white" }}>{count % 2 === 0 ? "짝수" : "홀수"}</div>
  );
};

export default OddEvenResult;
