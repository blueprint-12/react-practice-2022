import { useRef } from "react";
import MyInput from "./MyInput";
import "./App.css";
import TestCompo from "./TestCompo";

function App() {
  // const inputRef = useRef();
  // const focus = () => {
  //   inputRef.current.focus();
  // };
  // // 그냥 props로 넘겨준다면, ref 는 props가 아니기 때문에 개발자도구에서 에러메세지를 띄운다.
  // return (
  //   <div className="App">
  //     {/* <input ref={inputRef} /> */}
  //     <MyInput ref={inputRef} />
  //     <button onClick={focus}>집중</button>
  //   </div>
  // );
  return <TestCompo />;
}

export default App;
