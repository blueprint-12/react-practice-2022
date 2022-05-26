import React from "react";
import "./Card.css";

// 얘는 관용적인 이름임 Card
//Card는 사용자 지정 컴포넌트라서 박스 밖에 있는 모든 디폴트 HTMl 컴포넌트들ㅇㄴ
// 렌더링된 html 요소들에게 CSS클래스를 추가하는 className 을 지원한다.
//하지만 사용자 정의 컴포넌트들은 여러분이 지원하라고 지시한 것만 지원함
//그래서 만약 Card컴포넌트에 className

// "card " 뒤에 공백 한 칸있음 이거 안지켜주면 class 구분안돼서 적용안됨
// 해당 컴포는 wrapper component라서 props를 위로부터 받아온게 아니라
// 그냥 자체적으로 있는 props.children 과 props.className을 쓴 것!
// props.children은 래퍼 컴포넌트를 생성하게 하며 특별한 컴포넌트라고 할 수 있고
// 종종 필요하다!

const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
