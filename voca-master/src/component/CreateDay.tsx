import { useHistory } from "react-router";
import useFetch from "../hooks/useFetch";

export default function CreateDay() {
  const days = useFetch("http://localhost:3001/days");
  const history = useHistory();

  //day: days.length + 1 현재 날짜에 +1을 해준다.
  function addDay() {
    fetch(`http://localhost:3001/days/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("날짜 생성이 완료되었습니다.");
        history.push(`/`);
      }
    });
  }

  function delDay() {
    if (window.confirm(`"${days.length}일"을 삭제하시겠습니까?`)) {
      Promise.all([
        fetch(`http://localhost:3001/days/${days.length}`, {
          method: "DELETE",
        }),
        fetch(`http://localhost:3001/words?day=3`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        }),
      ]).then((res) => console.log(res));

      // if (dayRes.ok && wordRes.ok) {
      //   alert("날짜 삭제가 완료되었습니다.");
      //   history.push(`/`);
      // }
    }
  }
  return (
    <div>
      <h3>현재 일수 : {days.length}일</h3>
      <p>현재 일수를 기준으로 +1, -1day 할 수 있습니다.</p>
      <button onClick={addDay}>Day 추가</button>
      <button className="btn_del" onClick={delDay}>
        Day 삭제
      </button>
    </div>
  );
}
