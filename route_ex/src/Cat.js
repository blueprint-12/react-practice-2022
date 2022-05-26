import React from "react";
// import { useParams } from "react-router-dom";
const Cat = (props) => {
  //   const cat_name = useParams();
  //   console.log(cat_name);
  console.log(props);
  return <div>고양이🐈 화면 입니다!</div>;
};

//컴포를 다른 곳에서 불러쓸 수 있도록 내보내기
export default Cat;
