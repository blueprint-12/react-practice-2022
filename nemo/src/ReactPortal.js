import React from "react";
import { createPortal } from "react-dom";
// 포탈은 dom도 건들여야 하기 때문에 react-dom에서 createPortal을 가져옵시다.

function ReactPortal({ children }) {
  return createPortal(children, document.getElementById("portal"));
}

export default ReactPortal;
