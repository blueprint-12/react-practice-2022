import React, { Component } from "react";
//react plugin 설치후 rcc하면 클래스 컴포넌트 기본 틀을 자동 생성해준다.
//imgCoord : 이미지 좌표 축약어 image coordinate ?

//클래스의 경우 -> constructor(render함수 위에 부분이 여기에 해당) --> render -> ref(레프를 달아놨다면) -> componentDidMount
//-> (setState/props 바뀔 때) -> *shouldComponentUpdate(true)*  -> 리render -> componentDidUpdate
//부모가 나를 없앴을 때(안 없애면 해당없음) -> componentWillUnmount -> 소멸

//리액트 주의사항: 객체를 함부로 바꾸지 마라(재할당X, 불변성 유지O)
//예시로 배열 pop, push, unshift, splice => 배열 직접 수정
// concat, slice -> 새로운 배열은 만들어냄
class RSP extends Component {
  state = {
    result: "",
    imgCoord: 0,
    score: 0,
  };

  //처음 컴포넌트 렌더가 성공적으로 실행됐다면 아래 코드가 실행된다.(JSX코드가 렌더링 성공 뒤에 componentDidMount 실행)
  componentDidMount() {
    //컴포넌트가 첫 렌더링된 후
  }
  componentDidUpdate() {
    //컴포넌트 리렌더링 후
  }
  componentWillUnmount() {
    //컴포넌트가 제거되기 직전(부모가 자식인 나를 없앴을 때)
  }
  render() {
    const { result, score, imgCoord } = this.state;
    function onClickBtn(param) {}
    return (
      <>
        <div
          id="computer"
          style={{
            background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
          }}
        >
          <div>
            <button
              id="rock"
              className="btn"
              onClick={() => {
                onClickBtn("바위");
              }}
            ></button>
            <button
              id="scissor"
              className="btn"
              onClick={() => {
                onClickBtn("가위");
              }}
            ></button>
            <button
              id="paper"
              className="btn"
              onClick={() => {
                onClickBtn("보");
              }}
            ></button>
          </div>
          <div>{result}</div>
          <div>현재 {score}점</div>
        </div>
      </>
    );
  }
}

export default RSP;
