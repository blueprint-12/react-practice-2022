import React from "react";
import { Navigate } from "react-router-dom";

function MyPage() {
  const isLogin = false;

  if (!isLogin) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }

  return <div>MyPage</div>;
}

export default MyPage;
