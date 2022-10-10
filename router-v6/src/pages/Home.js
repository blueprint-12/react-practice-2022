import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>가장 먼저 보이는 페이지</p>
      <Link to="/about">소개</Link>
      <br />
      <Link to="/articles"> 게시글 목록</Link>
    </>
  );
}

export default Home;
