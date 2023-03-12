import { useState, useEffect } from "react";

const getToken = () => {
  let token;
  if (localStorage.getItem("token")) {
    token = localStorage.getItem("token");
    console.log("token is here!");
    return token;
  } else {
    console.log("token not available");
    return undefined;
  }
};
// * useState() 콜백함수를 전달하여 연산이 들어간 함수 실행, 
// 무거운 연산, 혹은 최초 한번만 필요한 경우 주로 localstorage에서 값을 가져올
export default function TestCompo() {
  useEffect(() => {
    console.log("component mounted");
  }, []);
  const [isAuthenticated, setIsAuthenticated] = useState(getToken);
  return isAuthenticated ? <div>{1 + 1}</div> : null;
}
