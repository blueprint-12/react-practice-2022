import React from "react";

//함수형 컴포넌트
const Text = (props) => {
  //React.useRef 훅을 썼다!
  // text안에 처음엔 null(초기값)이
  // 담겨 있다가 그 다음에는 return이 되고
  //렌더링이되고 마운트가 된다음에 text에는 h1(리액트요소)가 담길것이다!
  const hoverEvent = () => {
    text.current.style.background = "yellow";
  };

  const text = React.useRef(null);

  React.useEffect(() => {
    // 여기가 clean up 부분입니다.
    // componentWillUnmount 때 동작하는 부분이 여기예요.
    text.current.addEventListener("mouseover", hoverEvent);
    return () => {
      text.current.removeEventListener("mouseover", hoverEvent);
    };
  }, []);
  return <h1 ref={text}>텍스트입니다!</h1>;
};

// useEffect()는 리액트 훅이다. 라이프 사이클 함수 중 componenetDidMount와
// componentDidUpdate, componenetWillUnmount를 합쳐둔 것이다.

export default Text;
