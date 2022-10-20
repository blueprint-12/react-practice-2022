import React, { useState, useEffect } from "react";

// imitation of a request to the server. just get the number asynchronously
const generateRandomNumber = () => Promise.resolve(Math.random());

const Comp = () => {
  const [num, setNum] = useState();
  const [scroll, setScroll] = useState();

  async function fetchData() {
    setNum(await generateRandomNumber());
  }
  //   useEffect(() => {
  //     // setNum(await generateRandomNumber());
  //     fetchData();

  //     window.addEventListener("scroll", () => setScroll(window.scrollY));

  //     return () => {
  //       window.removeEventListener("scroll", () => setScroll(window.scrollY));
  //     };
  //   });

  return (
    <div style={{ height: "1500px" }}>
      <div> Number: {num} </div>
      <div> Scroll: {scroll} </div>
    </div>
  );
};

export default Comp;
