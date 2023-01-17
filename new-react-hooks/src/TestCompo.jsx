import { useState, useEffect } from "react";

export default function TestCompo() {
  const [testState, setTestState] = useState(() => {
    console.log("안녕!, 레이지 init!");
    return "레이지 초기값";
  });

  return <div>{testState}</div>;
}
