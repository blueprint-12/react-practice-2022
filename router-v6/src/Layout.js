import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  const goBack = () => {
    //이전 페이지로 이동
    navigate(-1);
  };

  const goArticles = () => {
    // navigate("/articles"); 해당 경로로 navigate
    navigate("/articles", { replace: true });
  };
  return (
    <div>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        Header
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시물 목록</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
