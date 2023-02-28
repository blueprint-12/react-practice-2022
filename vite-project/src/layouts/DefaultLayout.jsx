import React from "react";
import css from "./DefaultLayout.module.scss";

console.log("css", css);
export default function DefaultLayout({ children }) {
  return (
    <>
      <header className={css.header}>
        <div>Component App</div>
        <ul>
          <li>홈</li>
          <li>컴포넌트</li>
        </ul>
      </header>
      <main className={css.main}>{children}</main>
    </>
  );
}
