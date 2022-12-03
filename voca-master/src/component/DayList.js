import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function DayList() {
  const [days, setDays] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    //렌더링 결과가 실제 DOM에 반영된 직후에 실행되는 함수
    //그리고 컴포넌트가 사라지기 직전에도 호출된다.
    //2번째 인자인 의존성배열을 주지않으면 state가 변경될 때마다 계속 호출된다.
    fetch("http://localhost:3001/days")
      .then((res) => res.json())
      .then((data) => setDays(data));
    // console.log(days);
    return () => {};
  }, []);

  return (
    <ul className="list_day">
      {days.map((aDay) => (
        <li key={aDay.id}>
          <Link to={`/day/${aDay.day}`}>Day {aDay.day}</Link>
        </li>
      ))}
    </ul>
  );
}
