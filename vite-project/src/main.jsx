import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 내가 직접만든 커스텀 useState에서 render를 트리거하기위한 render함수
//? 아래 코드는 hooks를 테스트하기 위한 코드이므로 추후 삭제해도 됨
export function render() {
  const root = ReactDom.createRoot(document.getElementById("root"));
  root.render(<App />);
}
